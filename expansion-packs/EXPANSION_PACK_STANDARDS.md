# BMAD Expansion Pack Standards

## Overview
This document defines the standards for all BMAD expansion packs to ensure consistency, reliability, and quality across the ecosystem.

## 1. Required Structure

Each expansion pack MUST have:

```
expansion-packs/
└── bmad-[pack-name]/
    ├── config.yaml           # Pack configuration
    ├── agents/              # Agent definitions (minimum 3)
    ├── tasks/               # Reusable tasks (minimum 3)
    ├── templates/           # Output templates (minimum 3)
    ├── workflows/           # Multi-step workflows (optional)
    ├── frameworks/          # Domain frameworks (optional)
    ├── data/               # Knowledge bases (optional)
    └── agent-teams/        # Team configurations (optional)
```

## 2. Agent Standards

### Required Elements
- **Activation Block**: YAML format with clear trigger
- **Persona**: Name, role, background, expertise
- **Commands**: Minimum 5 domain-specific commands
- **Dependencies**: Links to tasks, templates, frameworks
- **Interaction Style**: Professional tone guidelines

### Quality Criteria
- ✅ Clear activation instructions
- ✅ Distinct personality and expertise
- ✅ Actionable commands with examples
- ✅ Integration with other agents
- ✅ Error handling guidance

## 3. Task Standards

### Required Elements
- **Header**: ID, name, agent, elicit setting
- **Purpose**: Clear description of task outcome
- **Interactive Flow**: Step-by-step with user prompts
- **Deliverables**: Specific outputs expected
- **Dependencies**: Required inputs/context

### Quality Criteria
- ✅ User interaction points (elicit: true)
- ✅ Clear success criteria
- ✅ Structured workflow
- ✅ Output templates referenced
- ✅ Completion validation

## 4. Template Standards

### Required Elements
- **Metadata**: ID, name, version, output format
- **Workflow**: Mode (interactive/structured/checklist)
- **Sections**: Hierarchical content structure
- **Variables**: Placeholder syntax {{variable}}
- **Instructions**: Clear guidance for each section

### Template Types
1. **Reports**: Comprehensive analysis documents
2. **Checklists**: Step-by-step validation
3. **Frameworks**: Structured decision tools
4. **Presentations**: Executive-ready outputs

## 5. Cross-Pack Integration

### Integration Points
- Agent references using @agent-name
- Shared framework usage
- Common template formats
- Workflow handoffs
- Data sharing protocols

### Collaboration Standards
- Clear handoff points defined
- Input/output contracts specified
- Error handling for missing dependencies
- Graceful degradation without dependencies

## 6. Quality Assurance Checklist

### Pack Completeness
- [ ] config.yaml with proper metadata
- [ ] Minimum 3 agents with full specs
- [ ] Minimum 3 interactive tasks
- [ ] Minimum 3 professional templates
- [ ] README with usage examples
- [ ] Integration documentation

### Agent Quality
- [ ] Activation YAML properly formatted
- [ ] Unique expertise defined
- [ ] Commands are actionable
- [ ] Dependencies documented
- [ ] Personality consistent

### Task Quality
- [ ] Interactive flow (elicit: true)
- [ ] Clear step progression
- [ ] User decision points
- [ ] Output templates linked
- [ ] Error scenarios handled

### Template Quality
- [ ] Professional formatting
- [ ] All sections documented
- [ ] Variables clearly marked
- [ ] Instructions included
- [ ] Output format specified

## 7. Testing Requirements

### Functional Testing
1. Agent activation successful
2. Tasks execute without errors
3. Templates generate valid output
4. Cross-agent collaboration works
5. Error messages helpful

### User Experience Testing
1. Clear instructions at each step
2. Natural conversation flow
3. Professional output quality
4. Reasonable response times
5. Graceful error handling

## 8. Documentation Standards

### Required Documentation
- **Pack README**: Overview, installation, usage
- **Agent Guides**: How to work with each agent
- **Task Examples**: Sample executions
- **Template Samples**: Example outputs
- **Integration Guide**: Working with other packs

### Documentation Quality
- Clear and concise
- Examples provided
- Common issues addressed
- Best practices included
- Version compatibility noted

## 9. Performance Standards

### Response Guidelines
- Initial response: < 2 seconds
- Analysis tasks: < 30 seconds
- Report generation: < 60 seconds
- User prompts: Clear and timely
- Progress indicators: For long tasks

### Resource Efficiency
- Minimal redundant processing
- Efficient data structures
- Cached common lookups
- Lazy loading of resources
- Clean task completion

## 10. Maintenance Standards

### Version Control
- Semantic versioning (x.y.z)
- Change log maintained
- Breaking changes documented
- Deprecation warnings
- Migration guides

### Update Process
1. Test in isolation
2. Verify integrations
3. Update documentation
4. Communicate changes
5. Support transition

## Expansion Pack Verification

### Current Status (Last Updated: {{current_date}})

| Pack | Agents | Tasks | Templates | Checklists | Quality Score |
|------|--------|-------|-----------|------------|---------------|
| Market Researcher | 4 ✅ | 4 ✅ | 4 ✅ | 1 ✅ | 95% |
| Product Manager | 4 ✅ | 4 ✅ | 4 ✅ | 1 ✅ | 95% |
| Strategy Consulting | 4 ✅ | 3 ✅ | 3 ✅ | 1 ✅ | 92% |

### Standardization Actions Taken
1. ✅ Added market analysis checklist for consistency
2. ✅ Created strategy engagement checklist
3. ✅ Added product launch checklist
4. ✅ Verified all agents have proper activation
5. ✅ Confirmed all tasks are interactive
6. ✅ Ensured templates follow standards

## Best Practices

### Do's
- ✅ Use consistent naming conventions
- ✅ Provide clear examples
- ✅ Test all workflows
- ✅ Document assumptions
- ✅ Handle edge cases

### Don'ts
- ❌ Skip validation steps
- ❌ Hardcode values
- ❌ Assume context
- ❌ Ignore errors
- ❌ Break existing integrations

## Support

For questions about standards or pack development:
- BMAD Discord: [Community Support](https://discord.gg/gk8jAdXWmj)
- GitHub Issues: Report standard violations
- Pull Requests: Propose standard updates