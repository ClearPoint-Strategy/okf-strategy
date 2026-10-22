---
type: Measure
title: Expenses
resource: clearpoint://scorecard/77148/measure/423521
cps:
  object: measure
  objectId: 423521
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224744
    series:
    - name: Actual
      seriesId: 2224744
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224745
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224745
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224745
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
    - name: Target
      seriesDataTypeId: 4
    - name: Variance
      seriesDataTypeId: 4
      calculation: "[scorecard-77148/measures/measure-423521][Actual][CurrentPeriod]-[scorecard-77148/measures/measure-423521][Target][CurrentPeriod]"
      derivation: formula
    - name: Actual as % of Target
      seriesDataTypeId: 6
      calculation: "[scorecard-77148/measures/measure-423521][Actual][CurrentPeriod]/[scorecard-77148/measures/measure-423521][Target][CurrentPeriod]"
      derivation: formula
    dataResource: scorecard-77148/data/measure-423521-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77148/data/measure-423521-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-01T19:48:06.223Z"
      name: Clarice Strong (Operations)
    owner:
      name: Mark Cutler
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2017-10-06T20:01:58.767Z"
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** Mark Cutler
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 3331 (target 3243.99)

### Analysis

By the cost of fuel dropping dramatically, we have been able to cut costs.

### Recommendations

We must continue on our current course of managing our expenses closely.

## Parents

- [Expenses](/scorecard-77146/measures/measure-423497.md)

## Objectives

- [Profitability](/scorecard-77148/objectives/objective-207733.md)

## Measure Initiatives

- [Prepare for summer sale](/scorecard-77148/initiatives/initiative-211898.md)
