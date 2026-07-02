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
| `element.parentId` | `cps.parent` (bundle path) + directory nesting | |
| `element.links` / `_mcpLink` | `cps.edges[]` **and** a markdown link in the body | typed (real `fieldId` enum, per-link `access`, `weight`) + portable |
| `element.access` (`_elementAccess`) | `cps.access.minCapability` + `markings` | axis 2; propagate ∩ on rollups/edges |
| `element.periodGroupId` / status `periodicity` | `cps.time.cadence` + `periodGroupId` | axis 3 |
| `element.displayPeriodId` / status `period`,`periodDate` | `cps.time.currentPeriod` | per-element "current" |
| `elementStatus` (per period) | body section under a period heading | each carries its own editorial stamp |
| `elementStatus.status` / `analysis` / `recommendations` | body prose (period-scoped) | OKF's strongest fit |
| `element.lastEdited` / `lastEditedBy` | `cps.provenance.lastEditedBy` | axis 4 — DEFINITION change |
| `element.lastUpdated` / `lastUpdatedBy` | `cps.provenance.lastUpdatedBy` | axis 4 — STATUS/DATA update (distinct) |
| `element.owner`/`ownerId`/`ownerType`/`collaborators` | `cps.provenance.owner` / `ownerType` / `collaborators` | userId resolved to name, as `_mcpElement` does |
| parse `_map` (derived only) | `cps.provenance.resolved` | axis 4 — resolution/confidence |
| `element.tags` (→ strings in `_mcpElement`) | `tags[]` namespaced `<dimension>:<value>` | axis 5 / facets (§5) |
| `customFields` (`_mcpElement.customFields`) | `cps.customFields[]` `{fieldId,name,fieldType,value}` | `name` is org label → glossary |
| `measureSeries` (+ `_numberFormat`) | `cps.measure.series[]` | `seriesDataTypeId`, `numberFormat`, `aggregateType`, `calculation` |
| `objectiveEvaluation` | `cps.measure.evaluation[]` | the rule turning a value into a status (direction-of-good) |
| `measureData` / `_seriesData` | inline grounding projection + `cps.measure.dataResource` sidecar | §6 |

## Edge vocabulary is real

`cps.edges[].fieldId` uses the actual `_mcpLink.fieldId` enum — `objectives`, `measures`, `initiatives`,
`categories`, `risks`, `milestones`, `parents`, `children`, `parentMilestone`, `subMilestones`,
`actionItems`, `goals`, `initiativeMeasures`, `measureInitiatives`, `childInitiatives`, `childMeasures`.
Each edge carries the target's `access`, so the "edge visible iff both endpoints visible" rule
(SPEC §4.2) is computable directly — ClearPoint already tags link access in `_mcpLink`.

## What does NOT go inline

Numeric time series. The body carries the **grounding projection** (latest, target, direction, status,
short trend); the full series is a sidecar at `cps.measure.dataResource`. See [SPEC §6](../SPEC.md#6-metric-data--inline-projection--columnar-sidecar).

## Access is projected, then enforced

The emitter *writes* `cps.access` from `element.access` / effective access, but the bundle a caller
receives is already filtered to their authorized subset — enforcement is pre-retrieval in the
projector/MCP, never the reader honoring frontmatter. See [SPEC §4.2](../SPEC.md#42-access--cpsaccess-first-class-propagating).
