---
type: Initiative
title: Fire Station No. 3
resource: clearpoint://scorecard/185309/initiative/747570
tags:
- Community Dashboard
- CIP
cps:
  object: initiative
  objectId: 747570
  scorecardId: 185309
  scorecard: Capital Improvement Plan
  access:
    derivedFrom: clearpoint://scorecard/185309
  periodicity: Quarterly
  startDate: "2024-06-03"
  endDate: "2026-12-01"
  measure:
    series:
    - name: Actual Budget
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: Expenditure
      seriesDataTypeId: 4
      aggregateType: SUM
    - name: "% of Budget Expended"
      seriesDataTypeId: 5
      aggregateType: SUM
      calculation: ([i747570][Expenditure][CurrentPeriod]/[i747570][Actual Budget][CurrentPeriod])*100
    dataResource: scorecard-185309/data/initiative-747570-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58790
      status: Below Plan
    statusResource: scorecard-185309/data/initiative-747570-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-10-15T11:59:38.170Z"
      name: Jamie Chen (Strategic Planning)
---

## Overview

- **Scorecard:** Capital Improvement Plan
- **Reporting frequency:** Quarterly
- **Tags:** Community Dashboard, CIP

## Description

This project delivers a new fire station to serve Harborview's growing eastern district, reducing emergency response times for residents and businesses. The facility includes three apparatus bays, living quarters, and training space. Funding is provided through a public safety bond approved by voters.

## Details

- **Address:** 2801 NW 9th Ave, Fort Lauderdale, FL 33311
- **On Budget:** 1
- **Project Phase:** Construction
- **Project ID:** BG14
- **Capital Improvement Plan:** construction

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Below Plan

### Analysis

Progress is assessed at 60%, up from 40% in Jun-26, while roughly 93% of the scheduled duration has elapsed. The December finish is at risk; the construction milestone has passed its planned date without a verified completion.

### Recommendations

Confirm remaining construction work and present a close-out recovery schedule before the next briefing.

## Milestones

- [Planning](/scorecard-185309/milestones/milestone-1271245.md)
- [Early Design](/scorecard-185309/milestones/milestone-1271246.md)
- [Final Design](/scorecard-185309/milestones/milestone-1271247.md)
- [ROW Acquisition](/scorecard-185309/milestones/milestone-1271248.md)
- [Bid](/scorecard-185309/milestones/milestone-1271249.md)
- [Pre-Construction](/scorecard-185309/milestones/milestone-1271250.md)
- [Construction](/scorecard-185309/milestones/milestone-1271251.md)
- [Close out](/scorecard-185309/milestones/milestone-1271252.md)
