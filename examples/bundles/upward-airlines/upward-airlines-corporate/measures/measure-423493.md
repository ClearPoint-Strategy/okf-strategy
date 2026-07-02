---
type: Measure
title: Average Wage
resource: clearpoint://scorecard/77146/measure/423493
timestamp: 2020-03-26T18:17:11.467Z
cps:
  object: measure
  objectId: 423493
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: /eastern-division/measures/measure-423504.md
      object: measure
      objectId: 423504
      name: Wage Growth
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: /central-division/measures/measure-423517.md
      object: measure
      objectId: 423517
      name: "% increase in employee wages"
      scorecard: 🎯 Central Division
      access: Administrator
  time:
    cadence: quarterly
    periodGroupId: 9723
    currentPeriod:
      periodId: 189846
      period: Dec-25
      periodDate: 2025-12-31
      statusId: 18578
      status: Above Target
  provenance:
    owner:
      name: Steve Smith
      userId: 24973
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2020-03-26T18:17:11.467Z
  measure:
    series:
      - name: Avg. Wage / Hr
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
      - name: Target
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
    dataResource: /upward-airlines-corporate/data/measure-423493.json
---

## Related

- [Wage Growth](/eastern-division/measures/measure-423504.md)
- [% increase in employee wages](/central-division/measures/measure-423517.md)

**Avg. Wage / Hr** — 54 (Dec-25) · trend [55, 52, 53, 51, 53, 54]

**Status history.** Q4-25: Above Target · Q3-25: Above Target · Q3-25: Above Target · Q3-25: Above Target
