---
type: Measure
title: Net Profit
resource: clearpoint://scorecard/77148/measure/423518
cps:
  object: measure
  objectId: 423518
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224735
    series:
    - name: Actual
      seriesId: 2224735
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224736
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224736
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224736
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
      calculation: "8.12"
      derivation: formula
    - name: YTD Avg
      seriesDataTypeId: 6
      calculation: "[scorecard-77148/measures/measure-423518][Actual][CalendarYTDAverage]"
      derivation: formula
    dataResource: scorecard-77148/data/measure-423518-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77148/data/measure-423518-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-01T19:42:17.630Z"
      name: Clarice Strong (Operations)
    owner:
      name: Trudy Joplin (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2017-11-28T15:25:46.857Z"
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** Trudy Joplin (Sales)
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan
- **Value:** 6.3 (target 8.12)

### Analysis

We have put together several very strong months after a difficult start to 2015.

### Recommendations

Other regions are doing better than us. We need to study their best practices.

## Parents

- [Net Profit](/scorecard-77146/measures/measure-423481.md)

## Objectives

- [Profitability](/scorecard-77148/objectives/objective-207733.md)

## Measure Initiatives

- [Prepare for summer sale](/scorecard-77148/initiatives/initiative-211898.md)
