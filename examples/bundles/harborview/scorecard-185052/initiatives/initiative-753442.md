---
type: Initiative
title: Downtown Waterfront Revitalization
resource: clearpoint://scorecard/185052/initiative/753442
cps:
  object: initiative
  objectId: 753442
  scorecardId: 185052
  scorecard: City Strategic Plan
  access:
    derivedFrom: clearpoint://scorecard/185052
  periodicity: Quarterly
  startDate: "2025-01-06"
  endDate: "2028-06-30"
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
      calculation: "[i753442][Planned Spend (Cumulative)][CurrentPeriod] - [i753442][Actual Spend (Cumulative)][CurrentPeriod]"
    - name: "% of Budget Spent"
      seriesDataTypeId: 10
      aggregateType: SUM
      calculation: ROUND([i753442][Actual Spend (Cumulative)][CurrentPeriod] / [i753442][Total Budget][CurrentPeriod] * 100, 1)
    - name: Planned % Complete
      seriesDataTypeId: 10
      aggregateType: SUM
    - name: Actual % Complete
      seriesDataTypeId: 10
      aggregateType: SUM
    - name: Schedule Variance (pts)
      seriesDataTypeId: 5
      aggregateType: SUM
      calculation: "[i753442][Actual % Complete][CurrentPeriod] - [i753442][Planned % Complete][CurrentPeriod]"
    dataResource: scorecard-185052/data/initiative-753442-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58790
      status: Below Plan
    statusResource: scorecard-185052/data/initiative-753442-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-09-25T14:40:46.333Z"
      name: Jamie Chen (Strategic Planning)
    owner:
      name: Alex Morgan (Leadership Team)
    collaborators:
    - Jamie Chen (Strategic Planning)
    - Dana Okonkwo (Aviation & Seaport)
    - Morgan Rivera (Public Works & Utilities)
    lastEditedBy:
      name: Jamie Chen (Strategic Planning)
      at: "2026-10-12T17:13:25.610Z"
---

## Overview

- **Scorecard:** City Strategic Plan
- **Owner:** Alex Morgan (Leadership Team)
- **Reporting frequency:** Quarterly

## Details

- **Initiative Review:** under_review

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Below Plan
- **Value:** 24000000

### Analysis

Behind plan. Parcel B (Dock Rd) acquisition is in condemnation proceedings and the Army Corps 404 permit has had two rounds of comments. Spend is under plan because design development cannot start in earnest until both clear.

### Recommendations

Escalate to the executive sponsor. Approve a re-baselined schedule or additional resources at the next leadership meeting.

## Objectives

- [Thriving Neighborhoods & Local Economy](/scorecard-185052/objectives/objective-736136.md)

## Milestones

- [Market & economic feasibility study](/scorecard-185052/milestones/milestone-1284826.md)
- [Stakeholder & merchant engagement](/scorecard-185052/milestones/milestone-1284827.md)
- [Parking & mobility study](/scorecard-185052/milestones/milestone-1284828.md)
- [Waterfront master plan adoption](/scorecard-185052/milestones/milestone-1284829.md)
- [Environmental review](/scorecard-185052/milestones/milestone-1284830.md)
- [Seawall condition assessment](/scorecard-185052/milestones/milestone-1284831.md)
- [Land acquisition – Parcel A (Harbor St)](/scorecard-185052/milestones/milestone-1284832.md)
- [Land acquisition – Parcel B (Dock Rd)](/scorecard-185052/milestones/milestone-1284833.md)
- [Federal RAISE grant application](/scorecard-185052/milestones/milestone-1284834.md)
- [Schematic design](/scorecard-185052/milestones/milestone-1284835.md)
- [Army Corps Section 404 permit](/scorecard-185052/milestones/milestone-1284836.md)
- [Developer RFQ for mixed-use parcel](/scorecard-185052/milestones/milestone-1284837.md)
- [Design development](/scorecard-185052/milestones/milestone-1284838.md)
- [Construction documents](/scorecard-185052/milestones/milestone-1284839.md)
- [Construction bid & award](/scorecard-185052/milestones/milestone-1284840.md)
- [Seawall reconstruction](/scorecard-185052/milestones/milestone-1284841.md)
- [Promenade & public plaza construction](/scorecard-185052/milestones/milestone-1284842.md)
- [Grand opening](/scorecard-185052/milestones/milestone-1284843.md)

## Risks

- [Construction Cost Escalation](/scorecard-185052/risks/risk-99858.md)
- [Waterfront Land Acquisition Delay](/scorecard-185052/risks/risk-99859.md)

## Initiative Measures

- [Population Growth Rate %](/scorecard-185052/measures/measure-2127154.md)
