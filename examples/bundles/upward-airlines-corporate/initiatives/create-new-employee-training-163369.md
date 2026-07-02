---
type: Initiative
title: Create new Employee Training
description: Our current employee training program only covered one type of
  aircraft. Now that we have conducted several mergers, we need to train on
  multiple types of equipment as well as align the culture in the organization.
resource: clearpoint://district/cps-air/scorecard/77146/initiative/163369
timestamp: 2025-11-25T19:55:46.387Z
cps:
  object: initiative
  objectId: 163369
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Program
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: /measures/customer-experience-survey-423482.md
      object: measure
      objectId: 423482
      name: Customer Experience Survey
      scorecard: Upward Airlines Corporate
      access: Administrator
    - fieldId: measures
      to: /measures/total-amount-of-time-at-gate-423485.md
      object: measure
      objectId: 423485
      name: Total amount of time at gate
      scorecard: Upward Airlines Corporate
      access: Administrator
    - fieldId: initiatives
      to: clearpoint://district/cps-air/scorecard/77147/initiative/163373
      object: initiative
      objectId: 163373
      name: Create Upskilling for Employees
      scorecard: 🌐 Eastern Division
      access: Administrator
    - fieldId: initiatives
      to: clearpoint://district/cps-air/scorecard/77149/initiative/163380
      object: initiative
      objectId: 163380
      name: Build Employee Upskilling
      scorecard: 🏜️ Western Division
      access: Administrator
  time:
    cadence: quarterly
    periodGroupId: 9723
    currentPeriod:
      periodId: 256614
      period: May 2026
      periodDate: 2026-05-31
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
      at: 2025-11-25T19:55:46.387Z
  customFields:
    - fieldId: custom49307
      name: Budget
      fieldType: text
      value: $20,000
    - fieldId: custom107496
      name: Level of Effort
      fieldType: picklist
      value: 2. Medium
    - fieldId: custom107497
      name: Level of Impact
      fieldType: picklist
      value: 3. High
    - fieldId: custom107498
      name: Priority
      fieldType: picklist
      value: 2. Medium
    - fieldId: custom136389
      name: Project Request Status
      fieldType: picklist
      value: " Approved"
    - fieldId: custom136390
      name: Requester
      fieldType: user
      value: "24975.0000"
    - fieldId: custom166733
      name: Budget
      fieldType: currency
      value: "20000.0000"
    - fieldId: custom197620
      name: Initiative Review
      fieldType: kanban
      value: under_review
  measure:
    series:
      - name: Actual
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
    dataResource: /data/create-new-employee-training-163369.json
---

Our current employee training program only covered one type of aircraft. Now that we have conducted several mergers, we need to train on multiple types of equipment as well as align the culture in the organization.

## Related

- [Customer Experience Survey](/measures/customer-experience-survey-423482.md)
- [Total amount of time at gate](/measures/total-amount-of-time-at-gate-423485.md)
