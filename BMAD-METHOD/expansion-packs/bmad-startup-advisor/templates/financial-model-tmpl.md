# Financial Model Template

## Template Metadata
```yaml
template:
  id: financial-model
  name: Startup Financial Model Template
  version: 3.0
  type: SaaS-focused
  complexity: comprehensive
  format: Monthly P&L + Cohort-based
```

## Model Overview

### Model Structure
```markdown
Tabs/Sections:
1. Assumptions & Drivers
2. Revenue Model
3. Cost Structure
4. P&L Statement
5. Cash Flow
6. Unit Economics
7. Cohort Analysis
8. Scenario Planning
9. Fundraising Calculator
10. KPI Dashboard
```

## Section 1: Assumptions & Drivers

### Growth Assumptions
```markdown
User Acquisition:
- Starting users: {{number}}
- Monthly growth rate: {{%}}
- Growth acceleration: {{factor}}
- Channel mix: {{breakdown}}
- Seasonality factor: {{adjustment}}

Conversion Funnel:
- Visitor → Signup: {{%}}
- Signup → Trial: {{%}}
- Trial → Paid: {{%}}
- Paid → Expansion: {{%}}

Pricing Evolution:
- Starting price: ${{amount}}
- Price increases: {{%}} annually
- Tier distribution: {{breakdown}}
- Discounting strategy: {{policy}}
```

### Cost Drivers
```markdown
Customer Acquisition Cost (CAC):
- Blended CAC: ${{amount}}
- Paid CAC: ${{amount}}
- Organic CAC: ${{amount}}
- CAC trend: {{decreasing/stable/increasing}}

Infrastructure Costs:
- Per user cost: ${{amount}}
- Fixed platform cost: ${{amount}}/month
- Scaling factor: {{ratio}}

Team Costs:
- Average salary: ${{amount}}
- Benefits multiplier: {{factor}}
- Hiring plan: {{schedule}}
```

## Section 2: Revenue Model

### MRR Build
```markdown
Monthly Recurring Revenue Calculation:

Beginning MRR: ${{amount}}
+ New MRR: ${{amount}}
+ Expansion MRR: ${{amount}}
+ Reactivation MRR: ${{amount}}
- Churn MRR: ${{amount}}
- Contraction MRR: ${{amount}}
= Ending MRR: ${{amount}}

Growth Rate: {{%}} MoM
Net Revenue Retention: {{%}}
```

### Revenue Streams
```markdown
Subscription Revenue:
┌─────────────┬─────────┬─────────┬──────────┐
│ Tier        │ Price   │ Users   │ MRR      │
├─────────────┼─────────┼─────────┼──────────┤
│ Starter     │ ${{X}}  │ {{N}}   │ ${{MRR}} │
│ Professional│ ${{X}}  │ {{N}}   │ ${{MRR}} │
│ Enterprise  │ ${{X}}  │ {{N}}   │ ${{MRR}} │
└─────────────┴─────────┴─────────┴──────────┘

Additional Revenue:
- One-time setup fees: ${{amount}}/month
- Professional services: ${{amount}}/month
- Partner revenue: ${{amount}}/month
- Interest income: ${{amount}}/month
```

### Churn & Retention
```markdown
Churn Analysis:
- Gross logo churn: {{%}} monthly
- Gross revenue churn: {{%}} monthly
- Net revenue churn: {{%}} monthly
- Churn by segment: {{breakdown}}
- Churn by cohort age: {{pattern}}

Retention Curves:
Month 1:  100%
Month 2:  {{%}}
Month 3:  {{%}}
Month 6:  {{%}}
Month 12: {{%}}
Month 24: {{%}}
```

## Section 3: Cost Structure

### Operating Expenses
```markdown
Cost of Goods Sold (COGS):
┌─────────────────────┬──────────┬────────┐
│ Category            │ $/Month  │ % Rev  │
├─────────────────────┼──────────┼────────┤
│ Hosting/Infrastructure│ ${{X}}  │ {{%}}  │
│ Third-party APIs    │ ${{X}}   │ {{%}}  │
│ Payment processing  │ ${{X}}   │ {{%}}  │
│ Customer support    │ ${{X}}   │ {{%}}  │
│ Total COGS         │ ${{X}}   │ {{%}}  │
└─────────────────────┴──────────┴────────┘

Operating Expenses:
┌─────────────────────┬──────────┬────────┐
│ Category            │ $/Month  │ % Rev  │
├─────────────────────┼──────────┼────────┤
│ Sales & Marketing   │ ${{X}}   │ {{%}}  │
│ Research & Development│ ${{X}}  │ {{%}}  │
│ General & Admin     │ ${{X}}   │ {{%}}  │
│ Total OpEx         │ ${{X}}   │ {{%}}  │
└─────────────────────┴──────────┴────────┘
```

