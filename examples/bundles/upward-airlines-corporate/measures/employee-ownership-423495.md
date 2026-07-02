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
      to: clearpoint://scorecard/77148/measure/423516
      object: measure
      objectId: 423516
      name: "% of employees who see themselves at Upward for 5+ years"
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://scorecard/77148/measure/423517
      object: measure
      objectId: 423517
      name: "% increase in employee wages"
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://scorecard/77149/measure/423527
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
    historyResource: /data/employee-ownership-423495-periods.json
  provenance:
    scorecard:
      id: 77146
      name: Upward Airlines Corporate
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
          decimal: .
          thousand: ","
      - name: Target
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
          decimal: .
          thousand: ","
      - name: Outside Investors
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
          decimal: .
          thousand: ","
    dataResource: /data/employee-ownership-423495.json
---

**Employee Ownership** — 30 (Dec-25) · trend [27, 29, 29, 30]

## Status — Q4-25 (Above Target)
