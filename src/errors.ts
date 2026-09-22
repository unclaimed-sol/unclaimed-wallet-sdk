import type { ErrorCode, ErrorEnvelope } from "./types.js";
export type RetryAction = "same_key" | "new_key" | "restart_snapshot" | "none";
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
  ) {
    // Never retain arbitrary server message/details, bearer, request body or URL.
    super(`Unclaimed analysis refused (${envelope.error.code}).`);
    this.code = envelope.error.code;
    this.requestId = envelope.requestId;
    this.retryable = envelope.error.retryable;
    this.retryAction =
      this.code === "snapshot_expired"
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
  readonly retryAction = "same_key";
  constructor() {
    super(
      "Analysis response unavailable. Outcome unknown; retry the unchanged request with the same idempotency key.",
    );
  }
}
export class UnclaimedProtocolError extends Error {
  readonly name = "UnclaimedProtocolError";
  readonly retryAction = "same_key";
  constructor() {
    super(
      "Invalid analysis response. Outcome unknown; retain the unchanged request and idempotency key.",
    );
  }
}
export class UnclaimedInputError extends Error {
  readonly name = "UnclaimedInputError";
  constructor(message: string) {
    super(message);
  }
}
