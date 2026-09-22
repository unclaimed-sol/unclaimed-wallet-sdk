# Verification and limits

September 22, 2026, Node 22.22.2:

- Generated schema types and conditional validators are reproducible; copied
  schema SHA-256 matches the mounted platform contract exactly.
- SDK typecheck/build and 33 offline SDK/reference tests pass: explicit headers
  and keys, same-key lost-response replay, typed refusals/retry metadata, opaque
  continuation, invalid/oversized bodies, partial/executable response rejection,
  BigInt alternative accounting, escaped display, loopback Host/Origin/CSRF gates,
  server-only keys and explicit same/new-key retries through the reference.
- Against platform remote main `03b8a4168d3bc3974dbf10997b1ec339df4c0d14` with a
  test-only acceptance runner: 85 existing offline tests and 89 isolated
  Postgres 17 tests pass. Fourteen cross-repository SDK scenarios pass through
  the actual mounted Express route and engine HTTP client, with synthetic
  loopback engine responses. Database publication/replay and metering are real
  local SQL. Success, lost responses, exact replay, key conflicts, max refusal,
  cursor binding/expiry, terminal retry, alternative totals and absent execution
  routes are covered. Failed/replayed requests add no invoiceable amount.
- Initial browser layout inspected in the Codex in-app browser. Full form and
  two-page interactions are covered over HTTP; the in-app browser did not
  advance on form submission, so interactive browser verification is incomplete.

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
