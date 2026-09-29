# SDK release and continuation

## Version 0.1.0-preview.2

This checkout targets `@unclaimedsol/wallet-sdk@0.1.0-preview.2`, based on
merged SDK main `02855bef4f6f70cbfccd8be863f62002d6c3dc9c`. It includes the
previous missing-build-key correction and the remaining independent-assessment
fixes: local serialization errors, `same_receipt` guidance for unknown recording
outcomes, and platform-generated outcome constraints. The mounted contract also
keeps `submittedSignatures` typed as an array of Solana signatures.

The package version and `X-Unclaimed-SDK-Version` header are both
`0.1.0-preview.2`. Registry metadata determines whether this version is available;
source readiness alone does not establish publication. API credentials and
execution enablement remain separate from the SDK release.

## Historical published version 0.1.0-preview.1

Updated September 26, 2026. `@unclaimedsol/wallet-sdk@0.1.0-preview.1` is public
on npm. Unauthenticated registry metadata, latest tag, integrity, a fresh plain
install and package-name import were verified. Early post-publication 404s are
historical; publication and public installation are now confirmed.

```sh
npm install @unclaimedsol/wallet-sdk
```

The published package's runtime and generated schema come from reviewed source
`4d6550bb8ac771f773497175a349f15dc6e1e719`; publication adds package metadata and
install documentation. This follow-up handoff document was added afterward and
is not part of the original tarball. Runtime behavior is unchanged.

Published tarball SHA-256:
`b92b01b94e972bd3cefc50888b70b3fe2f24a855cc622cb3db4ce6d4bee26366`.
SHA-512 integrity:
`sha512-tp4rox2u/KCgg/SowmaB7p+CbCDlh8kQANYmAMiPbQqSmLLDDQo4maIM9QeBtu6iwO23bp161lfa2U81l5COYQ==`.
Fresh publication validation passed 45 SDK tests, generation/typecheck/build,
clean export and tarball secret scans, outgoing history scan and offline installation.
These are SDK checks, not live wallet recovery or independent partner acceptance.

API access requires separately provisioned server-side credentials and an origin.
The current partner rollout has not enabled execution builds. Package methods do
not grant access, sign transactions or submit them. Follow the README's deliberate
idempotency/retry behavior; do not automatically make more calls to get a success.

Read AGENTS.md and docs/publication.md before future changes or releases. Keep
private implementation, wallet manifests, credentials and deployment evidence out
of this public repository. Do not republish this version. Future publication must
use a newly reviewed version and package. No project license grant is introduced
by this release; third-party notices remain in THIRD_PARTY_NOTICES.md.

For maintainers with private product-repository access, the single cross-repository
progress/Colosseum handoff lives at `docs/unclaimed-api-continuation.md` in the
private engine repository. This public document intentionally does not duplicate
private operational details. Ordinary integrators only need the public SDK README.

The project LICENSE and package license field are absent. Choosing a project
license remains an owner decision for review; third-party notices do not supply
a license for the SDK itself. This documentation does not make that choice.

## Corrections included in 0.1.0-preview.2

Merged PR #3 already rejects missing/non-string build idempotency keys and
regenerates the mounted contract with corrected build headers/authentication,
actual refusal codes and intact descriptions. Those corrections are not in the
published `0.1.0-preview.1` tarball identified above.

The September 28 independent published-package assessment reproduced three
remaining issues on main: execution serialization errors were classified as
transport failures, unknown recording outcomes advised an idempotency-key retry,
and the record schema admitted recovery fields on unverified outcomes. The
follow-up fixes classify serialization locally, use `same_receipt` for record
transport/protocol failures, and regenerate the platform-owned outcome constraint.
Recovery, fee and burned-amount fields now require `verified_applied`. The
existing missing-key fix passed the assessment unchanged and was not duplicated.

Validation: all 56 SDK tests (including generation, typecheck and build), the
independent harness's 88 behavior checks and six finding assertions, and its
strict TypeScript sample pass offline. The original assessment stays unchanged;
these results use a separate copy against current source. No test establishes
live API access or recovery. The private handoff records platform/Postgres and
synthetic execution acceptance and exact revisions.

The fixes above were merged before release preparation. Publication requires
inspection of the versioned tarball under `docs/publication.md`; do not overwrite
an existing version. Publishing the SDK does not deploy or activate the API.
