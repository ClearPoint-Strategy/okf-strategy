---
type: Measure
title: "% of highly satisified employees"
resource: clearpoint://scorecard/77149/measure/423527
cps:
  object: measure
  objectId: 423527
  scorecardId: 77149
  scorecard: 🏜️ Western Division
  access:
    derivedFrom: clearpoint://scorecard/77149
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224761
    series:
    - name: Actual
      seriesId: 2224761
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224762
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224762
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224762
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
    - name: Unsatisfied Employees
      seriesDataTypeId: 6
      calculation: 100-[scorecard-77149/measures/measure-423527][Actual][CurrentPeriod]
      derivation: formula
    dataResource: scorecard-77149/data/measure-423527-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77149/data/measure-423527-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-25T22:03:01.833Z"
      name: Clarice Strong (Operations)
    owner:
      name: Joseph Lucco
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2024-06-05T21:49:22.573Z"
---

## Overview

- **Scorecard:** 🏜️ Western Division
- **Owner:** Joseph Lucco
- **Reporting frequency:** Quarterly

## Description

We have an employee survey every quarter. We are improving each year.

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan
- **Value:** 65 (target 75)

### Analysis

We are growing but will still be far off from our target for quite some time at this rate.

### Recommendations

We should focus on raising employee wages since we have focused so much on improving company culture.

## Parents

- [% employee ownership](/scorecard-77146/measures/measure-423495.md)

## Objectives

- [Employee Satisfaction](/scorecard-77149/objectives/objective-207747.md)

## Measure Initiatives

- [Redesign Employee Satisfaction Survey](/scorecard-77149/initiatives/initiative-163379.md)
