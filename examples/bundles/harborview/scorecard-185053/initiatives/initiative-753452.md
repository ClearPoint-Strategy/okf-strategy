---
type: Initiative
title: Lead Service Line Replacement Program
resource: clearpoint://scorecard/185053/initiative/753452
cps:
  object: initiative
  objectId: 753452
  scorecardId: 185053
  scorecard: Public Works & Utilities
  access:
    derivedFrom: clearpoint://scorecard/185053
  periodicity: Quarterly
  startDate: "2025-01-06"
  endDate: "2029-06-29"
  measure:
    series:
    - name: Total Budget
      seriesDataTypeId: 10
      aggregateType: SUM
    - name: Planned Spend (Cumulative)
      seriesDataTypeId: 10
      aggregateType: SUM
    - name: Actual Spend (Cumulative)
      seriesDataTypeId: 10
      aggregateType: SUM
    - name: Forecast at Completion
      seriesDataTypeId: 10
      aggregateType: SUM
    - name: Budget Variance
      seriesDataTypeId: 10
      aggregateType: SUM
      calculation: "[i753452][Planned Spend (Cumulative)][CurrentPeriod] - [i753452][Actual Spend (Cumulative)][CurrentPeriod]"
    - name: "% of Budget Spent"
      seriesDataTypeId: 10
      aggregateType: SUM
      calculation: ROUND([i753452][Actual Spend (Cumulative)][CurrentPeriod] / [i753452][Total Budget][CurrentPeriod] * 100, 1)
    - name: Planned % Complete
      seriesDataTypeId: 10
      aggregateType: SUM
    - name: Actual % Complete
      seriesDataTypeId: 10
      aggregateType: SUM
    - name: Schedule Variance (pts)
      seriesDataTypeId: 5
      aggregateType: SUM
      calculation: "[i753452][Actual % Complete][CurrentPeriod] - [i753452][Planned % Complete][CurrentPeriod]"
    dataResource: scorecard-185053/data/initiative-753452-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58790
      status: Below Plan
    statusResource: scorecard-185053/data/initiative-753452-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-09-25T14:41:50.710Z"
      name: Jamie Chen (Strategic Planning)
    owner:
      name: Morgan Rivera (Public Works & Utilities)
    collaborators:
    - Jamie Chen (Strategic Planning)
    lastEditedBy:
      name: Jamie Chen (Strategic Planning)
      at: "2026-10-12T18:14:45.333Z"
---

## Overview

- **Scorecard:** Public Works & Utilities
- **Owner:** Morgan Rivera (Public Works & Utilities)
- **Reporting frequency:** Quarterly

## Details

- **Project Stage:** implementation

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Below Plan
- **Value:** 14500000

### Analysis

Behind plan. Only 38% of affected property owners have signed right-of-entry agreements, so crews cannot reach the private side of the line. Year 1 replacements are at 214 of 800. Spend is under plan for the same reason.

### Recommendations

Escalate to the executive sponsor. Approve a re-baselined schedule or additional resources at the next leadership meeting.

## Objectives

- [Dependable Water & Sewer Infrastructure](/scorecard-185053/objectives/objective-736138.md)

## Milestones

- [Service line material inventory](/scorecard-185053/milestones/milestone-1284932.md)
- [Inventory submission to FX](/scorecard-185053/milestones/milestone-1284933.md)
- [Replacement plan & prioritization (schools & daycares first)](/scorecard-185053/milestones/milestone-1284934.md)
- [Lead line funding application (SRF/WIFIA)](/scorecard-185053/milestones/milestone-1284935.md)
- [Customer notification letters (4,100 addresses)](/scorecard-185053/milestones/milestone-1284936.md)
- [Right-of-entry agreement campaign](/scorecard-185053/milestones/milestone-1284937.md)
- [Year 1 contractor procurement](/scorecard-185053/milestones/milestone-1284938.md)
- [Pitcher filter distribution program](/scorecard-185053/milestones/milestone-1284939.md)
- [Unknown-material verification (potholing)](/scorecard-185053/milestones/milestone-1284940.md)
- [Year 1 replacements – 800 lines](/scorecard-185053/milestones/milestone-1284941.md)
- [School & daycare sampling](/scorecard-185053/milestones/milestone-1284942.md)
- [Public replacement tracker](/scorecard-185053/milestones/milestone-1284943.md)
- [Year 2 contractor procurement](/scorecard-185053/milestones/milestone-1284944.md)
- [Year 2 replacements – 1,100 lines](/scorecard-185053/milestones/milestone-1284945.md)
- [Year 3 replacements – 1,100 lines](/scorecard-185053/milestones/milestone-1284946.md)
- [Program close-out & final inventory](/scorecard-185053/milestones/milestone-1284947.md)

## Risks

- [Aging Water Main Failures](/scorecard-185052/risks/risk-99857.md)
- [Low Property Owner Consent for Lead Line Replacement](/scorecard-185052/risks/risk-99863.md)

## Initiative Measures

- [Water Main Breaks per 100 Miles](/scorecard-185053/measures/measure-2127163.md)
- [Unplanned Outage Minutes](/scorecard-185053/measures/measure-2127164.md)
- [Non-Revenue Water %](/scorecard-185053/measures/measure-2127165.md)
- [Tidal & Storm Flooding Events (days/yr, rolling)](/scorecard-185053/measures/measure-2127171.md)
