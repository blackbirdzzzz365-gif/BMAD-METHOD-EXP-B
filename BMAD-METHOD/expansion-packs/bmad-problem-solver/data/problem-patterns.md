# Problem Patterns Library

## Metadata
```yaml
version: 1.1.0
description: Problem pattern library for BMAD Problem Solver pack
last_updated: 2024-01-01
pattern_count: 25
usage_instructions: Patterns help agents recognize similar problems and suggest proven solution approaches
```

---

## Pattern Categories

### Operational
Day-to-day business operations and processes

### Strategic
Long-term planning and strategic decisions

### Organizational
People, culture, and organizational design

### Technical
Technology, systems, and infrastructure

### Financial
Revenue, costs, and financial management

### Customer
Customer experience and relationship management

### Growth
Scaling, expansion, and growth challenges

### Crisis
Emergency response and crisis management

---

## Pattern Library

### OP001: Process Bottleneck
```yaml
category: operational
description: A single point in a process that limits overall throughput
confidence_level: 0.95

symptoms:
  - Work piles up at specific stage
  - Downstream processes are starved
  - Overall system performance is constrained
  - Resource utilization is uneven

common_causes:
  - Insufficient capacity at bottleneck stage
  - Skill/knowledge gaps
  - Technology limitations
  - Poor workflow design
  - Quality issues causing rework

typical_solutions:
  - Increase capacity at bottleneck
  - Improve efficiency of bottleneck process
  - Redesign workflow to balance load
  - Add parallel processing paths
  - Implement pull-based scheduling

frameworks_to_apply:
  - Theory of Constraints
  - Value Stream Mapping
  - Systems Thinking
  - 5 Whys
  - Fishbone Diagram

success_metrics:
  - Overall throughput increase
  - Reduced work-in-progress
  - Improved cycle time
  - Better resource utilization

related_patterns:
  - OP002
  - OP003
```

#### Case Studies

**Manufacturing Industry**
- **Context**: Assembly line with manual inspection bottleneck
- **Solution**: Automated inspection + parallel manual review
- **Outcome**: 40% throughput increase

**Software Industry**
- **Context**: Code review bottleneck in deployment pipeline
- **Solution**: Automated testing + peer review rotation
- **Outcome**: 60% faster deployment cycle

---

### OP002: Quality-Speed Trade-off
```yaml
category: operational
description: Tension between delivering quickly and maintaining quality standards
confidence_level: 0.90

symptoms:
  - Customer complaints about quality
  - Rework and defects increasing
  - Pressure to deliver faster
  - Team stress and burnout

common_causes:
  - Unrealistic deadlines
  - Insufficient testing/review processes
  - Skill gaps in team
  - Poor requirements definition
  - Inadequate tools or technology

typical_solutions:
  - Implement quality gates
  - Automate repetitive quality checks
  - Improve upfront planning
  - Invest in team skills development
  - Better stakeholder expectation management

frameworks_to_apply:
  - Design Thinking
  - Lean methodology
  - Root Cause Analysis
  - SWOT Analysis
  - First Principles Thinking

success_metrics:
  - Defect rate reduction
  - Customer satisfaction improvement
  - Rework reduction
  - Time to market optimization

related_patterns:
  - OP001
  - OP003
```

---

### ST001: Analysis Paralysis
```yaml
category: strategic
description: Inability to make decisions due to over-analysis and information overload
confidence_level: 0.88

symptoms:
  - Decisions delayed repeatedly
  - Endless research and analysis
  - Perfectionist mindset
  - Fear of making wrong choice
  - Multiple conflicting recommendations

common_causes:
  - Lack of decision criteria
  - Risk aversion
  - Unclear decision authority
  - Information overload
  - Perfectionist culture

typical_solutions:
  - Set decision deadlines
  - Define clear decision criteria
  - Use satisficing vs. optimizing
  - Implement decision frameworks
  - Assign clear decision authority

frameworks_to_apply:
  - Decision Analysis Matrix
  - First Principles Thinking
  - Critical Thinking
  - SWOT Analysis
  - Jobs-to-be-Done

success_metrics:
  - Decision cycle time
  - Decision quality scores
  - Implementation success rate
  - Stakeholder satisfaction

related_patterns:
  - ST002
  - OR001
```

---

### OR001: Silos and Communication Breakdown
```yaml
category: organizational
description: Departments or teams working in isolation, leading to inefficiency and conflicts
confidence_level: 0.92

symptoms:
  - Duplicate work across teams
  - Conflicting priorities
  - Information doesn't flow
  - Finger-pointing between departments
  - Customer experience fragmentation

common_causes:
  - Organizational structure issues
  - Misaligned incentives
  - Lack of shared goals
  - Poor communication tools/processes
  - Historical conflicts

typical_solutions:
  - Cross-functional teams
  - Shared metrics and goals
  - Regular inter-department meetings
  - Job rotation programs
  - Unified communication platforms

frameworks_to_apply:
  - Systems Thinking
  - Design Thinking
  - Fishbone Diagram
  - Root Cause Analysis
  - SWOT Analysis

success_metrics:
  - Cross-team collaboration frequency
  - Duplicate work reduction
  - Customer satisfaction improvement
  - Time to resolve cross-team issues

related_patterns:
  - OR002
  - CU001
```

---

