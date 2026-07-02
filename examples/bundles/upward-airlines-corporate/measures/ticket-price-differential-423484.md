---
type: Measure
title: Ticket price differential
resource: clearpoint://district/cps-air/scorecard/77146/measure/423484
timestamp: 2020-03-27T15:35:28.310Z
cps:
  object: measure
  objectId: 423484
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77147/measure/423499
      object: measure
      objectId: 423499
      name: Ticket price differential
      scorecard: 🌐 Eastern Division
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
      name: Izzy Moreno
      userId: 24971
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2020-03-27T15:35:28.310Z
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
      - name: Industry
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
      - name: Differential vs. Target
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
      - name: Differential vs. Industry
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
    dataResource: /data/ticket-price-differential-423484.json
---

**Actual** — 81 (Q4-24) · trend [95, 82, 94, 86, 96, 81]

## Status — May 2026 (No Information)

## Status — Apr 2026 (No Information)
