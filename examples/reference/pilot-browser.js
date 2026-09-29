const wallets = [];
window.addEventListener('wallet-standard:register-wallet', event => event.detail({ register: (...entries) => { wallets.push(...entries); return () => {}; } }));
window.dispatchEvent(new CustomEvent('wallet-standard:app-ready', { detail: { register: (...entries) => { wallets.push(...entries); return () => {}; } } }));
let wallet, account, analysis, journal;
const $ = id => document.getElementById(id);
const bytes = value => Uint8Array.from(atob(value), c => c.charCodeAt(0));
const base64 = value => btoa(String.fromCharCode(...value));
const api = async (action, data = {}) => {
  const response = await fetch('/pilot/' + action, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  if (!response.ok) throw Error(await response.text());
  return response.json();
};
const show = value => {
  $('reviewed').checked = false;
  const build = value.build ?? value;
  const review = value.data ? { items: value.data.items, pagination: value.data.pagination } : { items: build.items, plan: build.plan, warnings: build.warnings, record: value.record };
  $('result').textContent = JSON.stringify(review, null, 2);
};
const run = fn => async () => { try { await fn(); } catch (error) { $('status').textContent = error.message; } };
$('connect').onclick = run(async () => {
  wallet = wallets.find(w => w.features['solana:signTransaction'] && w.features['standard:connect']);
  if (!wallet) throw Error('Install a Wallet Standard Solana wallet.');
  const connected = await wallet.features['standard:connect'].connect();
  account = connected.accounts[0];
  $('status').textContent = 'Connected: ' + account.address;
});
async function analyzePage(cursor) {
  if (!account) throw Error('Connect your wallet first.');
  const pending = JSON.parse(localStorage.getItem('unclaimed-pilot-analysis') ?? 'null') ?? { wallet: account.address, idempotencyKey: crypto.randomUUID(), ...(cursor ? { cursor } : {}) };
  if (pending.wallet !== account.address) throw Error('Reconcile the saved analysis with its original wallet first.');
  if ((pending.cursor ?? null) !== (cursor ?? null)) throw Error('A saved analysis targets a different page. Retry it before changing pages.');
  localStorage.setItem('unclaimed-pilot-analysis', JSON.stringify(pending));
  analysis = await api('analyze', pending);
  localStorage.removeItem('unclaimed-pilot-analysis');
  const list = $('items'); list.replaceChildren();
  for (const item of analysis.data.items) {
    if (!item.opportunity?.executionSupported || item.opportunity.action !== 'burn_and_close') continue;
    const label = document.createElement('label'), input = document.createElement('input');
    input.type = 'checkbox'; input.value = item.id;
    label.append(input, document.createTextNode(item.id)); list.append(label, document.createElement('br'));
  }
  $('next').disabled = !analysis.data.pagination.hasMore;
  show(analysis);
}
$('analyze').onclick = run(() => analyzePage());
$('next').onclick = run(() => analyzePage(analysis.data.pagination.nextCursor));
$('build').onclick = run(async () => {
  const items = [...$('items').querySelectorAll('input:checked')].map(input => ({ id: input.value, action: 'burn_and_close' }));
  if (!items.length || items.length > 10) throw Error('Select 1–10 eligible empty accounts.');
  const prepared = await api('prepare', { wallet: account.address, items, session: analysis.data.executionSession });
  localStorage.setItem('unclaimed-pilot-resume', prepared.id);
  journal = prepared;
  if ($('attribution').checked && wallet.features['solana:signMessage'] && prepared.consent) {
    let signed;
    try { [signed] = await wallet.features['solana:signMessage'].signMessage({ account, message: new TextEncoder().encode(prepared.consent.message) }); }
    catch { $('status').textContent = 'Attribution signature declined. Continue without attribution using the button below.'; return; }
    journal = await api('build', { id: prepared.id, signature: base64(signed.signature) });
  } else journal = await api('build', { id: prepared.id });
  show(journal.build);
});
$('ordinary').onclick = run(async () => { journal = await api('build', { id: localStorage.getItem('unclaimed-pilot-resume') }); show(journal.build); });
$('sign').onclick = run(async () => {
  if (!journal?.build || !account || account.address !== journal.input.wallet) throw Error('Resume and connect the build wallet first.');
  if (!$('reviewed').checked) throw Error('Review the fresh build amounts, fees and funding before signing.');
  const tx = journal.build.transactions[0];
  let signed;
  try { [signed] = await wallet.features['solana:signTransaction'].signTransaction({ account, chain: 'solana:mainnet', transaction: bytes(tx.unsignedTransaction) }); }
  catch { journal = await api('decline', { id: journal.id }); show(journal); return; }
  journal = await api('signed', { id: journal.id, signedTransaction: base64(signed.signedTransaction) }); show(journal);
});
$('resume').onclick = run(async () => { journal = await api('resume', { id: localStorage.getItem('unclaimed-pilot-resume') }); show(journal); });
$('decline').onclick = run(async () => { journal = await api('decline', { id: journal.id }); show(journal); });
