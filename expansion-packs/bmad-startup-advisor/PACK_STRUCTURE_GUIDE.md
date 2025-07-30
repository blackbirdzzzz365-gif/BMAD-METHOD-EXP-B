# BMAD Startup Advisor Pack Structure Guide

## Overview
This guide provides strict instructions for agents using the BMAD Startup Advisor expansion pack. Follow these guidelines precisely to ensure consistent and effective startup advisory services.

## Directory Structure

```
bmad-startup-advisor/
├── config.yaml                    # Pack configuration
├── PACK_STRUCTURE_GUIDE.md       # This file - MUST READ
├── README.md                     # Pack documentation
├── INTEGRATION_GUIDE.md          # Integration patterns
│
├── agents/                       # Startup advisor personas
│   ├── serial-entrepreneur.md    # Multiple exit founder
│   └── vc-advisor.md            # Venture capital expert
│
├── frameworks/                   # Core startup methodologies
│   ├── lean-startup-framework.md        # Build-Measure-Learn
│   ├── business-model-patterns.md       # Common business models
│   └── growth-model-framework.md        # Scaling strategies
│
├── tasks/                        # Executable advisory tasks
│   ├── validate-business-model.md       # Model validation
│   ├── conduct-customer-discovery.md    # Customer research
│   ├── prepare-fundraising.md           # Funding preparation
│   ├── analyze-product-market-fit.md    # PMF assessment
│   ├── plan-growth-strategy.md          # Growth planning
│   └── execute-pivot-analysis.md        # Pivot decisions
│
├── workflows/                    # End-to-end processes
│   ├── startup-launch-workflow.md       # 0 to 1 journey
│   ├── fundraising-workflow.md          # Funding rounds
│   ├── pmf-validation-workflow.md       # Product-market fit
│   ├── scaling-workflow.md              # Growth execution
│   ├── pivot-workflow.md                # Strategic pivots
│   └── exit-preparation-workflow.md     # Exit planning
│
└── templates/                    # Ready-to-use documents
    ├── pitch-deck-tmpl.md              # Investor pitch
    ├── financial-model-tmpl.md         # Financial projections
    ├── go-to-market-tmpl.md            # GTM strategy
    ├── investor-update-tmpl.md         # Monthly updates
    ├── business-canvas-tmpl.md         # Business model canvas
    └── okr-planning-tmpl.md            # Objectives & key results
```

## Usage Guidelines

### 1. Agent Selection
- **Serial Entrepreneur**: Use for practical, experience-based guidance
- **VC Advisor**: Use for fundraising, metrics, and investor perspectives

### 2. Framework Application
- Start with `lean-startup-framework.md` for methodology
- Use `business-model-patterns.md` to identify model type
- Apply `growth-model-framework.md` when ready to scale

### 3. Task Execution Order

#### For New Startups:
1. `validate-business-model.md`
2. `conduct-customer-discovery.md`
3. `analyze-product-market-fit.md`
4. `prepare-fundraising.md` (if needed)
5. `plan-growth-strategy.md`

#### For Existing Startups:
1. `analyze-product-market-fit.md`
2. `execute-pivot-analysis.md` (if struggling)
3. `plan-growth-strategy.md` (if PMF achieved)
4. `prepare-fundraising.md` (for next round)

### 4. Workflow Selection

| Startup Stage | Primary Workflow | Supporting Workflows |
|--------------|------------------|---------------------|
| Idea Stage | startup-launch-workflow | pmf-validation-workflow |
| Pre-Seed/Seed | fundraising-workflow | pmf-validation-workflow |
| Series A | scaling-workflow | fundraising-workflow |
| Growth | scaling-workflow | exit-preparation-workflow |
| Struggling | pivot-workflow | pmf-validation-workflow |

### 5. Template Usage

#### Essential Templates by Stage:
- **Idea**: business-canvas-tmpl
- **Fundraising**: pitch-deck-tmpl, financial-model-tmpl
- **Growth**: go-to-market-tmpl, okr-planning-tmpl
- **All Stages**: investor-update-tmpl

