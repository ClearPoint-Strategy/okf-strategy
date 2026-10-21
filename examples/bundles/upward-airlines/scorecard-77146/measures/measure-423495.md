---
type: Measure
title: "% employee ownership"
resource: clearpoint://scorecard/77146/measure/423495
cps:
  object: measure
  objectId: 423495
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Employee Ownership
    statusSeriesId: 2224695
    series:
    - name: Employee Ownership
      seriesId: 2224695
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224696
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gte
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224696
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224696
        sortOrder: 3
  measure:
    series:
    - name: Employee Ownership
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Target
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Outside Investors
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: (100-[m423495][Employee Ownership][CurrentPeriod])
    dataResource: scorecard-77146/data/measure-423495-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Q4-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77146/data/measure-423495-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-15T20:21:00.667Z"
      name: Clarice Strong (Operations)
    owner:
      name: Greg Garcia
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2021-08-23T17:29:51.210Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Greg Garcia
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-25 (2025-12-31)
- **Status:** Above Target

## Objectives

- [High Employee Ownership](/scorecard-77146/objectives/objective-207723.md)

## Initiatives

- [Redesign Employee Satisfaction Survey](/scorecard-77146/initiatives/initiative-163370.md)
- [Create new HR hiring process](/scorecard-77146/initiatives/initiative-211890.md)

## Children

- [% of employees who see themselves at Upward for 5+ years](/scorecard-77148/measures/measure-423516.md)
- [% increase in employee wages](/scorecard-77148/measures/measure-423517.md)
- [% of highly satisified employees](/scorecard-77149/measures/measure-423527.md)

## Measure Initiatives

- [Create new HR hiring process](/scorecard-77146/initiatives/initiative-211890.md)
