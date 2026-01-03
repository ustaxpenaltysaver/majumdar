# TODO
# D. Majumdar & Associates - Website Redesign

## STATUS
Last updated: 2026-01-03
Current phase: Phase 3 - Secondary Pages

---

## PHASE 0: Research
**Status:** [x] Complete (2026-01-03)

### External Dependencies
- [x] Verify Google Fonts CDN URLs (Playfair Display, Inter, Noto Sans Bengali)
- [x] Verify Lucide Icons CDN URL and usage syntax
- [x] Check favicon requirements (sizes, formats for modern browsers)

### Legal Compliance
- [x] Research Bar Council of India website disclaimer requirements
- [x] Document required disclaimer text

### Research Findings

**Google Fonts CDN:**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Lucide Icons CDN:**
```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```
Usage: `<i data-lucide="icon-name"></i>`

**Favicon (Minimal 2025):**
- favicon.svg (primary, modern browsers)
- favicon-48.png (fallback)
- apple-touch-icon.png (180x180)

**BCI Disclaimer (Required):**
Must include before homepage access:
1. "The information provided on this website is authentic and accurate"
2. "There has been no advertisement, solicitation, invitation or inducement of any sort whatsoever to solicit any work through this website"
3. "By accessing this website, the user acknowledges this is for informational purposes only and does not create an attorney-client relationship"
Implement as: Click-through disclaimer modal before viewing site content

---

## PHASE 1: Foundation
**Status:** [x] Complete (2026-01-03)

### Setup
- [x] Create folder structure (website/css, js, images)
- [x] Create styles.css with reset + variables
- [x] Create components.css
- [x] Create responsive.css
- [x] Create main.js
- [x] Create forms.js (validation/handling)
- [x] Add favicon placeholder (SVG)

### Design System
- [x] Define CSS custom properties (colors, fonts, spacing)
- [x] Create base typography styles
- [x] Create button component styles
- [x] Create form input styles
- [x] Create card component styles
- [x] Create BCI disclaimer modal component (legal requirement)

---

## PHASE 2: Core Pages (P0)
**Status:** [x] Complete (2026-01-03)

### Home Page (index.html)
- [x] Header (logo, nav, CTA button)
- [x] Hero section (headline, CTA, trust badges)
- [x] Stats bar (10+ years, 500+ cases, pan-India)
- [x] Practice areas grid (6 cards)
- [x] Why choose us section (4 points)
- [x] Testimonials preview (2 cards)
- [x] Team preview (4 members)
- [x] Final CTA banner
- [x] Footer (contact, links, bar council)
- [x] WhatsApp float + Mobile sticky bar
- [x] BCI disclaimer modal

### About Page (about.html)
- [x] Hero with page title
- [x] Firm story section
- [x] Mission & values
- [x] Founder profile (Dipankar Majumdar)
- [x] Our approach section
- [x] Credentials/bar council
- [x] CTA section

### Practice Areas (practice-areas.html)
- [x] Hero with page title
- [x] Indirect Tax section
- [x] Commercial Disputes section
- [x] White-Collar Crimes section
- [x] Arbitration section
- [x] Labour Disputes section
- [x] Insolvency section
- [x] CTA section

### Team (team.html)
- [x] Hero with page title
- [x] Team introduction
- [x] Dipankar Majumdar card (featured)
- [x] Subhashree Majumdar card
- [x] Bijay Kumar Sharma card
- [x] Aishi Pal card
- [x] Milan Kr Paul card (support)
- [x] Join team CTA

### Contact (contact.html)
- [x] Hero with page title
- [x] Contact methods grid (phone, WhatsApp, email)
- [x] Google Maps placeholder
- [x] Office hours
- [x] Consultation request form
- [x] Response time promise

### Testimonials (testimonials.html)
- [x] Hero with page title
- [x] Language toggle (EN/BN)
- [x] Testimonials grid (6 EN + 6 BN)
- [x] Submit testimonial form

---

## PHASE 3: Secondary Pages (P1)
**Status:** [ ] Not Started

### Join Us (join-us.html)
- [ ] Hero with page title
- [ ] Why work with us section
- [ ] Current openings (placeholder)
- [ ] Application form
- [ ] Hiring process section

### Blog (blog.html)
- [ ] Hero with page title
- [ ] Featured article card
- [ ] Article grid
- [ ] Categories sidebar
- [ ] Newsletter signup

### 404 Page (404.html)
- [ ] Error message
- [ ] Navigation links
- [ ] Contact CTA

---

## PHASE 4: Conversion Elements
**Status:** [ ] Not Started

### Global Elements
- [ ] Sticky header on scroll
- [ ] WhatsApp floating button
- [ ] Mobile sticky footer bar (Call + WhatsApp)
- [ ] Exit-intent popup (home only)

### JavaScript
- [ ] Mobile menu toggle
- [ ] Smooth scroll
- [ ] Testimonials carousel
- [ ] EN/BN language toggle
- [ ] Form validation
- [ ] Scroll animations

---

## PHASE 5: Content
**Status:** [ ] Not Started

### Testimonials (Placeholders)
- [ ] 6 English testimonials (realistic, varied industries)
- [ ] 6 Bengali testimonials (natural phrasing)

### Microcopy
- [ ] Form labels/placeholders
- [ ] Error messages
- [ ] Success messages
- [ ] CTA variations

---

## PHASE 6: Mobile & Polish
**Status:** [ ] Not Started

### Responsive
- [ ] Test 320px (small mobile)
- [ ] Test 375px (iPhone)
- [ ] Test 768px (tablet)
- [ ] Test 1024px (desktop)
- [ ] Test 1280px (large desktop)

### Performance
- [ ] Optimize images (if any)
- [ ] Minify CSS (production)
- [ ] Minify JS (production)
- [ ] Test load time (<3s on 3G)

---

## PHASE 7: Testing & QA
**Status:** [ ] Not Started

### Validation
- [ ] HTML validation (W3C)
- [ ] CSS validation
- [ ] No JS console errors
- [ ] All links work
- [ ] All forms work

### Cross-Browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Samsung Internet

### Accessibility
- [ ] Keyboard navigation
- [ ] Alt text on images
- [ ] Proper heading hierarchy
- [ ] Sufficient color contrast

---

## PHASE 8: Deployment
**Status:** [ ] Not Started

### Pre-Deploy
- [ ] Meta tags (SEO)
- [ ] Open Graph tags
- [ ] Favicon set
- [ ] robots.txt
- [ ] sitemap.xml

### GCP Setup
- [ ] Create Cloud Storage bucket
- [ ] Configure static hosting
- [ ] Upload files
- [ ] Configure domain (dmajumdar.com)
- [ ] SSL certificate
- [ ] DNS records

### Post-Deploy
- [ ] Test live site
- [ ] Google Search Console
- [ ] Google Analytics
- [ ] Form backend setup

---

## BLOCKERS
None

---

## COMPLETED

### 2026-01-03
- Phase 0: Research (Google Fonts, Lucide, Favicon, BCI compliance)
- Phase 1: Foundation (folder structure, CSS, JS, design system)
- Phase 2: Core Pages (index, about, practice-areas, team, contact, testimonials)
