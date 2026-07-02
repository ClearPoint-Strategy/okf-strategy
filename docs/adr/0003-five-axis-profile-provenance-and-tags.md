# ADR-0003: The five-axis profile — access propagation, dual provenance, tags as facets

- **Status:** Proposed
- **Date:** 2026-07-02
- **Deciders:** ClearPoint (platform)

## Context

A strategy knowledge graph that fuses structured (ClearPoint) and unstructured (org RAG/Pinecone)
knowledge and serves it to any AI must carry more than nodes and edges. Three things are easy to get
wrong and expensive to retrofit: **access** (a fused graph can leak what no single source would reveal),
**time** (elements report on different periodicities; "current" is ambiguous), and **provenance** (trust
and audit). The base OKF format models none of these.

## Decision

Define OKF-CPS as **five first-class axes**, all under the producer-defined `cps:` key so base-OKF
consumers still parse: **structure, access, time, provenance, vocabulary** (see
[SPEC §4](../../SPEC.md#4-the-five-axes-normative)). Three decisions worth recording explicitly:

1. **Access is schema and propagates; enforcement is pre-retrieval.** Every node carries `cps.access`
   (capability level + compartment markings), sourced from cps-next effective access. Derived nodes take
   the **union** of source markings; rollups and edges are visible only if **all** children / **both**
   endpoints are; absence is **default-deny**. `cps.access` is the computed audit trail — the boundary is
   enforced server-side, per principal, **before** any node enters an LLM context. There is no 403 in
   grounding, so prompt-level "be discreet" is never the control. Tags are explicitly **not** access.

2. **Provenance is two distinct kinds.** *Editorial* (native ClearPoint audit: `createdBy`,
   `lastEditedBy` for definition changes, `lastUpdatedBy` for period-scoped updates, `owner`, home
   `scorecard`) makes grounded answers traceable and auditable; period facts carry their own stamp.
   *Resolution* (`confidence`/`evidence`, from parsing) applies only to parsed/derived nodes. Both ride in
   `cps.provenance`; they answer different questions ("who authored this" vs "how sure are we this was
   parsed right").

3. **Tags are a cross-cutting facet layer, namespaced `<dimension>:<value>`.** They model the *thematic*
   graph atop the *structural* graph, and are the **join key** between the structured spine and the
   unstructured knowledge base (a Pinecone doc tagged `theme:equity` attaches to the equity facet). They
   drive filtering/retrieval and the mind-map renderer. They never gate visibility.

## Consequences

- The graph-specific hazards (aggregation side-channel, hidden-endpoint leak, ambiguous "current") are
  addressed in the format, not left to each consumer.
- Editorial provenance doubles as SOC2/Drata-grade audit surface for AI answers.
- Two open questions remain (SPEC-level): the exact **multi-scorecard rollup audience** rule
  (intersection vs. owning-scorecard), and whether the `domain:` marking overlay ships in v0.1 or waits.

## Alternatives considered

- **Access as a serving-layer filter, not in the model.** Rejected: fusion happens in the graph, so
  markings must propagate through derivation; a post-hoc filter can't see the union it needs.
- **One provenance blob.** Rejected: conflates "who edited" with "how confident the parse was" — different
  consumers, different lifecycles.
- **Tags overloaded for access/classification.** Rejected: tags are discovery; making them load-bearing
  for permissions is a classic and dangerous conflation.
