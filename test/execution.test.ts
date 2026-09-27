import { test } from "node:test";
import assert from "node:assert/strict";
import { executeReviewedBuild } from "../examples/reference/execution.mjs";
function fixture() {
  const events: string[] = [];
  const journals: any[] = [];
  let reported: any;
  const options = {
    wallet: "fixture",
    items: [{ id: "item", opportunity: { action: "burn_and_close" } }],
    session: { token: "session" },
    buildKey: "key",
    client: {
      build: async () => ({
        executionReceipt: { token: "receipt" },
        transactions: [
          { id: "one", lastValidBlockHeight: "100" },
          { id: "two", lastValidBlockHeight: "100" },
        ],
      }),
      recordExecution: async (input: any) => {
        reported = input;
        events.push("record");
        return { terminal: false };
      },
    },
    review: async () => true,
    sign: async () => {
      events.push("sign");
      return { signature: "signature", signedTransaction: "exact bytes" };
    },
    submit: async () => {
      events.push("submit");
      assert.equal(
        journals.at(-1).transactions[0].signedTransaction,
        "exact bytes",
      );
      assert.equal(journals.at(-1).transactions[0].submission, "attempted");
    },
    save: async (journal: any) => {
      events.push("save");
      journals.push(structuredClone(journal));
    },
  };
  return { options, events, journals, reported: () => reported };
}
test("unknown submission persists exact work, stops later signing and reconciles receipt", async () => {
  const f = fixture();
  f.options.submit = async () => {
    throw new Error("unknown");
  };
  await executeReviewedBuild(f.options);
  assert.equal(f.events.filter((x) => x === "sign").length, 1);
  assert.equal(f.journals.at(-1).transactions[0].submission, "unknown");
  assert.equal(f.reported().transactions.length, 1);
});
test("declined authoritative review never signs or submits", async () => {
  const f = fixture();
  f.options.review = async () => false;
  await executeReviewedBuild(f.options);
  assert.ok(!f.events.includes("sign"));
  assert.ok(!f.events.includes("submit"));
  assert.deepEqual(f.reported().transactions, [
    { id: "one", status: "not_signed" },
    { id: "two", status: "not_signed" },
  ]);
});
test("signing rejection retains unsigned work for receipt reconciliation", async () => {
  const f = fixture();
  f.options.sign = async () => {
    throw new Error("declined");
  };
  await executeReviewedBuild(f.options);
  assert.ok(!f.events.includes("submit"));
  assert.equal(f.reported().transactions.length, 2);
  assert.ok(
    f.reported().transactions.every((t: any) => t.status === "not_signed"),
  );
});
test("submission never precedes durable exact signing evidence", async () => {
  const f = fixture();
  await executeReviewedBuild(f.options);
  assert.equal(f.events.filter((x) => x === "submit").length, 2);
});
