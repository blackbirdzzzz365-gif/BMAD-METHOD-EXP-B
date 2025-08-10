# Task: Generate Flow Metrics

## Task Metadata
```yaml
task:
  id: generate-flow-metrics
  name: Establish and Analyze Agile Flow Metrics
  agent: metrics-analyst
  elicit: true
  duration: Initial setup 2-4 weeks, then ongoing
  
outputs:
  - Flow metrics dashboards
  - Trend analysis reports
  - Bottleneck identification
  - Improvement recommendations
  - Predictability forecasts
```

## Flow Metrics Introduction

```markdown
Hi! I'm Kevin, your Metrics Analyst. I'll help you establish and leverage flow metrics for continuous improvement.

Flow metrics help us understand how value moves through your system and where to improve.

**Initial Assessment Questions:**
1. What tools are you using for work tracking? (Jira, Azure DevOps, etc.)
2. How do you currently measure team performance?
3. What decisions do you need metrics to support?
4. Who are the primary consumers of metrics?
5. What's your data quality like?
```

## Phase 1: Metrics Foundation

### Understanding Flow Metrics
```markdown
Let's establish the core flow metrics:

**The 4 Key Flow Metrics:**

1. **Flow Velocity**
   - Definition: Number of items completed per unit time
   - Measures: Throughput/productivity
   - Example: 15 stories per sprint
   - Your baseline: {{current_velocity}}

2. **Flow Time (Cycle Time)**
   - Definition: Time from work start to completion
   - Measures: Speed of delivery
   - Example: 5 days average
   - Your baseline: {{current_cycle_time}}

3. **Flow Efficiency**
   - Definition: Active time ÷ Total time × 100
   - Measures: Waste in process
   - Example: 35% efficiency
   - Your baseline: {{current_efficiency}}

4. **Flow Load (WIP)**
   - Definition: Number of items in progress
   - Measures: System capacity utilization
   - Example: 25 items in flight
   - Your baseline: {{current_wip}}

**Why These Matter:**
- Velocity → Predictability
- Time → Responsiveness  
- Efficiency → Waste reduction
- Load → Sustainable pace
```

### Data Collection Setup
```markdown
Let's set up your data collection:

**Step 1: Define Work Item Types**
```
Work Items to Track:
□ User Stories (Must track)
□ Bugs/Defects (Must track)
□ Technical Tasks (Optional)
□ Spikes (Optional)
□ Enablers (Recommended)
```

**Step 2: Define Workflow States**
```
Typical Flow States:
1. Backlog (Not started)
2. In Progress (Active work)
3. Review/Test (Validation)
4. Done (Completed)

Your States:
1. {{state_1}} → Maps to: {{flow_state}}
2. {{state_2}} → Maps to: {{flow_state}}
3. {{state_3}} → Maps to: {{flow_state}}
4. {{state_4}} → Maps to: {{flow_state}}
```

**Step 3: Data Quality Checklist**
- [ ] All work items have created date
- [ ] State transitions are tracked
- [ ] Completed date is captured
- [ ] Work item types are consistent
- [ ] No duplicate items
- [ ] Historical data available (3+ months ideal)

**Step 4: Tool Configuration**
Based on your {{tool_name}}:
1. Configure workflow states
2. Set up date field tracking
3. Create data export/API access
4. Set up automated collection
5. Validate data accuracy
```

## Phase 2: Dashboard Creation

### Team Flow Dashboard
```markdown
## Team Flow Metrics Dashboard - {{team_name}}

### Flow Velocity Trend
```
Stories/Sprint
20 |    ╱╲
15 |   ╱  ╲    ╱╲
10 |  ╱    ╲╱╲╱  ╲
5  | ╱            ╲
0  |________________
   S1 S2 S3 S4 S5 S6

Average: {{avg}} stories/sprint
Trend: {{increasing/stable/decreasing}}
```

### Cycle Time Distribution
```
Days │ 50% of items complete in {{days}} days
12   │ ░░░░░░░░░░░░░░░░░░░░ 95th percentile
10   │ ░░░░░░░░░░░░░░░░░ 85th percentile  
8    │ ░░░░░░░░░░░░░ 75th percentile
6    │ ░░░░░░░░░ 50th percentile
4    │ ░░░░░ 25th percentile
2    │ 
0    │

