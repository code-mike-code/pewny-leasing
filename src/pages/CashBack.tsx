import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Coins, CheckCircle, Building2, User, Zap } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import CashBackIcon from '@/assets/icons/cash-back.webp'
import SpecToolsIcon from '@/assets/icons/spec-tools.webp'
import PersonalMeetIcon from '@/assets/icons/personal-meet.webp'

const HERO_ICONS = [CashBackIcon, SpecToolsIcon, PersonalMeetIcon]
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'

// ─── Content ─────────────────────────────────────────────────────────────────

const content = {
  pl: {
    meta: {
      title: 'Program Cash Back – zwrot gotówki za leasing | Pewny Leasing',
      description: 'Odzyskaj część środków przy każdej transakcji leasingowej. Transparentny program Cash Back dla klientów indywidualnych i firmowych Pewny Leasing.',
    },
    nav: { home: 'Strona główna' },
    hero: {
      badge: 'Program lojalnościowy',
      title: 'Cash',
      titleAccent: 'Back',
      subtitle: 'Realny zwrot gotówki — nie punkty, nie vouchery. Prawdziwe pieniądze na Twoim koncie po każdej zrealizowanej transakcji leasingowej.',
    },
    what: {
      badge: 'Czym jest Cash Back?',
      title: 'Zarabiasz',
      titleAccent: 'na leasingu',
      text1: 'Program Cash Back to nasza forma podziękowania za zaufanie. Przy każdej zrealizowanej umowie leasingowej zwracamy Ci część prowizji — bezpośrednio na wskazany rachunek bankowy, bez ukrytych warunków i skomplikowanych regulaminów.',
      text2: 'Im większa wartość leasingowanego przedmiotu lub im dłuższa współpraca z Pewny Leasing, tym wyższy zwrot. Program jest otwarty zarówno dla klientów indywidualnych, jak i dla firm każdej wielkości.',
    },
    how: {
      badge: 'Jak to działa?',
      title: '3 proste',
      titleAccent: 'kroki',
      steps: [
        {
          n: '01',
          title: 'Zawierasz umowę leasingową',
          desc: 'Finalizujesz leasing za pośrednictwem Pewny Leasing — pojazd, maszyna, sprzęt IT lub inne finansowanie. Bez znaczenia jaka kwota — program działa od pierwszej złotówki.',
        },
        {
          n: '02',
          title: 'Naliczamy Twój zwrot',
          desc: 'Po uruchomieniu finansowania automatycznie obliczamy należny Ci Cash Back na podstawie wartości transakcji i warunków współpracy. Wszystko transparentnie i potwierdzane dokumentem.',
        },
        {
          n: '03',
          title: 'Pieniądze na Twoim koncie',
          desc: 'Środki trafiają na Twoje konto bankowe w ciągu 14 dni roboczych od uruchomienia umowy. Żadnych wniosków, żadnego czekania — dzieje się automatycznie.',
        },
      ],
    },
    who: {
      badge: 'Dla kogo?',
      title: 'Dla każdego',
      titleAccent: 'klienta',
      cards: [
        {
          icon: 'user',
          title: 'Klienci indywidualni',
          desc: 'Leasingujesz samochód na własny użytek? Cash Back działa również dla Ciebie. Każda zrealizowana umowa konsumencka generuje realny zwrot gotówki.',
          points: [
            'Leasing konsumencki pojazdu',
            'Leasing samochodu elektrycznego',
            'Finansowanie sprzętu osobistego',
          ],
        },
        {
          icon: 'building',
          title: 'Firmy i przedsiębiorcy',
          desc: 'Finansujesz flotę, maszyny lub sprzęt firmowy? Im więcej transakcji, tym wyższy wskaźnik zwrotu. Program skaluje się wraz z Twoim biznesem.',
          points: [
            'Leasing operacyjny floty',
            'Finansowanie maszyn i urządzeń',
            'Leasing sprzętu IT i medycznego',
          ],
        },
      ],
    },
    benefits: {
      badge: 'Co zyskujesz?',
      title: 'Tylko realne',
      titleAccent: 'korzyści',
      items: [
        'Realny zwrot gotówki — nie punkty, nie kupony, nie nagrody rzeczowe',
        'Brak minimalnego progu transakcyjnego — program działa od każdej kwoty',
        'Łączy się z rabatami flotowymi i innymi promocjami Pewny Leasing',
        'Transparentne rozliczenie potwierdzone dokumentem po każdej transakcji',
        'Automatyczna wypłata bez składania dodatkowych wniosków',
        'Program dostępny dla klientów indywidualnych i firmowych',
        'Wyższy zwrot dla stałych klientów — lojalnościowy wskaźnik rośnie',
      ],
    },
    cta: {
      title: 'Zacznij zarabiać',
      titleAccent: 'na leasingu',
      subtitle: 'Skontaktuj się z naszym doradcą i zapytaj o szczegóły programu Cash Back dla Twojej transakcji.',
      primary: 'Zapytaj o Cash Back',
      secondary: 'Kalkulator leasingowy',
    },
  },
  en: {
    meta: {
      title: 'Cash Back Programme – Get Money Back on Leasing | Pewny Leasing',
      description: 'Recover part of your payments on every leasing transaction. Transparent Cash Back programme for private and business clients at Pewny Leasing.',
    },
    nav: { home: 'Home' },
    hero: {
      badge: 'Loyalty programme',
      title: 'Cash',
      titleAccent: 'Back',
      subtitle: 'A real cash refund — no points, no vouchers. Real money in your account after every completed leasing transaction.',
    },
    what: {
      badge: 'What is Cash Back?',
      title: 'Earn money',
      titleAccent: 'on leasing',
      text1: 'The Cash Back programme is our way of saying thank you for your trust. With every completed leasing agreement, we return part of the commission directly to your bank account — no hidden conditions, no complicated terms.',
      text2: 'The higher the leased item value or the longer your partnership with Pewny Leasing, the greater the refund. The programme is open to both private individuals and businesses of any size.',
    },
    how: {
      badge: 'How does it work?',
      title: '3 simple',
      titleAccent: 'steps',
      steps: [
        {
          n: '01',
          title: 'Sign a leasing agreement',
          desc: 'Finalise your leasing through Pewny Leasing — vehicle, machinery, IT equipment or other financing. No minimum amount — the programme applies from the first transaction.',
        },
        {
          n: '02',
          title: 'We calculate your refund',
          desc: 'Once financing is activated, we automatically calculate your Cash Back based on the transaction value and your cooperation terms. Transparent and confirmed with documentation.',
        },
        {
          n: '03',
          title: 'Money in your account',
          desc: 'Funds are transferred to your bank account within 14 business days of the agreement being activated. No applications, no waiting — it happens automatically.',
        },
      ],
    },
    who: {
      badge: 'Who is it for?',
      title: 'For every',
      titleAccent: 'client',
      cards: [
        {
          icon: 'user',
          title: 'Private individuals',
          desc: 'Leasing a car for personal use? Cash Back works for you too. Every completed consumer agreement generates a real cash refund.',
          points: [
            'Consumer vehicle leasing',
            'Electric car leasing',
            'Personal equipment financing',
          ],
        },
        {
          icon: 'building',
          title: 'Businesses',
          desc: 'Financing a fleet, machinery or company equipment? The more transactions, the higher the refund rate. The programme scales with your business.',
          points: [
            'Operational fleet leasing',
            'Machinery and equipment financing',
            'IT and medical equipment leasing',
          ],
        },
      ],
    },
    benefits: {
      badge: 'What do you gain?',
      title: 'Only real',
      titleAccent: 'benefits',
      items: [
        'Real cash refund — no points, no coupons, no prizes',
        'No minimum transaction threshold — the programme applies from any amount',
        'Combines with fleet discounts and other Pewny Leasing promotions',
        'Transparent settlement confirmed with documentation after each transaction',
        'Automatic payment — no additional applications required',
        'Available for private individuals and businesses',
        'Higher refund for returning clients — loyalty rate grows over time',
      ],
    },
    cta: {
      title: 'Start earning',
      titleAccent: 'on leasing',
      subtitle: 'Contact our advisor and ask about the Cash Back programme details for your transaction.',
      primary: 'Ask about Cash Back',
      secondary: 'Leasing calculator',
    },
  },
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CashBack() {
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
                  {c.nav.home}
                </a>
              </Reveal>

              <Reveal delay={80}>
                <span className="inline-flex items-center gap-2 bg-primary/15 text-primary font-black text-[10px] uppercase tracking-widest px-4 py-2 mb-6 shape-rhombus">
                  <Coins size={12} />
                  {c.hero.badge}
                </span>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-black text-white leading-none tracking-tighter uppercase italic mb-5">
                  {c.hero.title}<br />
                  <span className="text-primary">{c.hero.titleAccent}</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-gray-400 font-medium text-base lg:text-lg max-w-lg leading-relaxed mb-8">
                  {c.hero.subtitle}
                </p>
              </Reveal>
              <Reveal delay={260}>
                <a href="/#contact">
                  <CTAButton variant="yellow" className="group" onClick={undefined}>
                    {c.cta.primary}
                    <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                  </CTAButton>
                </a>
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

        {/* ── WHAT IS IT ── */}
        <section className="py-24 lg:py-32 px-4 sm:px-8 bg-white">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal variant="left">
              <div>
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{c.what.badge}</h2>
                <h3 className="text-4xl lg:text-6xl font-black text-dark leading-none tracking-tighter uppercase italic mb-8">
                  {c.what.title}<br />
                  <span className="text-primary">{c.what.titleAccent}</span>
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">{c.what.text1}</p>
                <p className="text-gray-500 leading-relaxed">{c.what.text2}</p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '100%', label: language === 'pl' ? 'Gotówka, nie punkty' : 'Cash, not points' },
                  { value: '14 dni', label: language === 'pl' ? 'Do wypłaty' : 'To payout' },
                  { value: '0 zł', label: language === 'pl' ? 'Próg minimalny' : 'Min. threshold' },
                  { value: '∞', label: language === 'pl' ? 'Liczba transakcji' : 'Transactions' },
                ].map(({ value, label }) => (
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
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{c.how.badge}</h2>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
                  {c.how.title} <span className="text-primary">{c.how.titleAccent}</span>
                </h3>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {c.how.steps.map((step, i) => (
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
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{c.who.badge}</h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark leading-none tracking-tighter uppercase italic">
                  {c.who.title} <span className="text-primary">{c.who.titleAccent}</span>
                </h3>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {c.who.cards.map((card, i) => (
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