### 6. Integration Requirements

#### With Product Manager Pack:
- Customer discovery outputs → Product backlog
- PMF metrics → Product strategy
- Growth experiments → Feature prioritization

#### With Market Researcher Pack:
- Market validation data → Business model
- Competitive analysis → Positioning
- Customer insights → Pivot decisions

#### With PMO Agile Pack:
- Development sprints → MVP building
- OKRs → PI objectives
- Growth experiments → Sprint planning

#### With Strategy Consulting Pack:
- Strategic options → Growth planning
- Market analysis → Expansion strategy
- Competitive positioning → Differentiation

## Critical Success Factors

### 1. **Data-Driven Decisions**
- ALWAYS base recommendations on metrics
- Track weekly/monthly progress
- Use templates to maintain consistency

### 2. **Customer-Centric Approach**
- Customer discovery before building
- Regular customer feedback loops
- Pivot based on customer needs

### 3. **Lean Methodology**
- Build → Measure → Learn cycles
- Minimum viable products
- Rapid experimentation

### 4. **Clear Communication**
- Use pitch deck for external communication
- Regular investor updates
- Transparent team communication

### 5. **Financial Discipline**
- Monitor burn rate constantly
- 18-month runway minimum
- Unit economics focus

## Stage-Gate Criteria

### Gate 1: Problem-Solution Fit
- [ ] 50+ customer interviews completed
- [ ] Clear problem statement validated
- [ ] Solution resonates with target market
- [ ] Willing to pay indicators

### Gate 2: Product-Market Fit
- [ ] Consistent user growth
- [ ] High engagement metrics
- [ ] Low churn rate (<5% monthly)
- [ ] Organic referrals happening

### Gate 3: Series A Readiness
- [ ] $1M+ ARR (for SaaS)
- [ ] Predictable growth model
- [ ] Unit economics positive
- [ ] Scalable go-to-market

### Gate 4: Growth Stage
- [ ] Multiple customer segments
- [ ] Proven sales playbook
- [ ] Strong team in place
- [ ] Clear path to profitability

### Gate 5: Exit Readiness
- [ ] Strategic value clear
- [ ] Clean financials
- [ ] Strong growth trajectory
- [ ] Multiple interested parties

## Common Pitfalls to Avoid

1. **Building Without Validation**
   - Solution: Use customer discovery task first

2. **Premature Scaling**
   - Solution: Confirm PMF before scaling workflow

3. **Ignoring Unit Economics**
   - Solution: Track CAC/LTV religiously

4. **Fundraising Too Early/Late**
   - Solution: Use stage-gate criteria

5. **Founder Attachment to Failed Ideas**
   - Solution: Use pivot analysis framework

## Metrics to Track

### Early Stage (Pre-PMF):
- Customer interviews completed
- Problem validation score
- Solution interest rate
- MVP engagement metrics

### Growth Stage (Post-PMF):
- Monthly Recurring Revenue (MRR)
- Customer Acquisition Cost (CAC)
- Lifetime Value (LTV)
- Monthly burn rate
- Runway remaining
- Growth rate
- Churn rate
- NPS score

### Scale Stage:
- Market share
- Revenue per employee
- EBITDA margin
- Customer segments
- International expansion

## Emergency Protocols

### Cash Crisis:
1. Run financial model scenarios
2. Execute pivot analysis
3. Prepare bridge round materials
4. Consider strategic options

### Growth Stalling:
1. Analyze PMF metrics
2. Review growth experiments
3. Consider pivot options
4. Adjust go-to-market

### Team Issues:
1. Review OKRs alignment
2. Assess culture fit
3. Adjust equity/compensation
4. Consider advisory needs

## Quality Standards

All advice must be:
- **Actionable**: Clear next steps
- **Measurable**: Specific metrics
- **Time-bound**: Defined timelines
- **Realistic**: Achievable goals
- **Integrated**: Aligned with other packs

---

**Remember**: Startup success is about iteration, not perfection. Help founders move fast, learn quickly, and adapt constantly.