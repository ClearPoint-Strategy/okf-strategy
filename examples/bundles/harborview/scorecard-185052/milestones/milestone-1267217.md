---
type: Milestone
title: Land-use element adopted
resource: clearpoint://scorecard/185052/milestone/1267217
cps:
  object: milestone
  objectId: 1267217
  scorecardId: 185052
  scorecard: City Strategic Plan
  access:
    derivedFrom: clearpoint://scorecard/185052
  periodicity: Quarterly
  startDate: "2025-12-28"
  endDate: "2026-03-28"
  evaluation:
    enabled: true
    statusSeries: Milestone Percent Complete
    statusSeriesId: 8436157
    series:
    - name: Milestone Percent Complete
      seriesId: 8436157
      bands:
      - status: On Target
        statusId: 58788
        compare: gte
        calculation: ""
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436158
        sortOrder: 2
      - status: Caution
        statusId: 58789
        compare: gte
        calculation: "*.9"
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436158
        sortOrder: 3
      - status: Below Plan
        statusId: 58790
        compare: lt
        calculation: ""
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436158
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
    dataResource: scorecard-185052/data/milestone-1267217-series.json
  status:
    currentPeriod:
      periodId: 385648
      period: Jun-26
      periodDate: "2026-06-30"
      statusId: 58790
      status: Below Plan
    statusResource: scorecard-185052/data/milestone-1267217-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-09-25T15:56:49.903Z"
      name: Jamie Chen (Strategic Planning)
    lastEditedBy:
      name: Jamie Chen (Strategic Planning)
      at: "2026-09-25T15:23:13.633Z"
---

## Overview

- **Scorecard:** City Strategic Plan
- **Reporting frequency:** Quarterly

## Status

- **Period:** Jun-26 (2026-06-30)
- **Status:** Below Plan
- **Value:** 85 (target 100)

### Analysis

85% complete. The original finish date of Mar 28, 2026 has passed; remaining work is carried into next quarter.

### Recommendations

Hold a schedule check-in with the project owner and confirm the recovery date.
