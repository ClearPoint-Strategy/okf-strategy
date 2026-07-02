# ADR-0007: Bundles are a cross-account migration unit; references resolve by name

- **Status:** Proposed
- **Date:** 2026-07-02
- **Deciders:** ClearPoint (platform)

## Context

An OKF-CPS bundle is a portable, self-contained projection of an account's strategy. Two write-path
needs converge on the same machinery:

1. **Input validation** — an LLM emits well-structured OKF-CPS, but some references (a reporting period,
   a scorecard, an owner, a status, a custom field, another element) may not exist or may be free text
   that needs resolving to an id.
2. **Cross-account migration / templating / cloning** — move a scorecard (or a whole account's strategy)
   from account A into account B, via the app importer or an MCP agent. This is already done by hand
   today; the Metropolis account literally contains "Scorecard Template", "ClearPoint Implementation",
   and "Demo Rewrite" scorecards.

The unifying fact: **every account-specific value in a bundle is an id** (`objectId`, `scorecardId`,
`periodId`, `userId`, `statusId`, `customFieldId`), and **none of those are valid in another account.**
But the bundle does not depend on ids for its integrity — structure travels as bundle-relative paths,
and bindings travel as names plus the glossary.

## Decision

**Treat the OKF-CPS bundle as the unit of transfer, and resolve all references by name against the
TARGET account's lookups.** A reference is in one of three states:

- **Resolved** — carries the canonical id. Trusted (same-account round-trip).
- **By-name** — carries free text only. `POST /okf/validate` resolves it: `glossary alias → fuzzy match
  vs the typed lookup → {id, confidence, candidates}` (the cps-parse `_map`/confidence/`unresolved[]`
  model, now reading the bundle's own lookups: `users.md`, `statuses.md`, `periods.md` /
  `periodicities.md`, `custom-fields.md`, `glossary.md`, the scorecard list).
- **New** — a strategy element that doesn't exist in the target; carries a local `ref` slug (no
  `objectId`) and is created in a topological pass.

**Input is output with the ids blanked** — the same emitted shapes are valid input, so there is no
separate input format; validate fills ids in or flags them.

**Identity flips by direction.** Round-trip (same account) anchors on `objectId` / `resource`. Migration
(cross-account) *ignores* them — identity becomes name + bundle path + structure — and elements are
created fresh; `resource: clearpoint://scorecard/77146/...` is a stable anchor for A and pure metadata
for B.

**Resolution behavior is per-type** — creatable vs must-exist:

| Reference | Lookup | No match in target |
| --------- | ------ | ------------------ |
| element (objective/measure/…) | bundle catalog / target | **create** (ref slug, topological) |
| linkage | bundle-relative paths | **recreate** from the bundle graph |
| owner / collaborator | `users.md` | **unresolved** — cannot create a user; review / mapping table |
| period | `periods.md` / `periodicities.md` | **map to nearest, or a period-config op**; else review |
| status | `statuses.md` + glossary; must pass `validFor` | **map or create** the status config |
| custom field | `custom-fields.md` (scoped by element type + scorecard) | **create the field definition** in B |
| scorecard | scorecard list | **create or map** the target scorecard |
| glossary / vocabulary | `glossary.md` | **port** A's vocabulary into B, or **map** to B's canonical |

Must-exist references fail **closed** to review; they are never silently dropped.

## Consequences

- **The bundle becomes a migration / templating / cloning primitive**, not just an export. A template
  bundle instantiates into any account via `GET /okf` → `POST /okf/parse`/`validate` → create.
- **Every "carry the human name" and "lookups in the bundle" decision pays off here** — migration is only
  possible because the bundle is name-resolvable and self-contained. That was a readability/grounding
  decision; portability is the dividend.
- **`/okf/validate` gains a resolution pass** (extends `validate-result.schema.json` with `resolutions[]`)
  and its verdict is *fed* by resolution: a sub-threshold owner → `review`; an unmatched must-exist
  scorecard → `reject`.
- **Round-trip stays stable**: names in → validate resolves → ids written back → re-validate is a no-op.
- **The LLM can self-resolve** because the target's lookups can be handed to it (they are just a bundle),
  so validate mostly confirms.
- **Hard parts remain**: user resolution (people differ across accounts) is the main friction; periods
  are a time-axis config, not content; importing into an *existing* B scorecard is a diff/merge, not a
  clean create; and glossary porting-vs-mapping is a per-migration choice.

## Alternatives considered

- **Port ids directly (id remap table).** Rejected: ids are district-scoped and meaningless across
  accounts; a remap table is exactly what name-resolution-against-lookups computes, but automatically.
- **A separate migration format.** Rejected: input = output-with-blank-ids means one format, one
  resolver, one validate endpoint.
