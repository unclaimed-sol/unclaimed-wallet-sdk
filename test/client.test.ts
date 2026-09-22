import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import {
  createUnclaimedClient,
  nextWalletPage,
  summarizeOpportunities,
  UnclaimedApiError,
  UnclaimedTransportError,
  UnclaimedProtocolError,
  UnclaimedInputError,
} from "../src/index.js";
import type {
  CheckWalletRequest,
  CheckWalletResponse,
  ErrorCode,
} from "../src/index.js";
import {
  validateRequest,
  validateResponse,
} from "../src/generated/validate.js";
import {
  fixturePages,
  fixtureWallet,
  fixtureFetch,
} from "../examples/reference/fixtures.mjs";
const input: CheckWalletRequest = {
  wallet: fixtureWallet,
  mode: "safe",
  limit: 1,
};
const options = {
  baseUrl: "https://analysis.example.invalid",
  apiKey: "offline-fixture-only",
};
const pages = () => fixturePages() as CheckWalletResponse[];
function client(fetch: typeof globalThis.fetch) {
  return createUnclaimedClient({ ...options, fetch });
}
function refusal(
  code: ErrorCode,
  retryable: boolean,
  status = 503,
  headers = {},
) {
  return Response.json(
    {
      requestId: "fixture-error",
      error: { code, message: "Untrusted upstream text", retryable },
    },
    { status, headers },
  );
}
test("schema fixtures obey mounted conditionals and pin source provenance", () => {
  assert.equal(validateRequest(input), true);
  for (const page of pages())
    assert.equal(
      validateResponse(page),
      true,
      "Fixture must match mounted schema",
    );
  const source = readFileSync(
    new URL("../openapi/analysis.yaml", import.meta.url),
  );
  assert.equal(
    createHash("sha256").update(source).digest("hex"),
    "d14112ba5c6229bece9b582ef0114ac3bbbb5d1a6e5fc96105cb3cf38e61d867",
  );
});
test("one request, explicit headers and exact cursor/body, no redirects", async () => {
  let calls = 0;
  const sdk = client(async (url, init) => {
    calls++;
    assert.equal(url, "https://analysis.example.invalid/api/v1/check-wallet");
    assert.equal(init?.redirect, "error");
    assert.equal(init?.credentials, "omit");
    assert.equal(init?.cache, "no-store");
    const h = new Headers(init?.headers);
    assert.equal(h.get("authorization"), "Bearer offline-fixture-only");
    assert.equal(h.get("idempotency-key"), "explicit-page-1");
    assert.equal(h.get("x-unclaimed-sdk-version"), "0.1.0-preview.1");
    assert.deepEqual(JSON.parse(init?.body as string), input);
    return Response.json(pages()[0]);
  });
  await sdk.checkWallet(input, { idempotencyKey: "explicit-page-1" });
  assert.equal(calls, 1);
});
test("pagination keeps settings opaque, permits limit changes and stops explicitly", async () => {
  const sdk = client(fixtureFetch());
  const first = await sdk.checkWallet(input, { idempotencyKey: "page-1" });
  const next = nextWalletPage(input, first, 2)!;
  assert.deepEqual(next, {
    ...input,
    limit: 2,
    cursor: first.data.pagination.nextCursor,
  });
  const second = await sdk.checkWallet(next, { idempotencyKey: "page-2" });
  assert.equal(nextWalletPage(next, second), null);
  assert.equal(second.data.executionSession, null);
  assert.deepEqual(Object.keys(sdk), ["checkWallet"]);
});
test("lost response preserves exact caller key and body for explicit replay", async () => {
  const fetch = fixtureFetch();
  const requests: string[] = [];
  let calls = 0;
  const sdk = client(async (url, init) => {
    requests.push(JSON.stringify(init));
    const response = await fetch(url, init);
    if (++calls === 1) throw Error("secret transport detail");
    return response;
  });
  await assert.rejects(
    sdk.checkWallet(input, { idempotencyKey: "retained" }),
    (error) =>
      error instanceof UnclaimedTransportError &&
      error.retryAction === "same_key" &&
      !error.message.includes("secret"),
  );
  const replay = await sdk.checkWallet(input, { idempotencyKey: "retained" });
  assert.equal(replay.complete, true);
  assert.equal(requests[0], requests[1]);
  assert.equal(calls, 2);
});
for (const [code, status, retryable, action] of [
  ["unauthorized", 401, false, "none"],
  ["key_revoked", 403, false, "none"],
  ["mode_not_permitted", 403, false, "none"],
  ["mode_not_available", 422, false, "none"],
  ["idempotency_key_reused", 409, false, "none"],
  ["request_in_progress", 409, true, "same_key"],
  ["platform_unavailable", 503, true, "same_key"],
  ["snapshot_expired", 410, false, "restart_snapshot"],
  ["cursor_mismatch", 422, false, "none"],
  ["incomplete", 503, true, "new_key"],
  ["deadline_exceeded", 504, true, "new_key"],
  ["rate_limited", 429, true, "new_key"],
  ["upstream_unavailable", 503, true, "new_key"],
  ["internal_error", 500, false, "none"],
] as const)
  test(`typed ${code} retry semantics`, async () => {
    let calls = 0;
    const sdk = client(async () => {
      calls++;
      return refusal(code, retryable, status, { "retry-after": "2" });
    });
    await assert.rejects(
      sdk.checkWallet(input, { idempotencyKey: "attempt" }),
      (error) =>
        error instanceof UnclaimedApiError &&
        error.code === code &&
        error.status === status &&
        error.retryAction === action &&
        error.retryAfterMs === 2000 &&
        error.requestId === "fixture-error" &&
        !error.message.includes("Untrusted"),
    );
    assert.equal(calls, 1);
  });
