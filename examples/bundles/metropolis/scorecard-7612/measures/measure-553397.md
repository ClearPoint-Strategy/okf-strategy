---
type: Measure
title: Citizen Satisfaction
resource: clearpoint://scorecard/7612/measure/553397
cps:
  object: measure
  objectId: 553397
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2701496
    series:
    - name: Actual
      seriesId: 2701496
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2701497
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2701497
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2701497
        sortOrder: 4
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 5
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: AVERAGE
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-7612/data/measure-553397-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7612/data/measure-553397-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T03:05:00.083Z"
      name: ClearPoint Support
    owner:
      name: Richard Grayson
    lastEditedBy:
      name: ClearPoint Support
      at: "2018-02-09T20:24:47.870Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Richard Grayson
- **Reporting frequency:** Annual

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** Caution

### Analysis

Citizen satisfaction has remained around the same level.

### Recommendations

This will take a huge effort to push satisfaction past where it has stayed around. We should start by focusing on making people feel safer at the airport.

## Children

- [Percent of citizens feeling safe at the airport](/scorecard-7631/measures/measure-111284.md)
- [Percent of citizens who feel "extremely safe" from crime](/scorecard-7805/measures/measure-111265.md)
- [Percent of citizens who feel "extremely safe" from fire](/scorecard-7807/measures/measure-111289.md)
