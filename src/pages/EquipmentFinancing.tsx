import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Zap } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'
import MedicineIcon from '@/assets/icons/medicine.webp'
import IndustryIcon from '@/assets/icons/industry.webp'
import TechnologyIcon from '@/assets/icons/technology.webp'
import LogisticsIcon from '@/assets/icons/logistics.webp'
import ProductionIcon from '@/assets/icons/production.webp'
import AgricultureIcon from '@/assets/icons/agriculture.webp'

const SECTOR_ICONS = [
  MedicineIcon,
  IndustryIcon,
  TechnologyIcon,
  LogisticsIcon,
  ProductionIcon,
  AgricultureIcon,
]

export default function EquipmentFinancing() {
  const { t } = useLanguage()
  const [activeIcon, setActiveIcon] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon(prev => (prev + 1) % SECTOR_ICONS.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  const stats = [0, 1, 2, 3].map(i => ({
    value: t(`equipmentFinancing.why.stats.${i}.value`),
    label: t(`equipmentFinancing.why.stats.${i}.label`),
  }))

  const sectorItems = [0, 1, 2, 3, 4, 5].map(i => ({
    title: t(`equipmentFinancing.sectors.items.${i}.title`),
    desc:  t(`equipmentFinancing.sectors.items.${i}.desc`),
  }))

  const howSteps = [0, 1, 2].map(i => ({
    n:     t(`equipmentFinancing.how.steps.${i}.n`),
    title: t(`equipmentFinancing.how.steps.${i}.title`),
    desc:  t(`equipmentFinancing.how.steps.${i}.desc`),
  }))

  const benefitItems = [0, 1, 2, 3, 4, 5, 6].map(i =>
    t(`equipmentFinancing.benefits.items.${i}`)
  )

  return (
    <>
      <Helmet>
        <title>{t('equipmentFinancing.meta.title')}</title>
        <meta name="description" content={t('equipmentFinancing.meta.description')} />
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
                  {t('equipmentFinancing.nav.home')}
                </a>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-black text-white leading-none tracking-tighter uppercase italic mb-5">
                  {t('equipmentFinancing.hero.title')}<br />
                  <span className="text-primary">{t('equipmentFinancing.hero.titleAccent')}</span>
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-gray-400 font-medium text-base lg:text-lg max-w-lg leading-relaxed">
                  {t('equipmentFinancing.hero.subtitle')}
                </p>
              </Reveal>
            </div>

            {/* Decorative — cycling sector icons */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[320px] h-[320px]">
                <span className="absolute text-[280px] font-black text-white/[0.03] leading-none select-none">⚙</span>
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    {SECTOR_ICONS.map((icon, i) => (
                      <img
                        key={i}
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        className="absolute w-36 h-auto transition-all duration-700"
                        style={{
                          opacity: i === activeIcon ? 1 : 0,
                          transform: i === activeIcon ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(12px)',
                        }}
                      />
                    ))}
                  </div>
                  <div className="h-7 overflow-hidden relative w-64">
                    {sectorItems.map((item, i) => (
                      <span
                        key={i}
                        className="absolute inset-0 flex items-center justify-center text-sm font-black text-white uppercase tracking-widest transition-all duration-700"
                        style={{
                          opacity: i === activeIcon ? 1 : 0,
                          transform: i === activeIcon ? 'translateY(0)' : 'translateY(8px)',
                        }}
                      >
                        {item.title}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-4 flex gap-2">
                  {SECTOR_ICONS.map((_, i) => (
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

        {/* ── WHY FINANCING ── */}
        <section className="py-24 lg:py-32 px-4 sm:px-8 bg-white">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal variant="left">
              <div>
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('equipmentFinancing.why.badge')}</h2>
                <h3 className="text-4xl lg:text-6xl font-black text-dark leading-none tracking-tighter uppercase italic mb-8">
                  {t('equipmentFinancing.why.title')}<br />
                  <span className="text-primary">{t('equipmentFinancing.why.titleAccent')}</span>
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">{t('equipmentFinancing.why.text1')}</p>
                <p className="text-gray-500 leading-relaxed">{t('equipmentFinancing.why.text2')}</p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ value, label }) => (
                  <div key={label} className="bg-gray-50 border border-gray-100 p-6 flex flex-col justify-between shape-rhombus min-h-[120px] group hover:bg-primary hover:border-primary transition-all duration-300">
                    <p className="text-3xl font-black text-dark tracking-tighter">{value}</p>
                    <p className="text-xs font-bold text-gray-400 group-hover:text-dark/60 uppercase tracking-widest mt-3">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── SECTORS ── */}
        <section className="py-24 lg:py-32 px-4 sm:px-8 bg-[#0A0A0A]">
          <div className="max-w-screen-xl mx-auto">
            <Reveal>
              <div className="mb-16 lg:mb-20 text-center">
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('equipmentFinancing.sectors.badge')}</h2>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
                  {t('equipmentFinancing.sectors.title')} <span className="text-primary">{t('equipmentFinancing.sectors.titleAccent')}</span>
                </h3>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectorItems.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="border border-white/5 p-8 group transition-all duration-500 bg-[#111] hover:shadow-[0_0_40px_rgba(251,191,36,0.05)] h-full flex flex-col gap-4 border-anim">
                    <div className="h-14 flex items-end">
                      <img src={SECTOR_ICONS[i]} alt={item.title} className="w-14 h-auto" />
                    </div>
                    <h4 className="text-lg font-black text-white uppercase italic tracking-tight group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 group-hover:text-gray-400 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-24 lg:py-32 px-4 sm:px-8 bg-white border-t border-gray-100">
          <div className="max-w-screen-xl mx-auto">
            <Reveal>
              <div className="text-center mb-16 lg:mb-20">
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('equipmentFinancing.how.badge')}</h2>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-dark leading-none tracking-tighter uppercase italic">
                  {t('equipmentFinancing.how.title')} <span className="text-primary">{t('equipmentFinancing.how.titleAccent')}</span>
                </h3>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 100}>
                  <div className="border-2 border-gray-100 p-8 lg:p-10 group transition-all duration-300 h-full flex flex-col border-anim">
                    <span className="text-6xl font-black text-primary/30 leading-none mb-6 block">{step.n}</span>
                    <h4 className="text-xl font-black text-dark uppercase italic tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
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
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('equipmentFinancing.benefits.badge')}</h2>
                <h3 className="text-4xl lg:text-5xl font-black text-dark leading-none tracking-tighter uppercase italic">
                  {t('equipmentFinancing.benefits.title')}<br />
                  <span className="text-primary">{t('equipmentFinancing.benefits.titleAccent')}</span>
                </h3>
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
                  {t('equipmentFinancing.cta.badge')}
                </span>
                <h2 className="text-4xl lg:text-6xl font-black text-white leading-none tracking-tighter uppercase italic">
                  {t('equipmentFinancing.cta.title')}<br />
                  <span className="text-primary">{t('equipmentFinancing.cta.titleAccent')}</span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-md text-sm leading-relaxed">{t('equipmentFinancing.cta.subtitle')}</p>
              </div>
            </Reveal>
            <Reveal variant="right" delay={150}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact">
                  <CTAButton variant="yellow" className="group" onClick={undefined}>
                    {t('equipmentFinancing.cta.primary')}
                    <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                  </CTAButton>
                </a>
                <a href="/#calculator">
                  <CTAButton variant="outline-yellow" className="group" onClick={undefined}>
                    {t('equipmentFinancing.cta.secondary')}
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
