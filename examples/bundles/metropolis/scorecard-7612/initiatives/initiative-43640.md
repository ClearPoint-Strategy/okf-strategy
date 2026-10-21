---
type: Initiative
title: Website Upgrade (Data & Charts)
resource: clearpoint://scorecard/7612/initiative/43640
tags:
- Upgrade Initiative Template
cps:
  object: initiative
  objectId: 43640
  scorecardId: 7612
  scorecard: Metropolis City Scorecard
  access:
    derivedFrom: clearpoint://scorecard/7612
  periodicity: Monthly
  startDate: "2021-08-17"
  endDate: "2022-08-31"
  evaluation:
    enabled: true
    statusSeries: Actual % Complete
    statusSeriesId: 3495861
    series:
    - name: Actual % Complete
      seriesId: 3495861
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Planned % Complete
        referenceSeriesId: 3495862
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: "*.9"
        referenceSeries: Planned % Complete
        referenceSeriesId: 3495862
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Planned % Complete
        referenceSeriesId: 3495862
        sortOrder: 4
    - name: "% Variance"
      seriesId: 3495868
      bands:
      - status: On Target
        statusId: 3950
        compare: lte
        calculation: =0
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: lte
        calculation: =5
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: gt
        calculation: =5
        sortOrder: 4
      - status: No Information
        statusId: 3959
        compare: any
        sortOrder: 5
  measure:
    series:
    - name: Design Costs To Date
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Upgrade Costs To Date
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Total Spending To Date
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[i43640][Design Costs To Date][CurrentPeriod]+[i43640][Upgrade Costs To Date][CurrentPeriod]"
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
      calculation: ([i43640][Project Budget][CurrentPeriod]*[i43640][Actual % Complete][CurrentPeriod])/100
    - name: Variance from Target
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[i43640][Total Spending To Date][CurrentPeriod]-[i43640][Budget based on % complete][CurrentPeriod]"
    - name: "% Variance"
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: (([i43640][Total Spending To Date][CurrentPeriod]/[i43640][Budget based on % complete][CurrentPeriod])-1)*100
    dataResource: scorecard-7612/data/initiative-43640-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-7612/data/initiative-43640-status.json
  provenance:
    lastUpdatedBy:
      at: "2021-06-28T15:39:11.547Z"
      name: ClearPoint Support
    owner:
      name: Jerry Johnson
    lastEditedBy:
      name: ClearPoint Support
      at: "2023-01-11T13:15:12.707Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard
- **Owner:** Jerry Johnson
- **Reporting frequency:** Monthly
- **Tags:** Upgrade Initiative Template

## Description

Detailed project management is possible by leveraging project evaluations to track quantitative initiative information. 
 Design and Upgrade Costs To Date - manually input each month based on expenditures Total Spending To Date - adding up the Design and Upgrade Costs To Date Project Budget - consistently $1,000,000 throughout the project Actual % Complete - determined each month and references the Percent Complete field on the detail page Planned % Complete - manually determined based on the milestones and general flow of the project Budget based on % complete - the Project Budget multiplied by the Actual Percent complete to see how much budget we should be using at this point in the project Variance from Target - shows how far over or under budget we are % Variance - expresses Variance from Target as a percentage. The automatic evaluation for the status of this initiative is determined by the % Variance.

## Details

- **Level of Effort:** High
- **Level of Impact:** High
- **Budget:** $56,000
- **Priority:** High

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Caution

### Analysis

While the initiative hit some bumps with the online bill payment integration, we have since recovered and are wrapping up the initiative by reaching out to our population. We have several different marketing campaigns to inform citizens that are finding success.

## Objectives

- [Accountable & Responsive City Government](/scorecard-7612/objectives/objective-53691.md)

## Measures

- [Expenses](/scorecard-7612/measures/measure-110209.md)

## Milestones

- [Inform citizens](/scorecard-7612/milestones/milestone-53463.md)
- [ADA compliant design](/scorecard-7612/milestones/milestone-53460.md)
- [Email reminder setup](/scorecard-7612/milestones/milestone-53462.md)
- [Online bill payment integration](/scorecard-7612/milestones/milestone-53461.md)

## Action Items

- [Advertise upgrade](/scorecard-7612/action-items/actionItem-21989.md)

## Initiative Measures

- [Percent of citizens rating city government performance "good" or "excellent"](/scorecard-7612/measures/measure-108449.md)
- [Percent of citizens who believe Metropolis provides good value for their tax dollar](/scorecard-7612/measures/measure-108455.md)
