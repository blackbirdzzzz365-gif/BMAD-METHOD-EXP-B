# Go-to-Market Template

## Template Metadata
```yaml
template:
  id: go-to-market
  name: Comprehensive GTM Strategy Template
  version: 2.0
  type: B2B/B2C adaptable
  scope: Launch to scale
  duration: 90-day sprints
```

## GTM Overview

### Strategy Framework
```markdown
GTM Components:
1. Market Definition & Segmentation
2. Value Proposition & Messaging
3. Pricing & Packaging Strategy
4. Channel Strategy & Mix
5. Sales Motion & Process
6. Marketing Plan & Campaigns
7. Customer Success Strategy
8. Launch Plan & Timeline
9. Metrics & Success Criteria
10. Scale & Optimization Plan
```

## Section 1: Market Definition

### Target Market Analysis
```markdown
Market Segmentation:

Primary Segment:
- Industry: {{industry}}
- Company size: {{range}}
- Geography: {{locations}}
- Pain points: {{list}}
- Budget: {{range}}

Secondary Segments:
- Segment 2: {{description}}
- Segment 3: {{description}}

Market Sizing:
┌─────────────┬────────┬────────┬─────────┐
│ Segment     │ TAM    │ SAM    │ SOM Y1  │
├─────────────┼────────┼────────┼─────────┤
│ Primary     │ ${{X}}B│ ${{X}}M│ ${{X}}M │
│ Secondary   │ ${{X}}B│ ${{X}}M│ ${{X}}M │
│ Total       │ ${{X}}B│ ${{X}}M│ ${{X}}M │
└─────────────┴────────┴────────┴─────────┘
```

### Ideal Customer Profile (ICP)
```markdown
B2B ICP:
Company Characteristics:
□ Industry: {{specific_verticals}}
□ Revenue: ${{min}}-{{max}}M
□ Employees: {{range}}
□ Technology: {{stack}}
□ Growth stage: {{description}}

Buyer Personas:
1. Economic Buyer
   - Title: {{titles}}
   - Priorities: {{list}}
   - Success metrics: {{KPIs}}
   - Objections: {{common}}

2. Champion/User
   - Title: {{titles}}
   - Daily pain: {{description}}
   - Feature needs: {{list}}
   - Success metrics: {{KPIs}}

3. Technical Evaluator
   - Title: {{titles}}
   - Requirements: {{list}}
   - Concerns: {{security/integration}}
   - Veto power: {{Yes/No}}

B2C ICP:
Demographics:
- Age: {{range}}
- Income: {{range}}
- Location: {{urban/suburban}}
- Education: {{level}}

Psychographics:
- Values: {{list}}
- Behaviors: {{list}}
- Media consumption: {{channels}}
- Purchase drivers: {{list}}
```

### Competitive Landscape
```markdown
Competitive Analysis:

Direct Competitors:
| Competitor | Strengths | Weaknesses | Pricing | Market Share |
|------------|-----------|------------|---------|--------------|
| {{comp1}} | {{list}} | {{list}} | ${{range}} | {{%}} |
| {{comp2}} | {{list}} | {{list}} | ${{range}} | {{%}} |
| {{comp3}} | {{list}} | {{list}} | ${{range}} | {{%}} |

Indirect/Alternative Solutions:
- Status quo: {{description}}
- DIY approach: {{description}}
- Adjacent tools: {{list}}

Our Differentiation:
1. {{unique_value_1}}
2. {{unique_value_2}}
3. {{unique_value_3}}

Competitive Positioning:
"Unlike {{competitor}}, we {{differentiation}}"
```

## Section 2: Value Proposition & Messaging

### Core Value Proposition
```markdown
Value Prop Canvas:

Customer Jobs:
1. {{functional_job}}
2. {{emotional_job}}
3. {{social_job}}

Pain Points:
1. {{pain_1}} - Severity: {{H/M/L}}
2. {{pain_2}} - Severity: {{H/M/L}}
3. {{pain_3}} - Severity: {{H/M/L}}

Gain Creators:
1. {{gain_1}} - Impact: {{H/M/L}}
2. {{gain_2}} - Impact: {{H/M/L}}
3. {{gain_3}} - Impact: {{H/M/L}}

Value Proposition Statement:
"We help {{target_customer}} achieve {{desired_outcome}} 
by {{our_solution}} unlike {{alternatives}} because {{differentiator}}"
```

