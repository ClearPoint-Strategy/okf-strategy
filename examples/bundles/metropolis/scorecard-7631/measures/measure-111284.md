---
type: Measure
title: Percent of citizens feeling safe at the airport
resource: clearpoint://scorecard/7631/measure/111284
cps:
  object: measure
  objectId: 111284
  scorecardId: 7631
  scorecard: Airport
  access:
    derivedFrom: clearpoint://scorecard/7631
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753795
    series:
    - name: Actual
      seriesId: 753795
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753796
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753796
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753796
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
    dataResource: scorecard-7631/data/measure-111284-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7631/data/measure-111284-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T15:54:37.380Z"
      name: ClearPoint Support
    owner:
      name: Steve Lombard
    lastEditedBy:
      name: ClearPoint Support
      at: "2018-02-09T20:24:50.813Z"
---

## Overview

- **Scorecard:** Airport
- **Owner:** Steve Lombard
- **Reporting frequency:** Annual

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** Below Plan

### Analysis

We seem to be far off from our goal because we have a 100% target. We should do better to get in the 90% range consistently, but we are progressing alright considering our high target.

### Recommendations

We should slightly increase the amount of security in the ticketing area and in the terminals after the security screening areas and review sentiment after that happens.

## Parents

- [Citizen Satisfaction](/scorecard-7612/measures/measure-553397.md)

## Objectives

- [Satisfied Customers](/scorecard-7631/objectives/objective-53628.md)

## Measure Initiatives

- [Identify and solicit additional public aviation events](/scorecard-7631/initiatives/initiative-43613.md)
- [Establish Temporary Air Traffic Control Tower during runway rehab](/scorecard-7631/initiatives/initiative-43616.md)
