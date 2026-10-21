---
type: Measure
title: Number of community evacuation trainings
resource: clearpoint://scorecard/7612/measure/120406
cps:
  object: measure
  objectId: 120406
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 778457
    series:
    - name: Actual
      seriesId: 778457
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 778458
        sortOrder: 1
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 778458
        sortOrder: 3
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 5
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 5
      aggregateType: SUM
    dataResource: scorecard-7612/data/measure-120406-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7612/data/measure-120406-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T01:46:59.367Z"
      name: ClearPoint Support
    owner:
      name: John Smith
    lastEditedBy:
      name: ClearPoint Support
      at: "2019-07-26T02:31:04.870Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** John Smith
- **Reporting frequency:** Annual

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** On Target

### Analysis

We're right on target here and will look to do more training next quarter.

### Recommendations

Continue to check in with offices organizing trainings on an as frequent basis as usual.

## Objectives

- [Safe & Prepared Community](/scorecard-7612/objectives/objective-274608.md)

## Children

- [Runway and taxiway pavement condition indicator (PCI) score](/scorecard-7631/measures/measure-107948.md)
