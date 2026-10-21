---
type: Measure
title: Percent of employees that are happy
resource: clearpoint://scorecard/77147/measure/423502
cps:
  object: measure
  objectId: 423502
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224651
    series:
    - name: Actual
      seriesId: 2224651
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224652
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224652
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224652
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
    - name: Unsatisfied Exmployees
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: 100-[m423502][Actual][CurrentPeriod]
    dataResource: scorecard-77147/data/measure-423502-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77147/data/measure-423502-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-25T20:17:29.380Z"
      name: Clarice Strong (Operations)
    owner:
      name: Greg Garcia
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-01-25T20:17:29.270Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Greg Garcia
- **Reporting frequency:** Quarterly

## Description

We have a employee survery every quarter.

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 84 (target 80)

### Analysis

We have been doing well keeping our employees happy since Q3-2019.

### Recommendations

Continue to keep company culture strong.

## Objectives

- [Employee Satisfaction](/scorecard-77147/objectives/objective-207728.md)

## Measure Initiatives

- [Create New Employee Satisfaction Survey](/scorecard-77147/initiatives/initiative-163372.md)