Target SLA: {{days}} days
Meeting SLA: {{percentage}}%
```

### Work In Progress
```
WIP Trend
30 |      ╱╲    ← WIP Limit
25 | ────────────────────
20 |   ╱╲╱  ╲  
15 | ╱╲/      ╲╱
10 |
   |________________
   W1 W2 W3 W4 W5 W6

Current WIP: {{count}} items
Recommended limit: {{limit}}
Over limit: {{days}} days this month
```

### Flow Efficiency
```
Efficiency %
50% |          ╱╲
40% |      ╱╲╱  ╲
30% |  ╱╲╱      ╲
20% | ╱          
10% |
    |________________
    M1  M2  M3  M4  M5

Current: {{percentage}}%
Industry average: 15-40%
Your target: {{target}}%
```
```

### Program Flow Dashboard
```markdown
## Program Flow Metrics - {{art_name}}

### Feature Flow
```
Features per PI
15 | ████ ████ ████
12 | ████ ████ ████ ████
9  | ████ ████ ████ ████
6  | ████ ████ ████ ████
3  | ████ ████ ████ ████
0  |_____________________
    PI-1  PI-2  PI-3  PI-4

Delivered: ████  Carry-over: ░░░░
```

### Cross-Team Dependencies
```
Dependency Flow Time (days)
Team A → B: ████████ 8 days avg
Team B → C: ████ 4 days avg
Team C → A: ██████ 6 days avg
External:   ████████████ 12 days avg

Bottleneck: {{team/system}}
```

### Cumulative Flow Diagram
```
Items
120 |           ╱████ Done
100 |         ╱█████
80  |       ╱██████  Testing
60  |     ╱███████
40  |   ╱████████   In Progress
20  | ╱█████████
0   |████████████  Backlog
    |________________
    W1 W2 W3 W4 W5 W6

Flow Balance: {{balanced/accumulating/depleting}}
```
```

## Phase 3: Analysis Techniques

### Bottleneck Identification
```markdown
Let me analyze your flow for bottlenecks:

**Visual Indicators in Your Data:**
1. **Growing WIP in State: {{state}}**
   - Items accumulating: {{count}}
   - Average wait time: {{days}} days
   - Root cause hypothesis: {{cause}}

2. **Long Cycle Times for: {{work_type}}**
   - Average: {{days}} vs {{days}} baseline
   - Outliers: {{count}} items > {{days}} days
   - Common pattern: {{pattern}}

3. **Flow Efficiency Drop at: {{stage}}**
   - Efficiency: {{percentage}}% (target: {{percentage}}%)
   - Wait time: {{hours}} hours average
   - Improvement opportunity: {{suggestion}}

**Bottleneck Resolution Strategies:**
1. {{bottleneck_1}}:
   - Add capacity: {{action}}
   - Reduce batch size: {{action}}
   - Automate: {{action}}

2. {{bottleneck_2}}:
   - Improve handoffs: {{action}}
   - Parallel processing: {{action}}
   - Skill development: {{action}}
```

### Predictability Analysis
```markdown
Based on your flow metrics, here's your predictability:

**Monte Carlo Simulation Results**
For {{number}} items:
- 50% confidence: Complete in {{days}} days
- 85% confidence: Complete in {{days}} days  
- 95% confidence: Complete in {{days}} days

**Throughput Predictability**
Next Sprint capacity (85% confidence):
- Optimistic: {{high}} stories
- Most likely: {{medium}} stories
- Conservative: {{low}} stories

**Factors Affecting Predictability:**
1. **Variability in cycle time**
   - Standard deviation: {{value}}
   - Improvement: Reduce outliers
   
2. **Work item size variation**
   - Size range: {{min}}-{{max}} points
   - Improvement: Break down large items

3. **External dependencies**
   - Dependency delays: {{percentage}}% of items
   - Improvement: Identify early, manage actively
```

### Trend Analysis
```markdown
Let me identify significant trends:

**Velocity Trend Analysis**
```
Statistical Process Control Chart
UCL -------- {{upper_limit}}
    ╱╲    ╱╲
   ╱  ╲  ╱  ╲
──────────────── Mean: {{mean}}
      ╲╱
LCL -------- {{lower_limit}}

