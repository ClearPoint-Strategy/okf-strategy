---
type: Measure
title: Percent of citizens rating city government performance "good" or "excellent"
resource: clearpoint://scorecard/7612/measure/108449
cps:
  object: measure
  objectId: 108449
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 744698
    series:
    - name: Actual
      seriesId: 744698
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 744699
        sortOrder: 1
      - status: Caution
        statusId: 3953
        compare: gt
        calculation: " *.9"
        referenceSeries: Target
        referenceSeriesId: 744699
        sortOrder: 2
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 744699
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
    dataResource: scorecard-7612/data/measure-108449-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: "2022"
      periodDate: "2022-12-31"
      statusId: 3950
      status: On Target
    statusResource: scorecard-7612/data/measure-108449-status.json
  provenance:
    lastUpdatedBy:
      at: "2022-02-15T15:55:28.230Z"
      name: ClearPoint Support
    owner:
      name: John Smith
    lastEditedBy:
      name: ClearPoint Support
      at: "2020-12-30T21:59:50.643Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** John Smith
- **Reporting frequency:** Annual

## Description

The impression our city government makes on our citizenry is extremely important to us. We cannot effectively run a city and promote a healthy community if we do not have the trust of our citizens and neighbors.

## Status

- **Period:** 2022 (2022-12-31)
- **Status:** On Target

### Analysis

We were approaching our target until 2020, which was a terrible year. We need to make a big adjustment to get back on track.

### Recommendations

Focus on improving the areas that have the most complaints from citizens.

## Objectives

- [Accountable & Responsive City Government](/scorecard-7612/objectives/objective-53691.md)

## Action Items

- [Get the dashboards up by end of year](/scorecard-7612/action-items/actionItem-21986.md)
- [Look into other local cities' citizen experience surveys](/scorecard-7612/action-items/actionItem-151874.md)

## Measure Initiatives

- [Website Upgrade (Data & Charts)](/scorecard-7612/initiatives/initiative-43640.md)