### Messaging Framework
```markdown
Messaging Hierarchy:

Tagline:
"{{8-10 words capturing essence}}"

Elevator Pitch (30 seconds):
"{{Company}} helps {{target}} {{achieve_outcome}} by {{method}}. 
Unlike {{alternatives}}, we {{unique_approach}}, which means 
{{customer_benefit}}."

Key Messages by Persona:
┌──────────────┬────────────────────────────┐
│ Persona      │ Primary Message            │
├──────────────┼────────────────────────────┤
│ Executive    │ {{ROI/strategic_value}}    │
│ Manager      │ {{efficiency/control}}     │
│ End User     │ {{ease/productivity}}      │
│ IT/Technical │ {{security/integration}}   │
└──────────────┴────────────────────────────┘

Proof Points:
- {{statistic_1}}: {{context}}
- {{statistic_2}}: {{context}}
- {{customer_quote}}: {{attribution}}
- {{award/recognition}}: {{details}}
```

### Brand Voice & Tone
```markdown
Brand Personality:
- Archetype: {{expert/hero/creator/etc}}
- Voice attributes: {{list_3-5}}
- Tone variations: {{by_context}}

Do's and Don'ts:
Do:
✓ {{communication_style}}
✓ {{language_choice}}
✓ {{emotional_approach}}

Don't:
✗ {{avoid_this}}
✗ {{never_say}}
✗ {{wrong_tone}}

Example Translations:
Generic: "Our software helps you manage tasks"
On-Brand: "{{your_version}}"
```

## Section 3: Pricing & Packaging

### Pricing Strategy
```markdown
Pricing Model Analysis:

Model Selection:
□ Subscription (SaaS)
□ Usage-based
□ Tiered
□ Freemium
□ One-time purchase
□ Hybrid: {{description}}

Price Positioning:
- Premium ({{%}} above market)
- Parity (market rate)
- Penetration ({{%}} below market)

Rationale: {{explanation}}
```

### Package Design
```markdown
Tier Structure:

Free/Trial Tier:
- Duration: {{days}}
- Features: {{limited_set}}
- Limits: {{usage_caps}}
- Conversion goal: {{%}}

┌────────────┬───────────┬────────────┬──────────┐
│ Tier       │ Starter   │ Professional│Enterprise│
├────────────┼───────────┼────────────┼──────────┤
│ Price      │${{X}}/mo  │${{X}}/mo   │ Custom   │
│ Users      │ {{limit}} │ {{limit}}  │Unlimited │
│ Feature 1  │ ✓ Basic   │ ✓ Advanced │ ✓ Full   │
│ Feature 2  │ ✗         │ ✓          │ ✓        │
│ Feature 3  │ ✗         │ ✗          │ ✓        │
│ Support    │ Email     │ Priority   │Dedicated │
│ SLA        │ None      │ 99.9%      │ 99.99%   │
└────────────┴───────────┴────────────┴──────────┘

Value Metric:
- Primary: {{seats/usage/revenue}}
- Expansion trigger: {{threshold}}
- Natural upsell: {{path}}
```

### Pricing Psychology
```markdown
Pricing Tactics:

Anchoring:
- Enterprise "Call Us" anchors high
- Most popular tier highlighted
- Annual discount emphasized

Decoy Effect:
- Starter: ${{X}} (limited)
- Pro: ${{X}} (best value)
- Premium: ${{X}} (comprehensive)

Loss Aversion:
- Free trial with full features
- Grandfathering for early adopters
- Downgrade protections

Social Proof:
- "Used by {{X}}+ companies"
- "Most popular" badge
- Customer logos by tier
```

## Section 4: Channel Strategy

