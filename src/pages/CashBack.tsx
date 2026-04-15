import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Coins, CheckCircle, Building2, User, Zap } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import CashBackIcon from '@/assets/icons/cash-back.webp'
import SpecToolsIcon from '@/assets/icons/spec-tools.webp'
import PersonalMeetIcon from '@/assets/icons/personal-meet.webp'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'

const HERO_ICONS = [CashBackIcon, SpecToolsIcon, PersonalMeetIcon]

// icon keys for who.cards — non-translatable UI logic
const WHO_CARD_ICONS = ['user', 'building'] as const

// ─── Component ────────────────────────────────────────────────────────────────

export default function CashBack() {
  const { t } = useLanguage()
  const [activeIcon, setActiveIcon] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon(prev => (prev + 1) % HERO_ICONS.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  const whatStats = [0, 1, 2, 3].map(i => ({
    value: t(`cashBack.what.stats.${i}.value`),
    label: t(`cashBack.what.stats.${i}.label`),
  }))

  const howSteps = [0, 1, 2].map(i => ({
    n:     t(`cashBack.how.steps.${i}.n`),
    title: t(`cashBack.how.steps.${i}.title`),
    desc:  t(`cashBack.how.steps.${i}.desc`),
  }))

  const whoCards = WHO_CARD_ICONS.map((icon, i) => ({
    icon,
    title:  t(`cashBack.who.cards.${i}.title`),
    desc:   t(`cashBack.who.cards.${i}.desc`),
    points: [0, 1, 2].map(j => t(`cashBack.who.cards.${i}.points.${j}`)),
  }))

  const benefitItems = [0, 1, 2, 3, 4, 5, 6].map(i => t(`cashBack.benefits.items.${i}`))

  return (
    <>
      <Helmet>
        <title>{t('cashBack.meta.title')}</title>
        <meta name="description" content={t('cashBack.meta.description')} />
      </Helmet>

      <Header />

      <main id="main-content">

        {/* ── HERO ── */}
        {/* pt-[116px] = fixed header clearance (40px topbar + 76px mainbar) */}
        <section className="bg-[#050505] pt-[116px] pb-6 lg:pb-8 px-4 sm:px-8 overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5" />
            <div className="absolute right-1/4 top-0 bottom-0 w-px bg-white/5" />
          </div>

          <div className="max-w-screen-xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-6 lg:pt-8">
            <div>
              {/* back button — top-left above heading */}
              <Reveal>
                <a
                  href="/"
                  className="hover-wipe hover-wipe-yellow shape-rhombus inline-flex items-center gap-2 text-white/60 font-bold text-xs uppercase tracking-widest px-5 py-2.5 mb-8 group bg-white/5"
                >
                  <ArrowRight size={14} strokeWidth={3} className="rotate-180 transition-transform duration-300 group-hover:rotate-[135deg]" />
                  {t('cashBack.nav.home')}
                </a>
              </Reveal>

              <Reveal delay={80}>
                <span className="inline-flex items-center gap-2 bg-primary/15 text-primary font-black text-[10px] uppercase tracking-widest px-4 py-2 mb-6 shape-rhombus">
                  <Coins size={12} />
                  {t('cashBack.hero.badge')}
                </span>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-black text-white leading-none tracking-tighter uppercase italic mb-5">
                  {t('cashBack.hero.title')}<br />
                  <span className="text-primary">{t('cashBack.hero.titleAccent')}</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-gray-400 font-medium text-base lg:text-lg max-w-lg leading-relaxed mb-8">
                  {t('cashBack.hero.subtitle')}
                </p>
              </Reveal>
              <Reveal delay={260}>
                <CTAButton href="/#contact" variant="yellow" className="group">
                  {t('cashBack.cta.primary')}
                  <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                </CTAButton>
              </Reveal>
            </div>

            {/* decorative — cycling icons */}
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

        {/* ── WHAT IS IT ── */}
        <section className="py-24 lg:py-32 px-4 sm:px-8 bg-white">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal variant="left">
              <div>
                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('cashBack.what.badge')}</p>
                <h2 className="text-4xl lg:text-6xl font-black text-dark leading-none tracking-tighter uppercase italic mb-8">
                  {t('cashBack.what.title')}<br />
                  <span className="text-primary">{t('cashBack.what.titleAccent')}</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{t('cashBack.what.text1')}</p>
                <p className="text-gray-500 leading-relaxed">{t('cashBack.what.text2')}</p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {whatStats.map(({ value, label }) => (
                  <div key={label} className="bg-gray-50 border border-gray-100 p-6 flex flex-col justify-between shape-rhombus min-h-[120px] group hover:bg-primary hover:border-primary transition-all duration-300">
                    <p className="text-3xl font-black text-dark tracking-tighter">{value}</p>
                    <p className="text-xs font-bold text-gray-400 group-hover:text-dark/60 uppercase tracking-widest mt-3">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-24 lg:py-32 px-4 sm:px-8 bg-[#0A0A0A]">
          <div className="max-w-screen-xl mx-auto">
            <Reveal>
              <div className="text-center mb-16 lg:mb-20">
                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('cashBack.how.badge')}</p>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
                  {t('cashBack.how.title')} <span className="text-primary">{t('cashBack.how.titleAccent')}</span>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 100}>
                  <div className="border border-white/5 p-8 lg:p-10 group hover:border-primary/50 transition-all duration-500 bg-[#111] hover:shadow-[0_0_40px_rgba(251,191,36,0.05)] h-full flex flex-col">
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

        {/* ── WHO IS IT FOR ── */}
        <section className="py-24 lg:py-32 px-4 sm:px-8 bg-white">
          <div className="max-w-screen-xl mx-auto">
            <Reveal>
              <div className="mb-16 lg:mb-20">
                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('cashBack.who.badge')}</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark leading-none tracking-tighter uppercase italic">
                  {t('cashBack.who.title')} <span className="text-primary">{t('cashBack.who.titleAccent')}</span>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {whoCards.map((card, i) => (
                <Reveal key={card.title} delay={i * 120}>
                  <div className="border-2 border-gray-100 hover:border-primary p-10 lg:p-12 flex flex-col gap-6 group transition-all duration-300 h-full">
                    <div className="bg-primary/10 w-14 h-14 flex items-center justify-center shape-rhombus group-hover:bg-primary transition-colors duration-300">
                      {card.icon === 'user'
                        ? <User size={24} className="text-primary group-hover:text-dark transition-colors duration-300" strokeWidth={2} />
                        : <Building2 size={24} className="text-primary group-hover:text-dark transition-colors duration-300" strokeWidth={2} />
                      }
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-dark uppercase italic tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                        {card.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">{card.desc}</p>
                      <ul className="space-y-2">
                        {card.points.map(point => (
                          <li key={point} className="flex items-center gap-3 text-sm text-gray-600">
                            <ArrowRight size={14} strokeWidth={3} className="text-primary flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('cashBack.benefits.badge')}</p>
                <h2 className="text-4xl lg:text-5xl font-black text-dark leading-none tracking-tighter uppercase italic">
                  {t('cashBack.benefits.title')}<br />
                  <span className="text-primary">{t('cashBack.benefits.titleAccent')}</span>
                </h2>
              </div>
            </Reveal>

            <div className="space-y-4">
              {benefitItems.map((item, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex items-start gap-4 bg-white border border-gray-100 px-6 py-5 group hover:border-primary transition-colors duration-200">
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
                  Cash Back
                </span>
                <h2 className="text-4xl lg:text-6xl font-black text-white leading-none tracking-tighter uppercase italic">
                  {t('cashBack.cta.title')}<br />
                  <span className="text-primary">{t('cashBack.cta.titleAccent')}</span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-md text-sm leading-relaxed">{t('cashBack.cta.subtitle')}</p>
              </div>
            </Reveal>
            <Reveal variant="right" delay={150}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/#contact" variant="yellow" className="group">
                  {t('cashBack.cta.primary')}
                  <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                </CTAButton>
                <CTAButton href="/#calculator" variant="outline-yellow" className="group">
                  {t('cashBack.cta.secondary')}
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
