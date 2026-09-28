import { test } from "node:test";
import assert from "node:assert/strict";
import { inspect } from "node:util";
import {
  createUnclaimedClient,
  UnclaimedApiError,
  UnclaimedInputError,
  UnclaimedProtocolError,
  UnclaimedTransportError,
  type RecordResponse,
} from "../src/index.js";
import { validateRecord } from "../src/generated/validate.js";

const wallet = "1".repeat(32);
const apiKey = "synthetic-api-key";
const session = "synthetic-session";
const receipt = "synthetic-receipt";
const key = "synthetic-build-key";
const privateDetail = "synthetic-private-detail";
const recordInput = { wallet, transactions: [{ id: "tx", status: "not_signed" as const }] };
const amount = { asset: "SOL" as const, decimals: 9 as const, baseUnits: "999999999" };
function record(outcome: RecordResponse["items"][number]["outcome"] = "abandoned_unknown"): RecordResponse {
  const terminal = !["pending", "unknown"].includes(outcome);
  return {
    requestId: "record", receiptId: "receipt-id", terminal,
    transactions: [{ id: "tx", outcome: terminal ? "abandoned_unknown" : "pending", signature: null, landedSlot: null }],
    items: [{ id: "item", transactionId: "tx", outcome, creditPurpose: null, creditState: null }],
  };
}
function client(fetch: typeof globalThis.fetch) {
  return createUnclaimedClient({ baseUrl: "https://synthetic.invalid", apiKey, fetch });
}
const methods = ["checkWallet", "build", "recordExecution"] as const;
type Method = typeof methods[number];
function invoke(sdk: ReturnType<typeof client>, method: Method, input?: any) {
  if (method === "checkWallet") return sdk.checkWallet(input, { idempotencyKey: key });
  if (method === "build") return sdk.build(input, session, { idempotencyKey: key });
  return sdk.recordExecution(input, receipt);
}
function inputFor(method: Method) {
  return method === "recordExecution" ? structuredClone(recordInput)
    : method === "build" ? { wallet, items: [{ id: "item", action: "recover_excess_lamports" }] }
      : { wallet };
}
function assertSanitized(error: unknown) {
  for (const secret of [privateDetail, apiKey, session, receipt, key, wallet, "https://synthetic.invalid"])
    assert.ok(!inspect(error, { showHidden: true }).includes(secret));
}

for (const method of methods) {
  test(`${method}: unserializable caller data is a local input error before transport`, async () => {
    let calls = 0;
    const sdk = client(async () => { calls++; throw Error(privateDetail); });
    const circular: any = inputFor(method);
    circular.circular = circular;
    for (const input of [circular, { ...inputFor(method), value: 1n }, {
      toJSON() { throw Error(privateDetail); },
    }, undefined, { toJSON() { return undefined; } }]) {
      await assert.rejects(invoke(sdk, method, input), error => {
        assert.ok(error instanceof UnclaimedInputError);
        assert.ok(!("retryAction" in error));
        assertSanitized(error);
        return true;
      });
    }
    assert.equal(calls, 0);
  });

  test(`${method}: unknown outcomes carry the operation's retry guidance without retrying`, async () => {
    const cases = [
      { run: async () => { throw Error(privateDetail); }, type: UnclaimedTransportError },
      { run: async () => new Response(new ReadableStream({ start(c) { c.error(Error(privateDetail)); } }),
        { headers: { "content-type": "application/json" } }), type: UnclaimedTransportError },
      { run: async () => new Response("proxy error"), type: UnclaimedProtocolError },
      { run: async () => new Response(null, { headers: { "content-type": "application/json" } }), type: UnclaimedProtocolError },
      { run: async () => new Response("{", { headers: { "content-type": "application/json" } }), type: UnclaimedProtocolError },
      { run: async () => new Response(" ".repeat(2 * 1024 * 1024 + 1), { headers: { "content-type": "application/json" } }), type: UnclaimedProtocolError },
      { run: async () => Response.json({}), type: UnclaimedProtocolError },
      { run: async () => Response.json({}, { status: 503 }), type: UnclaimedProtocolError },
    ];
    for (const { run, type } of cases) {
      let calls = 0;
      const sdk = client(async () => { calls++; return run(); });
      await assert.rejects(invoke(sdk, method, inputFor(method)), error => {
        assert.ok(error instanceof type);
        assert.equal(error.retryAction, method === "recordExecution" ? "same_receipt" : "same_key");
        assert.match(error.message, method === "recordExecution" ? /record.*response/i : method === "build" ? /build.*response/i : /analysis.*response/i);
        if (method === "recordExecution") assert.doesNotMatch(error.message, /analysis|idempotency/i);
        assertSanitized(error);
        return true;
      });
      assert.equal(calls, 1);
    }
  });
}

