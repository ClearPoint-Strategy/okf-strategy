# ADR-0002: OKF-CPS is the single interchange format; LLM authors, a compiler applies

- **Status:** Proposed
- **Date:** 2026-07-02
- **Deciders:** ClearPoint (platform)

## Context

cps-parse has the contractor hand-build a parser that emits strict, conditional JSON envelopes
(draft-2020-12 with `allOf`/`anyOf`). LLMs are markedly better at authoring markdown + YAML frontmatter
than at reliably emitting that JSON. Once OKF-CPS exists as a faithful, LLM-legible representation of the
same graph (nodes, typed edges, period-scoped facts, provenance/confidence, identity), maintaining a
second bespoke authoring format is redundant — and it blocks the round-trip that makes this a platform.

But OKF is **permissive by design** (broken links tolerated, unknown keys preserved, no validation
failures). Permissiveness is correct for *interchange* and dangerous for *mutating a system of record*:
we must never let a permissive bundle write straight into ClearPoint.

## Decision

Make **OKF-CPS the single interchange format**, inbound and outbound. Replace envelope *authoring* with:

```
sources → LLM authors an updated OKF-CPS bundle → deterministic diff→apply COMPILER → importer → ClearPoint
```

The **discipline the envelope carried does not disappear — it relocates** into the compiler and the
validator: confidence threshold, `unresolved[]` gate, topological `ref` ordering, reconciliation, and
HITL review all live in the compiler; conformance lives in `validate.mjs`. Identity for the diff comes
from `cps.objectId` / `resource` in frontmatter.

## Consequences

- The contractor-authored bespoke parser can retire; the contract shifts from "envelope JSON schemas" to
  "the OKF-CPS profile + a diff semantics" — a cleaner, more durable contract.
- **The write path stays strict and reviewable.** OKF's permissiveness never reaches the database; the
  compiler is the gate.
- Round-trip identity becomes load-bearing: every node needs a stable id or a new-object ref. This is the
  old resolution problem relocated to frontmatter + the compiler's matching, not a new one.
- The validator is promoted to a first-class conformance gate for a (candidate) open format.

## Alternatives considered

- **Keep envelopes; add OKF only as read-only export.** Viable interim, but leaves two formats and never
  closes the loop.
- **Let the LLM write directly to the importer.** Rejected: drops the confidence/ordering/HITL guarantees
  that protect a client's account — exactly what ADR-0001 of cps-parse refused.
