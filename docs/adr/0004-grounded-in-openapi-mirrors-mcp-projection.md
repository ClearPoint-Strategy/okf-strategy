# ADR-0004: Ground the profile in the real OpenAPI; superset the MCP projection

- **Status:** Accepted
- **Date:** 2026-07-02
- **Deciders:** ClearPoint (platform)

## Context

The first draft of the concept schema used the trimmed element shape carried over from cps-parse. The
canonical, far richer source is the ClearPoint OpenAPI (`cps-lucee/api/v1/doc/openapi.json` and
`schema/*.json`). Reviewing it surfaced three things that change the format:

1. **ClearPoint already has an AI-grounding projection.** `_mcpElement`, `_mcpElementStatus`, and
   `_mcpLink` are the shapes the MCP returns today — with owner id resolved to a name, tags resolved to
   strings, per-element and per-link `access` on the six-level ladder, and typed `links` with a fixed
   `fieldId` vocabulary. This is a proto-OKF.
2. **The editorial-provenance design was already the schema.** `element.lastEdited`/`lastEditedBy`
   (definition) versus `element.lastUpdated`/`lastUpdatedBy` (status/data) are real, distinct fields —
   exactly the two-kind split ADR-0003 proposed.
3. **Real vocabularies exist** for edges (`_mcpLink.fieldId`), access (`_elementAccess` / `_access`),
   series types (`seriesDataTypeId`), number formats (`_numberFormat`), and status rules
   (`objectiveEvaluation`).

## Decision

**Ground `concept.schema.json` in the real OpenAPI, and define the `cps` block as the superset of
`_mcpElement` / `_mcpElementStatus` / `_mcpLink`.** Adopt the real enums (edge `fieldId`, capability,
`seriesDataTypeId`), the real audit field pair, resolved owner/tag values, per-link access, and the
number-format / evaluation-rule shapes. The example bundle is rebuilt on **Upward Airlines** (the
canonical demo scorecard) with these real field names and values.

## Consequences

- **Shorter path to an emitter.** It starts from the existing MCP projection endpoints rather than raw
  element rows — most of the id→name and access resolution is already done server-side.
- **OKF-CPS is provably a superset of what the MCP already serves** — the portable, on-disk, five-axis
  extension of the same shape, which is the cleanest possible story for "the MCP everyone plugs in."
- The node/edge schemas migrated from cps-parse remain the *substrate*; the concept schema is now the
  authoritative projection contract and no longer depends on the trimmed parser shapes.
- Enum drift risk: edge `fieldId`, capability, and `seriesDataTypeId` are now duplicated from the
  OpenAPI. They must track it (a generated-from-OpenAPI step is the eventual fix).

## Alternatives considered

- **Keep the trimmed cps-parse shapes.** Rejected: throws away detail the OpenAPI already provides and
  diverges from what the MCP actually returns.
- **Point `resource` at raw element rows, not the MCP projection.** Rejected: the MCP projection is the
  curated, access-carrying, name-resolved shape we want; raw rows would re-do that work in the emitter.
