---
type: Measure
title: "% of customer airline travel with us"
resource: clearpoint://scorecard/77146/measure/423489
cps:
  object: measure
  objectId: 423489
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224679
    series:
    - name: Actual
      seriesId: 2224679
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224680
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: " *.9"
        referenceSeries: Target
        referenceSeriesId: 2224680
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224680
        sortOrder: 3
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-77146/data/measure-423489-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77146/data/measure-423489-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-17T20:34:01.683Z"
      name: Clarice Strong (Operations)
    owner:
      name: James Crockett (Sales)
    collaborators:
    - ClearPoint Support2
    - Clarice Strong (Operations)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2025-05-05T19:57:44.380Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** James Crockett (Sales)
- **Reporting frequency:** Annual

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan
- **Value:** 13 (target 20)

### Analysis

We need to do a better job differentiating from our competitors to help our numbers here.

### Recommendations

Increase the number of airports our airline services.

## Objectives

- [No Elites](/scorecard-77146/objectives/objective-207717.md)

## Children

- [# of new planes purchased](/scorecard-77147/measures/measure-542405.md)
- [Flight Cancellations](/scorecard-77148/measures/measure-542407.md)
- [# of new planes purchased](/scorecard-77149/measures/measure-542536.md)

## Measure Initiatives

- [Construct new airplane seats (Data & Charts)](/scorecard-77146/initiatives/initiative-308980.md)
