---
type: Measure
title: Average employee wage
resource: clearpoint://scorecard/7631/measure/111096
cps:
  object: measure
  objectId: 111096
  scorecardId: 7631
  scorecard: Airport
  access:
    derivedFrom: clearpoint://scorecard/7631
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753056
    series:
    - name: Actual
      seriesId: 753056
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753057
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 753057
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753057
        sortOrder: 3
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 4
      aggregateType: SUM
    dataResource: scorecard-7631/data/measure-111096-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7631/data/measure-111096-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T16:35:36.627Z"
      name: ClearPoint Support
    owner:
      name: John Smith
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T14:37:37.497Z"
---

## Overview

- **Scorecard:** Airport
- **Owner:** John Smith
- **Reporting frequency:** Annual

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** Below Plan

### Analysis

The average employee wage has been relatively steady. We need to make large financial adjustments to reach our increasing target.

### Recommendations

We should find areas in the budget where we can cut expenses and reallocate those funds for paying higher employee wages.

## Parents

- [Average employee wage](/scorecard-7612/measures/measure-110213.md)

## Objectives

- [Recruit from top colleges](/scorecard-7631/objectives/objective-54236.md)
