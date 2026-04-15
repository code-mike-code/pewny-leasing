import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Zap, Stethoscope, Wrench, Monitor, Truck, Factory, Tractor } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'

// ─── Content ─────────────────────────────────────────────────────────────────

const content = {
  pl: {
    meta: {
      title: 'Finansowanie Sprzętu Specjalistycznego dla Firm | Pewny Leasing',
      description: 'Leasing i finansowanie sprzętu specjalistycznego dla medycyny, budownictwa, IT, transportu, produkcji i rolnictwa. Wspieramy rozwój biznesu w każdej branży.',
    },
    nav: { home: 'Strona główna' },
    hero: {
      badge: 'Sprzęt Specjalistyczny',
      title: 'Finansowanie',
      titleAccent: 'Sprzętu',
      subtitle: 'Profesjonalne finansowanie sprzętu specjalistycznego dla każdej branży. Rozwijaj swój biznes bez angażowania kapitału obrotowego — my zajmujemy się finansowaniem.',
    },
    why: {
      badge: 'Dlaczego finansowanie?',
      title: 'Rozwijaj biznes',
      titleAccent: 'bez zamrażania kapitału',
      stats: [
        { value: '100%', label: 'Finansowanie' },
        { value: '24h', label: 'Decyzja' },
        { value: '0 zł', label: 'Wkład własny od' },
        { value: '20+', label: 'Partnerów leasingowych' },
      ],
      text1: 'Finansowanie sprzętu przez leasing lub pożyczkę leasingową pozwala zachować pełną płynność finansową. Zamiast jednorazowego wydatku — przewidywalna rata miesięczna, która jest kosztem uzyskania przychodu.',
      text2: 'Obsługujemy sprzęt o wartości od 5 000 zł netto. Bez względu na branżę — znajdziemy dla Ciebie optymalne rozwiązanie finansowe.',
    },
    sectors: {
      badge: 'Branże',
      title: 'Finansujemy sprzęt',
      titleAccent: 'w każdej branży',
      items: [
        {
          icon: 'stethoscope',
          title: 'Medycyna i zdrowie',
          desc: 'Aparaty USG, tomografy, fotele stomatologiczne, sprzęt chirurgiczny i diagnostyczny. Znamy wymagania regulacyjne branży medycznej i dopasowujemy finansowanie do specyfiki działalności.',
        },
        {
          icon: 'wrench',
          title: 'Budownictwo i przemysł',
          desc: 'Dźwigi, koparki, rusztowania, kompresory i maszyny budowlane. Finansujemy zarówno nowe urządzenia, jak i sprzęt używany od sprawdzonych dostawców.',
        },
        {
          icon: 'monitor',
          title: 'IT i technologia',
          desc: 'Serwery, stacje robocze, systemy sieciowe, sprzęt produkcyjny. Szybkie decyzje kredytowe dla dynamicznie rozwijających się firm technologicznych i software house\'ów.',
        },
        {
          icon: 'truck',
          title: 'Transport i logistyka',
          desc: 'Wózki widłowe, pojazdy dostawcze, systemy magazynowe i flota logistyczna. Kompleksowe finansowanie dla firm transportowych — od jednego wózka po całą flotę magazynową.',
        },
        {
          icon: 'factory',
          title: 'Produkcja',
          desc: 'Linie produkcyjne, maszyny CNC, urządzenia spawalnicze, systemy automatyzacji. Inwestuj w nowoczesność i przewagę konkurencyjną bez uszczuplania rezerw gotówkowych.',
        },
        {
          icon: 'tractor',
          title: 'Rolnictwo',
          desc: 'Traktory, kombajny, opryskiwacze, systemy nawadniania i sprzęt rolniczy. Finansowanie sezonowe dopasowane do specyfiki i cykli działalności rolniczej.',
        },
      ],
    },
    how: {
      badge: 'Jak to działa?',
      title: '3 proste',
      titleAccent: 'kroki',
      steps: [
        {
          n: '01',
          title: 'Wybierz sprzęt',
          desc: 'Wskaż sprzęt, który chcesz sfinansować. Może to być nowe urządzenie od dealera, maszyna używana lub dowolny przedmiot o wartości powyżej 5 000 zł netto. Nie musisz znać wszystkich szczegółów — pomożemy.',
        },
        {
          n: '02',
          title: 'Konfigurujemy finansowanie',
          desc: 'Analizujemy warunki i porównujemy oferty ponad 20 funduszy leasingowych. Dobieramy optymalne rozwiązanie: leasing operacyjny, finansowy, pożyczka leasingowa lub najem długoterminowy.',
        },
        {
          n: '03',
          title: 'Uruchamiamy umowę',
          desc: 'Po podpisaniu umowy sprzęt trafia do Ciebie. Obsługujemy cały proces formalny — od złożenia wniosku do odbioru przedmiotu. Jeden doradca, jedno biuro.',
        },
      ],
    },
    benefits: {
      badge: 'Korzyści',
      title: 'Tylko realne',
      titleAccent: 'korzyści',
      items: [
        'Zachowanie płynności finansowej — nie zamrażasz kapitału obrotowego',
        'Korzyści podatkowe — rata leasingowa jest kosztem uzyskania przychodu',
        'Możliwość wymiany sprzętu na nowszy po zakończeniu umowy leasingowej',
        'Szybka decyzja — nawet w ciągu 24 godzin od złożenia kompletnego wniosku',
        'Finansowanie 100% wartości — bez wkładu własnego lub z minimalną wpłatą',
        'Dostęp do najnowszego sprzętu bez jednorazowych wydatków',
        'Jeden doradca, jedno biuro, kompleksowa obsługa od A do Z',
      ],
    },
    cta: {
      title: 'Sfinansuj swój sprzęt',
      titleAccent: 'już dziś',
      subtitle: 'Skontaktuj się z naszym doradcą i zapytaj o możliwości finansowania sprzętu dla Twojej branży.',
      primary: 'Zapytaj o finansowanie',
      secondary: 'Kalkulator leasingowy',
    },
  },
  en: {
    meta: {
      title: 'Specialist Equipment Financing for Businesses | Pewny Leasing',
      description: 'Leasing and financing for specialist equipment in healthcare, construction, IT, transport, manufacturing and agriculture. We support business growth across all industries.',
    },
    nav: { home: 'Home' },
    hero: {
      badge: 'Specialist Equipment',
      title: 'Equipment',
      titleAccent: 'Financing',
      subtitle: 'Professional financing for specialist equipment across all industries. Grow your business without tying up working capital — we handle the financing.',
    },
    why: {
      badge: 'Why financing?',
      title: 'Grow your business',
      titleAccent: 'without tying up capital',
      stats: [
        { value: '100%', label: 'Financing' },
        { value: '24h', label: 'Decision' },
        { value: 'PLN 0', label: 'Min. deposit from' },
        { value: '20+', label: 'Leasing partners' },
      ],
      text1: 'Financing equipment through leasing or a lease loan lets you preserve full financial liquidity. Instead of a one-off expense — a predictable monthly instalment that is a tax-deductible business cost.',
      text2: 'We handle equipment worth from PLN 5,000 net. Regardless of industry — we will find the optimal financing solution for you.',
    },
    sectors: {
      badge: 'Industries',
      title: 'We finance equipment',
      titleAccent: 'in every industry',
      items: [
        {
          icon: 'stethoscope',
          title: 'Healthcare & Medicine',
          desc: 'Ultrasound equipment, CT scanners, dental chairs, surgical and diagnostic devices. We understand the regulatory requirements of the medical industry and tailor financing to the specifics of your practice.',
        },
        {
          icon: 'wrench',
          title: 'Construction & Industry',
          desc: 'Cranes, excavators, scaffolding, compressors and heavy machinery. We finance both new equipment and used machinery from verified suppliers.',
        },
        {
          icon: 'monitor',
          title: 'IT & Technology',
          desc: 'Servers, workstations, network systems, production equipment. Fast credit decisions for fast-growing technology companies and software houses.',
        },
        {
          icon: 'truck',
          title: 'Transport & Logistics',
          desc: 'Forklifts, delivery vehicles, warehouse systems and logistics fleets. Comprehensive financing for transport companies — from a single forklift to an entire warehouse fleet.',
        },
        {
          icon: 'factory',
          title: 'Manufacturing',
          desc: 'Production lines, CNC machines, welding equipment and automation systems. Invest in modernity and competitive advantage without depleting your cash reserves.',
        },
        {
          icon: 'tractor',
          title: 'Agriculture',
          desc: 'Tractors, combine harvesters, sprayers, irrigation systems and agricultural equipment. Seasonal financing tailored to the specifics and cycles of agricultural activity.',
        },
      ],
    },
    how: {
      badge: 'How does it work?',
      title: '3 simple',
      titleAccent: 'steps',
      steps: [
        {
          n: '01',
          title: 'Choose your equipment',
          desc: 'Specify the equipment you want to finance. It can be a new device from a dealer, a used machine, or any item worth over PLN 5,000 net. You do not need to know all the details — we will help.',
        },
        {
          n: '02',
          title: 'We configure the financing',
          desc: 'We analyse the conditions and compare offers from 20+ leasing funds. We select the optimal solution: operational or financial leasing, lease loan, or long-term rental.',
        },
        {
          n: '03',
          title: 'We activate the agreement',
          desc: 'Once the contract is signed, the equipment is delivered to you. We handle the entire formal process — from application to item collection. One advisor, one office.',
        },
      ],
    },
    benefits: {
      badge: 'Benefits',
      title: 'Only real',
      titleAccent: 'benefits',
      items: [
        'Preserve cash flow — no tying up working capital',
        'Tax advantages — the leasing instalment is a tax-deductible business expense',
        'Option to upgrade to newer equipment at the end of the leasing agreement',
        'Fast decision — within 24 hours of submitting a complete application',
        '100% financing — no deposit required or minimum down payment',
        'Access to the latest equipment without one-off capital expenditure',
        'One advisor, one office, comprehensive service from A to Z',
      ],
    },
    cta: {
      title: 'Finance your equipment',
      titleAccent: 'today',
      subtitle: 'Contact our advisor and ask about equipment financing options for your industry.',
      primary: 'Ask about financing',
      secondary: 'Leasing calculator',
    },
  },
}

