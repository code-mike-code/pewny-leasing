import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/hooks/useLanguage'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { BusinessCalculatorSection } from '@/components/sections/BusinessCalculatorSection'
import { MeetingSection } from '@/components/sections/MeetingSection'
import { KnowledgeSection } from '@/components/sections/KnowledgeSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { OfferSection } from '@/components/sections/OfferSection'
import { BannerSection } from '@/components/sections/BannerSection'
import { WhatsAppWidget } from '@/components/ui/WhatsAppWidget'

export default function Index() {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>Drago Partner – {t('footer.tagline')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <link rel="canonical" href="https://dragopartner.pl/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dragopartner.pl/" />
        <meta property="og:title" content={`Drago Partner – ${t('footer.tagline')}`} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="https://dragopartner.pl/og-image.jpg" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="Drago Partner" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Drago Partner – ${t('footer.tagline')}`} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content="https://dragopartner.pl/og-image.jpg" />

        {/* JSON-LD: LocalBusiness */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Drago Partner",
          "description": "Partner flotowy Uber, Bolt i FreeNow w Warszawie. Wynajem aut, licencje taxi, szkolenia i wsparcie kierowców.",
          "url": "https://dragopartner.pl",
          "telephone": "+48530181372",
          "email": "biuro@dragopartner.pl",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Modlińska 310/312 lok. 2",
            "addressLocality": "Warszawa",
            "postalCode": "03-152",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 52.3102,
            "longitude": 20.9947
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "10:00",
            "closes": "18:00"
          },
          "image": "https://dragopartner.pl/og-image.jpg",
          "sameAs": [
            "https://www.instagram.com/dragopartnertaxi",
            "https://www.facebook.com/share/1CYoKHcnMd/"
          ]
        })}</script>

        {/* JSON-LD: FAQPage — Google może wyświetlić FAQ bezpośrednio w wynikach */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Jakie dokumenty są potrzebne do rejestracji?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Do rejestracji potrzebujesz: dowód osobisty lub paszport, prawo jazdy kategorii B (min. 3 lata), zaświadczenie o niekaralności, badania lekarskie i psychotechniczne."
              }
            },
            {
              "@type": "Question",
              "name": "Ile mogę zarobić jako kierowca?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Zarobki zależą od liczby przepracowanych godzin i wybranej platformy. Aktywni kierowcy zarabiają średnio od 5 000 do 9 000 zł miesięcznie netto."
              }
            },
            {
              "@type": "Question",
              "name": "Czy muszę mieć własny samochód?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nie jest to wymagane. Pomagamy w znalezieniu opcji leasingu lub wynajmu pojazdu odpowiedniego do przewozów."
              }
            },
            {
              "@type": "Question",
              "name": "Jak długo trwa proces rejestracji?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standardowy proces rejestracji trwa od 3 do 7 dni roboczych, w zależności od kompletności dokumentacji."
              }
            },
            {
              "@type": "Question",
              "name": "Czy oferujecie wsparcie w języku ukraińskim lub angielskim?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak. Nasz zespół obsługuje kierowców w języku polskim, angielskim, ukraińskim, serbskim i gruzińskim."
              }
            }
          ]
        })}</script>
      </Helmet>

      <Header />
      <main id="main-content">
        <HeroSection />
        <BusinessCalculatorSection />
        <MeetingSection />
        <OfferSection />
        <BannerSection />
        <KnowledgeSection />
        <WhyUsSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