test("record status contradictions and API refusals preserve receipt guidance", async () => {
  for (const response of [Response.json(record(), { status: 202 }), Response.json(record("pending"))]) {
    await assert.rejects(client(async () => response).recordExecution(recordInput, receipt), error =>
      error instanceof UnclaimedProtocolError && error.retryAction === "same_receipt");
  }
  await assert.rejects(client(async () => Response.json({ requestId: "refusal", error: {
    code: "platform_unavailable", message: privateDetail, retryable: true,
  } }, { status: 503 })).recordExecution(recordInput, receipt), error => {
    assert.ok(error instanceof UnclaimedApiError);
    assert.equal(error.retryAction, "same_receipt");
    assert.match(error.message, /record refused/);
    assertSanitized(error);
    return true;
  });
});

test("a caller-directed record retry retains the exact receipt and transaction data", async () => {
  const requests: { body: BodyInit | null | undefined; headers: [string, string][] }[] = [];
  const sdk = client(async (_url, init) => {
    const headers = new Headers(init?.headers);
    assert.equal(headers.get("authorization"), null);
    assert.equal(headers.get("idempotency-key"), null);
    assert.equal(headers.get("x-unclaimed-execution-receipt"), receipt);
    requests.push({ body: init?.body, headers: [...headers] });
    if (requests.length === 1) throw Error(privateDetail);
    return Response.json(record());
  });
  await assert.rejects(sdk.recordExecution(recordInput, receipt), error =>
    error instanceof UnclaimedTransportError && error.retryAction === "same_receipt");
  assert.equal(requests.length, 1);
  assert.deepEqual(await sdk.recordExecution(recordInput, receipt), record());
  assert.equal(requests.length, 2);
  assert.deepEqual(requests[0], requests[1]);
});

test("record lease contention exposes Retry-After and preserves a caller-directed duplicate replay", async () => {
  const requests: { body: BodyInit | null | undefined; receipt: string | null }[] = [];
  const input = {wallet,transactions:[{id:"tx",status:"submitted" as const,signature:"3".repeat(64)}]};
  const duplicate = record("verified_applied");
  duplicate.transactions[0]!.outcome = "duplicate";
  duplicate.transactions[0]!.signature = input.transactions[0]!.signature;
  Object.assign(duplicate.items[0]!, { recovered: amount, serviceFee: amount, burnedBaseUnits: "0" });
  const sdk = client(async (_url, init) => {
    requests.push({body:init?.body,receipt:new Headers(init?.headers).get("x-unclaimed-execution-receipt")});
    if (requests.length === 1) return Response.json({requestId:"busy",error:{code:"request_in_progress",message:privateDetail,retryable:true}}, {status:409,headers:{"Retry-After":"1"}});
    return Response.json(duplicate);
  });
  await assert.rejects(sdk.recordExecution(input, receipt), error => {
    assert.ok(error instanceof UnclaimedApiError);
    assert.equal(error.status,409);assert.equal(error.retryAction,"same_receipt");assert.equal(error.retryAfterMs,1000);
    assertSanitized(error);return true;
  });
  assert.equal(requests.length,1);
  assert.deepEqual(await sdk.recordExecution(input, receipt),duplicate);
  assert.deepEqual(requests[0],requests[1]);
});

test("generated record validation permits value only for verified_applied items", async () => {
  for (const outcome of ["verified_not_applied", "verified_failed", "pending", "unknown", "abandoned_unknown"] as const) {
    const valid = record(outcome);
    assert.equal(validateRecord(valid), true);
    assert.deepEqual(await client(async () => Response.json(valid, { status: valid.terminal ? 200 : 202 }))
      .recordExecution(recordInput, receipt), valid);
    for (const [field, value] of Object.entries({ recovered: amount, serviceFee: amount, burnedBaseUnits: "0" })) {
      const invalid = structuredClone(valid);
      Object.assign(invalid.items[0]!, { [field]: value });
      assert.equal(validateRecord(invalid), false, `${outcome} with ${field}`);
      await assert.rejects(client(async () => Response.json(invalid, { status: invalid.terminal ? 200 : 202 }))
        .recordExecution(recordInput, receipt), error =>
        error instanceof UnclaimedProtocolError && error.retryAction === "same_receipt");
    }
  }
  const applied = record("verified_applied");
  applied.transactions[0]!.outcome = "verified_success";
  for (const fields of [{}, { recovered: amount, serviceFee: amount, burnedBaseUnits: "0" }]) {
    Object.assign(applied.items[0]!, fields);
    assert.equal(validateRecord(applied), true);
    assert.deepEqual(await client(async () => Response.json(applied)).recordExecution(recordInput, receipt), applied);
  }
});
