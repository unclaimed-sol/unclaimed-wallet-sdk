# Release notes

## 0.1.0-preview.5

- Accept the `stale_price` analysis reason/protection for positive token accounts
  with unavailable market evidence and no executable opportunity. Independently
  verified empty-account opportunities remain usable on the same page.
- Require canonical positive balances for that state; zero and noncanonical
  encodings are rejected by the generated runtime validator.
- Preserve existing response states, opportunity totals, exact replay behavior,
  reference expiry checks and explicit pagination/retry handling.

Install the exact version on the server:

```sh
npm install --save-exact @unclaimedsol/wallet-sdk@0.1.0-preview.5
```

Preview.4 rejects the new enums. Upgrade before the API emits them and retain a
compatible client while stored responses remain available. Keep the same API
origin and existing server-side secret configuration. This upgrade changes no
key, allowance, execution capability, fee, signing/submission flow or receipt.
It does not demonstrate live wallet analysis or recovery.
