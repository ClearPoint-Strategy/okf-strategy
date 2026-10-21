---
type: Milestone
title: Housing & mobility element draft
resource: clearpoint://scorecard/185052/milestone/1267218
cps:
  object: milestone
  objectId: 1267218
  scorecardId: 185052
  scorecard: City Strategic Plan
  access:
    derivedFrom: clearpoint://scorecard/185052
  periodicity: Quarterly
  startDate: "2026-03-28"
  endDate: "2026-11-13"
  evaluation:
    enabled: true
    statusSeries: Milestone Percent Complete
    statusSeriesId: 8436159
    series:
    - name: Milestone Percent Complete
      seriesId: 8436159
      bands:
      - status: On Target
        statusId: 58788
        compare: gte
        calculation: ""
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436160
        sortOrder: 2
      - status: Caution
        statusId: 58789
        compare: gte
        calculation: "*.9"
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436160
        sortOrder: 3
      - status: Below Plan
        statusId: 58790
        compare: lt
        calculation: ""
        referenceSeries: Milestone Calculated Percent Complete
        referenceSeriesId: 8436160
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
    dataResource: scorecard-185052/data/milestone-1267218-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58788
      status: On Target
    statusResource: scorecard-185052/data/milestone-1267218-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-10-15T11:57:52.767Z"
      name: Jamie Chen (Strategic Planning)
---

## Overview

- **Scorecard:** City Strategic Plan
- **Reporting frequency:** Quarterly

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** On Target
- **Value:** 85 (target 80.87)

### Analysis

85% complete. The original finish date of Aug 25, 2026 has passed; remaining work is being carried into next quarter.

### Recommendations

Hold a schedule check-in with the project owner at the next status meeting and confirm the recovery date.
