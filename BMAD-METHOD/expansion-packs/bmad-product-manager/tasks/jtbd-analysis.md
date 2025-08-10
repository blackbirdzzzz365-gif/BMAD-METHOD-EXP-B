# jtbd-analysis

REQUIRED: Use this task to conduct Jobs-to-be-Done analysis for product discovery

## Configuration
```yaml
task:
  name: Jobs-to-be-Done Analysis
  type: framework-based
  priority: high
  elicit: true
```

## Prerequisites
- Basic understanding of product/feature area
- Access to users or user research
- Clear scope of analysis

## Framework Overview

Jobs-to-be-Done focuses on understanding what users are trying to accomplish, not what they say they want. The framework identifies:
- **Main Job**: The core task/outcome
- **Related Jobs**: Supporting tasks
- **Emotional Jobs**: How users want to feel
- **Social Jobs**: How users want to be perceived

## Interactive Flow

### STEP 1: Context Gathering
ASK the user:
1. What product/feature area are we analyzing?
2. Who are the primary users/customers?
3. What triggered this JTBD analysis?
4. Do you have any user research or feedback to reference?

WAIT for responses before proceeding.

### STEP 2: Initial Job Hypothesis
Based on context, PRESENT initial hypothesis:
"Based on what you've shared, I believe users are trying to [main job hypothesis]. Is this accurate?"

REFINE based on feedback.

### STEP 3: Job Breakdown Analysis

#### Main Job Identification
GUIDE through questions:
1. "When users encounter [situation], what are they trying to get done?"
2. "What would success look like for them?"
3. "What progress are they trying to make in their lives?"

Document: **Main Job**: [Verb] + [Object] + [Context]
Example: "Manage team progress when working remotely"

#### Functional Job Components
EXPLORE:
- What specific tasks must be completed?
- What information do they need?
- What decisions must they make?
- What outcomes must be achieved?

#### Emotional Jobs
ASK:
- "How do users want to feel when this job is done?"
- "What anxieties are they trying to avoid?"
- "What confidence are they seeking?"

Common emotional jobs:
- Feel in control
- Feel confident
- Avoid anxiety
- Feel accomplished

#### Social Jobs
INVESTIGATE:
- "How do users want to be perceived by others?"
- "What impression are they trying to make?"
- "Whose opinion matters to them?"

### STEP 4: Current Solution Analysis
UNDERSTAND current approaches:
1. How are users solving this today?
2. What tools/processes do they use?
3. Where do current solutions fall short?
4. What workarounds have they created?

CREATE comparison:
```
Current Solution | Satisfaction | Pain Points
----------------|--------------|-------------
[Solution 1]    | Low/Med/High | [Issues]
[Solution 2]    | Low/Med/High | [Issues]
```

### STEP 5: Success Criteria Definition
DEFINE what "job done well" looks like:

**Objective Outcomes:**
- Speed: How quickly?
- Quality: How well?
- Consistency: How reliably?

**Subjective Outcomes:**
- Confidence level
- Satisfaction score
- Likelihood to recommend

### STEP 6: Opportunity Mapping
IDENTIFY opportunities:

1. **Underserved Needs**: Where current solutions fail
2. **Overserved Areas**: Where we could simplify
3. **Non-consumption**: Who isn't served at all
4. **Related Jobs**: Adjacent jobs we could address

Present as:
```
Opportunity | Impact | Effort | Priority
------------|--------|--------|----------
[Opp 1]     | High   | Medium | P1
[Opp 2]     | Medium | Low    | P2
```

### STEP 7: Solution Principles
Based on JTBD analysis, DERIVE principles:

**Must Have:**
- [Principle 1]: Addresses [core job aspect]
- [Principle 2]: Enables [key outcome]

**Should Avoid:**
- [Anti-pattern 1]: Conflicts with [job aspect]
- [Anti-pattern 2]: Creates [unwanted feeling]

### STEP 8: Feature Implications
TRANSLATE jobs into features:

| Job Component | Feature Implication | Priority |
|--------------|-------------------|----------|
| [Functional job] | [Feature idea] | High |
| [Emotional job] | [UX approach] | Medium |
| [Social job] | [Social feature] | Low |

ASK: "Which of these feature implications resonate most with your vision?"

### STEP 9: Validation Planning
PLAN validation approach:
1. Which assumptions need testing?
2. What experiments could we run?
3. What metrics would indicate success?
4. Who should we interview next?

## Deliverables
- Comprehensive JTBD statement
- Job hierarchy (main + related jobs)
- Current solution landscape
- Opportunity matrix
- Solution principles
- Feature implications
- Validation plan

## Success Metrics
- Clear, actionable job statements
- Validated with user evidence
- Differentiated from feature requests
- Actionable for product development
- Measurable success criteria

## Next Steps
OFFER:
1. Create user stories based on jobs
2. Design solution concepts
3. Plan validation experiments
4. Build PRD incorporating JTBD insights