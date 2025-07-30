# Agile Metrics Dashboard Template

## Dashboard Overview
```yaml
dashboard:
  name: "{{team_or_program_name}} Agile Metrics"
  period: "{{start_date}} - {{end_date}}"
  last_updated: "{{timestamp}}"
  owner: "{{metrics_analyst_name}}"
  audience: "{{team/program/portfolio}}"
```

## Executive Summary Dashboard

```markdown
┌─────────────────────────────────────────────────────────────────────────┐
│                        AGILE METRICS DASHBOARD                          │
├─────────────────┬────────────────┬────────────────┬───────────────────┤
│    VELOCITY     │  PREDICTABILITY │    QUALITY     │   SATISFACTION    │
│   ↑ {{vel}}     │    {{pred}}%    │  ↓ {{defects}} │    {{score}}/5    │
│  {{trend}}      │   {{trend}}     │   {{trend}}    │    {{trend}}      │
└─────────────────┴────────────────┴────────────────┴───────────────────┘
```

## Team-Level Metrics

### Sprint Velocity Chart
```markdown
Sprint Velocity (Story Points)
│
50 ├─────────────────────────────────────●───── Target: {{target}}
45 ├─────────────────────────●───●───●
40 ├─────────────●───●───●───────────────────── Rolling Avg: {{avg}}
35 ├─────●───●
30 ├─●
25 ├
20 ├
   └─┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───
     S1  S2  S3  S4  S5  S6  S7  S8  S9  S10

Committed: ■ Completed: ● Rolling Average: ─────
```

### Sprint Burndown
```markdown
Sprint {{number}} Burndown
Points
│
{{total}} ├─●
          │   ●───────── Ideal
          │     ●       burndown
          │       ●
          │    ▲    ●
          │      ▲    ●
          │   Actual ▲   ●
          │           ▲    ●
        0 └────────────▲────●
          Day 1  3  5  7  9  10

Status: {{on_track/at_risk/behind}}
```

### Cycle Time Distribution
```markdown
Cycle Time (Days)
│
│ 25% ████████ 2.5 days
│ 50% ████████████████ 4 days (median)
│ 75% ████████████████████ 5 days
│ 85% ████████████████████████ 6 days
│ 95% ████████████████████████████ 7 days
│
└─────────────────────────────────────────
  0    2    4    6    8    10   12   14

Average: {{avg}} days | Target: <{{target}} days
```

### Flow Metrics

#### Cumulative Flow Diagram
```markdown
Items
│                                    ████ Done
│                              ██████████
│                        ████████████████ Testing
│                  ██████████████████████
│            ████████████████████████████ In Progress
│      ██████████████████████████████████
│████████████████████████████████████████ Backlog
└────────────────────────────────────────
 Week 1   2   3   4   5   6   7   8   9

WIP Limit: {{limit}} | Current WIP: {{current}}
```

#### Flow Efficiency
```markdown
Flow Efficiency: {{efficiency}}%

Active Time:  ████████████ {{active}}%
Wait Time:    ████ {{wait}}%

Industry Avg: 15% | Target: >40% | Current: {{current}}%
```

### Quality Metrics

#### Defect Metrics
```markdown
Defects by Sprint
│
10├─█
8 ├─█ █
6 ├─█ █ █       █
4 ├─█ █ █ █   █ █
2 ├─█ █ █ █ █ █ █ █
0 └─┴─┴─┴─┴─┴─┴─┴─┴─
   S1 S2 S3 S4 S5 S6

Escaped to Production: ▓
Found in Sprint: █

Defect Density: {{defects_per_story_point}}
Escape Rate: {{escape_percentage}}%
```

#### Test Coverage
```markdown
Code Coverage Trend
│
100%├────────────────── Target
90% ├───────●───●───●
80% ├───●───────────── Current: {{coverage}}%
70% ├─●
60% ├
    └─┴───┴───┴───┴───
     S1  S2  S3  S4  S5

Unit Tests: {{unit}}% | Integration: {{integration}}% | E2E: {{e2e}}%
```

### Team Health Metrics

#### Team Happiness
```markdown
Team Happiness Index
│
5 ├─────────●───●───●
4 ├─●───●───────────── Average: {{avg}}/5
3 ├───────────────────
2 ├───────────────────
1 ├───────────────────
  └─┴───┴───┴───┴───┴─
   S1  S2  S3  S4  S5

Categories:
Work: {{score}}/5 | Team: {{score}}/5 | Tools: {{score}}/5 | Growth: {{score}}/5
```

## Program-Level Metrics (SAFe)

### Program Predictability
```markdown
PI Predictability Measure
│
100%├───────────────●─── Target: 80-100%
90% ├─────●─────●───────
80% ├──●────────────────  Current PI: {{current}}%
70% ├───────────────────
60% ├───────────────────
    └──┴──┴──┴──┴──┴──
      PI1 PI2 PI3 PI4 PI5

Business Value Delivered / Planned
```

### Feature Progress
```markdown
Feature Completion - PI {{number}}
                                          
Feature 1 ████████████████████ 100% ✓
Feature 2 ████████████████ 80%
Feature 3 ████████████ 60%
Feature 4 ████████ 40%
Feature 5 ████ 20%

Overall: {{overall_percentage}}% | On Track: {{count}} | At Risk: {{count}}
```

### Dependencies & Risks
```markdown
Dependencies Status         |  Risk Distribution (ROAM)
                           |
Resolved:  ████████ 40%    |  Resolved:  ████████ 40%
On Track:  ██████ 30%      |  Owned:     ██████ 30%
At Risk:   ████ 20%        |  Accepted:  ████ 20%
Blocked:   ██ 10%          |  Mitigated: ██ 10%

Total: {{dep_count}}       |  Total: {{risk_count}}
```

