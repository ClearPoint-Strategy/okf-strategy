# OKF-Strategy — an Open Knowledge Format profile for organizational strategy (v1.0)

> **Status:** 1.0. Additive-only within the `1.x` line; a breaking change bumps the major (§9).
> **Base:** Extends [Google OKF v0.1](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md).
> **Open format** — © 2026 ClearPoint Strategy, LLC, offered under CC-BY-4.0 (spec) / Apache-2.0 (schemas). See [LICENSE](LICENSE) and §9.

OKF-Strategy is a **conservative extension** of base OKF. Every OKF-Strategy bundle is a valid OKF bundle:
the only hard requirement is a non-empty `type`, and **every OKF-Strategy extension lives under the
producer-defined `cps:` frontmatter key**. A base-OKF consumer ignores `cps:` and still parses, links,
and indexes the bundle. A strategy-aware consumer gets the full governed graph.

The key words MUST, SHOULD, and MAY are used as in RFC 2119. A statement without one of them describes
the format.

---

## 1. Why this exists — the thesis

The customer already owns the *content*. The product is the **governed substrate**: a strategy graph
that is structured, access-carrying, temporal, provenance-tracked, and vocabulary-bound — portable as
plain text and legible to an LLM. Five axes make that substrate first-class, and OKF-Strategy's job is to
carry all five across the wire so any AI gets **grounded, permission-safe answers anywhere**.

| Axis | Carries | Where it lives |
| ---- | ------- | -------------- |
| **1 Structure** | nodes, typed edges, hierarchy, rollups, evaluation rules | concepts, body links, `cps.evaluation` |
| **2 Access** | each concept's access boundary and the portable access policy | `cps.access`, `user-access.md` |
| **3 Time** | reporting periods, per-element cadence, current status and its history | `cps.status`, `periods.md`, sidecars |
| **4 Provenance** | editorial audit (who and when) and parse resolution | `cps.provenance` |
| **5 Vocabulary** | the organization's terms, statuses, and fields bound to canonical ones | `glossary.md`, `statuses.md`, `custom-fields.md` |

---

## 2. Bundle layout

```
bundle/
  index.md                                   # ROOT: frontmatter is okf_version ONLY (base OKF §6)
  glossary.md                                # Lookup: vocabulary; carries cps.profile (§9)
  users.md  statuses.md  tags.md  periods.md  periodicities.md  custom-fields.md  user-access.md
  scorecard-<scorecardId>/                   # one folder per scorecard (stable id, not name)
    categories/category-<objectId>.md
    objectives/objective-<objectId>.md       # a Concept. Concept ID = path minus .md
    measures/measure-<objectId>.md
    initiatives/initiative-<objectId>.md
    milestones/milestone-<objectId>.md
    action-items/actionItem-<objectId>.md
    risks/risk-<objectId>.md
    data/<object>-<objectId>-series.json     # numeric series sidecar (§6.1)
    data/<object>-<objectId>-status.json     # status history sidecar (§4.3.1)
    data/layout-<hash>.json                  # optional presentation data (§6.3)
```

`index.md` is the only reserved file a producer writes. Base OKF also reserves `log.md`; a producer MAY
write one and a consumer MUST tolerate its absence. Every other `.md` is a concept whose frontmatter
conforms to [`schemas/concept.schema.json`](schemas/concept.schema.json). A **fragment** is a response
that holds concepts without the root lookups, such as a single-element export. It is not a bundle, and
its ids resolve only against the bundle it came from.

### 2.1 Root lookups

Each root lookup is a concept with `type: Lookup` and `cps.lookup` naming it. Its body is one or more
Markdown tables. The **column headers are the contract**: a consumer matches columns by header name,
column order is not significant, and a producer MAY add columns. Cells are plain text; a list is
comma-and-space separated; an empty cell means none. The required columns are:

| File | `cps.lookup` | Table | Required columns |
| ---- | ------------ | ----- | ---------------- |
| `users.md` | `users` | Users | ID, Name, Email, Type, Active, Last Login |
| `statuses.md` | `statuses` | Statuses | ID, Name, Color, Score, Meaning, Applies To |
| `tags.md` | `tags` | Tags | ID, Name, Color |
| `periods.md` | `periods` | Periods | ID, Name, Start, End |
| `periodicities.md` | `periodicities` | Periodicities | ID, Name, Periods, Default, Period IDs |
| `custom-fields.md` | `customFields` | Custom Fields | ID, Name, Element Type, Field Type, Mode, Scorecards |
| `glossary.md` | `glossary` | Glossary | Type, Term, Plural |
| `user-access.md` | `userAccess` | Global Profiles | Profile, Users |

