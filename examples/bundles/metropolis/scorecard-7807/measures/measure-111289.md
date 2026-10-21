---
type: Measure
title: Percent of citizens who feel "extremely safe" from fire
resource: clearpoint://scorecard/7807/measure/111289
cps:
  object: measure
  objectId: 111289
  scorecardId: 7807
  scorecard: Fire Department
  access:
    derivedFrom: clearpoint://scorecard/7807
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753812
    series:
    - name: Actual
      seriesId: 753812
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753813
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753813
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753813
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
    dataResource: scorecard-7807/data/measure-111289-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7807/data/measure-111289-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-21T21:18:38.283Z"
      name: ClearPoint Support
    owner:
      name: Joseph Lucco
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-30T21:35:03.170Z"
---

## Overview

- **Scorecard:** Fire Department
- **Owner:** Joseph Lucco
- **Reporting frequency:** Annual

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** On Target

### Analysis

This has been inconsistent over the past several years. More needs to be done to make citizens feel safe on a consistent basis.

### Recommendations

The best way to make citizens feel safe is to do all that we can to reduce fires in the community through fire prevention education and lobbying for harsher arson sentencing.

## Parents

- [Citizen Satisfaction](/scorecard-7612/measures/measure-553397.md)

## Objectives

- [Community's wellness](/scorecard-7807/objectives/objective-54700.md)

## Measure Initiatives

- [Identify and hold additional fire safety events](/scorecard-7807/initiatives/initiative-44458.md)
- [Determine new fire headquarters location](/scorecard-7807/initiatives/initiative-44460.md)
