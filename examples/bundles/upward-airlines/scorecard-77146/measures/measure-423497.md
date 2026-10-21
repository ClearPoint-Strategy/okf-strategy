---
type: Measure
title: Expenses
resource: clearpoint://scorecard/77146/measure/423497
tags:
- Financials
cps:
  object: measure
  objectId: 423497
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
    statusSeriesId: 2224704
    series:
    - name: Actual
      seriesId: 2224704
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224705
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.05"
        referenceSeries: Target
        referenceSeriesId: 2224705
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224705
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
    - name: Variance
      seriesId: 2224706
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: =0
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: =100
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: =100
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
      calculation: "[m423496][Target][CurrentPeriod]*.95"
    - name: Variance
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m423497][Actual][CurrentPeriod]-[m423497][Target][CurrentPeriod]"
    - name: "% of Target"
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m423497][Actual][CurrentPeriod]/[m423497][Target][CurrentPeriod]*100"
    dataResource: scorecard-77146/data/measure-423497-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77146/data/measure-423497-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-23T18:58:15.350Z"
      name: Clarice Strong (Operations)
    owner:
      name: James Crockett (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2025-12-18T01:53:35.560Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** James Crockett (Sales)
- **Reporting frequency:** Monthly
- **Tags:** Financials

## Description

Tracks the total amount of money spent within a defined period.

## Details

- **Variance Report:** We're looking more into why this metric was not met. In the meantime, we're encouraging employees to limit overhead spending.
- **Custom HTML Tables:** Top left Top middle Top right Bottom left Bottom middle Bottom right

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 2855 (target 2992.5)

### Analysis

Over the past 8 months we have done an exceptional job of meeting our goal of keeping our expenses below target. I added the "Actual as % of Target" series to understand this better. We are doing well overall!

### Recommendations

We must continue on our current course of managing our expenses closely. This policy is currently paying off in our bottom line and will continue to pay off, especially if we occasionally miss our revenue targets.

## Parents

- [Net Profit](/scorecard-77146/measures/measure-423481.md)

## Objectives

- [Increase Shareholder Value](/scorecard-77146/objectives/objective-207709.md)

## Initiatives

- [Construct new airplane seats (Data & Charts)](/scorecard-77146/initiatives/initiative-308980.md)
- [Purchase 5 new planes](/scorecard-77146/initiatives/initiative-211889.md)

## Action Items

- [Expedite recruitment process for new engineers](/scorecard-77146/action-items/actionItem-182623.md)
- [Set up meeting to discuss employee benefits](/scorecard-77146/action-items/actionItem-182622.md)

## Children

- [Expenses](/scorecard-77147/measures/measure-423508.md)
- [Expenses](/scorecard-77148/measures/measure-423521.md)
- [Costs](/scorecard-77149/measures/measure-423532.md)

## Measure Initiatives

- [Create New Revenue Streams](/scorecard-77146/initiatives/initiative-579990.md)
- [Employee Bonus Program](/scorecard-77148/initiatives/initiative-163378.md)
