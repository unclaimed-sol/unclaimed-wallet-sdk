import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { once } from 'node:events';
import type { AddressInfo } from 'node:net';
import { createContext, runInContext } from 'node:vm';
import { createExecutionJournal, fileJournal } from '../examples/reference/journal.mjs';
import { createPilotHandler } from '../examples/reference/pilot-server.mjs';
import { createReferenceServer } from '../examples/reference/server.mjs';

async function fixture(heights: Array<number | Error>, failRecord = false) {
  const directory = await mkdtemp(join(tmpdir(), 'sdk-reference-expiry-'));
  const store = fileJournal(directory);
  const calls = { heights: 0, builds: 0, sends: 0, records: 0 };
  const options = { store,
    client: {
      build: async () => { calls.builds++; return { executionReceipt: { token: 'synthetic-receipt' },
        transactions: [{ id: 'synthetic-tx', lastValidBlockHeight: '100', unsignedTransaction: 'AA==' }] }; },
      recordExecution: async () => {
        calls.records++;
        if (failRecord) throw Error('Synthetic record failure');
        return { terminal: false, recoveryTerminal: false, partnerCredit: { status: 'pending' },
          transactions: [{ id: 'synthetic-tx', outcome: 'unknown' }] };
      },
    },
    getBlockHeight: async () => {
      calls.heights++;
      const height = heights.shift();
      if (height instanceof Error) throw height;
      if (height === undefined) throw Error('No remaining synthetic height allowance');
      return height;
    },
    validateSigned: () => 'synthetic-signature',
    submit: async () => { calls.sends++; },
  };
  const execution = createExecutionJournal(options);
  const journal = await execution.prepare({ input: { wallet: 'synthetic-wallet' },
    session: { token: 'synthetic-session' }, buildKey: 'retained-build-key' });
  return { directory, store, calls, options, execution, journal };
}

test('pre-sign expiry persists across restart without signing, recording, replacement or more height reads', async () => {
  const f = await fixture([101]);
  assert.equal((await f.execution.checkSigning(f.journal.id)).status, 'expired');
  const restarted = createExecutionJournal({ ...f.options, store: fileJournal(f.directory) });
  assert.equal((await restarted.checkSigning(f.journal.id)).status, 'expired');
  assert.deepEqual(f.calls, { heights: 1, builds: 1, sends: 0, records: 0 });
  const saved = await f.store.load(f.journal.id);
  assert.equal(saved.signingCheck.currentBlockHeight, '101');
  assert.deepEqual(saved.transactions, []);
  assert.equal(saved.buildKey, 'retained-build-key');
  assert.equal((await f.store.findOpen('synthetic-wallet')).id, saved.id);
});

test('height failure prevents prompting; a successful pre-sign check is never reused as the post-sign check', async () => {
  const f = await fixture([Error('private provider detail'), 99, 100, 101]);
  assert.deepEqual(await f.execution.checkSigning(f.journal.id), { status: 'unavailable' });
  assert.equal((await f.execution.checkSigning(f.journal.id)).status, 'ready');
  assert.equal((await f.execution.checkSigning(f.journal.id)).status, 'ready');
  const result = await f.execution.acceptSigned(f.journal.id, 'exact-synthetic-signed-bytes');
  assert.equal(result.transactions[0].submissionStopped, 'blockhash_expired');
  assert.equal(result.transactions[0].observedBlockHeight, '101');
  assert.equal(result.transactions[0].submission, 'not_attempted');
  assert.equal(result.record.terminal, false);
  assert.equal(result.record.partnerCredit.status, 'pending');
  assert.deepEqual(f.calls, { heights: 4, builds: 1, sends: 0, records: 1 });
  assert.deepEqual(await f.execution.checkSigning(f.journal.id), { status: 'reconciliation_required' });
  assert.equal(f.calls.heights, 4);
});

test('expiry evidence survives a failed record response and disk restart without dropping the signature', async () => {
  const f = await fixture([101], true);
  await assert.rejects(f.execution.acceptSigned(f.journal.id, 'exact-synthetic-signed-bytes'), /Synthetic record failure/);
  const saved = await fileJournal(f.directory).load(f.journal.id);
  assert.equal(saved.transactions[0].signedTransaction, 'exact-synthetic-signed-bytes');
  assert.equal(saved.transactions[0].signature, 'synthetic-signature');
  assert.equal(saved.transactions[0].lastValidBlockHeight, '100');
  assert.equal(saved.transactions[0].observedBlockHeight, '101');
  assert.equal(saved.transactions[0].submissionStopped, 'blockhash_expired');
  assert.equal(saved.record, undefined);
  assert.equal(f.calls.sends, 0);
  await assert.rejects(f.execution.decline(f.journal.id), /Signed work requires reconciliation/);
});

