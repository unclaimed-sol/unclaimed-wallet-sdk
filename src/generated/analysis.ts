// Generated from openapi/analysis.yaml (SHA-256 0e18daa15475b07b16f28962b15406b9e94e0bc37640c6d6e32bdef7f21eaf4f). Do not edit.
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
         * @description Analyze a frozen wallet page in safe mode. Required lookup failures return an incomplete error without a partial or invoiceable page. At most 400 raw token accounts; each page accepts limit 1–200 (default 20). First-page excess results may overlap cleanup; alternative groups must not be added together. Idempotency is mandatory, including retries. Execution availability is explicit per item and session.
         */
        post: operations["checkWallet"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/build": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Build unsigned transactions for selected items
         * @description v1 section 15.3. Authenticated by the execution session from
         *     `check-wallet`, not the API key. Preview narrowing: only
         *     `burn_and_close` and `recover_excess_lamports`; `stage` is never
         *     accepted; no partner claim token; no sale receipt. Every item is
         *     freshly validated; an item whose reviewed balance changed returns
         *     `changed` with no bytes. Preview downgrade: `burn_and_close` uses the
         *     existing on-chain instruction and burns whatever balance is present at
         *     execution; the `consent` text on the item must be displayed.
         */
        post: operations["build"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/executions/record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Report signatures for verification and recording
         * @description v1 section 15.5. Authenticated by the execution receipt from `build`.
         *     The backend verifies each signature against the stored exact message
         *     bytes and expected signer, fetches the transaction, reconciles every
         *     receipt item against post-transaction account state, and records
         *     verified recovery. Preview: no partner credit is applied; the
         *     canonical signature-purpose reservation still records `api_execution`
         *     so the same signature can never later earn website cashback. Idempotent
         *     by signature and receipt hash.
         */
        post: operations["recordExecution"];
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
                     * @description Shared snapshot and cursor expiry. Session lifetime is shared when enabled.
                     */
                    expiresAt: string;
                };
                items: components["schemas"]["WalletItem"][];
                airdrops: null;
                /** @description Issued only when execution preview is enabled. Shares snapshot expiry. */
                executionSession: null | components["schemas"]["ExecutionSession"];
                limits: {
                    /**
                     * @description Preview cap, enforced before enrichment.
                     * @enum {integer}
                     */
                    maxRawTokenAccounts: 400;
                    /** @enum {integer} */
                    pageLimitMax: 200;
                };
            } & unknown;
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
            /** @description True only when the execution preview is enabled and this action is supported. */
            executionSupported: boolean;
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
            /** @description True only when the execution preview is enabled and this action is supported. */
            executionSupported: boolean;
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
        ExecutionSession: {
            /** @description Non-secret identifier. */
            id: string;
            /** @description Bearer capability for `/build`. Keep out of URLs */
            token: string;
            /** Format: date-time */
            expiresAt: string;
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
                code: "unauthorized" | "key_revoked" | "mode_not_permitted" | "mode_not_available" | "idempotency_key_reused" | "request_in_progress" | "snapshot_expired" | "request_too_large" | "invalid_wallet" | "cursor_mismatch" | "airdrops_not_available" | "wallet_too_large" | "module_limit_exceeded" | "rate_limited" | "internal_error" | "invalid_idempotency_key" | "platform_unavailable" | "platform_failure_recorded" | "invalid_request" | "incomplete" | "upstream_unavailable" | "deadline_exceeded" | "session_mismatch" | "session_expired" | "item_not_in_session" | "execution_in_progress" | "invalid_receipt" | "receipt_mismatch" | "receipt_expired" | "invalid_signature" | "credit_admission_paused";
                message: string;
                retryable: boolean;
                /** @description Never contains upstream URLs, credentials, raw RPC messages, or provider names. */
                details?: {
                    [key: string]: unknown;
                };
            };
        };
        BuildRequest: {
            wallet: components["schemas"]["Base58"];
            items: {
                id: string;
                /** @enum {string} */
                action: "burn_and_close" | "recover_excess_lamports";
            }[];
        };
        BuildResponse: {
            requestId: string;
            analysisRequestId: string;
            /** @enum {string} */
            apiVersion: "v1-preview";
            analysisRulesetVersion: string;
            /** @description Ruleset applied by this fresh build. May narrow */
            rulesetVersion: string;
            /** Format: date-time */
            builtAt: string;
            transactions: {
                id: string;
                itemIds: string[];
                /** @enum {string} */
                format: "solana_legacy_base64";
                /** @enum {string} */
                submission: "direct_solana";
                /** @description Base64. Unsigned. Contains placeholder signature slots. */
                unsignedTransaction: string;
                lastValidBlockHeight: components["schemas"]["IntegerString"];
                estimatedNetworkFee: components["schemas"]["Amount"];
            }[];
            items: (components["schemas"]["BuiltItem"] | components["schemas"]["NotBuiltItem"])[];
            plan: {
                transactionCount: number;
                /** @description Equal to `transactionCount` for every preview action. */
                estimatedTotalTransactionCount: number;
                currentStageCosts: components["schemas"]["PlanCosts"];
                costs: components["schemas"]["PlanCosts"];
                estimatedNetValueUsd: string | null;
                valuation: null | components["schemas"]["Valuation"];
            };
            /** @description Null only when no transaction was built. */
            executionReceipt: null | {
                token: string;
                /**
                 * Format: date-time
                 * @description Seven days after build.
                 */
                expiresAt: string;
                /**
                 * @description Preview: always false.
                 * @enum {boolean}
                 */
                partnerAttribution: false;
            };
            warnings: string[];
        };
        /** @description An item that produced bytes. Fresh authoritative amounts are mandatory so the integration reviews build-time values, not analysis-time estimates. */
        BuiltItem: {
            id: string;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            status: "built";
            authoritativeOpportunity: components["schemas"]["AuthoritativeBurnAndClose"] | components["schemas"]["AuthoritativeRecoverExcessLamports"];
        };
        AuthoritativeBurnAndClose: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            action: "burn_and_close";
            /** @enum {boolean} */
            reviewRequired: true;
            /** @description Refreshed at build time with the fresh reviewed balance. */
            consent: string;
            /** @description The balance re-read at build; the value stored against the receipt for the section 6 measurement. */
            reviewedBalanceBaseUnits: components["schemas"]["IntegerString"];
            valueComponents: components["schemas"]["ValueComponent"][];
            costs: components["schemas"]["ItemCosts"];
            estimatedNetValueUsd: string | null;
        };
        ItemCosts: {
            /** @enum {string} */
            scope: "item_attributable";
            oneTimeSetup: components["schemas"]["Amount"];
        };
        AuthoritativeRecoverExcessLamports: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            action: "recover_excess_lamports";
            reviewRequired: boolean;
            valueComponents: components["schemas"]["ValueComponent"][];
            costs: components["schemas"]["ItemCosts"];
            estimatedNetValueUsd: string | null;
        };
        NotBuiltItem: {
            id: string;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            status: "changed" | "rejected";
            /** @enum {string} */
            reason: "balance_changed" | "account_closed" | "authority_changed" | "frozen" | "protected_by_current_ruleset" | "unsupported_in_preview" | "over_wire_limit";
            /** @description Present for `balance_changed` where safe to disclose. */
            currentBalanceBaseUnits?: components["schemas"]["IntegerString"];
        };
        PlanCosts: {
            /** @enum {string} */
            scope: "current_stage_total" | "plan_total";
            oneTimeSetup: components["schemas"]["Amount"];
            estimatedNetworkFee: components["schemas"]["Amount"];
            nativeFundingRequired: components["schemas"]["Amount"];
        };
        Valuation: {
            /** @enum {string} */
            currency: "USD";
            /** Format: date-time */
            calculatedAt: string;
            inputs: {
                asset: string;
                mint?: components["schemas"]["Base58"];
                /** @enum {string} */
                pricingMethod: "market_quote" | "fixed_parity";
                unitPriceUsd: components["schemas"]["DecimalUsd"];
                /** Format: date-time */
                pricedAt: string;
                maximumAgeSeconds: number;
            }[];
        };
        RecordRequest: {
            wallet: components["schemas"]["Base58"];
            transactions: ({
                id: string;
                /** @enum {string} */
                status: "submitted";
                /** @description Base58 transaction signature. */
                signature: string;
            } | {
                id: string;
                /** @enum {string} */
                status: "not_signed";
            })[];
        };
        RecordResponse: {
            requestId: string;
            receiptId: string;
            /** @description True on 200 */
            terminal: boolean;
            transactions: {
                id: string;
                signature?: string | null;
                /** @enum {string} */
                outcome: "verified_success" | "verified_failure" | "pending" | "unknown" | "duplicate" | "not_signed_pending_expiry" | "abandoned_unknown";
                landedSlot?: number | null;
            }[];
            items: {
                id: string;
                transactionId: string;
                /** @enum {string} */
                outcome: "verified_applied" | "verified_not_applied" | "verified_failed" | "pending" | "unknown" | "abandoned_unknown";
                /**
                 * @description Which purpose holds the canonical reservation for this
                 *     item's signature, or null while no signature exists
                 *     (`not_signed`, `not_signed_pending_expiry`,
                 *     `abandoned_unknown`) or no reservation has been made yet.
                 *     `api_execution` is the normal preview value and creates no
                 *     credit. `website_cashback` or `partner_credit` means that
                 *     program reserved the signature before this record arrived;
                 *     the execution outcome is still verified and recorded here,
                 *     and no second credit is applied. Independent of `outcome`.
                 * @enum {string|null}
                 */
                creditPurpose: "api_execution" | "website_cashback" | "partner_credit" | null;
                /**
                 * @description `reserved` means the purpose holder claimed the signature;
                 *     `held` means a legacy claim without ledger evidence that is
                 *     awaiting Admin reconciliation; `published` means the holder
                 *     committed its ledger entry. Neither `reserved` nor `held`
                 *     is proof of payment. Null whenever `creditPurpose` is null.
                 * @enum {string|null}
                 */
                creditState: "reserved" | "held" | "published" | null;
                /** @description Present only for `verified_applied`. Net to the wallet after the service fee, derived from on-chain state, never from client input. */
                recovered?: components["schemas"]["Amount"];
                serviceFee?: components["schemas"]["Amount"];
                /**
                 * @description Preview: the amount the landed `burn_and_close` actually
                 *     burned, from the transaction. Compared server-side with the
                 *     reviewed balance to measure the section 6 downgrade. Present
                 *     only for `verified_applied` burn-and-close items.
                 */
                burnedBaseUnits?: components["schemas"]["IntegerString"];
            }[];
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
            /** @description snapshot_expired: the shared 60-minute snapshot and cursor lifetime expired; start a new first page. Session lifetime is shared when enabled. */
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
    build: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuildRequest"];
            };
        };
        responses: {
            /** @description Every requested item received a validation decision. Not every item necessarily produced bytes. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BuildResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            /** @description Missing, malformed, or invalid execution session. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            /** @description Wallet, item, or action outside the session authorization. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            /** @description `active_build_pending`: an overlapping build generation in this session must be recorded or reconciled first. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            /** @description Session expired; run `check-wallet` again. */
            410: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            /** @description More than 20 items, or `build_plan_too_large`. */
            413: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            /** @description `mutually_exclusive_items`: two items share an `alternativeGroupId`. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            429: components["responses"]["RateLimited"];
            /** @description Fresh on-chain validation could not complete safely. No bytes. */
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
    recordExecution: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordRequest"];
            };
        };
        responses: {
            /** @description Every receipt item has a terminal outcome, or the report duplicates one already terminal. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecordResponse"];
                };
            };
            /** @description At least one item is still `pending`, `unknown`, or `not_signed_pending_expiry`. Retry later with the same body. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecordResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            /** @description Missing, malformed, or invalid execution receipt. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            /** @description Wallet or transaction ID does not belong to this receipt. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            /** @description Receipt expired before any record was started. */
            410: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            /** @description `signature_message_mismatch`: the signature does not bind to the stored message bytes for that transaction. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
            429: components["responses"]["RateLimited"];
            /** @description `upstream_unavailable`: status reconciliation could not complete, or `credit_admission_paused` during the signature-purpose migration. Retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorEnvelope"];
                };
            };
        };
    };
}
