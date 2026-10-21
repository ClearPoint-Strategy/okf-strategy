---
type: Measure
title: Revenue
resource: clearpoint://scorecard/7631/measure/110219
cps:
  object: measure
  objectId: 110219
  scorecardId: 7631
  scorecard: Airport
  access:
    derivedFrom: clearpoint://scorecard/7631
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 750414
    series:
    - name: Actual
      seriesId: 750414
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750415
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.99"
        referenceSeries: Target
        referenceSeriesId: 750415
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750415
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
      calculation: "[m110219][Actual][CurrentPeriod]-[m110219][Target][CurrentPeriod]"
    - name: Actual as % of Target
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m110219][Actual][CurrentPeriod]/[m110219][Target][CurrentPeriod]*100"
    dataResource: scorecard-7631/data/measure-110219-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7631/data/measure-110219-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-02T20:09:58.987Z"
      name: ClearPoint Support
    owner:
      name: Jimmy Olsen (Director of Parks and Recreation)
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T14:31:23.493Z"
---

## Overview

- **Scorecard:** Airport
- **Owner:** Jimmy Olsen (Director of Parks and Recreation)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** On Target

### Analysis

Tickets are selling at a rapid pace this month, boosting revenue for the airport.

### Recommendations

We need to continue on our current course.

## Parents

- [Revenue](/scorecard-7612/measures/measure-110208.md)

## Objectives

- [Budget Health](/scorecard-7631/objectives/objective-54270.md)

## Measure Initiatives

- [Study revenue growth](/scorecard-7631/initiatives/initiative-215318.md)
