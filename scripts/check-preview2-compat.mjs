/** Offline compatibility probe against the exact public preview.2 source. */
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';
import { validateBuild as currentBuild, validateRecord as currentRecord } from '../src/generated/validate.js';
const revision = '231330066f3290dd1fa050d0b3428e4c1c567c9a';
const directory = await mkdtemp(join(tmpdir(), 'unclaimed-preview2-compat-'));
await writeFile(join(directory, 'package.json'), '{"type":"module"}');
const files = execFileSync('git', ['ls-tree', '-r', '--name-only', revision, 'src'], { encoding: 'utf8' }).trim().split('\n');
for (const file of files) {
  if (file.endsWith('.d.ts') || !/\.(ts|js)$/.test(file)) continue;
  const source = execFileSync('git', ['show', `${revision}:${file}`], { encoding: 'utf8', maxBuffer: 2 * 1024 * 1024 });
  const target = join(directory, file.replace(/\.ts$/, '.js'));
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, file.endsWith('.js') ? source : ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 } }).outputText);
}
const { createUnclaimedClient, SDK_VERSION } = await import(pathToFileURL(join(directory, 'src/index.js')).href);
const { validateBuild, validateRecord } = await import(pathToFileURL(join(directory, 'src/generated/validate.js')).href);
assert.equal(SDK_VERSION, '0.1.0-preview.2');
const amount = { asset: 'SOL', decimals: 9, baseUnits: '1' };
const costs = scope => ({ scope, oneTimeSetup: amount, estimatedNetworkFee: amount, nativeFundingRequired: amount });
const build = {
  requestId: 'synthetic-build', analysisRequestId: 'synthetic-analysis', apiVersion: 'v1-preview',
  analysisRulesetVersion: 'synthetic', rulesetVersion: 'synthetic', builtAt: '2026-09-29T12:00:00.000Z',
  transactions: [{ id: 'tx', itemIds: ['item'], format: 'solana_legacy_base64', submission: 'direct_solana', unsignedTransaction: 'AA==', lastValidBlockHeight: '1', estimatedNetworkFee: amount }],
  items: [{ id: 'item', status: 'built', authoritativeOpportunity: { action: 'burn_and_close', reviewRequired: true,
    consent: 'Synthetic later-deposit burn disclosure.', reviewedBalanceBaseUnits: '0',
    valueComponents: [{ source: 'token_account_close', gross: amount, serviceFee: amount, netAfterServiceFee: amount }],
    costs: { scope: 'item_attributable', oneTimeSetup: amount }, estimatedNetValueUsd: null } }],
  plan: { transactionCount: 1, estimatedTotalTransactionCount: 1, currentStageCosts: costs('current_stage_total'), costs: costs('plan_total'), estimatedNetValueUsd: null, valuation: null },
  executionReceipt: { token: 'synthetic-receipt', expiresAt: '2026-10-06T12:00:00.000Z', partnerAttribution: false }, warnings: [],
};
const historical = { requestId: 'synthetic-record', receiptId: 'synthetic-receipt-id', terminal: true,
  transactions: [{ id: 'tx', outcome: 'verified_success', signature: '3'.repeat(64), landedSlot: 1 }],
  items: [{ id: 'item', transactionId: 'tx', outcome: 'verified_applied', creditPurpose: 'api_execution', creditState: 'published', recovered: amount, serviceFee: amount, burnedBaseUnits: '0' }] };
const ordinary = { ...structuredClone(historical), recoveryTerminal: true, partnerCredit: { status: 'not_requested' } };
const pending = { ...structuredClone(ordinary), terminal: false, recoveryTerminal: false,
  transactions: [{ id: 'tx', outcome: 'pending', signature: '3'.repeat(64), landedSlot: null }],
  items: [{ id: 'item', transactionId: 'tx', outcome: 'pending', creditPurpose: null, creditState: null }] };
const sdk = value => createUnclaimedClient({ baseUrl: 'https://example.invalid', apiKey: 'offline-fixture', fetch: async () => Response.json(value, { status: value.terminal === false ? 202 : 200 }) });
assert.equal(currentBuild(build), true, JSON.stringify(currentBuild.errors));
assert.equal(validateBuild(build), true, JSON.stringify(validateBuild.errors));
assert.deepEqual(await sdk(build).build({ wallet: '1'.repeat(32), items: [{ id: 'item', action: 'burn_and_close' }] }, 'synthetic-session', { idempotencyKey: 'synthetic-key' }), build);
for (const response of [historical, ordinary, pending]) {
  assert.equal(currentRecord(response), true, JSON.stringify(currentRecord.errors));
  assert.equal(validateRecord(response), true, JSON.stringify(validateRecord.errors));
  assert.deepEqual(await sdk(response).recordExecution({ wallet: '1'.repeat(32), transactions: [{ id: 'tx', status: 'submitted', signature: '3'.repeat(64) }] }, 'synthetic-receipt'), response);
}
const attributed = structuredClone(build); attributed.executionReceipt.partnerAttribution = true;
assert.equal(validateBuild(attributed), false, 'preview.2 still refuses attribution as expected');
console.log(`preview.2 ${revision}: ordinary build, historical record, new ordinary terminal/pending records pass original generated validators and SDK; attribution remains rejected. No network calls.`);
