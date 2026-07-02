---
type: Measure
title: "% employee ownership"
resource: clearpoint://scorecard/77146/measure/423495
timestamp: 2021-08-23T17:29:51.210Z
cps:
  object: measure
  objectId: 423495
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: /central-division/measures/measure-423516.md
      object: measure
      objectId: 423516
      name: "% of employees who see themselves at Upward for 5+ years"
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: /central-division/measures/measure-423517.md
      object: measure
      objectId: 423517
      name: "% increase in employee wages"
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: /western-division/measures/measure-423527.md
      object: measure
      objectId: 423527
      name: "% of highly satisified employees"
      scorecard: 🏜️ Western Division
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
      name: Greg Garcia
      userId: 24966
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2021-08-23T17:29:51.210Z
  measure:
    series:
      - name: Employee Ownership
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
      - name: Target
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
      - name: Outside Investors
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
    dataResource: /upward-airlines-corporate/data/measure-423495-series.json
---

## Measures

- [% of employees who see themselves at Upward for 5+ years](/central-division/measures/measure-423516.md)
- [% increase in employee wages](/central-division/measures/measure-423517.md)
- [% of highly satisified employees](/western-division/measures/measure-423527.md)

**Employee Ownership** — 30 (Dec-25) · trend [27, 29, 29, 30]

**Status history.** Q4-25: Above Target
