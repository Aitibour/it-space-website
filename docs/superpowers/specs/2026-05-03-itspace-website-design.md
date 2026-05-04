# IT Space Website — Design Spec
**Date:** 2026-05-03  
**Status:** Approved

---

## 1. Overview

A modern, trilingual (French / English / Arabic) marketing website for **IT Space**, an IT consulting, project management, cyber security, and digital solutions company based in **Tanger, Morocco**. The site deploys on Vercel and is built with Next.js 15 App Router.

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | Best-in-class Vercel integration, SSR/SSG, SEO |
| i18n | next-intl | URL-based locale routing, RTL support, production-grade |
| Styling | Tailwind CSS v4 | Utility-first, fast, consistent design system |
| Icons | Lucide React | Lightweight, consistent icon set |
| Deployment | Vercel | Automatic deployments, global CDN |

---

## 3. Internationalization

- **Locales:** `fr` (default), `en`, `ar`
- **URL structure:** `/fr`, `/en`, `/ar` — root `/` redirects to `/fr`
- **RTL:** Arabic locale sets `dir="rtl"` on `<html>`; Tailwind RTL utilities handle mirroring
- **Translation files:** `messages/fr.json`, `messages/en.json`, `messages/ar.json`
- **Language switcher:** In the navbar, shows `FR | EN | AR` — clicking switches locale while staying on the same page

---

## 4. Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| Primary | `#1E40AF` | Buttons, headings, logo |
| Accent | `#3B82F6` | Hover states, highlights, icons |
| Background | `#FFFFFF` | Main background |
| Surface | `#F8FAFC` | Alternating section backgrounds |
| Text | `#1E293B` | Body text |
| Muted | `#64748B` | Subtitles, labels |

### Typography
- Font: **Inter** (Google Fonts) — clean, modern, works well in all 3 languages
- Arabic fallback: system-ui
- Headings: bold, `#1E293B`
- Body: regular, `#475569`

### Logo
- SVG-based: shield or `</>` icon in primary blue + "IT Space" wordmark bold + "Tanger" micro-text
- Responsive: icon-only on mobile, full wordmark on desktop

---

## 5. Page Structure

Single-page application at each locale URL. All 4 sections live on one scrollable page. Smooth scroll anchors (`#home`, `#services`, `#about`, `#contact`).

### 5.1 Navbar
- Sticky, white background, `shadow-sm` on scroll
- Left: Logo
- Center (desktop): Home | Services | About | Contact (smooth scroll links)
- Right: Language switcher `FR | EN | AR`
- Mobile: Hamburger menu — slide-down nav drawer

### 5.2 Hero (Home)
- Full viewport height (`min-h-screen`)
- Background: white with subtle CSS dot/grid pattern in light blue
- Large heading: "Transforming Business Through Technology" (translated per locale)
- Subheading: positioning line about IT Space as a trusted tech partner in North Africa
- Two CTAs: primary button "Our Services" (scrolls to #services), secondary outline button "Contact Us"
- Trust indicators: 3 icon+number stats (e.g., "10+ Years Experience", "50+ Projects", "100% Client Satisfaction")

### 5.3 Services
- Background: `#F8FAFC`
- Section title + subtitle
- 4 cards in a 2×2 responsive grid (1 column mobile, 2 tablet, 4 desktop)
- Each card: icon (Lucide), title, 2-sentence description, hover effect (shadow + border-blue)

| Service | Icon | Key points |
|---|---|---|
| IT Consulting | `Lightbulb` | Strategy, infrastructure audits, tech roadmaps |
| Project Management | `ClipboardList` | Agile delivery, digital transformation, PMO |
| Cyber Security | `Shield` | Threat assessment, SOC monitoring, ISO 27001 |
| Digital Solutions | `Code2` | Custom software, web/mobile apps, cloud migration |

### 5.4 About
- Background: white
- Two-column layout (desktop): text left, decorative right (abstract SVG or CSS shapes in brand blue)
- Content: company story, founded in Tanger, serves Morocco and Maghreb, team of certified engineers/consultants
- Mission statement
- 3 value pills: "Innovation", "Security", "Excellence"
- Mobile: single column, decorative element hidden

### 5.5 Contact
- Background: `#F8FAFC`
- Two-column layout:
  - **Left:** Contact info card
    - Address: Tanger, Morocco
    - Phone: `+212 539 XX XX XX` (Moroccan format placeholder)
    - Email: `contact@itspace.ma`
    - Map embed placeholder (static image or Google Maps iframe)
  - **Right:** Contact form
    - Fields: Name, Email, Subject (dropdown: IT Consulting / Cyber Security / Project / Other), Message
    - Submit button: "Send Message" / "Envoyer" / "إرسال"
    - Form submission: `mailto:` action (no backend needed for v1)
- Mobile: single column, info above form

### 5.6 Footer
- Background: `#1E293B` (dark)
- Logo (white variant) + tagline
- Quick links: Home, Services, About, Contact
- Contact info line
- Social icons: LinkedIn, Twitter/X (placeholders)
- Copyright: `© 2026 IT Space — Tanger, Morocco`

---

## 6. Routing & File Structure

```
app/
  [locale]/
    layout.tsx          ← sets lang/dir, loads fonts
    page.tsx            ← single page with all 4 sections
  layout.tsx            ← root layout
  globals.css
messages/
  fr.json
  en.json
  ar.json
components/
  Navbar.tsx
  Hero.tsx
  Services.tsx
  About.tsx
  Contact.tsx
  Footer.tsx
  Logo.tsx
```

---

## 7. Deployment

- **Platform:** Vercel
- **Default locale redirect:** `vercel.json` rewrites `/` → `/fr`
- **Build command:** `next build`
- **No environment variables** required for v1 (static marketing site, no backend)
- **Domain:** Will point to `itspace.ma` (user configures DNS in Vercel dashboard)

---

## 8. Out of Scope (v1)

- Backend form submission / email API (mailto action used instead)
- Blog / news section
- Client portal / authentication
- CMS integration
- Analytics (can be added post-deploy via Vercel Analytics)
