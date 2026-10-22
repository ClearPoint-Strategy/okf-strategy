---
type: Measure
title: "% of employees who see themselves at Upward for 5+ years"
resource: clearpoint://scorecard/77148/measure/423516
cps:
  object: measure
  objectId: 423516
  scorecardId: 77148
  scorecard: 🎯 Central Division
  access:
    derivedFrom: clearpoint://scorecard/77148
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: Actual
    statusSeriesId: 2224730
    series:
    - name: Actual
      seriesId: 2224730
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224731
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gt
        calculation: "*.8"
        referenceSeries: Target
        referenceSeriesId: 2224731
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224731
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 6
    - name: Target
      seriesDataTypeId: 6
    dataResource: scorecard-77148/data/measure-423516-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77148/data/measure-423516-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-01-25T22:45:15.047Z"
      name: Clarice Strong (Operations)
    owner:
      name: James Crockett (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2017-10-16T15:29:01.143Z"
---

## Overview

- **Scorecard:** 🎯 Central Division
- **Owner:** James Crockett (Sales)
- **Reporting frequency:** Quarterly

## Description

We want to create an environment where employees are excited to come to work and see themselves at Upward Air for a long time. 
 
 If staff stay longer, then we will have less turnover and a more skilled, experienced workforce.

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 77 (target 75)

### Analysis

We have been steadily increasing our number of longer-term minded employees.

### Recommendations

We need to focus mostly on finding a way to compensate our employees more since our company culture is strong.

## Parents

- [% employee ownership](/scorecard-77146/measures/measure-423495.md)

## Objectives

- [Employee Satisfaction](/scorecard-77148/objectives/objective-207738.md)

## Measure Initiatives

- [Hire Consultant to Design Employee Survey](/scorecard-77148/initiatives/initiative-163376.md)
