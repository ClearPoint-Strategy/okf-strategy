# ADR-0001: A separate repo for the format, and what migrated from cps-parse

- **Status:** Accepted
- **Date:** 2026-07-02
- **Deciders:** ClearPoint (platform)

## Context

cps-parse defined the **inbound** contract: unstructured documents → strict JSON envelopes → the house
importer → ClearPoint. Its schemas (`element`, `linkedElements`, `elementStatus`, `measureSeries`,
`measureData`, `customFieldData`) are native ClearPoint object shapes; its resolution model
(`_map`/confidence/evidence, the 0.80 threshold, `unresolved[]`) is a reusable entity-resolution engine.

We now want the **outbound** mirror — project the ClearPoint strategy graph to a portable, LLM-legible
knowledge bundle (OKF-CPS) — plus a graph that fuses the org's structured and unstructured knowledge and
serves it through the ClearPoint MCP. This is a different lifecycle from the inbound parser contract: it
grows a spec, a graph model, and (candidate) an *open* format, and it should be versionable and
shareable on its own.

## Decision

Create **cps-okf** as the home of the format. Migrate from cps-parse only the **substrate an OKF concept
projects from** — the node/edge/period-fact schemas (`common`, `element`, `linked-elements`,
`element-status`, `measure-series`, `measure-data`, `customfield-data`), with `$id`s rebased to
`cps-okf`. Leave behind the inbound/apply-contract schemas (`envelope`, `parse-job`, `steering-file`,
`execution-plan`, `lookup-manifest`) — those belong to the parser/compiler, not the format.

The **validator migrates and is elevated**: from "does this envelope match a schema" to "does this
bundle conform to the open profile" ([`scripts/validate.mjs`](../../scripts/validate.mjs)).

## Consequences

- The format versions independently and can carry a public/private split (deferred, SPEC §9) that
  cps-parse's single proprietary posture could not.
- The node/edge shapes are now duplicated across cps-parse and cps-okf. They must stay compatible; the
  canonical source remains `cps-lucee/api/v1/doc/schema/`. A later step may have both repos import a
  shared schema package rather than copy.
- Nothing about the inbound parser breaks — cps-parse is untouched.

## Alternatives considered

- **Extend cps-parse in place.** Rejected: conflates a stable inbound contract with a fast-moving,
  possibly-open outbound format on different lifecycles.
- **Put it in cps-next.** Rejected: the format benefits from being ownable and (candidate) publishable
  outside the app monolith — the same reasoning that put the parser contract in its own repo.
