---
type: Initiative
title: ERP Cloud Migration
resource: clearpoint://scorecard/185056/initiative/745858
tags:
- "FA: Financial Stewardship"
cps:
  object: initiative
  objectId: 745858
  scorecardId: 185056
  scorecard: Finance & Administration
  access:
    derivedFrom: clearpoint://scorecard/185056
  periodicity: Quarterly
  startDate: "2025-08-20"
  endDate: "2027-01-12"
  measure:
    series:
    - name: Actual
      seriesDataTypeId: 4
    - name: Target
      seriesDataTypeId: 4
    - name: Percent Complete
      seriesDataTypeId: 6
      derivation: reference
      reference:
        field: percentComplete
    - name: Calculated Percent Complete
      seriesDataTypeId: 6
      derivation: reference
      reference:
        field: elapsedPercentComplete
    dataResource: scorecard-185056/data/initiative-745858-series.json
  status:
    currentPeriod:
      periodId: 385651
      period: Sep-26
      periodDate: "2026-09-30"
      statusId: 58789
      status: Caution
    statusResource: scorecard-185056/data/initiative-745858-status.json
  provenance:
    lastUpdatedBy:
      at: "2026-09-25T15:23:42.107Z"
      name: Jamie Chen (Strategic Planning)
    owner:
      name: Chris Duval (Finance & Administration)
    lastEditedBy:
      name: Jamie Chen (Strategic Planning)
      at: "2026-10-12T18:16:24.663Z"
---

## Overview

- **Scorecard:** Finance & Administration
- **Owner:** Chris Duval (Finance & Administration)
- **Reporting frequency:** Quarterly
- **Tags:** FA: Financial Stewardship

## Description

The ERP Cloud Migration moves the City's finance and human resources systems from legacy software to a modern cloud platform, improving reliability and reporting and retiring the systems it replaces.

## Details

- **Project Stage:** implementation

## Status

- **Period:** Sep-26 (2026-09-30)
- **Status:** Caution

### Analysis

65% complete. 0 of 4 milestones are done. Next up: Requirements and vendor selection (due Dec 18, 2025).

### Recommendations

Review the late milestones with the project owner and confirm recovery dates before the next reporting cycle.

## Objectives

- [Disciplined Budget Management](/scorecard-185056/objectives/objective-736147.md)

## Milestones

- [Requirements and vendor selection](/scorecard-185056/milestones/milestone-1267250.md)
- [Finance module data migration](/scorecard-185056/milestones/milestone-1267251.md)
- [HR module cutover](/scorecard-185056/milestones/milestone-1267252.md)
- [Legacy system decommission](/scorecard-185056/milestones/milestone-1267253.md)

## Initiative Measures

- [Budget Variance %](/scorecard-185056/measures/measure-2127186.md)
- [Grant Funding Secured ($K, FYTD)](/scorecard-185056/measures/measure-2127190.md)
