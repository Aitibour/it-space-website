# IT Space Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a trilingual (FR/EN/AR) marketing website for IT Space — an IT consulting, project management, cyber security, and digital solutions company based in Tanger, Morocco.

**Architecture:** Next.js 15 App Router with next-intl for URL-based locale routing (`/fr`, `/en`, `/ar`). Single scrollable page per locale with 4 sections (Home, Services, About, Contact). Tailwind CSS for styling. Static marketing site — no backend for v1. Deployed on Vercel.

**Tech Stack:** Next.js 15, next-intl, Tailwind CSS, Lucide React, Vercel

---

## File Map

| File | Responsibility |
|---|---|
| `middleware.ts` | Locale detection & redirect |
| `i18n/request.ts` | next-intl server config |
| `next.config.ts` | next-intl plugin wiring |
| `app/layout.tsx` | Root layout (minimal passthrough) |
| `app/[locale]/layout.tsx` | Sets `lang`, `dir`, font, NextIntlClientProvider |
| `app/[locale]/page.tsx` | Assembles all sections |
| `app/globals.css` | Tailwind base + scroll-behavior |
| `messages/fr.json` | French translations |
| `messages/en.json` | English translations |
| `messages/ar.json` | Arabic translations |
| `components/Logo.tsx` | SVG logo component |
| `components/Navbar.tsx` | Sticky nav + language switcher + mobile menu |
| `components/Hero.tsx` | Hero section with CTAs and stats |
| `components/Services.tsx` | 4 service cards grid |
| `components/About.tsx` | Company story + values |
| `components/Contact.tsx` | Contact info card + mailto form |
| `components/Footer.tsx` | Footer with links and copyright |
| `vercel.json` | Root `/` → `/fr` rewrite |

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `app/`, `components/`, `messages/` (via create-next-app)

- [ ] **Step 1: Scaffold Next.js project in the current directory**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```

Expected output: "Success! Created your app..."

- [ ] **Step 2: Install next-intl and lucide-react**

```bash
npm install next-intl lucide-react
```

Expected: packages added to `node_modules/`

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```

Open `http://localhost:3000` — should show default Next.js page. Stop the server (Ctrl+C).

- [ ] **Step 4: Commit scaffold**

```bash
git init
git add .
git commit -m "chore: scaffold Next.js 15 project with next-intl and lucide-react"
```

---

## Task 2: i18n Configuration

**Files:**
- Create: `middleware.ts`
- Create: `i18n/request.ts`
- Modify: `next.config.ts`

- [ ] **Step 1: Create `i18n/request.ts`**

```ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

- [ ] **Step 2: Create `middleware.ts`**

```ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fr', 'en', 'ar'],
  defaultLocale: 'fr',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
```

- [ ] **Step 3: Update `next.config.ts` to wrap with next-intl plugin**

Replace the entire file with:

```ts
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {};

export default withNextIntl(nextConfig);
```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add middleware.ts i18n/request.ts next.config.ts
git commit -m "feat: configure next-intl with fr/en/ar locales, fr default"
```

---

## Task 3: Translation Files

**Files:**
- Create: `messages/fr.json`
- Create: `messages/en.json`
- Create: `messages/ar.json`

- [ ] **Step 1: Create `messages/fr.json`**

