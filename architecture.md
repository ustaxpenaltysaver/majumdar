# Architecture
# D. Majumdar & Associates - Law Firm Website

## PROJECT_INFO
```yaml
client: D. Majumdar & Associates, Advocates
domain: dmajumdar.com
type: Law Firm - Indirect Tax & Commercial Litigation
location: Kolkata, West Bengal
hosting: GCP Cloud Storage
languages: English (primary), Bengali (secondary)
```

## STRUCTURE
```
website/
├── index.html              # Home (main conversion page)
├── about.html              # Firm story, credentials
├── practice-areas.html     # 6 practice areas
├── team.html               # Team profiles
├── blog.html               # Insights/articles
├── contact.html            # Contact + consultation form
├── join-us.html            # Careers + application form
├── testimonials.html       # Testimonials + submission form
├── 404.html                # Error page
│
├── css/
│   ├── styles.css          # Main styles + variables
│   ├── components.css      # Reusable components
│   └── responsive.css      # Mobile breakpoints
│
├── js/
│   ├── main.js             # Core functionality
│   └── forms.js            # Form validation/handling
│
└── images/
    ├── logo.svg
    ├── icons/
    ├── team/
    └── blog/
```

## PAGES
| Page | File | Purpose | Priority |
|------|------|---------|----------|
| Home | index.html | Main landing, conversion funnel | P0 |
| About | about.html | Firm story, credentials, trust | P0 |
| Practice Areas | practice-areas.html | 6 service areas | P0 |
| Team | team.html | Lawyer profiles | P0 |
| Contact | contact.html | Contact + consultation form | P0 |
| Testimonials | testimonials.html | Social proof EN/BN | P0 |
| Join Us | join-us.html | Careers + application | P1 |
| Blog | blog.html | Articles listing | P1 |
| 404 | 404.html | Error page | P2 |

## PRACTICE_AREAS
```yaml
areas:
  - id: indirect-tax
    name: Indirect Tax Litigation & Advisory
    name_bn: পরোক্ষ কর মামলা ও পরামর্শ
    services: GST, Entry Tax, Service Tax, Customs
    courts: CESTAT, GST Tribunal, High Courts

  - id: commercial
    name: Commercial Disputes
    name_bn: বাণিজ্যিক বিরোধ
    services: Contract disputes, Business litigation

  - id: white-collar
    name: White-Collar Crimes
    name_bn: হোয়াইট-কলার অপরাধ
    services: Corporate fraud, Money laundering

  - id: arbitration
    name: Arbitration, Conciliation & Mediation
    name_bn: সালিশ, সমঝোতা ও মধ্যস্থতা
    services: Domestic/international arbitration, ADR

  - id: labour
    name: Industrial & Labour Disputes
    name_bn: শিল্প ও শ্রম বিরোধ
    services: Employment issues, Tribunal representation

  - id: insolvency
    name: Insolvency & Bankruptcy
    name_bn: দেউলিয়া ও ঋণশোধন অক্ষমতা
    services: IBC proceedings, NCLT
```

## TEAM
```yaml
members:
  - name: Dipankar Majumdar
    role: Founder
    expertise: Indirect Tax, Commercial Litigation
    experience: 10+ years

  - name: Subhashree Majumdar
    role: Commercial Lawyer
    expertise: Commercial Law

  - name: Bijay Kumar Sharma
    role: Indirect Tax Lawyer
    expertise: Indirect Tax

  - name: Aishi Pal
    role: Indirect Tax & Commercial Lawyer
    expertise: Indirect Tax, Commercial

  - name: Milan Kr Paul
    role: Admin (Stenographer/Clerk)
    type: support
```

## COMPONENTS
| Component | Purpose | Used In |
|-----------|---------|---------|
| disclaimer-modal | BCI compliance gate (click-through) | All pages (first visit) |
| header | Logo, nav, CTA button | All pages |
| footer | Contact, links, bar council | All pages |
| hero | Page hero with title/CTA | All pages |
| cta-banner | Conversion section | Home, Practice, About |
| testimonial-card | Single testimonial | Home, Testimonials |
| team-card | Team member profile | Team, Home |
| practice-card | Practice area card | Home, Practice Areas |
| contact-form | Consultation request | Contact, Home |
| whatsapp-float | WhatsApp button | All pages |
| mobile-sticky-bar | Call/WhatsApp bar | All pages (mobile) |

## FORMS
| Form | Location | Fields |
|------|----------|--------|
| Consultation | contact.html, home | name, phone, email, case_type, message |
| Testimonial | testimonials.html | name, company, email, language, testimonial, rating |
| Job Application | join-us.html | name, email, phone, position, experience, resume, cover_letter |
| Newsletter | footer | email |

## CSS_ARCHITECTURE
```yaml
approach: Component-based
naming: BEM (Block__Element--Modifier)

files:
  styles.css: Variables, base, layout
  components.css: Reusable UI components
  responsive.css: Media queries
```

## DESIGN_TOKENS
```css
/* Colors */
--color-primary: #1a365d;      /* Navy - trust */
--color-accent: #c9a227;       /* Gold - premium */
--color-text: #2d3748;         /* Dark gray */
--color-text-light: #718096;   /* Medium gray */
--color-bg: #ffffff;           /* White */
--color-bg-alt: #f7fafc;       /* Light gray */
--color-success: #48bb78;
--color-error: #e53e3e;

/* Typography */
--font-heading: 'Playfair Display', serif;
--font-body: 'Inter', sans-serif;
--font-bengali: 'Noto Sans Bengali', sans-serif;
--font-size-base: 16px;

/* Spacing */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;

/* Shadows */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);

/* Borders */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
```

## EXTERNAL_DEPENDENCIES
| Library | Version | Purpose | CDN |
|---------|---------|---------|-----|
| Google Fonts | - | Playfair Display, Inter, Noto Sans Bengali | fonts.googleapis.com |
| Lucide Icons | latest | UI icons | unpkg.com/lucide |

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>
```

## BCI_COMPLIANCE
```yaml
requirement: Bar Council of India Rule 36
implementation: Click-through disclaimer modal on first visit

disclaimer_text:
  - "The information provided on this website is authentic and accurate."
  - "There has been no advertisement, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website."
  - "By proceeding, you acknowledge that this website is for informational purposes only and accessing it does not create an attorney-client relationship."

behavior:
  - Modal appears on first visit (any page)
  - User must click "I Agree" to proceed
  - Store acceptance in localStorage
  - Do not show again for 30 days
```

## CONTACT_INFO
```yaml
address: 1st Floor - Unit 103, 25 Jawaharlal Nehru Road, Kolkata 700087
phone: +91 33-84226852
mobile: +91 9717359398
email: dipankar@dmajumdar.com
hours: 10 AM - 6 PM, Mon-Sat
whatsapp: 919717359398
```

## TRUST_SIGNALS
```yaml
stats:
  - "10+ Years Experience"
  - "500+ Cases"
  - "Pan-India Presence"

courts:
  - Calcutta High Court
  - CESTAT
  - GST Appellate Tribunal
  - NCLT

credentials:
  - Bar Council of West Bengal
```

## BROWSER_SUPPORT
- Chrome (latest 2)
- Firefox (latest 2)
- Safari (latest 2)
- Edge (latest 2)
- Samsung Internet (India priority)

## BREAKPOINTS
```css
--bp-mobile: 320px;
--bp-mobile-lg: 480px;
--bp-tablet: 768px;
--bp-desktop: 1024px;
--bp-desktop-lg: 1280px;
```
