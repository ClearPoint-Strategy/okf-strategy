---
type: Measure
title: "Benchmark: Percent of residents who rate traffic congestion or transportation as a \"top three\" community challenge"
resource: clearpoint://scorecard/7612/measure/108438
cps:
  object: measure
  objectId: 108438
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Metropolis
    statusSeriesId: 2288092
    series:
    - name: Metropolis
      seriesId: 2288092
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: " =20"
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: lte
        calculation: " =30"
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: =30
        sortOrder: 3
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Total citizens polled
      seriesDataTypeId: 5
      aggregateType: SUM
    - name: Total citizens rating top three
      seriesDataTypeId: 5
      aggregateType: SUM
    - name: Metropolis
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Gotham
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Smallville
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Sunnydale
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-7612/data/measure-108438-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7612/data/measure-108438-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-15T15:55:55.163Z"
      name: ClearPoint Support
    owner:
      name: Joseph Lucco
    lastEditedBy:
      name: ClearPoint Support
      at: "2019-06-15T12:12:50.090Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Joseph Lucco
- **Reporting frequency:** Annual

## Description

Traffic congestion negatively affects our residents, our businesses, and our community. We are committed to ensuring residents are content with traffic flow and that it becomes a positive attribute of our city.

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** On Target

### Analysis

This measure has historically been a challenge. However, this year we saw a decrease in transportation across the board.

### Recommendations

Lets create a transportation committee to study what transportation demand will be like for the upcoming year. This way, we can plan ahead.

## Objectives

- [Transportation & Mobility](/scorecard-7612/objectives/objective-53688.md)

## Measure Initiatives

- [Update Airport Master Plan](/scorecard-7631/initiatives/initiative-43615.md)
