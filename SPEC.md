# Open Knowledge Format — ClearPoint Strategy Profile (OKF-CPS) v0.1

> **Status:** Draft, converging toward lock. Additive-only within the `0.x` line.
> **Base:** Extends [Google OKF v0.1](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md).
> **Open format** — © 2026 ClearPoint Strategy, LLC, offered under CC-BY-4.0 (spec) / Apache-2.0 (schemas). See [LICENSE](LICENSE) and §9.

OKF-CPS is a **conservative extension** of base OKF. Every OKF-CPS bundle is a valid OKF bundle:
the only hard requirement is a non-empty `type`, and **every ClearPoint extension lives under the
producer-defined `cps:` frontmatter key** (or under namespaced conventions). A base-OKF consumer
ignores `cps:` and still parses, links, and indexes the bundle. A ClearPoint-aware consumer gets the
full governed graph.

---

## 1. Why this exists — the thesis

The customer already owns the *content*. The product is the **governed substrate**: a strategy graph
that is structured, access-carrying, temporal, provenance-tracked, and vocabulary-bound — portable as
plain text and legible to an LLM. Five axes make that substrate first-class, and OKF-CPS's job is to
carry all five across the wire so any AI — ClearPoint's own, or anything plugged into the ClearPoint
MCP — gets **exceptional, grounded, permission-safe answers anywhere**.

| Axis | Carries | Sourced from |
| ---- | ------- | ------------ |
| **1 Structure** | nodes, typed edges, hierarchy, rollups | ClearPoint element model |
| **2 Access** | element-carried capability + compartments, propagated | cps-next `use-access` effective access |
| **3 Time** | valid-time reporting period, per-element cadence, system-time | periods / periodGroups |
| **4 Provenance** | editorial audit (who/when/where) + resolution (confidence/evidence) | ClearPoint audit + parse `_map` |
| **5 Vocabulary** | org term ↔ canonical type/status/field | organizational glossary |

---

## 2. Bundle layout

```
bundle/
  index.md                              # ROOT: frontmatter is okf_version ONLY (base OKF §6)
  glossary.md                           # a Concept (type: Glossary) carrying the glossary (axis 5)
  log.md                                # change history, newest-first (axis 3, delta view)
  scorecard-<id>/                       # one folder per scorecard (stable id, not name)
    index.md                            # plain listing, no frontmatter
    objectives/objective-<objectId>.md  # a Concept. Concept ID = path minus .md
    measures/measure-<objectId>.md
    data/measure-<objectId>-series.json    # numeric metric series (§6)
    data/objective-<objectId>-status.json  # per-period qualitative status history (§4.3.1)
```

The **glossary lives on a `glossary.md` concept**, not in `index.md` frontmatter: base OKF §6 permits
*only* `okf_version` in an index.md frontmatter, whereas a concept may carry arbitrary producer keys.
Reserved files (`index.md`, `log.md`) follow base OKF. Every other `.md` is a concept whose
frontmatter conforms to [`schemas/concept.schema.json`](schemas/concept.schema.json).

---

## 3. Concept model

- **Concept = one ClearPoint element** (scorecard, category, objective, measure, initiative, milestone,
  actionItem, risk). One shape covers all types; `cps.object` selects the machine-canonical type while
  base-OKF `type` carries the human/canonical label.
- **Concept ID** = bundle-relative path minus `.md`. File name is **`<object>-<objectId>`** (e.g.
  `milestones/milestone-281261`), not the element name: an id-based path is **stable across renames** so
  the Concept ID and every inbound link survive an element being retitled. The human name is never lost —
  it lives in `title`, in each edge's `name`, and in link text.
- **`resource`** = stable canonical URI: `clearpoint://scorecard/<scorecardId>/<object>/<objectId>`.
  The round-trip identity anchor (§8). No tenant/district segment — a bundle is already district-scoped
  by the key that produced it.

---

## 4. The five axes (normative)

