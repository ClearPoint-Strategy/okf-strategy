---
type: Measure
title: Ticket price differential
resource: clearpoint://scorecard/77148/measure/423512
cps:
  object: measure
  objectId: 423512
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224720
    series:
    - name: Actual
      seriesId: 2224720
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224721
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lt
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 2224721
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224721
        sortOrder: 3
      - status: No Information
        statusId: 18581
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
    - name: Industry
      seriesDataTypeId: 4
      aggregateType: SUM
    dataResource: scorecard-77148/data/measure-423512-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Q4-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77148/data/measure-423512-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-26T15:21:45.967Z"
      name: Clarice Strong (Operations)
    owner:
      name: Greg Garcia
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2017-10-10T17:34:09.430Z"
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** Greg Garcia
- **Reporting frequency:** Quarterly

## Description

We want to measure our ticket prices compared to the industry average and our target prices.

## Status

- **Period:** Q4-25 (2025-12-31)
- **Status:** Above Target

### Analysis

Our prices continue to be in our desired range.

### Recommendations

Regularly check our pricing with competitors and the industry as a whole to make sure it is set appropriately.

## Objectives

- [Competitive Ticket Prices](/scorecard-77148/objectives/objective-207735.md)

## Measure Initiatives

- [Prepare for summer sale](/scorecard-77148/initiatives/initiative-211898.md)
