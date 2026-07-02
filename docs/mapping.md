# Mapping: ClearPoint element → OKF-CPS concept

The outbound mirror of cps-parse's `field-mapping.md`, grounded in the real ClearPoint OpenAPI
(`cps-lucee/api/v1/doc/schema/`). **The `cps` block is the on-disk superset of ClearPoint's own
AI-grounding projection** — `_mcpElement`, `_mcpElementStatus`, `_mcpLink`. The emitter can start from
those existing MCP endpoints: they already resolve owner id→name, tags id→string, and per-element/​per-link
`access`, which is most of the projection work.

## One element → one concept

| ClearPoint (schema) | OKF-CPS | Notes |
| ------------------- | ------- | ----- |
| `element` (any `object`) | one `.md` concept | Concept ID = bundle path minus `.md`; `object` enum incl. `workflow` |
| `element.object` | `type` (human, glossary-aliased) + `cps.object` (canonical) | |
| `element.name` / description | `title` / `description` | |
| `element.objectId` | `cps.objectId` + `resource` | round-trip identity |
| `element.scorecardId` / `scorecard` | `cps.scorecardId` / `cps.scorecard` | name carried for grounding |
| `element.parentId` / `initiativeId` | directory nesting + a body link (milestone→`## Parent Initiative`) | derived; not in `_mcpLink` |
| `_mcpLink` (via `/mcp/.../links`) | **body** markdown links grouped under real-`fieldId` headings (`## Parents`, `## Children`, `## Measures`, …) | edges live in the body, not frontmatter |
| `element.access` (caller's access) | *not embedded* — compartment is `cps.scorecardId`; who-can-access is a lookup | axis 2; caller access ≠ minimum required |
| `element.periodGroupId` / status `periodicity` | `cps.status.cadence` + `periodGroupId` | axis 3 |
| `element.displayPeriodId` / status `period`,`periodDate` | `cps.status.currentPeriod` | per-element "current" |
| `elementStatus` (per period) | body section under a period heading | each carries its own editorial stamp |
| `elementStatus.status` / `analysis` / `recommendations` | body prose (period-scoped) | OKF's strongest fit |
| `element.lastEdited` / `lastEditedBy` | `cps.provenance.lastEditedBy` | axis 4 — DEFINITION change |
| `element.lastUpdated` / `lastUpdatedBy` | `cps.provenance.lastUpdatedBy` | axis 4 — STATUS/DATA update (distinct) |
| `element.owner`/`ownerId`/`ownerType`/`collaborators` | `cps.provenance.owner` / `ownerType` / `collaborators` | userId resolved to name, as `_mcpElement` does |
| parse `_map` (derived only) | `cps.provenance.resolved` | axis 4 — resolution/confidence |
| `element.tags` (→ strings in `_mcpElement`) | `tags[]` namespaced `<dimension>:<value>` | axis 5 / facets (§5) |
| `customFields` (element-level) | body `## Details` list (values); definitions in `custom-fields.md` | period-scoped `update` fields → status sidecar |
| users / statuses / periods / customFields | root lookup concepts `users.md` / `statuses.md` / `periods.md` / `custom-fields.md` | resolve ids |
| `measureSeries` (+ `_numberFormat`) | `cps.measure.series[]` | `seriesDataTypeId`, `numberFormat`, `aggregateType`, `calculation` |
| `objectiveEvaluation` | `cps.measure.evaluation[]` | the rule turning a value into a status (direction-of-good) |
| `measureData` / `_seriesData` | inline grounding projection + `cps.measure.dataResource` sidecar | §6 |

## Edge vocabulary is real

Body relationship headings come from the actual `_mcpLink.fieldId` (via `GET /mcp/fetch/.../links`):
`parents`, `children`, `objectives`, `measures`, `initiatives`, `milestones`, `categories`,
`parentMilestone`, `subMilestones`, `actionItems`, `risks`, `goals`. Overlapping rollup views
(`childMeasures`/`childInitiatives`/`initiativeMeasures`/`measureInitiatives`) are omitted. Edges are
grouped under those headings in the body — not duplicated into frontmatter (SPEC §4.1).

## What does NOT go inline

Numeric time series. The body carries the **grounding projection** (latest, target, direction, status,
short trend); the full series is a sidecar at `cps.measure.dataResource`. See [SPEC §6](../SPEC.md#6-metric-data--inline-projection--columnar-sidecar).

## Access is enforced, not embedded

`_mcpElement.access` is the *caller's* access, so it is **not** written into concepts. The compartment is
`cps.scorecardId`; the bundle a caller receives is already filtered to their authorized subset —
enforcement is pre-retrieval in the projector/MCP, never the reader honoring frontmatter. Who-can-access
(scorecard access rules) is a separate lookup. See [SPEC §4.2](../SPEC.md#42-access--compartment-not-the-callers-access).
