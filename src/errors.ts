import type { ErrorCode, ErrorEnvelope } from "./types.js";
export type RetryAction =
  | "same_key"
  | "new_key"
  | "restart_snapshot"
  | "same_receipt"
  | "none";
type Operation = "analysis" | "build" | "record";
export class UnclaimedApiError extends Error {
  readonly name = "UnclaimedApiError";
  readonly code: ErrorCode;
  readonly requestId: string;
  readonly retryable: boolean;
  readonly retryAction: RetryAction;
  constructor(
    readonly status: number,
    envelope: ErrorEnvelope,
    readonly retryAfterMs: number | null,
    operation: Operation = "analysis",
  ) {
    // Never retain arbitrary server message/details, bearer, request body or URL.
    super(`Unclaimed ${operation} refused (${envelope.error.code}).`);
    this.code = envelope.error.code;
    this.requestId = envelope.requestId;
    this.retryable = envelope.error.retryable;
    // Only the distinct confirmed terminal code permits a new attempt.
    // requestId is identity, never proof of publication durability.
    this.retryAction =
      operation === "record" &&
      (this.retryable || this.code === "platform_unavailable")
        ? "same_receipt"
        : this.code === "snapshot_expired" || this.code === "session_expired"
          ? "restart_snapshot"
          : this.code === "platform_unavailable" ||
              this.code === "request_in_progress"
            ? "same_key"
            : this.retryable
              ? "new_key"
              : "none";
  }
}
export class UnclaimedTransportError extends Error {
  readonly name = "UnclaimedTransportError";
  readonly retryAction: "same_key" | "same_receipt";
  constructor(operation: Operation = "analysis") {
    super(
      operation === "record"
        ? "Record response unavailable. Outcome unknown; retry the unchanged reported transaction data with the same execution receipt."
        : `${operation === "build" ? "Build" : "Analysis"} response unavailable. Outcome unknown; retry the unchanged request with the same idempotency key.`,
    );
    this.retryAction = operation === "record" ? "same_receipt" : "same_key";
  }
}
export class UnclaimedProtocolError extends Error {
  readonly name = "UnclaimedProtocolError";
  readonly retryAction: "same_key" | "same_receipt";
  constructor(operation: Operation = "analysis") {
    super(
      operation === "record"
        ? "Invalid record response. Outcome unknown; retain the unchanged reported transaction data and execution receipt."
        : `Invalid ${operation} response. Outcome unknown; retain the unchanged request and idempotency key.`,
    );
    this.retryAction = operation === "record" ? "same_receipt" : "same_key";
  }
}
export class UnclaimedInputError extends Error {
  readonly name = "UnclaimedInputError";
  constructor(message: string) {
    super(message);
  }
}
