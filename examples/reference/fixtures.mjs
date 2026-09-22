// Entirely synthetic offline fixture. No on-chain lookup or historical response.
export const fixtureWallet = "1".repeat(32);
const account = "2".repeat(32);
const protectedAccount = "3".repeat(32);
const mint = "4".repeat(32);
const amount = (baseUnits) => ({ asset: "SOL", decimals: 9, baseUnits });
const component = (source, gross, fee, net) => ({
  source,
  gross: amount(gross),
  serviceFee: amount(fee),
  netAfterServiceFee: amount(net),
});
export function fixturePages(wallet = fixtureWallet) {
  const now = new Date().toISOString(),
    expiresAt = new Date(Date.now() + 3_600_000).toISOString();
  const base = {
    requestId: "fixture-page-1",
    apiVersion: "v1-preview",
    rulesetVersion: "offline-fixture",
    assetIntelligenceRulesetVersion: null,
    analyzedAt: now,
    complete: true,
    billing: {
      mode: "metered_preview",
      currency: "USD",
      billableUnits: 1,
      baseChargeUsd: "0.020000",
      addOnChargeUsd: "0.000000",
      chargedUsd: "0.020000",
      balanceRemainingUsd: null,
    },
    data: {
      wallet,
      mode: "safe",
      summary: {
        scope: "page",
        analyzedAssetAccounts: 1,
        opportunityCount: 1,
        protectedAssetCount: 1,
        totalsByAsset: [
          {
            asset: "SOL",
            decimals: 9,
            grossBaseUnits: "1000000",
            serviceFeeBaseUnits: "50000",
            netBaseUnits: "950000",
          },
        ],
        estimatedNetValueUsd: null,
      },
      pagination: {
        returned: 1,
        hasMore: true,
        nextCursor: "ucur_" + "a".repeat(43),
        walletModulesIncluded: true,
        expiresAt,
      },
      airdrops: null,
      executionSession: null,
      limits: { maxRawTokenAccounts: 400, pageLimitMax: 200 },
      items: [
        {
          id: "fixture-protected",
          kind: "token_account",
          source: "spl_token",
          account: {
            address: protectedAccount,
            program: "spl_token",
            balanceBaseUnits: "1",
            rentLamports: "2039280",
          },
          asset: {
            mint,
            assetType: "token_account_collectible",
            decimals: 0,
            symbol: "Synthetic collectible",
          },
          classification: {
            disposition: "protected",
            confidence: "known",
            reviewRequired: true,
            reasons: ["collectible"],
            protections: ["collectible"],
          },
          opportunity: {
            action: "none",
            destructive: false,
            executionSupported: false,
            valueComponents: [],
            estimated: true,
          },
        },
        {
          id: "fixture-excess",
          kind: "excess_lamports",
          source: "excess_lamports",
          targetAccount: account,
          alternativeGroupId: "fixture-alternative",
          classification: {
            disposition: "withdrawable",
            confidence: "known",
            reviewRequired: true,
            reasons: ["excess_above_rent_exempt_minimum"],
            protections: [],
          },
          opportunity: {
            action: "recover_excess_lamports",
            destructive: false,
            executionSupported: false,
            valueComponents: [
              component("excess_lamports", "1000000", "50000", "950000"),
            ],
            costs: null,
            estimatedNetValueUsd: null,
            estimated: true,
          },
        },
      ],
    },
  };
  const second = structuredClone(base);
  second.requestId = "fixture-page-2";
  second.data.pagination = {
    ...base.data.pagination,
    hasMore: false,
    nextCursor: null,
    walletModulesIncluded: false,
  };
  second.data.summary = {
    ...base.data.summary,
    protectedAssetCount: 0,
    totalsByAsset: [
      {
        asset: "SOL",
        decimals: 9,
        grossBaseUnits: "3039280",
        serviceFeeBaseUnits: "500000",
        netBaseUnits: "2539280",
      },
    ],
  };
  second.data.items = [
    {
      id: "fixture-cleanup",
      kind: "token_account",
      source: "spl_token",
      alternativeGroupId: "fixture-alternative",
      account: {
        address: account,
        program: "spl_token",
        balanceBaseUnits: "0",
        rentLamports: "3039280",
      },
      asset: { mint, assetType: "unknown", decimals: 0 },
      classification: {
        disposition: "closeable_empty",
        confidence: "known",
        reviewRequired: true,
        reasons: ["zero_balance"],
        protections: [],
      },
      opportunity: {
        action: "burn_and_close",
        destructive: true,
        executionSupported: false,
        consent:
          "Reviewed balance: 0. The existing instruction would burn whatever balance is present when the transaction runs. Execution is unavailable in this preview.",
        reviewedBalanceBaseUnits: "0",
        valueComponents: [
          component("token_account_close", "3039280", "500000", "2539280"),
        ],
        costs: {
          scope: "standalone_estimate",
          oneTimeSetup: amount("0"),
          estimatedNetworkFee: amount("5000"),
          nativeFundingRequired: amount("5000"),
        },
        estimatedNetValueUsd: null,
        estimated: true,
      },
    },
  ];
  return [base, second];
}
export function fixtureFetch() {
  const replies = new Map();
  let pages;
  return async (_url, init) => {
    const body = JSON.parse(init.body),
      key = new Headers(init.headers).get("idempotency-key");
    const prior = replies.get(key);
    if (prior)
      return prior.request === init.body
        ? Response.json(prior.body)
        : Response.json(
            {
              requestId: "fixture-conflict",
              error: {
                code: "idempotency_key_reused",
                message: "Fixture key reused.",
                retryable: false,
              },
            },
            { status: 409 },
          );
    pages ??= fixturePages(body.wallet);
    const page = body.cursor ? pages[1] : pages[0];
    replies.set(key, { request: init.body, body: page });
    return Response.json(page);
  };
}
