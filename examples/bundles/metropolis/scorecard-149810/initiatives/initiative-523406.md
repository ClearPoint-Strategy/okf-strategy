---
type: Initiative
title: Website Upgrade (Data & Charts)
resource: clearpoint://scorecard/149810/initiative/523406
tags:
- Upgrade Initiative Template
cps:
  object: initiative
  objectId: 523406
  scorecardId: 149810
  scorecard: Metropolis City Scorecard (Demo Rewrite)
  access:
    derivedFrom: clearpoint://scorecard/149810
  periodicity: Monthly
  startDate: "2021-08-17"
  endDate: "2022-08-31"
  evaluation:
    enabled: true
    statusSeries: Actual % Complete
    statusSeriesId: 5992058
    series:
    - name: Actual % Complete
      seriesId: 5992058
      bands:
      - status: On Target
        statusId: 3950
        compare: gte
        calculation: ""
        referenceSeries: Planned % Complete
        referenceSeriesId: 5992059
        sortOrder: 2
      - status: Caution
        statusId: 3953
        compare: gte
        calculation: "*.9"
        referenceSeries: Planned % Complete
        referenceSeriesId: 5992059
        sortOrder: 3
      - status: Below Plan
        statusId: 3956
        compare: lt
        calculation: ""
        referenceSeries: Planned % Complete
        referenceSeriesId: 5992059
        sortOrder: 4
    - name: "% Variance"
      seriesId: 5992065
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
      calculation: "[i523406][Design Costs To Date][CurrentPeriod]+[i523406][Upgrade Costs To Date][CurrentPeriod]"
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
      calculation: ([i523406][Project Budget][CurrentPeriod]*[i523406][Actual % Complete][CurrentPeriod])/100
    - name: Variance from Target
      seriesDataTypeId: 4
      aggregateType: SUM
      calculation: "[i523406][Total Spending To Date][CurrentPeriod]-[i523406][Budget based on % complete][CurrentPeriod]"
    - name: "% Variance"
      seriesDataTypeId: 6
      aggregateType: SUM
      calculation: (([i523406][Total Spending To Date][CurrentPeriod]/[i523406][Budget based on % complete][CurrentPeriod])-1)*100
    dataResource: scorecard-149810/data/initiative-523406-series.json
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 0
      status: Not Defined
    statusResource: scorecard-149810/data/initiative-523406-status.json
  provenance:
    lastUpdatedBy:
      at: "2023-03-29T15:31:21Z"
      name: ClearPoint Support
    owner:
      name: Jerry Johnson
    lastEditedBy:
      name: ClearPoint Support
      at: "2023-03-23T17:38:28.190Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard (Demo Rewrite)
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
- **Status:** Not Defined

### Analysis

While the initiative hit some bumps with the online bill payment integration, we have since recovered and are wrapping up the initiative by reaching out to our population. We have several different marketing campaigns to inform citizens that are finding success.

## Objectives

- [Accountable & Responsive City Government](/scorecard-149810/objectives/objective-555859.md)

## Measures

- [Expenses](/scorecard-149810/measures/measure-1426484.md)

## Milestones

- [ADA compliant design](/scorecard-149810/milestones/milestone-974557.md)
- [Online bill payment integration](/scorecard-149810/milestones/milestone-974558.md)
- [Email reminder setup](/scorecard-149810/milestones/milestone-974559.md)
- [Inform citizens](/scorecard-149810/milestones/milestone-974560.md)

## Action Items

- [Advertise upgrade](/scorecard-149810/action-items/actionItem-356090.md)

## Initiative Measures

- [Percent of citizens rating city government performance "good" or "excellent"](/scorecard-149810/measures/measure-1426478.md)
- [Percent of citizens who believe Metropolis provides good value for their tax dollar](/scorecard-149810/measures/measure-1426481.md)
