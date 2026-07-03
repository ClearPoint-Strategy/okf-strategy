# Contributing to OKF-Strategy

Thanks for helping shape an open format for organizational strategy. OKF-Strategy is young (v0.1), so the
most valuable contributions right now are **real bundles that stress the model** and **issues that surface
a modeling gap** — not just code.

## The one hard rule

**Every OKF-Strategy bundle must remain a valid [base-OKF](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md) bundle.**
That means:

- Every non-reserved `.md` has parseable YAML frontmatter with a non-empty `type`.
- Reserved files (`index.md`, `log.md`) follow base OKF; `index.md` carries only `okf_version`.
- **All ClearPoint / profile-specific extensions live under the single `cps:` frontmatter key.** A
  base-OKF consumer that ignores `cps:` must still parse, link, and index the bundle. Nothing profile-specific
  goes at the top level except where base OKF already defines it (e.g. `type`, `title`, `tags`).

A change that breaks base-OKF conformance will not be accepted. When in doubt, run the validator.

## What makes a good contribution

- **A worked example bundle** that exercises a case the current examples don't (deep hierarchies, unusual
  access models, non-English glossaries, rich custom fields). Add it under `examples/bundles/` and make it
  pass `npm run validate`.
- **A modeling issue**: "OKF-Strategy can't represent X." Describe X, why it matters, and ideally how a
  real platform exposes it. These drive the profile forward.
- **A schema tightening or fix**: a `cps:` field that should be constrained, an enum that's missing a
  value, a `$ref` that's wrong. Keep changes additive and backward-compatible where possible.
- **Spec clarity**: prose in `SPEC.md` that's ambiguous or under-specified.

## Ground rules for the profile

- **Additive by default.** Prefer optional fields and new enum values over renames or removals. Anything
  breaking bumps `okf_version` and is documented in `SPEC.md`.
- **Names over IDs for portability.** A bundle should be *resolvable into another account*. Model in terms
  of stable, human-meaningful names + structure + glossary; treat platform IDs as convenience, not
  identity.
- **Producer-neutral vocabulary.** The format is not ClearPoint-specific in spirit even though `cps:` is
  the reserved key. Keep field names and docs describing *strategy*, not one product's UI.
- **Five axes.** New fields should map cleanly to one of: structure, access, time/status, provenance,
  vocabulary. If it doesn't fit, that's a design discussion worth having in an issue first.

## Workflow

1. Open an issue describing the gap or change (especially for anything touching the spec or a schema's
   shape). Discussion before a large PR saves everyone time.
2. For schema/spec PRs: update `SPEC.md`, the relevant file in `schemas/`, and add or adjust an example so
   the change is exercised.
3. Run the validator locally:
   ```bash
   npm install
   npm run validate     # validates every example bundle against the schemas
   ```
   A PR should leave `npm run validate` green.
4. Keep PRs focused — one modeling change per PR is far easier to reason about than a sweeping edit.

## Scope

This repository is the **open format**: the spec, the JSON schemas, the validator, and example bundles. The
reference *implementation* (the emitter/validator/resolver that produce and consume these bundles inside a
strategy platform) lives elsewhere and is out of scope here. Contributions here should be about the
**format**, not any one producer.

## Licensing of contributions

By contributing you agree your contributions are offered under the same terms as the rest of the
repository (see [LICENSE](LICENSE)). Don't contribute anything you don't have the right to license.
