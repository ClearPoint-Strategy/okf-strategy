---
type: Measure
title: Percent of citizens attending fire safety trainings
resource: clearpoint://scorecard/7807/measure/111297
cps:
  object: measure
  objectId: 111297
  scorecardId: 7807
  scorecard: Fire Department
  access:
    derivedFrom: clearpoint://scorecard/7807
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753832
    series:
    - name: Actual
      seriesId: 753832
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753833
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753833
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753833
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
    dataResource: scorecard-7807/data/measure-111297-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7807/data/measure-111297-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-21T20:54:54.630Z"
      name: ClearPoint Support
    owner:
      name: Maggie Sawyer
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T17:38:48.750Z"
---

## Overview

- **Scorecard:** Fire Department
- **Owner:** Maggie Sawyer
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** On Target

## Parents

- [Percent of recognized neighborhood associations that meet at least quarterly](/scorecard-7612/measures/measure-108451.md)

## Objectives

- [Community's wellness](/scorecard-7807/objectives/objective-54700.md)

## Measure Initiatives

- [Identify and hold additional fire safety events](/scorecard-7807/initiatives/initiative-44458.md)
- [Determine new fire headquarters location](/scorecard-7807/initiatives/initiative-44460.md)
