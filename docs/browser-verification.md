# Browser verification, September 22, 2026

Actual interactions were performed in the Codex in-app Chromium browser using
synthetic addresses. These observations supplement HTTP tests; they are not
inferred from them. Native Chrome was unavailable, so this is one-browser
coverage. No live providers, production data, payments or transactions were used.

## Reproduced form failure

On merged SDK main `57ac38213b853f5072d86c05251e626093c6c390`, pointer and
keyboard submission left the page unchanged. A local server trace showed the
POST with `Origin: null` and HTTP 403. The document's `no-referrer` policy caused
that native navigation origin; `same-origin` fixed submission while preserving
external referrer suppression. The strict Origin check still rejects `null`
and foreign origins; CSRF, Host, loopback and HttpOnly session checks remain.
Before adding progressive loading, the corrected native form was used to load
both fixture pages in the browser successfully.

## Observed reference interactions

The mounted-platform run used the platform's real Express route, built SDK,
reference Node server and disposable Postgres 17, with synthetic engine HTTP
fixtures. Platform merge baseline: `0b53e082c06456549e99b09fffeb35899f36a2e4`.
The harness remains in the private platform repository; no private source was
copied into this public tree. Browser screenshots and accessibility/DOM states
were inspected during the run.

| Action | Browser observation and server evidence |
| --- | --- |
| Submit synthetic wallet, page size 1; hold enrichment | “Loading analysis. Keep this page open; no automatic retries.” appeared with Start disabled. Releasing the fixture produced results. |
| First page | One protected collectible with reason/protection `collectible`; excess net 0.000950000 SOL, gross 0.001000000, fee 0.000050000. Costs and USD valuation unavailable. More-pages warning and explicit next-page button. |
| Lose next-page response, click Retry same attempt | Unknown-outcome guidance; Start disabled; previous page retained. Retry reused exact key/body/cursor and recovered the exact stored response. |
| Recovered second page | Two loaded pages; net 0.001960000 SOL, gross 0.002000000, fee 0.000040000. Cleanup replaced excess within the alternative group; no 0.002910000 double count. Consent and standalone costs remained visible. No next-page button. |
| Lose success publication acknowledgement | `platform_unavailable`, same-key control; deliberate retry recovered committed success. |
| Record terminal failure on page two | `platform_failure_recorded`, new-attempt control. Editing the unrelated Start form to page size 2 did not change retry: exact original body/cursor, new key, successful second page. |
| Lose failure publication acknowledgement | `platform_unavailable` first; same-key retry recovered `platform_failure_recorded`; only then did the explicit new-attempt control use a new key. |
| Expire snapshot before next page | `snapshot_expired`; loaded page retained and explicit restart offered. Even after editing wallet and page size, restart used original wallet/page size/safe mode, omitted cursor, generated a new key and cleared old pages. |
| Remove fixture cursor before next page | `cursor_mismatch`, no retry or next-page control; previous results and form settings retained. A final two-call browser recheck verified that nonretryable errors have no misleading wait text. |
| Inspect every state | Execution unavailable; no build/sign/record UI, wallet connection or fabricated execution. The server-boundary observer checked every browser response for the generated bearer, internal secret and platform origin; none were exposed. Browser requests had no Authorization header. |

The main mounted-platform browser sequence made 13 SDK calls: six complete
metering rows, four failed rows and three replay rows. Failed/replayed rows had
zero invoiceable amount. The complete rows held a synthetic 0.120000 USD list
price total, with no payment or revenue. One inventory/enrichment sequence per
new attempt and exact replay comparisons were observed through the harness;
keys and bodies were compared in memory, never printed.

The standalone public fixture was also traversed in the browser: first-page
net 0.000950000 SOL became 0.002539280 SOL after overlapping cleanup on page two,
with the protected collectible and required consent visible. Those fixture
amounts differ deliberately from the private mounted-platform fixture.

## Regression checks and boundaries

39 SDK/reference tests cover the existing contracts plus the referrer header,
continued rejection of null/foreign origins, blocked discard of uncertain
attempts, cursor refusal and expiry restart settings, duplicate-submit blocking,
loading, success reload, browser transport uncertainty and back/forward restore.
The platform's 85 offline tests, 92 isolated Postgres tests and 17 actual-platform
SDK acceptance scenarios also passed, including exact durable replay and absent
execution endpoints. Automated checks used Node 22.22.2; browser harness used
Node 24.15.0. No test was skipped.

The SDK input remains exclusively the unchanged mounted `analysis.yaml`, with
types and validators verified by generation freshness checks. The future draft
was not used. Pre-upgrade stored failures retain their original responses for
the 60-minute retention window; no retry promotion or historical rewrite exists.

This closes local browser validation only. The reference remains in-memory and
loopback-only. Provider compatibility, durable hosting/access/retry storage,
session/build/receipt/record work, npm release, licensing and public hosting
remain separate increments or approvals. This evidence proves no live adoption,
production readiness or recovered value.
