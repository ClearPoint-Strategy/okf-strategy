# ADR-0006: `/okf/validate` is the safety oracle; the model executes the writes

- **Status:** Proposed
- **Date:** 2026-07-02
- **Deciders:** ClearPoint (platform)

## Context

ADR-0005 removed orchestration and kept governance as stateless surface: `POST /okf/validate` plus the
review gate. That left an open question — *how much* does validate do? A pure schema linter tells the
model its OKF is well-formed but not whether applying it is safe (does this id exist? may this caller
edit it? is the element locked? is the resolution confident enough?). Those checks are all deterministic,
and doing them in one place is far simpler than scattering them across the model's tool calls.

## Decision

**Fold the whole deterministic governance surface into `/okf/validate`, and have it return a per-concept
*plan* — what is safe to `create` / `update` / `edit`, and what must go to `review` / `reject`.** The
model presents the OKF as it sees it; validate classifies each node (schema, identity resolution against
`resource`/`cps.objectId`, caller capability, `resolved.confidence` vs. threshold, referential integrity,
lock/period state) and, for safe items, names the real write tool (`mcpAdd`/`mcpEdit`/`mcpEditLinks`/
`mcpUpdate`/`mcpUpdateData`). **The model then executes the safe items** via those MCP tools / in-app
actions. Response shape: [`validate-result.schema.json`](../../schemas/validate-result.schema.json).

## Consequences

- **One deterministic step carries all the safety logic**; the model's job shrinks to "present OKF, read
  the plan, execute the greens, escalate the rest."
- **The plan is advisory, not the boundary.** The write endpoints still re-check access server-side
  (defense in depth), and `review`/`reject` + any customer-account write still hit the human gate.
  Mirrors the §4.2 rule that `cps.access` is computed audit, not enforcement.
- Validate now depends on caller identity + live element state (id existence, locks), so it is no longer
  a pure function of its input — it reads, but never writes. That is an acceptable, well-bounded coupling.
- `mcpAdd`/`mcpEdit`/`mcpEditLinks`/`mcpUpdate`/`mcpUpdateData` become the sanctioned write surface the
  plan routes to; keeping that enum in sync with the MCP is a maintenance point.

## Alternatives considered

- **Validate = schema only; the model figures out create-vs-update itself.** Rejected: pushes identity
  resolution, access, and lock checks into non-deterministic model reasoning — the exact fragility the
  deterministic step exists to remove.
- **Validate also applies the safe items.** Rejected: that re-introduces an applier/compiler and makes
  validate a writer. Keeping execution with the model preserves "primitives, not a pipeline" (ADR-0005).
