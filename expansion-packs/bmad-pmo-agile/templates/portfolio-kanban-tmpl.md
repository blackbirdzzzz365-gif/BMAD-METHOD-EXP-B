# Portfolio Kanban Template

## Portfolio Kanban Overview
```yaml
portfolio_kanban:
  name: "{{portfolio_name}} Portfolio"
  value_streams: ["{{stream_1}}", "{{stream_2}}", "{{stream_3}}"]
  investment_themes: ["{{theme_1}}", "{{theme_2}}", "{{theme_3}}"]
  review_cadence: "{{frequency}}"
  last_updated: "{{date}}"
  portfolio_manager: "{{name}}"
```

## Portfolio Kanban Board

```markdown
┌──────────┬────────────┬────────────┬──────────────┬────────────┬────────┐
│  FUNNEL  │ REVIEWING  │ ANALYZING  │   BACKLOG    │ EXECUTING  │  DONE  │
│  (∞)     │  (WIP: 6)  │  (WIP: 4)  │  (WIP: 10)   │ (WIP: 5)   │  (∞)   │
├──────────┼────────────┼────────────┼──────────────┼────────────┼────────┤
│ Epic-101 │ Epic-087   │ Epic-078   │ Epic-065     │ Epic-045   │Epic-001│
│ {{name}} │ {{name}}   │ {{name}}   │ {{name}}     │ {{name}}   │{{name}}│
│ ${{est}} │ ${{est}}   │ ${{est}}   │ ${{budget}}  │ {{prog}}%  │✓ {{roi}}│
│          │            │            │              │            │        │
│ Epic-102 │ Epic-089   │ Epic-081   │ Epic-067     │ Epic-048   │Epic-003│
│ {{name}} │ {{name}}   │ {{name}}   │ {{name}}     │ {{name}}   │{{name}}│
│ ${{est}} │ ${{est}}   │ ${{est}}   │ ${{budget}}  │ {{prog}}%  │✓ {{roi}}│
│          │            │            │              │            │        │
│ Epic-103 │            │            │ Epic-071     │ Epic-052   │Epic-005│
│ {{name}} │            │            │ {{name}}     │ {{name}}   │{{name}}│
│ ${{est}} │            │            │ ${{budget}}  │ {{prog}}%  │✓ {{roi}}│
└──────────┴────────────┴────────────┴──────────────┴────────────┴────────┘

Total WIP: {{current}}/{{limit}} | Investment: ${{total}}M | Throughput: {{epics}}/quarter
```

## Epic Lifecycle States

### 1. Funnel State
```markdown
## Epic in Funnel
- **Entry Criteria:**
  - [ ] Initial idea captured
  - [ ] Strategic theme alignment checked
  - [ ] Sponsor identified
  - [ ] Rough order magnitude (ROM) estimate

- **Activities:**
  - Lightweight documentation
  - Initial feasibility check
  - Strategic alignment review

- **Exit Criteria:**
  - [ ] Sponsor commitment
  - [ ] Move to Reviewing
  - [ ] Or archive/reject

- **Typical Duration:** No limit
- **WIP Limit:** None
```

### 2. Reviewing State
```markdown
## Epic in Reviewing
- **Entry Criteria:**
  - [ ] Sponsor assigned
  - [ ] Strategic value confirmed
  - [ ] Initial sizing (<$5M, $5-20M, >$20M)

- **Activities:**
  - Elevator pitch creation
  - Preliminary business case
  - High-level solution options
  - Initial risk assessment

- **Exit Criteria:**
  - [ ] Go/No-Go decision
  - [ ] Epic owner assigned
  - [ ] Move to Analyzing

- **Typical Duration:** 1-2 weeks
- **WIP Limit:** 6 epics
```

### 3. Analyzing State
```markdown
## Epic in Analyzing
- **Entry Criteria:**
  - [ ] Epic owner assigned
  - [ ] Preliminary approval
  - [ ] Analysis budget approved

- **Activities:**
  - Detailed business case
  - Solution architecture
  - Implementation approach
  - Refined estimates
  - Success metrics defined

- **Exit Criteria:**
  - [ ] LPM approval
  - [ ] Funding approved
  - [ ] Move to Backlog

- **Typical Duration:** 2-4 weeks
- **WIP Limit:** 4 epics
```

