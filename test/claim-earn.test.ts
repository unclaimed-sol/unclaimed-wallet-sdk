import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createPartnerConsent } from '../src/attribution.js';
import { createExecutionJournal, fileJournal } from '../examples/reference/journal.mjs';

test('canonical shared v2 fixture and binding changes', async () => {
  const fixture = JSON.parse(await readFile(new URL('../docs/fixtures/claim-earn-v2.json', import.meta.url), 'utf8'));
  assert.deepEqual(createPartnerConsent(fixture.input), { message: fixture.message, proof: fixture.proof });
  for (const changes of [{ idempotencyKey: 'other' }, { items: [...fixture.input.items].reverse() }, { sessionId: 'other' }]) {
    assert.notEqual(createPartnerConsent({ ...fixture.input, ...changes }).proof.selectedBuildDigest, fixture.proof.selectedBuildDigest);
  }
  assert.throws(() => createPartnerConsent({ ...fixture.input, origin: 'https://example.invalid/' }));
  assert.equal(createPartnerConsent({ ...fixture.input, origin: null }).message.includes('Origin: (none)'), true);
});

test('disk restart and lost submission response keep exact bytes; credit repair remains reachable', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'sdk-journal-'));
  let sends = 0, builds = 0, records = 0;
  const store = fileJournal(directory);
  const client = { build: async () => { builds++; return { executionReceipt: { token: 'receipt' }, transactions: [{ id: 'tx', lastValidBlockHeight: '100' }] }; },
    recordExecution: async () => { records++; return { terminal: records > 1, recoveryTerminal: true, partnerCredit: { status: records > 1 ? 'applied' : 'pending' } }; } };
  const options = { client, store, validateSigned: async () => 'synthetic-signature', getBlockHeight: async () => 99,
    submit: async () => { sends++; throw Object.assign(Error('lost response'), { submissionUnknown: true }); } };
  const first = createExecutionJournal(options);
  const journal = await first.prepare({ input: { wallet: 'fixture', items: [] }, session: { token: 'session' }, buildKey: 'same-key' });
  await first.acceptSigned(journal.id, 'exact-bytes');
  const second = createExecutionJournal({ ...options, store: fileJournal(directory) });
  const resumed = await second.reconcile(journal.id);
  assert.equal(resumed.transactions[0].signedTransaction, 'exact-bytes');
  assert.equal(resumed.transactions[0].submission, 'unknown');
  assert.equal(resumed.record.partnerCredit.status, 'applied');
  await second.reconcile(journal.id);
  assert.equal(sends, 1); assert.equal(builds, 1); assert.equal(records, 2);
});

test('expired exact height never submits and still records', async () => {
  const store = fileJournal(await mkdtemp(join(tmpdir(), 'sdk-expiry-')));
  let sends = 0;
  const service = createExecutionJournal({ store, client: { build: async () => ({ executionReceipt: { token: 'r' }, transactions: [{ id: 't', lastValidBlockHeight: '10' }] }), recordExecution: async () => ({ terminal: false }) },
    validateSigned: async () => 'sig', getBlockHeight: async () => 11, submit: async () => { sends++; } });
  const prepared = await service.prepare({ input: { wallet: 'w' }, session: { token: 's' }, buildKey: 'k' });
  await service.acceptSigned(prepared.id, 'exact'); assert.equal(sends, 0);
});

