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
      to: /eastern-division/measures/expenses-423508.md
      object: measure
      objectId: 423508
      name: Expenses
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: /central-division/measures/expenses-423521.md
      object: measure
      objectId: 423521
      name: Expenses
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: /western-division/measures/costs-423532.md
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
    historyResource: /upward-airlines-corporate/data/expenses-423497-periods.json
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
    dataResource: /upward-airlines-corporate/data/expenses-423497.json
---

Tracks the total amount of money spent within a defined period.

## Related

- [Expenses](/eastern-division/measures/expenses-423508.md)
- [Expenses](/central-division/measures/expenses-423521.md)
- [Costs](/western-division/measures/costs-423532.md)

**Actual** — 2855 (Dec-25) · trend [3001, 3472, 2800, 2860, 3212, 2855]

## Status — Dec-25 (Above Target)

**Analysis.** Over the past 8 months we have done an exceptional job of meeting our goal of keeping our expenses below target. I added the "Actual as % of Target" series to understand this better. We are doing well overall!

**Recommendations.** We must continue on our current course of managing our expenses closely. This policy is currently paying off in our bottom line and will continue to pay off, especially if we occasionally miss our revenue targets.

## Status — Nov-25 (Below Plan)

## Status — Oct-25 (Above Target)

## Status — Sep-25 (Above Target)
