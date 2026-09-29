import { createPublicKey, verify } from 'node:crypto';
const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
function base58(bytes) {
  let n = BigInt('0x' + Buffer.from(bytes).toString('hex')), text = '';
  while (n) { text = alphabet[Number(n % 58n)] + text; n /= 58n; }
  for (const byte of bytes) { if (byte !== 0) break; text = '1' + text; }
  return text;
}
function short(bytes, at) {
  let value = 0, shift = 0, start = at;
  while (at < bytes.length && at - start < 3) {
    const byte = bytes[at++]; value |= (byte & 127) << shift;
    if (!(byte & 128)) {
      if (at - start > 1 && byte === 0) throw Error('Noncanonical wire length.');
      return [value, at];
    }
    shift += 7;
  }
  throw Error('Malformed transaction.');
}
function decode(value) {
  if (typeof value !== 'string' || !/^[A-Za-z0-9+/]+={0,2}$/.test(value)) throw Error('Invalid transaction encoding.');
  const bytes = Buffer.from(value, 'base64');
  if (bytes.length > 1232 || bytes.toString('base64') !== value) throw Error('Invalid transaction encoding.');
  const [count, offset] = short(bytes, 0);
  if (count < 1 || count > 16 || offset + count * 64 >= bytes.length) throw Error('Invalid signatures.');
  return { bytes, count, offset, message: bytes.subarray(offset + count * 64) };
}
/** Validate exact legacy message, payer and every required Ed25519 signature. */
export function validateSigned(wallet, prepared, signedBase64) {
  const unsigned = decode(prepared.unsignedTransaction), signed = decode(signedBase64);
  if (signed.count !== unsigned.count || !signed.message.equals(unsigned.message)) throw Error('Signed message changed.');
  const message = signed.message;
  if (message[0] !== signed.count || message[0] & 128) throw Error('Invalid legacy header.');
  const [accounts, offset] = short(message, 3);
  if (accounts < signed.count || offset + accounts * 32 > message.length) throw Error('Invalid accounts.');
  if (base58(message.subarray(offset, offset + 32)) !== wallet) throw Error('Wrong signing wallet.');
  for (let i = 0; i < signed.count; i++) {
    const key = createPublicKey({ format: 'der', type: 'spki', key: Buffer.concat([
      Buffer.from('302a300506032b6570032100', 'hex'), message.subarray(offset + i * 32, offset + (i + 1) * 32),
    ]) });
    if (!verify(null, message, key, signed.bytes.subarray(signed.offset + i * 64, signed.offset + (i + 1) * 64))) throw Error('Invalid wallet signature.');
  }
  return base58(signed.bytes.subarray(signed.offset, signed.offset + 64));
}
