# Pewny Leasing

Corporate leasing platform with an interactive lease calculator and lead generation landing page. Built with React 18, TypeScript, Vite and Tailwind CSS.

Pewny Leasing — niezależny broker leasingowy B2B w Polsce. Leasing operacyjny i finansowy, LTR, finansowanie flot i sprzętu specjalistycznego. Współpraca z ponad 12 bankami. Szybka decyzja — nawet tego samego dnia.

![Pewny Leasing — podgląd strony](src/assets/rwd-mockup-for%20readme.webp)

## Quick Start

```bash
npm install
npm run dev        # Dev server on port 8080
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint
```

## Tech Stack

| Layer | Technology |
|---|---|
| Build | Vite + SWC |
| UI | React 18 + TypeScript |
| Styling | Tailwind CSS (custom theme) |
| Routing | React Router v6 |
| i18n | Custom Context hook — PL / EN |
| Icons | Lucide React |
| SEO | react-helmet-async + JSON-LD |
| Forms | EmailJS |
| Accordion | Radix UI (`@radix-ui/react-accordion`) |
| Utilities | clsx + tailwind-merge |
| Tests | Vitest |

No full component library — plain HTML + Tailwind. Radix UI used only for the accessible accordion primitive.

## Project Structure

```
src/
├── components/
│   ├── calculator/       # Multi-step lease calculator
│   ├── forms/            # InquiryForm
│   ├── layout/           # Header, Footer
│   ├── modals/           # BookingModal
│   ├── sections/         # Page sections (Hero, Banner, About, Offer, WhyUs, …)
│   └── ui/               # Atoms: CTAButton, Reveal, accordion, ImageCarousel,
│                         #        MapPopover, WaveText, WhatsAppWidget, CookieConsent
├── hooks/
│   ├── useLanguage.tsx   # i18n context + t() translation helper
│   ├── useScrollReveal.ts
│   └── useFocusTrap.ts
├── lib/
│   ├── calculator.ts     # Lease instalment formula
│   ├── formFlow.ts       # Shared calculator + contact form logic
│   ├── validation.ts     # NIP / email / phone validators
│   ├── emailjs.ts        # EmailJS integration
│   └── analytics.ts      # GA4 event helpers
├── pages/
│   ├── Index.tsx
│   ├── CashBack.tsx
│   ├── Discounts.tsx
│   ├── EquipmentFinancing.tsx
│   ├── FAQ.tsx
│   ├── PrivacyPolicy.tsx
│   ├── TermsOfService.tsx
│   └── NotFound.tsx
└── translations/
    ├── pl.ts             # Polish strings
    └── en.ts             # English strings
```

## i18n

All user-visible strings live in `src/translations/pl.ts` and `src/translations/en.ts`. The `useLanguage` hook exposes a `t(key)` helper that resolves dot-notation paths (including array indices) against the active language object.

```tsx
const { t } = useLanguage()
t('cashBack.hero.title')              // scalar
t(`equipmentFinancing.sectors.items.${i}.title`)  // array item
```

## Design System

- **Brand colours**: dark background (`#050505` / `#0A0A0A`), warm yellow CTA (`#F5A623` → Tailwind `primary`)
- **Typography**: heavy italic uppercase headings (`font-black italic uppercase`), legible body text
- **Shapes**: `shape-rhombus` utility for clipped rhombus corners
- **Animations**: `Reveal` component (Intersection Observer fade-in), CSS marquee in `BannerSection`, stacked accordion with center-expand animation
- **Motion safety**: `prefers-reduced-motion` respected in all CSS animations

## Accessibility

- WCAG 2.0 target
- Semantic heading hierarchy: `h1` (page) → `h2` (sections) → `h4` (cards); badge labels use `<p>`
- `aria-label` on interactive icons and form controls
- Visible focus states; focus trap in modals
- `alt` on all meaningful images; `aria-hidden` on decorative elements
