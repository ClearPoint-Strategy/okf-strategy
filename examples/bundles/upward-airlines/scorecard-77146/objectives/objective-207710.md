---
type: Objective
title: Frequent Reliable Departures (Automatic Eval)
resource: clearpoint://scorecard/77146/objective/207710
cps:
  object: objective
  objectId: 207710
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  evaluation:
    enabled: true
    bands:
    - status: Above Target
      statusId: 18578
      compare: gt
      calculation: "2.5"
      sortOrder: 1
    - status: Caution
      statusId: 18579
      compare: gt
      calculation: "1.5"
      sortOrder: 2
    - status: Below Plan
      statusId: 18580
      compare: gt
      calculation: ".5"
      sortOrder: 3
    - status: No Information
      statusId: 18581
      compare: gt
      calculation: ""
      sortOrder: 4
    weights:
    - object: measure
      objectId: 423498
      concept: scorecard-77147/measures/measure-423498
      weight: 33
    - object: measure
      objectId: 542407
      concept: scorecard-77148/measures/measure-542407
      weight: 33
  status:
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: "2025-12-31"
      statusId: 18580
      status: Below Plan
    statusResource: scorecard-77146/data/objective-207710-status.json
  provenance:
    lastUpdatedBy:
      at: "2020-12-01T16:04:33.550Z"
      name: Clarice Strong (Operations)
    owner:
      name: Izzy Moreno (Sales)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: "2026-09-07T19:55:34.300Z"
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Izzy Moreno (Sales)

## Description

One negative flight experience can have a major impact on customer brand loyalty. As such, we need to ensure that we are providing our customers with multiple daily flight options and these flights must be prompt.

## Details

- **Balanced Scorecard:** financial

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Below Plan

### Analysis

We are meeting our objective of having frequent reliable departures. There are two key components of this objective: 
 
 Reliable (on-time) departures 
 Frequent departures 
 
 While we have been doing excellent on the turnaround time/frequent departure aspect of this, we need to do better on the reliability side. We are still missing too many departure times. We are doing well overall because we have so many departures now, that this part of the calculation is swamping the reliability part.

### Recommendations

If we continue to be below plan on the reliability side, we need to get to the root of the problem. Either we must re-look at the process to see what is causing all of our delays or we must examine whether we are just scheduling too tightly.

## Categories

- [👥 Customer](/scorecard-77146/categories/category-203612.md)

## Measures

- [Average Number of Daily departures per route](/scorecard-77146/measures/measure-423483.md)

## Risks

- [Operational Disruptions Leading to Flight Delay/Cancellation](/scorecard-77146/risks/risk-70551.md)

## Children

- [Reliable Departures](/scorecard-77147/objectives/objective-207725.md)
- [Morning Departures](/scorecard-77147/objectives/objective-271191.md)
- [Reliable Departures](/scorecard-77148/objectives/objective-207734.md)
- [Reliable Departures](/scorecard-77149/objectives/objective-207743.md)

## Child Measures

- [% of on time departures](/scorecard-77147/measures/measure-423498.md)
- [% of on time departures](/scorecard-77148/measures/measure-423511.md)
- [Flight Cancellations](/scorecard-77148/measures/measure-542407.md)
- [Rate of departures that leave on time](/scorecard-77149/measures/measure-423523.md)

## Child Initiatives

- [Create Upskilling for Employees](/scorecard-77147/initiatives/initiative-163373.md)
- [Airport Traffic Study (Milestone Roll Up)](/scorecard-77147/initiatives/initiative-163374.md)
- [Create New Training Program for Employees](/scorecard-77148/initiatives/initiative-163377.md)
- [Build Employee Upskilling](/scorecard-77149/initiatives/initiative-163380.md)
