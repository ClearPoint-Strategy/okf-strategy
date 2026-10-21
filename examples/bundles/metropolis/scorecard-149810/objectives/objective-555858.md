---
type: Objective
title: Financial Health & Economic Vitality (Auto Eval)
resource: clearpoint://scorecard/149810/objective/555858
cps:
  object: objective
  objectId: 555858
  scorecardId: 149810
  scorecard: Metropolis City Scorecard (Demo Rewrite)
  access:
    derivedFrom: clearpoint://scorecard/149810
  periodicity: Monthly
  evaluation:
    enabled: true
    bands:
    - status: On Target
      statusId: 3950
      compare: gte
      calculation: "2.5"
      sortOrder: 1
    - status: Caution
      statusId: 3953
      compare: gte
      calculation: "1.5"
      sortOrder: 2
    - status: Below Plan
      statusId: 3956
      compare: gte
      calculation: ".5"
      sortOrder: 3
    - status: No Information
      statusId: 3959
      compare: any
      sortOrder: 4
    weights:
    - object: measure
      objectId: 1426482
      concept: scorecard-149810/measures/measure-1426482
      weight: 33
    - object: measure
      objectId: 1426483
      concept: scorecard-149810/measures/measure-1426483
      weight: 34
    - object: measure
      objectId: 1426484
      concept: scorecard-149810/measures/measure-1426484
      weight: 33
  status:
    currentPeriod:
      periodId: 192048
      period: Dec-22
      periodDate: "2022-12-31"
      statusId: 3953
      status: Caution
    statusResource: scorecard-149810/data/objective-555858-status.json
  provenance:
    lastUpdatedBy:
      at: "2023-03-23T17:38:28.953Z"
      name: ClearPoint Support
    owner:
      name: Rhonda Fields (Assistant City Manager)
    collaborators:
    - Mark Cutler
    - Steve Lombard
    lastEditedBy:
      name: ClearPoint Support
      at: "2023-03-23T17:38:27.660Z"
---

## Overview

- **Scorecard:** Metropolis City Scorecard (Demo Rewrite)
- **Owner:** Rhonda Fields (Assistant City Manager)
- **Reporting frequency:** Monthly

## Description

We cannot have a successful city without a healthy balance sheet. We must be responsible with our financial resources.

## Status

- **Period:** Dec-22 (2022-12-31)
- **Status:** Caution

### Analysis

Our city has barely created a budget surplus. Business growth is doing well. write in stuff anywhere.

### Recommendations

May need to increase property taxes in future months.

## Categories

- [Finance](/scorecard-149810/categories/category-309680.md)

## Measures

- [Revenue](/scorecard-149810/measures/measure-1426483.md)
- [Expenses](/scorecard-149810/measures/measure-1426484.md)
- [Budget Surplus](/scorecard-149810/measures/measure-1426482.md)

## Initiatives

- [Update master plans (Milestone Roll Up)](/scorecard-149810/initiatives/initiative-523409.md)

## Action Items

- [Get the dashboards up by end of year](/scorecard-149810/action-items/actionItem-356089.md)

## Children

- [Budget Health](/scorecard-149811/objectives/objective-555873.md)
- [Financial Wellness](/scorecard-149812/objectives/objective-555879.md)
- [Financial Health](/scorecard-149813/objectives/objective-555885.md)

## Child Measures

- [Expenses](/scorecard-149811/measures/measure-1426510.md)
- [Revenue](/scorecard-149811/measures/measure-1426509.md)
- [Profitability](/scorecard-149811/measures/measure-1426511.md)
- [Budget Surplus](/scorecard-149811/measures/measure-1426519.md)
- [Income Generated](/scorecard-149812/measures/measure-1426528.md)
- [Costs](/scorecard-149812/measures/measure-1426529.md)
- [Budget Surplus](/scorecard-149812/measures/measure-1426530.md)
- [Revenue](/scorecard-149813/measures/measure-1426549.md)
- [Expenses](/scorecard-149813/measures/measure-1426550.md)
- [Budget Surplus/Deficit](/scorecard-149813/measures/measure-1426551.md)

## Child Initiatives

- [Study revenue growth](/scorecard-149811/initiatives/initiative-523415.md)
- [Propose new budget](/scorecard-149813/initiatives/initiative-523425.md)
