---
type: Measure
title: Average response time of priority one calls
resource: clearpoint://scorecard/7807/measure/111288
cps:
  object: measure
  objectId: 111288
  scorecardId: 7807
  scorecard: Fire Department
  access:
    derivedFrom: clearpoint://scorecard/7807
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753810
    series:
    - name: Actual
      seriesId: 753810
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753811
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: lt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753811
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753811
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
    dataResource: scorecard-7807/data/measure-111288-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7807/data/measure-111288-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-21T01:38:52.463Z"
      name: ClearPoint Support
    owner:
      name: Ron Troupe (Director of Public Safety)
    collaborators:
    - Rhonda Fields (Assistant City Manager)
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T14:53:14.513Z"
---

## Overview

- **Scorecard:** Fire Department
- **Owner:** Ron Troupe (Director of Public Safety)
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** On Target

### Analysis

We are continuing to improve in this area, which is important.

### Recommendations

Continue to make sure there are enough emergency operators available for the city.

## Objectives

- [Fire & Operational Statistics](/scorecard-7807/objectives/objective-54699.md)

## Measure Initiatives

- [Update Fire Department Master Plan and Layout Plan](/scorecard-7807/initiatives/initiative-44459.md)
- [Determine new fire headquarters location](/scorecard-7807/initiatives/initiative-44460.md)