### TE001: Technical Debt Accumulation
```yaml
category: technical
description: Short-term technical shortcuts creating long-term maintenance and scalability issues
confidence_level: 0.89

symptoms:
  - Slower development velocity
  - Increasing bug rates
  - Difficulty implementing new features
  - System reliability issues
  - Developer frustration

common_causes:
  - Pressure for quick delivery
  - Lack of technical standards
  - Insufficient refactoring time
  - Poor architectural decisions
  - Skill gaps in team

typical_solutions:
  - Dedicate time for technical debt reduction
  - Implement code quality standards
  - Regular architecture reviews
  - Automated testing and monitoring
  - Technical debt tracking and prioritization

frameworks_to_apply:
  - Root Cause Analysis
  - First Principles Thinking
  - Systems Thinking
  - 5 Whys
  - Decision Analysis Matrix

success_metrics:
  - Code quality metrics improvement
  - Development velocity recovery
  - Bug rate reduction
  - System performance improvement

related_patterns:
  - TE002
  - OP002
```

---

### FI001: Cash Flow Crisis
```yaml
category: financial
description: Insufficient cash flow to meet operational needs despite profitability
confidence_level: 0.91

symptoms:
  - Difficulty paying bills on time
  - Delayed payments to suppliers
  - Inability to invest in growth
  - Credit line maxed out
  - Stress on management team

common_causes:
  - Long payment terms with customers
  - Seasonal business fluctuations
  - Rapid growth outpacing cash generation
  - Poor accounts receivable management
  - High inventory levels

typical_solutions:
  - Improve collections processes
  - Negotiate better payment terms
  - Invoice financing or factoring
  - Inventory optimization
  - Cash flow forecasting and management

frameworks_to_apply:
  - Root Cause Analysis
  - Systems Thinking
  - First Principles Thinking
  - SWOT Analysis
  - Critical Thinking

success_metrics:
  - Days sales outstanding (DSO)
  - Cash conversion cycle
  - Available cash balance
  - Credit utilization ratio

related_patterns:
  - FI002
  - GR001
```

---

### CU001: Customer Churn Spiral
```yaml
category: customer
description: Increasing customer defection leading to revenue decline and higher acquisition costs
confidence_level: 0.87

symptoms:
  - Rising churn rates
  - Declining customer lifetime value
  - Increasing acquisition costs
  - Negative customer feedback
  - Revenue growth stagnation

common_causes:
  - Poor customer experience
  - Competitive pressure
  - Product-market fit issues
  - Inadequate customer success programs
  - Pricing misalignment

typical_solutions:
  - Customer journey mapping
  - Proactive customer success programs
  - Product improvement based on feedback
  - Loyalty and retention programs
  - Competitive differentiation

frameworks_to_apply:
  - Jobs-to-be-Done
  - Design Thinking
  - Root Cause Analysis
  - Systems Thinking
  - Critical Thinking

success_metrics:
  - Customer churn rate
  - Net Promoter Score (NPS)
  - Customer lifetime value
  - Customer acquisition cost

related_patterns:
  - CU002
  - GR001
```

---

### GR001: Scaling Bottlenecks
```yaml
category: growth
description: Systems, processes, or people that limit organizational growth
confidence_level: 0.90

symptoms:
  - Growth plateau despite market opportunity
  - Quality degradation with volume
  - Key person dependencies
  - System performance issues
  - Operational chaos

common_causes:
  - Manual processes that don't scale
  - Insufficient automation
  - Organizational structure limitations
  - Technology architecture constraints
  - Skills and knowledge gaps

typical_solutions:
  - Process automation and optimization
  - Organizational restructuring
  - Technology platform upgrades
  - Knowledge management systems
  - Hiring and training programs

frameworks_to_apply:
  - Systems Thinking
  - First Principles Thinking
  - Root Cause Analysis
  - Design Thinking
  - SWOT Analysis

success_metrics:
  - Revenue growth rate
  - Operational efficiency ratios
  - Customer satisfaction during growth
  - Employee productivity

related_patterns:
  - OP001
  - OR001
```

---

### CR001: Reputation Crisis
```yaml
category: crisis
description: Negative publicity or events threatening organizational reputation and stakeholder trust
confidence_level: 0.83

symptoms:
  - Negative media coverage
  - Social media backlash
  - Customer complaints and defections
  - Stakeholder concern
  - Stock price decline (if public)

common_causes:
  - Product or service failures
  - Ethical lapses or misconduct
  - Poor crisis communication
  - Regulatory violations
  - Social or political missteps

typical_solutions:
  - Immediate transparent communication
  - Root cause investigation and remediation
  - Stakeholder engagement and rebuilding trust
  - Process improvements to prevent recurrence
  - Long-term reputation recovery plan

frameworks_to_apply:
  - Root Cause Analysis
  - Critical Thinking
  - Systems Thinking
  - SWOT Analysis
  - First Principles Thinking

success_metrics:
  - Media sentiment analysis
  - Customer retention rates
  - Stakeholder trust surveys
  - Financial impact recovery

related_patterns:
  - CR002
  - OR001
```

---

## Pattern Matching Rules

```yaml
symptom_threshold: 0.7
cause_threshold: 0.6
solution_relevance: 0.8
confidence_minimum: 0.75
```

---

## Usage Statistics

### Most Matched Patterns
| Pattern ID | Match Count | Success Rate |
|------------|-------------|--------------|
| OP001 | 156 | 89% |
| OR001 | 134 | 91% |
| CU001 | 98 | 85% |

### Category Distribution
- **Operational**: 35%
- **Organizational**: 22%
- **Customer**: 18%
- **Technical**: 12%
- **Strategic**: 8%
- **Financial**: 3%
- **Growth**: 2%

---

## Learning Feedback

### Pattern Refinements
```yaml
- pattern_id: OP001
  date: 2023-12-15
  refinement: Added automation as common solution
  source: User feedback from manufacturing case
```

### New Pattern Candidates
```yaml
- candidate_name: Remote Work Coordination
  category: organizational
  evidence_count: 23
  confidence: 0.72
```

---

*This pattern library enables problem-solving agents to quickly recognize common problem types and apply proven solution approaches based on historical success patterns.*