### 4. Portfolio Backlog State
```markdown
## Epic in Backlog
- **Entry Criteria:**
  - [ ] Business case approved
  - [ ] Funding allocated
  - [ ] Priority established
  - [ ] Epic decomposed to features

- **Activities:**
  - WSJF prioritization
  - Capacity allocation
  - Dependency coordination
  - Release planning

- **Exit Criteria:**
  - [ ] ART capacity available
  - [ ] Dependencies resolved
  - [ ] Move to Executing

- **Typical Duration:** Variable
- **WIP Limit:** 10 epics
```

### 5. Executing State
```markdown
## Epic in Executing
- **Entry Criteria:**
  - [ ] ART committed
  - [ ] PI planning completed
  - [ ] Teams assigned

- **Activities:**
  - Feature development
  - Incremental delivery
  - Progress tracking
  - Value measurement

- **Exit Criteria:**
  - [ ] MVP delivered
  - [ ] Success criteria met
  - [ ] Move to Done

- **Typical Duration:** 1-4 PIs
- **WIP Limit:** 5 epics
```

### 6. Done State
```markdown
## Epic Done
- **Entry Criteria:**
  - [ ] All features complete
  - [ ] Success metrics achieved
  - [ ] Value validated

- **Activities:**
  - Benefits realization
  - Lessons learned
  - Success celebration
  - ROI tracking

- **Measurement:**
  - Actual vs planned cost
  - Actual vs planned duration
  - Actual vs planned value
  - Customer satisfaction

- **Duration:** Archived
- **WIP Limit:** None
```

## Epic Card Template

```markdown
┌─────────────────────────────────────────┐
│ EPIC-{{number}}: {{epic_title}}         │
├─────────────────────────────────────────┤
│ Strategic Theme: {{theme}}              │
│ Value Stream: {{value_stream}}          │
│ Sponsor: {{sponsor_name}}               │
│ Epic Owner: {{owner_name}}              │
├─────────────────────────────────────────┤
│ Business Outcome:                       │
│ {{outcome_description}}                 │
├─────────────────────────────────────────┤
│ Investment Request: ${{amount}}M        │
│ Duration Estimate: {{duration}} PIs     │
│ Teams Required: {{team_count}}          │
├─────────────────────────────────────────┤
│ WSJF Score: {{score}}                   │
│ • Business Value: {{bv_score}}          │
│ • Time Criticality: {{tc_score}}       │
│ • Risk/Opportunity: {{ro_score}}       │
│ • Job Size: {{size}}                   │
├─────────────────────────────────────────┤
│ Key Milestones:                         │
│ • {{milestone_1}}: {{date}}             │
│ • {{milestone_2}}: {{date}}             │
│ • {{milestone_3}}: {{date}}             │
├─────────────────────────────────────────┤
│ Status: {{current_state}}               │
│ Progress: {{percentage}}%               │
│ Health: {{🟢/🟡/🔴}}                    │
└─────────────────────────────────────────┘
```

## Lightweight Business Case Template

```markdown
# Epic Business Case: {{epic_title}}

## Executive Summary
{{1-2_paragraph_summary}}

## Opportunity/Problem Statement
- **Current State:** {{current_situation}}
- **Problem/Opportunity:** {{description}}
- **Impact if Not Addressed:** {{consequences}}

## Proposed Solution
- **Approach:** {{solution_overview}}
- **Key Features:** 
  1. {{feature_1}}
  2. {{feature_2}}
  3. {{feature_3}}

## Expected Business Outcomes
| Outcome | Metric | Current | Target | By When |
|---------|--------|---------|--------|---------|
| {{outcome_1}} | {{metric}} | {{current}} | {{target}} | {{date}} |
| {{outcome_2}} | {{metric}} | {{current}} | {{target}} | {{date}} |

## Financial Analysis
- **Investment Required:** ${{amount}}M
- **Expected Return:** ${{return}}M
- **ROI:** {{roi_percentage}}%
- **Payback Period:** {{months}} months

## Implementation Approach
- **Duration:** {{number}} PIs
- **Teams Required:** {{teams}}
- **Key Dependencies:** {{dependencies}}
- **Major Risks:** {{risks}}

## Success Criteria
1. {{criterion_1}}
2. {{criterion_2}}
3. {{criterion_3}}

## Decision Requested
[ ] Approve and fund
[ ] Approve with modifications
[ ] Request more analysis
[ ] Reject
```

## Portfolio Metrics Dashboard

