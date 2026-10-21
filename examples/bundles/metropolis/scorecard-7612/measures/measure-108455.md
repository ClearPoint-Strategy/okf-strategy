---
type: Measure
title: Percent of citizens who believe Metropolis provides good value for their tax dollar
resource: clearpoint://scorecard/7612/measure/108455
cps:
  object: measure
  objectId: 108455
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 744710
    series:
    - name: Actual
      seriesId: 744710
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 744711
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 744711
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 744711
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
    dataResource: scorecard-7612/data/measure-108455-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7612/data/measure-108455-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-15T00:31:30.413Z"
      name: ClearPoint Support
    owner:
      name: John Smith
    lastEditedBy:
      name: ClearPoint Support
      at: "2017-10-27T14:28:05.057Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** John Smith
- **Reporting frequency:** Annual

## Description

We want our citizens to have faith in their city government and believe we are being responsible with their tax money.

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** On Target

### Analysis

The feedback from the survey was really helpful and we'll use it to inform future improvements.

### Recommendations

We should continue to gather citizen feedback and choose funding priorities based on that feedback.

## Objectives

- [Accountable & Responsive City Government](/scorecard-7612/objectives/objective-53691.md)

## Action Items

- [Call the newspaper & report solid progress](/scorecard-7612/action-items/actionItem-21984.md)

## Measure Initiatives

- [Website Upgrade (Data & Charts)](/scorecard-7612/initiatives/initiative-43640.md)
