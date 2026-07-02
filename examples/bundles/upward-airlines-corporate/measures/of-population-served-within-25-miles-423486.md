---
type: Measure
title: "% of population served within 25 miles"
resource: clearpoint://district/cps-air/scorecard/77146/measure/423486
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
      to: clearpoint://district/cps-air/scorecard/77147/measure/423506
      object: measure
      objectId: 423506
      name: "% of population served within 25 miles"
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77148/measure/423519
      object: measure
      objectId: 423519
      name: "% of population served within 15 miles"
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

**Actual** — 34 (Q4-24) · trend [35, 36, 35, 37, 36, 34]

## Status — May 2026 (No Information)

## Status — Apr 2026 (No Information)