### Channel Mix
```markdown
Channel Portfolio:

┌─────────────────┬────────┬─────────┬──────────┐
│ Channel         │ % Mix  │ CAC     │ Quality  │
├─────────────────┼────────┼─────────┼──────────┤
│ Direct Sales    │ {{%}}  │ ${{X}}  │ {{H/M/L}}│
│ Inside Sales    │ {{%}}  │ ${{X}}  │ {{H/M/L}}│
│ Self-Service    │ {{%}}  │ ${{X}}  │ {{H/M/L}}│
│ Partner/Channel │ {{%}}  │ ${{X}}  │ {{H/M/L}}│
│ Marketplace     │ {{%}}  │ ${{X}}  │ {{H/M/L}}│
└─────────────────┴────────┴─────────┴──────────┘

Channel Selection Criteria:
- Deal size threshold: ${{amount}}
- Sales complexity: {{score}}
- Customer preference: {{research}}
- Economic efficiency: {{analysis}}
```

### Digital Channels
```markdown
Online Acquisition:

Paid Channels:
1. Search (Google, Bing)
   - Budget: ${{X}}/month
   - Target CAC: ${{X}}
   - Keywords: {{list}}

2. Social (LinkedIn, Facebook)
   - Budget: ${{X}}/month
   - Audiences: {{targeting}}
   - Creative strategy: {{approach}}

3. Display/Retargeting
   - Budget: ${{X}}/month
   - Networks: {{list}}
   - Conversion focus: {{strategy}}

Organic Channels:
1. Content/SEO
   - Publishing cadence: {{X}}/week
   - Topic clusters: {{themes}}
   - Link building: {{strategy}}

2. Social Media
   - Platforms: {{prioritized}}
   - Posting schedule: {{frequency}}
   - Engagement strategy: {{approach}}

3. Email Marketing
   - List size target: {{number}}
   - Segmentation: {{strategy}}
   - Automation flows: {{list}}
```

### Sales Channels
```markdown
Sales Motion Design:

Inside Sales (Velocity):
- Target ACV: ${{X}}-{{Y}}
- Sales cycle: {{days}}
- Touches required: {{number}}
- Tools: {{CRM/dialer/etc}}

Field Sales (Enterprise):
- Target ACV: ${{X}}+
- Sales cycle: {{days}}
- Stakeholders: {{number}}
- Process: {{stages}}

Channel Partners:
- Partner types: {{list}}
- Revenue share: {{%}}
- Enablement needs: {{list}}
- Management cadence: {{frequency}}

PLG Motion:
- Self-serve funnel: {{steps}}
- Activation triggers: {{list}}
- Sales assist points: {{where}}
- Hand-raiser signals: {{list}}
```

## Section 5: Sales Process

### Sales Methodology
```markdown
Sales Framework: {{MEDDIC/Challenger/Solution/etc}}

Stage Definitions:
┌─────────────┬──────────┬───────────┬──────────┐
│ Stage       │ Duration │ Activities│ Exit Crit│
├─────────────┼──────────┼───────────┼──────────┤
│ Prospecting │ {{days}} │ {{list}}  │ {{crit}} │
│ Discovery   │ {{days}} │ {{list}}  │ {{crit}} │
│ Demo/POC    │ {{days}} │ {{list}}  │ {{crit}} │
│ Evaluation  │ {{days}} │ {{list}}  │ {{crit}} │
│ Negotiation │ {{days}} │ {{list}}  │ {{crit}} │
│ Close       │ {{days}} │ {{list}}  │ {{crit}} │
└─────────────┴──────────┴───────────┴──────────┘

Conversion Rates:
- Lead → Opportunity: {{%}}
- Opportunity → Demo: {{%}}
- Demo → Trial: {{%}}
- Trial → Close: {{%}}
- Overall: {{%}}
```

### Sales Enablement
```markdown
Sales Tools & Resources:

Collateral:
□ Pitch deck (by persona)
□ Demo script & environment
□ ROI calculator
□ Case studies (by industry)
□ Competitive battlecards
□ Objection handling guide
□ Contract templates
□ Security documentation

Training Program:
Week 1: Product & market
Week 2: Sales methodology
Week 3: Tools & process
Week 4: Mock calls & certification

Ongoing Enablement:
- Weekly deal reviews
- Monthly skill training
- Quarterly bootcamps
- Annual sales kickoff
```

### Sales Compensation
```markdown
Compensation Structure:

SDR/BDR:
- Base: ${{X}}K
- Variable: ${{X}}K at quota
- Quota: {{meetings/opportunities}}
- Accelerators: {{structure}}

Account Executive:
- Base: ${{X}}K  
- Variable: ${{X}}K at quota
- Quota: ${{X}}K in new ARR
- Accelerators: {{structure}}
- SPIFFs: {{programs}}

Sales Leadership:
- Base: ${{X}}K
- Variable: {{%}} of team achievement
- MBOs: {{objectives}}
```