Status: {{in_control/out_of_control}}
Action: {{required_action}}
```

**Cycle Time Trends**
- 6-week trend: {{improving/stable/degrading}}
- Slope: {{value}} days/week
- At current rate: {{projection}}

**Emerging Patterns:**
1. **Monday effect**: {{percentage}}% slower starts
2. **Sprint-end rush**: {{percentage}}% increase in completion
3. **Post-PI planning**: {{days}} day productivity dip

**Recommendations:**
1. {{recommendation_1}}
2. {{recommendation_2}}
3. {{recommendation_3}}
```

## Phase 4: Actionable Insights

### Weekly Metrics Review
```markdown
Here's your weekly metrics summary:

**Week {{number}} Flow Metrics Summary**

🎯 **Key Metrics:**
- Velocity: {{actual}} vs {{target}} ({{status}})
- Cycle Time: {{actual}} vs {{target}} ({{status}})
- WIP: {{actual}} vs {{limit}} ({{status}})
- Efficiency: {{actual}}% vs {{target}}% ({{status}})

📈 **What Improved:**
- {{improvement_1}}: {{percentage}}% better
- {{improvement_2}}: {{value}} reduction

📉 **What Degraded:**
- {{degradation_1}}: {{percentage}}% worse
- {{degradation_2}}: {{value}} increase

🔍 **Deep Dive Needed:**
{{area_of_concern}} showing unusual pattern:
- Expected: {{expected_pattern}}
- Actual: {{actual_pattern}}
- Hypothesis: {{hypothesis}}

💡 **Recommended Actions:**
1. **Immediate**: {{action_1}}
2. **This Week**: {{action_2}}
3. **Next Sprint**: {{action_3}}
```

### Improvement Experiments
```markdown
Based on metrics, here are experiments to try:

**Experiment 1: Reduce Cycle Time**
- Hypothesis: {{hypothesis}}
- Change: {{specific_change}}
- Measure: Cycle time for {{work_type}}
- Duration: {{sprints}} sprints
- Success criteria: {{percentage}}% reduction

**Experiment 2: Improve Flow Efficiency**
- Hypothesis: {{hypothesis}}
- Change: {{specific_change}}
- Measure: Wait time in {{state}}
- Duration: {{weeks}} weeks
- Success criteria: Efficiency > {{percentage}}%

**Experiment 3: Stabilize Velocity**
- Hypothesis: {{hypothesis}}
- Change: {{specific_change}}
- Measure: Velocity standard deviation
- Duration: {{sprints}} sprints
- Success criteria: Variation < {{percentage}}%

**Experiment Tracking:**
| Week | Metric | Baseline | Current | Target | Status |
|------|--------|----------|---------|---------|---------|
| 1 | {{metric}} | {{value}} | {{value}} | {{value}} | {{status}} |
| 2 | {{metric}} | {{value}} | {{value}} | {{value}} | {{status}} |
```

## Phase 5: Advanced Analytics

### Flow Debt Analysis
```markdown
"Flow Debt" - inefficiencies that slow delivery:

**Current Flow Debt Inventory:**
1. **Queue Time Debt**
   - Items waiting: {{average}} days
   - Cost: {{hours}} hours/sprint
   - Reduction strategy: {{strategy}}

2. **Context Switching Debt**
   - Team members on multiple items: {{percentage}}%
   - Efficiency impact: -{{percentage}}%
   - Reduction strategy: {{strategy}}

3. **Rework Debt**
   - Items requiring rework: {{percentage}}%
   - Additional cycle time: {{days}} days
   - Root causes: {{causes}}

4. **Coordination Debt**
   - Cross-team handoffs: {{count}}/sprint
   - Delay per handoff: {{hours}} hours
   - Improvement: {{approach}}

**Total Flow Debt: {{days}} days per feature**
**Potential Improvement: {{percentage}}% faster delivery**
```

### Correlation Analysis
```markdown
I've found these meaningful correlations:

**Strong Correlations (>0.7):**
1. WIP ↑ → Cycle Time ↑ (0.82)
   - Meaning: More WIP significantly slows delivery
   - Action: Enforce WIP limits

2. Story Size ↑ → Variability ↑ (0.75)
   - Meaning: Larger stories less predictable
   - Action: Break down stories > {{size}} points

3. Dependencies ↑ → Efficiency ↓ (0.78)
   - Meaning: Dependencies create wait time
   - Action: Minimize cross-team dependencies

**Surprising Findings:**
1. {{finding_1}}
   - Expected: {{expectation}}
   - Actual: {{reality}}
   - Implication: {{meaning}}

2. {{finding_2}}
   - Expected: {{expectation}}
   - Actual: {{reality}}
   - Implication: {{meaning}}
```