Column meanings that are not self-evident:

- **users.Type** is the user's account-wide access profile (e.g. Administrator, Editor, Updater,
  Browser). **Active** is `yes` or `no`. **Last Login** is a date, empty when the user never logged in.
- **statuses.Meaning** binds an organization's status to one canonical class: `on_plan`, `caution`,
  `below_plan`, or `no_information`, empty when the status has none. It is how a consumer compares
  "Above Target" in one account with "Green" in another. **Score** is the number objective roll-ups
  average (§6.2). **Applies To** lists the element types that may carry the status, or `all`.
- **periods.Start / End** are dates; End is the period's last day and orders time.
- **periodicities.Periods** is the period count; **Period IDs** lists them in date order; **Default** is
  `yes` for the account default.
- **custom-fields.Mode** is `edit` (one value per element) or `update` (one value per period).
  **Scorecards** lists the scorecard ids the field is limited to, or `all`.
- **glossary.md** MAY add an Overrides table (Scorecard, Type, Default, Override) for terms a single
  scorecard renames (§4.5).
- **user-access.md** MAY add the By-Scorecard (User, Scorecard, Level), Groups, and Users to Groups
  (User, Groups) tables (§4.2).

---

## 3. Concept model

- **Concept = one strategy element** (category, objective, measure, initiative, milestone, actionItem,
  risk). `cps.object` is the machine-canonical type; base-OKF `type` carries the human label.
- **Concept ID** = bundle-relative path minus `.md`. The file name is **`<object>-<objectId>`**, not the
  element name, so the Concept ID and every inbound link survive a rename. The name lives in `title`
  and in link text.
- **`resource`** = stable canonical URI: `clearpoint://scorecard/<scorecardId>/<object>/<objectId>`.
  No tenant segment: a bundle is already scoped to one account by the request that produced it.
- **Ids are source-scoped.** `cps.objectId`, `cps.scorecardId`, and every id in a lookup identify things
  in the producing account. They never carry meaning into another account; names, structure, and the
  lookups do (§8).

### 3.1 Body

The body is the readable document. A producer MUST use these headings when it writes the section, in
this order, and a consumer MAY read them:

1. `## Overview` — bullets of the form `- **Label:** value` (Scorecard, Owner, Reporting frequency, Tags).
2. `## Description` — prose.
3. `## Details` — one `- **<field name>:** value` bullet per element-level custom field with a value.
4. `## Status` — the current period: bullets for Period, Status, and Value (with target); then
   `### Analysis` and `### Recommendations` as prose.
5. Relationship headings (§4.1).

---

## 4. The five axes (normative)

### 4.1 Structure — `cps.object` + relationships in the body

**Frontmatter carries the concept's own attributes; the body carries its relationships.** A base-OKF
consumer reads the body links; a strategy-aware consumer reads `cps.*`.

Relationships are **standard markdown links in the body, grouped under headings named by the
relationship type**: `## Categories`, `## Parents`, `## Objectives`, `## Measures`, `## Initiatives`,
`## Milestones`, `## Action Items`, `## Risks`, `## Children`, and so on. The heading is the edge type.
Links use the bundle-relative form `/scorecard-<id>/<folder>/<object>-<objectId>.md`. Edges are not
duplicated into frontmatter, with one exception: an objective's weighted children in `cps.evaluation`
(§6.2), because the weight is an attribute of the edge.

Two relationships are derived rather than linked: a milestone's parent initiative (`cps.initiativeId`)
and its inverse.

### 4.2 Access — boundary and policy

The access axis is **who may see a concept**. It is never the requesting user's own access level, which
is neither portable nor a property of the concept.

- **Every concept carries `cps.access.derivedFrom`**, the resource URI of the scorecard it inherits
  access from. **`cps.access.rules`** lists the element-scoped exceptions that target this concept
  (e.g. a group with No Access to one measure). Broad grants stay in the policy file.
- **`user-access.md` is the portable policy**: global profiles, per-scorecard grants, groups with their
  rules and members, and user-to-group mappings. Recreating it in a target account reproduces access.
- `cps.access.markings` is reserved for derived, fused, or personal nodes (`personal:<userId>`,
  `domain:<name>`). A fused node carries the union of its sources' markings, a rollup or edge is
  visible only if all its children or both endpoints are, and an unmarked derived node is denied.

**Enforcement is not the reader's job.** A producer MUST filter pre-retrieval, server-side, per
principal: the requesting user only ever receives what they may see. Never ship an all-access bundle to
be filtered downstream; a leaked node gets paraphrased, so filtering happens before it enters context.