## Section 6: Marketing Plan

### Campaign Strategy
```markdown
Campaign Calendar:

Q1 Campaigns:
1. {{Campaign Name}}
   - Objective: {{goal}}
   - Channels: {{list}}
   - Budget: ${{X}}
   - Success metric: {{KPI}}

2. {{Campaign Name}}
   - Objective: {{goal}}
   - Channels: {{list}}
   - Budget: ${{X}}
   - Success metric: {{KPI}}

Seasonal Moments:
- {{Month}}: {{opportunity}}
- {{Month}}: {{opportunity}}
- {{Month}}: {{opportunity}}

Always-On Programs:
- Content marketing
- SEO optimization
- Social media
- Email nurture
- Webinar series
```

### Content Strategy
```markdown
Content Pillars:

1. Thought Leadership
   - Topics: {{themes}}
   - Formats: {{blog/video/podcast}}
   - Frequency: {{cadence}}
   - Distribution: {{channels}}

2. Product Education
   - Topics: {{features/use cases}}
   - Formats: {{tutorials/demos}}
   - Frequency: {{cadence}}
   - Distribution: {{channels}}

3. Customer Success
   - Topics: {{case studies/ROI}}
   - Formats: {{video/written}}
   - Frequency: {{cadence}}
   - Distribution: {{channels}}

Content Production:
┌──────────┬─────────┬──────────┬─────────┐
│ Type     │ Monthly │ Owner    │ Goal    │
├──────────┼─────────┼──────────┼─────────┤
│ Blog     │ {{X}}   │ {{role}} │ {{KPI}} │
│ Video    │ {{X}}   │ {{role}} │ {{KPI}} │
│ Webinar  │ {{X}}   │ {{role}} │ {{KPI}} │
│ Social   │ {{X}}   │ {{role}} │ {{KPI}} │
└──────────┴─────────┴──────────┴─────────┘
```

### Demand Generation
```markdown
Demand Gen Funnel:

Top of Funnel:
- Traffic sources: {{channels}}
- Monthly target: {{visitors}}
- Conversion rate: {{%}} to lead
- Lead target: {{number}}

Middle of Funnel:
- Lead nurture tracks: {{list}}
- MQL criteria: {{scoring}}
- MQL target: {{number}}
- MQL→SQL rate: {{%}}

Bottom of Funnel:
- SQL target: {{number}}
- Demo/trial conversion: {{%}}
- Close rate: {{%}}
- New customers: {{number}}

Lead Scoring Model:
Demographic Points:
- Title match: +{{points}}
- Company size: +{{points}}
- Industry fit: +{{points}}

Behavioral Points:
- Pricing page: +{{points}}
- Demo request: +{{points}}
- Content downloads: +{{points}}
- Email engagement: +{{points}}

MQL Threshold: {{score}}
```

## Section 7: Customer Success

### Onboarding Program
```markdown
Customer Onboarding Journey:

Pre-Launch (Before Day 0):
□ Welcome package sent
□ Kickoff call scheduled
□ Technical requirements verified
□ Success metrics defined

Week 1: Foundation
- Day 1: Kickoff & planning
- Day 2-3: Initial setup
- Day 4-5: Basic training
- Success criteria: {{milestone}}

Week 2-4: Adoption
- Advanced features training
- Use case implementation
- Team onboarding
- Success criteria: {{milestone}}

Day 30: First Value
- Business review
- ROI demonstration
- Expansion discussion
- Success criteria: {{milestone}}

Day 90: Full Adoption
- Complete implementation
- Success story documented
- Reference/case study ask
- Success criteria: {{milestone}}
```

