---
type: Measure
title: Flight Cancellations
resource: clearpoint://scorecard/77148/measure/542407
cps:
  object: measure
  objectId: 542407
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2664690
    series:
    - name: Actual
      seriesId: 2664690
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2664691
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: "*1.2"
        referenceSeries: Target
        referenceSeriesId: 2664691
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2664691
        sortOrder: 3
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 9
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 9
      aggregateType: SUM
    dataResource: scorecard-77148/data/measure-542407-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18579
      status: Caution
    statusResource: scorecard-77148/data/measure-542407-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-26T15:23:44.663Z"
      name: Clarice Strong (Operations)
    owner:
      name: Lawrence Sito
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-01-26T15:23:44.243Z"
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** Lawrence Sito
- **Reporting frequency:** Quarterly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Caution
- **Value:** 26 (target 30)

### Analysis

We are doing well in reducing cancellations due to reasons in our control, but there are still factors we cannot control.

### Recommendations

Improve our training to help us get planes ready to fly between flights faster to reduce weather-related cancellations.

## Parents

- [# customer complaints per 1,000 tickets](/scorecard-77146/measures/measure-423488.md)
- [% of customer airline travel with us](/scorecard-77146/measures/measure-423489.md)

## Objectives

- [Reliable Departures](/scorecard-77148/objectives/objective-207734.md)
- [Ground Turnaround](/scorecard-77148/objectives/objective-207736.md)

## Measure Initiatives

- [Create New Training Program for Employees](/scorecard-77148/initiatives/initiative-163377.md)
