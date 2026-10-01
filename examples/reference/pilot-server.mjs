import { readFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { createPartnerConsent } from '@unclaimedsol/wallet-sdk';
import { fileJournal, createExecutionJournal } from './journal.mjs';
import { validateSigned } from './validate-signed.mjs';

/** Server-owned connection must enforce its separately approved submission/status allowance. */
export function createPilotHandler({ client, directory, connection, partnerId = null }) {
  const store = fileJournal(directory);
  const execution = createExecutionJournal({ client, store, validateSigned,
    submit: bytes => connection.sendRawTransaction(Buffer.from(bytes, 'base64'), { skipPreflight: false, maxRetries: 0 }),
    getBlockHeight: () => connection.getBlockHeight('confirmed'),
  });
  const locks = new Set();
  return async (req, res) => {
    if (!req.url?.startsWith('/pilot')) return false;
    if (req.method === 'GET' && ['/pilot', '/pilot-browser.js'].includes(req.url)) {
      res.setHeader('Content-Type', req.url.endsWith('.js') ? 'text/javascript' : 'text/html; charset=utf-8');
      res.end(await readFile(new URL(req.url.endsWith('.js') ? './pilot-browser.js' : './pilot.html', import.meta.url)));
      return true;
    }
    if (req.method !== 'POST' || req.headers.origin !== `http://${req.headers.host}` || req.headers['content-type'] !== 'application/json') { res.writeHead(403).end('Forbidden.'); return true; }
    let body = '';
    for await (const part of req) { body += part; if (Buffer.byteLength(body) > 16384) { res.writeHead(413).end('Request too large.'); return true; } }
    const input = JSON.parse(body);
    if (locks.has(input.id)) { res.writeHead(409).end('Execution busy.'); return true; }
    locks.add(input.id);
    try {
      let result;
      if (req.url === '/pilot/analyze') result = await client.checkWallet({ wallet: input.wallet, mode: 'safe', limit: 200, ...(input.cursor ? { cursor: input.cursor } : {}) }, { idempotencyKey: input.idempotencyKey });
      else if (req.url === '/pilot/prepare') {
        if (!input.session?.id || !input.session?.token) throw Error('Execution unavailable.');
        if (!Array.isArray(input.items) || input.items.length < 1 || input.items.length > 10 ||
            input.items.some(item => typeof item?.id !== 'string' || !item.id || item.action !== 'burn_and_close') ||
            new Set(input.items.map(item => item.id)).size !== input.items.length) {
          res.writeHead(400).end('Invalid pilot selection.'); return true;
        }
        if (await store.findOpen(input.wallet)) throw Error('Resume the retained wallet journal before preparing replacement work.');
        const buildKey = randomUUID();
        const consent = partnerId ? createPartnerConsent({ partnerId, wallet: input.wallet, origin: `http://${req.headers.host}`,
          sessionId: input.session.id, issuedAt: new Date().toISOString(), idempotencyKey: buildKey, items: input.items }) : null;
        result = { id: randomUUID(), input: { wallet: input.wallet, items: input.items }, session: input.session, buildKey, consent, phase: 'consent', transactions: [] };
        await store.save(result);
      } else if (req.url === '/pilot/build') {
        const journal = await store.load(input.id);
        if (journal.phase === 'consent') {
          if (input.signature) {
            if (!journal.consent) throw Error('Attribution unavailable.');
            journal.input.partnerAttribution = { ...journal.consent.proof, signature: input.signature };
          }
          journal.phase = 'building'; await store.save(journal);
        }
        result = await execution.resumeBuild(input.id);
      } else if (req.url === '/pilot/check-signing') result = await execution.checkSigning(input.id);
      else if (req.url === '/pilot/signed') result = await execution.acceptSigned(input.id, input.signedTransaction);
      else if (req.url === '/pilot/decline') result = await execution.decline(input.id);
      else if (req.url === '/pilot/resume') {
        const journal = await store.load(input.id);
        result = journal.phase === 'building' ? await execution.resumeBuild(input.id) : await execution.reconcile(input.id);
      } else { res.writeHead(404).end('Not found.'); return true; }
      res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(result));
    } finally { locks.delete(input.id); }
    return true;
  };
}
