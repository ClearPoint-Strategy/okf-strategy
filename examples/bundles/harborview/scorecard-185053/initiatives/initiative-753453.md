---
type: Initiative
title: Advanced Metering Infrastructure Rollout
resource: clearpoint://scorecard/185053/initiative/753453
cps:
  object: initiative
  objectId: 753453
  scorecardId: 185053
  scorecard: Public Works & Utilities
  access:
    derivedFrom: clearpoint://scorecard/185053
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
      calculation: "[scorecard-185053/initiatives/initiative-753453][Planned Spend (Cumulative)][CurrentPeriod] - [scorecard-185053/initiatives/initiative-753453][Actual Spend (Cumulative)][CurrentPeriod]"
      derivation: formula
    - name: "% of Budget Spent"
      seriesDataTypeId: 10
      calculation: ROUND([scorecard-185053/initiatives/initiative-753453][Actual Spend (Cumulative)][CurrentPeriod] / [scorecard-185053/initiatives/initiative-753453][Total Budget][CurrentPeriod] * 100, 1)
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
      calculation: "[scorecard-185053/initiatives/initiative-753453][Actual % Complete][CurrentPeriod] - [scorecard-185053/initiatives/initiative-753453][Planned % Complete][CurrentPeriod]"
      derivation: formula
    dataResource: scorecard-185053/data/initiative-753453-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58788
      status: On Target
    statusResource: scorecard-185053/data/initiative-753453-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-09-25T14:41:58.920Z"
      name: Jamie Chen (Strategic Planning)
    owner:
      name: Morgan Rivera (Public Works & Utilities)
    collaborators:
    - Jamie Chen (Strategic Planning)
    lastEditedBy:
      name: Jamie Chen (Strategic Planning)
      at: "2026-10-12T18:14:45.740Z"
---

## Overview

- **Scorecard:** Public Works & Utilities
- **Owner:** Morgan Rivera (Public Works & Utilities)
- **Reporting frequency:** Quarterly

## Details

- **Project Stage:** planning

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** On Target
- **Value:** 11000000

### Analysis

On target. The 2,000-meter pilot is installed with a 99.4% read success rate, and 21 of 22 collectors are live. Zone 1 mass deployment starts in November as planned.

### Recommendations

No action needed. Continue on the current plan.

## Objectives

- [Responsive Utility Customer Service](/scorecard-185053/objectives/objective-736140.md)

## Milestones

- [Business case & rate impact analysis](/scorecard-185053/milestones/milestone-1284948.md)
- [Council approval](/scorecard-185053/milestones/milestone-1284949.md)
- [AMI vendor RFP](/scorecard-185053/milestones/milestone-1284950.md)
- [Vendor contract award](/scorecard-185053/milestones/milestone-1284951.md)
- [Network design & collector siting](/scorecard-185053/milestones/milestone-1284952.md)
- [Billing system integration](/scorecard-185053/milestones/milestone-1284953.md)
- [Collector installation (22 sites)](/scorecard-185053/milestones/milestone-1284954.md)
- [Pilot deployment – 2,000 meters](/scorecard-185053/milestones/milestone-1284955.md)
- [Customer communications campaign](/scorecard-185053/milestones/milestone-1284957.md)
- [Pilot acceptance testing](/scorecard-185053/milestones/milestone-1284956.md)
- [Mass deployment – Zone 1 (12,000 meters)](/scorecard-185053/milestones/milestone-1284958.md)
- [Customer usage portal launch](/scorecard-185053/milestones/milestone-1284959.md)
- [Leak alert notifications go-live](/scorecard-185053/milestones/milestone-1284961.md)
- [Mass deployment – Zone 2 (14,000 meters)](/scorecard-185053/milestones/milestone-1284960.md)
- [Mass deployment – Zone 3 (11,000 meters)](/scorecard-185053/milestones/milestone-1284962.md)
- [Retire manual meter-reading routes](/scorecard-185053/milestones/milestone-1284963.md)
- [Project close-out & benefits report](/scorecard-185053/milestones/milestone-1284964.md)

## Initiative Measures

- [Average Customer Service Response Time (hrs)](/scorecard-185053/measures/measure-2127168.md)
- [Service Requests Closed Within SLA %](/scorecard-185053/measures/measure-2127169.md)