### Headcount Plan
```markdown
Department Growth:
┌──────────┬────┬────┬────┬────┬────┬────┐
│ Team     │ M1 │ M3 │ M6 │ M12│ M18│ M24│
├──────────┼────┼────┼────┼────┼────┼────┤
│ Product  │ {{}}│{{}}│{{}}│{{}}│{{}}│{{}}│
│ Engineering│{{}}│{{}}│{{}}│{{}}│{{}}│{{}}│
│ Sales    │ {{}}│{{}}│{{}}│{{}}│{{}}│{{}}│
│ Marketing│ {{}}│{{}}│{{}}│{{}}│{{}}│{{}}│
│ Support  │ {{}}│{{}}│{{}}│{{}}│{{}}│{{}}│
│ G&A      │ {{}}│{{}}│{{}}│{{}}│{{}}│{{}}│
│ Total    │ {{}}│{{}}│{{}}│{{}}│{{}}│{{}}│
└──────────┴────┴────┴────┴────┴────┴────┘

All-in Cost per Employee:
- Engineering: ${{amount}}/year
- Sales: ${{amount}}/year
- Marketing: ${{amount}}/year
- Support: ${{amount}}/year
- G&A: ${{amount}}/year
```

### Marketing & Sales Spend
```markdown
Customer Acquisition Costs:

Paid Channels:
- Google Ads: ${{amount}}/month
- Facebook/Instagram: ${{amount}}/month
- LinkedIn: ${{amount}}/month
- Content/SEO: ${{amount}}/month
- Events/Conferences: ${{amount}}/month
- Total: ${{amount}}/month

Sales Costs:
- Sales salaries: ${{amount}}/month
- Commissions ({{%}} of new): ${{amount}}/month
- Sales tools: ${{amount}}/month
- Travel & entertainment: ${{amount}}/month
- Total: ${{amount}}/month

CAC by Channel:
| Channel | Spend | Customers | CAC |
|---------|-------|-----------|-----|
| Paid Search | ${{X}} | {{N}} | ${{CAC}} |
| Social | ${{X}} | {{N}} | ${{CAC}} |
| Content | ${{X}} | {{N}} | ${{CAC}} |
| Sales | ${{X}} | {{N}} | ${{CAC}} |
| Blended | ${{X}} | {{N}} | ${{CAC}} |
```

## Section 4: P&L Statement

### Monthly P&L Template
```markdown
Income Statement - {{Month Year}}

Revenue:
  Subscription Revenue         ${{amount}}
  Other Revenue               ${{amount}}
  Total Revenue               ${{amount}}

Cost of Revenue:
  Infrastructure              ${{amount}}
  Support Costs              ${{amount}}
  Total COGS                 ${{amount}}
  
Gross Profit                 ${{amount}}
Gross Margin                 {{%}}

Operating Expenses:
  Sales & Marketing          ${{amount}}
  Research & Development     ${{amount}}
  General & Administrative   ${{amount}}
  Total Operating Expenses   ${{amount}}

EBITDA                       ${{amount}}
EBITDA Margin               {{%}}

Other:
  Depreciation & Amortization ${{amount}}
  Interest Income/(Expense)   ${{amount}}
  
Net Income                   ${{amount}}
Net Margin                   {{%}}
```

### Annual Summary
```markdown
Annual P&L Projections:
┌─────────┬──────────┬──────────┬──────────┐
│ Year    │ Revenue  │ EBITDA   │ Net Inc  │
├─────────┼──────────┼──────────┼──────────┤
│ Year 1  │ ${{X}}M  │ $({{X}}M)│ $({{X}}M)│
│ Year 2  │ ${{X}}M  │ $({{X}}M)│ $({{X}}M)│
│ Year 3  │ ${{X}}M  │ ${{X}}M  │ ${{X}}M  │
│ Year 4  │ ${{X}}M  │ ${{X}}M  │ ${{X}}M  │
│ Year 5  │ ${{X}}M  │ ${{X}}M  │ ${{X}}M  │
└─────────┴──────────┴──────────┴──────────┘
```

