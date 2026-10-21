---
type: Initiative
title: Create new revenue streams
resource: clearpoint://scorecard/149810/initiative/523411
cps:
  object: initiative
  objectId: 523411
  scorecardId: 149810
  scorecard: Metropolis City Scorecard (Demo Rewrite)
  access:
    derivedFrom: clearpoint://scorecard/149810
  periodicity: Custom
  startDate: "2022-01-28"
  endDate: "2022-12-21"
  evaluation:
    enabled: true
    statusSeries: Actual % Complete
    statusSeriesId: 5992075
    series:
    - name: Actual % Complete
      seriesId: 5992075
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Planned % Complete
        referenceSeriesId: 5992076
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: "*.9"
        referenceSeries: Planned % Complete
        referenceSeriesId: 5992076
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Planned % Complete
        referenceSeriesId: 5992076
        sortOrder: 4
  measure:
    series:
    - name: Revenue
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Expenses
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: City Budget
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Actual % Complete
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Planned % Complete
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-149810/data/initiative-523411-series.json
  status:
    currentPeriod:
      periodId: 168157
      period: Jan-22
      periodDate: "2022-01-31"
      statusId: 0
      status: Not Defined
    statusResource: scorecard-149810/data/initiative-523411-status.json
  provenance:
    lastUpdatedBy:
      at: "2023-03-29T15:34:42.017Z"
      name: ClearPoint Support
    owner:
      name: ClearPoint Support
    lastEditedBy:
      name: ClearPoint Support
      at: "2023-03-23T17:38:28.190Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard (Demo Rewrite)
- **Owner:** ClearPoint Support
- **Reporting frequency:** Custom

## Description

As our population grows, it is important to identify and create new revenue streams so we can continue providing high quality services to our citizens.

## Details

- **Level of Effort:** Medium
- **Level of Impact:** Low
- **Budget:** $57,000
- **Priority:** Medium

## Status

- **Period:** Jan-22 (2022-01-31)
- **Status:** Not Defined

## Measures

- [Revenue](/scorecard-149810/measures/measure-1426483.md)

## Milestones

- [Analyze current revenue sources](/scorecard-149810/milestones/milestone-974574.md)
- [Convene committee to discuss new sources of revenue](/scorecard-149810/milestones/milestone-974575.md)
- [Present plan to City Council](/scorecard-149810/milestones/milestone-974576.md)
