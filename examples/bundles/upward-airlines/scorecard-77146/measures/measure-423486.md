---
type: Measure
title: "% of population served within 25 miles"
resource: clearpoint://scorecard/77146/measure/423486
cps:
  object: measure
  objectId: 423486
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: best
    statusSeriesId: -1
    series:
    - name: Actual
      seriesId: 2224672
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224673
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: " *.8"
        referenceSeries: Target
        referenceSeriesId: 2224673
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224673
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
    - name: "% Not Served"
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: 100-[m423486][Actual][CurrentPeriod]
    dataResource: scorecard-77146/data/measure-423486-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77146/data/measure-423486-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-08T14:46:23.520Z"
      name: Clarice Strong (Operations)
    owner:
      name: Donald Duff
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2020-03-26T18:17:11.577Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Donald Duff
- **Reporting frequency:** Quarterly

## Details

- **Variance Report:** This metric is doing well and is surpassing expectations!

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 35 (target 35)

## Objectives

- [Good Locations](/scorecard-77146/objectives/objective-207714.md)

## Children

- [% of population served within 25 miles](/scorecard-77147/measures/measure-423506.md)
- [% of population served within 15 miles](/scorecard-77148/measures/measure-423519.md)
