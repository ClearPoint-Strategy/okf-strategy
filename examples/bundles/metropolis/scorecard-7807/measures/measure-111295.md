---
type: Measure
title: Percent of employees who have worked in the fire department for 5+ years
resource: clearpoint://scorecard/7807/measure/111295
cps:
  object: measure
  objectId: 111295
  scorecardId: 7807
  scorecard: Fire Department
  access:
    derivedFrom: clearpoint://scorecard/7807
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753828
    series:
    - name: Actual
      seriesId: 753828
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753829
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753829
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753829
        sortOrder: 3
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-7807/data/measure-111295-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7807/data/measure-111295-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T16:40:27.080Z"
      name: ClearPoint Support
    owner:
      name: John Smith
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T14:54:46.027Z"
---

## Overview

- **Scorecard:** Fire Department
- **Owner:** John Smith
- **Reporting frequency:** Annual

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** Below Plan

### Analysis

We are increasing our employee retention sufficiently each year and should be on track to surpass our target in the next 3 years.

### Recommendations

We should increase compensation, improve our training, and continue to make work culture enjoyable for our fire department employees as much as possible to continue to retain them.

## Parents

- [Percent of employees who have worked at the city for 5+ years](/scorecard-7612/measures/measure-110212.md)

## Objectives

- [Recruit & Retain Top Talent](/scorecard-7807/objectives/objective-54702.md)
