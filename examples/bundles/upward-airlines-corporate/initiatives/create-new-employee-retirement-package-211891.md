---
type: Initiative
title: Create new employee retirement package
resource: clearpoint://district/cps-air/scorecard/77146/initiative/211891
timestamp: 2025-02-26T15:17:45.880Z
cps:
  object: initiative
  objectId: 211891
  scorecardId: 77146
  scorecard: Upward Airlines Corporate
  alias: Program
  access:
    minCapability: Administrator
    markings:
      - scorecard:77146
  edges:
    - fieldId: measures
      to: /measures/unionized-job-descriptions-423494.md
      object: measure
      objectId: 423494
      name: "# Unionized job descriptions"
      scorecard: Upward Airlines Corporate
      access: Administrator
    - fieldId: initiatives
      to: clearpoint://district/cps-air/scorecard/77147/initiative/163372
      object: initiative
      objectId: 163372
      name: Create New Employee Satisfaction Survey
      scorecard: 🌐 Eastern Division
      access: Administrator
  time:
    cadence: default
    periodGroupId: -1
    currentPeriod:
      periodId: 256614
      period: May 2026
      periodDate: 2026-05-31
  provenance:
    scorecard:
      id: 77146
      name: Upward Airlines Corporate
    owner:
      name: James Crockett
      userId: 24960
    lastEditedBy:
      name: Clarice Strong
      userId: 24944
      at: 2025-02-26T15:17:45.880Z
  customFields:
    - fieldId: custom49307
      name: Budget
      fieldType: text
      value: $300,000
    - fieldId: custom107496
      name: Level of Effort
      fieldType: picklist
      value: 2. Medium
    - fieldId: custom107497
      name: Level of Impact
      fieldType: picklist
      value: 1. Low
    - fieldId: custom107498
      name: Priority
      fieldType: picklist
      value: 1. Low
    - fieldId: custom136389
      name: Project Request Status
      fieldType: picklist
      value: Submitted
    - fieldId: custom136390
      name: Requester
      fieldType: user
      value: "24965.0000"
    - fieldId: custom166733
      name: Budget
      fieldType: currency
      value: "300000.0000"
  measure:
    series:
      - name: Actual
        seriesDataTypeId: 4
        numberFormat:
          precision: 2
          symbol: $
          decimal: .
          thousand: ","
    dataResource: /data/create-new-employee-retirement-package-211891.json
---

## Related

- [# Unionized job descriptions](/measures/unionized-job-descriptions-423494.md)
