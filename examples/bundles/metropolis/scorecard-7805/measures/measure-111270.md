---
type: Measure
title: Percent of employees who see themselves staying for 1+ year
resource: clearpoint://scorecard/7805/measure/111270
cps:
  object: measure
  objectId: 111270
  scorecardId: 7805
  scorecard: Police Department
  access:
    derivedFrom: clearpoint://scorecard/7805
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 753755
    series:
    - name: Actual
      seriesId: 753755
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753756
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.85"
        referenceSeries: Target
        referenceSeriesId: 753756
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 753756
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
    dataResource: scorecard-7805/data/measure-111270-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Q4-22
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7805/data/measure-111270-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-20T21:05:44.110Z"
      name: ClearPoint Support
    owner:
      name: John Smith
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-30T21:31:25.190Z"
---

## Overview

- **Scorecard:** Police Department
- **Owner:** John Smith
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-22 (2022-12-31)
- **Status:** On Target

### Analysis

Employees are happy so we are doing well in keeping people here.

### Recommendations

Continue what we are doing to make the police department an enjoyable environment.

## Objectives

- [Employee Happiness](/scorecard-7805/objectives/objective-54683.md)

## Measure Initiatives

- [Establish Temporary Police Substation during renovation project](/scorecard-7805/initiatives/initiative-44450.md)
