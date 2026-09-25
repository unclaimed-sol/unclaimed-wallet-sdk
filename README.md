# Unclaimed Wallet SDK · execution preview

A TypeScript client for safe-mode analysis and explicitly enabled execution.
Build and receipt recording are supported; signing and submission belong to the
integrating application. This is source for review, not an npm release, deployed
demo or live-provider readiness claim.
The package remains `private: true` to prevent accidental npm publication.

Requires Node 22–24. From this checkout:

```sh
npm ci
npm test
npm run reference
```

Open http://127.0.0.1:4317. The default is an **offline synthetic fixture**:
first-page excess recovery overlaps cleanup discovered on page two. The total
replaces excess with cleanup, instead of adding both. No credentials, external
requests or wallet connection are needed. Restarting clears local sessions.

## Server-side use

After `npm run build`, import the local build (or link this package in your
server project). Set `UNCLAIMED_API_ORIGIN` and `UNCLAIMED_API_KEY` only in the
server process environment using your existing secret mechanism. No `.env`
file is loaded automatically. Never put a key in browser code or a URL.

```ts
import { createUnclaimedClient, nextWalletPage } from './dist/index.js';

const client = createUnclaimedClient({
  baseUrl: process.env.UNCLAIMED_API_ORIGIN!, // operator-provided HTTPS origin
  apiKey: process.env.UNCLAIMED_API_KEY!,
});
const input = { wallet: walletAddress, mode: 'safe' as const, limit: 20 };
// Generate and retain this key with the exact request BEFORE sending it.
const request = { idempotencyKey: crypto.randomUUID() };
const page = await client.checkWallet(input, request);
const nextInput = nextWalletPage(input, page);
// Ask the user before requesting another metered page. If nextInput is null,
// this snapshot has no further pages. Use a new explicit key for a new page.
```

`baseUrl` is an origin, not an `/api/v1` URL. HTTPS is required except for literal
loopback local tests. Redirects are refused. Requests have a 35-second default
client timeout and a 2 MiB response cap. Errors do not retain the key, URL, body,
arbitrary upstream text or details. Customer data is not logged by the SDK.
Types and runtime validators are generated from [analysis.yaml](openapi/analysis.yaml).
Conditional JSON Schema rules are checked at runtime, not merely cast to types.

`checkWallet` sends **one request**. It never retries, chooses a key, changes a
cursor or purchases more pages automatically. The caller explicitly controls
these operations. Keep snapshot settings unchanged on continuation; `limit`
may change. `nextWalletPage` carries settings and the opaque cursor forward.

| Error / outcome | Next deliberate action |
|---|---|
| Transport failure, timeout, aborted call, unreadable/malformed response | Outcome unknown: unchanged request and **same key** |
| `request_in_progress`, `platform_unavailable` | **Same key**; a durable response may already exist |
| `platform_failure_recorded` (confirmed stored failure) | **New key** for a deliberate attempt; the old key replays the failure |
| Parsed retryable terminal failure, e.g. `incomplete`, `deadline_exceeded`, rate limit | Wait for `retryAfterMs`, then **new key**, preserving the cursor |
| `snapshot_expired` | Start again without a cursor and with a new key |
| Other nonretryable refusals | Correct the cause; do not blindly retry |

`UnclaimedApiError` exposes generated `code`, `status`, `requestId`, `retryable`,
`retryAfterMs` and `retryAction`. `UnclaimedTransportError` and
`UnclaimedProtocolError` mark unknown outcomes. `UnclaimedInputError` identifies
local configuration/key errors. With no Retry-After, use a bounded backoff;
the reference waits at least one second and requires a button click per retry.
An unresolved attempt blocks starting over until same-key reconciliation. Expired
snapshots have an explicit restart that preserves the original settings and drops
only the cursor.
Do not turn an unknown outcome into a new attempt with a new key. Never infer
publication durability from a repeated `requestId`. The reference uses the
explicit recorded-failure code to offer a new attempt.

## Estimates and protections

