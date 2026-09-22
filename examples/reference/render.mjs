import { summarizeOpportunities } from "../../dist/index.js";
export const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const e = escapeHtml;
export function formatAmount(amount) {
  const text = amount.baseUnits.padStart(amount.decimals + 1, "0");
  return `${amount.decimals ? text.slice(0, -amount.decimals) + "." + text.slice(-amount.decimals) : text} ${amount.asset}`;
}
export function render(state, mode) {
  const pages = state.pages ?? [],
    items = pages.flatMap((p) => p.data.items),
    last = pages.at(-1);
  const summary = summarizeOpportunities(items),
    counted = new Set(summary.countedItemIds);
  const form = (action, label) =>
    `<form method="post" action="/"><input type="hidden" name="csrf" value="${e(state.csrf)}"><input type="hidden" name="action" value="${action}"><button>${e(label)}</button></form>`;
  return `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Unclaimed API analysis preview</title><link rel="stylesheet" href="/style.css"><main><p class="eyebrow">UNCLAIMED API · ANALYSIS PREVIEW</p><h1>Explore wallet opportunities</h1><p class="notice"><strong>Execution unavailable.</strong> This integration cannot build, sign, submit or record transactions.</p><p>${mode === "fixture" ? "Offline synthetic fixture. No provider calls, real wallet results or charges." : "Local reference integration using the configured platform. Each requested page is metered; no payment is collected here."}</p>
  <form method="post" action="/"><input type="hidden" name="csrf" value="${e(state.csrf)}"><input type="hidden" name="action" value="start"><label>Wallet address <input name="wallet" required maxlength="44" value="${e(state.wallet ?? "")}" ${mode === "fixture" ? "readonly" : ""}></label><label>Accounts per page <input type="number" name="limit" min="1" max="200" value="${e(state.limit ?? 20)}" ${mode === "fixture" ? "readonly" : ""} required></label><button>Start new analysis</button></form>
  ${state.error ? `<p role="alert">${e(state.error.message)} Retry guidance: ${e(state.error.retryAction)}.${state.retryAt > Date.now() ? ` Wait ${Math.ceil((state.retryAt - Date.now()) / 1000)} seconds before retrying.` : ""}</p>${["same_key", "new_key"].includes(state.error.retryAction) ? form("retry", state.error.retryAction === "same_key" ? "Retry same attempt" : "Start a new attempt for this page") : ""}` : ""}
  ${last ? `<section><h2>Estimates across ${pages.length} loaded page${pages.length === 1 ? "" : "s"}</h2><p>${last.data.pagination.hasMore ? "More pages remain. These estimates are not a whole-wallet total." : "All pages in this snapshot loaded."} Cleanup and excess recovery in the same alternative group are never added together. These are analysis estimates, not executable or guaranteed recovery.</p>${summary.totalsByAsset.map((t) => `<p><strong>Net after service fee: ${e(formatAmount({ asset: t.asset, decimals: t.decimals, baseUnits: t.netBaseUnits }))}</strong><br>Gross: ${e(formatAmount({ asset: t.asset, decimals: t.decimals, baseUnits: t.grossBaseUnits }))} · Service fee: ${e(formatAmount({ asset: t.asset, decimals: t.decimals, baseUnits: t.serviceFeeBaseUnits }))}</p>`).join("")}<p>Network and setup costs are separate standalone estimates; they are not subtracted from these totals. Unknown costs and USD values are unavailable, never zero.</p><p>Snapshot expires: ${e(last.data.pagination.expiresAt)}. ${items.filter((i) => i.classification.disposition === "protected").length} protected items shown.</p></section>` : ""}
  ${items.map((item) => `<article><h2>${e(item.asset?.symbol ?? item.opportunity.action.replaceAll("_", " "))}</h2><p>${e(item.classification.disposition)} · ${e(item.classification.confidence)} confidence · ${item.classification.reviewRequired ? "Review required" : "No review requested"}</p><p>Reasons: ${e(item.classification.reasons.join(", "))}<br>Protections: ${e(item.classification.protections.join(", ") || "None reported")}</p>${item.alternativeGroupId ? `<p>Alternative group: ${e(item.alternativeGroupId)}. ${counted.has(item.id) ? "Counted once in the estimate." : "Excluded from the estimate when cleanup is counted."}</p>` : ""}${item.opportunity.valueComponents.map((v) => `<p>Gross ${e(formatAmount(v.gross))} · Fee ${e(formatAmount(v.serviceFee))} · Net after fee ${e(formatAmount(v.netAfterServiceFee))}</p>`).join("")}${"costs" in item.opportunity ? `<p>${item.opportunity.costs ? `Standalone network estimate: ${e(formatAmount(item.opportunity.costs.estimatedNetworkFee))}; setup: ${e(formatAmount(item.opportunity.costs.oneTimeSetup))}; native funding required: ${e(formatAmount(item.opportunity.costs.nativeFundingRequired))}.` : "Network, setup and funding estimates unavailable."}</p><p>Net USD estimate: ${e(item.opportunity.estimatedNetValueUsd ?? "Unavailable")}</p>` : ""}${item.opportunity.consent ? `<p class="notice">${e(item.opportunity.consent)}</p>` : ""}<p>Execution unavailable</p></article>`).join("")}
  ${pages.map((page, index) => `<p>Page ${index + 1}: ${page.data.pagination.returned} accounts analyzed; ${page.billing.billableUnits} metered unit(s); ${e(page.billing.chargedUsd)} USD ${mode === "fixture" ? "illustrative list price" : "invoiceable list price"}. No payment collected here.</p>`).join("")}
  ${last?.data.pagination.hasMore && !state.error ? form("next", "Request next page") : ""}<p class="foot">Analysis-only reference. No connected wallet, execution session, transaction or recovered funds.</p></main></html>`;
}
