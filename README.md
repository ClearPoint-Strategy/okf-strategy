# OKF-Strategy

**An open format for an organization's strategy graph — a profile of the [Open Knowledge Format](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md).**

OKF-Strategy represents strategy — objectives, measures, initiatives, milestones, risks, their
relationships, status over time, and the people and vocabulary around them — as a portable bundle of
Markdown + YAML that is **human-readable, machine-parseable, version-control friendly, and legible to an
LLM**. It extends Google's OKF v0.1: every OKF-Strategy bundle is a valid OKF bundle, and all extensions
live under a single producer-defined `cps:` frontmatter key, so a base-OKF consumer ignores them and
still parses, links, and indexes the bundle.

The point: your strategy becomes a **portable, groundable, migratable artifact** — not rows locked in one
app. You can ground any AI on it, export it, diff it in Git, template it, or move it between accounts.

## Why

The customer owns the *content*; the value is a **governed substrate** — a strategy graph that carries
five things as first-class, portable data:

| Axis | Carries |
| ---- | ------- |
| **Structure** | nodes (elements), typed relationships, hierarchy, rollups |
| **Access** | compartment membership; enforced pre-retrieval, per principal |
| **Time / Status** | reporting periods, per-element periodicity, current status + history |
| **Provenance** | editorial audit (who/when) + resolution confidence |
| **Vocabulary** | the organization's own terms bound to canonical types (a glossary) |

## Layout

```
bundle/
  index.md            # okf_version only (base OKF §6)
  glossary.md         # the organization's vocabulary (Glossary concept)
  user-access.md      # the access model: principals, per-scorecard grants, group rules (portable)
  users.md · statuses.md · tags.md · periods.md · periodicities.md · custom-fields.md   # reference lookups
  log.md              # change history, newest-first
  scorecard-<id>/
    index.md
    objectives/objective-<id>.md      # one Concept per element; ID = path minus .md
    measures/measure-<id>.md
    data/measure-<id>-series.json      # numeric series (columnar sidecar)
    data/objective-<id>-status.json    # per-period status/analysis history
```

A concept's **frontmatter** is the machine spine (identity, status, provenance, series); its **body** is
the readable document (overview, custom fields, current status, and relationships as grouped Markdown
links). See **[SPEC.md](SPEC.md)** for the normative profile and **[schemas/](schemas/)** for the JSON
Schemas.

## What it enables

- **AI grounding** — the bundle is the shape an LLM consumes best; point any model or MCP at it.
- **Portability & anti-lock-in** — your strategy as an open, diffable, self-contained export.
- **Migration & templating** — because ids don't travel but names + structure + the glossary do, a bundle
  can be **resolved into another account** (a reference template instantiates anywhere).

## Conformance & validation

A bundle conforms when every non-reserved `.md` has parseable frontmatter with a non-empty `type`, and the
reserved files (`index.md`, `log.md`) follow base OKF. The included validator checks the profile:

```bash
npm install
npm run validate    # validates the example bundles against the schemas
```

Two worked bundles live in [`examples/bundles/`](examples/bundles/) (Upward Airlines and a larger,
multi-scorecard Metropolis account), both generated from a real strategy platform.

## Relationship to base OKF

OKF-Strategy is a **conservative extension**: it adds a strategy type taxonomy, an access-marking
vocabulary, a temporal/status model, a glossary convention, and typed relationships — all as producer
extensions. Base OKF's non-goal of a fixed type taxonomy is exactly the seam this profile fills.

## Status

**v0.1 — early and evolving.** The spec, schemas, and example bundles are usable today; the profile may
still change as real bundles exercise it. Breaking changes are tracked in `okf_version` and called out in
[SPEC.md](SPEC.md). Feedback and real-world bundles are the fastest way to harden it.

## Contributing

Contributions are welcome — issues that surface a modeling gap are as valuable as pull requests. See
[CONTRIBUTING.md](CONTRIBUTING.md) for how the profile evolves, what makes a good schema change, and the
one hard rule: **every OKF-Strategy bundle must remain a valid base-OKF bundle**, and all extensions stay
under the `cps:` key.

## License

The specification and schemas are offered as an open format. See [LICENSE](LICENSE). The reference
implementation (the emitter, validator, and resolver that produce and consume these bundles) lives in the
strategy platform, not this repository.
