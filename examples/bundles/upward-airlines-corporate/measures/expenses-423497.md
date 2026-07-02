---
type: Measure
title: Expenses
description: Tracks the total amount of money spent within a defined period.
resource: clearpoint://scorecard/77146/measure/423497
tags:
  - theme:financials
timestamp: 2025-12-18T01:53:35.560Z
cps:
  object: measure
  objectId: 423497
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: clearpoint://scorecard/77147/measure/423508
      object: measure
      objectId: 423508
      name: Expenses
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://scorecard/77148/measure/423521
      object: measure
      objectId: 423521
      name: Expenses
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://scorecard/77149/measure/423532
      object: measure
      objectId: 423532
      name: Costs
      scorecard: 🏜️ Western Division
      access: Administrator
  time:
    cadence: monthly
    periodGroupId: 9722
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: 2025-12-31
      statusId: 18578
      status: Above Target
  provenance:
    scorecard:
      id: 77146
      name: Upward Airlines Corporate
    owner:
      name: James Crockett
      userId: 24960
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2025-12-18T01:53:35.560Z
  customFields:
    - fieldId: custom97772
      name: Variance Report
      fieldType: text
      value: We're looking more into why this metric was not met. In the meantime,
        we're encouraging employees to limit overhead spending.
    - fieldId: custom278576
      name: Custom HTML Tables
      fieldType: html
      value: Top left Top middle Top right Bottom left Bottom middle Bottom right
  measure:
    series:
      - name: Actual
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
      - name: Target
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
      - name: Variance
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
      - name: "% of Target"
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
          decimal: .
          thousand: ","
    dataResource: /data/expenses-423497.json
---

Tracks the total amount of money spent within a defined period.

**Actual** — 2855 (Dec-25) · trend [3001, 3472, 2800, 2860, 3212, 2855]

## Status — Dec-25 (Above Target)

## Status — Nov-25 (Below Plan)

## Status — Oct-25 (Above Target)

## Status — Sep-25 (Above Target)
