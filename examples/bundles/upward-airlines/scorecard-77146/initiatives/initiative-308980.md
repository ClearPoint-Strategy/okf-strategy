---
type: Initiative
title: Construct new airplane seats (Data & Charts)
resource: clearpoint://scorecard/77146/initiative/308980
tags:
- High Priority
cps:
  object: initiative
  objectId: 308980
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Monthly 2025-26
  startDate: "2025-10-04"
  endDate: "2026-12-09"
  evaluation:
    enabled: true
    statusSeries: Actual % Complete
    statusSeriesId: 3482820
    series:
    - name: Actual % Complete
      seriesId: 3482820
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Planned % Complete
        referenceSeriesId: 3482821
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gte
        calculation: "*.9"
        referenceSeries: Planned % Complete
        referenceSeriesId: 3482821
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Planned % Complete
        referenceSeriesId: 3482821
        sortOrder: 3
    - name: "% Variance"
      seriesId: 3482824
      bands:
      - status: Above Target
        statusId: 18578
        compare: lte
        calculation: =0
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: lte
        calculation: =5
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: gt
        calculation: =5
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  measure:
    series:
    - name: Design Costs To Date
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Construction Costs To Date
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Total Spending To Date
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[i308980][Design Costs To Date][CurrentPeriod]+[i308980][Construction Costs To Date][CurrentPeriod]"
    - name: Project Budget
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Actual % Complete
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Planned % Complete
      seriesDataTypeId: 6
      aggregateType: SUM
    - name: Budget based on % complete
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: ([i308980][Project Budget][CurrentPeriod]*[i308980][Actual % Complete][CurrentPeriod])/100
    - name: Variance from Target
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[i308980][Total Spending To Date][CurrentPeriod]-[i308980][Budget based on % complete][CurrentPeriod]"
    - name: "% Variance"
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: (([i308980][Total Spending To Date][CurrentPeriod]/[i308980][Budget based on % complete][CurrentPeriod])-1)*100
    dataResource: scorecard-77146/data/initiative-308980-series.json
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18578
      status: Above Target
    statusResource: scorecard-77146/data/initiative-308980-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-11-12T19:55:48.947Z"
      name: Clarice Strong (Operations)
    owner:
      name: Greg Garcia
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2025-03-10T20:51:32.357Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Greg Garcia
- **Reporting frequency:** Monthly 2025-26
- **Tags:** High Priority

## Description

Detailed project management is possible by leveraging project evaluations to track quantitative initiative information. Design and Construction Costs To Date - manually input each month based on expenditures Total Spending To Date - adding up the Design and Construction Costs To Date Project Budget - consistently $1,000,000 throughout the project Actual % Complete - determined each month and references the Percent Complete field on the detail page Planned % Complete - manually determined based on the milestones and general flow of the project Budget based on the % complete - the Project Budget multiplied by the Actual Percent complete to see how much budget we should be using at this point in the project Variance from Target - shows how far over or under budget we are % Variance - expresses Variance from Target as a percentage. The automatic evaluation for the status of this initiative is determined by the % Variance.

## Details

- **Budget:** 2000
- **Initiative Review:** rejected
- **Budget:** $2,000
- **Requester:** James Crockett (Sales)
- **Project Request Status:** Submitted
- **Priority:** 3. High
- **Level of Effort:** 3. High
- **Level of Impact:** 2. Medium

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Above Target

### Analysis

While the initiative hit some bumps with the online bill payment integration, we have since recovered and are wrapping up the initiative by reaching out to our teams. We have several different marketing campaigns to promote our new seats.

## Objectives

- [No Elites](/scorecard-77146/objectives/objective-207717.md)

## Measures

- [Expenses](/scorecard-77146/measures/measure-423497.md)

## Milestones

- [Order construction materials](/scorecard-77146/milestones/milestone-599142.md)
- [Consult design experts](/scorecard-77146/milestones/milestone-599141.md)
- [Build new seats](/scorecard-77146/milestones/milestone-599467.md)

## Children

- [Prepare for summer sale](/scorecard-77148/initiatives/initiative-211898.md)
- [Purchase new TV Screens](/scorecard-77149/initiatives/initiative-211896.md)

## Initiative Measures

- [% of customer airline travel with us](/scorecard-77146/measures/measure-423489.md)