### Success Metrics
```markdown
Customer Health Score:

Components:
┌─────────────────┬────────┬─────────┐
│ Factor          │ Weight │ Scoring │
├─────────────────┼────────┼─────────┤
│ Product usage   │ {{%}}  │ 0-100   │
│ Feature adoption│ {{%}}  │ 0-100   │
│ Support tickets │ {{%}}  │ 0-100   │
│ Invoice status  │ {{%}}  │ 0-100   │
│ Engagement      │ {{%}}  │ 0-100   │
└─────────────────┴────────┴─────────┘

Health Ratings:
- Green (80-100): Thriving
- Yellow (60-79): Attention needed
- Red (<60): At risk

Intervention Triggers:
- Usage drop >{{%}}
- Support spike >{{number}}
- Payment delay >{{days}}
- No login >{{days}}
```

### Expansion Strategy
```markdown
Land & Expand Model:

Land:
- Initial deal size: ${{X}}K
- Initial users: {{number}}
- Core use case: {{description}}

Expand Triggers:
1. Usage limits reached
2. New team adoption
3. Advanced features needed
4. Additional use cases
5. Success milestone achieved

Expansion Playbook:
Month 1-3: Establish value
Month 4-6: Identify growth
Month 7-9: Propose expansion
Month 10-12: Close upsell

Expected Expansion:
- Year 1: {{%}} increase
- Year 2: {{%}} increase
- Year 3: {{%}} increase
```

## Section 8: Launch Plan

### Pre-Launch Checklist
```markdown
T-90 Days:
□ Product ready for beta
□ Pricing finalized
□ Website updated
□ Sales materials created
□ Support documentation complete

T-60 Days:
□ Beta customer feedback incorporated
□ Launch campaign creative ready
□ PR strategy finalized
□ Sales team trained
□ Partners briefed

T-30 Days:
□ Final product testing
□ Marketing campaigns queued
□ Press embargo set
□ Customer references confirmed
□ Launch event planned

T-7 Days:
□ All systems tested
□ Team briefed on roles
□ Contingency plans ready
□ Success metrics defined
□ Celebration planned
```

### Launch Week Activities
```markdown
Launch Schedule:

Monday - Announcement
- 6 AM: Press release live
- 8 AM: Blog post published
- 9 AM: Email to database
- 10 AM: Social media blast
- 2 PM: Founder interviews

Tuesday - Amplification
- Product Hunt launch
- Influencer outreach
- Paid campaigns live
- Webinar announcement
- Partner communications

Wednesday - Engagement
- AMA/Live Q&A session
- Customer stories shared
- Media interviews
- Community activation
- Analyst briefings

Thursday - Acceleration
- Second wave email
- Retargeting campaigns
- Sales outreach begins
- Event/meetup announced
- Content syndication

Friday - Optimization
- Metrics review
- Message refinement
- Bug fixes if needed
- Thank you messages
- Plan week 2
```

### Post-Launch Plan
```markdown
Week 2-4: Sustain Momentum
- Continue PR outreach
- Publish customer stories
- Iterate on messaging
- Optimize campaigns
- Scale successful channels

Month 2-3: Build Pipeline
- Focus on conversion
- Expand to new channels
- Test new messages
- Build partner pipeline
- Gather testimonials

Month 4-6: Scale & Optimize
- Double down on what works
- Expand internationally
- Launch new segments
- Build category leadership
- Plan next launch
```

## Section 9: Metrics & Analytics

### GTM Metrics Framework
```markdown
North Star Metrics:
- Primary: {{metric}} = {{target}}
- Secondary: {{metric}} = {{target}}
- Tertiary: {{metric}} = {{target}}

Leading Indicators:
┌─────────────────┬──────────┬──────────┐
│ Metric          │ Target   │ Actual   │
├─────────────────┼──────────┼──────────┤
│ Website traffic │ {{X}}    │ {{Y}}    │
│ Leads generated │ {{X}}    │ {{Y}}    │
│ Demos scheduled │ {{X}}    │ {{Y}}    │
│ Trials started  │ {{X}}    │ {{Y}}    │
│ Pipeline built  │ ${{X}}   │ ${{Y}}   │
└─────────────────┴──────────┴──────────┘

Lagging Indicators:
┌─────────────────┬──────────┬──────────┐
│ Metric          │ Target   │ Actual   │
├─────────────────┼──────────┼──────────┤
│ New customers   │ {{X}}    │ {{Y}}    │
│ Revenue         │ ${{X}}   │ ${{Y}}   │
│ CAC             │ ${{X}}   │ ${{Y}}   │
│ Payback period  │ {{X}} mo │ {{Y}} mo │
│ NPS             │ {{X}}    │ {{Y}}    │
└─────────────────┴──────────┴──────────┘
```