test('the mounted freshness endpoint uses the configured bounded connection and requires the same origin', async () => {
  const f = await fixture([99]);
  const server = createReferenceServer({ pilot: createPilotHandler({ directory: f.directory, client: f.options.client,
    connection: { getBlockHeight: async (commitment: string) => { assert.equal(commitment, 'confirmed'); return f.options.getBlockHeight(); } } }) });
  server.listen(0, '127.0.0.1'); await once(server, 'listening');
  const origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  const post = (source: string) => fetch(origin + '/pilot/check-signing', { method: 'POST',
    headers: { origin: source, 'content-type': 'application/json' }, body: JSON.stringify({ id: f.journal.id }) });
  try {
    assert.equal((await post('https://example.invalid')).status, 403);
    assert.equal(f.calls.heights, 0);
    const response = await post(origin);
    assert.equal(response.status, 200);
    assert.equal((await response.json()).status, 'ready');
    assert.deepEqual(f.calls, { heights: 1, builds: 1, sends: 0, records: 0 });
  } finally { server.closeAllConnections(); await new Promise<void>(resolve => server.close(() => resolve())); }
});

async function browser(freshness: any, result?: any) {
  const source = await readFile(new URL('../examples/reference/pilot-browser.js', import.meta.url), 'utf8');
  const elements = new Map<string, any>();
  const element = (id: string) => {
    if (!elements.has(id)) elements.set(id, { checked: true, disabled: false, textContent: '' });
    return elements.get(id);
  };
  const events: string[] = [];
  const context = createContext({
    document: { getElementById: element }, window: { addEventListener() {}, dispatchEvent() {} }, CustomEvent: class {},
    atob: (s: string) => Buffer.from(s, 'base64').toString('binary'), btoa: (s: string) => Buffer.from(s, 'binary').toString('base64'),
    fetch: async (url: string) => { events.push(url); return Response.json(url.endsWith('/check-signing') ? freshness : result); },
    syntheticWallet: { features: { 'solana:signTransaction': { signTransaction: async () => {
      events.push('wallet-prompt'); return [{ signedTransaction: Uint8Array.of(1) }];
    } } } },
  });
  runInContext(source + `\nwallet = syntheticWallet; account = { address: 'synthetic-wallet' };
    journal = { id: 'synthetic-journal', input: { wallet: account.address }, transactions: [],
      build: { transactions: [{ id: 'synthetic-tx', lastValidBlockHeight: '100', unsignedTransaction: 'AA==' }] } };`, context);
  return { events, element, context };
}

for (const status of ['expired', 'unavailable', 'reconciliation_required']) {
  test(`browser ${status} check stops before the wallet prompt and restores controls`, async () => {
    const f = await browser({ status });
    await f.element('sign').onclick();
    assert.deepEqual(f.events, ['/pilot/check-signing']);
    assert.equal(f.element('sign').disabled, false);
    assert.match(f.element('status').textContent, status === 'expired' ? /expired before signing/ : status === 'unavailable' ? /Could not check/ : /reconciliation/);
  });
}

test('browser checks before prompting, rejects duplicate clicks and explains post-sign expiry independently of pending credit', async () => {
  const f = await browser({ status: 'ready', transactionId: 'synthetic-tx', lastValidBlockHeight: '100' }, {
    build: { items: [], plan: {}, warnings: [] }, input: { wallet: 'synthetic-wallet' },
    transactions: [{ id: 'synthetic-tx', signature: 'synthetic-signature', signedTransaction: 'private-bytes',
      submission: 'not_attempted', submissionStopped: 'blockhash_expired', observedBlockHeight: '101' }],
    record: { terminal: false, partnerCredit: { status: 'pending' } },
  });
  await Promise.all([f.element('sign').onclick(), f.element('sign').onclick(), f.element('decline').onclick()]);
  assert.deepEqual(f.events, ['/pilot/check-signing', 'wallet-prompt', '/pilot/signed']);
  assert.match(f.element('status').textContent, /expired before submission/);
  assert.match(f.element('result').textContent, /blockhash_expired/);
  assert.match(f.element('result').textContent, /pending/);
  assert.ok(!f.element('result').textContent.includes('private-bytes'));
  assert.equal(f.element('sign').disabled, false);
  f.element('reviewed').checked = true;
  await f.element('sign').onclick();
  assert.equal(f.events.length, 3, 'signed retained work cannot prompt again');
});

test('legacy not-attempted journal display never invents expiry or chain success', async () => {
  const f = await browser({});
  runInContext("show({ build: {}, transactions: [{ id: 't', signature: 'old-signature', submission: 'not_attempted' }], record: { terminal: false } })", f.context);
  assert.match(f.element('status').textContent, /has not attempted submission/);
  assert.ok(!f.element('status').textContent.includes('expired'));
  assert.deepEqual(f.events, []);
});