### Flow Metrics
```markdown
Portfolio Flow Metrics - {{quarter}}

Epic Flow Velocity: {{count}} epics/quarter
┌────────────────────────────────────┐
│ Q1: ████ 4 epics                   │
│ Q2: ██████ 6 epics                 │
│ Q3: █████ 5 epics                  │
│ Q4: ███████ 7 epics (projected)    │
└────────────────────────────────────┘

Epic Cycle Time Distribution:
• 50th percentile: {{months}} months
• 85th percentile: {{months}} months
• 95th percentile: {{months}} months

Epic Flow Efficiency: {{percentage}}%
Active Time: ████████ {{active}}%
Wait Time: ██ {{wait}}%
```

### Investment Distribution
```markdown
Strategic Theme Investment - {{year}}

Theme 1: {{name}} ████████████ {{percentage}}% (${{amount}}M)
Theme 2: {{name}} ████████ {{percentage}}% (${{amount}}M)
Theme 3: {{name}} ██████ {{percentage}}% (${{amount}}M)
Innovation: ████ {{percentage}}% (${{amount}}M)

Total Portfolio Investment: ${{total}}M
Committed: ${{committed}}M | Available: ${{available}}M
```

### Portfolio Performance
```markdown
## Portfolio Scorecard - {{period}}

| Metric | Target | Actual | Status |
|--------|--------|---------|---------|
| Epics Delivered | {{target}} | {{actual}} | {{🟢/🟡/🔴}} |
| Value Delivered | ${{target}}M | ${{actual}}M | {{🟢/🟡/🔴}} |
| Average ROI | {{target}}% | {{actual}}% | {{🟢/🟡/🔴}} |
| On-Time Delivery | {{target}}% | {{actual}}% | {{🟢/🟡/🔴}} |
| Budget Variance | <{{target}}% | {{actual}}% | {{🟢/🟡/🔴}} |
```

## Portfolio Review Meeting Template

### Agenda
```markdown
## Portfolio Sync - {{date}}

### 1. Metrics Review (15 min)
- Flow metrics
- Investment distribution  
- Performance scorecard

### 2. Epics in Flight (30 min)
For each executing epic:
- Progress update
- Risks and issues
- Upcoming milestones
- Help needed

### 3. Backlog Review (20 min)
- WSJF reprioritization
- New epics consideration
- Capacity planning

### 4. Strategic Alignment (15 min)
- Theme performance
- Market changes
- Strategy adjustments

### 5. Decisions & Actions (10 min)
- Approvals needed
- Action items
- Next review date
```

## Strategic Guardrails

### Investment Guardrails
```markdown
## Portfolio Investment Guardrails

### Capacity Allocation
- Strategic Theme 1: {{min}}% - {{max}}%
- Strategic Theme 2: {{min}}% - {{max}}%
- Strategic Theme 3: {{min}}% - {{max}}%
- Innovation/Emerging: {{percentage}}%

### Approval Thresholds
| Investment Size | Approval Level | Review Process |
|----------------|----------------|----------------|
| <${{amount}}M | Portfolio Manager | Lightweight |
| ${{min}}-{{max}}M | LPM Committee | Standard |
| >${{amount}}M | Executive Committee | Comprehensive |

### Epic Guardrails
- Maximum epic duration: {{number}} PIs
- Maximum epic investment: ${{amount}}M
- Minimum ROI threshold: {{percentage}}%
- Maximum WIP: {{number}} epics
```

## Participatory Budgeting Template

```markdown
## Annual Portfolio Budget Planning

### Total Portfolio Budget: ${{total}}M

### Strategic Theme Allocation
| Theme | Proposed | Teams Input | Final | Rationale |
|-------|----------|-------------|-------|-----------|
| {{theme_1}} | ${{amount}}M | ${{amount}}M | ${{amount}}M | {{reason}} |
| {{theme_2}} | ${{amount}}M | ${{amount}}M | ${{amount}}M | {{reason}} |
| {{theme_3}} | ${{amount}}M | ${{amount}}M | ${{amount}}M | {{reason}} |
| Innovation | ${{amount}}M | ${{amount}}M | ${{amount}}M | {{reason}} |

### Value Stream Budgets
| Value Stream | Budget | Epics Planned | Teams |
|--------------|--------|---------------|-------|
| {{stream_1}} | ${{amount}}M | {{count}} | {{count}} |
| {{stream_2}} | ${{amount}}M | {{count}} | {{count}} |
| {{stream_3}} | ${{amount}}M | {{count}} | {{count}} |

### Budget Review Triggers
- [ ] Quarterly review scheduled
- [ ] >20% variance trigger
- [ ] Strategic shift trigger
- [ ] Market disruption trigger
```

---

*Portfolio Kanban enables strategy execution through visual management and lean governance*