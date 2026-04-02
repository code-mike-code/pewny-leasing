import { useMemo } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { Reveal } from '@/components/ui/Reveal'
import corollaLeft from '@/assets/img/corolla-left.webp'

export function ServicesSection() {
  const { t } = useLanguage()

  const items = useMemo(() => [
    {
      number: t('services.item1.number'),
      title: t('services.item1.title'),
      description: t('services.item1.description'),
    },
    {
      number: t('services.item2.number'),
      title: t('services.item2.title'),
      description: t('services.item2.description'),
    },
    {
      number: t('services.item3.number'),
      title: t('services.item3.title'),
      description: t('services.item3.description'),
    },
    {
      number: t('services.item4.number'),
      title: t('services.item4.title'),
      description: t('services.item4.description'),
    },
    {
      number: t('services.item5.number'),
      title: t('services.item5.title'),
      description: t('services.item5.description'),
    },
  ], [t])

  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 bg-ghost-white">
     

      {/* Offer cards section — white bg, full section width */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-black text-dark leading-none tracking-tight mb-12">
              {t('services.offerHeading')}
            </h2>
          </Reveal>

          {/* Cards: mobile=column, tablet/desktop=2 rows */}
          <div className="flex flex-col gap-4">

            {/* Row 1: Taxi + Courier */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Taxi card */}
              <Reveal>
                <div className="bg-white p-8 lg:p-10 border border-gray-200 transition-[box-shadow,transform] duration-200 hover:shadow-[-4px_4px_0px_0px_#000] hover:-translate-y-2 h-full flex flex-col">
                  <h3 className="text-2xl font-black text-dark mb-4">
                    {t('services.cards.taxi.title')}
                  </h3>
                  <p className="text-grey-mid leading-relaxed flex-1">
                    {t('services.cards.taxi.description')}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-grey-mid">{t('services.cards.taxi.salaryLabel')}</p>
                    <p className="text-3xl font-black text-dark mt-1">
                      {t('services.cards.taxi.salaryValue')}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Courier card */}
              <Reveal delay={100}>
                <div className="bg-white p-8 lg:p-10 border border-gray-200 transition-[box-shadow,transform] duration-200 hover:shadow-[-4px_4px_0px_0px_#000] hover:-translate-y-2 h-full flex flex-col">
                  <h3 className="text-2xl font-black text-dark mb-4">
                    {t('services.cards.courier.title')}
                  </h3>
                  <p className="text-grey-mid leading-relaxed flex-1">
                    {t('services.cards.courier.description')}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-grey-mid">{t('services.cards.courier.salaryLabel')}</p>
                    <p className="text-3xl font-black text-dark mt-1">
                      {t('services.cards.courier.salaryValue')}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Row 2: Rental card — full width */}
            <Reveal delay={200}>
              <div className="bg-[#f2f2f2] border border-gray-200 transition-[box-shadow,transform] duration-200 hover:shadow-[-4px_4px_0px_0px_#000] hover:-translate-y-2 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-black text-dark mb-4">
                      {t('services.cards.rental.title')}
                    </h3>
                    <p className="text-grey-mid leading-relaxed">
                      {t('services.cards.rental.description')}
                    </p>
                  </div>
                  {/* Image on gradient background */}
                  <div
                    className="relative h-56 md:h-72 lg:h-80 overflow-hidden"
                    style={{ background: 'linear-gradient(to right, #f2f2f2, #ffffff)' }}
                  >
                    <img
                      src={corollaLeft}
                      alt="Toyota Corolla"
                      className="absolute inset-0 w-full h-full object-contain object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Disclaimer */}
          <Reveal delay={100}>
            <p className="mt-6 text-xs text-gray-400 leading-relaxed max-w-4xl">
              {t('services.disclaimer')}
            </p>
          </Reveal>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="my-16">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-black text-dark leading-none tracking-tight mb-4">
              {t('services.heading')}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-base text-grey-mid">
              {t('services.subheading')}
            </p>
          </Reveal>
        </div>

      </div>
        {/* Numbered items — wave stagger */}
        <div className="border-t border-gray-200 mt-24">
          {items.map((item, index) => (
            <Reveal key={item.number} delay={index * 90}>
              <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 md:gap-12 py-10 border-b border-gray-200">
                <div>
                  <span className="text-4xl font-black text-illuminating leading-none">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-grey-mid leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Promo blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-20">
          <Reveal>
            <h3 className="text-2xl sm:text-3xl font-black text-dark leading-tight mb-4">
              {t('services.promo1.heading')}
            </h3>
            <p className="text-grey-mid leading-relaxed">
              {t('services.promo1.text')}
            </p>
          </Reveal>
          <Reveal delay={160} className="lg:text-right">
            <h3 className="text-2xl sm:text-3xl font-black text-dark leading-tight mb-4">
              {t('services.promo2.heading')}
            </h3>
            <p className="text-grey-mid leading-relaxed">
              {t('services.promo2.text')}
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
