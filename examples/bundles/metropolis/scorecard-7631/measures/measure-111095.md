---
type: Measure
title: Percent of employees who have worked at the airport for 5+ years
resource: clearpoint://scorecard/7631/measure/111095
cps:
  object: measure
  objectId: 111095
  scorecardId: 7631
  scorecard: Airport
  access:
    derivedFrom: clearpoint://scorecard/7631
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753054
    series:
    - name: Actual
      seriesId: 753054
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753055
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753055
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753055
        sortOrder: 3
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-7631/data/measure-111095-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7631/data/measure-111095-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T20:03:36.510Z"
      name: ClearPoint Support
    owner:
      name: John Smith
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T14:37:14.073Z"
---

## Overview

- **Scorecard:** Airport
- **Owner:** John Smith
- **Reporting frequency:** Annual

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** On Target

### Analysis

Our employee retention is inconsistent.

### Recommendations

We need to increase employee compensation however possible and improve our work culture to continuously retain a large number of employees each year.

## Parents

- [Percent of employees who have worked at the city for 5+ years](/scorecard-7612/measures/measure-110212.md)

## Objectives

- [Recruit from top colleges](/scorecard-7631/objectives/objective-54236.md)
