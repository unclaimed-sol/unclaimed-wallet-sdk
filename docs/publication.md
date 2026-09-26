# Publication checks

## Historical bootstrap: September 22

This repository was inspected as empty on September 22, 2026. Its first commit
contains only the prior-work disclosure so GitHub has a base for an implementation
review PR. No old history is imported. The SDK and reference implementation are
review changes at that checkpoint; no npm package had been published then.
Current publication status is below.

## Checks for future changes

Before pushing this tree or changing public documentation:

1. Run the product repository's `npm run check:rpc-secrets -- --build-dir PATH`
   against a clean export of every publication file (including build output when
   reviewing a package). Do not pass a checkout containing `node_modules`.
2. Run a general secret scanner over that whole export including Markdown, and
   scan the outgoing Git history. Keep redacted reports outside the public tree.
3. Inspect all files for API/demo keys, wallet addresses, transaction signatures,
   customer names and confidential figures. The public examples use synthetic
   repeated-digit fixture addresses and explicit nonfunctional fixture strings.
   No actual customer key, wallet, signature, record or revenue number belongs here.
4. Verify the prior-work disclosure, exact mounted schema provenance, and that
   no private engine/platform implementation is copied. Keep a consistent author
   identity. Inspect `git diff --check`, package contents and public links.
5. Keep fixture/test evidence distinct from live adoption or readiness. Founder
   submission form, evidence sheet, competitor claims, videos, external link
   verification and any named customer consent remain separate deliverables.

## September 26 public npm preview

The owner authorized public npm publication as `@unclaimedsol/wallet-sdk`.
Version `0.1.0-preview.1` is a preview, published with the explicit `latest` tag.
Unauthenticated metadata/latest, exact integrity, a fresh plain npm install and
package-name import were verified. Early post-publication 404s are historical.
The package has no runtime npm dependencies and ships generated client code,
schema, documentation and third-party notices. The reference application stays
in the GitHub checkout. API credentials, activation and execution remain separate.

For future versions, publish only the inspected tarball after these checks pass. Existing package
versions must not be overwritten. If npm authentication or scope permission is
unavailable, retain the reviewed tarball and complete local sign-in; never put an
npm token in this repository or in a conversation. No new project license grant
is made by this packaging change; retained third-party notices apply to their code.

The project LICENSE and package license field are absent. Choosing a project
license remains an owner decision for review; third-party notices do not supply
a license for the SDK itself. This documentation does not make that choice.
