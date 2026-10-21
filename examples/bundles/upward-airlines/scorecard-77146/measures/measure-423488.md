---
type: Measure
title: "# customer complaints per 1,000 tickets"
resource: clearpoint://scorecard/77146/measure/423488
cps:
  object: measure
  objectId: 423488
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  access:
    derivedFrom: clearpoint://scorecard/77146
  periodicity: Annual
  evaluation:
    enabled: true
    statusSeries: best
    statusSeriesId: -1
    series:
    - name: Actual
      seriesId: 2224677
      bands:
      - status: Above Target
        statusId: 18578
        compare: gte
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224678
        sortOrder: 1
      - status: Caution
        statusId: 18579
        compare: gte
        calculation: "*.9"
        referenceSeries: Target
        referenceSeriesId: 2224678
        sortOrder: 2
      - status: Below Plan
        statusId: 18580
        compare: lt
        calculation: ""
        referenceSeries: Target
        referenceSeriesId: 2224678
        sortOrder: 3
      - status: No Information
        statusId: 18581
        compare: any
        sortOrder: 4
  provenance:
    owner:
      name: Clarice Strong (Operations)
    lastEditedBy:
      name: Clarice Strong (Operations)
      at: 2017-11-21T15:01:56.833Z
---

## Overview

- **Scorecard:** Upward Airlines Corporate
- **Owner:** Clarice Strong (Operations)
- **Reporting frequency:** Annual

## Status

- **Period:** 2025 (2025-12-31)
- **Status:** Below Plan

### Analysis

In 2025, Upward Airlines' customer complaints per 1,000 tickets were "Below Plan" with a value of 8, failing to meet the target of 10. This marks a slight improvement from 2023 and 2024, where the status was "Caution" with a value of 9. The consistent failure to meet targets suggests persistent issues in customer service or operational areas.

### Recommendations

Enhance Customer Service Training: Implement targeted training programs for staff to address common customer complaints and improve service quality, aiming to consistently meet or exceed the target. Analyze Complaint Patterns: Conduct a detailed analysis of complaint data to identify recurring issues and implement strategic improvements in operations or service delivery.

## Objectives

- [Fun Experience](/scorecard-77146/objectives/objective-207716.md)

## Children

- [Flight Cancellations](/scorecard-77148/measures/measure-542407.md)
- [Customer Support Calls](/scorecard-77149/measures/measure-542408.md)
