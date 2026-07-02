# Open Knowledge Format — ClearPoint Strategy Profile (OKF-CPS) v0.1

> **Status:** Draft, converging toward lock. Additive-only within the `0.x` line.
> **Base:** Extends [Google OKF v0.1](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md).
> **Proprietary & confidential** — © 2026 ClearPoint Strategy, LLC. Public/private split is deferred (see §9).

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
  index.md                         # ROOT: okf_version + glossary (axis 5). See bundle.schema.json.
  log.md                           # change history, newest-first (axis 3, delta view)
  objectives/thriving-economy.md   # a Concept (one element). Concept ID = path minus .md
  measures/median-household-income.md
  initiatives/downtown-revitalization.md
  data/median-household-income.<parquet|json>   # metric sidecar (§6)
```

Reserved files (`index.md`, `log.md`) follow base OKF. Every other `.md` is a concept whose
frontmatter conforms to [`schemas/concept.schema.json`](schemas/concept.schema.json).

---

## 3. Concept model

- **Concept = one ClearPoint element** (scorecard, category, objective, measure, initiative, milestone,
  actionItem, risk). One shape covers all types; `cps.object` selects the machine-canonical type while
  base-OKF `type` carries the human/canonical label.
- **Concept ID** = bundle-relative path minus `.md`.
- **`resource`** = stable canonical URI: `clearpoint://scorecard/<scorecardId>/<object>/<objectId>`.
  The round-trip identity anchor (§8). No tenant/district segment — a bundle is already district-scoped
  by the key that produced it.

---

## 4. The five axes (normative)

### 4.1 Structure — `cps.object`, `cps.parent`, `cps.edges`

Hierarchy via `cps.parent` (+ directory nesting). Relationships are emitted **twice**, on purpose:

- **Portable, untyped** — a standard markdown link in the body. Any OKF consumer traverses it.
- **Typed, machine** — `cps.edges: [{ fieldId, to, access, weight }]`, mirroring `element.links` /
  `_mcpLink` where `fieldId` *is* the relationship type (real vocabulary: `objectives`, `measures`,
  `initiatives`, `categories`, `parents`, `children`, `milestones`, …). Each edge carries the target's
  `access`, so the "edge visible iff both endpoints visible" rule (§4.2) is computable directly.

We **superset** the standard losslessly: conform to OKF (untyped links) and exceed it (typed edges) in
the same file. The whole `cps` block is the on-disk superset of ClearPoint's own AI-grounding
projection (`_mcpElement`/`_mcpElementStatus`/`_mcpLink`) — see [ADR-0004](docs/adr/0004-grounded-in-openapi-mirrors-mcp-projection.md).

### 4.2 Access — `cps.access` (first-class, propagating)

Access is **schema, not metadata bolted on at serving time.** Two dimensions:

- **Capability (verb):** `minCapability` on the ladder `No Access < Browser < Updater < Editor <
  Scorecard Admin < Administrator` (mirrors cps-next `use-access`). Read/ground needs ≥ Browser; write
  gates exactly as the existing AI action layer does.
- **Compartment (marking):** `markings[]` — `scorecard:<id>` (audience = that scorecard's effective-access
  set, which ClearPoint already computes), `personal:<userId>` (never org-served, never grantable),
  optional `domain:<name>`.

**Propagation rules (this is the graph-specific part):**

1. A derived/fused node carries the **union** of its sources' markings; visible only to principals who
   satisfy **all** of them (intersection of audiences). This kills the aggregation side-channel.
2. A **rollup** (category/scorecard) is visible only to those who can see **all** its children.
3. An **edge** is visible only if **both** endpoints are — else it leaks a hidden node's existence.
4. **Default-deny:** no marking / unresolved provenance ⇒ most-restrictive (creator-only), never
   org-public.

**Enforcement is not the reader's job.** `cps.access` is the *computed audit trail*. The boundary is
**pre-retrieval, server-side, per principal**, in the projector/MCP: a caller only ever receives the
subset they may see, projected on the fly. Never ship a fat all-access bundle and filter downstream;
never rely on prompt-level "be discreet." There is no 403 in grounding — a leaked node gets
paraphrased, so filtering must happen before the node ever enters context.

### 4.3 Time — `cps.time` (bitemporal, heterogeneous cadence)

- **Valid time** (reporting period) is primary for grounding: "December 2025" vs "January 2026".
- **System time** (`timestamp`, and `provenance.*.at`) is for audit.
- Elements report on **different cadences** (`cps.time.cadence`), so **"current" is per-element**: a
  monthly measure and a quarterly objective are both current at different grains. `cps.time.currentPeriod`
  is resolved against the element's own cadence.
- Period-scoped facts (status/analysis/measure values) live in the body under period headings and carry
  their own editorial stamp (§4.4). `log.md` is the delta view across periods.
- Query semantics the projector must support: **as-of(P)**, **delta(P1,P2)**, **current** (per-element).

#### 4.3.1 Time-varying *qualitative* data

Not just status and numbers vary over time — **`analysis`, `recommendations`, and period-scoped custom
fields do too.** Custom fields split by `fieldType` (`_field.fieldType`):

- **`edit` / `readOnly`** — element-level, one value, non-varying → `cps.customFields` (frontmatter).
- **`update`** — period-scoped, a value *per period* → the time-varying qualitative layer, alongside
  `analysis` / `recommendations` / `status`.

The time-varying layer uses the **same split as metrics** (§6): inline-for-grounding + sidecar-for-query.

- **Grounding (normative):** one `## <Period>` body section per reporting period, carrying status,
  analysis, recommendations, and that period's `update`-field values. Narrative, git-diffable,
  LLM-native. The current period's short status also rides in `cps.time.currentPeriod`.
- **Query (optional):** a period-history **sidecar** referenced by `cps.time.historyResource` — an array
  of `_mcpElementStatus`-shaped records (`periodId`, `period`, `statusId`, `status`, `analysis`,
  `recommendations`, `customFields[]`) — for "value of field X across N periods" queries.
- **Selector:** `GET /okf?…&periodId=<id>` returns the bundle **as-of** that period; default = current.

So a numeric series is `inline summary + data sidecar`; a qualitative series is `body narrative +
history sidecar`. One pattern, applied to both. See [docs/api.md](docs/api.md).

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

The **glossary** (root `index.md` frontmatter, see [`schemas/bundle.schema.json`](schemas/bundle.schema.json))
binds org nomenclature to canonical vocabulary — `types` (Goal→objective, KPI→measure), `statuses`
(Green→On Track), `fields`. It is **bidirectional**: used on **ingest** to understand the org's words
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
- **Analytical sidecar (`data/*`, referenced by `resource`):** the full typed series. At current scale
  **JSON/Arrow is sufficient; parquet is reserved for the analytical/warehouse boundary** (BigQuery,
  Snowflake) where columnar actually pays. The qualitative layer diffs in git; the quantitative sidecar
  is versioned by pointer/snapshot, not inlined into the diffable tree.

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

## 9. Versioning & the open/private split (deferred)

`<major>.<minor>`; minor = additive (new optional `cps` keys, new conventions), major = breaking.
The **open** surface (candidate): the profile spec, the strategy type taxonomy, the period/glossary/
tag conventions, and the access-marking *vocabulary*. The **proprietary** surface: the emitter, the
diff→apply compiler, the confidence engine, marking *enforcement*, and the MCP. Decision recorded when
we lock — see [`docs/adr`](docs/adr).
