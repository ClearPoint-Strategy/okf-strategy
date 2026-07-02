---
type: Measure
title: Net Profit
description: Great job team! Keep it up for next quarter.
resource: clearpoint://district/cps-air/scorecard/77146/measure/423481
tags:
  - theme:financials
timestamp: 2025-05-05T19:57:15.107Z
cps:
  object: measure
  objectId: 423481
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: /measures/revenue-423496.md
      object: measure
      objectId: 423496
      name: Revenue
      scorecard: Upward Airlines Corporate
      access: Administrator
    - fieldId: measures
      to: /measures/expenses-423497.md
      object: measure
      objectId: 423497
      name: Expenses
      scorecard: Upward Airlines Corporate
      access: Administrator
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77147/measure/423505
      object: measure
      objectId: 423505
      name: Net Profit
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77148/measure/423518
      object: measure
      objectId: 423518
      name: Net Profit
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77149/measure/423529
      object: measure
      objectId: 423529
      name: Net Profit
      scorecard: 🏜️ Western Division
      access: Administrator
  time:
    cadence: monthly
    periodGroupId: 9722
    currentPeriod:
      periodId: 256614
      period: May 2026
      periodDate: 2026-05-31
      statusId: 18580
      status: Below Plan
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
      at: 2025-05-05T19:57:15.107Z
  customFields:
    - fieldId: custom97772
      name: Variance Report
      fieldType: text
      value: Net profit is behind due to expenses and revenue lagging behind. When we
        bring these two metrics up, we will see this increase as well.
  measure:
    series:
      - name: Actual
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
          decimal: .
          thousand: ","
      - name: Target
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
          decimal: .
          thousand: ","
    dataResource: /data/net-profit-423481.json
---

Great job team! Keep it up for next quarter.

## Related

- [Revenue](/measures/revenue-423496.md)
- [Expenses](/measures/expenses-423497.md)

**Actual** — -0.17513135 (Dec-25) · trend [-6.69776741, -10.71428571, 8.85714286, 6.85314685, -3.79825654, -0.17513135]

## Status — May 2026 (Below Plan)

## Status — Apr 2026 (Below Plan)
