# Source-data gaps & issues

Things the emitter (and the future cps-lucee `GET /okf`) works around or can't fully source from the
public API. Grouped by kind. Discovered building the Upward Airlines + Metropolis bundles.

## A. ClearPoint data-quality bugs (fix at the source)

1. **Corrupt `completedDate` (century dropped).** The MCP projection returns `completedDate` as
   `0025-MM-DD` (i.e. 2025 with the century lost) on ~9/38 Upward milestones; the REST list omits it
   entirely. Looks like a `yy`-vs-`yyyy` date-format bug in the projection. The emitter guards and drops
   invalid dates.
2. **`periodGroupId` wrong in the REST list endpoints.** `/scorecards/{id}/objectives` (etc.) report
   `periodGroupId: 0` while the MCP element carries the real value (objective 207709 → `9722`/Monthly).
   The emitter now sources it from the MCP element; the list value is unreliable.
3. **`statusColorName` is null.** `/status` gives `statusColor` (hex) but not a human color name, so
   `statuses.md` can only carry the hex.

## B. API gaps (needed for a faithful `GET /okf`; not on the public surface)

4. **Access rules (who-can-access).** `_mcpElement.access` is the *caller's* access, not the element's
   access rules. No endpoint found for "which users/groups hold what level on a scorecard/element."
   Needed for the access-rules lookup (SPEC §4.2). `GET /okf` can read it internally.
5. **District default language.** The glossary default should come from the district language
   (`application.locale.get(districtId)` — the "no scorecardId" language), but there is no public
   `/language` (only `/scorecards/{id}/language`). The demo approximates the default with ClearPoint's
   canonical labels; `GET /okf` should use the real district default.
6. **Period → scorecard scoping.** Custom fields expose scope via `scorecardId` (empty = account-default,
   a list = scorecard-specific) — handled in `custom-fields.md`. **Periods do not**: `periods.json`'s
   `scorecardList` is empty, so we can't mark which periods are default vs scorecard-specific.

## C. Notes / handled, but worth confirming

7. **Scorecard-specific period names.** A period has a district name (`Mar-21`) and a per-scorecard
   custom alias (`Q1-21`, from measureData). `periodicities.md` now uses the custom alias; `periods.md`
   carries the district name + `master`. Account-level aggregation keeps one custom name per group.
8. **`/scorecards/{id}/customFields` returns empty** — the scorecard-scoped endpoint gave 0 rows; the
   district `/customFields` has the real definitions (grouped by element type, with mode/options/scope).
9. **Member-status bounded for Metropolis.** To cap the pull (11 scorecards), per-element analysis/
   recommendations were skipped for Metropolis; status *labels* still come from the period snapshots.
