# CLAUDE.MD
# Agent instructions. Terse. No verbose docs.

## PROJECT_CONTEXT
PROJECT_NAME: Majumdar Website
PROJECT_TYPE: Static Website / Frontend
DOMAIN: [TODO: Define domain - e.g., Portfolio, Business, E-commerce]
MUST_USE:
- Semantic HTML5
- Mobile-first responsive design
- Accessible markup (WCAG 2.1 AA)
NEVER_USE:
- Inline styles (use CSS files)
- document.write()
- Deprecated HTML tags


## LANGUAGES
SUPPORTED:
- English - PRIMARY/DEFAULT
- Bengali (বাংলা) - SECONDARY
APPLIES TO:
- All UI text
- All content
- Error messages
- Alt text for images
IMPLEMENTATION:
- Keep text in HTML (for static site)
- Use data attributes for dynamic text if needed
BENGALI_RULES:
- NO literal translations
- Write as native Bengali speaker would
- Use natural Bengali phrasing and idioms
- Culturally adapt content, not just translate
- Respect Bengali reading flow and structure
- Use appropriate formality level (আপনি vs তুমি)


## PRIME_DIRECTIVE
READ: architecture.md (contracts)
CHECK: todo.md (your assigned task)
BUILD: only your branch
NO: summaries, verbose comments, READMEs unless asked


## DOCUMENTATION_UPDATES
```yaml
when_to_update:
  - New page added
  - Task completed (mark done in todo.md)
  - Design decision made
  - New dependency/library added
  - Component created

files_to_update:
  todo.md:
    - Mark tasks [x] when complete
    - Update status section with dates
    - Add new blockers immediately

  architecture.md:
    - Page structure changes
    - Component patterns
    - New features

  CLAUDE.md:
    - New rules or conventions
    - Process changes

style:
  - Terse, no prose
  - Use checkboxes: [ ] pending, [x] done, [>] in progress
  - AI-readable format (yaml, json, tables)
  - No redundant info across files

do_not:
  - Write verbose explanations
  - Duplicate info already in another file
  - Add speculative future items
  - Create new doc files unless asked
```


## CODE_QUALITY
```yaml
principles:
  - Only code what's explicitly needed
  - No speculative features
  - No over-engineering
  - Delete code rather than comment out

before_writing_ask:
  - Is this in the spec?
  - Does this solve an actual problem?
  - Is there a simpler way?

forbidden:
  - Unused CSS classes
  - Dead JavaScript code
  - Empty HTML elements without purpose
  - Comments that repeat what code does
  - Inline event handlers (onclick, etc.)

file_size_limits:
  - Single CSS file: max 500 lines (split by component/page)
  - Single JS file: max 300 lines
  - Single HTML file: max 300 lines

when_unsure:
  - ASK user, don't assume
  - Build minimal version first
  - Add complexity only when proven needed

suggestions_allowed:
  - CAN suggest improvements, optimizations
  - CAN flag potential issues
  - CANNOT silently add unrequested features
  - Rule: suggest → get approval → then implement
```


## SECURITY
```yaml
frontend:
  - Sanitize any user inputs
  - Escape dynamic content
  - No sensitive data in client-side code
  - Use HTTPS for all external resources

content:
  - No hardcoded API keys
  - No credentials in code
  - Validate form inputs client-side

dependencies:
  - Use CDN with integrity hashes (SRI)
  - Pin library versions
  - Audit before adding new libraries
```


## TESTING
```yaml
manual_testing:
  - Test all pages in Chrome, Firefox, Safari, Edge
  - Test responsive: mobile, tablet, desktop
  - Test accessibility with screen reader
  - Validate HTML (W3C validator)
  - Validate CSS

automated (if added later):
  - Lighthouse audits
  - HTML/CSS validation
  - Link checking

before_deploy:
  - All links work
  - All images load
  - Forms function correctly
  - No console errors
```


## PROJECT_QUALITY
```yaml
quality: PRODUCTION-READY
standard: Ready for users from day 1

requirements:
  - Valid HTML5
  - Responsive design works
  - Fast load times (<3s)
  - Accessible (keyboard nav, alt text)
  - Cross-browser compatible

NO_SHORTCUTS:
  - No "TODO: fix later"
  - No placeholder content in production
  - No broken links
  - No missing alt text
```


## CODE_STYLE
```yaml
html:
  - 2 space indentation
  - Semantic elements (header, nav, main, footer, article, section)
  - Meaningful class names (BEM or similar)
  - Alt text on all images
  - Proper heading hierarchy (h1 → h2 → h3)

css:
  - 2 space indentation
  - Mobile-first media queries
  - CSS custom properties for colors/spacing
  - Logical property grouping
  - No !important unless absolutely necessary

javascript:
  - 2 space indentation
  - const/let, no var
  - addEventListener, no inline handlers
  - Strict mode ('use strict')
  - Meaningful variable names

general:
  - No comments unless complex logic
  - Max line length: 100 chars
  - Consistent naming conventions
```


## OUTPUT_RULES
```yaml
output:
  - no verbose explanations
  - no emojis
  - no summaries after completion
  - just confirm: "Task X complete. Files: [list]"

errors:
  - fail fast
  - no silent failures
  - console.error for JS errors
```


## TECH_STACK
```yaml
frontend:
  language: HTML5, CSS3, JavaScript (ES6+)
  framework: Vanilla (no framework)
  styling: Custom CSS

structure:
  pages/: HTML page files
  css/: Stylesheets
  js/: JavaScript files
  images/: Image assets

build_tools: None (static files)

optional_additions:
  - Consider: CSS minification for production
  - Consider: Image optimization
```


## FILE_OWNERSHIP
```yaml
# Pages
website/pages/*           # HTML pages

# Styles
website/css/*             # All stylesheets

# Scripts
website/js/*              # JavaScript files

# Assets
website/images/*          # Image files
```


## AGENT_WORKFLOW
```yaml
ON_START:
1. Read architecture.md fully
2. Find your task in todo.md
3. Work only on files in your scope
4. Test your output in browser
5. Validate HTML/CSS
6. Report completion

DO_NOT:
- Touch files outside your scope
- Create documentation files unless asked
- Add features not in spec
- Add libraries without approval
```


## VALIDATION_CHECKLIST
```yaml
BEFORE_COMMIT:
[ ] HTML validates (W3C)
[ ] CSS validates
[ ] No JS console errors
[ ] All links work
[ ] Images have alt text
[ ] Responsive design works
[ ] No hardcoded test data
```


## COMMUNICATION
```yaml
TO_USER:
- Brief status updates only
- "Starting task X"
- "Completed. Files: [list]"
- "Blocked: [reason]"

NO:
- Long explanations
- Summaries of what you did
- Suggestions unless critical
```


## ERROR_RECOVERY
```yaml
IF_BLOCKED:
1. Check if dependency exists
2. If missing asset: use placeholder, note it
3. If unclear spec: check architecture.md
4. If still unclear: stop, report to user

REPORT_FORMAT:
"BLOCKED: [task_id] - [one line reason]"
```


## QUICK_REFERENCE
```yaml
# Breakpoints
mobile: 320px - 767px
tablet: 768px - 1023px
desktop: 1024px+

# Color naming: use CSS custom properties
--color-primary:
--color-secondary:
--color-text:
--color-background:

# Spacing scale
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
```
