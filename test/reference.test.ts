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
