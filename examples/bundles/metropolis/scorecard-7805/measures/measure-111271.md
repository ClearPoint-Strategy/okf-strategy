---
type: Measure
title: Percent of employees who have worked in the police department for 10+ years
resource: clearpoint://scorecard/7805/measure/111271
cps:
  object: measure
  objectId: 111271
  scorecardId: 7805
  scorecard: Police Department
  access:
    derivedFrom: clearpoint://scorecard/7805
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753757
    series:
    - name: Actual
      seriesId: 753757
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753758
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 753758
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753758
        sortOrder: 3
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-7805/data/measure-111271-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7805/data/measure-111271-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T21:09:25.407Z"
      name: ClearPoint Support
    owner:
      name: John Smith
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-30T21:30:35.407Z"
---

## Overview

- **Scorecard:** Police Department
- **Owner:** John Smith
- **Reporting frequency:** Annual

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** On Target

### Analysis

Our employees are happy and well-compensated, so we have continued to retain employees.

### Recommendations

Continue the good work!

## Parents

- [Percent of employees who have worked at the city for 5+ years](/scorecard-7612/measures/measure-110212.md)

## Objectives

- [Hire top-notch employees](/scorecard-7805/objectives/objective-54684.md)
