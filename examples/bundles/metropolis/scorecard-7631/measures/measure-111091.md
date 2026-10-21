---
type: Measure
title: Profitability
resource: clearpoint://scorecard/7631/measure/111091
cps:
  object: measure
  objectId: 111091
  scorecardId: 7631
  scorecard: Airport
  access:
    derivedFrom: clearpoint://scorecard/7631
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 3495950
    series:
    - name: Actual
      seriesId: 3495950
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3495951
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 3495951
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3495951
        sortOrder: 4
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 5
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-7631/data/measure-111091-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7631/data/measure-111091-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-07-01T13:26:17.380Z"
      name: ClearPoint Support
    owner:
      name: Lance Cummins (Police Chief)
    lastEditedBy:
      name: ClearPoint Support
      at: "2020-12-03T16:05:18.667Z"
---

## Overview

- **Scorecard:** Airport
- **Owner:** Lance Cummins (Police Chief)
- **Reporting frequency:** Monthly

## Details

- **Complete?:** 0

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** On Target

### Analysis

Our profitability is struggling due to our high expenses.

### Recommendations

Focus on cutting expenses.

## Parents

- [Budget Surplus](/scorecard-7612/measures/measure-110207.md)

## Objectives

- [Budget Health](/scorecard-7631/objectives/objective-54270.md)

## Measure Initiatives

- [Study revenue growth](/scorecard-7631/initiatives/initiative-215318.md)