```json
{
  "nav": {
    "home": "Accueil",
    "services": "Services",
    "about": "À Propos",
    "contact": "Contact"
  },
  "hero": {
    "title": "Transformer les Entreprises par la Technologie",
    "subtitle": "IT Space est votre partenaire technologique de confiance en Afrique du Nord. Nous offrons des solutions de pointe en conseil IT, cybersécurité et transformation digitale.",
    "cta_primary": "Nos Services",
    "cta_secondary": "Nous Contacter",
    "stat_experience": "10+ Ans d'Expérience",
    "stat_projects": "50+ Projets Livrés",
    "stat_satisfaction": "100% Satisfaction Client"
  },
  "services": {
    "title": "Nos Services",
    "subtitle": "Des solutions technologiques complètes adaptées aux entreprises modernes",
    "consulting_title": "Conseil IT",
    "consulting_desc": "Orientation stratégique, audits d'infrastructure et feuilles de route technologiques pour aligner votre IT avec vos objectifs.",
    "project_title": "Gestion de Projets",
    "project_desc": "Livraison agile et projets de transformation digitale gérés par des professionnels certifiés avec un bilan éprouvé.",
    "security_title": "Cybersécurité",
    "security_desc": "Évaluation des menaces, surveillance SOC et services de conformité pour protéger vos actifs numériques.",
    "digital_title": "Solutions Numériques",
    "digital_desc": "Logiciels sur mesure, applications web et mobiles, et migration cloud pour accélérer votre transformation digitale."
  },
  "about": {
    "title": "À Propos d'IT Space",
    "subtitle": "Votre partenaire technologique à Tanger",
    "body": "Fondée à Tanger, au Maroc, IT Space est à l'avant-garde de la transformation digitale dans la région du Maghreb. Notre équipe d'ingénieurs et consultants certifiés apporte une expertise approfondie en conseil IT, cybersécurité et solutions numériques.",
    "mission": "Notre mission est de donner aux entreprises d'Afrique du Nord des solutions technologiques de classe mondiale qui stimulent la croissance, l'efficacité et la sécurité.",
    "value_innovation": "Innovation",
    "value_security": "Sécurité",
    "value_excellence": "Excellence"
  },
  "contact": {
    "title": "Contactez-Nous",
    "subtitle": "Prenez contact avec notre équipe",
    "address": "Tanger, Maroc",
    "phone": "+212 539 94 00 00",
    "email": "contact@itspace.ma",
    "form_name": "Nom Complet",
    "form_email": "Adresse Email",
    "form_subject": "Sujet",
    "form_opt_consulting": "Conseil IT",
    "form_opt_security": "Cybersécurité",
    "form_opt_project": "Gestion de Projets",
    "form_opt_digital": "Solutions Numériques",
    "form_opt_other": "Autre",
    "form_message": "Message",
    "form_submit": "Envoyer"
  },
  "footer": {
    "tagline": "Votre partenaire technologique de confiance en Afrique du Nord",
    "quick_links": "Liens Rapides",
    "copyright": "© 2026 IT Space — Tanger, Maroc. Tous droits réservés."
  }
}
```

- [ ] **Step 2: Create `messages/en.json`**

