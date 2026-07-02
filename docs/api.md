# OKF API surface — primitives, not orchestration

**These endpoints live in the cps-lucee REST API** (`cps-lucee/api/v1`, alongside `/scorecards`,
`/mcp/*`, etc.) — they are ClearPoint-owned server endpoints, not tooling in this repo. cps-okf defines
the *contract* (schemas + this doc); cps-lucee *implements* it. The reference logic for the deterministic
emitter and validator is prototyped in `local/emit-okf.mjs` (built against the real `/mcp/fetchScorecard`
projection) and ports to a Lucee handler.

The pivot (ADR-0005): there is **no job store, steering file, or execution plan.** A frontier model owns
all orchestration. cps-lucee exposes **two deterministic primitives + the existing REST write
endpoints**, and either ClearPoint's in-app AI *or* the customer's own agent (via the ClearPoint MCP)
drives them. Same tools, different driver.

| endpoint | cps-lucee path |
| -------- | -------------- |
| emit | `GET /api/v1/okf` |
| validate | `POST /api/v1/okf/validate` |
| parse (optional) | `POST /api/v1/okf/parse` |

## Endpoints

### `GET /okf?scorecardId=&object=&objectId=&periodId=`  — emit (deterministic)

Projects the ClearPoint graph to an OKF-CPS bundle/concept, filtered by the params, **access-enforced
pre-retrieval** (§4.2 — the caller only ever receives their authorized subset). No LLM: this is the
emitter mapping `_mcpElement`/`_mcpElementStatus`/`_mcpLink` → concepts.

- `scorecardId` / `object` / `objectId` — scope (whole scorecard, one type, one element).
- `periodId` — **valid-time selector**: return the bundle *as-of* that reporting period. Omit = current
  (per-element, at each element's own cadence).

This is the read/ground surface — what any AI consumes. It is idempotent and non-destructive; full model
freedom upstream of it is safe because a mis-read is a wrong answer, not corrupted data.

### `POST /okf/validate`  — the safety oracle (deterministic)

Body: the OKF-CPS **as presented by the LLM**. Returns a **plan** — per concept, *what is safe to do and
how* — shaped by [`validate-result.schema.json`](../schemas/validate-result.schema.json). This is the
whole governance surface collapsed into one deterministic call: the model presents its proposed OKF, and
`/validate` classifies each node, then the model executes the safe items via the MCP write tools /
in-app actions.

Per concept it returns a `verdict`:

| verdict | meaning | how the model applies it |
| ------- | ------- | ------------------------ |
| `create` | no `objectId`, valid, refs resolve, caller has capability | `mcpAdd` → `POST /scorecards/{id}/{object}s` |
| `update` | known `objectId`, period-scoped change (status/analysis/recommendations/data/period customField) | `mcpUpdate` / `mcpUpdateData` |
| `edit` | known `objectId`, definitional change (name/links/dates/edit customField) | `mcpEdit` / `mcpEditLinks` |
| `review` | ambiguous identity, sub-threshold `confidence`, referential gap, or insufficient capability | **surface to a human** |
| `reject` | schema-invalid or forbidden (no access / marking / locked element or period) | do not apply |

The deterministic checks behind a verdict: schema conformance, identity resolution
(`resource`/`cps.objectId` → existing element), caller capability vs. required, `resolved.confidence` vs.
threshold, referential integrity (edge targets exist), and lock/period state.

**The plan is an advisory pre-flight + linter, not the security boundary.** The real write endpoints
re-check access server-side (defense in depth — never trust the plan alone), and `review`/`reject` items,
plus anything landing in a customer account, still pass the human gate. `/validate` tells the model
what's safe; it does not itself make it safe.

### `POST /okf/parse`  — interpret (non-deterministic; optional)

Body: unstructured input (a document reference, or a natural-language instruction) + a target scope.
Returns **proposed** OKF-CPS (a bundle or a diff). This is the only place a model interprets.

It is a *convenience*, not a necessity: in-app it wraps ClearPoint's own AI calling the primitives above;
in the customer's environment their agent does the same work through MCP tools and may not call it at all.

## Two orchestrators, one set of primitives

| Mode | Orchestrator | How it runs |
| ---- | ------------ | ----------- |
| **In-app** | ClearPoint AI (server-side) | `POST /okf/parse` wraps our model; or our model calls `GET /okf` + `/okf/validate` + write endpoints directly. |
| **Customer env** | the customer's frontier model | The ClearPoint **MCP** exposes `GET /okf` + `POST /okf/validate` (+ write endpoints) as tools; their agent orchestrates. |

## The write gate is the one non-negotiable

Reads and validation are safe to hand fully to the model. **Writes are not.** A model may *draft* freely;
it may not *land* changes in a customer account unreviewed:

- Every mutation must pass `POST /okf/validate` first.
- Mutations route through the existing **review/approval UI** (in-app) or require **explicit human
  confirmation** (MCP mode).
- **MCP write tools must be access-gated + approval-required.** Today `access-control.ts` lets non-registry
  (MCP) tools through untouched (`if (!action) return true`) — that gap must be closed, or "no
  orchestration" becomes "unreviewed model writes to prod." This is a precondition of the pivot.

## What this deletes vs. keeps

- **Deleted:** the parse-job store, steering file, execution plan, topological pass ordering — all of
  cps-parse's orchestration.
- **Kept, as stateless surface:** validation (`/okf/validate`), the review/approval gate, and the
  confidence discipline (now an output field `cps.provenance.resolved.confidence` + a validate rule).
- **Non-determinism** lands on creation/entity-resolution, not on updates to known objects. Identity
  anchoring (`resource` / `cps.objectId`) keeps re-runs stable against existing elements.
