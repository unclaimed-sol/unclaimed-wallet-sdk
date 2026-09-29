import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, readdir, writeFile, unlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createContext, runInContext } from 'node:vm';
import { once } from 'node:events';
import type { AddressInfo } from 'node:net';
import { fileJournal, createExecutionJournal } from '../examples/reference/journal.mjs';
import { createReferenceServer } from '../examples/reference/server.mjs';
import { createPilotHandler } from '../examples/reference/pilot-server.mjs';
import { createSubmissionConnection } from '../examples/reference/submission-connection.mjs';

const freshDir = () => mkdtemp(join(tmpdir(), 'sdk-review-'));

test('decline cannot mutate consent, unknown-build or no-transaction journals', async () => {
  const directory = await freshDir(), store = fileJournal(directory);
  let records = 0;
  const execution = createExecutionJournal({ store, client: { recordExecution: async () => { records++; return { terminal: true }; } },
    validateSigned: () => {}, submit: () => {}, getBlockHeight: () => {} });
  const id = '00000000-0000-4000-8000-000000000001';
  for (const phase of ['consent', 'building', 'no_transaction']) {
    const journal = { id, phase, input: { wallet: 'fixture' }, transactions: [],
      ...(phase === 'no_transaction' ? { build: { transactions: [], executionReceipt: null } } : {}) };
    await store.save(journal);
    const before = await readFile(join(directory, `${id}.json`), 'utf8');
    await assert.rejects(execution.decline(id), /Only reviewed builds/);
    assert.equal(await readFile(join(directory, `${id}.json`), 'utf8'), before);
  }
  assert.equal(records, 0);
  await store.save({ id, phase: 'review', input: { wallet: 'fixture' }, transactions: [],
    build: { transactions: [{ id: 'tx' }], executionReceipt: { token: 'receipt' } } });
  assert.equal((await execution.decline(id)).record.terminal, true);
  assert.equal(records, 1);
});

test('browser saved analysis rejects page changes and keeps same-cursor request/key intact', async () => {
  const source = await readFile(new URL('../examples/reference/pilot-browser.js', import.meta.url), 'utf8');
  for (const [savedCursor, requestedCursor, matches] of [[undefined, 'next', false], ['next', undefined, false], [null, undefined, true], ['next', 'next', true]] as const) {
    const pending = { wallet: 'fixture', idempotencyKey: 'retained-key', ...(savedCursor !== undefined ? { cursor: savedCursor } : {}) };
    let stored = JSON.stringify(pending), calls = 0;
    const context = createContext({
      document: { getElementById: () => ({}) }, window: { addEventListener() {}, dispatchEvent() {} },
      CustomEvent: class {},
      localStorage: { getItem: () => stored, setItem: (_key: string, value: string) => { stored = value; } },
      fetch: async (_url: string, options: RequestInit) => { calls++; assert.deepEqual(JSON.parse(options.body as string), pending); throw Error('synthetic lost response'); },
      requestedCursor,
    });
    runInContext(source + "\naccount = { address: 'fixture' };", context);
    await assert.rejects(runInContext('analyzePage(requestedCursor)', context), matches ? /synthetic lost response/ : /different page/);
    assert.equal(calls, matches ? 1 : 0);
    assert.deepEqual(JSON.parse(stored), pending);
  }
});

