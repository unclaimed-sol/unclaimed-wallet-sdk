import type { WalletItem } from "./types.js";
/** Recompute over all loaded items, never by adding page summaries. */
export function summarizeOpportunities(items: readonly WalletItem[]) {
  const unique = new Map(items.map((item) => [item.id, item]));
  const groups = new Map<string, WalletItem>();
  for (const item of unique.values()) {
    if (item.opportunity.action === "none") continue;
    const group = item.alternativeGroupId
      ? `group:${item.alternativeGroupId}`
      : `item:${item.id}`;
    const prior = groups.get(group);
    if (!prior || item.opportunity.action === "burn_and_close")
      groups.set(group, item);
  }
  const totals = new Map<
    string,
    {
      asset: string;
      mint?: string;
      decimals: number;
      grossBaseUnits: bigint;
      serviceFeeBaseUnits: bigint;
      netBaseUnits: bigint;
    }
  >();
  for (const item of groups.values()) {
    if (item.opportunity.action === "none") continue;
    for (const value of item.opportunity.valueComponents) {
      const amount = value.gross;
      const key = JSON.stringify([amount.asset, amount.mint, amount.decimals]);
      const total = totals.get(key) ?? {
        asset: amount.asset,
        ...(amount.mint ? { mint: amount.mint } : {}),
        decimals: amount.decimals,
        grossBaseUnits: 0n,
        serviceFeeBaseUnits: 0n,
        netBaseUnits: 0n,
      };
      total.grossBaseUnits += BigInt(value.gross.baseUnits);
      total.serviceFeeBaseUnits += BigInt(value.serviceFee.baseUnits);
      total.netBaseUnits += BigInt(value.netAfterServiceFee.baseUnits);
      totals.set(key, total);
    }
  }
  return {
    countedItemIds: [...groups.values()].map((item) => item.id),
    totalsByAsset: [...totals.values()].map((t) => ({
      ...t,
      grossBaseUnits: String(t.grossBaseUnits),
      serviceFeeBaseUnits: String(t.serviceFeeBaseUnits),
      netBaseUnits: String(t.netBaseUnits),
    })),
  };
}
