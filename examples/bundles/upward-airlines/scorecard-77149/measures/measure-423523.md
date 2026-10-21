---
type: Measure
title: Rate of departures that leave on time
resource: clearpoint://scorecard/77149/measure/423523
cps:
  object: measure
  objectId: 423523
  scorecardId: 77149
  scorecard: 🏜️ Western Division
  access:
    derivedFrom: clearpoint://scorecard/77149
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224752
    series:
    - name: Actual
      seriesId: 2224752
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224753
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.1"
        referenceSeries: Target
        referenceSeriesId: 2224753
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: "*1.1"
        referenceSeries: Target
        referenceSeriesId: 2224753
        sortOrder: 3
      - status: No Information
        statusId: 18581
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
    dataResource: scorecard-77149/data/measure-423523-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18579
      status: Caution
    statusResource: scorecard-77149/data/measure-423523-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-01T20:16:01.367Z"
      name: Clarice Strong (Operations)
    owner:
      name: James Crockett (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2024-06-05T21:49:20.707Z"
---

## Overview

- **Scorecard:** 🏜️ Western Division
- **Owner:** James Crockett (Sales)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Caution

### Analysis

On time departures are very important to our customers, and we must increase this statistic. Over the last few months, our rate has dropped significantly due to issues with employees now showing up on time.

### Recommendations

Although this is mostly out of our control, we can push our employees to be as fast as possible when taking off.

## Parents

- [Total amount of time at gate](/scorecard-77146/measures/measure-423485.md)

## Objectives

- [Reliable Departures](/scorecard-77149/objectives/objective-207743.md)

## Initiatives

- [Build Employee Upskilling](/scorecard-77149/initiatives/initiative-163380.md)

## Measure Initiatives

- [Build Employee Upskilling](/scorecard-77149/initiatives/initiative-163380.md)
