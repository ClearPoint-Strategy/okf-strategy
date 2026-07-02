# cps-okf

> **Proprietary & confidential.** © 2026 ClearPoint Strategy, LLC. Public/private split is deferred —
> see [LICENSE](LICENSE) and [SPEC §9](SPEC.md#9-versioning--the-openprivate-split-deferred).

**OKF-CPS is the ClearPoint Strategy profile of the [Open Knowledge Format](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md).**
It is the format and contract for the **ClearPoint Strategy Knowledge Graph** — a portable, LLM-legible
projection of an organization's strategy that carries structure, access, time, provenance, and
vocabulary as first-class data.

The thesis: the customer owns the *content*; the product is the **governed substrate**. OKF-CPS carries
that substrate across the wire so any AI — ClearPoint's own or anything plugged into the ClearPoint MCP —
gets exceptional, grounded, permission-safe answers anywhere.

## What's here (and what isn't yet)

**Current state — spec + schemas + validator.** This repo holds the *format*, not the runtime. The
emitter (ClearPoint → bundle), the diff→apply compiler (bundle → ClearPoint), and the MCP live
elsewhere; this repo is the stable contract they target.

```
SPEC.md              The OKF-CPS profile (the five axes, tags, metrics, round-trip). START HERE.
schemas/
  concept.schema.json   Concept frontmatter — the extension (all five axes under `cps:`).
  bundle.schema.json    Root index.md — okf_version + the organizational glossary.
  common | element | linked-elements | element-status | measure-series | measure-data |
  customfield-data      Migrated node/edge/period-fact substrate an OKF concept projects from.
scripts/validate.mjs  Conformance gate (the survivor of cps-parse's validator, elevated).
docs/
  mapping.md          ClearPoint element ↔ OKF concept mapping (the outbound mirror of field-mapping).
  adr/                Why the format is shaped this way.
examples/bundles/     Upward Airlines — a worked bundle demonstrating all five axes with real fields.
```

The `cps` block is grounded in the real ClearPoint OpenAPI (`cps-lucee/api/v1/doc/schema`) and is the
on-disk **superset of ClearPoint's own AI-grounding projection** (`_mcpElement` / `_mcpElementStatus` /
`_mcpLink`) — see [ADR-0004](docs/adr/0004-grounded-in-openapi-mirrors-mcp-projection.md).

## The five axes

| Axis | Carries | Source |
| ---- | ------- | ------ |
| Structure | nodes, typed edges (`cps.edges`), hierarchy, rollups | ClearPoint element model |
| Access | capability + compartment markings, propagated (∩ on rollups/edges) | cps-next `use-access` |
| Time | valid-time reporting period, per-element cadence, system-time | periods / periodGroups |
| Provenance | editorial audit (who/when/where) + resolution (confidence/evidence) | ClearPoint audit + parse `_map` |
| Vocabulary | org term ↔ canonical type/status/field | organizational glossary |

## Relationship to the other repos

- **cps-parse** — the inbound document parser. OKF-CPS is the outbound mirror; per
  [ADR-0002](docs/adr/0002-llm-authors-okf-compiler-applies.md) it also becomes the single interchange
  format, and the parser's envelope-authoring is superseded by "LLM authors a bundle → deterministic
  compiler applies it." The validation/confidence/ordering discipline relocates here + into the compiler.
- **cps-next** — provides the effective-access model (axis 2) and hosts the review/approval gate + the MCP.
- **Sources are organizational only** — the ClearPoint DB (structured) and org RAG/Pinecone (unstructured).
  Personal sources (email/calendar) enrich a *local* personal graph and are never org-served.

## Validate

```bash
npm install        # ajv, ajv-formats, yaml
npm run validate   # checks examples/ bundles against the profile
```