```json
{
  "nav": {
    "home": "Home",
    "services": "Services",
    "about": "About",
    "contact": "Contact"
  },
  "hero": {
    "title": "Transforming Business Through Technology",
    "subtitle": "IT Space is your trusted technology partner in North Africa. We deliver cutting-edge IT consulting, cyber security, and digital transformation solutions.",
    "cta_primary": "Our Services",
    "cta_secondary": "Contact Us",
    "stat_experience": "10+ Years Experience",
    "stat_projects": "50+ Projects Delivered",
    "stat_satisfaction": "100% Client Satisfaction"
  },
  "services": {
    "title": "Our Services",
    "subtitle": "Comprehensive technology solutions tailored for modern businesses",
    "consulting_title": "IT Consulting",
    "consulting_desc": "Strategic technology guidance, infrastructure audits, and tech roadmaps to align your IT with your business goals.",
    "project_title": "Project Management",
    "project_desc": "Agile delivery and digital transformation projects managed by certified professionals with a proven track record.",
    "security_title": "Cyber Security",
    "security_desc": "Comprehensive threat assessment, SOC monitoring, and compliance services to protect your digital assets.",
    "digital_title": "Digital Solutions",
    "digital_desc": "Custom software, web and mobile applications, and cloud migration to accelerate your digital journey."
  },
  "about": {
    "title": "About IT Space",
    "subtitle": "Your technology partner in Tanger",
    "body": "Founded in Tanger, Morocco, IT Space has been at the forefront of digital transformation in the Maghreb region. Our team of certified engineers and consultants brings deep expertise across IT consulting, cyber security, and digital solutions.",
    "mission": "Our mission is to empower businesses across North Africa with world-class technology solutions that drive growth, efficiency, and security.",
    "value_innovation": "Innovation",
    "value_security": "Security",
    "value_excellence": "Excellence"
  },
  "contact": {
    "title": "Contact Us",
    "subtitle": "Get in touch with our team",
    "address": "Tanger, Morocco",
    "phone": "+212 539 94 00 00",
    "email": "contact@itspace.ma",
    "form_name": "Full Name",
    "form_email": "Email Address",
    "form_subject": "Subject",
    "form_opt_consulting": "IT Consulting",
    "form_opt_security": "Cyber Security",
    "form_opt_project": "Project Management",
    "form_opt_digital": "Digital Solutions",
    "form_opt_other": "Other",
    "form_message": "Message",
    "form_submit": "Send Message"
  },
  "footer": {
    "tagline": "Your trusted technology partner in North Africa",
    "quick_links": "Quick Links",
    "copyright": "© 2026 IT Space — Tanger, Morocco. All rights reserved."
  }
}
```

- [ ] **Step 3: Create `messages/ar.json`**

```json
{
  "nav": {
    "home": "الرئيسية",
    "services": "الخدمات",
    "about": "من نحن",
    "contact": "اتصل بنا"
  },
  "hero": {
    "title": "تحويل الأعمال من خلال التكنولوجيا",
    "subtitle": "IT Space هو شريكك التكنولوجي الموثوق في شمال أفريقيا. نقدم حلولاً متطورة في استشارات تكنولوجيا المعلومات والأمن السيبراني والتحول الرقمي.",
    "cta_primary": "خدماتنا",
    "cta_secondary": "اتصل بنا",
    "stat_experience": "+10 سنوات خبرة",
    "stat_projects": "+50 مشروع منجز",
    "stat_satisfaction": "100٪ رضا العملاء"
  },
  "services": {
    "title": "خدماتنا",
    "subtitle": "حلول تكنولوجية شاملة مصممة للشركات الحديثة",
    "consulting_title": "استشارات تقنية المعلومات",
    "consulting_desc": "توجيه استراتيجي وتدقيق البنية التحتية وخرائط طريق التكنولوجيا لمواءمة تقنية المعلومات مع أهداف عملك.",
    "project_title": "إدارة المشاريع",
    "project_desc": "تسليم رشيق ومشاريع التحول الرقمي تُدار من قبل محترفين معتمدين بسجل حافل.",
    "security_title": "الأمن السيبراني",
    "security_desc": "تقييم شامل للتهديدات ومراقبة SOC وخدمات الامتثال لحماية أصولك الرقمية.",
    "digital_title": "الحلول الرقمية",
    "digital_desc": "برامج مخصصة وتطبيقات ويب وموبايل وهجرة سحابية لتسريع رحلتك الرقمية."
  },
  "about": {
    "title": "من نحن",
    "subtitle": "شريكك التكنولوجي في طنجة",
    "body": "تأسست IT Space في طنجة بالمغرب، وهي في طليعة التحول الرقمي في منطقة المغرب العربي. يجلب فريقنا من المهندسين والمستشارين المعتمدين خبرة عميقة في استشارات تكنولوجيا المعلومات والأمن السيبراني والحلول الرقمية.",
    "mission": "مهمتنا هي تمكين الشركات في شمال أفريقيا بحلول تكنولوجية عالمية المستوى تدفع النمو والكفاءة والأمان.",
    "value_innovation": "الابتكار",
    "value_security": "الأمان",
    "value_excellence": "التميز"
  },
  "contact": {
    "title": "تواصل معنا",
    "subtitle": "تواصل مع فريقنا",
    "address": "طنجة، المغرب",
    "phone": "+212 539 94 00 00",
    "email": "contact@itspace.ma",
    "form_name": "الاسم الكامل",
    "form_email": "البريد الإلكتروني",
    "form_subject": "الموضوع",
    "form_opt_consulting": "استشارات تقنية المعلومات",
    "form_opt_security": "الأمن السيبراني",
    "form_opt_project": "إدارة المشاريع",
    "form_opt_digital": "الحلول الرقمية",
    "form_opt_other": "أخرى",
    "form_message": "الرسالة",
    "form_submit": "إرسال الرسالة"
  },
  "footer": {
    "tagline": "شريكك التكنولوجي الموثوق في شمال أفريقيا",
    "quick_links": "روابط سريعة",
    "copyright": "© 2026 IT Space — طنجة، المغرب. جميع الحقوق محفوظة."
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add messages/
git commit -m "feat: add FR/EN/AR translation files"
```