## Section 5: Cash Flow

### Cash Flow Statement
```markdown
Monthly Cash Flow:

Beginning Cash              ${{amount}}

Cash from Operations:
  Net Income               ${{amount}}
  + D&A                    ${{amount}}
  + Deferred Revenue       ${{amount}}
  - Working Capital        ${{amount}}
  Operating Cash Flow      ${{amount}}

Cash from Investing:
  Capital Expenditures     $({{amount}})
  Acquisitions            $({{amount}})
  Investing Cash Flow      $({{amount}})

Cash from Financing:
  Equity Raised           ${{amount}}
  Debt Proceeds           ${{amount}}
  Debt Payments           $({{amount}})
  Financing Cash Flow     ${{amount}}

Net Cash Flow             ${{amount}}
Ending Cash               ${{amount}}

Months of Runway:         {{number}}
```

### Burn Rate Analysis
```markdown
Burn Rate Calculation:

Gross Burn (monthly):
- Total OpEx:             ${{amount}}
- COGS:                   ${{amount}}
- CapEx:                  ${{amount}}
- Total Gross Burn:       ${{amount}}

Net Burn (monthly):
- Gross Burn:             ${{amount}}
- Less: Revenue:          $({{amount}})
- Net Burn:               ${{amount}}

Burn Multiple:            {{ratio}}
(Net Burn / Net New ARR)

Path to Default Alive:
- Current runway:         {{months}} months
- Breakeven ARR:         ${{amount}}
- Months to breakeven:   {{number}}
- Cash needed:           ${{amount}}
```

## Section 6: Unit Economics

### Customer Unit Economics
```markdown
Per Customer Metrics:

Customer Acquisition:
- Blended CAC:           ${{amount}}
- Paid CAC:              ${{amount}}
- Sales CAC:             ${{amount}}
- Time to recover:       {{months}} months

Customer Value:
- ARPU:                  ${{amount}}/month
- Gross margin/customer: ${{amount}}/month
- Expected lifetime:     {{months}} months
- LTV:                   ${{amount}}
- LTV/CAC ratio:         {{ratio}}:1

Payback & Profitability:
- CAC Payback:           {{months}} months
- Contribution margin:   {{%}}
- Customer profitable at: Month {{number}}
- 3-year value:          ${{amount}}
```

### Cohort Economics
```markdown
Cohort Performance by Vintage:
┌─────────┬──────┬────────┬────────┬───────┐
│ Cohort  │ Size │ M6 Rev │ M12 Rev│ LTV   │
├─────────┼──────┼────────┼────────┼───────┤
│ {{M1}}  │ {{N}}│ ${{X}} │ ${{X}} │ ${{X}}│
│ {{M2}}  │ {{N}}│ ${{X}} │ ${{X}} │ ${{X}}│
│ {{M3}}  │ {{N}}│ ${{X}} │ ${{X}} │ ${{X}}│
│ {{M4}}  │ {{N}}│ ${{X}} │ ${{X}} │ ${{X}}│
└─────────┴──────┴────────┴────────┴───────┘

Cohort Revenue Build:
Month 0:  ${{ARPU}} (100% of cohort)
Month 1:  ${{amount}} ({{%}} retained)
Month 3:  ${{amount}} ({{%}} retained)
Month 6:  ${{amount}} ({{%}} retained)
Month 12: ${{amount}} ({{%}} retained)
Month 24: ${{amount}} ({{%}} retained)

Cumulative Revenue: ${{total}}
ROI: {{percentage}}%
```

## Section 7: SaaS Metrics

