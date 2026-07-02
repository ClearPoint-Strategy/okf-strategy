---
type: Measure
title: Revenue
description: We are measuring our total revenues for the company.
resource: clearpoint://district/cps-air/scorecard/77146/measure/423496
tags:
  - theme:financials
timestamp: 2025-04-10T13:21:24.063Z
cps:
  object: measure
  objectId: 423496
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Measure
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77147/measure/423507
      object: measure
      objectId: 423507
      name: Income
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77148/measure/423520
      object: measure
      objectId: 423520
      name: Revenue
      scorecard: 🎯 Central Division
      access: Administrator
    - fieldId: measures
      to: clearpoint://district/cps-air/scorecard/77149/measure/423531
      object: measure
      objectId: 423531
      name: Revenue
      scorecard: 🏜️ Western Division
      access: Administrator
  time:
    cadence: monthly
    periodGroupId: 9722
    currentPeriod:
      periodId: 256614
      period: May 2026
      periodDate: 2026-05-31
      statusId: 18578
      status: Above Target
  provenance:
    scorecard:
      id: 77146
      name: Upward Airlines Corporate
    owner:
      name: Clarice Strong
      userId: 24944
    lastEditedBy:
      name: Ted Jackson
      userId: 24943
      at: 2025-04-10T13:21:24.063Z
  customFields:
    - fieldId: custom97772
      name: Variance Report
      fieldType: text
      value: This metric should be back on schedule by next month, as our initiatives
        are going well.
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
      - name: Variance
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
    dataResource: /data/revenue-423496.json
---

We are measuring our total revenues for the company.

**Actual** — 3000 (May-26) · trend [2850, 2100, 2100, 3200, 3100, 3000]

## Status — May 2026 (Above Target)

## Status — Apr 2026 (Above Target)
