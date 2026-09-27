# Wallet SDK repository instructions

This public repository holds the analysis and opt-in execution SDK, approved mounted OpenAPI
copy, generated types and local reference integration. Never copy private engine
or platform implementation, secrets, provider URLs or customer records here.

`openapi/analysis.yaml` is the sole generation input. Provenance is in
`docs/contract-provenance.md`. Run `npm run generate` after an approved schema
update and commit types and runtime validators together. Do not hand-edit them.
Do not generate from the future preview draft. Build and record methods are generated from the implemented mounted contract.
The SDK never signs or submits. Execution requires a real session and explicit
item availability; disabled deployments still return null sessions and false
executionSupported. Preserve exact bytes/heights in the integration journal.

API keys belong only on the server. Pagination and retries are explicit caller
actions. Preserve keys for unknown outcomes, request_in_progress and
platform_unavailable. Confirmed platform_failure_recorded permits a new key;
never infer durability from repeated request IDs. Other parsed retryable terminal failures require a new key
for a deliberate attempt. Preserve cursor/settings. Do not add automatic retries.
Never sum page summaries; deduplicate item IDs and alternative groups across
one snapshot, giving cleanup precedence over excess recovery. Keep amounts exact.

Read README.md, PRIOR_WORK.md and docs/publication.md before publication. Run
`npm test`, the product RPC secret scanner against a clean publication export,
a whole-tree general secret scan including Markdown, and review the outgoing
history for confidential material. The preview is published; further npm releases
require separate authorization. See docs/continuation.md for current status. No providers, production, deployment or transactions
are needed for local tests. The private platform owns real-Postgres acceptance;
record cross-repository work in its single authoritative engine handoff.

SDK generation preserves dependency symlinks when bundling standalone validators,
so emitted helper labels are independent of the dependency-cache checkout path.
Keep generation freshness passing in ordinary and symlinked local installs.
