---
type: Measure
title: "# of A-list priority customers"
resource: clearpoint://scorecard/77148/measure/542406
cps:
  object: measure
  objectId: 542406
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2664688
    series:
    - name: Actual
      seriesId: 2664688
      bands:
      - status: Above Target
        statusId: 18578
        compare: gt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2664689
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: ".9"
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2664689
        sortOrder: 3
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 9
      aggregateType: SUM
    dataResource: scorecard-77148/data/measure-542406-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77148/data/measure-542406-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-01T19:52:19.147Z"
      name: Clarice Strong (Operations)
    owner:
      name: Janice Jones
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2017-10-17T21:45:16.743Z"
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** Janice Jones
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 16300 (target 15000)

### Analysis

A-list members are very important to our growth model, and we have seen an increase in loyal customers.

### Recommendations

Continue to gain loyalty of customers.

## Parents

- [Customer Experience Survey](/scorecard-77146/measures/measure-423482.md)

## Objectives

- [Profitability](/scorecard-77148/objectives/objective-207733.md)

## Measure Initiatives

- [Prepare for summer sale](/scorecard-77148/initiatives/initiative-211898.md)
