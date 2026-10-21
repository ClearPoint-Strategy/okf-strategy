---
type: Measure
title: Percent of eligible voters who voted in the last city election
resource: clearpoint://scorecard/7612/measure/108454
cps:
  object: measure
  objectId: 108454
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 744708
    series:
    - name: Actual
      seriesId: 744708
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 744709
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 744709
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 744709
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
    - name: Percent that Did Not Vote
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: 100-[m108454][Actual][CurrentPeriod]
    dataResource: scorecard-7612/data/measure-108454-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7612/data/measure-108454-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T15:13:26.783Z"
      name: ClearPoint Support
    owner:
      name: John Smith
    lastEditedBy:
      name: ClearPoint Support
      at: "2018-02-09T20:24:43.847Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** John Smith
- **Reporting frequency:** Annual

## Description

In order to have a vibrant, inclusive community, we need our citizenry to feel their city government is fairly elected and represents the will of the majority. One way to ensure that is to have as many eligible voters as possible participating in elections. Moreover, we want our citizens to be excited about elections and voting in them.

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** Caution

### Analysis

We had a great turnout in the last election which was fantastic to see.

### Recommendations

For the next election, we should start a voting campaign earlier and do more in-person events to encourage voter turnout.

## Objectives

- [Active & Engaged Community](/scorecard-7612/objectives/objective-53692.md)

## Measure Initiatives

- [City Restaurant Audits](/scorecard-7612/initiatives/initiative-43641.md)
- [Identify and solicit additional public aviation events](/scorecard-7631/initiatives/initiative-43613.md)
