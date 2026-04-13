import { Coins, ArrowRight, HelpCircle, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTAButton } from '@/components/ui/CTAButton'
import { useLanguage } from '@/hooks/useLanguage'
import { pl } from '@/translations/pl'
import { en } from '@/translations/en'

export function KnowledgeSection() {
  const { t, language } = useLanguage()

  const previewItems = (language === 'pl' ? pl.faq.items : en.faq.items).slice(0, 3)

  return (
    <section id="knowledge" className="py-32 bg-white w-full">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Left panel — FAQ */}
          <div className="relative w-full lg:w-[65%] rounded-[2.5rem] bg-gray-50 p-10 lg:p-14 text-navy overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between items-start">

            <div className="relative z-10 w-full flex flex-col">
              <span className="inline-flex items-center gap-2 bg-[#FEFCE8] text-primary font-black text-[10px] uppercase tracking-widest px-3 py-1 mb-8 self-start border border-yellow-100">
                <HelpCircle size={12} />
                {t('knowledge.faq.badge')}
              </span>

              <h3 className="text-3xl lg:text-5xl font-black text-navy leading-[1] tracking-tighter mb-6 uppercase italic">
                {t('knowledge.faq.title')} <span className="text-primary italic">{t('knowledge.faq.titleAccent')}</span>
              </h3>

              <p className="text-gray-500 font-medium text-sm lg:text-base leading-relaxed mb-8 max-w-xl">
                {t('knowledge.faq.description')}
              </p>

              {/* FAQ preview */}
              <ul className="w-full space-y-3 mb-10">
                {previewItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100">
                    <ChevronRight size={16} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-sm font-medium text-navy leading-snug">{item.question}</span>
                  </li>
                ))}
              </ul>

              <Link to="/faq">
                <CTAButton variant="yellow" className="group self-start">
                  {t('knowledge.faq.cta')}
                  <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                </CTAButton>
              </Link>
            </div>

          </div>

          {/* Right panel — Cash Back */}
          <div className="w-full lg:w-[35%] rounded-[2.5rem] bg-white p-10 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-[3px] bg-gradient-to-r from-transparent to-primary/80" />
            <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-primary/80 to-transparent" />

            <div className="mb-8">
              <div className="bg-[#FEFCE8] p-3 rounded-lg inline-flex items-center justify-center text-primary mb-6">
                <Coins size={24} strokeWidth={2} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-navy tracking-tight mb-4 uppercase italic">
                {t('knowledge.cashback.title')} <span className="text-primary italic">{t('knowledge.cashback.titleAccent')}</span>
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {t('knowledge.cashback.description')}
              </p>
            </div>

            <div className="mt-auto pt-8 flex">
              <Link to="/cashback">
                <CTAButton variant="outline-yellow" size="sm" className="group !text-primary hover:!text-dark">
                  {t('knowledge.cashback.cta')}
                  <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                </CTAButton>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