test("Retry-After date and absent delay remain distinguishable", async () => {
  const future = new Date(Date.now() + 30_000).toUTCString();
  await assert.rejects(
    client(async () =>
      refusal("incomplete", true, 503, { "retry-after": future }),
    ).checkWallet(input, { idempotencyKey: "x" }),
    (e) =>
      e instanceof UnclaimedApiError &&
      e.retryAfterMs !== null &&
      e.retryAfterMs > 28_000,
  );
  await assert.rejects(
    client(async () => refusal("incomplete", true)).checkWallet(input, {
      idempotencyKey: "x",
    }),
    (e) => e instanceof UnclaimedApiError && e.retryAfterMs === null,
  );
});
test("invalid JSON and untyped proxy errors are unknown outcomes", async () => {
  for (const response of [
    new Response("proxy failure", { status: 502 }),
    new Response("{", { headers: { "content-type": "application/json" } }),
    Response.json({ error: { code: "future_error" } }, { status: 500 }),
  ])
    await assert.rejects(
      client(async () => response).checkWallet(input, { idempotencyKey: "x" }),
      UnclaimedProtocolError,
    );
});
test("response size is bounded and read failures remain unknown outcomes", async () => {
  await assert.rejects(
    client(
      async () =>
        new Response(" ".repeat(2 * 1024 * 1024 + 1), {
          headers: { "content-type": "application/json" },
        }),
    ).checkWallet(input, { idempotencyKey: "x" }),
    UnclaimedProtocolError,
  );
  await assert.rejects(
    client(
      async () =>
        new Response(
          new ReadableStream({
            start(c) {
              c.error(Error("private data"));
            },
          }),
          { headers: { "content-type": "application/json" } },
        ),
    ).checkWallet(input, { idempotencyKey: "x" }),
    UnclaimedTransportError,
  );
});
test("rejects execution, partial success, wrong wallet and malformed pagination", async () => {
  const mutations = [
    (p: any) => (p.complete = false),
    (p: any) => (p.data.executionSession = { id: "fake" }),
    (p: any) => (p.data.items[1].opportunity.executionSupported = true),
    (p: any) => (p.data.wallet = "5".repeat(32)),
    (p: any) => (p.data.pagination.nextCursor = null),
    (p: any) => (p.data.pagination.nextCursor = "bad-cursor"),
    (p: any) => (p.data.pagination.walletModulesIncluded = false),
  ];
  for (const mutate of mutations) {
    const page = pages()[0];
    mutate(page);
    await assert.rejects(
      client(async () => Response.json(page)).checkWallet(input, {
        idempotencyKey: "x",
      }),
      UnclaimedProtocolError,
    );
  }
});
test("conditional schema validation rejects inconsistent excess classification", async () => {
  const page = pages()[0]!;
  page.data.items[1]!.classification.disposition = "protected";
  await assert.rejects(
    client(async () => Response.json(page)).checkWallet(input, {
      idempotencyKey: "x",
    }),
    UnclaimedProtocolError,
  );
});
test("rejects missing/invalid idempotency keys without sending", async () => {
  const sdk = client(async () => {
    throw Error("must not call");
  });
  for (const key of ["", "has space", "a".repeat(129), "\n"])
    await assert.rejects(
      sdk.checkWallet(input, { idempotencyKey: key }),
      UnclaimedInputError,
    );
});
test("key destination is fixed and insecure/credential-bearing origins are rejected", () => {
  for (const baseUrl of [
    "http://example.com",
    "https://user:password@example.com",
    "https://example.com?key=x",
    "https://example.com/api",
    "file:///tmp/a",
  ])
    assert.throws(
      () => createUnclaimedClient({ ...options, baseUrl }),
      UnclaimedInputError,
    );
});
test("abort reaches transport; no hidden retry", async () => {
  let calls = 0;
  const controller = new AbortController();
  controller.abort();
  const sdk = client(async (_url, init) => {
    calls++;
    init?.signal?.throwIfAborted();
    throw Error("unexpected");
  });
  await assert.rejects(
    sdk.checkWallet(input, { idempotencyKey: "x", signal: controller.signal }),
    UnclaimedTransportError,
  );
  assert.equal(calls, 1);
});
test("cross-page accounting replaces excess with cleanup, order/replay independent", () => {
  const [first, second] = pages();
  assert.equal(
    summarizeOpportunities(first!.data.items).totalsByAsset[0]!.netBaseUnits,
    "950000",
  );
  for (const items of [
    [...first!.data.items, ...second!.data.items],
    [...second!.data.items, ...first!.data.items, ...second!.data.items],
  ]) {
    const total = summarizeOpportunities(items);
    assert.deepEqual(total.countedItemIds, ["fixture-cleanup"]);
    assert.equal(total.totalsByAsset[0]!.netBaseUnits, "2539280");
  }
});
test("protected cleanup does not erase independent excess, amounts stay exact above 2^53", () => {
  const [first] = pages();
  const excess = first!.data.items[1]!;
  if (excess.opportunity.action === "none") throw Error();
  excess.opportunity.valueComponents[0]!.netAfterServiceFee.baseUnits =
    "18446744073709551615";
  assert.equal(
    summarizeOpportunities(first!.data.items).totalsByAsset[0]!.netBaseUnits,
    "18446744073709551615",
  );
});
// Compile-time contract checks: the mounted surface must not grow future methods.
function typeAssertions(
  sdk: ReturnType<typeof createUnclaimedClient>,
  response: CheckWalletResponse,
) {
  // @ts-expect-error max is not mounted
  const max: CheckWalletRequest = { wallet: fixtureWallet, mode: "max" };
  const airdrops: CheckWalletRequest = {
    wallet: fixtureWallet,
    // @ts-expect-error airdrops are unavailable
    includeAirdrops: true,
  };
  // @ts-expect-error explicit key is required
  sdk.checkWallet(input);
  // @ts-expect-error no build
  sdk.build({});
  // @ts-expect-error no recording
  sdk.recordExecution({});
  const session: null = response.data.executionSession;
  for (const item of response.data.items) {
    const supported: false = item.opportunity.executionSupported;
    void supported;
  }
  void [max, airdrops, session];
}
void typeAssertions;