test('unattributed prepare rejects invalid selections without creating a blocking journal', async () => {
  const directory = await freshDir(); let builds = 0;
  const server = createReferenceServer({ pilot: createPilotHandler({ directory, connection: {},
    client: { build: async () => { builds++; } } }) });
  server.listen(0, '127.0.0.1'); await once(server, 'listening');
  const origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  const item = { id: 'item', action: 'burn_and_close' };
  const post = (items: unknown) => fetch(origin + '/pilot/prepare', { method: 'POST', headers: { origin, 'content-type': 'application/json' },
    body: JSON.stringify({ wallet: 'fixture', session: { id: 'session', token: 'token' }, items }) });
  try {
    for (const items of [undefined, null, {}, [], Array.from({ length: 11 }, (_, i) => ({ ...item, id: `item-${i}` })),
      [item, item], [null], [{ id: '', action: 'burn_and_close' }], [{ id: 42, action: 'burn_and_close' }], [{ ...item, action: 'recover_excess_lamports' }]]) {
      assert.equal((await post(items)).status, 400);
      assert.deepEqual(await readdir(directory), []);
    }
    assert.equal((await post([item])).status, 200);
    assert.equal((await readdir(directory)).length, 1);
    assert.equal(builds, 0);
  } finally { server.close(); await once(server, 'close'); }
});

test('submission transport preserves admission errors and tags only dispatched send failures', async () => {
  const directory = await freshDir(); let wires = 0;
  const options = { endpoint: 'https://example.invalid', directory, maxSubmissions: 1, maxHeightReads: 1,
    fetch: async () => { wires++; throw Error('synthetic-sensitive-upstream-detail'); } };
  const connection = await createSubmissionConnection(options);
  await writeFile(join(directory, 'submission-budget.lock'), 'fixture competing owner');
  await assert.rejects(connection.sendRawTransaction(Buffer.from('fixture')), (error: any) => error.code === 'EEXIST' && error.submissionUnknown === undefined);
  await unlink(join(directory, 'submission-budget.lock'));
  assert.equal(wires, 0);
  await assert.rejects(connection.getBlockHeight(), (error: any) => /Block-height transport unavailable/.test(error.message) && error.submissionUnknown === undefined && error.cause === undefined);
  await assert.rejects(connection.sendRawTransaction(Buffer.from('fixture')), (error: any) => /Submission transport unavailable/.test(error.message) && error.submissionUnknown === true && error.cause === undefined);
  assert.equal(wires, 2);
  await assert.rejects(connection.sendRawTransaction(Buffer.from('fixture')), (error: any) => /allowance exhausted/.test(error.message) && error.submissionUnknown === undefined);
  assert.equal(wires, 2);
  const otherDirectory = await freshDir();
  const other = await createSubmissionConnection({ ...options, directory: otherDirectory });
  await writeFile(join(otherDirectory, 'submission-budget.jsonl'), '{torn');
  await assert.rejects(other.sendRawTransaction(Buffer.from('fixture')), (error: any) => /accounting unreadable/.test(error.message) && error.submissionUnknown === undefined);
  assert.equal(wires, 2);
});

test('signed work survives untagged predispatch refusal and height failure without an unknown label or resend', async () => {
  for (const stage of ['height', 'submit']) {
    const store = fileJournal(await freshDir()); let sends = 0, records = 0;
    const execution = createExecutionJournal({ store, client: {
      build: async () => ({ executionReceipt: { token: 'receipt' }, transactions: [{ id: 'tx', lastValidBlockHeight: '100' }] }),
      recordExecution: async () => { records++; return { terminal: false }; },
    }, validateSigned: () => 'synthetic-signature',
    getBlockHeight: async () => { if (stage === 'height') throw Error('Block-height unavailable'); return 99; },
    submit: async () => { sends++; throw Error('Submission transport allowance exhausted.'); } });
    const journal = await execution.prepare({ input: { wallet: 'fixture' }, session: { token: 'session' }, buildKey: 'retained-key' });
    await assert.rejects(execution.acceptSigned(journal.id, 'exact-signed-bytes'), stage === 'height' ? /Block-height unavailable/ : /allowance exhausted/);
    const retained = await store.load(journal.id);
    assert.equal(retained.transactions[0].signedTransaction, 'exact-signed-bytes');
    assert.equal(retained.transactions[0].submission, stage === 'height' ? 'not_attempted' : 'attempted');
    assert.equal(records, 0);
    await execution.reconcile(journal.id);
    assert.equal(records, 1); assert.equal(sends, stage === 'height' ? 0 : 1);
  }
});