### Key SaaS Metrics
```markdown
Growth Metrics:
┌─────────────────┬──────────┬──────────┐
│ Metric          │ Current  │ Target   │
├─────────────────┼──────────┼──────────┤
│ MRR             │ ${{X}}   │ ${{X}}   │
│ ARR             │ ${{X}}   │ ${{X}}   │
│ MoM Growth      │ {{%}}    │ {{%}}    │
│ YoY Growth      │ {{%}}    │ {{%}}    │
│ CMGR            │ {{%}}    │ {{%}}    │
└─────────────────┴──────────┴──────────┘

Efficiency Metrics:
┌─────────────────┬──────────┬──────────┐
│ Metric          │ Current  │ Target   │
├─────────────────┼──────────┼──────────┤
│ CAC             │ ${{X}}   │ ${{X}}   │
│ LTV             │ ${{X}}   │ ${{X}}   │
│ LTV/CAC         │ {{X}}:1  │ {{X}}:1  │
│ Payback Period  │ {{X}} mo │ {{X}} mo │
│ Magic Number    │ {{X}}    │ {{X}}    │
│ Burn Multiple   │ {{X}}    │ {{X}}    │
└─────────────────┴──────────┴──────────┘

Retention Metrics:
┌─────────────────┬──────────┬──────────┐
│ Metric          │ Current  │ Target   │
├─────────────────┼──────────┼──────────┤
│ Gross Churn     │ {{%}}    │ {{%}}    │
│ Net Churn       │ {{%}}    │ {{%}}    │
│ Logo Retention  │ {{%}}    │ {{%}}    │
│ Dollar Retention│ {{%}}    │ {{%}}    │
│ NPS             │ {{score}}│ {{score}}│
└─────────────────┴──────────┴──────────┘
```

### Rule of 40
```markdown
Rule of 40 Calculation:

Growth Rate:      {{%}} YoY
+ EBITDA Margin:  {{%}}
= Rule of 40:     {{score}}

Interpretation:
- 40+: Excellent balance
- 30-40: Good, room to improve
- 20-30: Need to optimize
- <20: Significant changes needed

Improvement Levers:
1. Increase growth: {{tactics}}
2. Improve margins: {{tactics}}
3. Balance both: {{approach}}
```

## Section 8: Scenario Planning

### Scenario Analysis
```markdown
Base Case:
- Growth rate: {{%}} monthly
- Churn: {{%}} monthly
- CAC: ${{amount}}
- 24-month revenue: ${{amount}}
- Cash needed: ${{amount}}

Optimistic Case ({{%}} probability):
- Growth rate: {{%}} monthly
- Churn: {{%}} monthly
- CAC: ${{amount}}
- 24-month revenue: ${{amount}}
- Cash needed: ${{amount}}

Pessimistic Case ({{%}} probability):
- Growth rate: {{%}} monthly
- Churn: {{%}} monthly
- CAC: ${{amount}}
- 24-month revenue: ${{amount}}
- Cash needed: ${{amount}}

Key Sensitivities:
| Variable | -20% | -10% | Base | +10% | +20% |
|----------|------|------|------|------|------|
| Growth Rate | ${{impact}} | ${{impact}} | ${{base}} | ${{impact}} | ${{impact}} |
| Churn Rate | ${{impact}} | ${{impact}} | ${{base}} | ${{impact}} | ${{impact}} |
| Pricing | ${{impact}} | ${{impact}} | ${{base}} | ${{impact}} | ${{impact}} |
| CAC | ${{impact}} | ${{impact}} | ${{base}} | ${{impact}} | ${{impact}} |
```

### Break-Even Analysis
```markdown
Path to Profitability:

Current State:
- Monthly revenue: ${{amount}}
- Monthly costs: ${{amount}}
- Monthly burn: ${{amount}}

Break-Even Requirements:
- Revenue needed: ${{amount}}/month
- At current growth: {{months}} months
- Customers needed: {{number}}
- Implies ARR of: ${{amount}}

Accelerated Path:
- Increase price {{%}}: {{months}} faster
- Reduce churn {{%}}: {{months}} faster
- Cut costs {{%}}: {{months}} faster
- Combined: {{months}} to breakeven
```

## Section 9: Fundraising Calculator