### 4.3 Time — cadence, current status, history

- **Valid time** (the reporting period) is primary for grounding. **System time** (`provenance.*.at`)
  is for audit.
- Elements report on different cadences. `cps.periodicity` names the element's periodicity; its
  periods are listed in `periodicities.md`. "Current" is therefore per element:
  **`cps.status.currentPeriod`** is the element's latest relevant period at its own cadence, with that
  period's status. The body's `## Status` section renders the same period with its narrative.
- A producer MAY offer an as-of selector that emits the bundle as of a given period.

#### 4.3.1 Status history sidecar

Analysis, recommendations, status, and percent complete vary by period. The full history lives in a
sidecar `data/<object>-<objectId>-status.json`, named by **`cps.status.statusResource`**, that validates
against [`schemas/status.schema.json`](schemas/status.schema.json):

```json
{
  "concept": "scorecard-77146/measures/measure-423481",
  "periodicity": "Monthly",
  "periods": [
    { "periodId": 189843, "period": "Mar-25", "periodDate": "2025-03-31", "statusId": 18578,
      "status": "Above Target", "analysis": "Ahead of plan on cost.", "updatedBy": "Clarice Strong",
      "updatedAt": "2025-04-02T14:01:00Z" }
  ]
}
```

- **`periods`** runs oldest first by `periodDate`. A period appears only when it has a status, a percent
  complete, or narrative; the sidecar is omitted when no period does.
- Narrative is plain text. `statusId` resolves against `statuses.md`.
- `updatedBy` / `updatedAt` are that period's editorial stamp (§4.4).

So a numeric series is `inline summary + series sidecar`, and a qualitative series is `## Status +
status sidecar`.

### 4.4 Provenance — `cps.provenance` (two kinds)

1. **Editorial**: `owner` and `collaborators` (names, resolved through `users.md`), `lastEditedBy`
   (definition or structure change, with `at`), and `lastUpdatedBy` (the stamp of the current period's
   status entry, with `at`). The two stamps are deliberately distinct: who changed what the element is
   versus who last reported on it. Each period in the status sidecar carries its own stamp.
2. **Resolution** (`provenance.resolved`, only on parsed or derived nodes): selector, `confidence`, and
   `evidence`, or a `ref`. Below threshold the value is null and the node is flagged, never guessed.

### 4.5 Vocabulary — glossary, statuses, fields

- **`glossary.md`** binds the organization's name for each element type to the canonical type: one row
  per type with its singular and plural term. The account-level term applies unless a scorecard
  overrides it, in which case the Overrides table carries the scorecard and its term. There is no
  cascade and no voting.
- **`statuses.md`** binds each organization status to a canonical **Meaning** (§2.1).
- **`custom-fields.md`** binds each field name to its element type, value type, and mode. Field names
  are unique neither across element types nor within one, so a consumer keys a field by element type
  and name, or by id within one bundle.

The vocabulary is bidirectional: an ingester uses it to understand the organization's words, and a
grounded answer uses it to speak them back. `type` and `cps.object` stay canonical for interop.

---

## 5. Tags — the cross-cutting facet layer

Base-OKF `tags` are a flat string list, and the producer writes the organization's tag names as they
are. A bundle authored for retrieval MAY namespace tags as `<dimension>:<value>` (`theme:equity`,
`priority:high`). Either way:

- **Tags are facets, not hierarchy.** Concepts sharing a tag form a cluster across scorecards and
  hierarchy, and a tag is the natural join key between the strategy graph and unstructured knowledge.
- **Tags are NOT access.** A tag never gates visibility; `cps.access` does.
- **Machine-suggested tags are candidates.** A tag a model proposed SHOULD be distinguishable from an
  organization-authored one before anything relies on it.

---

## 6. Metric data — definitions, sidecar, rules

Any element type may hold series: measures, and initiatives, milestones, action items, and risks. A
producer that stores a non-measure's series on an internal helper object resolves that before emitting:
the series, the sidecar, and the evaluation rules sit on the element that owns them.

- **`cps.measure.series`** lists the series definitions: `name`, `seriesDataTypeId`, and optionally
  `aggregateType`, `calculation` (producer syntax, opaque to other consumers), `currency`, and
  `numberFormat`.
- **`cps.measure.dataResource`** names the sidecar holding every value (§6.1).
- **The grounding projection** is the body's `## Status` value line: latest value with its target.

### 6.1 Series sidecar layout

