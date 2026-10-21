---
type: Measure
title: Percent of employees who say they are "highly satisfied"
resource: clearpoint://scorecard/7631/measure/111094
cps:
  object: measure
  objectId: 111094
  scorecardId: 7631
  scorecard: Airport
  access:
    derivedFrom: clearpoint://scorecard/7631
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753052
    series:
    - name: Actual
      seriesId: 753052
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753053
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.85"
        referenceSeries: Target
        referenceSeriesId: 753053
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753053
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
    dataResource: scorecard-7631/data/measure-111094-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7631/data/measure-111094-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T20:20:30.397Z"
      name: ClearPoint Support
    owner:
      name: Richard Grayson
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T17:37:06.267Z"
---

## Overview

- **Scorecard:** Airport
- **Owner:** Richard Grayson
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** On Target

### Analysis

We have been around the target for each quarter, but more of an effort needs to be made to keep employees highly satisfied each year so that we can be consistently above target.

### Recommendations

We should focus on improving the main reasons our employees are not highly satisfied.

## Objectives

- [Employee Satisfaction](/scorecard-7631/objectives/objective-54235.md)
