import { readFile, mkdir, open, unlink } from 'node:fs/promises';
import { join } from 'node:path';

/** Application-owned, single-process, append-only reservation-before-dispatch transport.
 * Every line is consumed allowance even after a timeout/crash. Never truncate this file.
 */
export async function createSubmissionConnection({ endpoint, directory, maxSubmissions, maxHeightReads, fetch: fetchImpl = fetch }) {
  const url = new URL(endpoint);
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && ['127.0.0.1', 'localhost', '[::1]'].includes(url.hostname))) throw Error('Invalid submission provider.');
  for (const value of [maxSubmissions, maxHeightReads]) if (!Number.isSafeInteger(value) || value < 0) throw Error('Explicit numerical submission allowances required.');
  await mkdir(directory, { recursive: true, mode: 0o700 });
  const path = join(directory, 'submission-budget.jsonl');
  async function readCounts() {
    const used = { sendTransaction: 0, getBlockHeight: 0 };
    try {
      const contents = await readFile(path, 'utf8');
      if (contents && !contents.endsWith('\n')) throw Error('Torn reservation.');
      for (const line of contents.split('\n').filter(Boolean)) {
        const entry = JSON.parse(line);
        if (!Object.hasOwn(used, entry.method)) throw Error('Unrecognized retained reservation.');
        used[entry.method]++;
      }
    } catch (error) { if (error.code !== 'ENOENT') throw Error('Retained submission accounting unreadable.'); }
    return used;
  }
  await readCounts();
  let busy = false;
  async function call(method, params) {
    if (busy) throw Error('Submission transport busy.');
    busy = true;
    let lock;
    const lockPath = join(directory, 'submission-budget.lock');
    try {
      lock = await open(lockPath, 'wx', 0o600);
      await lock.writeFile(JSON.stringify({ pid: process.pid, createdAt: new Date().toISOString() }));
      await lock.sync();
      const used = await readCounts();
      const max = method === 'sendTransaction' ? maxSubmissions : maxHeightReads;
      if (used[method] >= max) throw Error('Submission transport allowance exhausted.');
      used[method]++;
      const file = await open(path, 'a', 0o600);
      try { await file.writeFile(JSON.stringify({ method, reservedAt: new Date().toISOString() }) + '\n'); await file.sync(); }
      finally { await file.close(); }
      const dir = await open(directory, 'r'); try { await dir.sync(); } finally { await dir.close(); }
      const response = await fetchImpl(endpoint, { method: 'POST', redirect: 'error', signal: AbortSignal.timeout(15000),
        headers: { 'content-type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }) });
      if (!response.ok || !response.body) throw Error('Submission provider unavailable.');
      const reader = response.body.getReader(); const parts = []; let size = 0;
      for (;;) { const { done, value } = await reader.read(); if (done) break; size += value.length;
        if (size > 1048576) { await reader.cancel(); throw Error('Submission response too large.'); } parts.push(value); }
      const result = JSON.parse(Buffer.concat(parts).toString('utf8'));
      if (result.error || result.id !== 1) throw Error('Submission provider rejected request.');
      return result.result;
    } catch { throw Error('Submission transport unavailable; retain exact work for reconciliation.'); }
    finally {
      if (lock) { await lock.close(); await unlink(lockPath); }
      busy = false;
    }
  }
  return {
    async getBlockHeight() {
      const result = await call('getBlockHeight', [{ commitment: 'confirmed' }]);
      if (!Number.isSafeInteger(result) || result < 0) throw Error('Invalid provider height.'); return result;
    },
    async sendRawTransaction(bytes) {
      return call('sendTransaction', [Buffer.from(bytes).toString('base64'), { encoding: 'base64', skipPreflight: false, preflightCommitment: 'confirmed', maxRetries: 0 }]);
    },
  };
}
