---
type: Initiative
title: Affordable Housing Trust Fund Deployment
resource: clearpoint://scorecard/185052/initiative/753444
cps:
  object: initiative
  objectId: 753444
  scorecardId: 185052
  scorecard: City Strategic Plan
  access:
    derivedFrom: clearpoint://scorecard/185052
  periodicity: Quarterly
  startDate: "2025-07-01"
  endDate: "2027-12-31"
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
      calculation: "[i753444][Planned Spend (Cumulative)][CurrentPeriod] - [i753444][Actual Spend (Cumulative)][CurrentPeriod]"
    - name: "% of Budget Spent"
      seriesDataTypeId: 10
      aggregateType: SUM
      calculation: ROUND([i753444][Actual Spend (Cumulative)][CurrentPeriod] / [i753444][Total Budget][CurrentPeriod] * 100, 1)
    - name: Planned % Complete
      seriesDataTypeId: 10
      aggregateType: SUM
    - name: Actual % Complete
      seriesDataTypeId: 10
      aggregateType: SUM
    - name: Schedule Variance (pts)
      seriesDataTypeId: 5
      aggregateType: SUM
      calculation: "[i753444][Actual % Complete][CurrentPeriod] - [i753444][Planned % Complete][CurrentPeriod]"
    dataResource: scorecard-185052/data/initiative-753444-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58789
      status: Caution
    statusResource: scorecard-185052/data/initiative-753444-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-09-25T14:41:05.810Z"
      name: Jamie Chen (Strategic Planning)
    owner:
      name: Jamie Chen (Strategic Planning)
    collaborators:
    - Chris Duval (Finance & Administration)
    lastEditedBy:
      name: Jamie Chen (Strategic Planning)
      at: "2026-10-12T17:13:24.863Z"
---

## Overview

- **Scorecard:** City Strategic Plan
- **Owner:** Jamie Chen (Strategic Planning)
- **Reporting frequency:** Quarterly

## Details

- **Initiative Review:** draft

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Caution
- **Value:** 12000000

### Analysis

Caution. Round 1 awards are made, but two of three loan closings slipped when a tax-credit investor repriced. Down-payment assistance is oversubscribed, which is good for demand but has drawn down the set-aside faster than planned.

### Recommendations

Review the late milestones with the project owner and confirm recovery dates before the next reporting cycle.

## Objectives

- [Attainable Housing & Reliable Mobility](/scorecard-185052/objectives/objective-736137.md)

## Milestones

- [Housing needs assessment update](/scorecard-185052/milestones/milestone-1284863.md)
- [Trust fund ordinance adoption](/scorecard-185052/milestones/milestone-1284862.md)
- [Program guidelines & underwriting criteria](/scorecard-185052/milestones/milestone-1284864.md)
- [Round 1 NOFA release](/scorecard-185052/milestones/milestone-1284865.md)
- [Round 1 application review & scoring](/scorecard-185052/milestones/milestone-1284866.md)
- [Down-payment assistance program launch](/scorecard-185052/milestones/milestone-1284867.md)
- [Community land trust partnership agreement](/scorecard-185052/milestones/milestone-1284869.md)
- [Round 1 awards (3 projects, 186 units)](/scorecard-185052/milestones/milestone-1284868.md)
- [Unit production & compliance tracking setup](/scorecard-185052/milestones/milestone-1284870.md)
- [Round 1 loan closings](/scorecard-185052/milestones/milestone-1284871.md)
- [ADU incentive pilot](/scorecard-185052/milestones/milestone-1284872.md)
- [Round 2 NOFA release](/scorecard-185052/milestones/milestone-1284873.md)
- [Round 2 awards](/scorecard-185052/milestones/milestone-1284874.md)
- [Round 1 groundbreakings](/scorecard-185052/milestones/milestone-1284875.md)
- [Annual report to Council](/scorecard-185052/milestones/milestone-1284876.md)
- [Round 2 loan closings](/scorecard-185052/milestones/milestone-1284877.md)
- [Fund evaluation & recapitalization plan](/scorecard-185052/milestones/milestone-1284878.md)

## Risks

- [Housing Tax-Credit Investor Pullback](/scorecard-185052/risks/risk-99864.md)

## Initiative Measures

- [Rent-Burdened Household Rate %](/scorecard-185052/measures/measure-2127160.md)
- [Point-in-Time Homeless Count](/scorecard-185052/measures/measure-2127161.md)
- [Affordable Units Delivered vs Annual Target %](/scorecard-185052/measures/measure-2127162.md)
