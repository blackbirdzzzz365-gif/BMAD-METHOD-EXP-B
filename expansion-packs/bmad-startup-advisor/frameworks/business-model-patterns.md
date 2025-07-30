# Business Model Patterns Framework

## Framework Overview
```yaml
framework:
  id: business-model-patterns
  name: Startup Business Model Patterns
  purpose: Standard patterns for sustainable revenue generation
  categories:
    - subscription
    - marketplace
    - freemium
    - saas
    - platform
    - direct_sales
  focus: Unit economics and scalability
```

## Core Business Models

### 1. SaaS (Software as a Service)
```markdown
Overview: Recurring software subscription

Key Metrics:
- MRR/ARR (Monthly/Annual Recurring Revenue)
- CAC (Customer Acquisition Cost)
- LTV (Lifetime Value)
- Churn Rate
- NRR (Net Revenue Retention)

Unit Economics Target:
- LTV:CAC ratio > 3:1
- CAC Payback < 12 months
- Gross Margin > 70%
- Annual Churn < 10%

Revenue Formula:
Revenue = Users × ARPU × (1 - Churn Rate)

Examples: Salesforce, Slack, Zoom
```

#### SaaS Pricing Models
```markdown
1. Per Seat Pricing
   - Best for: Collaboration tools
   - Example: $10/user/month
   - Pros: Scales with company size
   - Cons: Encourages account sharing

2. Usage-Based Pricing
   - Best for: Infrastructure/API
   - Example: $0.01 per API call
   - Pros: Aligns with value
   - Cons: Unpredictable revenue

3. Tiered Pricing
   - Best for: Diverse customer base
   - Example: Starter/Pro/Enterprise
   - Pros: Clear upgrade path
   - Cons: Feature gating complexity

4. Flat Rate
   - Best for: Simple tools
   - Example: $99/month unlimited
   - Pros: Simple to understand
   - Cons: No expansion revenue
```

### 2. Marketplace
```markdown
Overview: Connect buyers and sellers, take commission

Key Metrics:
- GMV (Gross Merchandise Value)
- Take Rate (Commission %)
- Liquidity (Supply/Demand balance)
- Transaction Frequency
- CAC for both sides

Unit Economics Target:
- Take Rate: 10-30%
- Contribution Margin > 20%
- Seller CAC < 6 months GMV
- Buyer CAC < 3 transactions

Revenue Formula:
Revenue = GMV × Take Rate

Examples: Airbnb (25%), eBay (10%), Uber (20%)
```

#### Marketplace Dynamics
```markdown
Chicken & Egg Solutions:
1. Single Player Mode
   - Provide value to one side first
   - Example: OpenTable (restaurants)

2. Fake Supply
   - Manually provide initial supply
   - Example: Reddit (fake users)

3. Geographic Constraint
   - Start hyperlocal
   - Example: Uber (San Francisco)

4. Category Focus
   - Narrow vertical first
   - Example: Etsy (handmade)

Trust & Safety Requirements:
- Identity verification
- Ratings/reviews
- Payment protection
- Dispute resolution
- Insurance options
```

### 3. Freemium
```markdown
Overview: Free tier with paid upgrades

Key Metrics:
- Free-to-Paid Conversion Rate
- ARPU (Average Revenue Per User)
- Viral Coefficient
- Feature Usage by Tier
- Upgrade/Downgrade Rate

Unit Economics Target:
- Conversion Rate: 2-5%
- Free User CAC < $1
- Paid User LTV > $500
- Viral Coefficient > 0.5

Revenue Formula:
Revenue = Total Users × Conversion Rate × ARPU

Examples: Spotify (25% paid), Dropbox (4% paid)
```

#### Freemium Strategies
```markdown
Limitation Types:
1. Feature Limitations
   - Core features free
   - Advanced features paid
   - Example: Zoom (40-min limit)

2. Usage Limitations
   - Quantity caps
   - Example: Mailchimp (2K contacts)

3. Support Limitations
   - Self-service free
   - Support paid
   - Example: Most SaaS

4. Collaboration Limitations
   - Single user free
   - Teams paid
   - Example: Figma

Conversion Triggers:
- Hit usage limit
- Need advanced feature
- Team collaboration
- Better support
- Remove branding
```

### 4. Platform/Ecosystem
```markdown
Overview: Enable others to build on your infrastructure

Key Metrics:
- Developer Adoption
- API Calls/Usage
- App Ecosystem Size
- Platform Revenue Share
- Developer Success Rate

Unit Economics Target:
- Developer CAC < First Year Revenue
- Platform Take Rate: 15-30%
- Top 20% developers = 80% revenue
- Gross Margin > 60%

Revenue Formula:
Revenue = Σ(Developer Revenue × Platform Rate)

Examples: Apple App Store (30%), Shopify (20%)
```

### 5. Direct Sales/E-commerce
```markdown
Overview: Sell products directly to consumers

Key Metrics:
- AOV (Average Order Value)
- Conversion Rate
- Repeat Purchase Rate
- Gross Margin
- Inventory Turnover

Unit Economics Target:
- Gross Margin > 40%
- CAC < First Order Profit
- Repeat Rate > 20% in 90 days
- AOV Growth YoY

Revenue Formula:
Revenue = Traffic × Conversion × AOV × Frequency

Examples: Warby Parker, Dollar Shave Club
```

