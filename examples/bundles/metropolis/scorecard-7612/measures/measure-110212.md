---
type: Measure
title: Percent of employees who have worked at the city for 5+ years
resource: clearpoint://scorecard/7612/measure/110212
cps:
  object: measure
  objectId: 110212
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 750370
    series:
    - name: Actual
      seriesId: 750370
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750371
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: " *.9"
        referenceSeries: Target
        referenceSeriesId: 750371
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 750371
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
      calculation: ([m111095][Actual][CurrentPeriod]+[m111271][Actual][CurrentPeriod]+[m111295][Actual][CurrentPeriod])/3
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-7612/data/measure-110212-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7612/data/measure-110212-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-15T15:53:44.890Z"
      name: ClearPoint Support
    owner:
      name: Steve Lombard
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-11-13T13:46:40.017Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Steve Lombard
- **Reporting frequency:** Annual

## Description

We want our employees to feel so valued that they stay working for the city. Longer tenured employees bring a wealth of experience to the city. We do want to make sure we create the proper balance between "fresh blood" and more experienced employees though.

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** On Target

### Analysis

We have been doing great in increasing our retention rate. Our employees are happy working with us!

### Recommendations

Lets have scheduled celebrations to celebrate the success of our teammates.

## Objectives

- [Recruit & Retain Top Employee Talent](/scorecard-7612/objectives/objective-54238.md)

## Children

- [Percent of employees who have worked at the airport for 5+ years](/scorecard-7631/measures/measure-111095.md)
- [Percent of employees who have worked in the police department for 10+ years](/scorecard-7805/measures/measure-111271.md)
- [Percent of employees who have worked in the fire department for 5+ years](/scorecard-7807/measures/measure-111295.md)

## Measure Initiatives

- [Employee training](/scorecard-7612/initiatives/initiative-43638.md)
