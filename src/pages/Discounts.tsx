import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Zap } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import SaleIcon from '@/assets/icons/sale.webp'
import BmwYellowIcon from '@/assets/icons/bmw-yellow.webp'
import AutoUsedIcon from '@/assets/icons/auto-used.webp'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'
import mercedesLogo from '@/assets/partners-logos/mercedes-logo-removebg.webp'
import bmwLogo from '@/assets/partners-logos/bmw-logo-removebg.webp'
import toyotaLogo from '@/assets/partners-logos/toyota-logo-removebg.webp'
import bydLogo from '@/assets/partners-logos/byd-logo.webp'

const HERO_ICONS = [SaleIcon, BmwYellowIcon, AutoUsedIcon]

// logo keys for brands.items — non-translatable UI logic
const BRAND_LOGOS = ['mercedes', 'bmw', 'toyota', 'byd'] as const
type BrandLogoKey = typeof BRAND_LOGOS[number]

const LOGO_MAP: Record<BrandLogoKey, { src: string; alt: string }> = {
  mercedes: { src: mercedesLogo, alt: 'Mercedes-Benz' },
  bmw:      { src: bmwLogo,      alt: 'BMW' },
  toyota:   { src: toyotaLogo,   alt: 'Toyota' },
  byd:      { src: bydLogo,      alt: 'BYD' },
}

// ─── Brand logo helper ────────────────────────────────────────────────────────

function BrandLogo({ name }: { name: BrandLogoKey }) {
  const { src, alt } = LOGO_MAP[name]
  return <img src={src} alt={alt} className="h-10 w-auto object-contain opacity-80" />
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Discounts() {
  const { t } = useLanguage()
  const [activeIcon, setActiveIcon] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon(prev => (prev + 1) % HERO_ICONS.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  const brandItems = BRAND_LOGOS.map((logo, i) => ({
    logo,
    brand:  t(`discounts.brands.items.${i}.brand`),
    desc:   t(`discounts.brands.items.${i}.desc`),
    models: [0, 1, 2].map(j => t(`discounts.brands.items.${i}.models.${j}`)),
    note:   t(`discounts.brands.items.${i}.note`),
  }))

  const howSteps = [0, 1, 2].map(i => ({
    n:     t(`discounts.how.steps.${i}.n`),
    title: t(`discounts.how.steps.${i}.title`),
    desc:  t(`discounts.how.steps.${i}.desc`),
  }))

  const benefitItems = [0, 1, 2, 3, 4, 5].map(i => t(`discounts.benefits.items.${i}`))

  return (
    <>
      <Helmet>
        <title>{t('discounts.meta.title')}</title>
        <meta name="description" content={t('discounts.meta.description')} />
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
                  {t('discounts.nav.home')}
                </a>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-black text-white leading-none tracking-tighter uppercase italic mb-5">
                  {t('discounts.hero.title')}<br />
                  <span className="text-primary">{t('discounts.hero.titleAccent')}</span>
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-gray-400 font-medium text-base lg:text-lg max-w-lg leading-relaxed">
                  {t('discounts.hero.subtitle')}
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
                <div className="absolute bottom-4 flex gap-2" aria-hidden="true">
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
                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('discounts.brands.badge')}</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark leading-none tracking-tighter uppercase italic mb-6">
                  {t('discounts.brands.title')}<br />
                  <span className="text-primary">{t('discounts.brands.titleAccent')}</span>
                </h2>
                <p className="text-gray-500 font-medium max-w-2xl leading-relaxed">{t('discounts.brands.intro')}</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brandItems.map((item, i) => (
                <Reveal key={item.brand} delay={i * 80}>
                  <div className="border-2 border-gray-100 p-8 lg:p-10 flex flex-col gap-5 group transition-all duration-300 h-full border-anim">
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
                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('discounts.how.badge')}</p>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
                  {t('discounts.how.title')} <span className="text-primary">{t('discounts.how.titleAccent')}</span>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howSteps.map((step, i) => (
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
                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('discounts.benefits.badge')}</p>
                <h2 className="text-4xl lg:text-5xl font-black text-dark leading-none tracking-tighter uppercase italic">
                  {t('discounts.benefits.title')}<br />
                  <span className="text-primary">{t('discounts.benefits.titleAccent')}</span>
                </h2>
              </div>
            </Reveal>

            <div className="space-y-4">
              {benefitItems.map((item, i) => (
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
                  {t('discounts.cta.badge')}
                </span>
                <h2 className="text-4xl lg:text-6xl font-black text-white leading-none tracking-tighter uppercase italic">
                  {t('discounts.cta.title')}<br />
                  <span className="text-primary">{t('discounts.cta.titleAccent')}</span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-md text-sm leading-relaxed">{t('discounts.cta.subtitle')}</p>
              </div>
            </Reveal>
            <Reveal variant="right" delay={150}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/#contact" variant="yellow" className="group">
                  {t('discounts.cta.primary')}
                  <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                </CTAButton>
                <CTAButton href="/#calculator" variant="outline-yellow" className="group">
                  {t('discounts.cta.secondary')}
                  <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
