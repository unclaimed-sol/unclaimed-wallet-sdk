import { mkdir, open, readFile, rename } from 'node:fs/promises';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';

/** Single application process. Atomic, fsynced replacement; never log capabilities. */
export function fileJournal(directory) {
  const path = id => {
    if (!/^[0-9a-f-]{36}$/.test(id)) throw Error('Invalid journal ID.');
    return join(directory, `${id}.json`);
  };
  return {
    async load(id) { return JSON.parse(await readFile(path(id), 'utf8')); },
    async save(journal) {
      await mkdir(directory, { recursive: true, mode: 0o700 });
      const target = path(journal.id), temp = `${target}.${randomUUID()}.tmp`;
      const file = await open(temp, 'wx', 0o600);
      try { await file.writeFile(JSON.stringify(journal)); await file.sync(); }
      finally { await file.close(); }
      await rename(temp, target);
      const dir = await open(directory, 'r');
      try { await dir.sync(); } finally { await dir.close(); }
    },
  };
}

/** Fail closed after process crashes: an attempted send is always reconciliation-only. */
export function createExecutionJournal({ client, store, validateSigned, submit, getBlockHeight }) {
  const busy = new Set();
  async function exclusive(id, fn) {
    if (busy.has(id)) throw Error('Execution journal busy.');
    busy.add(id);
    try { return await fn(); } finally { busy.delete(id); }
  }
  async function record(journal) {
    const result = await client.recordExecution({ wallet: journal.input.wallet,
      transactions: journal.transactions.map(({ id, status, signature }) => ({ id, status, ...(signature ? { signature } : {}) })),
    }, journal.build.executionReceipt.token);
    journal.record = result;
    await store.save(journal);
    return journal;
  }
  return {
    async prepare({ input, session, buildKey }) {
      const journal = { id: randomUUID(), input, session, buildKey, phase: 'building', transactions: [] };
      await store.save(journal);
      return this.resumeBuild(journal.id);
    },
    async resumeBuild(id) {
      return exclusive(id, async () => {
        const journal = await store.load(id);
        if (journal.build) return journal;
        // A lost build response always reuses its original exact request and key.
        journal.build = await client.build(journal.input, journal.session.token, { idempotencyKey: journal.buildKey });
        journal.phase = journal.build.executionReceipt ? 'review' : 'no_transaction';
        await store.save(journal);
        return journal;
      });
    },
    async decline(id) {
      return exclusive(id, async () => {
        const journal = await store.load(id);
        if (journal.transactions.length) throw Error('Signed work requires reconciliation.');
        journal.transactions = journal.build.transactions.map(tx => ({ id: tx.id, status: 'not_signed' }));
        journal.phase = 'record';
        await store.save(journal);
        return record(journal);
      });
    },
    async acceptSigned(id, signedTransaction) {
      return exclusive(id, async () => {
        const journal = await store.load(id);
        if (journal.transactions.length) return record(journal);
        if (journal.phase !== 'review' || journal.build.transactions.length !== 1) throw Error('Pilot requires one reviewed transaction.');
        const tx = journal.build.transactions[0];
        const signature = await validateSigned(journal.input.wallet, tx, signedTransaction);
        journal.transactions = [{ id: tx.id, status: 'submitted', signature, signedTransaction,
          lastValidBlockHeight: tx.lastValidBlockHeight, submission: 'not_attempted' }];
        journal.phase = 'record';
        await store.save(journal);
        const entry = journal.transactions[0];
        // Never substitute a fresh blockhash. A failed height read leaves exact work retained.
        if (BigInt(await getBlockHeight()) > BigInt(tx.lastValidBlockHeight)) return record(journal);
        entry.submission = 'attempted';
        await store.save(journal);
        try { await submit(signedTransaction); entry.submission = 'acknowledged'; }
        catch { entry.submission = 'unknown'; }
        await store.save(journal);
        return record(journal);
      });
    },
    async reconcile(id) {
      return exclusive(id, async () => {
        const journal = await store.load(id);
        if (!journal.transactions.length) return journal;
        // Record remains reachable after recovery completes while credit is pending.
        if (journal.record?.terminal === true) return journal;
        return record(journal);
      });
    },
  };
}
