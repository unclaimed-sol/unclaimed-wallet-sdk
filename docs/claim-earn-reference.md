# Claim-and-earn source reference

This branch prepares claim-and-earn. Published `@unclaimedsol/wallet-sdk@0.1.0-preview.2`
remains unchanged and rejects attributed receipt responses. Synthetic tests do not
establish publication, deployment, activation or real-wallet recovery.

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

Treat journal IDs as local bearer capabilities: no URLs/logs. Run one server process
per private directory; its lock is not distributed. Loopback Host/Origin checks are
required. Public hosting needs application authentication and shared durable storage.
The reference is not a hosted multi-tenant service.

Before live acceptance, install the reviewed public candidate fresh, verify matching
engine/platform revisions, and obtain separate activation approval, numerical
provider/submission budgets and an owner-controlled signing wallet. Test attributed
recovery with applied auditable credit and attribution-declined recovery. Credit is
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

The candidate package ships `examples/reference` alongside `dist`. After installing
the separately approved version (or the inspected tarball for offline acceptance),
run `node node_modules/@unclaimedsol/wallet-sdk/examples/reference/server.mjs`.
Default fixture mode uses no product API, provider or real wallet. The `/pilot`
route is mounted only with the explicit owner configuration above. All browser,
journal, signed-wire validation and application submission transport files ship in
the package; no private repository or source checkout is needed.
