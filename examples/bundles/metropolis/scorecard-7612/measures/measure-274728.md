---
type: Measure
title: Percent of municipal facilities incorporating energy efficient upgrades
resource: clearpoint://scorecard/7612/measure/274728
cps:
  object: measure
  objectId: 274728
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 1681032
    series:
    - name: Actual
      seriesId: 1681032
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 1681033
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: "*.75"
        referenceSeries: Target
        referenceSeriesId: 1681033
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 1681033
        sortOrder: 3
      - status: No Information
        statusId: 3959
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
    dataResource: scorecard-7612/data/measure-274728-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7612/data/measure-274728-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T15:38:23.237Z"
      name: ClearPoint Support
    owner:
      name: Ted Jackson
    lastEditedBy:
      name: ClearPoint Support
      at: "2020-03-10T21:15:27.590Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Ted Jackson
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** Caution

### Analysis

We are doing well in this area and close to reaching our target, but improvement is still needed.

### Recommendations

We should prepare a persuasive report and presentation showing the cost savings after upgrades and make sure the appropriate decision makers are given that information.

## Objectives

- [Smart Investments & Purchases](/scorecard-7612/objectives/objective-277060.md)
