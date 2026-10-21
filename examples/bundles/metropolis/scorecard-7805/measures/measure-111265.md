---
type: Measure
title: Percent of citizens who feel "extremely safe" from crime
resource: clearpoint://scorecard/7805/measure/111265
cps:
  object: measure
  objectId: 111265
  scorecardId: 7805
  scorecard: Police Department
  access:
    derivedFrom: clearpoint://scorecard/7805
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753741
    series:
    - name: Actual
      seriesId: 753741
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753742
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753742
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753742
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
    dataResource: scorecard-7805/data/measure-111265-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7805/data/measure-111265-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T21:01:05.557Z"
      name: ClearPoint Support
    owner:
      name: John Smith
    lastEditedBy:
      name: ClearPoint Support
      at: "2018-01-13T15:20:45.307Z"
---

## Overview

- **Scorecard:** Police Department
- **Owner:** John Smith
- **Reporting frequency:** Annual

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** On Target

### Analysis

We are doing well but this metric is inconsistent.

### Recommendations

We need to reduce crime and have good publicity to make citizens feel safer.

## Parents

- [Citizen Satisfaction](/scorecard-7612/measures/measure-553397.md)

## Objectives

- [Safe & Prepared Community](/scorecard-7805/objectives/objective-54682.md)

## Measure Initiatives

- [Identify and hold additional public safety events](/scorecard-7805/initiatives/initiative-44448.md)
- [Update Police Department Master Plan and Layout Plan](/scorecard-7805/initiatives/initiative-44449.md)
