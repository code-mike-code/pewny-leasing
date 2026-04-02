import { useLanguage } from '@/hooks/useLanguage'
import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'

export function FinalCTA() {
  const { t } = useLanguage()
  return (
    <section className="bg-illuminating py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-black text-dark leading-tight">
              {t('hero.title')}
            </h2>
          </Reveal>
          <Reveal delay={180} className="shrink-0">
            <CTAButton href="#contact-form" variant="grey">
              {t('nav.cta')}
            </CTAButton>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
