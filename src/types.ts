import type { components, operations } from "./generated/analysis.js";
export type CheckWalletRequest = components["schemas"]["CheckWalletRequest"];
export type CheckWalletResponse = components["schemas"]["CheckWalletResponse"];
export type WalletItem = components["schemas"]["WalletItem"];
export type Amount = components["schemas"]["Amount"];
export type ErrorEnvelope = components["schemas"]["ErrorEnvelope"];
export type ErrorCode = ErrorEnvelope["error"]["code"];
export type CheckWalletStatus = keyof operations["checkWallet"]["responses"];
export type { components, operations, paths } from "./generated/analysis.js";
