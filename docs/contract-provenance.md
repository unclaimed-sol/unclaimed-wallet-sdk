# Mounted contract provenance

The sole input is the platform's `openapi/analysis.yaml`, copied byte-for-byte
from remote main commit `03b8a4168d3bc3974dbf10997b1ec339df4c0d14`, verified
September 22, 2026. Source SHA-256:
`d14112ba5c6229bece9b582ef0114ac3bbbb5d1a6e5fc96105cb3cf38e61d867`.
The platform repository is private; this public copy is the integrator contract.

`openapi-typescript` 7.13.0 generates types with optional defaulted request
properties preserved. AJV 8.18.0 generates conditional runtime validators;
esbuild bundles their helpers. Generator dependencies and transitive versions
are locked. Generated comments include the schema digest. The generated
validator includes MIT-licensed AJV and fast-deep-equal helpers; their notices
are retained in the output and [third-party notices](../THIRD_PARTY_NOTICES.md).

Only `POST /api/v1/check-wallet` is mounted. Accepted typed requests are safe
mode with airdrops disabled. Every opportunity has `executionSupported: false`,
and `executionSession` is null. The future draft's builders, recording and usage
routes are absent. This artifact does not establish deployment or provider
readiness. A future contract change requires regeneration, tests and review.
