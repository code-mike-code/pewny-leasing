import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Zap } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import SaleIcon from '@/assets/icons/sale.webp'
import BmwYellowIcon from '@/assets/icons/bmw-yellow.webp'
import AutoUsedIcon from '@/assets/icons/auto-used.webp'

const HERO_ICONS = [SaleIcon, BmwYellowIcon, AutoUsedIcon]
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'

import mercedesLogo from '@/assets/partners-logos/mercedes-logo-removebg.webp'
import bmwLogo from '@/assets/partners-logos/bmw-logo-removebg.webp'
import toyotaLogo from '@/assets/partners-logos/toyota-logo-removebg.webp'
import bydLogo from '@/assets/partners-logos/byd-logo.webp'

// ─── Content ─────────────────────────────────────────────────────────────────

const content = {
  pl: {
    meta: {
      title: 'Pojazdy z Rabatem – Ekskluzywne Rabaty Flotowe | Pewny Leasing',
      description: 'Uzyskaj ekskluzywne rabaty flotowe na pojazdy Mercedes, BMW, Toyota i BYD. Rabat wyliczany na podstawie marki, modelu i dostępności. Sprawdź ofertę Pewny Leasing.',
    },
    nav: { home: 'Strona główna' },
    hero: {
      title: 'Pojazdy',
      titleAccent: 'Z Rabatem',
      subtitle: 'Korzystaj z ekskluzywnych rabatów flotowych niedostępnych dla klientów indywidualnych. Dzięki naszej współpracy z dealerami Mercedes, BMW, Toyota i BYD — Twój nowy pojazd kosztuje mniej.',
    },
    brands: {
      badge: 'Dostępne Marki',
      title: 'Najlepsze marki,',
      titleAccent: 'najlepsze ceny',
      intro: 'Współpracujemy bezpośrednio z autoryzowanymi dealerami czterech kluczowych marek. Każda z nich oferuje inny poziom rabatu flotowego — zależny od modelu, konfiguracji i aktualnej dostępności.',
      items: [
        {
          brand: 'Mercedes-Benz',
          logo: 'mercedes',
          desc: 'Segment premium z flotowymi zniżkami do 12%. Sedany, SUV-y i elektryki z pełną gamą konfiguracji — od klasy A po GLE i EQS.',
          models: ['Klasa A, C, E, S', 'GLA, GLC, GLE, GLS', 'EQA, EQB, EQC, EQS'],
          note: 'Rabat zależy od modelu i wyposażenia. Najwyższe zniżki na modele dostępne od ręki.',
        },
        {
          brand: 'BMW',
          logo: 'bmw',
          desc: 'Ikona niemieckiej motoryzacji w cenie floty. Serie 3, 5, X3, X5 z rabatami powyżej standardowych ofert dealerskich. Modele elektryczne iX i i4.',
          models: ['Seria 3, 5, 7', 'X3, X5, X7', 'iX, i4, i5'],
          note: 'Wyższy rabat dla zamówień flotowych powyżej 3 pojazdów rocznie.',
        },
        {
          brand: 'Toyota',
          logo: 'toyota',
          desc: 'Japońska niezawodność i najkrótsze czasy dostawy. Hybrydy, sedany i SUV-y z najszerszą dostępnością w Polsce — Corolla, RAV4 i Camry.',
          models: ['Corolla, Camry', 'RAV4, Land Cruiser', 'bZ4X, Yaris Cross'],
          note: 'Najkrótsze czasy dostawy spośród wszystkich marek. Idealna dla firm z pilnymi potrzebami.',
        },
        {
          brand: 'BYD',
          logo: 'byd',
          desc: 'Chiński lider elektromobilności z najwyższymi rabatami na rynku. Szeroka gama elektrycznych SUV-ów i sedanów — Atto 3, Seal, Han i Dolphin.',
          models: ['Atto 3', 'Seal, Han', 'Dolphin, Tang'],
          note: 'Najwyższe rabaty flotowe na rynku. Idealna marka dla flot elektrycznych i polityki ESG.',
        },
      ],
    },
    how: {
      badge: 'Jak obliczamy rabat?',
      title: '3 czynniki',
      titleAccent: 'rabatu',
      steps: [
        {
          n: '01',
          title: 'Marka pojazdu',
          desc: 'Każdy producent posiada własny program flotowy z dedykowanymi stawkami. Współpracujemy bezpośrednio z dealerami, dzięki czemu uzyskujemy warunki niedostępne w standardowej sprzedaży.',
        },
        {
          n: '02',
          title: 'Model i konfiguracja',
          desc: 'Konkretny model, silnik i pakiet wyposażenia bezpośrednio wpływają na poziom rabatu. Modele z wyższego segmentu oraz auta elektryczne często mają korzystniejsze stawki flotowe.',
        },
        {
          n: '03',
          title: 'Dostępność',
          desc: 'Pojazdy dostępne od ręki u dealera mogą posiadać dodatkowe rabaty likwidacyjne. Auta na zamówienie mają stałe stawki flotowe, ale możliwa jest negocjacja przy większych zleceniach.',
        },
      ],
    },
    benefits: {
      badge: 'Dlaczego przez nas?',
      title: 'Więcej niż',
      titleAccent: 'dobra cena',
      items: [
        'Dostęp do rabatów flotowych niedostępnych dla klientów indywidualnych',
        'Możliwość łączenia rabatu flotowego z programem Cash Back Pewny Leasing',
        'Jedno miejsce — finansowanie + rabat + obsługa posprzedażna',
        'Doradca przeprowadza Cię przez cały proces — od wyboru modelu do odbioru',
        'Negocjujemy warunki z kilkoma dealerami równocześnie',
        'Transparentne rozliczenie — widzisz każdy element ceny',
      ],
    },
    cta: {
      title: 'Zapytaj o rabat',
      titleAccent: 'na Twój pojazd',
      subtitle: 'Skontaktuj się z naszym doradcą i dowiedz się, jaki rabat możemy uzyskać dla Ciebie przy wybranym modelu.',
      primary: 'Sprawdź dostępność',
      secondary: 'Kalkulator leasingowy',
    },
  },
  en: {
    meta: {
      title: 'Vehicles With Discount – Exclusive Fleet Discounts | Pewny Leasing',
      description: 'Get exclusive fleet discounts on Mercedes, BMW, Toyota and BYD vehicles. Discount calculated based on brand, model and availability. Check the Pewny Leasing offer.',
    },
    nav: { home: 'Home' },
    hero: {
      title: 'Vehicles',
      titleAccent: 'With Discount',
      subtitle: 'Access exclusive fleet discounts unavailable to private buyers. Through our partnerships with Mercedes, BMW, Toyota and BYD dealers — your new vehicle costs less.',
    },
    brands: {
      badge: 'Available Brands',
      title: 'The best brands,',
      titleAccent: 'the best prices',
      intro: 'We work directly with authorised dealers of four key brands. Each offers a different level of fleet discount — depending on model, configuration and current availability.',
      items: [
        {
          brand: 'Mercedes-Benz',
          logo: 'mercedes',
          desc: 'Premium segment with fleet discounts up to 12%. Saloons, SUVs and electric vehicles with the full configuration range — from A-Class to GLE and EQS.',
          models: ['A, C, E, S Class', 'GLA, GLC, GLE, GLS', 'EQA, EQB, EQC, EQS'],
          note: 'Discount depends on model and equipment. Highest discounts on vehicles available off the shelf.',
        },
        {
          brand: 'BMW',
          logo: 'bmw',
          desc: 'Icon of German engineering at fleet pricing. Series 3, 5, X3, X5 with discounts above standard dealer offers. Electric models iX and i4.',
          models: ['Series 3, 5, 7', 'X3, X5, X7', 'iX, i4, i5'],
          note: 'Higher discount for fleet orders of 3+ vehicles per year.',
        },
        {
          brand: 'Toyota',
          logo: 'toyota',
          desc: 'Japanese reliability and the shortest delivery times. Hybrids, saloons and SUVs with the widest availability in Poland — Corolla, RAV4 and Camry.',
          models: ['Corolla, Camry', 'RAV4, Land Cruiser', 'bZ4X, Yaris Cross'],
          note: 'Shortest delivery times of all brands. Ideal for companies with urgent fleet needs.',
        },
        {
          brand: 'BYD',
          logo: 'byd',
          desc: "China's leading EV brand with the highest discounts on the market. Wide range of electric SUVs and saloons — Atto 3, Seal, Han and Dolphin.",
          models: ['Atto 3', 'Seal, Han', 'Dolphin, Tang'],
          note: 'Highest fleet discounts on the market. The ideal brand for EV fleets and ESG policy.',
        },
      ],
    },
    how: {
      badge: 'How is the discount calculated?',
      title: '3 discount',
      titleAccent: 'factors',
      steps: [
        {
          n: '01',
          title: 'Vehicle brand',
          desc: 'Each manufacturer has its own fleet programme with dedicated rates. We work directly with dealers, giving us access to conditions unavailable in standard retail sales.',
        },
        {
          n: '02',
          title: 'Model and configuration',
          desc: 'The specific model, engine and equipment package directly affect the discount level. Higher-segment models and electric vehicles often have more favourable fleet rates.',
        },
        {
          n: '03',
          title: 'Availability',
          desc: 'Vehicles available immediately from a dealer may have additional clearance discounts. Made-to-order cars have fixed fleet rates, though negotiation is possible for larger orders.',
        },
      ],
    },
    benefits: {
      badge: 'Why through us?',
      title: 'More than',
      titleAccent: 'a good price',
      items: [
        'Access to fleet discounts unavailable to private buyers',
        'Option to combine a fleet discount with the Pewny Leasing Cash Back programme',
        'One place — financing + discount + after-sales support',
        'Your advisor guides you through the entire process — from model selection to vehicle collection',
        'We negotiate with multiple dealers simultaneously',
        'Transparent pricing — you see every cost component',
      ],
    },
    cta: {
      title: 'Ask about a discount',
      titleAccent: 'on your vehicle',
      subtitle: 'Contact our advisor and find out what discount we can secure for you on your chosen model.',
      primary: 'Check availability',
      secondary: 'Leasing calculator',
    },
  },
}

