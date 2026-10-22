---
type: Measure
title: Income
resource: clearpoint://scorecard/77147/measure/423507
cps:
  object: measure
  objectId: 423507
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224708
    series:
    - name: Actual
      seriesId: 2224708
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224709
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224709
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224709
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224709
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
    - name: Target
      seriesDataTypeId: 4
    - name: Variance
      seriesDataTypeId: 4
      calculation: "[scorecard-77147/measures/measure-423507][Actual][CurrentPeriod]-[scorecard-77147/measures/measure-423507][Target][CurrentPeriod]"
      derivation: formula
    - name: Actual as % of Target
      seriesDataTypeId: 6
      calculation: "[scorecard-77147/measures/measure-423507][Actual][CurrentPeriod]/[scorecard-77147/measures/measure-423507][Target][CurrentPeriod]"
      derivation: formula
    dataResource: scorecard-77147/data/measure-423507-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18579
      status: Caution
    statusResource: scorecard-77147/data/measure-423507-status.json
  provenance:
    lastUpdatedBy:
      at: "2024-05-02T11:56:34.967Z"
      name: Clarice Strong (Operations)
    owner:
      name: Greg Garcia
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2022-02-25T22:11:48.667Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Greg Garcia
- **Reporting frequency:** Quarterly

## Details

- **Complete?:** 0

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Caution
- **Value:** 3400 (target 3507.01)

### Analysis

Tickets are selling at a rapid pace this month, boosting revenue for the Eastern region, which is great.

### Recommendations

Our targets are good stretch goals, and there is no need to update our targets either up or down and we should continue on our current course.

## Parents

- [Revenue](/scorecard-77146/measures/measure-423496.md)

## Objectives

- [Profitability](/scorecard-77147/objectives/objective-207724.md)

## Measure Initiatives

- [Expand to serve two new locations](/scorecard-77147/initiatives/initiative-163375.md)
