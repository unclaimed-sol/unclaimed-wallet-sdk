import type {
  CheckWalletRequest,
  CheckWalletResponse,
  ErrorEnvelope,
} from "./types.js";
import { validateResponse, validateError } from "./generated/validate.js";
import {
  UnclaimedApiError,
  UnclaimedInputError,
  UnclaimedProtocolError,
  UnclaimedTransportError,
} from "./errors.js";
export const SDK_VERSION = "0.1.0-preview.1";
export interface ClientOptions {
  /** Operator-provided origin only. HTTPS required except literal local loopback. */
  baseUrl: string;
  /** Server-side only. Never embed a customer key in a browser bundle. */
  apiKey: string;
  fetch?: typeof globalThis.fetch;
  timeoutMs?: number;
}
export interface RequestOptions {
  /** One explicit key per deliberate attempt; retain it for lost-response retries. */
  idempotencyKey: string;
  signal?: AbortSignal;
}
const MAX_RESPONSE_BYTES = 2 * 1024 * 1024;
function retryAfter(value: string | null): number | null {
  if (value === null) return null;
  if (/^\d+$/.test(value)) {
    const ms = Number(value) * 1000;
    return Number.isSafeInteger(ms) ? ms : null;
  }
  const time = Date.parse(value);
  return Number.isFinite(time) ? Math.max(0, time - Date.now()) : null;
}
async function json(response: Response): Promise<unknown> {
  if (
    !response.headers
      .get("content-type")
      ?.toLowerCase()
      .includes("application/json") ||
    !response.body
  ) {
    await response.body?.cancel().catch(() => {});
    throw new UnclaimedProtocolError();
  }
  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let bytes = 0;
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      bytes += chunk.value.length;
      if (bytes > MAX_RESPONSE_BYTES) throw new UnclaimedProtocolError();
      chunks.push(chunk.value);
    }
  } finally {
    await reader.cancel().catch(() => {});
    reader.releaseLock();
  }
  const buffer = new Uint8Array(bytes);
  let offset = 0;
  for (const chunk of chunks) {
    buffer.set(chunk, offset);
    offset += chunk.length;
  }
  try {
    return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(buffer));
  } catch {
    throw new UnclaimedProtocolError();
  }
}
/** Exactly one HTTP request per invocation. No hidden retries or page purchases. */
export function createUnclaimedClient(options: ClientOptions) {
  let origin: URL;
  try {
    origin = new URL(options.baseUrl);
  } catch {
    throw new UnclaimedInputError("A valid platform origin is required.");
  }
  if (
    origin.username ||
    origin.password ||
    origin.search ||
    origin.hash ||
    origin.pathname !== "/" ||
    !(
      origin.protocol === "https:" ||
      (origin.protocol === "http:" &&
        ["127.0.0.1", "[::1]"].includes(origin.hostname))
    )
  )
    throw new UnclaimedInputError(
      "Use an HTTPS platform origin, or HTTP literal loopback for local tests.",
    );
  if (
    typeof options.apiKey !== "string" ||
    !/^[\x21-\x7e]+$/.test(options.apiKey)
  )
    throw new UnclaimedInputError("A server-side API key is required.");
  const timeoutMs = options.timeoutMs ?? 35_000;
  if (!Number.isInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > 120_000)
    throw new UnclaimedInputError("timeoutMs must be between 1 and 120000.");
  const fetcher = options.fetch ?? globalThis.fetch;
  const apiKey = options.apiKey;
  const endpoint = new URL("/api/v1/check-wallet", origin).href;
  async function checkWallet(
    input: CheckWalletRequest,
    request: RequestOptions,
  ): Promise<CheckWalletResponse> {
    if (
      !request ||
      typeof request.idempotencyKey !== "string" ||
      !/^[!-~]{1,128}$/.test(request.idempotencyKey)
    )
      throw new UnclaimedInputError(
        "An explicit printable idempotency key of 1–128 characters is required.",
      );
    let body: string;
    try {
      body = JSON.stringify(input);
    } catch {
      throw new UnclaimedInputError(
        "Analysis input must be JSON serializable.",
      );
    }
    const signal = AbortSignal.any([
      AbortSignal.timeout(timeoutMs),
      ...(request.signal ? [request.signal] : []),
    ]);
    try {
      const response = await fetcher(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
          "Idempotency-Key": request.idempotencyKey,
          "X-Unclaimed-SDK-Version": SDK_VERSION,
        },
        body,
        signal,
        redirect: "error",
        cache: "no-store",
        credentials: "omit",
      });
      const payload = await json(response);
      if (response.status !== 200) {
        if (!validateError(payload)) throw new UnclaimedProtocolError();
        throw new UnclaimedApiError(
          response.status,
          payload as ErrorEnvelope,
          retryAfter(response.headers.get("retry-after")),
        );
      }
      if (!validateResponse(payload)) throw new UnclaimedProtocolError();
      const page = payload as CheckWalletResponse;
      if (
        page.data.wallet !== input.wallet ||
        page.data.pagination.hasMore !==
          (page.data.pagination.nextCursor !== null) ||
        (page.data.pagination.nextCursor !== null &&
          !/^ucur_[A-Za-z0-9_-]{43}$/.test(page.data.pagination.nextCursor)) ||
        page.data.pagination.walletModulesIncluded !== (input.cursor == null)
      )
        throw new UnclaimedProtocolError();
      return page;
    } catch (error) {
      if (
        error instanceof UnclaimedApiError ||
        error instanceof UnclaimedProtocolError
      )
        throw error;
      throw new UnclaimedTransportError();
    }
  }
  return Object.freeze({ checkWallet });
}
/** Preserve snapshot-bound settings and the opaque cursor. Caller chooses when to request it. */
export function nextWalletPage(
  input: CheckWalletRequest,
  page: CheckWalletResponse,
  limit = input.limit,
): CheckWalletRequest | null {
  if (page.data.wallet !== input.wallet)
    throw new UnclaimedInputError(
      "Page wallet does not match the original request.",
    );
  if (!page.data.pagination.hasMore) return null;
  if (!page.data.pagination.nextCursor) throw new UnclaimedProtocolError();
  return {
    ...input,
    ...(limit === undefined ? {} : { limit }),
    cursor: page.data.pagination.nextCursor,
  };
}
