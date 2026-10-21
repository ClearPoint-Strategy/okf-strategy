---
type: Measure
title: Revenue
resource: clearpoint://scorecard/77146/measure/423496
tags:
- Financials
cps:
  object: measure
  objectId: 423496
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
    rules:
    - group: No Finances
      level: No Access
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224700
    series:
    - name: Actual
      seriesId: 2224700
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224701
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gte
        calculation: "*.95"
        referenceSeries: Target
        referenceSeriesId: 2224701
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224701
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
    - name: Variance
      seriesId: 2224702
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: =0
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gte
        calculation: =-50
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: =0
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Variance
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m423496][Actual][CurrentPeriod]-[m423496][Target][CurrentPeriod]"
    - name: "% of Target"
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m423496][Actual][CurrentPeriod]/[m423496][Target][CurrentPeriod]*100"
    dataResource: scorecard-77146/data/measure-423496-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77146/data/measure-423496-status.json
  provenance:
    lastUpdatedBy:
      at: "2025-05-22T17:53:05.940Z"
      name: Clarice Strong (Operations)
    owner:
      name: Clarice Strong (Operations)
    collaborators:
    - James Crockett (Sales)
    - Mobile Demo Ziller
    lastEditedBy:
      name: Ted Jackson
      at: "2025-04-10T13:21:24.063Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Clarice Strong (Operations)
- **Reporting frequency:** Monthly
- **Tags:** Financials

## Description

We are measuring our total revenues for the company.

## Details

- **Variance Report:** This metric should be back on schedule by next month, as our initiatives are going well.
- **Complete?:** 0

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan
- **Value:** 2850 (target 3150)

### Analysis

Revenue is decreasing this month...

### Recommendations

We should find ways to increase our revenue.

## Parents

- [Net Profit](/scorecard-77146/measures/measure-423481.md)

## Objectives

- [Increase Shareholder Value](/scorecard-77146/objectives/objective-207709.md)

## Initiatives

- [Create New Revenue Streams](/scorecard-77146/initiatives/initiative-579990.md)

## Action Items

- [Organize meeting between Procurement and Hospitality Departments](/scorecard-77146/action-items/actionItem-182626.md)

## Children

- [Income](/scorecard-77147/measures/measure-423507.md)
- [Revenue](/scorecard-77148/measures/measure-423520.md)
- [Revenue](/scorecard-77149/measures/measure-423531.md)

## Measure Initiatives

- [Create New Revenue Streams](/scorecard-77146/initiatives/initiative-579990.md)
- [Employee Bonus Program](/scorecard-77148/initiatives/initiative-163378.md)
