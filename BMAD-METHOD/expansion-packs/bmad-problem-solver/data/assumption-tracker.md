# Assumption Tracker

## Metadata
```yaml
version: 1.1.0
description: Assumption tracking system for BMAD Problem Solver pack
last_updated: 2024-01-01
total_assumptions_tracked: 847
validation_success_rate: 0.73
usage_instructions: Track, validate, and manage assumptions throughout problem-solving process
```

---

## Assumption Categories

### Market
Market conditions, customer behavior, competitive landscape

### Technical
Technology capabilities, system performance, implementation feasibility

### Organizational
Team capabilities, organizational culture, change management

### Financial
Budget availability, cost estimates, revenue projections

### Regulatory
Legal requirements, compliance constraints, policy changes

### Temporal
Timeline estimates, sequence dependencies, timing assumptions

### Stakeholder
Stakeholder behavior, support levels, decision-making authority

### External
External factors, partner capabilities, supplier reliability

---

## Assumption Types

- **Explicit**: Clearly stated assumptions that are documented
- **Implicit**: Unstated assumptions that are taken for granted
- **Inherited**: Assumptions carried over from previous analyses or decisions
- **Derived**: Assumptions that emerge from other assumptions or analysis

---

## Validation Methods

### Data Analysis
Quantitative analysis of historical or current data

### Expert Consultation
Input from subject matter experts

### Market Research
Primary or secondary market research

### Pilot Testing
Small-scale testing or prototyping

### Stakeholder Validation
Confirmation from relevant stakeholders

### Benchmark Comparison
Comparison with industry benchmarks or similar cases

### Sensitivity Analysis
Testing how changes in assumptions affect outcomes

### Scenario Modeling
Testing assumptions under different scenarios

---

## Confidence Levels

| Level | Range | Description |
|-------|-------|-------------|
| **Very High** | 90-100% | Strong evidence, low uncertainty |
| **High** | 75-89% | Good evidence, manageable uncertainty |
| **Medium** | 50-74% | Limited evidence, moderate uncertainty |
| **Low** | 25-49% | Weak evidence, high uncertainty |
| **Very Low** | 0-24% | No evidence, speculation |

---

## Assumption Templates

### MARKET_001
```yaml
category: market
type: explicit
statement_template: "We assume that {customer_segment} will {behavior} when {condition} occurs"
validation_methods:
  - market_research
  - pilot_testing
risk_level: high
common_variations:
  - Customer adoption rate assumptions
  - Price sensitivity assumptions
  - Market size estimates
```

### TECH_001
```yaml
category: technical
type: explicit
statement_template: "We assume that {technology/system} can {capability} within {constraints}"
validation_methods:
  - pilot_testing
  - expert_consultation
risk_level: medium
common_variations:
  - System performance assumptions
  - Integration complexity assumptions
  - Scalability assumptions
```

### ORG_001
```yaml
category: organizational
type: implicit
statement_template: "We assume that {team/organization} has the {capability} to {action}"
validation_methods:
  - stakeholder_validation
  - expert_consultation
risk_level: high
common_variations:
  - Change management capability
  - Skill availability assumptions
  - Cultural readiness assumptions
```

---

## Current Assumptions

### ASM_2024_001
```yaml
created_date: 2024-01-15
problem_context: Customer churn reduction initiative
category: market
type: explicit
statement: "We assume that customers churn primarily due to pricing concerns rather than feature gaps"
source: Customer survey analysis
confidence_level: medium
confidence_score: 0.65
impact_if_wrong: "High - would require completely different solution approach"

validation_plan:
  methods:
    - market_research
    - stakeholder_validation
  timeline: 2 weeks
  responsible_party: Customer Success Team
  success_criteria: "Confirm pricing as top reason in 70%+ of exit interviews"

validation_results:
  status: in_progress
  findings: "Preliminary data shows pricing in 45% of cases, feature gaps in 38%"
  updated_confidence: 0.55
  next_steps: "Expand sample size and conduct deeper interviews"

dependencies:
  - ASM_2024_002
related_patterns:
  - CU001
tags:
  - customer_retention
  - pricing
  - feature_development
```

### ASM_2024_002
```yaml
created_date: 2024-01-15
problem_context: Customer churn reduction initiative
category: organizational
type: implicit
statement: "We assume that our customer success team has sufficient capacity to implement proactive retention programs"
source: Resource planning discussion
confidence_level: low
confidence_score: 0.35
impact_if_wrong: "Medium - would require additional hiring or process changes"

validation_plan:
  methods:
    - stakeholder_validation
    - data_analysis
  timeline: 1 week
  responsible_party: CS Manager
  success_criteria: "Confirm team can handle 30% increase in proactive outreach"

validation_results:
  status: completed
  findings: "Team at 95% capacity, can only handle 10% increase without compromising quality"
  updated_confidence: 0.15
  next_steps: "Revise implementation plan or request additional resources"

dependencies: []
related_patterns:
  - OR001
tags:
  - capacity_planning
  - customer_success
  - resource_constraints
```