import { createReferenceServer } from '../examples/reference/server.mjs';
import { createPilotHandler } from '../examples/reference/pilot-server.mjs';
import { once } from 'node:events';
import type { AddressInfo } from 'node:net';
test('mounted pilot handler persists build identity across server restart and enforces origin', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'sdk-mounted-'));
  let builds = 0;
  const client = { build: async () => { builds++; return { executionReceipt: { token: 'receipt' }, transactions: [{ id: 't', lastValidBlockHeight: '10' }] }; } };
  const make = async () => {
    const server = createReferenceServer({ pilot: createPilotHandler({ client, directory, connection: {} }) });
    server.listen(0, '127.0.0.1'); await once(server, 'listening');
    const origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
    return { server, origin, post: (action: string, input: any) => fetch(origin + '/pilot/' + action, { method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: JSON.stringify(input) }) };
  };
  let running = await make();
  let id: string;
  try {
    const response = await running.post('prepare', { wallet: 'fixture', items: [{ id: 'item', action: 'burn_and_close' }], session: { id: 'session', token: 'token' } });
    id = (await response.json()).id;
    assert.equal((await running.post('build', { id })).status, 200);
    assert.equal((await fetch(running.origin + '/pilot/build', { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' })).status, 403);
  } finally { running.server.close(); await once(running.server, 'close'); }
  running = await make();
  try { assert.equal((await running.post('resume', { id: id! })).status, 200); assert.equal(builds, 1); }
  finally { running.server.close(); await once(running.server, 'close'); }
});

import { generateKeyPairSync, sign } from 'node:crypto';
import { validateSigned } from '../examples/reference/validate-signed.mjs';
test('exact signed wire validation rejects changed messages and wrong signatures', () => {
  const pair = generateKeyPairSync('ed25519');
  const key = pair.publicKey.export({ format: 'der', type: 'spki' }).subarray(-32);
  const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let n = BigInt('0x' + key.toString('hex')), wallet = '';
  while (n) { wallet = alphabet[Number(n % 58n)] + wallet; n /= 58n; }
  for (const b of key) { if (b) break; wallet = '1' + wallet; }
  const message = Buffer.concat([Buffer.from([1, 0, 0, 1]), key, Buffer.alloc(32), Buffer.from([0])]);
  const unsignedTransaction = Buffer.concat([Buffer.from([1]), Buffer.alloc(64), message]).toString('base64');
  const signed = Buffer.concat([Buffer.from([1]), sign(null, message, pair.privateKey), message]);
  assert.match(validateSigned(wallet, { unsignedTransaction }, signed.toString('base64')), /^[1-9A-HJ-NP-Za-km-z]+$/);
  const changed = Buffer.from(signed); changed[changed.length - 1] = changed[changed.length - 1]! ^ 1;
  assert.throws(() => validateSigned(wallet, { unsignedTransaction }, changed.toString('base64')), /message changed/);
  signed[1] = signed[1]! ^ 1;
  assert.throws(() => validateSigned(wallet, { unsignedTransaction }, signed.toString('base64')), /Invalid wallet signature/);
});

import { createSubmissionConnection } from '../examples/reference/submission-connection.mjs';
test('application submission reservations survive restart and unknown dispatch without refunds', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'sdk-transport-'));
  let wires = 0;
  const options = { directory, endpoint: 'https://example.invalid', maxSubmissions: 1, maxHeightReads: 1,
    fetch: async () => { wires++; throw Error('lost response'); } };
  const first = await createSubmissionConnection(options);
  await assert.rejects(first.sendRawTransaction(Buffer.from('fixture')));
  const restarted = await createSubmissionConnection(options);
  await assert.rejects(restarted.sendRawTransaction(Buffer.from('fixture')));
  assert.equal(wires, 1);
});

test('shared application budget lock prevents concurrent connections spending one allowance twice', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'sdk-shared-'));
  let wires = 0;
  const options = { directory, endpoint: 'https://example.invalid', maxSubmissions: 1, maxHeightReads: 0,
    fetch: async () => { wires++; return new Response(JSON.stringify({ jsonrpc: '2.0', id: 1, result: 'synthetic' })); } };
  const a = await createSubmissionConnection(options), b = await createSubmissionConnection(options);
  const outcomes = await Promise.allSettled([a.sendRawTransaction(Buffer.from('fixture')), b.sendRawTransaction(Buffer.from('fixture'))]);
  assert.equal(outcomes.filter(r => r.status === 'fulfilled').length, 1); assert.equal(wires, 1);
});