A `-series.json` sidecar validates against [`schemas/series.schema.json`](schemas/series.schema.json).
It is columnar: one shared period axis, and one value array per series aligned to that axis by index.

```json
{
  "concept": "scorecard-77146/measures/measure-1509292",
  "periodicity": "Quarterly",
  "periods": [
    { "periodId": 189843, "period": "Mar-25", "periodDate": "2025-03-31" },
    { "periodId": 256348, "period": "Jun-25", "periodDate": "2025-06-30" }
  ],
  "series": [
    { "name": "Actual", "seriesDataTypeId": 6, "values": [71.5, 74.0] },
    { "name": "Target", "seriesDataTypeId": 6, "values": [75, null] }
  ]
}
```

- **`concept`** is the owning Concept ID, whose `cps.measure.dataResource` names this file.
- **`periods`** runs oldest first, ordered by `periodDate`, the period's last day. It holds every period
  in which at least one series has a value. `periodId` refers to `periods.md`.
- **`series[].values[i]`** belongs to `periods[i]`, so every `values` array has the length of `periods`.
  A missing value is `null`, never a dropped entry. Values are numbers, except for Text series
  (`seriesDataTypeId` 11), whose values are strings.
- **`series[].name`** matches a `cps.measure.series[].name`, in the same order.
- **`unit`** and **`labels`** are optional. `labels` holds formatted display strings aligned to
  `periods`, so a reader can quote a value exactly as the source showed it.

The columnar shape carries any number of series without changing the axis and maps directly onto Arrow
or a warehouse table.

### 6.2 Evaluation rules — `cps.evaluation`

A status is usually *computed*: the source system turns a series value, or a weighted roll-up of
child statuses, into a status through ordered rules. Base OKF has no place for that logic, and a
bundle that carries values and statuses but not the rules behind them cannot explain *why* a measure
is red or reproduce the judgment in another account. `cps.evaluation` carries the rules in effect.
It is optional and omitted when evaluation is off for the element.

```yaml
cps:
  evaluation:
    enabled: true
    statusSeries: Actual          # the series whose status becomes the element's status
    statusSeriesId: 8426750       # -1 = best status across series, -2 = worst (statusSeries then reads best/worst)
    series:
      - name: Actual
        seriesId: 8426750
        bands:
          - status: Above Target
            statusId: 58768
            compare: gte          # any | eq | neq | lt | lte | gt | gte | btw
            calculation: ""
            referenceSeries: Target
            referenceSeriesId: 8426751
            sortOrder: 1
          - status: Caution
            statusId: 58769
            compare: gt
            calculation: "*.9"    # the reference value times 0.9
            referenceSeries: Target
            referenceSeriesId: 8426751
            sortOrder: 2
          - status: No Information
            statusId: 58771
            compare: any
            sortOrder: 4
```

- **Any element type may carry series bands** — measure, initiative, milestone, actionItem, risk — because
  each may hold series (§6). The bands sit on the element that owns the series; a producer that stores
  them on an internal shadow object resolves that before emitting, exactly as it does for the series.
- **Bands are ordered.** For each period the first band whose comparison holds, by `sortOrder`, gives the
  series its status. `compare: any` always holds and is the usual last band.
- **The threshold** is `calculation` applied to the reference series' value for the same period:
  - a bare number, or a string of the form `=<number>`, is a literal threshold and needs no reference;
  - an empty string compares against the reference value itself;
  - any other string is an arithmetic suffix appended to the reference value and evaluated
    (`+5`, `-10`, `*.9`);
  - for `btw`, `calculation` is `low,high`, each side following the same rules, bounds inclusive.
  `referenceSeries` / `referenceSeriesId` name the reference and are omitted for literal thresholds.
- **`statusSeries`** names which series' status the element reports. `statusSeriesId` is `-1` or `-2`
  when the element reports the best or worst status across its evaluated series instead.
- **Objectives** evaluate a weighted roll-up rather than a series. Their block carries `bands` directly
  and `weights`, the children whose status scores (`statuses.md`, Score column) are averaged by weight:

```yaml
cps:
  evaluation:
    enabled: true
    bands:
      - status: Above Target
        statusId: 58768
        compare: gte
        calculation: 2.5
        sortOrder: 1
      - status: No Information
        statusId: 58771
        compare: any
        sortOrder: 4
    weights:
      - object: measure
        objectId: 2123996
        concept: scorecard-184782/measures/measure-2123996
        weight: 25
      - object: objective
        objectId: 735533
        concept: scorecard-184782/objectives/objective-735533
        weight: 25
```

  `calculation` for an objective band is always a literal (or a `low,high` pair for `btw`) compared
  against the weighted average score. `concept` is the child's Concept ID when it is resolvable.
