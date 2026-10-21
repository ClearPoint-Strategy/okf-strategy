---
type: Measure
title: Crime clearance rates
resource: clearpoint://scorecard/7805/measure/111266
cps:
  object: measure
  objectId: 111266
  scorecardId: 7805
  scorecard: Police Department
  access:
    derivedFrom: clearpoint://scorecard/7805
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753743
    series:
    - name: Actual
      seriesId: 753743
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753744
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753744
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753744
        sortOrder: 3
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-7805/data/measure-111266-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7805/data/measure-111266-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-06-07T16:56:06.483Z"
      name: ClearPoint Support
    owner:
      name: Ted Jackson
    lastEditedBy:
      name: ClearPoint Support
      at: "2021-06-07T16:56:06.360Z"
---

## Overview

- **Scorecard:** Police Department
- **Owner:** Ted Jackson
- **Reporting frequency:** Monthly

## Details

- **Complete?:** 0

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Caution

### Analysis

We lag behind our goals.

### Recommendations

Need to create a task force to look at this measure.

## Objectives

- [Crime Statistics](/scorecard-7805/objectives/objective-54680.md)

## Measure Initiatives

- [Update Police Department Master Plan and Layout Plan](/scorecard-7805/initiatives/initiative-44449.md)
- [Establish Temporary Police Substation during renovation project](/scorecard-7805/initiatives/initiative-44450.md)
