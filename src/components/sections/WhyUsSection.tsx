import { useLanguage } from '@/hooks/useLanguage'

export function WhyUsSection() {
  const { t } = useLanguage()

  const features = [0, 1, 2].map(i => ({
    id: i + 1,
    title: t(`whyUs.features.${i}.title`),
    description: t(`whyUs.features.${i}.description`),
  }))

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-black text-white w-full border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5 -skew-x-12 -translate-x-1/2 pointer-events-none" />
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 relative z-10">

        <div className="flex flex-col items-center text-center mb-20 px-4">
          <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('whyUs.heading')}</h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1] tracking-tighter uppercase italic">
            {t('whyUs.title')} <br className="md:hidden" />
            <span className="text-primary italic">{t('whyUs.titleAccent')}</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature) => (
            <div key={feature.id} className="group flex flex-col items-center text-center p-8 rounded-[2rem] border border-white/5 hover:border-primary/50 transition-all duration-500 bg-[#0A0A0A] hover:shadow-[0_0_40px_rgba(251,191,36,0.05)]">
              <h3 className="text-xl font-black tracking-tight mb-4 whitespace-nowrap uppercase italic">
                {feature.title}
              </h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-[280px] group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
