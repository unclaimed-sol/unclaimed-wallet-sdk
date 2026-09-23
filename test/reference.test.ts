import { test } from "node:test";
import assert from "node:assert/strict";
import { get } from "node:http";
import { once } from "node:events";
import type { AddressInfo } from "node:net";
import { createReferenceServer } from "../examples/reference/server.mjs";
import {
  fixtureWallet,
  fixturePages,
} from "../examples/reference/fixtures.mjs";
import { render } from "../examples/reference/render.mjs";
test("reference shows protections, consent, unknown costs and escaped upstream display", () => {
  const pages = fixturePages();
  pages[0]!.data.items[0]!.asset!.symbol = "<script>bad()</script>";
  const html = render(
    { csrf: "fixture", wallet: fixtureWallet, pages },
    "fixture",
  );
  assert.ok(html.includes("Execution unavailable"));
  assert.ok(html.includes("Protections: collectible"));
  assert.ok(html.includes("0.002539280 SOL"));
  assert.ok(!html.includes("0.003489280 SOL"));
  assert.ok(html.includes("burn whatever balance"));
  assert.ok(html.includes("funding estimates unavailable"));
  assert.ok(html.includes("&lt;script&gt;"));
  assert.ok(!html.includes("<script>bad"));
});
test("loopback reference: server-only key, CSRF, host/origin gates and explicit page traversal", async () => {
  const server = createReferenceServer();
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  try {
    const start = await fetch(origin);
    assert.equal(start.headers.get("referrer-policy"), "same-origin");
    let html = await start.text();
    const cookie = start.headers.get("set-cookie")!.split(";")[0]!;
    const csrf = html.match(/name="csrf" value="([a-f0-9]+)"/)![1]!;
    const post = async (data: Record<string, string>, extra = {}) =>
      fetch(origin, {
        method: "POST",
        headers: {
          cookie,
          "content-type": "application/x-www-form-urlencoded",
          ...extra,
        },
        body: new URLSearchParams(data),
        redirect: "manual",
      });
    assert.equal((await post({ csrf: "wrong", action: "start" })).status, 403);
    assert.equal((await post({ csrf, action: "start" }, { origin: "null" })).status, 403);
    const script = await fetch(origin + "/loading.js");
    assert.equal(script.status, 200);
    assert.match(script.headers.get("content-type")!, /javascript/);
    assert.ok(start.headers.get("content-security-policy")!.includes("connect-src 'self'"));
    assert.equal(
      (
        await post(
          { csrf, action: "start" },
          { origin: "https://evil.invalid" },
        )
      ).status,
      403,
    );
    assert.equal(
      await new Promise<number>((resolve) => {
        get(origin, { headers: { host: "evil.invalid" } }, (res) => {
          res.resume();
          resolve(res.statusCode!);
        });
      }),
      403,
    );
    assert.equal(
      (await post({ csrf, action: "start", wallet: fixtureWallet, limit: "1" }))
        .status,
      303,
    );
    html = await (await fetch(origin, { headers: { cookie } })).text();
    assert.ok(html.includes("Request next page"));
    assert.ok(html.includes("0.000950000 SOL"));
    assert.ok(!html.includes("offline-fixture-only"));
    assert.ok(!html.includes("Bearer"));
    assert.equal((await post({ csrf, action: "next" })).status, 303);
    html = await (await fetch(origin, { headers: { cookie } })).text();
    assert.ok(html.includes("0.002539280 SOL"));
    assert.ok(!html.includes("Request next page"));
    assert.ok(html.includes("All pages in this snapshot loaded"));
    assert.equal(
      (await fetch(origin + "/api/v1/build", { method: "POST" })).status,
      404,
    );
  } finally {
    server.closeAllConnections();
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
});

for (const [code, sameKey] of [
  ["platform_unavailable", true],
  ["platform_failure_recorded", false],
  ["incomplete", false],
] as const) {
  test(`reference ${code}: explicit retry preserves page and uses correct key`, async () => {
    const keys: string[] = [];
    const bodies: string[] = [];
    const privateKey = "local-test-key-not-for-browser";
    const server = createReferenceServer({
      mode: "platform",
      clientOptions: {
        baseUrl: "http://127.0.0.1",
        apiKey: privateKey,
        fetch: async (_url: unknown, init: RequestInit = {}) => {
          const headers = new Headers(init.headers);
          assert.equal(headers.get("authorization"), `Bearer ${privateKey}`);
          keys.push(headers.get("idempotency-key")!);
          bodies.push(String(init.body));
          return keys.length === 1
            ? Response.json(
                {
                  requestId: "local-error",
                  error: { code, message: privateKey, retryable: true },
                },
                { status: 503, headers: { "retry-after": "0" } },
              )
            : Response.json(fixturePages()[0]);
        },
      },
    });
    server.listen(0, "127.0.0.1");
    await once(server, "listening");
    const origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
    try {
      const getPage = await fetch(origin);
      const initial = await getPage.text();
      const cookie = getPage.headers.get("set-cookie")!.split(";")[0]!;
      const csrf = initial.match(/name="csrf" value="([a-f0-9]+)"/)![1]!;
      const post = (data: Record<string, string>) =>
        fetch(origin, {
          method: "POST",
          headers: {
            cookie,
            "content-type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ csrf, ...data }),
          redirect: "manual",
        });
      assert.equal(
        (await post({ action: "start", wallet: fixtureWallet, limit: "1" }))
          .status,
        303,
      );
      const html = await (await fetch(origin, { headers: { cookie } })).text();
      assert.ok(!html.includes(privateKey));
      assert.ok(html.includes(code));
      assert.equal(keys.length, 1);
      if (sameKey) {
        assert.equal((await post({ action: "start", wallet: fixtureWallet, limit: "2" })).status, 409);
        assert.equal(keys.length, 1, "an unresolved attempt cannot be discarded");
        assert.match(html, /button disabled>Start new analysis/);
      }
      assert.ok(!html.includes("Request next page"));
      assert.equal((await post({ action: "retry" })).status, 303);
      assert.equal(keys[0] === keys[1], sameKey);
      assert.equal(bodies[0], bodies[1]);
      assert.ok(
        (await (await fetch(origin, { headers: { cookie } })).text()).includes(
          "Request next page",
        ),
      );
    } finally {
      server.closeAllConnections();
      await new Promise<void>((resolve) => server.close(() => resolve()));
    }
  });
}

for (const code of ["snapshot_expired", "cursor_mismatch"] as const) {
  test(`reference continuation ${code}: retains settings and only offers a valid action`, async () => {
    const calls: { key: string; input: Record<string, unknown> }[] = [];
    const server = createReferenceServer({ mode: "platform", clientOptions: {
      baseUrl: "http://127.0.0.1", apiKey: "offline-fixture-only",
      fetch: async (_url: unknown, init: RequestInit = {}) => {
        calls.push({ key: new Headers(init.headers).get("idempotency-key")!, input: JSON.parse(String(init.body)) });
        return calls.length === 2 ? Response.json({ requestId: "fixture-error", error: {code, message: "fixture", retryable: false} }, { status: code === "snapshot_expired" ? 410 : 422 }) : Response.json(fixturePages()[0]);
      },
    }});
    server.listen(0, "127.0.0.1");
    await once(server, "listening");
    const origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
    try {
      const first = await fetch(origin), html = await first.text();
      const cookie = first.headers.get("set-cookie")!.split(";")[0]!;
      const csrf = html.match(/name="csrf" value="([a-f0-9]+)"/)![1]!;
      const post = (data: Record<string, string>) => fetch(origin, {method:"POST", headers:{cookie, origin, "content-type":"application/x-www-form-urlencoded"}, body:new URLSearchParams({csrf,...data}), redirect:"manual"});
      await post({action:"start",wallet:fixtureWallet,limit:"1"});
      await post({action:"next"});
      const error = await (await fetch(origin,{headers:{cookie}})).text();
      assert.ok(error.includes(code));
      assert.ok(error.includes("Estimates across 1 loaded page"));
      assert.ok(!error.includes("Request next page"));
      assert.ok(!error.includes("seconds before retrying"));
      assert.equal((await post({action:"retry"})).status,400);
      if (code === "snapshot_expired") {
        assert.ok(error.includes("Restart expired snapshot with the same settings"));
        assert.equal((await post({action:"restart",wallet:"11111111111111111111111111111112",limit:"2"})).status,303);
        assert.deepEqual(calls[2]!.input,calls[0]!.input);
        assert.notEqual(calls[2]!.key,calls[1]!.key);
        assert.ok(calls[1]!.input.cursor);
        assert.equal(calls[2]!.input.cursor,undefined);
        const restarted = await (await fetch(origin,{headers:{cookie}})).text();
        assert.ok(restarted.includes("Estimates across 1 loaded page"));
        assert.ok(!restarted.includes("Estimates across 2 loaded pages"));
      } else {
        assert.equal((await post({action:"restart"})).status,400);
        assert.equal(calls.length,2);
      }
    } finally {
      server.closeAllConnections();
      await new Promise<void>(resolve=>server.close(()=>resolve()));
    }
  });
}

test("retry controls wait without disabling restart or other actions", () => {
  for (const retryAction of ["same_key", "new_key"]) {
    const waiting = render({csrf:"fixture", error:{message:"fixture",retryAction},retryAt:Date.now()+60_000},"fixture");
    assert.match(waiting, /button disabled data-retry-delay="\d+">/);
    const ready = render({csrf:"fixture",error:{message:"fixture",retryAction},retryAt:0},"fixture");
    assert.ok(!ready.includes("data-retry-delay"));
  }
  const expired = render({csrf:"fixture",error:{message:"fixture",retryAction:"restart_snapshot"},retryAt:Date.now()+60_000},"fixture");
  assert.ok(!expired.includes("data-retry-delay"));
  assert.ok(expired.includes("Restart expired snapshot"));
});
