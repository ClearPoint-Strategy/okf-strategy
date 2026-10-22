---
type: Measure
title: "# Unionized job descriptions"
resource: clearpoint://scorecard/77146/measure/423494
cps:
  object: measure
  objectId: 423494
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Monthly
  evaluation:
    enabled: true
    statusSeries: Job Descriptions
    statusSeriesId: 2224692
    series:
    - name: Job Descriptions
      seriesId: 2224692
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224693
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gte
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 2224693
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224693
        sortOrder: 3
  measure:
    series:
    - name: Job Descriptions
      seriesDataTypeId: 5
    - name: Target
      seriesDataTypeId: 5
    dataResource: scorecard-77146/data/measure-423494-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77146/data/measure-423494-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-09-21T18:53:31.920Z"
      name: Clarice Strong (Operations)
    owner:
      name: Ashley Caper
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2020-03-27T15:35:28.250Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Ashley Caper
- **Reporting frequency:** Monthly

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 125 (target 110)

### Analysis

With our recent expansion, we are increasing the number of unionized job descriptions posted on a steady basis.

### Recommendations

Continue hiring and pushing the urgency within our HR department.

## Objectives

- [Flexible Union Contracts](/scorecard-77146/objectives/objective-207722.md)

## Initiatives

- [Redesign Employee Satisfaction Survey](/scorecard-77146/initiatives/initiative-163370.md)
- [Create new employee retirement package](/scorecard-77146/initiatives/initiative-211891.md)

## Measure Initiatives

- [Create new Employee Training](/scorecard-77146/initiatives/initiative-163369.md)
