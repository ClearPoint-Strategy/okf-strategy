<!-- AGENTS.md is a symlink to this file — edit here only; do not recreate it as a real file. -->

# OKF-Strategy

An **open, public specification** — a profile of Google's [Open Knowledge Format](https://github.com/GoogleCloudPlatform/knowledge-catalog)
representing an organization's strategy graph (objectives, measures, initiatives, milestones,
risks, relationships, status over time) as portable Markdown + YAML.

**This repo is different from every other repo in this workspace.** It is a **public** spec repo
(`ClearPoint-Strategy/okf-strategy`), not a ClearPoint product repo. There is no tenant data, no
customer data, and no ClearPoint database. The multi-tenant and prod-safety rules that govern the
product repos do not apply here; the rules below do.

> The repo was transferred from `dylan-miyake/okf-strategy` to the ClearPoint org. Local checkouts
> may still have the personal URL as `origin` — GitHub redirects it, so pushes work, but `gh` will
> report the org name. Re-point `origin` when convenient.

## Quick Facts

| Attribute | Value |
|-----------|-------|
| Nature | Specification + JSON Schemas + conformance validator |
| Default branch | `master` — no `dev` branch |
| Verify | `npm run validate` (conformance validator over `examples/`) |
| Layout | `SPEC.md` (normative), `schemas/`, `examples/`, `docs/`, `scripts/`, `local/` |

## Non-Negotiables

- **Every OKF-Strategy bundle must remain a valid base-OKF bundle.** All extensions live under the
  single producer-defined `cps:` frontmatter key so a base-OKF consumer can ignore them and still
  parse, link, and index the bundle. Adding a top-level key outside `cps:` breaks that contract.
- **`SPEC.md` is normative.** Schemas, examples, and docs follow it. A change that alters behavior
  must land in `SPEC.md` in the same change — never let an example or schema imply a rule the spec
  does not state.
- **Public repo.** Never commit ClearPoint customer names, district ids, internal URLs, credentials,
  or anything else non-public. Examples use invented organizations.
- Spec changes are breaking by default for downstream consumers. Version and state the impact
  rather than editing silently.

## Verification

`npm run validate` must pass over every example before any spec, schema, or example change is
considered done. An example that no longer validates is a spec bug, not an example bug — fix the
one that is actually wrong and say which.
