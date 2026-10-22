---
type: Measure
title: Net Profit
resource: clearpoint://scorecard/77147/measure/423505
cps:
  object: measure
  objectId: 423505
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224690
    series:
    - name: Actual
      seriesId: 2224690
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224691
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224691
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224691
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
    dataResource: scorecard-77147/data/measure-423505-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77147/data/measure-423505-status.json
  provenance:
    lastUpdatedBy:
      at: "2022-09-14T18:31:54.307Z"
      name: Clarice Strong (Operations)
    owner:
      name: James Crockett (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2022-02-25T22:14:18.850Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** James Crockett (Sales)
- **Reporting frequency:** Quarterly

## Details

- **Complete?:** 0

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 17 (target 8.11)

### Analysis

We have put together several very strong months after a difficult start to 2015.

### Recommendations

Things are looking good.

## Parents

- [Net Profit](/scorecard-77146/measures/measure-423481.md)

## Objectives

- [Profitability](/scorecard-77147/objectives/objective-207724.md)

## Initiatives

- [Expand to serve two new locations](/scorecard-77147/initiatives/initiative-163375.md)

## Measure Initiatives

- [Expand to serve two new locations](/scorecard-77147/initiatives/initiative-163375.md)
