---
type: Measure
title: Project Status Count
resource: clearpoint://scorecard/77146/measure/533944
cps:
  object: measure
  objectId: 533944
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Quarterly
  evaluation:
    enabled: true
    statusSeries: "% Green"
    statusSeriesId: 2658722
    series:
    - name: "% Green"
      seriesId: 2658722
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: =50
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gte
        calculation: =30
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: =30
        sortOrder: 3
  measure:
    series:
    - name: Above Target Strategic Projects
      seriesDataTypeId: 9
      aggregateType: SUM
    - name: Caution Strategic Projects
      seriesDataTypeId: 9
      aggregateType: SUM
    - name: Below Target Strategic Projects
      seriesDataTypeId: 9
      aggregateType: SUM
    - name: Total
      seriesDataTypeId: 9
      aggregateType: SUM
      calculation: "[m533944][Above Target Strategic Projects][CurrentPeriod]+[m533944][Caution Strategic Projects][CurrentPeriod]+[m533944][Below Target Strategic Projects][CurrentPeriod]"
    - name: "% Green"
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: "[m533944][Above Target Strategic Projects][CurrentPeriod]/[m533944][Total][CurrentPeriod]*100"
    dataResource: scorecard-77146/data/measure-533944-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Q4-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77146/data/measure-533944-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-01T16:04:39.110Z"
      name: Clarice Strong (Operations)
    owner:
      name: Joseph Lucco
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2019-03-20T14:09:34.723Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Joseph Lucco
- **Reporting frequency:** Quarterly

## Status

- **Period:** Q4-25 (2025-12-31)
- **Status:** Above Target

### Analysis

We are above 40% for green measures and have been improving which is great!

### Recommendations

Focus on reaching the 75% green measures target in the few months.
