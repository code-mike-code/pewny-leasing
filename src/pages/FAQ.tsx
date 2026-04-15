import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'
import { pl } from '@/translations/pl'
import { en } from '@/translations/en'

export default function FAQ() {
  const { language } = useLanguage()
  const isPL = language === 'pl'
  const items = isPL ? pl.faq.items : en.faq.items
  const [open, setOpen] = useState<number | null>(0)

  const toggle = (i: number) => setOpen(prev => prev === i ? null : i)

  return (
    <>
      <Helmet>
        <title>{isPL ? 'FAQ – Najczęstsze pytania o leasing | Pewny Leasing' : 'FAQ – Leasing Questions | Pewny Leasing'}</title>
        <meta
          name="description"
          content={isPL
            ? 'Odpowiedzi na najczęstsze pytania o leasing operacyjny, wymagane dokumenty, wpłatę własną i warunki finansowania w Pewny Leasing.'
            : 'Answers to the most common questions about operational leasing, required documents, down payment and financing terms at Pewny Leasing.'}
        />
      </Helmet>

      <Header />

      <main id="main-content">

        {/* ── HERO ── */}
        {/* pt-[116px] = fixed header clearance (40px topbar + 76px mainbar) */}
        <section className="bg-[#050505] pt-[116px] pb-8 lg:pb-12 px-4 sm:px-8 overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5" />
            <div className="absolute right-1/4 top-0 bottom-0 w-px bg-white/5" />
          </div>

          <div className="max-w-screen-xl mx-auto relative z-10 pt-8 lg:pt-12">

            {/* back button — top-left above heading */}
            <Reveal>
              <a
                href="/"
                className="hover-wipe hover-wipe-yellow shape-rhombus inline-flex items-center gap-2 text-white/60 font-bold text-xs uppercase tracking-widest px-5 py-2.5 mb-8 group bg-white/5"
              >
                <ArrowRight size={14} strokeWidth={3} className="rotate-180 transition-transform duration-300 group-hover:rotate-[135deg]" />
                {isPL ? 'Strona główna' : 'Home'}
              </a>
            </Reveal>

            <Reveal delay={80}>
              <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Pewny Leasing</p>
            </Reveal>
            <Reveal delay={140}>
              <h1 className="text-[clamp(2.8rem,8vw,5.5rem)] font-black text-white leading-none tracking-tighter uppercase italic mb-5">
                {isPL ? 'Najczęstsze' : 'Frequently'}<br />
                <span className="text-primary">{isPL ? 'Pytania' : 'Asked Questions'}</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-400 font-medium text-base lg:text-lg max-w-xl leading-relaxed">
                {isPL
                  ? 'Wszystko, co chcesz wiedzieć o leasingu — od dokumentów po warunki finansowania. Bez skomplikowanego języka.'
                  : 'Everything you want to know about leasing — from documents to financing terms. No complicated jargon.'}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <div className="bg-primary">
          <div className="max-w-screen-xl mx-auto grid grid-cols-3 divide-x divide-dark/10">
            {[
              { value: '20+', label: isPL ? 'Partnerów finansowych' : 'Financial partners' },
              { value: '24h', label: isPL ? 'Czas decyzji' : 'Decision time' },
              { value: '500+', label: isPL ? 'Zadowolonych klientów' : 'Happy clients' },
            ].map(({ value, label }) => (
              <div key={label} className="py-5 px-8 text-center">
                <p className="text-2xl font-black text-dark tracking-tighter">{value}</p>
                <p className="text-[10px] font-bold text-dark/60 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── ACCORDION ── */}
        <section className="py-24 lg:py-32 px-4 sm:px-8 bg-white">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

            {/* sticky label */}
            <Reveal variant="left">
              <div className="lg:sticky lg:top-[100px]">
                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">
                  {isPL ? 'Baza wiedzy' : 'Knowledge base'}
                </h2>
                <h3 className="text-4xl lg:text-5xl font-black text-dark leading-none tracking-tighter uppercase italic mb-6">
                  {isPL ? 'Masz pytanie?' : 'Got a question?'}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-10">
                  {isPL
                    ? 'Nie znalazłeś odpowiedzi? Nasz doradca odpowie Ci w ciągu 24 godzin.'
                    : "Can't find your answer? Our advisor will reply within 24 hours."}
                </p>
                <a href="/#contact">
                  <CTAButton variant="yellow" size="sm" className="group" onClick={undefined}>
                    {isPL ? 'Zadaj pytanie' : 'Ask a question'}
                    <ArrowRight size={18} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                  </CTAButton>
                </a>
              </div>
            </Reveal>

            {/* accordion list */}
            <div className="space-y-3">
              {items.map((item, i) => {
                const isOpen = open === i
                return (
                  <Reveal key={i} delay={i * 60}>
                    <div className={`border-b-2 transition-colors duration-300 ${isOpen ? 'border-primary' : 'border-gray-200'}`}>
                      <button
                        onClick={() => toggle(i)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between py-6 text-left group"
                      >
                        <div className="flex items-start gap-5 pr-6">
                          <span className="text-xs font-black text-primary/40 tracking-widest mt-1 flex-shrink-0">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-base md:text-lg font-bold text-dark leading-snug group-hover:text-primary transition-colors duration-200">
                            {item.question}
                          </span>
                        </div>
                        {/* rhombus arrow — rotates -45deg when open */}
                        <span className={`
                          flex-shrink-0 w-10 h-10 flex items-center justify-center shape-rhombus transition-colors duration-300
                          ${isOpen ? 'bg-primary text-dark' : 'bg-gray-100 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary'}
                        `}>
                          <ArrowRight
                            size={18}
                            strokeWidth={3}
                            className={`transition-transform duration-300 ${isOpen ? '-rotate-45' : ''}`}
                          />
                        </span>
                      </button>

                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="pb-8 pl-10 text-gray-500 text-sm md:text-base leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>

          </div>
        </section>

        {/* ── CTA BOTTOM ── */}
        <section className="bg-[#0A0A0A] py-24 px-4 sm:px-8 border-t border-white/5">
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            <Reveal variant="left">
              <div>
                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-3">Pewny Leasing</p>
                <h2 className="text-4xl lg:text-6xl font-black text-white leading-none tracking-tighter uppercase italic">
                  {isPL ? 'Gotowy na' : 'Ready to'}<br />
                  <span className="text-primary">{isPL ? 'Finansowanie?' : 'Start?'}</span>
                </h2>
              </div>
            </Reveal>
            <Reveal variant="right" delay={150}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#calculator">
                  <CTAButton variant="yellow" className="group" onClick={undefined}>
                    {isPL ? 'Kalkulator leasingowy' : 'Leasing calculator'}
                    <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                  </CTAButton>
                </a>
                <a href="/#contact">
                  <CTAButton variant="outline-yellow" className="group" onClick={undefined}>
                    {isPL ? 'Skontaktuj się' : 'Contact us'}
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
