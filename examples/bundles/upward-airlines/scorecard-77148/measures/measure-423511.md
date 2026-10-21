---
type: Measure
title: "% of on time departures"
resource: clearpoint://scorecard/77148/measure/423511
cps:
  object: measure
  objectId: 423511
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224718
    series:
    - name: Actual
      seriesId: 2224718
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224719
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 2224719
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224719
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
    dataResource: scorecard-77148/data/measure-423511-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77148/data/measure-423511-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-01T19:34:10.287Z"
      name: Clarice Strong (Operations)
    owner:
      name: James Crockett (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2019-09-30T18:08:11.727Z"
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** James Crockett (Sales)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan
- **Value:** 78 (target 85)

### Analysis

The Central Division has not been as bad as the Western Division but is still lacking the on time percentage that we need to maintain our high customer satisfaction rate.

### Recommendations

Altough this is mostly out of our control, we can push our employees to be as fast as possible when taking off.

## Objectives

- [Reliable Departures](/scorecard-77148/objectives/objective-207734.md)

## Measure Initiatives

- [Create New Training Program for Employees](/scorecard-77148/initiatives/initiative-163377.md)