- Only rules in effect are carried: enabled bands whose status applies to the element type. Disabled
  or placeholder bands are not part of the bundle. Status ids resolve against the root `statuses.md`.

### 6.3 Presentation data — `cps.layoutResource`

A producer MAY attach an element's detail-page layout as `data/layout-<hash>.json`, named by
`cps.layoutResource`, when the request asks for it. The file is producer-specific presentation data:
a consumer that does not know the producer ignores it. Elements sharing a layout share the file, which is
why the name is a content hash.

---

## 7. Conformance & the validator

A bundle conforms to OKF-Strategy 1.0 when:

1. It conforms to base OKF: every non-reserved `.md` has parseable frontmatter with a non-empty `type`.
2. Root `index.md` frontmatter validates against `bundle.schema.json`.
3. Every concept's frontmatter validates against `concept.schema.json`.
4. Root `glossary.md` carries `cps.profile`, a `1.x` version string (§9).
5. Each root lookup present carries the required columns of §2.1.
6. Each `data/*-series.json` validates against `series.schema.json`, every `values` (and `labels`) array
   has the length of `periods`, and dated periods ascend (§6.1).
7. Each `data/*-status.json` validates against `status.schema.json` and its dated periods ascend (§4.3.1).

Consumption stays **permissive** (the base-OKF rule): unknown types and keys, and broken links, are
tolerated. [`scripts/validate.mjs`](scripts/validate.mjs) is the conformance gate.

## 8. Round trip — export, then import

OKF-Strategy is permissive by design, which is right for interchange and wrong for writing into a system
of record. So a bundle never flows straight into one. An importer is a **deterministic compiler**: it
resolves every reference against the target account (by name, through the lookups), classifies each
concept as create, review, or reject, orders the writes by dependency, and holds anything unresolved for
a human. A model may author or edit the bundle; the compiler decides what is applied.

What 1.0 carries across accounts, and what it carries for reading only:

| Round-trips (an importer SHOULD apply it) | Export-only in 1.0 |
| ---- | ---- |
| Scorecards (folder and name), categories, elements by `cps.object` and `title` | `cps.access` and `user-access.md` |
| `startDate` / `endDate` on time-bound elements | `cps.evaluation` |
| Owner, by name through `users.md` | Provenance other than owner |
| Tags by name, with `tags.md` color | The status history sidecar |
| `## Details` values, by element type and field name through `custom-fields.md` | Ids of every kind (§3) |
| Relationship headings as links | |
| `cps.measure.series` and the series sidecar's values, periods matched by name | |
| `## Status` for its period: status by name, analysis, recommendations | |
| `cps.layoutResource`, when the importer knows the producer | |

1.0 import creates; it does not update an element that already exists in the target. An export-only row
is a candidate for a later minor version, which would add it without changing its shape.

## 9. Versioning & the open/implementation split

- **The profile version** is declared by `cps.profile` on the root `glossary.md`, as `<major>.<minor>`.
  A minor version adds optional keys, lookup columns, or conventions; a major version is breaking.
  A consumer MUST accept a bundle with a higher minor version than it knows.
- **`okf_version`** in `index.md` is base OKF's version, not this profile's, and stays `"0.1"` until base
  OKF moves.
- **Open (this repository):** the specification, the type taxonomy, the JSON Schemas, the lookup and
  sidecar contracts, the access-marking vocabulary, the validator, and the example bundles.
- **Reference implementation (in the strategy platform):** the emitter, the validate and import
  compiler, access enforcement, and the reference-resolution engine.

### 9.1 From 0.1 to 1.0

1.0 matches the format to what producers write and importers read. A 0.1 bundle needs these changes:

- Add `cps.profile: "1.0"` to `glossary.md`, and the new lookup columns (users Active and Last Login,
  statuses Meaning and Applies To, periodicities Period IDs).
- Move `cps.status.periodicity` to `cps.periodicity`. `cps.status.periodGroupId` is gone.
- Removed, never written by a producer: `cps.glossary` (the glossary is the `glossary.md` tables),
  `cps.alias`, `cps.measureId`, `cps.score`, `cps.weight` (weights live in `cps.evaluation`),
  `cps.provenance.scorecard` (duplicate of `cps.scorecard`), `cps.provenance.lastCalculated`, and
  `cps.measure.evaluation` (replaced by `cps.evaluation`).
- Removed from the layout: per-scorecard `index.md` and `glossary.md`, and per-period `## <Period>` body
  sections. History is the status sidecar.
