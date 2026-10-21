---
type: Measure
title: Crime rate per 1,000 residents
resource: clearpoint://scorecard/7612/measure/108445
cps:
  object: measure
  objectId: 108445
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 744684
    series:
    - name: Actual
      seriesId: 744684
      bands:
      - status: On Target
        statusId: 3950
        compare: lt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 744685
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 744685
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 744685
        sortOrder: 3
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 5
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 5
      aggregateType: SUM
    dataResource: scorecard-7612/data/measure-108445-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7612/data/measure-108445-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T01:41:00.597Z"
      name: ClearPoint Support
    owner:
      name: Ted Jackson
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T14:26:53.257Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Ted Jackson
- **Reporting frequency:** Annual

## Description

Crime rate per 1,000 residents accounts for the cumulative number of murders, rapes, robberies, assaults, burglaries, thefts, and incidents of arson that occur every year for every 1,000 citizens of Metropolis.

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** Caution

### Analysis

This metric is getting worse and is concerning because it makes our city less desirable.

### Recommendations

We should examine what specific crimes are increasing the most so we can identify the best course of action to reduce crime overall by being specific with our efforts.

## Objectives

- [Safe & Prepared Community](/scorecard-7612/objectives/objective-274608.md)

## Children

- [Crimes per 1000 citizens](/scorecard-7805/measures/measure-111285.md)
