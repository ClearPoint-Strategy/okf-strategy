---
type: Measure
title: Percent of fire department on scene within 12 minutes
resource: clearpoint://scorecard/7807/measure/111290
cps:
  object: measure
  objectId: 111290
  scorecardId: 7807
  scorecard: Fire Department
  access:
    derivedFrom: clearpoint://scorecard/7807
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753814
    series:
    - name: Actual
      seriesId: 753814
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753815
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753815
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753815
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
    dataResource: scorecard-7807/data/measure-111290-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7807/data/measure-111290-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-02T20:40:26.137Z"
      name: ClearPoint Support
    owner:
      name: Joseph Lucco
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T17:38:48.590Z"
---

## Overview

- **Scorecard:** Fire Department
- **Owner:** Joseph Lucco
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** On Target

### Analysis

The percent of fire department on scene within 12 minutes has decreased dramatically this quarter. We have not dropped to the red zone but at this rate we are headed there next quarter.

### Recommendations

Quickly turn this measure around to the percent seen in the two past quarters.

## Parents

- [EMS Response Time](/scorecard-7612/measures/measure-108447.md)

## Objectives

- [Fire & Operational Statistics](/scorecard-7807/objectives/objective-54699.md)

## Measure Initiatives

- [Update Fire Department Master Plan and Layout Plan](/scorecard-7807/initiatives/initiative-44459.md)
- [Determine new fire headquarters location](/scorecard-7807/initiatives/initiative-44460.md)
