---
type: Measure
title: Maintenance cost per 100K miles
resource: clearpoint://district/cps-air/scorecard/77146/measure/423491
timestamp: 2025-05-05T19:57:15.627Z
cps:
  object: measure
  objectId: 423491
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
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
      name: Janice Jones
      userId: 24967
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2025-05-05T19:57:15.627Z
  customFields:
    - fieldId: custom97772
      name: Variance Report
      fieldType: text
      value: The weather in the eastern region has hurt us here. We're looking to
        mitigate costs.
  measure:
    series:
      - name: Maintenance Cost
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
      - name: "% of Target"
        seriesDataTypeId: 6
        numberFormat:
          precision: 2
          symbol: "%"
          decimal: .
          thousand: ","
    dataResource: /data/maintenance-cost-per-100k-miles-423491.json
---

**Maintenance Cost** — 17220 (Dec-25) · trend [16660, 16200, 15500, 15680, 17550, 17220]

## Status — May 2026 (Below Plan)

## Status — Apr 2026 (Below Plan)
