import { createServer } from "node:http";
import { randomUUID, randomBytes } from "node:crypto";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import {
  createUnclaimedClient,
  nextWalletPage,
  UnclaimedApiError,
  UnclaimedTransportError,
  UnclaimedProtocolError,
} from "../../dist/index.js";
import { fixtureFetch, fixtureWallet } from "./fixtures.mjs";
import { render } from "./render.mjs";
/** @param {{mode?: "fixture" | "platform", clientOptions?: import("../../dist/index.js").ClientOptions}} options */
export function createReferenceServer({
  mode = "fixture",
  clientOptions,
} = {}) {
  if (!["fixture", "platform"].includes(mode))
    throw Error("Invalid reference mode.");
  const sessions = new Map();
  const css = readFile(new URL("./style.css", import.meta.url));
  const handle = async (req, res) => {
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Referrer-Policy", "no-referrer");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'none'; style-src 'self'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
    );
    // Loopback-only listener plus exact Host/Origin checks; no public scan proxy.
    const expected = `127.0.0.1:${req.socket.localPort}`;
    if (
      req.headers.host !== expected ||
      (req.headers.origin && req.headers.origin !== `http://${expected}`)
    ) {
      res.writeHead(403).end("Forbidden.");
      return;
    }
    if (req.url === "/style.css" && req.method === "GET") {
      res.setHeader("Content-Type", "text/css");
      res.end(await css);
      return;
    }
    if (req.url !== "/" || !["GET", "POST"].includes(req.method)) {
      res.writeHead(404).end("Not found.");
      return;
    }
    for (const [key, s] of sessions)
      if (s.expiresAt < Date.now() && !s.busy) sessions.delete(key);
    let id = req.headers.cookie?.match(
      /(?:^|; )reference_session=([a-f0-9]{48})(?:;|$)/,
    )?.[1];
    let state = id && sessions.get(id);
    if (!state) {
      if (req.method === "POST") {
        res.writeHead(403).end("Session expired. Reload the page.");
        return;
      }
      if (sessions.size >= 10) {
        res.writeHead(429).end("Local session limit reached.");
        return;
      }
      id = randomBytes(24).toString("hex");
      state = {
        csrf: randomBytes(24).toString("hex"),
        wallet: mode === "fixture" ? fixtureWallet : "",
        limit: mode === "fixture" ? 1 : 20,
        pages: [],
        expiresAt: Date.now() + 3_600_000,
        client: createUnclaimedClient(
          mode === "fixture"
            ? {
                baseUrl: "http://127.0.0.1",
                apiKey: "offline-fixture-only",
                fetch: fixtureFetch(),
              }
            : clientOptions,
        ),
      };
      sessions.set(id, state);
      res.setHeader(
        "Set-Cookie",
        `reference_session=${id}; HttpOnly; SameSite=Strict; Path=/; Max-Age=3600`,
      );
    }
    if (req.method === "POST") {
      if (state.busy) {
        res.writeHead(409).end("Analysis already in progress.");
        return;
      }
      state.busy = true;
      try {
        if (
          req.headers["content-type"] !== "application/x-www-form-urlencoded"
        ) {
          res.writeHead(415).end("Form required.");
          return;
        }
        let text = "";
        for await (const part of req) {
          text += part.toString();
          if (Buffer.byteLength(text) > 4096) {
            res.writeHead(413).end("Form too large.");
            return;
          }
        }
        const form = new URLSearchParams(text);
        if (form.get("csrf") !== state.csrf) {
          res.writeHead(403).end("Forbidden.");
          return;
        }
        const action = form.get("action");
        if (action === "start") {
          const wallet = form.get("wallet"),
            limit = Number(form.get("limit"));
          if (
            !/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(wallet ?? "") ||
            !Number.isInteger(limit) ||
            limit < 1 ||
            limit > 200
          ) {
            res.writeHead(400).end("Invalid wallet or page size.");
            return;
          }
          state.wallet = wallet;
          state.limit = limit;
          state.pages = [];
          state.error = null;
          state.retryAt = 0;
          if (mode === "fixture")
            state.client = createUnclaimedClient({
              baseUrl: "http://127.0.0.1",
              apiKey: "offline-fixture-only",
              fetch: fixtureFetch(),
            });
          state.pending = {
            input: { wallet, limit, mode: "safe" },
            idempotencyKey: randomUUID(),
          };
        } else if (action === "next" && !state.error && state.pages.length) {
          const input = nextWalletPage(state.pending.input, state.pages.at(-1));
          if (!input) {
            res.writeHead(409).end("No next page.");
            return;
          }
          state.pending = { input, idempotencyKey: randomUUID() };
        } else if (
          action === "retry" &&
          state.pending &&
          ["same_key", "new_key"].includes(state.error?.retryAction)
        ) {
          if (Date.now() < state.retryAt) {
            res.writeHead(429).end("Wait for the retry delay.");
            return;
          }
          if (state.error.retryAction === "new_key")
            state.pending.idempotencyKey = randomUUID();
        } else {
          res.writeHead(400).end("Invalid action.");
          return;
        }
        try {
          const page = await state.client.checkWallet(state.pending.input, {
            idempotencyKey: state.pending.idempotencyKey,
          });
          if (!state.pages.some((p) => p.requestId === page.requestId))
            state.pages.push(page);
          state.error = null;
        } catch (error) {
          const known =
            error instanceof UnclaimedApiError ||
            error instanceof UnclaimedTransportError ||
            error instanceof UnclaimedProtocolError;
          state.error = {
            message: known ? error.message : "Analysis unavailable.",
            retryAction: known ? error.retryAction : "none",
          };
          state.retryAt =
            Date.now() +
            (error instanceof UnclaimedApiError
              ? (error.retryAfterMs ?? 1000)
              : 1000);
        }
      } finally {
        state.busy = false;
      }
      res.writeHead(303, { Location: "/" }).end();
      return;
    }
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(render(state, mode));
  };
  return createServer((req, res) => {
    void handle(req, res).catch(() => {
      if (res.headersSent) {
        res.destroy();
        return;
      }
      res
        .writeHead(500, { "Cache-Control": "no-store" })
        .end("Reference unavailable.");
    });
  });
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const mode = process.env.REFERENCE_MODE ?? "fixture";
  const server = createReferenceServer({
    mode,
    clientOptions:
      mode === "platform"
        ? {
            baseUrl: process.env.UNCLAIMED_API_ORIGIN,
            apiKey: process.env.UNCLAIMED_API_KEY,
          }
        : undefined,
  });
  server.listen(4317, "127.0.0.1", () =>
    console.log(
      "Reference integration: http://127.0.0.1:4317 (loopback only).",
    ),
  );
}
