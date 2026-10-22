---
type: Initiative
title: Citywide Broadband & Digital Equity Program
resource: clearpoint://scorecard/185052/initiative/753443
cps:
  object: initiative
  objectId: 753443
  scorecardId: 185052
  scorecard: City Strategic Plan
  access:
    derivedFrom: clearpoint://scorecard/185052
  periodicity: Quarterly
  startDate: "2025-04-01"
  endDate: "2027-12-31"
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
      calculation: "[scorecard-185052/initiatives/initiative-753443][Planned Spend (Cumulative)][CurrentPeriod] - [scorecard-185052/initiatives/initiative-753443][Actual Spend (Cumulative)][CurrentPeriod]"
      derivation: formula
    - name: "% of Budget Spent"
      seriesDataTypeId: 10
      calculation: ROUND([scorecard-185052/initiatives/initiative-753443][Actual Spend (Cumulative)][CurrentPeriod] / [scorecard-185052/initiatives/initiative-753443][Total Budget][CurrentPeriod] * 100, 1)
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
      calculation: "[scorecard-185052/initiatives/initiative-753443][Actual % Complete][CurrentPeriod] - [scorecard-185052/initiatives/initiative-753443][Planned % Complete][CurrentPeriod]"
      derivation: formula
    dataResource: scorecard-185052/data/initiative-753443-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58788
      status: On Target
    statusResource: scorecard-185052/data/initiative-753443-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-09-25T14:40:56.010Z"
      name: Jamie Chen (Strategic Planning)
    owner:
      name: Jamie Chen (Strategic Planning)
    collaborators:
    - Alex Morgan (Leadership Team)
    - Priya Natarajan (Parks, Recreation & Libraries)
    lastEditedBy:
      name: Jamie Chen (Strategic Planning)
      at: "2026-10-12T17:13:25.250Z"
---

## Overview

- **Scorecard:** City Strategic Plan
- **Owner:** Jamie Chen (Strategic Planning)
- **Reporting frequency:** Quarterly

## Details

- **Initiative Review:** submitted

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** On Target
- **Value:** 8500000

### Analysis

On target. Phase 1 fiber is 86% constructed, all 12 Wi-Fi sites are live, and cohort 1 digital skills graduated 138 residents. Spend is tracking just under plan.

### Recommendations

No action needed. Continue on the current plan.

## Objectives

- [Engaged & Connected Community](/scorecard-185052/objectives/objective-736128.md)

## Milestones

- [Digital equity needs assessment](/scorecard-185052/milestones/milestone-1284844.md)
- [Broadband coverage mapping](/scorecard-185052/milestones/milestone-1284845.md)
- [Digital Equity Plan adoption](/scorecard-185052/milestones/milestone-1284846.md)
- [State BEAD grant award](/scorecard-185052/milestones/milestone-1284847.md)
- [Fiber backbone design – Phase 1](/scorecard-185052/milestones/milestone-1284848.md)
- [ISP partnership RFP](/scorecard-185052/milestones/milestone-1284849.md)
- [Public Wi-Fi at 12 parks & libraries](/scorecard-185052/milestones/milestone-1284851.md)
- [Fiber backbone construction – Phase 1 (Northside)](/scorecard-185052/milestones/milestone-1284852.md)
- [ISP partner contract execution](/scorecard-185052/milestones/milestone-1284850.md)
- [Library device lending program launch](/scorecard-185052/milestones/milestone-1284853.md)
- [Digital skills classes – cohort 1](/scorecard-185052/milestones/milestone-1284854.md)
- [Fiber backbone design – Phase 2](/scorecard-185052/milestones/milestone-1284855.md)
- [Affordable connectivity outreach campaign](/scorecard-185052/milestones/milestone-1284856.md)
- [Low-income subscriber enrollment (2,500 households)](/scorecard-185052/milestones/milestone-1284858.md)
- [Digital skills classes – cohort 2](/scorecard-185052/milestones/milestone-1284857.md)
- [Fiber backbone construction – Phase 2 (Southside)](/scorecard-185052/milestones/milestone-1284859.md)
- [Smart-city sensor pilot on backbone](/scorecard-185052/milestones/milestone-1284860.md)
- [Program evaluation & council report](/scorecard-185052/milestones/milestone-1284861.md)

## Risks

- [Cybersecurity Breach or Ransomware](/scorecard-185052/risks/risk-99860.md)
- [Federal and State Grant Funding Reductions](/scorecard-185052/risks/risk-99865.md)

## Initiative Measures

- [Overall Resident Satisfaction](/scorecard-185052/measures/measure-2127153.md)
- [% of city with public Wifi access](/scorecard-185052/measures/measure-2155090.md)
