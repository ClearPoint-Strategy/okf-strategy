---
type: Measure
title: Net Profit
description: Great job team! Keep it up for next quarter.
resource: clearpoint://scorecard/77146/measure/423481
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
      to: /upward-airlines-corporate/measures/revenue-423496.md
      object: measure
      objectId: 423496
      name: Revenue
      scorecard: Upward Airlines Corporate
      access: Administrator
    - fieldId: measures
      to: /upward-airlines-corporate/measures/expenses-423497.md
      object: measure
      objectId: 423497
      name: Expenses
      scorecard: Upward Airlines Corporate
      access: Administrator
    - fieldId: measures
      to: /eastern-division/measures/net-profit-423505.md
      object: measure
      objectId: 423505
      name: Net Profit
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: /central-division/measures/net-profit-423518.md
      object: measure
      objectId: 423518
      name: Net Profit
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: /western-division/measures/net-profit-423529.md
      object: measure
      objectId: 423529
      name: Net Profit
      scorecard: 🏜️ Western Division
      access: Administrator
  time:
    cadence: monthly
    periodGroupId: 9722
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: 2025-12-31
      statusId: 18580
      status: Below Plan
    historyResource: /upward-airlines-corporate/data/net-profit-423481-periods.json
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
    dataResource: /upward-airlines-corporate/data/net-profit-423481.json
---

Great job team! Keep it up for next quarter.

## Related

- [Revenue](/upward-airlines-corporate/measures/revenue-423496.md)
- [Expenses](/upward-airlines-corporate/measures/expenses-423497.md)
- [Net Profit](/eastern-division/measures/net-profit-423505.md)
- [Net Profit](/central-division/measures/net-profit-423518.md)
- [Net Profit](/western-division/measures/net-profit-423529.md)

**Actual** — -0.17513135 (Dec-25) · trend [-6.69776741, -10.71428571, 8.85714286, 6.85314685, -3.79825654, -0.17513135]

## Status — Dec-25 (Below Plan)

**Analysis.** Due to slightly lower revenue and slightly higher expenses than projected, our net profit was below where we'd hoped to be.

**Recommendations.** We'll need to more tightly control expenses and increase efforts to up revenue.

## Status — Nov-25 (Below Plan)

## Status — Oct-25 (Above Target)

## Status — Sep-25 (Above Target)
