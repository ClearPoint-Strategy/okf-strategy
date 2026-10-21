---
type: Measure
title: Fires per 100,000 structures
resource: clearpoint://scorecard/7807/measure/111298
cps:
  object: measure
  objectId: 111298
  scorecardId: 7807
  scorecard: Fire Department
  access:
    derivedFrom: clearpoint://scorecard/7807
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753834
    series:
    - name: Actual
      seriesId: 753834
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753835
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: lt
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 753835
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753835
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
    dataResource: scorecard-7807/data/measure-111298-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7807/data/measure-111298-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T16:53:03.470Z"
      name: ClearPoint Support
    owner:
      name: Ted Jackson
    lastEditedBy:
      name: ClearPoint Support
      at: "2020-02-26T20:18:51.513Z"
---

## Overview

- **Scorecard:** Fire Department
- **Owner:** Ted Jackson
- **Reporting frequency:** Annual

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** Below Plan

### Analysis

Each year fires have been increasing, so this is a growing concern in our city.

### Recommendations

We should have a special public service campaign about reducing fires and increase our work in K-12 schools.

## Objectives

- [Fire & Operational Statistics](/scorecard-7807/objectives/objective-54699.md)

## Measure Initiatives

- [Update Fire Department Master Plan and Layout Plan](/scorecard-7807/initiatives/initiative-44459.md)
- [Determine new fire headquarters location](/scorecard-7807/initiatives/initiative-44460.md)
