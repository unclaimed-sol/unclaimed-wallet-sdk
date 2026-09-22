// Generated from openapi/analysis.yaml (SHA-256 893a77f377cc875875d5cd5efae7d5d638f1cece4f054f931d1c77abe445a188). Do not edit.
export interface paths {
    "/check-wallet": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Analyze one wallet page
         * @description Analyze a frozen wallet page in safe mode. Required lookup failures return an incomplete error without a partial or invoiceable page. At most 400 raw token accounts; each page accepts limit 1–200 (default 20). First-page excess results may overlap cleanup; alternative groups must not be added together. Idempotency is mandatory, including retries. Execution is unavailable.
         */
        post: operations["checkWallet"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CheckWalletRequest: {
            wallet: components["schemas"]["Base58"];
            /**
             * @description Only safe analysis is available. Max requests are refused: 403 without capability, 422 with capability. Never silently downgraded.
             * @default safe
             * @enum {string}
             */
            mode?: "safe";
            /**
             * @description Preview: must be false; true returns 422 `airdrops_not_available`.
             * @default false
             * @constant
             */
            includeAirdrops?: false;
            /**
             * @description Accepted for v1 compatibility. Preview never returns an executable sell.
             * @default 1.00
             */
            sellAndCloseMaxUsd?: string;
            /** @default 20 */
            limit?: number;
            /** @description Opaque `nextCursor` from a prior page. Omit or null for the first page. */
            cursor?: string | null;
        };
        Base58: string;
        CheckWalletResponse: {
            requestId: string;
            /** @enum {string} */
            apiVersion: "v1-preview";
            rulesetVersion: string;
            /** @description Preview: always null; no Asset Intelligence is served. */
            assetIntelligenceRulesetVersion: null;
            /** Format: date-time */
            analyzedAt: string;
            /**
             * @description Always true on a 200. Incomplete pages are refused, not served.
             * @enum {boolean}
             */
            complete: true;
            data: {
                wallet: components["schemas"]["Base58"];
                /** @enum {string} */
                mode: "safe";
                /** @description Presentation-only, current page plus first-page wallet modules. Never a whole-wallet total while `hasMore` is true. */
                summary: {
                    /** @enum {string} */
                    scope: "page";
                    analyzedAssetAccounts: number;
                    opportunityCount: number;
                    protectedAssetCount: number;
                    totalsByAsset: {
                        asset: string;
                        mint?: components["schemas"]["Base58"];
                        decimals: number;
                        grossBaseUnits: components["schemas"]["IntegerString"];
                        serviceFeeBaseUnits: components["schemas"]["IntegerString"];
                        netBaseUnits: components["schemas"]["IntegerString"];
                    }[];
                    /** @description Null whenever any required price input is missing or stale. */
                    estimatedNetValueUsd: string | null;
                };
                pagination: {
                    /** @description Raw token accounts analyzed on this page, including those with no opportunity. */
                    returned: number;
                    hasMore: boolean;
                    nextCursor: string | null;
                    /** @description True only on the first page. */
                    walletModulesIncluded: boolean;
                    /**
                     * Format: date-time
                     * @description Shared snapshot and cursor expiry. No execution session is issued.
                     */
                    expiresAt: string;
                };
                items: components["schemas"]["WalletItem"][];
                airdrops: null;
                /** @description Always null in the current analysis-only increment; sessions and builders are outside this stage. */
                executionSession: null;
                limits: {
                    /**
                     * @description Preview cap, enforced before enrichment.
                     * @enum {integer}
                     */
                    maxRawTokenAccounts: 400;
                    /** @enum {integer} */
                    pageLimitMax: 200;
                };
            };
            billing: components["schemas"]["Billing"];
        };
        /** @description Integer base units as a decimal string. Never a JSON number. */
        IntegerString: string;
        /** @description One discriminated item. Preview omits `discardEvidence` and `classification.reputation` entirely rather than nulling them. */
        WalletItem: {
            id: string;
            /** @enum {string} */
            kind: "token_account" | "excess_lamports";
            /**
             * @description For disappeared or unsupported accounts, the platform retains the source from its address-bound frozen inventory. It never supplies missing current account facts from that snapshot.
             * @enum {string}
             */
            source: "spl_token" | "token_2022" | "excess_lamports";
            /** @description Exact target of an excess-lamports item. No current token balance is inferred from frozen inventory. */
            targetAccount?: components["schemas"]["Base58"];
            /** @description Present on every excess-lamports item for a token account and on the token-account item for the same account. The two are alternatives, never additive. */
            alternativeGroupId?: string;
            asset?: {
                mint: components["schemas"]["Base58"];
                /** @enum {string} */
                assetType: "fungible" | "token_account_collectible" | "unknown";
                symbol?: string | null;
                decimals: number;
            };
            account?: {
                address: components["schemas"]["Base58"];
                /** @enum {string} */
                program: "spl_token" | "token_2022";
                balanceBaseUnits: components["schemas"]["IntegerString"];
                rentLamports: components["schemas"]["IntegerString"];
            };
            classification: {
                /**
                 * @description Safe analysis only. Max-mode burn candidates are unavailable. Sell candidates are returned as `review_only`.
                 * @enum {string}
                 */
                disposition: "closeable_empty" | "withdrawable" | "protected" | "review_only" | "no_op";
                /** @enum {string} */
                confidence: "known" | "high" | "low";
                reviewRequired: boolean;
                reasons: ("zero_balance" | "priced_dust_within_policy" | "sell_not_supported_in_preview" | "above_dust_threshold" | "above_net_rent" | "frozen" | "collectible" | "lp_or_position_shaped" | "receipt_token_policy" | "dangerous_token_2022_extension" | "account_missing" | "unsupported_account" | "positive_wsol" | "unpriced" | "completed_no_sell_route" | "unsupported_signer" | "non_positive_net" | "excess_above_rent_exempt_minimum")[];
                protections: ("frozen" | "collectible" | "lp_position" | "receipt_token" | "token_2022_extension" | "unpriced" | "account_state")[];
            };
            /** @description Present on fungible token-account items. */
            market?: {
                /** @enum {string} */
                quoteStatus: "complete" | "unavailable";
                /** @description Null when a route was not requested; false only for a completed no-route lookup. */
                sellRouteAvailable: boolean | null;
                executableQuoteUsd: null | components["schemas"]["DecimalUsd"];
                /** Format: date-time */
                quotedAt: string | null;
            } & (unknown & unknown);
            opportunity: components["schemas"]["BurnAndCloseOpportunity"] | components["schemas"]["RecoverExcessLamportsOpportunity"] | components["schemas"]["NoActionOpportunity"];
        } & (unknown & unknown & unknown & unknown & unknown & unknown & unknown);
        /** @description USD with six decimals, as a string. */
        DecimalUsd: string;
        /**
         * @description Preview downgrade (contract section 6): executes on the existing
         *     on-chain instruction, which burns whatever balance is present when the
         *     transaction runs. Every instance is destructive and carries the
         *     consent text, including accounts reviewed as empty.
         */
        BurnAndCloseOpportunity: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            action: "burn_and_close";
            /** @enum {boolean} */
            destructive: true;
            /**
             * @description Execution is unavailable in this analysis-only stage.
             * @constant
             */
            executionSupported: false;
            /** @description Exact text the integration must show before signing. States the reviewed balance and that execution burns whatever balance is present when the transaction runs; for `assumed_worthless` items also that no price was available. */
            consent: string;
            /** @description The balance the user is reviewing. Zero for empty-account close. */
            reviewedBalanceBaseUnits: components["schemas"]["IntegerString"];
            valueComponents: (components["schemas"]["ValueComponent"] & {
                /** @constant */
                source?: "token_account_close";
            })[];
            costs: components["schemas"]["OpportunityCosts"];
            estimatedNetValueUsd: string | null;
            /** @enum {boolean} */
            estimated: true;
        };
        ValueComponent: {
            /** @enum {string} */
            source: "token_account_close" | "excess_lamports";
            gross: components["schemas"]["Amount"];
            serviceFee: components["schemas"]["Amount"];
            netAfterServiceFee: components["schemas"]["Amount"];
        };
        Amount: {
            /** @description `SOL` in the preview. Other assets appear only when a fee or gross value is denominated in them. */
            asset: string;
            mint?: components["schemas"]["Base58"];
            decimals: number;
            baseUnits: components["schemas"]["IntegerString"];
        };
        OpportunityCosts: {
            /** @enum {string} */
            scope: "standalone_estimate";
            oneTimeSetup: components["schemas"]["Amount"];
            estimatedNetworkFee: components["schemas"]["Amount"];
            nativeFundingRequired: components["schemas"]["Amount"];
        };
        RecoverExcessLamportsOpportunity: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            action: "recover_excess_lamports";
            /** @enum {boolean} */
            destructive: false;
            /**
             * @description Execution is unavailable in this analysis-only stage.
             * @constant
             */
            executionSupported: false;
            valueComponents: (components["schemas"]["ValueComponent"] & {
                /** @constant */
                source?: "excess_lamports";
            })[];
            /** @description Null while the analysis adapter supplies no network/funding estimate. Never infer zero cost. */
            costs: null;
            /** @description No USD valuation is supplied by this analysis adapter. */
            estimatedNetValueUsd: null;
            /** @enum {boolean} */
            estimated: true;
        };
        /** @description Protected, review-only, and no-op items. Never executable. */
        NoActionOpportunity: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            action: "none";
            /** @enum {boolean} */
            destructive: false;
            /** @enum {boolean} */
            executionSupported: false;
            valueComponents: unknown[];
            /** @enum {boolean} */
            estimated: true;
        };
        /**
         * @description Preview: `mode` is always `metered_preview`. `chargedUsd` is the list
         *     price recorded for this complete response and is invoiceable by manual
         *     invoice only. `balanceRemainingUsd` is always null because no prepaid
         *     balance exists in the preview.
         */
        Billing: {
            /** @enum {string} */
            mode: "metered_preview";
            /** @enum {string} */
            currency: "USD";
            billableUnits: number;
            baseChargeUsd: components["schemas"]["DecimalUsd"];
            addOnChargeUsd: components["schemas"]["DecimalUsd"];
            chargedUsd: components["schemas"]["DecimalUsd"];
            balanceRemainingUsd: null;
        };
        ErrorEnvelope: {
            requestId: string;
            error: {
                /** @enum {string} */
                code: "unauthorized" | "key_revoked" | "mode_not_permitted" | "mode_not_available" | "idempotency_key_reused" | "request_in_progress" | "snapshot_expired" | "request_too_large" | "invalid_wallet" | "cursor_mismatch" | "airdrops_not_available" | "wallet_too_large" | "module_limit_exceeded" | "rate_limited" | "internal_error" | "invalid_idempotency_key" | "platform_unavailable" | "platform_failure_recorded" | "invalid_request" | "incomplete" | "upstream_unavailable" | "deadline_exceeded";
                message: string;
                retryable: boolean;
                /** @description Never contains upstream URLs, credentials, raw RPC messages, or provider names. */
                details?: {
                    [key: string]: unknown;
                };
            };
        };
    };
    responses: {
        /** @description Malformed JSON or unsupported request shape. */
        BadRequest: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorEnvelope"];
            };
        };
        /** @description Missing or invalid API key. */
        Unauthorized: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorEnvelope"];
            };
        };
        /**
         * @description `idempotency_key_reused` (not retryable: same key, different endpoint or body) or
         *     `request_in_progress` (retryable: the owning request is still running; keep the same key and retry after `Retry-After`).
         */
        IdempotencyConflict: {
            headers: {
                "Retry-After"?: number;
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorEnvelope"];
            };
        };
        /** @description Request body too large. */
        TooLarge: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorEnvelope"];
            };
        };
        /** @description Customer rate or concurrency limit exceeded. */
        RateLimited: {
            headers: {
                "Retry-After"?: number;
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorEnvelope"];
            };
        };
        /** @description 30-second deadline exceeded. Not invoiceable. */
        Timeout: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorEnvelope"];
            };
        };
    };
    parameters: {
        /** @description Required, 1–128 printable non-space ASCII characters. Same customer, key and canonical body replays the stored response without another admission or invoiceable outcome. A separate non-admitted, noninvoiceable replay usage row is recorded. */
        IdempotencyKey: string;
        /** @description Diagnostics only; never changes results or metering. */
        SdkVersion: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    checkWallet: {
        parameters: {
            query?: never;
            header: {
                /** @description Required, 1–128 printable non-space ASCII characters. Same customer, key and canonical body replays the stored response without another admission or invoiceable outcome. A separate non-admitted, noninvoiceable replay usage row is recorded. */
                "Idempotency-Key": components["parameters"]["IdempotencyKey"];
                /** @description Diagnostics only; never changes results or metering. */
                "X-Unclaimed-SDK-Version"?: components["parameters"]["SdkVersion"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CheckWalletRequest"];
            };
        };
        responses: {
            /** @description Complete page. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CheckWalletResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /**
             * @description Revoked key, or `mode_not_permitted`: the key lacks the `max`
             *     capability. Never silently downgraded.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            409: components["responses"]["IdempotencyConflict"];
            /** @description snapshot_expired: the shared 60-minute snapshot and cursor lifetime expired; start a new first page. No execution session is issued. */
            410: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            413: components["responses"]["TooLarge"];
            /** @description Unsupported JSON content encoding or charset. Journaled without admission. */
            415: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            /**
             * @description `mode_not_available` (max analysis is not mounted yet),
             *     `invalid_wallet`, `cursor_mismatch`, `airdrops_not_available`
             *     (Preview), `wallet_too_large` (Preview: more than 400 raw token
             *     accounts), or a v1 module limit exceeded. Not invoiceable.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            429: components["responses"]["RateLimited"];
            /** @description Sanitized internal analysis failure. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            /**
             * @description `incomplete` (Preview: a required lookup on this page failed after
             *     bounded retry; retry with the same cursor), `upstream_unavailable`,
             *     `platform_unavailable` (persistence outcome uncertain), or
             *     `platform_failure_recorded` (confirmed stored terminal failure).
             *     Retry `platform_unavailable` with the same Idempotency-Key and request:
             *     an uncertain commit may already have a durable response to replay.
             *     For `platform_failure_recorded`, a deliberate new attempt uses a new
             *     key and the same cursor/settings; the old key replays the failure.
             *     Respect Retry-After when supplied. Never infer durability from requestId.
             *     The error response itself does not publish an invoiceable page.
             */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            504: components["responses"]["Timeout"];
        };
    };
}
