---
type: Milestone
title: AI service assistant pilot
resource: clearpoint://scorecard/185052/milestone/1267222
cps:
  object: milestone
  objectId: 1267222
  scorecardId: 185052
  scorecard: City Strategic Plan
  access:
    derivedFrom: clearpoint://scorecard/185052
  periodicity: Quarterly
  startDate: "2026-06-26"
  endDate: "2026-11-23"
  evaluation:
    enabled: true
    statusSeries: Milestone Percent Complete
    statusSeriesId: 8436169
    series:
    - name: Milestone Percent Complete
      seriesId: 8436169
      bands:
      - status: On Target
        statusId: 58788
        compare: gte
        calculation: ""
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436170
        sortOrder: 2
      - status: Caution
        statusId: 58789
        compare: gte
        calculation: "*.9"
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436170
        sortOrder: 3
      - status: Below Plan
        statusId: 58790
        compare: lt
        calculation: ""
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436170
        sortOrder: 4
      - status: No Information
        statusId: 58791
        compare: any
        sortOrder: 5
  measure:
    series:
    - name: Milestone Percent Complete
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Milestone Calculated Percent Complete
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-185052/data/milestone-1267222-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58788
      status: On Target
    statusResource: scorecard-185052/data/milestone-1267222-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-09-25T15:23:19.233Z"
      name: Jamie Chen (Strategic Planning)
---

## Overview

- **Scorecard:** City Strategic Plan
- **Reporting frequency:** Quarterly

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** On Target
- **Value:** 65 (target 64)

### Analysis

65% complete with 64% of the scheduled window elapsed (due Nov 23, 2026). Tracking to plan.

### Recommendations

No changes recommended. Confirm resourcing for the next phase is lined up.
