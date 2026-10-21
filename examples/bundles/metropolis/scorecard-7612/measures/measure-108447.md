---
type: Measure
title: EMS Response Time
resource: clearpoint://scorecard/7612/measure/108447
cps:
  object: measure
  objectId: 108447
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 750872
    series:
    - name: Actual
      seriesId: 750872
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750866
        sortOrder: 1
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750866
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
    dataResource: scorecard-7612/data/measure-108447-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3956
      status: Below Plan
    statusResource: scorecard-7612/data/measure-108447-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-08-19T16:06:01.623Z"
      name: ClearPoint Support
    owner:
      name: Maggie Sawyer
    lastEditedBy:
      name: ClearPoint Support
      at: "2022-11-17T17:37:00.933Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Maggie Sawyer
- **Reporting frequency:** Monthly

## Description

Tracking our emergency service response time is critical to understanding how we are meeting our community's emergency needs.

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Below Plan

### Analysis

EMS time has been way too slow the previous few months.

### Recommendations

We still need to create some sort of benchmarking against other regions.

## Objectives

- [Safe & Prepared Community](/scorecard-7612/objectives/objective-274608.md)

## Children

- [Percent of fire department on scene within 12 minutes](/scorecard-7807/measures/measure-111290.md)
