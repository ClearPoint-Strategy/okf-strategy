---
type: Measure
title: Airport efficiency rating
resource: clearpoint://scorecard/7612/measure/110210
cps:
  object: measure
  objectId: 110210
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 750364
    series:
    - name: Actual
      seriesId: 750364
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750365
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 750365
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750365
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
    dataResource: scorecard-7612/data/measure-110210-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7612/data/measure-110210-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-10T15:10:43.300Z"
      name: ClearPoint Support
    owner:
      name: Jimmy Olsen (Director of Parks and Recreation)
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T17:31:44.187Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Jimmy Olsen (Director of Parks and Recreation)
- **Reporting frequency:** Monthly

## Description

Our city's airport each month compiles information on its operational efficiency.

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Caution

### Analysis

Our airport was rated right around the average compared to our airports in state.

### Recommendations

Let's make sure we continue to monitor this so we do not relapse on the gains we have made.

## Objectives

- [Transportation & Mobility](/scorecard-7612/objectives/objective-53688.md)
- [Transportation & Mobility](/scorecard-7631/objectives/objective-54271.md)

## Initiatives

- [Update Airport Master Plan](/scorecard-7631/initiatives/initiative-43615.md)

## Children

- [On time landings and takeoffs](/scorecard-7631/measures/measure-108103.md)

## Measure Initiatives

- [Update Airport Master Plan](/scorecard-7631/initiatives/initiative-43615.md)
