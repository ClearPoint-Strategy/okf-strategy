---
type: Measure
title: Average Wage
resource: clearpoint://district/cps-air/scorecard/77146/measure/423493
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
      to: clearpoint://district/cps-air/scorecard/77147/measure/423504
      object: measure
      objectId: 423504
      name: Wage Growth
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77148/measure/423517
      object: measure
      objectId: 423517
      name: "% increase in employee wages"
      scorecard: 🎯 Central Division
      access: Administrator
  time:
    cadence: quarterly
    periodGroupId: 9723
    currentPeriod:
      periodId: 256614
      period: May 2026
      periodDate: 2026-05-31
      statusId: 18581
      status: No Information
  provenance:
    scorecard:
      id: 77146
      name: Upward Airlines Corporate
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
          decimal: .
          thousand: ","
      - name: Target
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
    dataResource: /data/average-wage-423493.json
---

**Avg. Wage / Hr** — 52 (Q4-24) · trend [55, 53, 54, 51, 53, 52]

## Status — May 2026 (No Information)

## Status — Apr 2026 (No Information)
