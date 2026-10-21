---
type: Milestone
title: Develop plan to maximize operation
resource: clearpoint://scorecard/77147/milestone/281266
cps:
  object: milestone
  objectId: 281266
  scorecardId: 77147
  scorecard: 🌐 Eastern Division
  access:
    derivedFrom: clearpoint://scorecard/77147
  periodicity: Monthly 2025-26
  startDate: "2025-09-10"
  endDate: "2025-12-29"
  evaluation:
    enabled: true
    statusSeries: Milestone Percent Complete
    statusSeriesId: 3482813
    series:
    - name: Milestone Percent Complete
      seriesId: 3482813
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: =80
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gte
        calculation: =50
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: =50
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Budget
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Elapsed Days
      seriesDataTypeId: 9
      aggregateType: SUM
    - name: Milestone Percent Complete
      seriesDataTypeId: 6
      aggregateType: SUM
    dataResource: scorecard-77147/data/milestone-281266-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77147/data/milestone-281266-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-12T18:16:17.700Z"
      name: Clarice Strong (Operations)
    owner:
      name: Tammy Cuzco (Operations)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2025-04-29T19:51:39.100Z"
---

## Overview

- **Scorecard:** 🌐 Eastern Division
- **Owner:** Tammy Cuzco (Operations)
- **Reporting frequency:** Monthly 2025-26

## Details

- **Milestone Review:** planned

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target
- **Value:** 84
