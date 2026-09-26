# Prior-work disclosure

Dated September 22, 2026; updated September 26. This repository is an Unclaimed
API preview increment with analysis and optional build/record client methods. The consumer product and recovery infrastructure predate
this repository and are not presented as newly built here.

Unclaimed SOL launched in **January 2025** (founder-provided date). Prior work
includes the consumer app, its scanning and recovery policies, the on-chain
program, the burn-and-close SDK, the MCP server, the partner widget and legacy
scan/link handoff, affiliate links and partner rewards. The API v1 PRD and
implementation roadmap were also prepared before this SDK increment. Older
commits are not imported or rewritten as new SDK work.

The on-chain program is pre-existing; no public source-repository link is
asserted here. Public background:

- [Unclaimed SOL consumer app](https://unclaimedsol.com)
- [Burn-and-close SDK](https://github.com/unclaimed-sol/spl-burn-close-sdk)
- [MCP server](https://github.com/unclaimed-sol/unclaimed-sol-mcp)

The competition window is September 14–October 12, 2026. In-window API work is
split across the private product engine, the private API platform and this
public SDK repository. The platform owns the public mounted analysis contract;
the approved mounted schema is copied here with its exact provenance. Private
engine/platform implementation code is not copied into this repository.

This increment provides generated analysis types, an analysis client, explicit
pagination/idempotency/error handling, optional build/record methods, and a local
reference integration. The
reference defaults to synthetic fixtures. It demonstrates no live adoption,
real wallet recovery, transaction execution, payment collection or partner
revenue. SDK methods never sign or submit; the current partner rollout keeps
execution builds disabled. No customer identities or confidential
figures are included. The founder must carry this disclosure into the submission
form and distinguish prior consumer traction from new API adoption.