Use `summarizeOpportunities(allLoadedItems)` over one snapshot, never sum page
summaries. It deduplicates item IDs and counts at most one opportunity per
`alternativeGroupId`, preferring `burn_and_close` to overlapping excess. A
protected/no-action token item does not suppress independently supported excess.
Do not mix wallets or snapshots. Amounts remain decimal strings and sums use
BigInt. Net is after service fees, **before** network/setup costs. Null costs or
USD valuations are unavailable, not zero. No estimate is recovered funds.
Until the last page loads, totals cover only loaded pages. No burn selectors or
execution controls are provided. The API's destructive consent text is shown
verbatim in the reference, including for currently empty accounts.

## Reference platform mode

Default fixture mode is sufficient for review. A separately configured **local
offline platform** can be exercised using `REFERENCE_MODE=platform npm run
reference`, with server environment values above. This work does not authorize
provider calls or deployment. The example binds literal loopback, enforces
Host/Origin and form CSRF checks, and limits itself to ten one-hour in-memory
sessions. A restart loses retained request keys: do not reuse this example as a
production retry store. Browser HTML contains no bearer or internal API URL.
Forms display a loading status and block duplicate submissions. A browser-side
response loss requires a read-only reload to inspect retained server state, never
an automatic retry. Native form submission still works without JavaScript.
There is no public proxy route. Public hosting requires separate authentication,
rate controls, durable retry/session storage and rollout approval.

## Contract regeneration and verification

See [contract provenance](docs/contract-provenance.md). After deliberately
updating the mounted schema, run `npm run generate`. Commit the schema and both
generated outputs together; `npm run generate:check` detects drift. The generator
refuses extra operations. Never generate from the future `preview.yaml`.

`npm test` checks generation, TypeScript, build, request/retry behavior, invalid
responses, cross-page accounting and the loopback HTTP reference. The private
platform also has a separate real-Postgres SDK acceptance runner; see
[verification](docs/verification.md). No test here uses live providers.

See the [prior-work disclosure](PRIOR_WORK.md) and [publication checklist](docs/publication.md).

## Execution preview quick start (not yet deployed)

The operator must supply a verified HTTPS origin and an approved demo key. Keep
the key on your server. Execution is disabled by default and requires the engine's
separately authorized signature-purpose cutover. Local tests do not establish an
external demo or permission to sign/broadcast real transactions.

```ts
const page = await client.checkWallet({ wallet }, { idempotencyKey: analysisKey });
const session = page.data.executionSession;
if (!session) throw new Error('Execution is unavailable');
// Explicit user selection after showing protection, fee and burn-consent text.
const built = await client.build({ wallet, items: selected.map(item => ({
  id: item.id, action: item.opportunity.action,
})) }, session.token, { idempotencyKey: buildKey });
// Display authoritativeOpportunity, plan costs/funding, and refreshed consent.
// Your wallet integration reviews and signs the exact returned message.
// Persist receipt, transaction ID, signed bytes, signature and exact height
// BEFORE your submission adapter submits anything.
const record = await client.recordExecution({ wallet, transactions: submitted },
  built.executionReceipt!.token);
```

`examples/reference/execution.mjs` provides application orchestration with
explicit `review`, `sign`, `submit` and `save` callbacks. The SDK itself does none
of those operations. The private acceptance runner supplies a local test key and
a synthetic submission ledger. Never use that deterministic test key with funds.
A production adapter must validate the wallet-signed message and signatures,
check the exact block-height expiry and reconcile every prior submission before
any resend. Retain signed-work evidence on errors; a transport failure does not
prove that a transaction failed. SDK methods never retry automatically.

Build retries preserve the original idempotency key and body when the outcome is
unknown. A confirmed `platform_failure_recorded` permits a deliberate new-key
attempt. The same session item cannot silently create a second published build.
Record retries use the same receipt and reported signatures (`same_receipt` on
retryable API refusals). A 202 is pending reconciliation. `abandoned_unknown`
is unverified expiry, carries no recovered value and never proves chain absence.
A later valid signature can supersede it. No API cashback or partner credit is
created. Empty-account execution retains the disclosed risk of burning later
deposits; excess withdrawal preserves current tokens and the reviewed fee policy.

An external milestone requires someone outside this development session to use
the demo key and these instructions against the deployed origin successfully.
No such milestone has been claimed.
