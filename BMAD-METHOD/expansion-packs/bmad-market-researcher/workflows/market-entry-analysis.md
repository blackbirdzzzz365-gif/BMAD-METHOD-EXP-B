# Market Entry Analysis Workflow

## Overview
An adaptive workflow for comprehensive market entry analysis that adjusts based on market characteristics and client needs.

## Workflow Metadata
```yaml
workflow:
  id: market-entry-analysis
  name: Market Entry Analysis
  type: adaptive
  duration: 2-4 weeks
  agents:
    - market-research-lead
    - data-analyst
    - consumer-insights-specialist
    - competitive-intelligence-analyst
  integration_points:
    - product-manager: Product-market fit validation
    - strategy-consultant: Entry strategy development
```

## Phase 1: Discovery & Scoping (Days 1-3)

### Step 1.1: Initial Assessment
**Lead Agent:** market-research-lead

**Adaptive Questions:**
1. What type of market entry?
   - New geographic market → Go to Geographic Analysis Path
   - New product category → Go to Category Analysis Path
   - New customer segment → Go to Segment Analysis Path
   - New business model → Go to Model Analysis Path

2. What's the entry timeline?
   - Immediate (0-3 months) → Rapid assessment mode
   - Short-term (3-6 months) → Standard analysis
   - Long-term (6+ months) → Comprehensive analysis

3. What resources are available?
   - Limited budget → Focus on secondary research
   - Moderate budget → Mix primary/secondary
   - Substantial budget → Full primary research

### Step 1.2: Stakeholder Alignment
**Actions:**
- Define success criteria
- Identify key decisions needed
- Set analysis boundaries
- Establish deliverable format

**Deliverable:** Market Entry Charter

## Phase 2: Market Intelligence Gathering (Days 4-10)

### Path A: Geographic Market Entry
**Lead Agent:** data-analyst

1. **Macro Analysis**
   - Run PESTEL framework
   - Assess market size/growth
   - Evaluate infrastructure
   - Analyze regulatory environment

2. **Local Competition**
   - Map local players
   - Identify market leaders
   - Assess competitive intensity
   - Find market gaps

3. **Cultural Factors**
   - Consumer behavior differences
   - Buying patterns
   - Local preferences
   - Communication styles

### Path B: Product Category Entry
**Lead Agent:** consumer-insights-specialist

1. **Category Dynamics**
   - Category size/growth
   - Maturity assessment
   - Innovation rate
   - Profit pools

2. **Customer Needs**
   - Jobs-to-be-done analysis
   - Unmet needs identification
   - Willingness to pay
   - Adoption barriers

3. **Competitive Landscape**
   - Direct competitors
   - Substitute products
   - Value chain analysis
   - Differentiation opportunities

### Path C: Customer Segment Entry
**Lead Agent:** consumer-insights-specialist

1. **Segment Profiling**
   - Size and accessibility
   - Growth potential
   - Profitability analysis
   - Serving complexity

2. **Needs Analysis**
   - Unique segment needs
   - Current solutions used
   - Satisfaction gaps
   - Switching likelihood

3. **Go-to-Market Fit**
   - Channel preferences
   - Message resonance
   - Price sensitivity
   - Support needs

### Path D: Business Model Entry
**Lead Agent:** market-research-lead

1. **Model Viability**
   - Revenue potential
   - Cost structure analysis
   - Margin expectations
   - Scale requirements

2. **Market Readiness**
   - Technology adoption
   - Behavior change required
   - Infrastructure needs
   - Ecosystem maturity

3. **Competitive Response**
   - Disruption potential
   - Incumbent reactions
   - Defensive strategies
   - Partnership opportunities

## Phase 3: Deep Dive Analysis (Days 11-15)

### Step 3.1: Opportunity Validation
**Adaptive Process:**

1. **If HIGH market attractiveness:**
   - Conduct primary research
   - Interview 10-15 customers
   - Run focus groups
   - Test value propositions

2. **If MEDIUM attractiveness:**
   - Mix primary/secondary
   - Interview 5-7 customers
   - Analyze competitor customers
   - Review case studies

