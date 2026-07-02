---
type: Measure
title: "# customer complaints per 1,000 tickets"
resource: clearpoint://district/cps-air/scorecard/77146/measure/423488
timestamp: 2017-11-21T15:01:56.833Z
cps:
  object: measure
  objectId: 423488
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77148/measure/542407
      object: measure
      objectId: 542407
      name: Flight Cancellations
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77149/measure/542408
      object: measure
      objectId: 542408
      name: Customer Support Calls
      scorecard: 🏜️ Western Division
      access: Administrator
  time:
    cadence: annual
    periodGroupId: 9724
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
      name: Clarice Strong
      userId: 24944
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2017-11-21T15:01:56.833Z
  measure:
    series:
      - name: Actual
        seriesDataTypeId: 5
        numberFormat:
          precision: 2
          decimal: .
          thousand: ","
      - name: Target
        seriesDataTypeId: 5
        numberFormat:
          precision: 2
          decimal: .
          thousand: ","
    dataResource: /data/customer-complaints-per-1-000-tickets-423488.json
---

**Actual** — 9 (2024) · trend [6, 9, 8, 9]

## Status — May 2026 (Below Plan)

## Status — Apr 2026 (Below Plan)