// ─── Sector icon helper ───────────────────────────────────────────────────────

function SectorIcon({ name }: { name: string }) {
  const cls = "text-primary group-hover:text-dark transition-colors duration-300"
  switch (name) {
    case 'stethoscope': return <Stethoscope size={24} className={cls} strokeWidth={2} />
    case 'wrench':      return <Wrench size={24} className={cls} strokeWidth={2} />
    case 'monitor':     return <Monitor size={24} className={cls} strokeWidth={2} />
    case 'truck':       return <Truck size={24} className={cls} strokeWidth={2} />
    case 'factory':     return <Factory size={24} className={cls} strokeWidth={2} />
    case 'tractor':     return <Tractor size={24} className={cls} strokeWidth={2} />
    default:            return <Zap size={24} className={cls} strokeWidth={2} />
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function EquipmentFinancing() {
  const { language } = useLanguage()
  const c = content[language]

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

            {/* Decorative */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <span className="text-[200px] font-black text-white/5 leading-none tracking-tighter select-none">⚙</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/20 p-8 shape-rhombus">
                    <Wrench size={64} className="text-primary" strokeWidth={1.5} />
                  </div>
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
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{c.why.badge}</h2>
                <h3 className="text-4xl lg:text-6xl font-black text-dark leading-none tracking-tighter uppercase italic mb-8">
                  {c.why.title}<br />
                  <span className="text-primary">{c.why.titleAccent}</span>
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">{c.why.text1}</p>
                <p className="text-gray-500 leading-relaxed">{c.why.text2}</p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {c.why.stats.map(({ value, label }) => (
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
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{c.sectors.badge}</h2>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
                  {c.sectors.title} <span className="text-primary">{c.sectors.titleAccent}</span>
                </h3>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {c.sectors.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="border border-white/5 p-8 group transition-all duration-500 bg-[#111] hover:shadow-[0_0_40px_rgba(251,191,36,0.05)] h-full flex flex-col gap-4 border-anim">
                    <div className="bg-primary/10 w-12 h-12 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <SectorIcon name={item.icon} />
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
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{c.how.badge}</h2>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-dark leading-none tracking-tighter uppercase italic">
                  {c.how.title} <span className="text-primary">{c.how.titleAccent}</span>
                </h3>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {c.how.steps.map((step, i) => (
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
                  Finansowanie Sprzętu
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
