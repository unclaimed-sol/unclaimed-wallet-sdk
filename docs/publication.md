# Publication checks

This repository was inspected as empty on September 22, 2026. Its first commit
contains only the prior-work disclosure so GitHub has a base for an implementation
review PR. No old history is imported. The SDK and reference implementation are
review changes; no npm package, deployment or transaction is published.

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