---

## Assumption Validation History

### ASM_2023_145
```yaml
original_statement: "Mobile app performance issues are causing 20% of customer complaints"
validation_method: data_analysis
validation_date: 2023-11-20
result: validated
actual_finding: "Mobile performance issues caused 22% of complaints"
confidence_change:
  from: 0.60
  to: 0.90
impact_on_solution: "Confirmed technical solution approach was correct"
```

### ASM_2023_098
```yaml
original_statement: "Employees will readily adopt new collaboration tools without training"
validation_method: pilot_testing
validation_date: 2023-10-05
result: invalidated
actual_finding: "Only 30% adoption without training, 85% with structured training"
confidence_change:
  from: 0.70
  to: 0.10
impact_on_solution: "Required addition of comprehensive training program to implementation plan"
```

---

## Common Assumption Pitfalls

### Confirmation Bias
**Description**: Looking for evidence that confirms existing assumptions while ignoring contradictory evidence  
**Prevention**: Actively seek disconfirming evidence and alternative explanations  
**Example**: Assuming customers want more features when they actually want simpler experience

### Availability Heuristic
**Description**: Overweighting recent or memorable examples when forming assumptions  
**Prevention**: Use systematic data collection and analysis rather than anecdotal evidence  
**Example**: Assuming problem is widespread based on a few vocal customer complaints

### Planning Fallacy
**Description**: Underestimating time, costs, and risks while overestimating benefits  
**Prevention**: Use reference class forecasting and historical data for estimates  
**Example**: Assuming software implementation will take 3 months when similar projects averaged 6 months

### Anchoring Bias
**Description**: Over-relying on first piece of information encountered  
**Prevention**: Gather multiple data points before forming assumptions  
**Example**: Basing market size estimates on first industry report found

---

## Assumption Management Workflows

### Identification Workflow
1. Extract explicit assumptions from problem statement and analysis
2. Identify implicit assumptions using structured questioning
3. Document inherited assumptions from previous work
4. Capture derived assumptions that emerge during analysis

### Assessment Workflow
1. Categorize assumptions by type and subject area
2. Assess confidence level based on available evidence
3. Evaluate impact if assumption proves wrong
4. Prioritize assumptions for validation based on risk

### Validation Workflow
1. Select appropriate validation methods for each assumption
2. Create validation plan with timeline and responsibilities
3. Execute validation activities and collect evidence
4. Update assumptions based on findings and adjust confidence levels

### Monitoring Workflow
1. Track assumption validity throughout implementation
2. Monitor external changes that might affect assumptions
3. Update assumptions as new information becomes available
4. Learn from assumption validation outcomes for future problems

---

## Integration Points

- **Problem Analysis**: Assumptions identified during multi-agent problem analysis
- **Solution Design**: Assumptions underlying proposed solutions and approaches
- **Implementation Planning**: Assumptions about resources, timeline, and execution
- **Risk Assessment**: Assumptions that drive risk identification and mitigation
- **Success Metrics**: Assumptions about what constitutes success and how to measure it

---

## Reporting Templates

### Assumption Log
```yaml
fields:
  - id
  - statement
  - category
  - confidence
  - validation_status
  - impact_if_wrong
sort_by: risk_priority
filter_options:
  - category
  - confidence_level
  - validation_status
```

### Validation Report
```yaml
fields:
  - assumption
  - validation_method
  - findings
  - confidence_change
  - solution_impact
group_by: validation_date
summary_metrics:
  - validation_success_rate
  - average_confidence_change
```

---

## AI Assistance Prompts

### Assumption Extraction
Analyze the following problem statement and identify both explicit and implicit assumptions. Look for statements that begin with 'we assume', 'we believe', 'it's likely that', or 'probably'. Also identify unstated assumptions about market conditions, organizational capabilities, and external factors.

### Validation Planning
For each assumption, recommend the most appropriate validation method considering the assumption type, available resources, and timeline constraints. Prioritize based on the potential impact if the assumption proves incorrect.

### Bias Detection
Review these assumptions for common cognitive biases such as confirmation bias, availability heuristic, anchoring bias, and planning fallacy. Suggest ways to mitigate identified biases.

---

*This assumption tracker helps problem-solving agents systematically identify, validate, and manage assumptions throughout the analysis and solution process.*