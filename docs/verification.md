# Verification and limits

September 22, 2026, Node 22.22.2:

- Generated schema types and conditional validators are reproducible; copied
  schema SHA-256 matches the mounted platform contract exactly.
- SDK typecheck/build and 39 offline SDK/reference tests pass: explicit headers
  and keys, same-key lost-response replay, typed refusals/retry metadata, opaque
  continuation, invalid/oversized bodies, partial/executable response rejection,
  BigInt alternative accounting, escaped display, loopback Host/Origin/CSRF gates,
  server-only keys and explicit same/new-key retries through the reference.
- Against platform review commit `9f046e4700ae5df083385c97518850eb6c029dbc` with a
  test-only acceptance runner: 85 existing offline tests and 92 isolated
  Postgres 17 tests pass. Seventeen cross-repository SDK scenarios pass through
  the actual mounted Express route and engine HTTP client, with synthetic
  loopback engine responses. Database publication/replay and metering are real
  local SQL. Success, lost responses, exact replay, key conflicts, max refusal,
  cursor binding/expiry, terminal retry, alternative totals and absent execution
  routes are covered. Failed/replayed requests add no invoiceable amount.
- Browser interaction verification completed after merge using the Codex in-app
  browser, offline fixtures, actual mounted platform and isolated Postgres 17.
  The former native form failure was reproduced and fixed. See the
  [dated browser evidence](browser-verification.md) for observations and limits.

The platform acceptance command is `npm run test:sdk`, with an absolute
`SDK_CHECKOUT`, explicit literal-loopback `TEST_DATABASE_URL` naming a disposable
`unclaimed_api_test*` database, and `ALLOW_LOCAL_DB_RESET=1`. Build this SDK first.
It resets only that test database's `api` schema; run serially with the platform
Postgres suite. Private platform implementation and fixtures remain private.

These are local checks, not CI runs, production measurements or pilot evidence.
No live-provider compatibility, deployment, payment collection, transaction
execution, external adoption or verified recovery is claimed. Public release
and live pilot gates remain separate. The reference is an in-memory local tool,
not a production hosting/security/retry-storage template.

Recorded-failure regression coverage includes new-key guidance and the reference
retry button for `platform_failure_recorded`, retaining all same-key checks for
`platform_unavailable`. Real Postgres tests inject rollback and lost COMMIT
acknowledgements after actual database commits, for both failure and success.
Same-key replay recovers the committed result with one admission and no duplicate
invoiceability. Cross-repository HTTP scenarios exercise the SDK's distinction
and deliberate new attempts. No request-ID heuristic or automatic retries added.

Review follow-up: 41 SDK tests and 95 platform tests pass; see the browser record
for retry-delay interaction evidence and corrected harness observation coverage.
The earlier 92 Postgres and 17 SDK acceptance checks were not repeated for these
UI/test-harness-only review changes.
