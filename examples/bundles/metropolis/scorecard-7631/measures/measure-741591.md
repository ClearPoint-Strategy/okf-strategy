---
type: Measure
title: Overhead Costs
resource: clearpoint://scorecard/7631/measure/741591
tags:
- Overhead Costs - Children Template
cps:
  object: measure
  objectId: 741591
  scorecardId: 7631
  scorecard: Airport
  access:
    derivedFrom: clearpoint://scorecard/7631
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 3500554
    series:
    - name: Actual
      seriesId: 3500554
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3500555
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: lte
        calculation: "*1.2"
        referenceSeries: Target
        referenceSeriesId: 3500555
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 3500555
        sortOrder: 4
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 5
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 4
      aggregateType: SUM
    dataResource: scorecard-7631/data/measure-741591-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7631/data/measure-741591-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-19T18:35:47.070Z"
      name: ClearPoint Support
    owner:
      name: Rhonda Fields (Assistant City Manager)
    lastEditedBy:
      name: ClearPoint Support
      at: "2019-05-10T13:19:12.040Z"
---

## Overview

- **Scorecard:** Airport
- **Owner:** Rhonda Fields (Assistant City Manager)
- **Reporting frequency:** Monthly
- **Tags:** Overhead Costs - Children Template

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Caution

### Analysis

We've been just over budget several months running now.

### Recommendations

Let's meet as a team to look over budgets.

## Parents

- [City-wide Overhead Costs (Aggregate/MM)](/scorecard-7612/measures/measure-741332.md)