### Attribution Model
```markdown
Multi-Touch Attribution:

Model: {{First/Last/Linear/U-Shaped/Custom}}

Touch Points Tracked:
1. First touch: {{weight}}%
2. Lead creation: {{weight}}%
3. MQL conversion: {{weight}}%
4. Opportunity creation: {{weight}}%
5. Closed won: {{weight}}%

Channel Performance:
| Channel | Touches | Influence | Revenue | ROI |
|---------|---------|-----------|---------|-----|
| Paid Search | {{X}} | {{%}} | ${{X}} | {{X}}:1 |
| Content | {{X}} | {{%}} | ${{X}} | {{X}}:1 |
| Email | {{X}} | {{%}} | ${{X}} | {{X}}:1 |
| Social | {{X}} | {{%}} | ${{X}} | {{X}}:1 |
| Direct | {{X}} | {{%}} | ${{X}} | {{X}}:1 |
```

### Reporting Cadence
```markdown
Daily Dashboard:
- New signups
- Active trials
- Pipeline created
- Deals closed
- Support tickets

Weekly Report:
- Funnel conversion rates
- Campaign performance
- Sales activity metrics
- Customer health scores
- Competitive wins/losses

Monthly Business Review:
- Revenue vs. plan
- CAC and payback
- Retention metrics
- Market share gains
- Strategic initiatives progress

Quarterly Board Report:
- GTM strategy performance
- Market expansion status
- Competitive positioning
- Team scaling update
- Next quarter priorities
```

## Section 10: Scale & Optimization

### Growth Experiments
```markdown
Experiment Queue:

High Priority:
1. {{Experiment name}}
   - Hypothesis: {{statement}}
   - Success metric: {{KPI}}
   - Duration: {{weeks}}
   - Resources: {{needs}}

2. {{Experiment name}}
   - Hypothesis: {{statement}}
   - Success metric: {{KPI}}
   - Duration: {{weeks}}
   - Resources: {{needs}}

Experiment Framework:
- Velocity: {{X}} tests/month
- Success rate target: {{%}}
- Learning documentation: {{process}}
- Scaling winners: {{approach}}
```

### International Expansion
```markdown
Market Entry Strategy:

Phase 1 Markets:
- {{Country 1}}: {{rationale}}
- {{Country 2}}: {{rationale}}

Localization Requirements:
□ Product translation
□ Currency/payment methods
□ Legal compliance
□ Local support hours
□ Cultural messaging adaptation

Go-to-Market Approach:
- Remote first: {{timeline}}
- Local partners: {{strategy}}
- Local team: {{hiring plan}}
- Marketing localization: {{approach}}
```

### Category Creation
```markdown
Category Leadership Plan:

Category Definition:
- Name: {{category}}
- Problem it solves: {{description}}
- Why now: {{timing}}
- Market size: ${{TAM}}

Thought Leadership:
- Key messages: {{list}}
- Content strategy: {{approach}}
- Speaking opportunities: {{targets}}
- Analyst relations: {{firms}}
- Media strategy: {{outlets}}

Community Building:
- User conference planning
- Online community platform
- Certification program
- Partner ecosystem
- Open source strategy
```

## GTM Success Patterns

### Best Practices
1. Start narrow, expand gradually
2. Validate before scaling
3. Measure everything, focus on what matters
4. Customer feedback drives iteration
5. Sales and marketing alignment critical
6. Pricing is a lever, not a set-and-forget
7. Category creation takes years, not months

### Common Pitfalls
- Trying to be everything to everyone
- Scaling before product-market fit
- Underestimating CAC
- Ignoring customer success
- Channel conflict
- Pricing too low
- Weak differentiation

### GTM Health Check
```markdown
Monthly GTM Review:
□ Pipeline coverage for goals
□ CAC trending right direction  
□ Win rates stable/improving
□ Customer satisfaction high
□ Team morale strong
□ Competitive wins increasing
□ Market share growing
□ Investors confident
```

---

*Great go-to-market is about finding the right customers, delivering clear value, and doing it profitably at scale. Everything else is optimization.*