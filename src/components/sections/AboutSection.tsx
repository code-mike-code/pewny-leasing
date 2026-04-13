import { useLanguage } from '@/hooks/useLanguage'
import { ImageCarousel } from '@/components/ui/ImageCarousel'
import { WaveText } from '@/components/ui/WaveText'
import { Reveal } from '@/components/ui/Reveal'
import about1 from '@/assets/img/about-1.webp'
import about2 from '@/assets/img/about-2.webp'
import about3 from '@/assets/img/about-3.webp'
import about4 from '@/assets/img/about-4.webp'
import about5 from '@/assets/img/about-5.webp'
// import about6 from '@/assets/img/about-6.webp'

const ABOUT_SLIDES = [
  { src: about1, alt: 'Doradca Pewny Leasing podczas konsultacji z klientem' },
  { src: about2, alt: 'Pojazd sfinansowany przez Pewny Leasing' },
  { src: about3, alt: 'Flota firmowa sfinansowana leasingiem operacyjnym' },
  { src: about4, alt: 'Podpisanie umowy leasingowej w biurze Pewny Leasing' },
  { src: about5, alt: 'Nowoczesne pojazdy w ofercie leasingowej Pewny Leasing' },
]

export function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { value: t('about.stat1.value'), label: t('about.stat1.label') },
    { value: t('about.stat2.value'), label: t('about.stat2.label') },
    { value: t('about.stat3.value'), label: t('about.stat3.label') },
  ]

  return (
    <section id="about" className="py-32 md:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top block: heading + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark leading-none tracking-tight">
              <WaveText text={t('about.heading')} delay={100} charDelay={22} />
            </h2>
          </div>
          <div>
            <p className="text-lg text-grey-mid leading-relaxed">
              <WaveText text={t('about.text')} charDelay={6} />
            </p>
          </div>
        </div>

        {/* Stats row */}
        <Reveal delay={700}>
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-gray-100">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="py-10 sm:px-8 border-b sm:border-b-0 sm:border-r border-gray-100 last:border-0 text-center"
              >
                <p className="text-4xl font-black text-dark mb-2">{stat.value}</p>
                <p className="text-sm text-grey-mid">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Bottom block: carousel + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-20">
          <Reveal variant="scale">
            <ImageCarousel
              slides={ABOUT_SLIDES}
              interval={5000}
              imgClassName="object-cover"
              className="h-80 lg:h-96"
            />
          </Reveal>
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark leading-none tracking-tight">
              {t('about.headingSecond')}
            </h2>
            <br />
            <p className="text-lg text-grey-mid leading-relaxed">
              {t('about.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
