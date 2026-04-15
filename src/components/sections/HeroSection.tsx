import { ArrowRight } from 'lucide-react'
import { Calculator } from '@/components/calculator/Calculator'
import { useLanguage } from '@/hooks/useLanguage'
import heroBg from '@/assets/img/hero-taxi.webp'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <>
      <section
        id="hero"
        className="relative flex items-center bg-[#050505] overflow-hidden pt-[116px] pb-16 min-h-screen"
      >
        {/* Background Image / Placeholder */}
        <div
           className="absolute inset-0 opacity-40 mix-blend-overlay"
           style={{
             backgroundImage: `url(${heroBg})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
           }}
           aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 lg:px-8 w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center lg:items-center">

            {/* Left Side: Headings & Buttons */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-1 lg:order-1">
              <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Pewny Leasing</p>
              <h1 className="text-[clamp(2.5rem,10vw,3.5rem)] md:text-[clamp(4rem,10vw,5.5rem)] lg:text-[clamp(3.5rem,6vw,5.5rem)] font-black text-white leading-[0.9] tracking-tighter uppercase italic mb-8 transition-all duration-300">
                <span className="block">{t('hero.title').split(' ')[0]}</span>
                <span className="block text-primary italic">{t('hero.title').split(' ').slice(1).join(' ')}</span>
              </h1>

              <p className="text-gray-300 font-medium text-sm md:text-lg max-w-xl mb-10 leading-relaxed">
                {t('hero.subtitle')}
              </p>

              {/* CTA widoczne tylko na desktop */}
              <div className="hidden lg:flex flex-row gap-4">
                <HeroCTAButton href="#kontakt" label={t('hero.ctaPrimary').toUpperCase()} />
                <HeroCTAButton href="/discounts" label={t('hero.ctaSecondary').toUpperCase()} />
              </div>
            </div>

            {/* Right Side: Calculator Widget + CTA na mobile/tablet */}
            <div className="w-full flex flex-col gap-6 items-center lg:items-end mt-4 lg:mt-0 order-2 lg:order-2">
              <div className="w-full max-w-lg md:max-w-2xl lg:max-w-full mx-auto lg:mx-0">
                <Calculator />
              </div>

              {/* CTA widoczne tylko na mobile i tablet (pod kalkulatorem) */}
              <div className="flex lg:hidden flex-col sm:flex-row gap-4 w-full max-w-lg md:max-w-2xl justify-center">
                <HeroCTAButton href="#kontakt" label={t('hero.ctaPrimary').toUpperCase()} />
                <HeroCTAButton href="/discounts" label={t('hero.ctaSecondary').toUpperCase()} />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

function HeroCTAButton({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="hover-wipe hover-wipe-dark shape-rhombus bg-primary text-dark font-bold border-b-2 border-primary px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 group">
      {label}
      <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
    </a>
  )
}