3. **If LOW attractiveness:**
   - Document reasons
   - Identify pivot options
   - Suggest alternatives
   - Close analysis

### Step 3.2: Risk Assessment
**All Agents Collaborate**

**Risk Categories:**
- Market risks (size, growth, stability)
- Competitive risks (response, intensity)
- Operational risks (capabilities, resources)
- Financial risks (investment, returns)
- Regulatory risks (compliance, changes)

**Adaptive Risk Matrix:**
- If >3 HIGH risks → Recommend against entry
- If 1-2 HIGH risks → Develop mitigation plans
- If all LOW/MEDIUM → Proceed with strategy

### Step 3.3: Entry Strategy Options
**Lead Agent:** competitive-intelligence-analyst

**Generate 3 Entry Strategies:**
1. **Conservative:** Low risk, proven model
2. **Balanced:** Moderate risk, differentiated
3. **Aggressive:** High risk, disruptive

**For Each Strategy:**
- Investment required
- Time to breakeven
- Market share potential
- Key success factors
- Major risks

## Phase 4: Integration & Synthesis (Days 16-18)

### Step 4.1: Cross-Pack Collaboration
**Handoff to Product Manager:**
- Market requirements document
- Feature prioritization input
- Pricing recommendations
- GTM suggestions

**Handoff to Strategy Consultant:**
- Market assessment
- Competitive dynamics
- Strategic options
- Risk analysis

### Step 4.2: Recommendation Development
**Adaptive Recommendations Based on Analysis:**

1. **GO Decision Criteria Met:**
   - Clear entry strategy
   - Detailed implementation plan
   - Resource requirements
   - Success metrics
   - Monitoring plan

2. **NO-GO Decision:**
   - Clear rationale
   - Alternative markets
   - Pivot suggestions
   - Learning summary

3. **CONDITIONAL GO:**
   - Required conditions
   - Milestone gates
   - Pilot approach
   - Risk triggers

## Phase 5: Deliverable Creation (Days 19-20)

### Step 5.1: Output Selection
**Based on Stakeholder Needs:**

1. **Executive Presentation:**
   - 15-20 slides
   - Visual-heavy
   - Clear recommendations
   - Action-oriented

2. **Detailed Report:**
   - 40-50 pages
   - Full analysis
   - Data appendices
   - Implementation guide

3. **Interactive Dashboard:**
   - Key metrics
   - Scenario modeling
   - Competitive tracking
   - Progress monitoring

### Step 5.2: Quality Assurance
**Checklist:**
- [ ] All key questions answered
- [ ] Data sources documented
- [ ] Assumptions stated
- [ ] Risks addressed
- [ ] Actions clear
- [ ] Integration points defined

## Adaptive Workflow Rules

### Decision Points
1. **After Phase 1:** Continue or pivot market focus?
2. **After Phase 2:** Deep dive or conclude?
3. **After Phase 3:** Proceed with entry planning?
4. **After Phase 4:** Which deliverable format?

### Escalation Triggers
- Market size <$100M → Escalate to strategy consultant
- >5 strong competitors → Deeper competitive analysis
- Regulatory barriers → Legal consultation
- Technology requirements → Technical feasibility

### Acceleration Options
**If timeline compressed:**
- Skip primary research
- Use analogous markets
- Leverage existing data
- Focus on critical factors
- Simplify deliverables

## Success Metrics
- Decision clarity achieved: Yes/No
- Stakeholder alignment: Rating
- Analysis completeness: %
- Recommendation confidence: High/Med/Low
- Action plan clarity: Rating

## Post-Workflow Actions
1. Schedule follow-up reviews
2. Establish monitoring cadence
3. Define success metrics
4. Plan Phase 2 research
5. Archive learnings

## Integration APIs
```yaml
outputs:
  to_product_manager:
    - market_requirements.yaml
    - customer_needs.json
    - competitive_features.csv
  
  to_strategy_consultant:
    - market_assessment.md
    - strategic_options.yaml
    - risk_matrix.json
  
  to_development_team:
    - technical_requirements.md
    - integration_needs.yaml
```