---
type: Measure
title: "% of population served within 25 miles"
resource: clearpoint://scorecard/77146/measure/423486
timestamp: 2020-03-26T18:17:11.577Z
cps:
  object: measure
  objectId: 423486
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: clearpoint://scorecard/77147/measure/423506
      object: measure
      objectId: 423506
      name: "% of population served within 25 miles"
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://scorecard/77148/measure/423519
      object: measure
      objectId: 423519
      name: "% of population served within 15 miles"
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
    historyResource: /data/of-population-served-within-25-miles-423486-periods.json
  provenance:
    scorecard:
      id: 77146
      name: Upward Airlines Corporate
    owner:
      name: Donald Duff
      userId: 24965
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2020-03-26T18:17:11.577Z
  customFields:
    - fieldId: custom97772
      name: Variance Report
      fieldType: text
      value: This metric is doing well and is surpassing expectations!
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
      - name: "% Not Served"
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
          decimal: .
          thousand: ","
    dataResource: /data/of-population-served-within-25-miles-423486.json
---

**Actual** — 35 (Dec-25) · trend [35, 34, 36, 37, 36, 35]

## Status — Q4-25 (Above Target)

## Status — Q3-25 (Above Target)

## Status — Q3-25 (Above Target)

## Status — Q3-25 (Above Target)
