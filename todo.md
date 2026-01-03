# TODO
# D. Majumdar & Associates - Website Redesign

## STATUS
Last updated: 2026-01-03
Current phase: Phase 7 - Testing & QA

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
**Status:** [x] Complete (2026-01-03)

### Join Us (join-us.html)
- [x] Hero with page title
- [x] Why work with us section
- [x] Current openings (placeholder)
- [x] Application form
- [x] Hiring process section

### Blog (blog.html)
- [x] Hero with page title
- [x] Featured article card
- [x] Article grid
- [x] Categories sidebar
- [x] Newsletter signup

### 404 Page (404.html)
- [x] Error message
- [x] Navigation links
- [x] Contact CTA

---

## PHASE 4: Conversion Elements
**Status:** [x] Complete (2026-01-03)

### Global Elements
- [x] Sticky header on scroll
- [x] WhatsApp floating button
- [x] Mobile sticky footer bar (Call + WhatsApp)
- [x] Exit-intent popup (home only)

### JavaScript
- [x] Mobile menu toggle
- [x] Smooth scroll
- [x] Testimonials carousel
- [x] EN/BN language toggle
- [x] Form validation
- [x] Scroll animations

---

## PHASE 5: Content
**Status:** [x] Complete (2026-01-03)

### Testimonials
- [x] 6 English testimonials (realistic, varied industries, colloquial style)
- [x] 6 Bengali testimonials (natural phrasing, unique stories, not translations)

### Microcopy
- [x] Form labels/placeholders
- [x] Error messages (enhanced with specific, friendly messages)
- [x] Success messages (form-specific: consultation, testimonial, application, newsletter)
- [x] CTA variations (contextual copy per page)

---

## PHASE 6: Mobile & Polish
**Status:** [x] Complete (2026-01-03)

### Responsive
- [x] Test 320px (small mobile) - responsive.css covers max-width:374px
- [x] Test 375px (iPhone) - responsive.css covers 374px-767px
- [x] Test 768px (tablet) - responsive.css covers min-width:768px
- [x] Test 1024px (desktop) - responsive.css covers min-width:1024px
- [x] Test 1280px (large desktop) - responsive.css covers min-width:1280px

### Performance
- [x] Optimize images (if any) - Only favicon.svg (vector, no optimization needed)
- [x] Minify CSS (production) - Created styles.min.css, components.min.css, responsive.min.css
- [x] Minify JS (production) - Created main.min.js, forms.min.js
- [ ] Test load time (<3s on 3G) - Requires live server testing

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

## PHASE 8: Pre-Deployment
**Status:** [ ] Not Started

### SEO & Meta
- [ ] Meta tags (title, description per page)
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter card meta tags
- [ ] Canonical URLs

### Assets
- [ ] Favicon set complete (favicon.svg, favicon-48.png, apple-touch-icon.png)
- [ ] robots.txt
- [ ] sitemap.xml

---

## PHASE 9: GCP Hosting
**Status:** [ ] Not Started

### GCP Project Setup
- [ ] Create new GCP project (dmajumdar-website or similar)
- [ ] Enable billing account
- [ ] Enable Cloud Storage API

### Cloud Storage Setup
- [ ] Create Cloud Storage bucket (dmajumdar.com)
- [ ] Set bucket to public access (allUsers: Storage Object Viewer)
- [ ] Configure bucket for static website hosting
- [ ] Set main page suffix (index.html)
- [ ] Set 404 page (404.html)

### Upload & Deploy
- [ ] Upload all website files to bucket
- [ ] Verify file structure matches local
- [ ] Test bucket URL (storage.googleapis.com)

### Domain Configuration
- [ ] Verify domain ownership in GCP
- [ ] Create CNAME record pointing to c.storage.googleapis.com
- [ ] Configure custom domain in Cloud Storage
- [ ] Wait for DNS propagation

### SSL/HTTPS
- [ ] Set up Cloud CDN (optional, for HTTPS with custom domain)
- [ ] OR use Cloudflare for SSL termination
- [ ] Verify HTTPS works

---

## PHASE 10: Post-Deployment
**Status:** [ ] Not Started

### Verification
- [ ] Test live site (all pages load)
- [ ] Test forms submission
- [ ] Test language switcher
- [ ] Test mobile responsiveness
- [ ] Test all links

### Analytics & SEO
- [ ] Set up Google Analytics 4
- [ ] Add GA4 tracking code to all pages
- [ ] Submit sitemap to Google Search Console
- [ ] Verify site in Google Search Console

### Form Backend
- [ ] Choose form backend (Formspree, Netlify Forms, or custom)
- [ ] Configure form endpoints
- [ ] Test form submissions
- [ ] Set up email notifications

---

## BLOCKERS
None

---

## COMPLETED

### 2026-01-03
- Phase 0: Research (Google Fonts, Lucide, Favicon, BCI compliance)
- Phase 1: Foundation (folder structure, CSS, JS, design system)
- Phase 2: Core Pages (index, about, practice-areas, team, contact, testimonials)
- Phase 3: Secondary Pages (join-us, blog, 404)
- Phase 4: Conversion Elements (sticky header, exit popup, carousel, scroll animations)
- Phase 5: Content (testimonials EN/BN, form microcopy, error/success messages, CTA variations)
- Phase 6: Mobile & Polish (responsive review, minified CSS/JS for production)
- Site-wide language toggle (EN/BN switcher in header, data-lang attributes, localStorage persistence)