### Forecasting Models
```markdown
Based on historical data, here are forecasts:

**Next Quarter Forecast:**
Using {{method}} method:

**Velocity Forecast:**
- Q1 actual: {{value}} stories
- Q2 forecast: {{value}} ± {{variance}} stories
- Confidence: {{percentage}}%

**Cycle Time Forecast:**
- Current trend: {{trend}}
- Q2 projection: {{value}} days
- Best case: {{value}} days
- Worst case: {{value}} days

**Capacity Planning:**
To deliver {{number}} features next PI:
- Required velocity: {{value}} stories/sprint
- Current velocity: {{value}} stories/sprint
- Gap: {{value}} stories/sprint

**Options:**
1. Add capacity: {{number}} team members
2. Reduce scope: {{number}} features
3. Improve efficiency: {{percentage}}% gain needed
```

## Phase 6: Metrics Maturity

### Building Metrics Culture
```markdown
Moving from metrics reporting to metrics-driven decisions:

**Level 1: Collecting**
- [x] Basic metrics captured
- [x] Dashboards created
- [x] Regular reporting
- [ ] Team engagement

**Level 2: Understanding**
- [ ] Teams interpret their metrics
- [ ] Trends identified
- [ ] Correlations understood
- [ ] Actions discussed

**Level 3: Acting**
- [ ] Metrics drive decisions
- [ ] Experiments based on data
- [ ] Improvements measured
- [ ] Success celebrated

**Level 4: Predicting**
- [ ] Forecasting reliable
- [ ] Proactive adjustments
- [ ] Risk quantification
- [ ] Continuous optimization

**Your Current Level:** {{level}}
**Next Steps:**
1. {{step_1}}
2. {{step_2}}
3. {{step_3}}
```

### Sustainable Metrics Practice
```markdown
Ensuring metrics remain valuable:

**Metrics Health Checklist:**
- [ ] Automated data collection
- [ ] Self-service dashboards
- [ ] Regular reviews scheduled
- [ ] Actions tracked to outcomes
- [ ] Metrics portfolio pruned
- [ ] New metrics experimented

**Anti-patterns to Avoid:**
1. **Metric Fixation**
   - Sign: Optimizing metric not outcome
   - Fix: Remember why we measure

2. **Analysis Paralysis**
   - Sign: More analysis than action
   - Fix: Time-box analysis, bias to action

3. **Gaming Metrics**
   - Sign: Metrics improve, value doesn't
   - Fix: Measure outcomes not outputs

4. **Metric Overload**
   - Sign: Too many metrics to act on
   - Fix: Focus on vital few

**Metrics Retrospective Questions:**
1. Which metrics drove decisions?
2. Which metrics were ignored?
3. What questions couldn't we answer?
4. How can we simplify?
```

## Tools and Templates

### Metrics Collection Template
```csv
# CSV Export Template
item_id,type,created_date,started_date,completed_date,state,team,size,blocked_time,rework_count
```

### SQL Queries for Common Metrics
```sql
-- Cycle Time Calculation
SELECT 
  AVG(DATEDIFF(completed_date, started_date)) as avg_cycle_time,
  PERCENTILE_CONT(0.85) WITHIN GROUP (ORDER BY DATEDIFF(completed_date, started_date)) as p85_cycle_time
FROM work_items
WHERE completed_date >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY)

-- Flow Efficiency
SELECT 
  AVG(active_time / total_time * 100) as flow_efficiency
FROM (
  SELECT 
    SUM(CASE WHEN state = 'Active' THEN duration ELSE 0 END) as active_time,
    SUM(duration) as total_time
  FROM work_item_states
  GROUP BY item_id
) as efficiency_calc
```

### Metrics Communication Template
```markdown
## Flow Metrics Insight - {{date}}

**The Data Says:** {{key_finding}}

**This Means:** {{interpretation}}

**We Should:** {{recommended_action}}

**Success Looks Like:** {{success_criteria}}

**Let's Decide By:** {{decision_date}}
```

---

*Great metrics tell a story. Let's make sure yours drives meaningful improvement!*