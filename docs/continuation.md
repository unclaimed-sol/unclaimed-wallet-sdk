# SDK release and continuation

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
