# ADR-0005: The model owns orchestration; ClearPoint exposes primitives, not a pipeline

- **Status:** Proposed
- **Date:** 2026-07-02
- **Deciders:** ClearPoint (platform)

## Context

cps-parse's job store, steering file, and execution plan (ADR-0002/0003/0004 of that repo) exist to
compensate for models that could not hold the whole task or reliably self-orchestrate: they sequence
passes, order `ref` creation topologically, and checkpoint for review. A frontier model with tool access
(MCP-proxied REST) can sequence its own reads and writes and interpret the mapping directly. The
scaffolding becomes dead weight — and it blocks the same primitives from being driven by a *customer's*
agent instead of ours.

Two concerns are easy to conflate: **orchestration** (how to sequence the work) and **governance**
(validation before a write, human review before a change lands, confidence on resolved ids). Only the
first is safe to delete.

## Decision

**Delete the orchestration; keep governance as stateless surface.** ClearPoint exposes:

- `GET /okf?scorecardId=&object=&objectId=&periodId=` — deterministic emitter (no LLM), access-enforced,
  `periodId` = valid-time selector.
- `POST /okf/validate` — deterministic conformance gate (`validate.mjs` as a service).
- the **existing REST write endpoints** — already access-controlled and reviewable.
- `POST /okf/parse` — optional convenience wrapping ClearPoint's in-app AI; not architecturally required.

**Two orchestrators, one set of primitives:** in-app, ClearPoint AI drives them; in the customer's
environment, their frontier model drives the same tools through the ClearPoint MCP. See
[docs/api.md](../api.md).

The write gate is non-negotiable: a model may draft freely but may not land a change unreviewed — every
mutation passes `/okf/validate` and routes through review/approval (in-app) or explicit human
confirmation (MCP). This makes closing the `access-control.ts` MCP-bypass (`if (!action) return true`) a
**precondition**, not a nicety.

## Consequences

- cps-parse is largely **absorbed**, not simplified: schemas → cps-okf, validator → `/okf/validate`,
  resolution model → an output field. What remains (job/steering/execution-plan) is exactly what is
  deleted.
- **Determinism is traded** for creation/entity-resolution; updates to known objects stay stable via
  `resource`/`cps.objectId` identity anchoring. The confidence rule survives as
  `cps.provenance.resolved.confidence` + a validate policy.
- The same primitives serve both "ClearPoint AI in the app" and "the customer's Claude/agent via MCP" —
  the direct path to "the MCP everyone plugs into their AI."
- Governance surface is small and auditable (two endpoints + the review gate) instead of an engine.

## Alternatives considered

- **Keep the execution-plan compiler from ADR-0002.** Still viable as an interim for high-volume,
  unattended setup; but for interactive/agent use it is the orchestration we are trying to remove.
  Reconcilable: the compiler becomes one possible *caller* of the same primitives, not a required layer.
- **Let the model write directly with no gate.** Rejected: unreviewed model writes to a customer's
  production account. The gate is the one thing the pivot must not drop.
