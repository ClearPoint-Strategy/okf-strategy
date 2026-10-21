---
type: Measure
title: Income Generated
resource: clearpoint://scorecard/7805/measure/111267
cps:
  object: measure
  objectId: 111267
  scorecardId: 7805
  scorecard: Police Department
  access:
    derivedFrom: clearpoint://scorecard/7805
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753745
    series:
    - name: Actual
      seriesId: 753745
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753746
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.99"
        referenceSeries: Target
        referenceSeriesId: 753746
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753746
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
    - name: Variance
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m111267][Actual][CurrentPeriod]-[m111267][Target][CurrentPeriod]"
    - name: Actual as % of Target
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m111267][Actual][CurrentPeriod]/[m111267][Target][CurrentPeriod]*100"
    dataResource: scorecard-7805/data/measure-111267-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7805/data/measure-111267-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-02T20:29:25.987Z"
      name: ClearPoint Support
    owner:
      name: Rhonda Fields (Assistant City Manager)
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-30T21:34:19.637Z"
---

## Overview

- **Scorecard:** Police Department
- **Owner:** Rhonda Fields (Assistant City Manager)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Below Plan

### Analysis

We significantly lag behind our goals.

### Recommendations

Need to find a way to generate more tax revenue.

## Parents

- [Revenue](/scorecard-7612/measures/measure-110208.md)

## Objectives

- [Financial Wellness](/scorecard-7805/objectives/objective-54685.md)