## Portfolio-Level Metrics

### Epic Progress
```markdown
Epic Burnup Chart
│
Value│                              ●●●●● Target
     │                         ●●●●●
     │                    ●●●●●
     │               ●●●●● 
     │          ●●●●●      Actual
     │     ●●●●●
     │●●●●●
     └────────────────────────────────
      Q1    Q2    Q3    Q4    Q5    Q6

Epics Complete: {{count}} | In Progress: {{count}} | Planned: {{count}}
```

### Investment Distribution
```markdown
Strategic Theme Allocation
                                          
Theme 1: Digital ████████████ 40% (${{amount}}M)
Theme 2: Growth  ████████ 30% (${{amount}}M)
Theme 3: Efficiency ████ 20% (${{amount}}M)
Innovation: ██ 10% (${{amount}}M)

Total Investment: ${{total}}M | ROI: {{roi}}%
```

### Flow Distribution
```markdown
Work Item Distribution (Last Quarter)

Features:     ████████████████ 65%
Defects:      ████ 15%
Risk Items:   ███ 12%
Tech Debt:    ██ 8%

Target: 70% Features | 15% Maintenance | 15% Innovation
```

## Trending Analysis

### Velocity Trend Analysis
```markdown
12-Sprint Velocity Trend
│
│     Increasing Trend ↗
│    ╱
│   ╱  R² = {{correlation}}
│  ╱   
│ ╱    Forecast: {{forecast}} pts
│╱     
└──────────────────────────
 Past                Future

Confidence Interval: {{low}} - {{high}}
```

### Lead Time Trend
```markdown
Lead Time by Month
│
Days │ ▼ 15% improvement
30   ├─█
25   ├─█─█
20   ├─█─█─█         Target
15   ├─█─█─█─█─────────────
10   ├─█─█─█─█─█─█
5    ├─█─█─█─█─█─█
     └─┴─┴─┴─┴─┴─┴─
      M1 M2 M3 M4 M5 M6

Feature: █ | Bug Fix: ▒ | Enhancement: ░
```

## Key Performance Indicators (KPIs)

### Team Level KPIs
| Metric | Current | Target | Trend | Status |
|--------|---------|--------|-------|--------|
| Velocity | {{current}} | {{target}} | {{↑↓→}} | {{🟢🟡🔴}} |
| Cycle Time | {{days}} | <{{target}} | {{↑↓→}} | {{🟢🟡🔴}} |
| Defect Rate | {{rate}}% | <{{target}}% | {{↑↓→}} | {{🟢🟡🔴}} |
| Test Coverage | {{coverage}}% | >{{target}}% | {{↑↓→}} | {{🟢🟡🔴}} |
| Team Health | {{score}}/5 | >4.0 | {{↑↓→}} | {{🟢🟡🔴}} |

### Program Level KPIs
| Metric | Current | Target | Trend | Status |
|--------|---------|--------|-------|--------|
| PI Predictability | {{current}}% | 80-100% | {{↑↓→}} | {{🟢🟡🔴}} |
| Feature Cycle Time | {{days}} | <{{target}} | {{↑↓→}} | {{🟢🟡🔴}} |
| Release Frequency | {{frequency}} | {{target}} | {{↑↓→}} | {{🟢🟡🔴}} |
| Dependencies Resolved | {{percent}}% | >90% | {{↑↓→}} | {{🟢🟡🔴}} |

### Portfolio Level KPIs
| Metric | Current | Target | Trend | Status |
|--------|---------|--------|-------|--------|
| Epic Cycle Time | {{months}} | <{{target}} | {{↑↓→}} | {{🟢🟡🔴}} |
| Value Delivered | ${{amount}}M | ${{target}}M | {{↑↓→}} | {{🟢🟡🔴}} |
| ROI | {{roi}}% | >{{target}}% | {{↑↓→}} | {{🟢🟡🔴}} |
| Strategic Alignment | {{percent}}% | >80% | {{↑↓→}} | {{🟢🟡🔴}} |

## Actionable Insights

### What's Working Well 💚
1. {{positive_trend_1}}
2. {{positive_trend_2}}
3. {{positive_trend_3}}

### Areas of Concern 🔴
1. {{concern_1}}
   - **Action:** {{recommended_action}}
   - **Owner:** {{owner}}
   - **Due:** {{date}}

2. {{concern_2}}
   - **Action:** {{recommended_action}}
   - **Owner:** {{owner}}
   - **Due:** {{date}}

### Recommendations 🎯
1. **Immediate:** {{immediate_action}}
2. **Short-term:** {{short_term_action}}
3. **Long-term:** {{long_term_action}}

## Dashboard Update Schedule

| Dashboard | Frequency | Owner | Distribution |
|-----------|-----------|-------|--------------|
| Team Metrics | Daily | Scrum Master | Team |
| Sprint Metrics | Sprint End | Scrum Master | Team + Stakeholders |
| Program Metrics | Bi-weekly | RTE | ART + Leadership |
| Portfolio Metrics | Monthly | Portfolio Mgr | Executives |

## Data Sources & Definitions

### Metrics Definitions
- **Velocity:** Story points completed per sprint
- **Cycle Time:** Calendar days from "In Progress" to "Done"
- **Lead Time:** Calendar days from "Created" to "Done"
- **Flow Efficiency:** Active time / Total time × 100
- **Predictability:** Actual business value / Planned value × 100

### Data Sources
- Team Data: {{tool_name}}
- Quality Data: {{tool_name}}
- Portfolio Data: {{tool_name}}
- Financial Data: {{system_name}}

---

*Dashboard auto-refreshes every {{frequency}} | Questions? Contact {{contact}}*