---
type: Milestone
title: Online permitting go-live
resource: clearpoint://scorecard/185052/milestone/1267221
cps:
  object: milestone
  objectId: 1267221
  scorecardId: 185052
  scorecard: City Strategic Plan
  access:
    derivedFrom: clearpoint://scorecard/185052
  periodicity: Quarterly
  startDate: "2026-06-11"
  endDate: "2026-09-09"
  evaluation:
    enabled: true
    statusSeries: Milestone Percent Complete
    statusSeriesId: 8436167
    series:
    - name: Milestone Percent Complete
      seriesId: 8436167
      bands:
      - status: On Target
        statusId: 58788
        compare: gte
        calculation: ""
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436168
        sortOrder: 2
      - status: Caution
        statusId: 58789
        compare: gte
        calculation: "*.9"
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436168
        sortOrder: 3
      - status: Below Plan
        statusId: 58790
        compare: lt
        calculation: ""
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436168
        sortOrder: 4
      - status: No Information
        statusId: 58791
        compare: any
        sortOrder: 5
  measure:
    series:
    - name: Milestone Percent Complete
      seriesDataTypeId: 6
      derivation: reference
      reference:
        field: percentComplete
    - name: Milestone Calculated Percent Complete
      seriesDataTypeId: 6
      derivation: reference
      reference:
        field: elapsedPercentComplete
    dataResource: scorecard-185052/data/milestone-1267221-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58788
      status: On Target
    statusResource: scorecard-185052/data/milestone-1267221-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-09-25T15:23:18.233Z"
      name: Jamie Chen (Strategic Planning)
    lastEditedBy:
      name: Jamie Chen (Strategic Planning)
      at: "2026-10-15T11:57:29.680Z"
---

## Overview

- **Scorecard:** City Strategic Plan
- **Reporting frequency:** Quarterly

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** On Target
- **Value:** 100 (target 100)

### Analysis

Complete. Finished on schedule (Sep 9, 2026).

### Recommendations

On track. Keep the current cadence and report progress at the next quarterly review.
