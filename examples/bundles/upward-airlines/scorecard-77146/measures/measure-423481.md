---
type: Measure
title: Net Profit
resource: clearpoint://scorecard/77146/measure/423481
tags:
- Financials
cps:
  object: measure
  objectId: 423481
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
    statusSeriesId: 2224658
    series:
    - name: Actual
      seriesId: 2224658
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224659
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gte
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 2224659
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224659
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: AVERAGE
      calculation: (([m423496][Actual][CurrentPeriod]-[m423497][Actual][CurrentPeriod])/[m423497][Actual][CurrentPeriod])*100
    - name: Target
      seriesDataTypeId: 6
      aggregateType: AVERAGE
      calculation: ([m423496][Target][CurrentPeriod]-[m423497][Target][CurrentPeriod])/[m423497][Target][CurrentPeriod]*100
    dataResource: scorecard-77146/data/measure-423481-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77146/data/measure-423481-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-01T16:04:36.400Z"
      name: Clarice Strong (Operations)
    owner:
      name: James Crockett (Sales)
    collaborators:
    - Kara Cleary
    - Tammy Cuzco (Operations)
    - Donald Duff
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2025-05-05T19:57:15.107Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** James Crockett (Sales)
- **Reporting frequency:** Monthly
- **Tags:** Financials

## Description

Great job team! Keep it up for next quarter.

## Details

- **Variance Report:** Net profit is behind due to expenses and revenue lagging behind. When we bring these two metrics up, we will see this increase as well.

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan

### Analysis

Due to slightly lower revenue and slightly higher expenses than projected, our net profit was below where we'd hoped to be.

### Recommendations

We'll need to more tightly control expenses and increase efforts to up revenue.

## Objectives

- [Increase Shareholder Value](/scorecard-77146/objectives/objective-207709.md)

## Initiatives

- [Build a business class program](/scorecard-77146/initiatives/initiative-211892.md)

## Action Items

- [Organize meeting between Procurement and Hospitality Departments](/scorecard-77146/action-items/actionItem-182626.md)
- [Schedule conference call and create agenda for the partners to review airline traffic patterns.](/scorecard-77146/action-items/actionItem-182621.md)

## Children

- [Revenue](/scorecard-77146/measures/measure-423496.md)
- [Expenses](/scorecard-77146/measures/measure-423497.md)
- [Net Profit](/scorecard-77147/measures/measure-423505.md)
- [Net Profit](/scorecard-77148/measures/measure-423518.md)
- [Net Profit](/scorecard-77149/measures/measure-423529.md)

## Measure Initiatives

- [Create New Revenue Streams](/scorecard-77146/initiatives/initiative-579990.md)
- [Employee Bonus Program](/scorecard-77148/initiatives/initiative-163378.md)
