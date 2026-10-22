---
type: Initiative
title: Wastewater Treatment Plant Upgrade
resource: clearpoint://scorecard/185053/initiative/753451
cps:
  object: initiative
  objectId: 753451
  scorecardId: 185053
  scorecard: Public Works & Utilities
  access:
    derivedFrom: clearpoint://scorecard/185053
  periodicity: Quarterly
  startDate: "2024-10-01"
  endDate: "2028-12-29"
  measure:
    series:
    - name: Total Budget
      seriesDataTypeId: 10
    - name: Planned Spend (Cumulative)
      seriesDataTypeId: 10
    - name: Actual Spend (Cumulative)
      seriesDataTypeId: 10
    - name: Forecast at Completion
      seriesDataTypeId: 10
    - name: Budget Variance
      seriesDataTypeId: 10
      calculation: "[scorecard-185053/initiatives/initiative-753451][Planned Spend (Cumulative)][CurrentPeriod] - [scorecard-185053/initiatives/initiative-753451][Actual Spend (Cumulative)][CurrentPeriod]"
      derivation: formula
    - name: "% of Budget Spent"
      seriesDataTypeId: 10
      calculation: ROUND([scorecard-185053/initiatives/initiative-753451][Actual Spend (Cumulative)][CurrentPeriod] / [scorecard-185053/initiatives/initiative-753451][Total Budget][CurrentPeriod] * 100, 1)
      derivation: formula
    - name: Planned % Complete
      seriesDataTypeId: 10
    - name: Actual % Complete
      seriesDataTypeId: 10
      derivation: reference
      reference:
        field: percentComplete
    - name: Schedule Variance (pts)
      seriesDataTypeId: 5
      calculation: "[scorecard-185053/initiatives/initiative-753451][Actual % Complete][CurrentPeriod] - [scorecard-185053/initiatives/initiative-753451][Planned % Complete][CurrentPeriod]"
      derivation: formula
    dataResource: scorecard-185053/data/initiative-753451-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58789
      status: Caution
    statusResource: scorecard-185053/data/initiative-753451-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-09-25T14:41:41.950Z"
      name: Jamie Chen (Strategic Planning)
    owner:
      name: Morgan Rivera (Public Works & Utilities)
    collaborators:
    - Jamie Chen (Strategic Planning)
    lastEditedBy:
      name: Jamie Chen (Strategic Planning)
      at: "2026-10-12T18:14:44.793Z"
---

## Overview

- **Scorecard:** Public Works & Utilities
- **Owner:** Morgan Rivera (Public Works & Utilities)
- **Reporting frequency:** Quarterly

## Details

- **Project Stage:** procurement

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Caution
- **Value:** 38000000

### Analysis

Caution. Design is on schedule, but steel and electrical gear bids came in 9% over the engineer's estimate. Spend is running ahead of plan and the forecast at completion is now $40.3M against a $38.0M budget.

### Recommendations

Review the late milestones with the project owner and confirm recovery dates before the next reporting cycle.

## Objectives

- [Dependable Water & Sewer Infrastructure](/scorecard-185053/objectives/objective-736138.md)

## Milestones

- [Facility plan update](/scorecard-185053/milestones/milestone-1284911.md)
- [State revolving fund loan application](/scorecard-185053/milestones/milestone-1284912.md)
- [Design-build procurement (RFQ/RFP)](/scorecard-185053/milestones/milestone-1284913.md)
- [SRF loan approval ($28M)](/scorecard-185053/milestones/milestone-1284914.md)
- [Design-build contract award](/scorecard-185053/milestones/milestone-1284915.md)
- [30% design](/scorecard-185053/milestones/milestone-1284916.md)
- [FX permit modification](/scorecard-185053/milestones/milestone-1284917.md)
- [60% design](/scorecard-185053/milestones/milestone-1284918.md)
- [Early works – headworks screening replacement](/scorecard-185053/milestones/milestone-1284919.md)
- [Public open house](/scorecard-185053/milestones/milestone-1284920.md)
- [90% design](/scorecard-185053/milestones/milestone-1284921.md)
- [Temporary bypass pumping plan](/scorecard-185053/milestones/milestone-1284922.md)
- [Biological nutrient removal basin construction](/scorecard-185053/milestones/milestone-1284923.md)
- [Secondary clarifier rehabilitation](/scorecard-185053/milestones/milestone-1284924.md)
- [Electrical & SCADA upgrade](/scorecard-185053/milestones/milestone-1284925.md)
- [Biosolids dewatering building](/scorecard-185053/milestones/milestone-1284926.md)
- [Odor control system](/scorecard-185053/milestones/milestone-1284927.md)
- [Startup & commissioning](/scorecard-185053/milestones/milestone-1284928.md)
- [Operator training](/scorecard-185053/milestones/milestone-1284929.md)
- [Performance testing & permit compliance](/scorecard-185053/milestones/milestone-1284930.md)
- [Project close-out](/scorecard-185053/milestones/milestone-1284931.md)

## Risks

- [Construction Cost Escalation](/scorecard-185052/risks/risk-99858.md)
- [Federal and State Grant Funding Reductions](/scorecard-185052/risks/risk-99865.md)

## Initiative Measures

- [Water Main Breaks per 100 Miles](/scorecard-185053/measures/measure-2127163.md)
- [Unplanned Outage Minutes](/scorecard-185053/measures/measure-2127164.md)
- [Non-Revenue Water %](/scorecard-185053/measures/measure-2127165.md)
- [Tidal & Storm Flooding Events (days/yr, rolling)](/scorecard-185053/measures/measure-2127171.md)