### 4.1 Structure — `cps.object` + relationships in the body

**Frontmatter carries the concept's own attributes; the body carries its relationships.** This is the
clean split (and it avoids duplicating edges): a base-OKF consumer reads the body links; a
ClearPoint-aware consumer reads `cps.*` for typed attributes.

Relationships are **standard markdown links in the body, grouped under headings named by the real
relationship type** — sourced from ClearPoint's typed links endpoint (`/mcp/fetch/.../links`, i.e.
`_mcpLink.fieldId`): `## Parents`, `## Children`, `## Measures`, `## Milestones`, `## Categories`, ….
Base OKF derives relationship semantics from surrounding prose, not link structure, so the heading *is*
how any consumer recovers the edge type. Links use the stable, recommended bundle-relative form
(`/scorecard-<id>/<type>/<object>-<objectId>.md`). This is exactly OKF-idiomatic — edges are not
duplicated into frontmatter.

Two relationships aren't in ClearPoint's link graph and are derived: a **milestone → parent initiative**
(from `element.initiativeId`, rendered `## Parent Initiative`) and its inverse (an initiative's
`## Milestones`). Overlapping rollup views (`childMeasures`/`initiativeMeasures`/…) are omitted to avoid
noise. The rest of the `cps` block (identity, access, time, provenance, series) is the on-disk superset
of ClearPoint's own AI-grounding projection (`_mcpElement`/`_mcpElementStatus`).

### 4.2 Access — compartment, not the caller's access

The access axis is **who may see a concept** — and it is *not* the requesting user's access.
`_mcpElement.access` is the CALLER's effective access to the element (always "Administrator" when an
admin key made the request), so it is deliberately **not embedded**: it is neither a "minimum required"
nor a portable property.

- **Compartment = `cps.scorecardId`.** Access is governed by that scorecard's membership rules, so a plain
  ClearPoint concept carries **no** separate access block. `cps.access.markings` appears only on
  derived/enriched/personal nodes — `personal:<userId>` (never org-served), `domain:<name>`, or the
  UNION of source markings on a fused node.
- **Who-can-access** (which users/groups hold what level on a scorecard) is a separate **access-rules**
  dataset — a root lookup alongside `users.md`, not a per-concept field. *Not yet emitted; the real
  `GET /okf` sources it from the scorecard access rules.*

**Propagation** (derived/fused nodes only): union of source markings; a rollup or edge is visible only if
**all** its children / **both** endpoints are; default-deny for unmarked/unresolved nodes — this kills the
aggregation side-channel.

**Enforcement is not the reader's job.** The boundary is **pre-retrieval, server-side, per principal**: a
caller only ever receives the subset they may see. Never ship a fat all-access bundle and filter
downstream; never rely on prompt-level "be discreet." There is no 403 in grounding — a leaked node gets
paraphrased, so filtering must happen before the node enters context.

### 4.3 Time — `cps.status` (bitemporal, heterogeneous cadence)

- **Valid time** (reporting period) is primary for grounding: "December 2025" vs "January 2026".
- **System time** (`timestamp`, and `provenance.*.at`) is for audit.
- Elements report on **different cadences** (`cps.status.periodicity`), so **"current" is per-element**: a
  monthly measure and a quarterly objective are both current at different grains. `cps.status.currentPeriod`
  is resolved against the element's own cadence.
- Period-scoped facts (status/analysis/measure values) live in the body under period headings and carry
  their own editorial stamp (§4.4). `log.md` is the delta view across periods.
- Query semantics the projector must support: **as-of(P)**, **delta(P1,P2)**, **current** (per-element).

#### 4.3.1 Time-varying *qualitative* data

Not just status and numbers vary over time — **`analysis`, `recommendations`, and period-scoped custom
fields do too.** Custom fields split by `fieldType` (`_field.fieldType`):

- **`edit` / `readOnly`** — element-level, one value, non-varying → a body **`## Details`** list (values;
  definitions in `custom-fields.md`).
