# Seek Your Y — Website Description

This repository contains the **Seek Your Y** marketing + conversion website for **GMAT/GRE Quant mentoring** led by **Aman**. The site communicates value, shows student outcomes, routes learners to the LMS, and captures leads via **Book a session**.

## What this website is for
- **Explain the offer clearly**: Quant mentoring focused on logic-based problem solving (not formula memorization).
- **Show credibility & outcomes**: student success carousel with real photos and score achievements.
- **Drive course enrollment**: **Start Learning Free** and **Explore Course** link to the LMS at [https://lms.seekyoury.com/learn](https://lms.seekyoury.com/learn).
- **Convert visitors into leads**: **Book a session** (navbar) opens a modal to collect contact details.

## Who it's for
- Students preparing for **GMAT/GRE Quant** who want structured, mentor-led guidance.
- Students who want clarity, speed, and test-day execution—not more memorization.

## Site metadata and branding
Configured in [`index.html`](index.html) and static assets in [`public/`](public/):

| Asset / tag | Path / purpose |
|-------------|----------------|
| Favicon | `public/favicon.png` (from `seekyoury_logo_favicon.png`) |
| Apple touch icon | `public/apple-touch-icon.png` |
| Open Graph / Twitter image | `public/og-image.png` |
| Source logo | [`src/assets/seekyoury_logo_favicon.png`](src/assets/seekyoury_logo_favicon.png) |

- **Title**: Seek Your Y \| Master GMAT & GRE Quant
- **Description**: Logic-based GMAT/GRE Quant mentoring; courses, 1-on-1 guidance, test series; 10,000+ students.
- **Canonical**: https://seekyoury.com

## How users interact with the site

### Navigation (top menu)
- **Courses**, **Tutoring**, **Success Stories** (no Home link).
- Logo image links to `/`.
- Primary action: **Book a session** (modal).

Implementation: [`src/components/Navbar.tsx`](src/components/Navbar.tsx)

### Start Learning Free
- Opens [https://lms.seekyoury.com/learn](https://lms.seekyoury.com/learn) in a new tab (no popup).

Implementation: [`src/components/Hero.tsx`](src/components/Hero.tsx)

### Explore Course
- All course cards in the programs section link to the same LMS URL.

Implementation: [`src/components/ProductJourney.tsx`](src/components/ProductJourney.tsx)

### Book a session (lead capture)
- Collects name, email, phone, and optional details.
- On submit: success toast (no backend/email integration configured yet).

Implementation:
- [`src/components/BookSessionDialog.tsx`](src/components/BookSessionDialog.tsx)
- [`src/components/ui/dialog.tsx`](src/components/ui/dialog.tsx)

## Landing page — hero student carousel

Five students from [`src/assets/student_pics/`](src/assets/student_pics/), in order:

| # | File | Display name | Score |
|---|------|--------------|-------|
| 1 | `Prafful.jpeg` | Prafful | Quant 166/170 |
| 2 | `Balagopal Jayakumar.jpeg` | Bala | Quant 166/170 |
| 3 | `Manya.jpeg` | Manya | DI 83/90 |
| 4 | `Sabhyata.jpeg` | Sabhyata | 160/170 |
| 5 | `Arjun M S.jpeg` | Arjun | Q 168/170 |

- Carousel: prev/next arrows, auto-advance every 5s, swipe/drag support.
- Trusted-by avatar row uses the same five photos.

Implementation: [`src/components/Hero.tsx`](src/components/Hero.tsx)

## Homepage sections

Entry: [`src/pages/Index.tsx`](src/pages/Index.tsx)

| Section | Component |
|---------|-----------|
| Hero | [`src/components/Hero.tsx`](src/components/Hero.tsx) |
| About mentor | [`src/components/AboutMe.tsx`](src/components/AboutMe.tsx) |
| Courses | [`src/components/ProductJourney.tsx`](src/components/ProductJourney.tsx) |
| Support | [`src/components/SupportTabs.tsx`](src/components/SupportTabs.tsx) |
| Testimonials | [`src/components/Testimonials.tsx`](src/components/Testimonials.tsx) |
| Book demo form | [`src/components/BookDemoForm.tsx`](src/components/BookDemoForm.tsx) |
| FAQ | [`src/components/FAQ.tsx`](src/components/FAQ.tsx) |
| Footer | [`src/components/Footer.tsx`](src/components/Footer.tsx) |

Footer company links include About Aman, Success stories, and Contact (Blog removed).

## Policies / legal pages
- Refund policy: [`src/pages/RefundPolicy.tsx`](src/pages/RefundPolicy.tsx)
- Terms and conditions: [`src/pages/TermsAndConditions.tsx`](src/pages/TermsAndConditions.tsx)
- Contact: [`src/pages/ContactUs.tsx`](src/pages/ContactUs.tsx)

## Tech stack
- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui (Radix)
- Firebase config present for hosting/analytics ([`src/lib/firebase.ts`](src/lib/firebase.ts))

## How to run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```
