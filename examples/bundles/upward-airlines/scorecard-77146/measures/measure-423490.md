---
type: Measure
title: Internal cost per flight (Department aggregate/MM)
resource: clearpoint://scorecard/77146/measure/423490
tags:
- Financials
cps:
  object: measure
  objectId: 423490
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224681
    series:
    - name: Actual
      seriesId: 2224681
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224682
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.05"
        referenceSeries: Target
        referenceSeriesId: 2224682
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: "*1.05"
        referenceSeries: Target
        referenceSeriesId: 2224682
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
    - name: Eastern Division
      seriesId: 4255196
      bands:
      - status: Below Plan
        statusId: 18580
        compare: any
        sortOrder: 3
    - name: Central Division
      seriesId: 4255197
      bands:
      - status: Caution
        statusId: 18579
        compare: any
        sortOrder: 2
    - name: Western Division
      seriesId: 4255198
      bands:
      - status: Above Target
        statusId: 18578
        compare: any
        sortOrder: 1
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: ([m423509][A][CurrentPeriod]+[m423522][A][CurrentPeriod]+[m423533][A][CurrentPeriod])/3
    - name: Target
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: (([m423509][T][CurrentPeriod]+[m423522][T][CurrentPeriod]+[m423533][T][CurrentPeriod])/3)
    - name: YTD
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m423490][Actual][CalendarYTDSum]"
    - name: Eastern Division
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m423509][Actual][CurrentPeriod]"
    - name: Central Division
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m423522][Actual][CurrentPeriod]"
    - name: Western Division
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[m423533][Actual][CurrentPeriod]"
    dataResource: scorecard-77146/data/measure-423490-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18579
      status: Caution
    statusResource: scorecard-77146/data/measure-423490-status.json
  provenance:
    lastUpdatedBy:
      at: "2023-07-12T18:52:09.437Z"
      name: Clarice Strong (Operations)
    owner:
      name: Clarice Strong (Operations)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-08-31T19:27:26.687Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Clarice Strong (Operations)
- **Reporting frequency:** Monthly
- **Tags:** Financials

## Details

- **Variance Report:** This metric is missing it's target for a number of reasons. The inclement weather we've faced this winter has driven up costs in the Eastern Division. We intend to continue to monitor weather, cut back on flights in the eastern region in an effort to save money, and continue to monitor these costs and mitigate where possible.
- **Complete?:** 0

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Caution
- **Value:** 24050 (target 23000)

### Analysis

The internal cost per flight has increased dramatically in the past two quarters. As you can see from the child metrics, this is primarily due to the costs in the eastern division, which have been driven up by inclement weather this winter. We are hoping to get these under control in time for the busy summer travel season. My info is updated and looking good

### Recommendations

We need to continue closely monitoring theses costs and mitigate where possible. Potentially, cutting back on flights in the eastern region until weather improves might save us some money.

## Objectives

- [No Frills](/scorecard-77146/objectives/objective-207718.md)

## Initiatives

- [Find new food service provider](/scorecard-77146/initiatives/initiative-163371.md)

## Action Items

- [Research winter weather patterns and develop mitigation strategy](/scorecard-77146/action-items/actionItem-182624.md)

## Children

- [Cost per plane trip](/scorecard-77147/measures/measure-423509.md)
- [Internal cost per flight](/scorecard-77148/measures/measure-423522.md)
- [Cost per plane trip](/scorecard-77149/measures/measure-423533.md)

## Measure Initiatives

- [Find new food service provider](/scorecard-77146/initiatives/initiative-163371.md)
