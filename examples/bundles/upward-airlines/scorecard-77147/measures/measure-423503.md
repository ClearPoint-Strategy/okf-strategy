---
type: Measure
title: "% of employees who see themselves at Upward for 7+ years"
resource: clearpoint://scorecard/77147/measure/423503
cps:
  object: measure
  objectId: 423503
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224654
    series:
    - name: Actual
      seriesId: 2224654
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224655
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 2224655
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224655
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
    dataResource: scorecard-77147/data/measure-423503-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Q4-25
      periodDate: "2025-12-31"
      statusId: 18579
      status: Caution
    statusResource: scorecard-77147/data/measure-423503-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-25T20:24:00.460Z"
      name: Clarice Strong (Operations)
    owner:
      name: Ashley Caper
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2017-10-17T22:34:20.243Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Ashley Caper
- **Reporting frequency:** Quarterly

## Description

We want to create an environment where employees are excited to come to work and see themselves at Upward Air for a long time. 

 

 If staff stay longer, then we will have less turnover and a more skilled, experienced workforce.

## Status

- **Period:** Q4-25 (2025-12-31)
- **Status:** Caution

### Analysis

We have been stabilizing 67 and 70% within 2020, so more needs to be done to reach our target.

### Recommendations

We need to focus mostly on finding a way to compensate our employees more since our company culture is strong.

## Objectives

- [Employee Satisfaction](/scorecard-77147/objectives/objective-207728.md)

## Measure Initiatives

- [Create New Employee Satisfaction Survey](/scorecard-77147/initiatives/initiative-163372.md)
