import { Zap, ArrowRight } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'
import { useLanguage } from '@/hooks/useLanguage'
import supercarImg from '@/assets/img/supercar_offer_premium_1775045858058.png'
import equipmentImg from '@/assets/img/specialized_equipment_financing_1775045894211.png'
import Icon4 from '@/assets/icons/bmw-yellow.svg';
import Icon5 from '@/assets/icons/rent.svg';
import Icon6 from '@/assets/icons/spec-tools.svg';
import Icon7 from '@/assets/icons/sale.svg';

const CATEGORY_ICONS = [
  <img src={Icon4} alt='bmw-m3-yellow' className='w-[100px] h-auto bg-white' />,
  <img src={Icon5} alt='rent' className='w-[100px] h-auto' />,
  <img src={Icon6} alt='spec-tools' className='w-[100px] h-auto' />,
  <img src={Icon7} alt='sale' className='w-[100px] h-auto' />,
]

export function OfferSection() {
  const { t } = useLanguage()

  const categories = [0, 1, 2, 3].map(i => ({
    icon: CATEGORY_ICONS[i],
    title: t(`offer.categories.${i}.title`),
    description: t(`offer.categories.${i}.description`),
    tags: [0, 1, 2].map(j => t(`offer.categories.${i}.tags.${j}`)).filter(tag => !tag.startsWith('offer.')),
  }))

  const equipmentSectors = [0, 1, 2, 3].map(i => t(`offer.equipment.sectors.${i}`))

  return (
    <section id="services" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-3xl">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('offer.badge')}</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[1.1] tracking-tighter uppercase italic">
              {t('offer.title')} <br className="hidden md:block" />
              <span className="text-primary">{t('offer.titleAccent')}</span>
            </h3>
          </div>
          <p className="text-gray-500 font-medium max-w-sm lg:mb-2">
            {t('offer.subtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {categories.map((cat, idx) => (
            <div key={idx} className="group p-8 border border-gray-100 rounded-2xl hover:border-primary transition-all duration-300 hover:shadow-xl bg-white flex flex-col h-full">
              <div className="mb-6 bg-gray-50 rounded-xl group-hover:bg-yellow-50 transition-colors self-start">
                {cat.icon}
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">{cat.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Blocks */}
        <div className="space-y-8">

          {/* Supercars Block */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-navy min-h-[500px] flex items-center">
            <div className="absolute inset-0 z-0">
              <img
                src={supercarImg}
                alt={t('offer.supercar.imgAlt')}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
            </div>

            <div className="relative z-10 p-8 md:p-16 lg:p-20 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest mb-6">
                <Zap size={16} />
                Luxury &amp; Sports Collection
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight uppercase italic">
                {t('offer.supercar.title')} <br />
                <span className="text-primary italic">{t('offer.supercar.titleAccent')}</span>
              </h3>
              <p className="text-gray-300 font-medium text-sm md:text-base mb-10 leading-relaxed">
                {t('offer.supercar.description')}
              </p>
              <CTAButton variant="yellow" className="w-full sm:w-auto group">
                {t('offer.supercar.cta')}
                <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
              </CTAButton>
            </div>
          </div>

          {/* Equipment Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center border border-gray-100">
              <h3 className="text-3xl md:text-4xl font-black text-navy mb-6 leading-tight uppercase italic">
                {t('offer.equipment.title')} <br />
                <span className="text-primary">{t('offer.equipment.titleAccent')}</span>
              </h3>
              <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                {t('offer.equipment.description')}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {equipmentSectors.map((sector, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-xs font-bold text-navy uppercase">{sector}</span>
                  </div>
                ))}
              </div>
              <CTAButton variant="outline-yellow" size="sm" className="self-start group !text-primary hover:!text-dark">
                {t('offer.equipment.cta')}
                <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
              </CTAButton>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden min-h-[400px]">
              <img
                src={equipmentImg}
                alt={t('offer.equipment.imgAlt')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