// ─── Brand logo helper ────────────────────────────────────────────────────────

function BrandLogo({ name }: { name: string }) {
  if (name === 'mercedes') {
    return <img src={mercedesLogo} alt="Mercedes-Benz" className="h-10 w-auto object-contain opacity-80" />
  }
  if (name === 'bmw') {
    return <img src={bmwLogo} alt="BMW" className="h-10 w-auto object-contain opacity-80" />
  }
  if (name === 'toyota') {
    return <img src={toyotaLogo} alt="Toyota" className="h-10 w-auto object-contain opacity-80" />
  }
  return <img src={bydLogo} alt="BYD" className="h-10 w-auto object-contain opacity-80" />
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Discounts() {
  const { language } = useLanguage()
  const c = content[language]
  const [activeIcon, setActiveIcon] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon(prev => (prev + 1) % HERO_ICONS.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Helmet>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />
      </Helmet>

      <Header />

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="bg-[#050505] pt-[116px] pb-6 lg:pb-8 px-4 sm:px-8 overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5" />
            <div className="absolute right-1/4 top-0 bottom-0 w-px bg-white/5" />
          </div>

          <div className="max-w-screen-xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-6 lg:pt-8">
            <div>
              <Reveal>
                <a
                  href="/"
                  className="hover-wipe hover-wipe-yellow shape-rhombus inline-flex items-center gap-2 text-white/60 font-bold text-xs uppercase tracking-widest px-5 py-2.5 mb-8 group bg-white/5"
                >
                  <ArrowRight size={14} strokeWidth={3} className="rotate-180 transition-transform duration-300 group-hover:rotate-[135deg]" />
                  {c.nav.home}
                </a>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-black text-white leading-none tracking-tighter uppercase italic mb-5">
                  {c.hero.title}<br />
                  <span className="text-primary">{c.hero.titleAccent}</span>
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-gray-400 font-medium text-base lg:text-lg max-w-lg leading-relaxed">
                  {c.hero.subtitle}
                </p>
              </Reveal>
            </div>

            {/* Decorative — cycling icons */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[320px] h-[320px]">
                <div className="relative w-56 h-56 flex items-center justify-center">
                  {HERO_ICONS.map((icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      alt=""
                      aria-hidden="true"
                      className="absolute w-48 h-auto transition-all duration-700"
                      style={{
                        opacity: i === activeIcon ? 1 : 0,
                        transform: i === activeIcon ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(12px)',
                      }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-4 flex gap-2">
                  {HERO_ICONS.map((_, i) => (
                    <div
                      key={i}
                      className="h-1 transition-all duration-500"
                      style={{
                        width: i === activeIcon ? '20px' : '6px',
                        backgroundColor: i === activeIcon ? '#F5A623' : 'rgba(255,255,255,0.2)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BRANDS ── */}
        <section className="py-24 lg:py-32 px-4 sm:px-8 bg-white">
          <div className="max-w-screen-xl mx-auto">
            <Reveal>
              <div className="mb-12 lg:mb-16">
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{c.brands.badge}</h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark leading-none tracking-tighter uppercase italic mb-6">
                  {c.brands.title}<br />
                  <span className="text-primary">{c.brands.titleAccent}</span>
                </h3>
                <p className="text-gray-500 font-medium max-w-2xl leading-relaxed">{c.brands.intro}</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {c.brands.items.map((item, i) => (
                <Reveal key={item.brand} delay={i * 80}>
                  <div className="border-2 border-gray-100 p-8 lg:p-10 flex flex-col gap-5 group transition-all duration-300 h-full border-anim">
                    {/* Brand name + logo */}
                    <div className="flex items-center gap-4">
                      <h4 className="text-2xl font-black text-dark uppercase italic tracking-tight">{item.brand}</h4>
                      <BrandLogo name={item.logo} />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.models.map(model => (
                        <li key={model} className="flex items-center gap-3 text-sm text-gray-600">
                          <ArrowRight size={14} strokeWidth={3} className="text-primary flex-shrink-0" />
                          {model}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider border-t border-gray-100 pt-4 mt-2">
                      {item.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT'S CALCULATED ── */}
        <section className="py-24 lg:py-32 px-4 sm:px-8 bg-[#0A0A0A]">
          <div className="max-w-screen-xl mx-auto">
            <Reveal>
              <div className="text-center mb-16 lg:mb-20">
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{c.how.badge}</h2>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
                  {c.how.title} <span className="text-primary">{c.how.titleAccent}</span>
                </h3>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {c.how.steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 100}>
                  <div className="border border-white/5 p-8 lg:p-10 group transition-all duration-500 bg-[#111] h-full flex flex-col border-anim">
                    <span className="text-6xl font-black text-primary/20 leading-none mb-6 block">{step.n}</span>
                    <h4 className="text-xl font-black text-white uppercase italic tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 group-hover:text-gray-400 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="py-24 lg:py-32 px-4 sm:px-8 bg-gray-50 border-t border-gray-100">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">
            <Reveal variant="left">
              <div className="lg:sticky lg:top-[100px]">
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{c.benefits.badge}</h2>
                <h3 className="text-4xl lg:text-5xl font-black text-dark leading-none tracking-tighter uppercase italic">
                  {c.benefits.title}<br />
                  <span className="text-primary">{c.benefits.titleAccent}</span>
                </h3>
              </div>
            </Reveal>

            <div className="space-y-4">
              {c.benefits.items.map((item, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex items-start gap-4 bg-white border border-gray-100 px-6 py-5 group transition-colors duration-200 border-anim">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-dark text-sm font-medium leading-relaxed">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0A0A0A] py-24 lg:py-32 px-4 sm:px-8 border-t border-white/5">
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            <Reveal variant="left">
              <div>
                <span className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
                  <Zap size={14} />
                  Rabaty Flotowe
                </span>
                <h2 className="text-4xl lg:text-6xl font-black text-white leading-none tracking-tighter uppercase italic">
                  {c.cta.title}<br />
                  <span className="text-primary">{c.cta.titleAccent}</span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-md text-sm leading-relaxed">{c.cta.subtitle}</p>
              </div>
            </Reveal>
            <Reveal variant="right" delay={150}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact">
                  <CTAButton variant="yellow" className="group" onClick={undefined}>
                    {c.cta.primary}
                    <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                  </CTAButton>
                </a>
                <a href="/#calculator">
                  <CTAButton variant="outline-yellow" className="group" onClick={undefined}>
                    {c.cta.secondary}
                    <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                  </CTAButton>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
