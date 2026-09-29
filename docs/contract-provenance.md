# Mounted contract provenance

Current local execution schema SHA-256:
`98c9f6dd1fb44b69c67996c3c0eaf0f06b1191abb70513c7c6f6132676873256`.
It includes opt-in check-wallet sessions, build and execution recording.
The platform revision is recorded in the private authoritative handoff.

## Historical analysis contract (September 22)

The sole input is the platform's `openapi/analysis.yaml`, copied byte-for-byte
from platform review commit `9f046e4700ae5df083385c97518850eb6c029dbc`, verified
September 22, 2026. Source SHA-256:
`893a77f377cc875875d5cd5efae7d5d638f1cece4f054f931d1c77abe445a188`.
Reverified byte-for-byte against merged platform main
`0b53e082c06456549e99b09fffeb35899f36a2e4` on September 22, 2026.
The platform repository is private; this public copy is the integrator contract.

`openapi-typescript` 7.13.0 generates types with optional defaulted request
properties preserved. AJV 8.18.0 generates conditional runtime validators;
esbuild bundles their helpers. Generator dependencies and transitive versions
are locked. Generated comments include the schema digest. The generated
validator includes MIT-licensed AJV and fast-deep-equal helpers; their notices
are retained in [third-party notices](../THIRD_PARTY_NOTICES.md).

At that historical analysis revision, only `POST /api/v1/check-wallet` was mounted. Accepted typed requests are safe
mode with airdrops disabled. Every opportunity has `executionSupported: false`,
and `executionSession` is null. The future draft's builders, recording and usage
routes are absent. This artifact does not establish deployment or provider
readiness. A future contract change requires regeneration, tests and review.

The recorded-failure revision distinguishes confirmed terminal storage failures
(`platform_failure_recorded`, new key for a deliberate attempt) from uncertain
persistence (`platform_unavailable`, same key). Request IDs are not durability
signals. Pre-upgrade stored responses are not rewritten: coordinate platform/SDK
rollout and allow the old 60-minute retention window to expire before relying on
the distinction for old attempts. No deployment is implied by this update.

## September 26 execution increment

The mounted platform generator now includes the implemented opt-in build and
record routes. It remains the sole SDK generation input, never the unmounted
future draft. The current OpenAPI file and generated banners pin its exact hash.
Earlier analysis-only revisions and their W3 evidence remain historical evidence,
not execution acceptance. The owner has separately authorized public npm
publication of the preview SDK. This does not authorize API deployment, live
access or execution. The private platform owns real Postgres and synthetic engine
acceptance; no private implementation source is copied into this repository.

## September 28 record outcome correction

The platform-owned record schema now prohibits `recovered`, `serviceFee` and
`burnedBaseUnits` unless the item outcome is `verified_applied`. The mounted copy
is byte-for-byte synchronized, and both SDK outputs are regenerated. JSON Schema
conditionals enforce this rule at runtime; the generated TypeScript shape alone
cannot express it. No separate SDK semantic rule or platform recorder change is
needed: the recorder already strips those fields from other outcomes.

The subsequent platform review correction documents record lease contention
(`409 request_in_progress` with `Retry-After`), build session authentication and
upstream/deadline failures, and closes record transaction variants over extra
properties. The mounted input and both generated outputs remain synchronized;
the verified-only value rule is preserved. This is contract synchronization,
not a package release or deployment.

The final review pass caps record requests at 20 transactions and distinguishes
record verification failures from uncertain persistence. The mounted contract
and both generated outputs remain synchronized.

The mounted submitted-signature schema now matches the service’s Base58
alphabet and 64–88-character bounds. The SDK copy and generated outputs were
regenerated together and are included in version `0.1.0-preview.2`.

## September 29 claim-and-earn candidate

The current mounted schema copy adds optional canonical v2 consent, immutable
receipt attribution and separate recovery/partner-credit completion. Historical
ordinary receipt responses remain valid. The candidate is unpublished; source
readiness does not establish API deployment or execution activation.
