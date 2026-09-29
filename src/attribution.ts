import { createHash } from 'node:crypto';

export interface PartnerConsentInput {
  partnerId: string;
  wallet: string;
  origin: string | null;
  sessionId: string;
  issuedAt: string;
  idempotencyKey: string;
  items: readonly { id: string; action: string }[];
}
const hash = (text: string): string => createHash('sha256').update(text, 'utf8').digest('hex');
/** Pure server-side canonical consent helper. Never signs or submits. */
export function createPartnerConsent(input: PartnerConsentInput) {
  if (!/^[a-z0-9_-]{3,64}$/.test(input.partnerId)) throw new Error('Invalid partner ID.');
  if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(input.wallet)) throw new Error('Invalid wallet.');
  if (!input.sessionId || /[\r\n]/.test(input.sessionId)) throw new Error('Invalid session ID.');
  if (!input.idempotencyKey || input.items.length < 1 || input.items.length > 10 ||
      input.items.some(item => !item.id || item.action !== 'burn_and_close') ||
      new Set(input.items.map(item => item.id)).size !== input.items.length) throw new Error('Invalid pilot selection.');
  if (!/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d{3}Z$/.test(input.issuedAt) || new Date(input.issuedAt).toISOString() !== input.issuedAt) throw new Error('Invalid timestamp.');
  if (input.origin !== null) {
    const url = new URL(input.origin);
    if (url.origin !== input.origin || (url.protocol !== 'https:' && !(url.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)))) throw new Error('Origin must be canonical.');
  }
  const selectedBuildDigest = hash(JSON.stringify(['unclaimed-api-selected-build-v2', input.sessionId, input.wallet,
    hash(input.idempotencyKey), input.items.map(({ id, action }) => [id, action])]));
  const message = [
    'Unclaimed SOL API partner attribution v2',
    'I authorize the partner below to receive 20% of the verified recovery service fee.',
    'This does not change my recovery fee or authorize a transaction.',
    `Partner: ${input.partnerId}`, `Wallet: ${input.wallet}`, `Origin: ${input.origin ?? '(none)'}`,
    `Session: ${input.sessionId}`, `Issued At: ${input.issuedAt}`, `Selected Build: ${selectedBuildDigest}`,
  ].join('\n');
  return { message, proof: { version: 2 as const, partnerId: input.partnerId, origin: input.origin,
    issuedAt: input.issuedAt, selectedBuildDigest } };
}