- **`update`** — period-scoped, a value *per period* → the time-varying qualitative layer, alongside
  `analysis` / `recommendations` / `status`.

The time-varying layer uses the **same split as metrics** (§6): inline-for-grounding + sidecar-for-query.

- **Grounding (normative):** one `## <Period>` body section per reporting period, carrying status,
  analysis, recommendations, and that period's `update`-field values. Narrative, git-diffable,
  LLM-native. The current period's short status also rides in `cps.status.currentPeriod`.
- **Query (optional):** a status-history **sidecar** `data/<object>-<id>-status.json`, referenced by
  `cps.status.statusResource` — an array of `_mcpElementStatus`-shaped records (`periodId`, `period`,
  `statusId`, `status`, `analysis`, `recommendations`, `customFields[]`) — for "value of field X across N
  periods" queries. Written only when a period has real qualitative content (label-only status is fully
  carried by `currentPeriod` + a compact body line).
- **Selector:** `GET /okf?…&periodId=<id>` returns the bundle **as-of** that period; default = current.

So a numeric series is `inline summary + data sidecar`; a qualitative series is `body narrative +
history sidecar`. One pattern, applied to both. (See the reference implementation.)

### 4.4 Provenance — `cps.provenance` (two kinds)

1. **Editorial** (native ClearPoint audit — the real field pair): `lastEditedBy` (from
   `element.lastEdited`/`lastEditedBy` — definition/structure changes) vs `lastUpdatedBy` (from
   `element.lastUpdated`/`lastUpdatedBy` — period-scoped status/data changes; deliberately distinct),
   plus `owner`/`ownerType`/`collaborators` and home `scorecard`. Period facts each carry their own
   stamp, because a December
   status and a January status were entered by different people at different times. Editorial provenance
   is what makes a grounded answer *traceable and trustworthy* ("as of the Q2 update entered by Jane on
   Jun 30…") and is directly auditable (SOC2/Drata).
2. **Resolution** (`provenance.resolved`, only on parsed/derived nodes): selector + `confidence` +
   `evidence`, or a `ref`. Carries the same confidence discipline as the inbound parser; below threshold
   the value is null and the node is flagged, never guessed.

### 4.5 Vocabulary — glossary + `cps.alias`

The **glossary** lives on a `glossary.md` concept (`type: Glossary`) under `cps.glossary` — *not* in
`index.md` frontmatter, since base OKF §6 allows only `okf_version` there. It binds org nomenclature to
canonical vocabulary — `types` (Goal→objective, KPI→measure), `labels` (children→Divisions,
goals→OKRs), `statuses`, `fields` — built from the account's real `/language`.

**Default vs. override (no voting).** The root `glossary.md` carries account-level overrides; each
scorecard that renames a term differently gets its *own* `scorecard-<id>/glossary.md` with only its
deltas. A term is an *override* iff its effective `/language` value is a literal differing from the
default — a still-templated `{{…}}` value means "using the default." (The default is the district
language, `application.locale.get(districtId)`, i.e. the "no scorecardId" language; a scorecard's
`/language` merges default + its overrides.) Example: `goal→OKR` is account-wide (root), while
`child→Division` is set only on the corporate scorecard, so it lives in that scorecard's glossary.

It is **bidirectional**: used on **ingest** to understand the org's words
(seeding the resolver's synonyms) and on **projection** so the MCP **speaks the org's words back**.
`type` stays canonical for interop; per-concept `cps.alias` is the rendered org term.

---

## 5. Tags — the cross-cutting facet layer

Base-OKF `tags` are a flat string list. OKF-CPS keeps them valid but adds a **namespacing convention**:
`<dimension>:<value>` (`theme:equity`, `pillar:economy`, `priority:high`). Tags are a distinct graph
construct from edges and markings:

- **Facets, not hierarchy.** All nodes sharing a tag form an implicit cluster that cuts across scorecards
  and the hierarchy — the *thematic* graph on top of the *structural* graph. This is the filter/retrieval
  dimension for the mind-map renderer and for grounding ("ground on everything tagged `theme:equity`").
- **The join to unstructured knowledge.** Tags are how RAG/Pinecone content attaches to the structured
  spine: a policy doc tagged `theme:equity` links into the equity facet. Tags are the join key between
  the structured graph and the organizational knowledge base.
- **Tags are NOT access.** A tag never gates visibility — `cps.access` does. Do not make tags
  load-bearing for permissions.
- **Tag provenance.** Org-authored tags are authoritative; machine-suggested tags carry lower trust and
  should be marked as such (a `theme:*` a model proposed is a candidate, not a fact).

---

## 6. Metric data — inline projection + columnar sidecar

Two consumers, two representations (never one binary blob for both):

- **Grounding projection (inline, in the concept body):** the number *with its meaning and judgment* —
  latest value, target, direction-of-good, status, a short trend window. This is what makes answers
  exceptional, is token-cheap, git-diffable, and needs zero tool calls.
- **Analytical sidecar `data/<object>-<id>-series.json`, referenced by `cps.measure.dataResource`:** the
  full typed series. At current scale **JSON/Arrow is sufficient; parquet is reserved for the
  analytical/warehouse boundary** (BigQuery, Snowflake) where columnar actually pays. The qualitative
  layer diffs in git; the quantitative sidecar is versioned by pointer/snapshot, not inlined into the
  diffable tree.

The two `data/` sidecars are distinct: **`-series.json`** holds the numeric measure series
(`dataResource`); **`-status.json`** holds the per-period qualitative status/analysis/recommendations
(`statusResource`). Any element type may have either or both.

---

## 7. Conformance & the validator

A bundle conforms to OKF-CPS v0.1 when:

1. It conforms to base OKF (every non-reserved `.md` has parseable frontmatter with a non-empty `type`).
2. Root `index.md` frontmatter validates against `bundle.schema.json`.
3. Where present, each concept's frontmatter validates against `concept.schema.json` (the `cps` block is
   optional, but if present it must validate).

Consumption stays **permissive** (base-OKF rule): unknown types/keys and broken links are tolerated.
[`scripts/validate.mjs`](scripts/validate.mjs) is the conformance gate — it is the survivor of
cps-parse's validator, elevated from "does this envelope match" to "does this bundle conform to the
open profile."

## 8. Round-trip / apply — LLM authors, a compiler applies

OKF-CPS is the **interchange and emission** format, and it is deliberately permissive — which is correct
for interchange and **wrong for mutating a system of record.** So writes never flow from a permissive
bundle straight into ClearPoint. Instead:

```
sources → LLM authors an updated OKF-CPS bundle → deterministic diff→apply COMPILER → importer → ClearPoint
                                                   (confidence gate, ref ordering, HITL, validator)
```

The LLM does the part it is good at (author markdown+frontmatter). The **discipline the old envelope
carried — confidence threshold, topological ordering, reconciliation, human review — relocates into the
compiler**, not the model. Identity for the diff comes from `cps.objectId` / `resource`. Net: the
contractor-authored bespoke parser can retire; the validation/ordering/confidence guarantees cannot, and
do not.

## 9. Versioning & the open/implementation split

`<major>.<minor>`; minor = additive (new optional `cps` keys, new conventions), major = breaking.

- **Open (this repository):** the profile specification, the strategy type taxonomy, the JSON Schemas,
  the period / glossary / tag conventions, the access-marking *vocabulary*, and the conformance
  validator + example bundles.
- **Reference implementation (private, in the strategy platform):** the emitter (`GET /okf`), the
  validator/resolver and diff→apply compiler (`POST /okf/validate`, `/okf/parse`), marking *enforcement*,
  the reference-resolution engine, and the architecture decision records (ADRs) that motivate them.

The ADRs and the field-level mapping to the source system are implementation concerns and live with the
implementation, not in this open repository.
