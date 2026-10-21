---
type: Objective
title: Very Low Ticket Prices
resource: clearpoint://scorecard/77146/objective/207712
cps:
  object: objective
  objectId: 207712
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Default
  evaluation:
    enabled: true
    bands:
    - status: Above Target
      statusId: 18578
      compare: gte
      calculation: 2.5
      sortOrder: 1
    - status: Caution
      statusId: 18579
      compare: gte
      calculation: 1.5
      sortOrder: 2
    - status: Below Plan
      statusId: 18580
      compare: gte
      calculation: 0.5
      sortOrder: 3
    - status: No Information
      statusId: 18581
      compare: any
      sortOrder: 4
    weights:
    - object: objective
      objectId: 207735
      concept: scorecard-77148/objectives/objective-207735
      weight: 50
    - object: objective
      objectId: 207744
      concept: scorecard-77149/objectives/objective-207744
      weight: 50
  provenance:
    owner:
      name: Greg Garcia
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: 2025-11-17T17:18:51.357Z
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Greg Garcia
- **Reporting frequency:** Default

## Description

Research indicates that price is the key factor that consumers consider when purchasing airline tickets. We want to not only remain competitive, but want our brand to be associated with delivering more for less.

## Details

- **Balanced Scorecard:** customer

## Status

- **Period:** Dec-25 (2025-12-31)
- **Status:** Caution

### Analysis

Ticket prices are competitive with the industry and the time of purchase.

### Recommendations

We need to educate our consumers about the great deals they can get by purchasing early. We can beat customer prices pretty easy by selling out our planes 1 week in advance.

## Categories

- [👥 Customer](/scorecard-77146/categories/category-203612.md)

## Measures

- [Ticket price differential](/scorecard-77146/measures/measure-423484.md)

## Children

- [Competitive Ticket Prices](/scorecard-77148/objectives/objective-207735.md)
- [Competitive Ticket Prices](/scorecard-77149/objectives/objective-207744.md)

## Child Measures

- [Ticket price differential](/scorecard-77148/measures/measure-423512.md)
- [Ticket price differential](/scorecard-77149/measures/measure-423524.md)

## Child Initiatives

- [Prepare for summer sale](/scorecard-77148/initiatives/initiative-211898.md)
