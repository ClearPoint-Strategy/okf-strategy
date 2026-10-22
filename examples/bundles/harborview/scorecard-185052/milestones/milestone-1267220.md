---
type: Milestone
title: Unified resident portal launched
resource: clearpoint://scorecard/185052/milestone/1267220
cps:
  object: milestone
  objectId: 1267220
  scorecardId: 185052
  scorecard: City Strategic Plan
  access:
    derivedFrom: clearpoint://scorecard/185052
  periodicity: Quarterly
  startDate: "2025-12-28"
  endDate: "2026-04-27"
  evaluation:
    enabled: true
    statusSeries: Milestone Percent Complete
    statusSeriesId: 8436165
    series:
    - name: Milestone Percent Complete
      seriesId: 8436165
      bands:
      - status: On Target
        statusId: 58788
        compare: gte
        calculation: ""
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436166
        sortOrder: 2
      - status: Caution
        statusId: 58789
        compare: gte
        calculation: "*.9"
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436166
        sortOrder: 3
      - status: Below Plan
        statusId: 58790
        compare: lt
        calculation: ""
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436166
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
    dataResource: scorecard-185052/data/milestone-1267220-series.json
  status:
    currentPeriod:
      periodId: 385648
      period: Jun-26
      periodDate: "2026-06-30"
      statusId: 58788
      status: On Target
    statusResource: scorecard-185052/data/milestone-1267220-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-09-25T15:56:49.043Z"
      name: Jamie Chen (Strategic Planning)
    lastEditedBy:
      name: Jamie Chen (Strategic Planning)
      at: "2026-09-25T15:23:16.893Z"
---

## Overview

- **Scorecard:** City Strategic Plan
- **Reporting frequency:** Quarterly

## Status

- **Period:** Jun-26 (2026-06-30)
- **Status:** On Target
- **Value:** 100 (target 100)

### Analysis

Complete. Finished on schedule (Apr 27, 2026).

### Recommendations

No action needed. Continue on the current plan.
