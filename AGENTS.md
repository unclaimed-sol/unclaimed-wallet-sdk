# Wallet SDK repository instructions

This public repository holds the analysis-only SDK, approved mounted OpenAPI
copy, generated types and local reference integration. Never copy private engine
or platform implementation, secrets, provider URLs or customer records here.

`openapi/analysis.yaml` is the sole generation input. Provenance is in
`docs/contract-provenance.md`. Run `npm run generate` after an approved schema
update and commit types and runtime validators together. Do not hand-edit them.
Do not generate from the future preview draft. No build, sign, submit or record
methods exist. Null sessions and executionSupported=false must remain enforced.

API keys belong only on the server. Pagination and retries are explicit caller
actions. Preserve keys for unknown outcomes, request_in_progress and
platform_unavailable. Other parsed retryable terminal failures require a new key
for a deliberate attempt. Preserve cursor/settings. Do not add automatic retries.
Never sum page summaries; deduplicate item IDs and alternative groups across
one snapshot, giving cleanup precedence over excess recovery. Keep amounts exact.

Read README.md, PRIOR_WORK.md and docs/publication.md before publication. Run
`npm test`, the product RPC secret scanner against a clean publication export,
a whole-tree general secret scan including Markdown, and review the outgoing
history for confidential material. Keep the package private until an npm release
is separately authorized. No providers, production, deployment or transactions
are needed for local tests. The private platform owns real-Postgres acceptance;
record cross-repository work in its single authoritative engine handoff.
