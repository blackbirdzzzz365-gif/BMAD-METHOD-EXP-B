# platform-feature-analysis

REQUIRED: Use this task to analyze platform vs feature decisions

## Configuration
```yaml
task:
  name: Platform vs Feature Decision Analysis
  type: strategic-analysis
  priority: high
  elicit: true
```

## Prerequisites
- Clear understanding of the capability being considered
- Knowledge of current architecture
- Vision for future product direction

## Framework Overview

Platform investments create reusable capabilities that enable multiple features. Feature investments solve specific user problems directly. This analysis helps decide which approach creates more long-term value.

## Interactive Flow

### STEP 1: Capability Definition
GATHER context:
1. What capability/functionality are we considering?
2. What problem does it solve?
3. Who are the users (internal/external)?
4. What triggered this analysis?
5. What's the timeline pressure?

WAIT for detailed responses.

### STEP 2: Use Case Exploration
EXPLORE current and future use cases:

**Current Needs:**
ASK: "What immediate problem needs solving?"
- Specific user request
- Current pain point
- Competitive gap

**Future Possibilities:**
ASK: "What other problems could this solve if built as a platform?"
- Similar problems in other areas
- Future product roadmap needs
- Partner/ecosystem opportunities

CREATE use case matrix:
```
Use Case | User | Frequency | Value | Certainty
---------|------|-----------|-------|----------
[Case 1] | [Who] | Daily | High | Confirmed
[Case 2] | [Who] | Weekly | Med | Likely
[Case 3] | [Who] | Monthly | Low | Possible
```

### STEP 3: Architecture Analysis
EVALUATE technical implications:

**Feature Approach:**
- Scope: Narrow, specific solution
- Complexity: Lower, focused
- Time to market: Faster
- Flexibility: Limited to use case
- Maintenance: Isolated

**Platform Approach:**
- Scope: Broad, extensible capability
- Complexity: Higher, abstracted
- Time to market: Slower initially
- Flexibility: Supports many use cases
- Maintenance: Centralized

ASK: "What would the architecture look like for each approach?"

### STEP 4: Cost-Benefit Analysis
QUANTIFY both approaches:

**Feature Approach Costs:**
- Initial development: [X] person-months
- Maintenance: [Y] person-months/year
- Future extensions: [Z] per new use case
- Technical debt: [Accumulated over time]

**Platform Approach Costs:**
- Initial development: [2-3X] person-months
- Maintenance: [1.5Y] person-months/year
- Future extensions: [0.2Z] per new use case
- Technical debt: [Managed centrally]

**Break-even Analysis:**
"How many use cases before platform pays off?"
Platform becomes worthwhile at [N] use cases

### STEP 5: Risk Assessment
IDENTIFY risks for each approach:

**Feature Approach Risks:**
- Proliferation of similar solutions
- Inconsistent user experience
- Higher long-term maintenance
- Difficult to extend/modify
- Technical debt accumulation

**Platform Approach Risks:**
- Over-engineering
- Delayed time to market
- May not meet all specific needs
- Higher initial investment
- Adoption challenges

SCORE risks (High/Medium/Low) and mitigation strategies.

### STEP 6: Strategic Alignment
EVALUATE strategic fit:

Questions to consider:
1. Does this align with product vision?
2. Is this a core differentiator?
3. Will competitors need this too?
4. Does this enable new business models?
5. Is this part of our platform strategy?

Strategic Scoring:
```
Factor | Feature | Platform | Winner
-------|---------|----------|--------
Vision Alignment | Med | High | Platform
Differentiation | Low | High | Platform
Speed to Market | High | Low | Feature
Future Flexibility | Low | High | Platform
```

### STEP 7: Phased Approach Evaluation
CONSIDER hybrid strategy:

"Could we start with a feature and evolve to platform?"

**Phase 1**: Feature implementation
- Solve immediate need
- Learn from usage
- Validate assumptions

**Phase 2**: Platform extraction
- Identify patterns
- Abstract capabilities
- Build platform layer

ASSESS: "Is this evolutionary approach viable?"

### STEP 8: Stakeholder Impact
ANALYZE organizational implications:

**Feature Approach:**
- Who owns it? [Single team]
- Who maintains it? [Same team]
- Who can extend it? [Limited]
- Documentation needs? [Minimal]

**Platform Approach:**
- Who owns it? [Platform team]
- Who maintains it? [Centralized]
- Who can extend it? [All teams]
- Documentation needs? [Extensive]

ASK: "Do we have the organizational structure to support a platform?"

### STEP 9: Decision Framework
APPLY decision criteria:

**Choose FEATURE when:**
- Single, well-defined use case
- Speed to market critical
- Limited reuse expected
- Resource constrained
- Proving market need

**Choose PLATFORM when:**
- Multiple use cases identified
- Core to product strategy
- High reuse expected
- Technical debt concerns
- Ecosystem play

**Score each criterion:**
| Criterion | Weight | Feature | Platform |
|-----------|---------|---------|----------|
| Use cases | 25% | 1 | 5 |
| Strategic | 25% | 2 | 5 |
| Resources | 20% | 5 | 2 |
| Timeline | 20% | 5 | 2 |
| Risk | 10% | 3 | 3 |
| **Total** | 100% | **3.0** | **3.6** |

### STEP 10: Recommendation and Next Steps
SYNTHESIZE analysis:

**Recommendation:** [Platform/Feature/Phased]

**Rationale:**
1. [Key reason 1]
2. [Key reason 2]
3. [Key reason 3]

**Success Criteria:**
- [Metric 1]
- [Metric 2]
- [Metric 3]

**Next Steps:**
1. Socialize decision with stakeholders
2. Create technical design doc
3. Establish ownership model
4. Build implementation roadmap
5. Define success metrics

## Deliverables
- Platform vs Feature analysis matrix
- Cost-benefit comparison
- Risk assessment
- Strategic alignment score
- Phased approach plan (if applicable)
- Final recommendation with rationale

## Success Metrics
- Clear decision rationale
- Stakeholder alignment
- Quantified trade-offs
- Actionable next steps
- Measurable success criteria