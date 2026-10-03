# Claim-and-earn source reference

This source targets preview.5, which accepts protected stale-price analysis
results and retains the reference expiry checks. The packaged reference assets
require no private repository. Synthetic tests do not establish live access,
recovery or adoption; SDK upgrades do not enable execution.

`createPartnerConsent` returns canonical UTF-8 message text and unsigned v2 proof
fields. The wallet optionally signs that text; attach its canonical base64 signature
as `partnerAttribution.signature`. The digest binds ordered items, session, wallet
and the SHA-256 of the idempotency key. See `fixtures/claim-earn-v2.json`. Declining
attribution or lacking message signing must preserve ordinary recovery.

Mount `createPilotHandler` from `examples/reference/pilot-server.mjs` through
`createReferenceServer({ pilot })`. Supply a server SDK client, private journal
directory, optional enrolled partner ID and application-owned `connection` exposing
`getBlockHeight('confirmed')` and `sendRawTransaction(bytes, options)`. That connection
must enforce the separately approved submission/status allowance. No connection is
configured by default. API keys and provider credentials stay server-side. The SDK
never signs or submits. The browser uses Wallet Standard connect/signMessage/
signTransaction, with explicit fresh build review and later-deposit burn disclosure.

The fsynced journal retains request/key before build, receipt before review and
exact signed bytes/signature/height before dispatch. The server verifies the exact
message, wallet payer and every required signature. Failed height reads and expired
bytes remain reconciliation-only. Unknown sends never automatically rebuild or
resend. Browser reload/server restart use the saved random journal ID; credit repair
remains reachable after recovery succeeds. Settled records replay locally.

The source reference checks the exact build's block height immediately before
requesting a wallet signature. An expired build or unavailable height stops the
wallet prompt. This consumes one additional application height-read allowance per
manual signing check; plan that allowance explicitly before using this source
change live. It does not replenish any existing budget or authorize a replacement
build. A successful check cannot keep a wallet prompt from outlasting the blockhash,
so the existing post-signing height check remains mandatory. Review and sign in one
continuous interaction instead of waiting for an external review after building.

The result distinguishes the application's submission attempt from the API's chain
outcome. If the post-signing height check finds expiry, the journal retains the exact
signed bytes, observed height and `blockhash_expired` stop reason, and the page says
the app did not send. The API may still return `unknown` with pending partner credit;
this is not a successful recovery, terminal failure or permission to rebuild. A
recording error cannot erase the local stop evidence. Older signed journals without
a stop reason remain readable without inferring why submission was not attempted.

Treat journal IDs as local bearer capabilities: no URLs/logs. Run one server process
per private directory; its lock is not distributed. Loopback Host/Origin checks are
required. Public hosting needs application authentication and shared durable storage.
The reference is not a hosted multi-tenant service.

Before live acceptance, install the reviewed published version fresh and obtain
a separately approved partner scope: active identity/enrollment, reviewed app,
consented signing wallet/accounts, UTC window, numerical API/provider/submission/
height/signing budgets, fee ceiling and closure owner. Exercise only the cases
covered by that scope. Completed owner acceptance does not authorize a partner run. Credit is
not payout; synthetic execution is not live recovery or partner adoption.

## Owner-configured opt-in runner

After separate authorization, the owner configures `REFERENCE_MODE=platform`,
`REFERENCE_EXECUTION=1`, server-only `UNCLAIMED_API_ORIGIN`/`UNCLAIMED_API_KEY`,
`REFERENCE_RPC_URL`, a private `REFERENCE_JOURNAL_DIR`, and explicit cumulative
`REFERENCE_MAX_SUBMISSIONS`/`REFERENCE_MAX_HEIGHT_READS`. Optional
`REFERENCE_PARTNER_ID` enables the consent offer. Run `npm run reference`, then
open `/pilot` on its loopback origin. Never paste credentials into commands saved
in shell history; use the owner's existing ignored environment loader.

The application transport appends/fsyncs every call reservation before dispatch,
retains its accounting across restart, bounds responses/timeouts and never refunds
unknown calls. Missing, exhausted or corrupt accounting fails closed. Limits are
cumulative over the retained file; never delete/reset it to replenish allowance.
Status reconciliation uses the execution receipt API and its protected verifier
budget. Pagination is explicit and clears the current page's selection; it never
sums page estimates or silently selects additional accounts.

Submission reservations use an exclusive per-call filesystem lock and reload
retained counts while locked, including when two connection instances share the
directory. A process crash may leave `submission-budget.lock`; recovery fails
closed. The owner may remove only that lock after proving its recorded process
and every reference server using the directory have stopped. Never remove or
edit `submission-budget.jsonl` or signed-work journals. Torn accounting requires
operator evidence repair, not a reset; consumed allowance is never refunded.


## Run the installed public reference

The package ships `examples/reference` alongside `dist`. After installing
the separately approved version (or the inspected tarball for offline acceptance),
run `node node_modules/@unclaimedsol/wallet-sdk/examples/reference/server.mjs`.
Default fixture mode uses no product API, provider or real wallet. The `/pilot`
route is mounted only with the explicit owner configuration above. All browser,
journal, signed-wire validation and application submission transport files ship in
the package; no private repository or source checkout is needed.


The application submission adapter tags failures as `submissionUnknown: true`
only after transaction-send dispatch begins. Pre-dispatch lock, capacity and
accounting errors retain their original local classification; block-height failures
have a distinct sanitized message. Custom submission callbacks must honor this
contract. The journal retains signed work for reconciliation after either class
of failure, without inventing an unknown send or automatically resending.
