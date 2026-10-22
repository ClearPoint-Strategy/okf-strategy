---
type: Measure
title: "% of employees who see themselves at Upward for 10+ years"
resource: clearpoint://scorecard/77149/measure/423528
cps:
  object: measure
  objectId: 423528
  scorecardId: 77149
  scorecard: 🏜️ Western Division
  access:
    derivedFrom: clearpoint://scorecard/77149
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224764
    series:
    - name: Actual
      seriesId: 2224764
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224765
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 2224765
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224765
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
    - name: Target
      seriesDataTypeId: 6
    dataResource: scorecard-77149/data/measure-423528-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77149/data/measure-423528-status.json
  provenance:
    lastUpdatedBy:
      at: "2025-08-12T14:14:32.270Z"
      name: Ted Jackson
    owner:
      name: Izzy Moreno (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2024-06-05T21:49:23.020Z"
---

## Overview

- **Scorecard:** 🏜️ Western Division
- **Owner:** Izzy Moreno (Sales)
- **Reporting frequency:** Quarterly

## Description

We want to create an environment where employees are excited to come to work and see themselves at Upward Air for a long time. 

 

 If staff stay longer, then we will have less turnover and a more skilled, experienced workforce.

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 82 (target 80)

### Analysis

We have been stagnant in this area between the high 70s and low 80s

### Recommendations

We need to raise the number of highly satisfied employees if we want this to rise.

## Objectives

- [Leadership Training Program](/scorecard-77149/objectives/objective-207751.md)
- [Employee Compensation](/scorecard-77149/objectives/objective-207748.md)