### 6. Subscription Commerce
```markdown
Overview: Recurring physical product delivery

Key Metrics:
- Subscriber Growth Rate
- Churn Rate
- Box Economics
- Personalization Impact
- Acquisition Channels

Unit Economics Target:
- Gross Margin > 50%
- 6-Month Retention > 70%
- CAC Payback < 6 months
- Positive Unit Economics by Box 3

Revenue Formula:
Revenue = Subscribers × Price × (1 - Churn)

Examples: BarkBox, Blue Apron, Stitch Fix
```

## Business Model Selection Matrix

```markdown
Choose Based On:

High Transaction Frequency + Low AOV → Subscription
- Examples: Netflix, Spotify
- Focus: Retention and engagement

Two-Sided Network → Marketplace
- Examples: Airbnb, Uber
- Focus: Liquidity and trust

B2B Software → SaaS
- Examples: Salesforce, Slack
- Focus: Stickiness and expansion

Consumer Software → Freemium
- Examples: Dropbox, Evernote
- Focus: Conversion and viral

Developer Tools → Platform
- Examples: Stripe, Twilio
- Focus: Documentation and reliability

Physical Products → E-commerce/DTC
- Examples: Allbirds, Casper
- Focus: Brand and experience
```

## Hybrid Models

### SaaS + Marketplace
```markdown
Example: Shopify
- SaaS: Monthly subscription
- Marketplace: Payment processing fees
- Platform: App store commission

Benefits:
- Multiple revenue streams
- Higher customer LTV
- Stronger lock-in

Challenges:
- Complex pricing
- Multiple success metrics
- Resource allocation
```

### Freemium + Ads
```markdown
Example: Spotify
- Free tier with ads
- Paid tier without ads
- Additional premium features

Benefits:
- Monetize free users
- Upgrade incentive
- Market penetration

Challenges:
- User experience balance
- Ad inventory management
- Conversion optimization
```

## Key Success Factors by Model

### SaaS Success Factors
1. **Low Churn** - Product stickiness
2. **Expansion Revenue** - Grow accounts
3. **High Gross Margins** - Efficient delivery
4. **Short Sales Cycle** - Quick decisions
5. **Multi-Year Contracts** - Predictability

### Marketplace Success Factors
1. **Network Effects** - More valuable at scale
2. **Trust & Safety** - Transaction confidence
3. **Supply Differentiation** - Unique inventory
4. **Demand Generation** - Buyer acquisition
5. **Geographic Density** - Local liquidity

### Freemium Success Factors
1. **Product-Led Growth** - Self-serve adoption
2. **Clear Upgrade Path** - Obvious value
3. **Low Marginal Cost** - Free users cheap
4. **Viral Mechanics** - Built-in sharing
5. **Usage-Based Limits** - Natural triggers

## Financial Model Templates

### SaaS Financial Model
```markdown
Month 1 Assumptions:
- New Customers: 10
- ARPU: $100
- Churn: 5%
- CAC: $300

Monthly Projection:
Revenue = Customers × ARPU
Costs = CAC × New + OpEx
Profit = Revenue - Costs

Key Ratios to Track:
- LTV = ARPU ÷ Churn Rate
- CAC Recovery = CAC ÷ ARPU
- Rule of 40 = Growth % + Profit %
```

### Marketplace Financial Model
```markdown
Month 1 Assumptions:
- Sellers: 100
- Buyers: 1000
- Transactions: 200
- AOV: $50
- Take Rate: 20%

Monthly Projection:
GMV = Transactions × AOV
Revenue = GMV × Take Rate
Costs = Seller CAC + Buyer CAC + OpEx

Key Ratios:
- Liquidity = Transactions/Listings
- Cross-side Network Effect
- Geographic Penetration
```

## Common Pitfalls

### SaaS Pitfalls
- Underpricing relative to value
- High churn from poor onboarding
- Feature creep reducing focus
- Sales-led when should be product-led

### Marketplace Pitfalls
- Focusing on supply before demand
- Take rate too high initially
- Poor trust/safety investment
- Geographic expansion too fast

### Freemium Pitfalls
- Free tier too generous
- No clear upgrade trigger
- Supporting free users too expensive
- Conversion rate optimization ignored

## Evolution Patterns

### Typical Evolution Path
```markdown
Stage 1: Direct Sales
- Validate demand
- Understand customers
- Manual fulfillment

Stage 2: Subscription
- Recurring revenue
- Predictable growth
- Higher valuations

Stage 3: Platform
- Ecosystem development
- Network effects
- Competitive moat

Stage 4: Multi-Model
- Revenue diversification
- Market expansion
- Category leadership
```

## Integration Points

### With Lean Startup
- Test business model assumptions
- Validate pricing early
- Measure unit economics

### With Growth Framework
- Scale proven model
- Optimize key metrics
- Expand revenue streams

### With Other Packs
- Product Manager: Feature decisions based on model
- Market Researcher: TAM by business model
- PMO Agile: Development priorities

## Action Items

1. **Choose Primary Model**
   - Match to customer behavior
   - Consider competitive landscape
   - Align with capabilities

2. **Define Unit Economics**
   - Set target metrics
   - Build financial model
   - Track from day one

3. **Test Pricing**
   - Start higher than comfortable
   - A/B test options
   - Measure elasticity

4. **Plan Evolution**
   - Know next model
   - Set trigger points
   - Prepare capabilities

---

*The best business model is the one that aligns customer value with company revenue in a scalable way.*