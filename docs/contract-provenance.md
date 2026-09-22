# Mounted contract provenance

The sole input is the platform's `openapi/analysis.yaml`, copied byte-for-byte
from platform review commit `9f046e4700ae5df083385c97518850eb6c029dbc`, verified
September 22, 2026. Source SHA-256:
`893a77f377cc875875d5cd5efae7d5d638f1cece4f054f931d1c77abe445a188`.
The platform repository is private; this public copy is the integrator contract.

`openapi-typescript` 7.13.0 generates types with optional defaulted request
properties preserved. AJV 8.18.0 generates conditional runtime validators;
esbuild bundles their helpers. Generator dependencies and transitive versions
are locked. Generated comments include the schema digest. The generated
validator includes MIT-licensed AJV and fast-deep-equal helpers; their notices
are retained in [third-party notices](../THIRD_PARTY_NOTICES.md).

Only `POST /api/v1/check-wallet` is mounted. Accepted typed requests are safe
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