### Capital Requirements
```markdown
Funding Needs Analysis:

Use of Funds:
┌─────────────────┬──────────┬────────┐
│ Category        │ Amount   │ % Total│
├─────────────────┼──────────┼────────┤
│ Product Dev     │ ${{X}}M  │ {{%}}  │
│ Sales & Marketing│ ${{X}}M  │ {{%}}  │
│ Team Building   │ ${{X}}M  │ {{%}}  │
│ Working Capital │ ${{X}}M  │ {{%}}  │
│ Buffer (6mo)    │ ${{X}}M  │ {{%}}  │
│ Total Raise     │ ${{X}}M  │ 100%   │
└─────────────────┴──────────┴────────┘

Milestones to Achieve:
1. Reach ${{X}}M ARR
2. Achieve {{metric}} = {{target}}
3. Build team to {{number}}
4. Launch {{product/market}}
5. Position for Series {{next}}
```

### Valuation Framework
```markdown
Comparable Company Analysis:

Similar Companies:
| Company | Stage | ARR | Growth | Multiple | Valuation |
|---------|-------|-----|--------|----------|-----------|
| {{comp1}} | {{stage}} | ${{X}}M | {{%}} | {{X}}x | ${{X}}M |
| {{comp2}} | {{stage}} | ${{X}}M | {{%}} | {{X}}x | ${{X}}M |
| {{comp3}} | {{stage}} | ${{X}}M | {{%}} | {{X}}x | ${{X}}M |

Your Metrics:
- Current ARR: ${{amount}}
- Growth rate: {{%}}
- Implied multiple: {{X}}x
- Pre-money range: ${{low}}-{{high}}M

Dilution Analysis:
| Raise | Pre-Money | Post-Money | Dilution |
|-------|-----------|------------|----------|
| ${{X}}M | ${{X}}M | ${{X}}M | {{%}} |
| ${{X}}M | ${{X}}M | ${{X}}M | {{%}} |
| ${{X}}M | ${{X}}M | ${{X}}M | {{%}} |
```

## Section 10: KPI Dashboard

### Executive Dashboard
```markdown
Real-Time KPIs:
┌─────────────────────────────────────┐
│         EXECUTIVE DASHBOARD         │
├─────────────────────────────────────┤
│ MRR:        ${{amount}} (↑{{%}})    │
│ Customers:  {{number}} (↑{{%}})     │
│ NRR:        {{%}} (↑{{points}})     │
│ Runway:     {{months}} months       │
│ Burn:       ${{amount}}/mo          │
│ Rule of 40: {{score}}               │
└─────────────────────────────────────┘

Weekly Targets:
□ New MRR: ${{target}} (Actual: ${{actual}})
□ New Customers: {{target}} (Actual: {{actual}})
□ Churn Rate: <{{%}} (Actual: {{%}})
□ CAC: <${{target}} (Actual: ${{actual}})
```

### Department Metrics
```markdown
Sales Dashboard:
- Pipeline: ${{amount}}
- Quota attainment: {{%}}
- Sales cycle: {{days}} days
- Win rate: {{%}}
- ACV: ${{amount}}

Marketing Dashboard:
- Leads generated: {{number}}
- MQLs: {{number}}
- Cost per lead: ${{amount}}
- Conversion rate: {{%}}
- CAC by channel: {{breakdown}}

Product Dashboard:
- Feature adoption: {{%}}
- Time to value: {{days}}
- Active users: {{%}}
- Core actions/user: {{number}}
- Support tickets: {{number}}

Engineering Dashboard:
- Uptime: {{%}}
- Response time: {{ms}}
- Deploy frequency: {{number}}/week
- Bug resolution: {{hours}}
- Tech debt ratio: {{%}}
```

## Model Best Practices

### Building Your Model
1. Start simple, add complexity gradually
2. Separate assumptions from calculations
3. Use consistent time periods (monthly)
4. Build in scenario toggles
5. Validate with actual data monthly
6. Document all assumptions
7. Version control your model

### Common Pitfalls
- Over-optimistic growth rates
- Underestimating churn
- Forgetting about seasonality
- Ignoring cohort degradation
- Missing hidden costs
- Unrealistic hiring pace
- No buffer for unknowns

### Model Hygiene
```markdown
Monthly Review Checklist:
□ Update actuals vs. forecast
□ Adjust growth assumptions
□ Refine churn estimates
□ Update CAC by channel
□ Review hiring plan
□ Validate unit economics
□ Stress test scenarios
□ Calculate runway
□ Share with stakeholders
```

---

*A good financial model is a living document that evolves with your business. Keep it simple, keep it real, keep it updated.*