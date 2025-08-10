# PMO Agile Pack Structure Guide

## Overview
This guide provides detailed instructions for agents on how to navigate and use the PMO Agile pack components. Follow this structure strictly for consistent project management.

## Directory Structure

```
bmad-pmo-agile/
├── config.yaml                    # Pack configuration
├── PACK_STRUCTURE_GUIDE.md       # This file - how to use the pack
│
├── agents/                       # PMO specialist agents
│   ├── agile-coach.md           # Agile transformation and team coaching
│   ├── release-train-engineer.md # SAFe Release Train coordination
│   ├── portfolio-manager.md     # Portfolio level management
│   └── metrics-analyst.md       # Agile metrics and reporting
│
├── frameworks/                   # SAFe and agile frameworks
│   ├── essential-safe-framework.md      # Complete Essential SAFe guide
│   ├── roam-risk-management.md         # ROAM risk framework
│   ├── agile-transformation-model.md   # Transformation approach
│   ├── flow-metrics-framework.md       # Team and portfolio metrics
│   └── pi-planning-framework.md        # Program Increment planning
│
├── tasks/                       # Executable PMO tasks
│   ├── conduct-pi-planning.md          # Facilitate PI planning event
│   ├── manage-sprint-coordination.md   # Sprint-level coordination
│   ├── assess-agile-maturity.md        # Maturity assessment
│   ├── implement-safe-practices.md     # SAFe implementation
│   ├── track-program-risks.md          # ROAM risk tracking
│   └── generate-flow-metrics.md        # Metrics generation
│
├── templates/                   # Ready-to-use templates
│   ├── pi-planning-agenda-tmpl.md      # 2-day PI planning agenda
│   ├── sprint-ceremony-guides-tmpl.md  # All Scrum ceremonies
│   ├── roam-board-tmpl.md             # Risk tracking board
│   ├── agile-metrics-dashboard-tmpl.md # Metrics dashboard
│   ├── transformation-roadmap-tmpl.md  # Agile transformation plan
│   ├── retrospective-formats-tmpl.md   # Various retro formats
│   └── portfolio-kanban-tmpl.md       # Portfolio management
│
├── workflows/                   # Adaptive workflows
│   ├── agile-transformation-workflow.md # Guide organizations to agile
│   ├── safe-implementation-workflow.md  # Implement Essential SAFe
│   ├── pi-execution-workflow.md        # Run a complete PI
│   └── portfolio-management-workflow.md # Manage portfolio level
│
└── data/                       # Reference materials
    ├── safe-glossary.yaml             # SAFe terminology
    ├── agile-principles.md            # Agile manifesto & principles
    ├── ceremony-checklists.yaml       # Detailed ceremony guides
    └── metrics-definitions.yaml       # Metric calculations

```

## How Agents Should Use Each Folder

### 1. `/agents` - Agent Activation
**Purpose:** Define specialist roles and their capabilities

**Usage by Agents:**
```markdown
When user requests PMO help:
1. Identify which agent is needed based on request
2. Load agent personality and expertise
3. Follow agent's specific commands and workflows
4. Maintain agent's communication style
```

**Agent Selection Logic:**
- Agile transformation → `agile-coach`
- PI/Sprint coordination → `release-train-engineer`
- Portfolio decisions → `portfolio-manager`
- Metrics/reporting → `metrics-analyst`

### 2. `/frameworks` - Methodology Guides
**Purpose:** Provide step-by-step methodology implementation

**Usage by Agents:**
```markdown
When implementing SAFe or agile practices:
1. Reference the specific framework needed
2. Follow the framework steps EXACTLY as documented
3. Adapt only at designated "adaptive decision points"
4. Use framework outputs as inputs to templates
```

**Framework Selection:**
- New to agile → Start with `agile-transformation-model.md`
- Implementing SAFe → Use `essential-safe-framework.md`
- Managing risks → Apply `roam-risk-management.md`
- Planning PI → Follow `pi-planning-framework.md`
- Measuring progress → Use `flow-metrics-framework.md`

### 3. `/tasks` - Executable Actions
**Purpose:** Specific activities agents perform with users

**Usage by Agents:**
```markdown
When executing PMO activities:
1. Load the appropriate task file
2. Set elicit: true for user interaction
3. Follow the task flow step-by-step
4. Collect all required inputs before proceeding
5. Generate outputs using linked templates
```

**Task Triggers:**
- "Let's plan our PI" → `conduct-pi-planning.md`
- "Help coordinate sprints" → `manage-sprint-coordination.md`
- "Assess our agile maturity" → `assess-agile-maturity.md`
- "Track our risks" → `track-program-risks.md`

### 4. `/templates` - Output Formats
**Purpose:** Standardized documents and artifacts

**Usage by Agents:**
```markdown
When creating deliverables:
1. Select template based on task output needs
2. Fill ALL template variables
3. Maintain template structure exactly
4. Output in markdown format
5. Include all sections (mark N/A if not applicable)
```

**Template Mapping:**
- PI Planning → `pi-planning-agenda-tmpl.md`
- Risk Management → `roam-board-tmpl.md`
- Metrics → `agile-metrics-dashboard-tmpl.md`
- Ceremonies → `sprint-ceremony-guides-tmpl.md`