---

## Task 4: Root Layout + Locale Layout

**Files:**
- Modify: `app/layout.tsx`
- Create: `app/[locale]/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Replace `app/layout.tsx` with minimal passthrough**

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 2: Create `app/[locale]/layout.tsx`**

```tsx
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' });

const locales = ['fr', 'en', 'ar'];

export const metadata: Metadata = {
  title: 'IT Space — Tanger | IT Consulting & Cyber Security',
  description: 'IT Space is your trusted technology partner in Tanger, Morocco. IT Consulting, Cyber Security, Project Management, Digital Solutions.',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={inter.variable}>
      <body className="font-sans antialiased bg-white text-slate-900">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Replace `app/globals.css`**

```css
@import "tailwindcss";

@theme {
  --color-primary: #1E40AF;
  --color-accent: #3B82F6;
  --color-surface: #F8FAFC;
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 4: Verify build compiles**

```bash
npm run build
```

Expected: build succeeds, no TypeScript errors.

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx "app/[locale]/layout.tsx" app/globals.css
git commit -m "feat: locale layout with RTL support, Inter font, NextIntlClientProvider"
```

---

## Task 5: Logo Component

**Files:**
- Create: `components/Logo.tsx`

- [ ] **Step 1: Create `components/Logo.tsx`**

```tsx
export function Logo({ white = false }: { white?: boolean }) {
  const textColor = white ? 'text-white' : 'text-[#1E40AF]';
  const subColor = white ? 'text-blue-200' : 'text-slate-400';

  return (
    <div className="flex items-center gap-2.5">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect width="36" height="36" rx="8" fill="#1E40AF" />
        <path d="M8 18L13 12L18 18L13 24L8 18Z" fill="white" />
        <path d="M18 18L23 12L28 18L23 24L18 18Z" fill="#93C5FD" />
      </svg>
      <div>
        <div className={`font-bold text-lg leading-tight ${textColor}`}>IT Space</div>
        <div className={`text-[10px] font-medium leading-tight tracking-wider uppercase ${subColor}`}>Tanger</div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Logo.tsx
git commit -m "feat: SVG logo component with white variant"
```

---

## Task 6: Navbar Component

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create `components/Navbar.tsx`**

```tsx
'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const LOCALES = ['fr', 'en', 'ar'] as const;
const SECTIONS = ['home', 'services', 'about', 'contact'] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('home')} aria-label="Home">
          <Logo />
        </button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-sm font-medium text-slate-600 hover:text-[#1E40AF] transition-colors"
            >
              {t(s)}
            </button>
          ))}
        </nav>

        {/* Language switcher (desktop) */}
        <div className="hidden md:flex items-center gap-1 text-xs font-semibold">
          {LOCALES.map((l, i) => (
            <span key={l} className="flex items-center">
              <a
                href={`/${l}`}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === l
                    ? 'text-[#1E40AF] bg-blue-50'
                    : 'text-slate-400 hover:text-[#1E40AF]'
                }`}
              >
                {l.toUpperCase()}
              </a>
              {i < LOCALES.length - 1 && (
                <span className="text-slate-200 select-none">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 text-slate-600"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => { scrollTo(s); setOpen(false); }}
              className="text-sm font-medium text-slate-700 text-start py-1"
            >
              {t(s)}
            </button>
          ))}
          <div className="flex gap-2 pt-3 border-t border-slate-100">
            {LOCALES.map((l) => (
              <a
                key={l}
                href={`/${l}`}
                className={`text-xs font-semibold px-3 py-1.5 rounded border ${
                  locale === l
                    ? 'border-[#1E40AF] text-[#1E40AF] bg-blue-50'
                    : 'border-slate-200 text-slate-500'
                }`}
              >
                {l.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: sticky navbar with mobile drawer and language switcher"
```

---

## Task 7: Hero Section

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create `components/Hero.tsx`**

```tsx
'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Award, Briefcase, ThumbsUp } from 'lucide-react';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#1E40AF 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Blue gradient blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-28 text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1E40AF] text-xs font-semibold px-4 py-1.5 rounded-full mb-8 border border-blue-100">
          <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
          Tanger, Morocco
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 max-w-4xl mx-auto">
          {t('title')}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('services')}
            className="inline-flex items-center justify-center gap-2 bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md shadow-blue-200"
          >
            {t('cta_primary')}
            <ArrowRight size={17} />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center border-2 border-[#1E40AF] text-[#1E40AF] px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            {t('cta_secondary')}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
          {[
            { icon: Award, key: 'stat_experience' },
            { icon: Briefcase, key: 'stat_projects' },
            { icon: ThumbsUp, key: 'stat_satisfaction' },
          ].map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-slate-100 shadow-sm"
            >
              <Icon size={22} className="text-[#3B82F6]" />
              <span className="font-bold text-slate-800 text-sm text-center">
                {t(key as 'stat_experience' | 'stat_projects' | 'stat_satisfaction')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: hero section with CTA buttons and stats cards"
```

---

## Task 8: Services Section

**Files:**
- Create: `components/Services.tsx`

- [ ] **Step 1: Create `components/Services.tsx`**

```tsx
import { useTranslations } from 'next-intl';
import { Lightbulb, ClipboardList, Shield, Code2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const SERVICES: { key: string; icon: LucideIcon; titleKey: string; descKey: string }[] = [
  { key: 'consulting', icon: Lightbulb, titleKey: 'consulting_title', descKey: 'consulting_desc' },
  { key: 'project', icon: ClipboardList, titleKey: 'project_title', descKey: 'project_desc' },
  { key: 'security', icon: Shield, titleKey: 'security_title', descKey: 'security_desc' },
  { key: 'digital', icon: Code2, titleKey: 'digital_title', descKey: 'digital_desc' },
];

export function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('title')}</h2>
          <p className="text-slate-500 max-w-xl mx-auto">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ key, icon: Icon, titleKey, descKey }) => (
            <div
              key={key}
              className="bg-white rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1E40AF] transition-colors duration-200">
                <Icon size={22} className="text-[#1E40AF] group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-base">
                {t(titleKey as 'consulting_title' | 'project_title' | 'security_title' | 'digital_title')}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t(descKey as 'consulting_desc' | 'project_desc' | 'security_desc' | 'digital_desc')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Services.tsx
git commit -m "feat: services section with 4 icon cards"
```

---

## Task 9: About Section

**Files:**
- Create: `components/About.tsx`

- [ ] **Step 1: Create `components/About.tsx`**

```tsx
import { useTranslations } from 'next-intl';
import { Zap, ShieldCheck, Star } from 'lucide-react';

export function About() {
  const t = useTranslations('about');

  const values = [
    { key: 'value_innovation', icon: Zap },
    { key: 'value_security', icon: ShieldCheck },
    { key: 'value_excellence', icon: Star },
  ] as const;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{t('title')}</h2>
            <p className="text-[#3B82F6] font-semibold mb-6">{t('subtitle')}</p>
            <p className="text-slate-600 leading-relaxed mb-4">{t('body')}</p>
            <p className="text-slate-600 leading-relaxed mb-8">{t('mission')}</p>
            <div className="flex flex-wrap gap-3">
              {values.map(({ key, icon: Icon }) => (
                <div
                  key={key}
                  className="flex items-center gap-2 bg-blue-50 text-[#1E40AF] px-4 py-2 rounded-full text-sm font-semibold border border-blue-100"
                >
                  <Icon size={15} />
                  {t(key)}
                </div>
              ))}
            </div>
          </div>

          {/* Decorative right column */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-2xl opacity-10" />
              <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-blue-200 rounded-xl" />
              <div className="absolute top-12 left-12 right-12 bottom-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <span className="text-7xl font-black text-[#1E40AF] opacity-20 select-none">IT</span>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#1E40AF] rounded-xl opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#3B82F6] rounded-lg opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/About.tsx
git commit -m "feat: about section with company story and value pills"
```

---

## Task 10: Contact Section

**Files:**
- Create: `components/Contact.tsx`

- [ ] **Step 1: Create `components/Contact.tsx`**

```tsx
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  const t = useTranslations('contact');

  const subjectKeys = [
    'form_opt_consulting',
    'form_opt_security',
    'form_opt_project',
    'form_opt_digital',
    'form_opt_other',
  ] as const;

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('title')}</h2>
          <p className="text-slate-500">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info card */}
          <div className="bg-[#1E40AF] text-white rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">IT Space</h3>
              <p className="text-blue-200 text-sm mb-8">Tanger, Morocco</p>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-blue-300 mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed">{t('address')}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-blue-300 shrink-0" />
                  <a
                    href={`tel:${t('phone').replace(/\s/g, '')}`}
                    className="text-sm hover:text-blue-200 transition-colors"
                  >
                    {t('phone')}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-blue-300 shrink-0" />
                  <a
                    href={`mailto:${t('email')}`}
                    className="text-sm hover:text-blue-200 transition-colors"
                  >
                    {t('email')}
                  </a>
                </div>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="mt-8 grid grid-cols-5 gap-2 opacity-20">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form
            action="mailto:contact@itspace.ma"
            method="post"
            encType="text/plain"
            className="bg-white rounded-2xl p-8 border border-slate-100 flex flex-col gap-4"
          >
            <input
              name="name"
              type="text"
              placeholder={t('form_name')}
              required
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
            />
            <input
              name="email"
              type="email"
              placeholder={t('form_email')}
              required
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
            />
            <select
              name="subject"
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow bg-white"
            >
              {subjectKeys.map((key) => (
                <option key={key} value={key}>
                  {t(key)}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder={t('form_message')}
              required
              rows={5}
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow resize-none"
            />
            <button
              type="submit"
              className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md shadow-blue-100 mt-2"
            >
              {t('form_submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Contact.tsx
git commit -m "feat: contact section with info card and mailto form"
```

---

## Task 11: Footer Component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create `components/Footer.tsx`**

```tsx
'use client';

import { useTranslations } from 'next-intl';
import { Linkedin, Twitter } from 'lucide-react';
import { Logo } from './Logo';

const SECTIONS = ['home', 'services', 'about', 'contact'] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-slate-900 text-white py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Logo white />
            <p className="text-slate-400 text-sm mt-4 leading-relaxed max-w-xs">
              {t('tagline')}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
              {t('quick_links')}
            </h4>
            <ul className="flex flex-col gap-2">
              {SECTIONS.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo(s)}
                    className="text-slate-400 text-sm hover:text-white transition-colors text-start"
                  >
                    {tNav(s)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
              Contact
            </h4>
            <div className="flex flex-col gap-1.5 text-slate-400 text-sm mb-5">
              <span>contact@itspace.ma</span>
              <span>+212 539 94 00 00</span>
              <span>Tanger, Morocco</span>
            </div>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-xs">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: footer with quick links, contact info, and social icons"
```

---

## Task 12: Page Assembly

**Files:**
- Create: `app/[locale]/page.tsx`
- Delete: `app/page.tsx` (default Next.js page, no longer needed)

- [ ] **Step 1: Delete the default `app/page.tsx`**

```bash
rm app/page.tsx
```

- [ ] **Step 2: Create `app/[locale]/page.tsx`**

```tsx
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Run dev server and verify all 3 locales render**

```bash
npm run dev
```

- Open `http://localhost:3000/fr` → French content, LTR
- Open `http://localhost:3000/en` → English content, LTR
- Open `http://localhost:3000/ar` → Arabic content, RTL (text flows right-to-left)
- Open `http://localhost:3000/` → should redirect to `/fr`
- Check all 4 sections are visible on scroll
- Check navbar sticky behavior and language switcher
- Check mobile viewport (resize to 375px width)

- [ ] **Step 4: Run production build to confirm no errors**

```bash
npm run build
```

Expected: "Route (app)" table with `/[locale]` entries, no errors.

- [ ] **Step 5: Commit**

```bash
git add "app/[locale]/page.tsx"
git rm app/page.tsx
git commit -m "feat: assemble all sections into locale page"
```

---

## Task 13: Vercel Configuration

**Files:**
- Create: `vercel.json`

- [ ] **Step 1: Create `vercel.json`**

```json
{
  "rewrites": [
    { "source": "/", "destination": "/fr" }
  ]
}
```

- [ ] **Step 2: Commit**

```bash
git add vercel.json
git commit -m "chore: vercel.json rewrite root to /fr default locale"
```

---

## Task 14: Deploy to Vercel

- [ ] **Step 1: Install Vercel CLI if not already installed**

```bash
npm i -g vercel
```

- [ ] **Step 2: Login to Vercel**

```bash
vercel login
```

Follow the browser OAuth flow.

- [ ] **Step 3: Deploy to preview**

```bash
vercel
```

Accept defaults when prompted:
- Set up and deploy: Yes
- Which scope: your account
- Link to existing project: No
- Project name: `it-space`
- In which directory is your code located: `./`

Expected: deployment URL printed, e.g. `https://it-space-xxx.vercel.app`

- [ ] **Step 4: Verify on deployed URL**

Open the preview URL and check:
- `/fr` renders correctly with French text
- `/en` renders correctly with English text
- `/ar` renders correctly with Arabic text and RTL layout
- Root `/` redirects to `/fr`
- Language switcher links work across locales
- Navbar sticky + mobile menu work
- All 4 sections visible

- [ ] **Step 5: Deploy to production**

```bash
vercel --prod
```

Expected: production URL printed.

- [ ] **Step 6: Final commit**

```bash
git add .
git commit -m "chore: production deployment on Vercel"
```

---

## Self-Review Notes

**Spec coverage check:**
- ✅ 4 sections: Home, Services, About, Contact
- ✅ Trilingual: FR/EN/AR with RTL for Arabic
- ✅ Contact info: `contact@itspace.ma`, `+212 539 94 00 00`, Tanger
- ✅ Modern blue & white design
- ✅ SVG logo (IT Space + Tanger)
- ✅ Language switcher in navbar
- ✅ Vercel deployment with locale redirect
- ✅ Responsive (mobile + desktop)

**No TBDs or placeholder code:** All components contain complete implementations.

**Type consistency:** `t()` keys in all components match flat key names in translation JSON files (e.g., `consulting_title`, not nested `items.consulting.title`).
