# Unclaimed Wallet SDK · analysis preview

A TypeScript client and local reference integration for the mounted Unclaimed
API safe-mode analysis contract. **Execution is unavailable.** There are no
build, sign, submit, record, mint-analysis or payment methods. This is source for
review, not an npm release, deployed demo or live-provider readiness claim.
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
| Parsed retryable terminal failure, e.g. `incomplete`, `deadline_exceeded`, rate limit | Wait for `retryAfterMs`, then **new key**, preserving the cursor |
| `snapshot_expired` | Start again without a cursor and with a new key |
| Other nonretryable refusals | Correct the cause; do not blindly retry |

`UnclaimedApiError` exposes generated `code`, `status`, `requestId`, `retryable`,
`retryAfterMs` and `retryAction`. `UnclaimedTransportError` and
`UnclaimedProtocolError` mark unknown outcomes. `UnclaimedInputError` identifies
local configuration/key errors. With no Retry-After, use a bounded backoff;
the reference waits at least one second and requires a button click per retry.
Do not turn an unknown outcome into a new attempt with a new key.

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
