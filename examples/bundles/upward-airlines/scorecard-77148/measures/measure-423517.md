---
type: Measure
title: "% increase in employee wages"
resource: clearpoint://scorecard/77148/measure/423517
cps:
  object: measure
  objectId: 423517
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224732
    series:
    - name: Actual
      seriesId: 2224732
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224733
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.2"
        referenceSeries: Target
        referenceSeriesId: 2224733
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224733
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
    - name: Actual Previous Period
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m423517][Actual][PreviousPeriod]"
    dataResource: scorecard-77148/data/measure-423517-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: "2025"
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77148/data/measure-423517-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-25T22:46:33.117Z"
      name: Clarice Strong (Operations)
    owner:
      name: Steve Smith
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2017-10-06T19:57:56.707Z"
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** Steve Smith
- **Reporting frequency:** Annual

## Description

We want to ensure we are providing our employees with competitive wages and rewarding them appropriately for their hard work.

## Status

- **Period:** 2025 (2025-12-31)
- **Status:** Above Target

## Parents

- [Average Wage](/scorecard-77146/measures/measure-423493.md)
- [% employee ownership](/scorecard-77146/measures/measure-423495.md)

## Objectives

- [Employee Compensation](/scorecard-77148/objectives/objective-207739.md)

## Measure Initiatives

- [Employee Bonus Program](/scorecard-77148/initiatives/initiative-163378.md)