### 5. `/workflows` - Multi-Phase Processes
**Purpose:** Complex, adaptive multi-step processes

**Usage by Agents:**
```markdown
When managing long-term initiatives:
1. Assess initial conditions using workflow questions
2. Select appropriate path based on answers
3. Execute phases in sequence (unless parallel is specified)
4. Check phase gates before proceeding
5. Adapt based on workflow decision trees
```

**Workflow Selection:**
- Organization new to agile → `agile-transformation-workflow.md`
- Implementing SAFe → `safe-implementation-workflow.md`
- Running PIs → `pi-execution-workflow.md`
- Portfolio management → `portfolio-management-workflow.md`

### 6. `/data` - Reference Information
**Purpose:** Lookup data and definitions

**Usage by Agents:**
```markdown
When needing definitions or references:
1. Load appropriate data file
2. Use for terminology consistency
3. Reference in explanations to users
4. Ensure accuracy in framework implementation
```

## Integration Rules with Other Packs

### With Product Manager Pack
```yaml
integration_points:
  - backlog_refinement:
      trigger: "PI Planning preparation"
      handoff: "Product backlog items"
      owner: "product-lead provides, RTE facilitates"
  
  - prioritization:
      trigger: "Portfolio review"
      handoff: "Strategic themes"
      owner: "portfolio-manager aligns with product-lead"
```

### With Strategy Consulting Pack
```yaml
integration_points:
  - strategic_alignment:
      trigger: "Annual planning"
      handoff: "OKRs and strategic themes"
      owner: "senior-partner provides, portfolio-manager executes"
  
  - transformation:
      trigger: "Agile transformation"
      handoff: "Change management plan"
      owner: "agile-coach partners with org-design-expert"
```

### With Market Research Pack
```yaml
integration_points:
  - market_insights:
      trigger: "PI Planning inputs"
      handoff: "Market trends and customer feedback"
      owner: "market-research-lead provides, RTE incorporates"
```

## Strict Execution Guidelines

### 1. Always Start with Context
Before using any component, agents MUST:
- Understand user's agile maturity level
- Identify team or portfolio scope
- Determine SAFe implementation stage
- Check for integration needs with other packs

### 2. Follow Framework Hierarchy
```
1. Check workflows first (for multi-phase initiatives)
2. If no workflow fits, check frameworks
3. Use tasks for specific activities
4. Apply templates for all outputs
5. Reference data for accuracy
```

### 3. Maintain SAFe Terminology
Always use official SAFe terms:
- Program Increment (PI), not "quarter" or "release"
- Iteration, not just "sprint"
- Features and Stories, not "requirements"
- ROAM for risks, not generic risk management

### 4. Adaptive Decision Points
Only adapt at these designated points:
- Agile maturity assessment results
- Team size (single team vs multiple teams)
- Portfolio complexity (simple vs complex)
- Tool availability (basic vs advanced)

### 5. Quality Standards
Every output MUST include:
- Clear acceptance criteria
- Defined roles (RACI when applicable)
- Success metrics
- Timeline/cadence
- Integration touchpoints

## Common Agent Workflows

### Scenario 1: New Team Needs Agile Help
```
1. agile-coach activates
2. Run assess-agile-maturity.md task
3. Based on results, select workflow:
   - If new: agile-transformation-workflow.md
   - If experienced: safe-implementation-workflow.md
4. Generate transformation-roadmap using template
5. Hand off to RTE for execution
```

### Scenario 2: PI Planning Time
```
1. release-train-engineer activates
2. Check pi-planning-framework.md
3. Execute conduct-pi-planning.md task
4. Use pi-planning-agenda-tmpl.md
5. Coordinate with product-lead for backlog
6. Generate PI objectives and risk board
```

### Scenario 3: Portfolio Reporting Needed
```
1. metrics-analyst activates
2. Reference flow-metrics-framework.md
3. Run generate-flow-metrics.md task
4. Use agile-metrics-dashboard-tmpl.md
5. Include portfolio-kanban status
6. Share with portfolio-manager for decisions
```

## Error Prevention

### Common Mistakes to Avoid
1. ❌ Don't mix traditional PM with agile terms
2. ❌ Don't skip agile maturity assessment
3. ❌ Don't implement all SAFe layers at once
4. ❌ Don't ignore team-level basics for portfolio
5. ❌ Don't create metrics without clear purpose

### Required Validations
Before any major activity:
- ✓ Confirm user has necessary prerequisites
- ✓ Verify integration dependencies available
- ✓ Check team/organization readiness
- ✓ Ensure executive support for changes
- ✓ Validate tool/infrastructure capability

## Success Patterns

### Pattern 1: Incremental Implementation
Start small → Prove value → Scale up → Optimize

### Pattern 2: Metrics-Driven Decisions
Baseline → Measure → Inspect → Adapt

### Pattern 3: Collaborative Integration
PMO facilitates → Teams execute → Leadership supports

### Pattern 4: Continuous Improvement
Retrospect → Identify improvements → Implement → Measure

---

**Remember:** This pack is designed to GUIDE and FACILITATE, not command and control. Maintain servant leadership mindset while following these structures.