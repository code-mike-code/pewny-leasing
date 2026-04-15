import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/hooks/useLanguage'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { BusinessCalculatorSection } from '@/components/sections/BusinessCalculatorSection'
import { MeetingSection } from '@/components/sections/MeetingSection'
import { type CalcSectionData } from '@/lib/formFlow'
import { KnowledgeSection } from '@/components/sections/KnowledgeSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { OfferSection } from '@/components/sections/OfferSection'
import { BannerSection } from '@/components/sections/BannerSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { WhatsAppWidget } from '@/components/ui/WhatsAppWidget'

export default function Index() {
  const { t } = useLanguage()
  const [calcData, setCalcData] = useState<CalcSectionData | null>(null)

  return (
    <>
      <Helmet>
        <title>Pewny Leasing – {t('footer.tagline')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <link rel="canonical" href="https://pewnyleasing.pl/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pewnyleasing.pl/" />
        <meta property="og:title" content={`Pewny Leasing – ${t('footer.tagline')}`} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="https://pewnyleasing.pl/og-image.jpg" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="Pewny Leasing" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Pewny Leasing – ${t('footer.tagline')}`} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content="https://pewnyleasing.pl/og-image.jpg" />

        {/* JSON-LD: LocalBusiness */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Pewny Leasing",
          "description": "Profesjonalne finansowanie floty i pojazdów. Leasing operacyjny, konsumencki i wsparcie w wyborze najlepszej oferty.",
          "url": "https://pewnyleasing.pl",
          "telephone": "+48530181372",
          "email": "kontakt@pewnyleasing.pl",
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
          "image": "https://pewnyleasing.pl/og-image.jpg",
          "sameAs": [
            "https://www.instagram.com/pewnyleasing",
            "https://www.facebook.com/pewnyleasing"
          ]
        })}</script>

        {/* JSON-LD: FAQPage — enables Google to surface FAQ answers directly in search results */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Jakie dokumenty są potrzebne do leasingu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Do leasingu firmowego potrzebujesz: NIP, REGON, dokumenty rejestrowe firmy oraz wyciąg z konta bankowego. Dla osób fizycznych wystarczy dowód osobisty i zaświadczenie o dochodach."
              }
            },
            {
              "@type": "Question",
              "name": "Jaka jest minimalna wpłata własna przy leasingu pojazdu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Minimalna wpłata własna zaczyna się już od 0%, jednak standardowo wynosi od 10% do 20% wartości pojazdu. Wyższa wpłata obniża miesięczną ratę leasingową."
              }
            },
            {
              "@type": "Question",
              "name": "Czy mogę wziąć leasing na używany samochód?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak. Oferujemy leasing zarówno na nowe, jak i używane pojazdy. Wiek pojazdu i jego przebieg wpływają na dostępne warunki finansowania."
              }
            },
            {
              "@type": "Question",
              "name": "Jak długo trwa decyzja leasingowa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Decyzja kredytowa może być wydana nawet w ciągu 2 godzin od złożenia kompletnego wniosku online."
              }
            },
            {
              "@type": "Question",
              "name": "Czy Pewny Leasing obsługuje leasing konsumencki?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak. Obsługujemy zarówno leasing operacyjny dla firm, jak i leasing konsumencki dla osób fizycznych nieprowadzących działalności gospodarczej."
              }
            }
          ]
        })}</script>
      </Helmet>

      <Header />
      <main id="main-content">
        <HeroSection />
        <BusinessCalculatorSection onConfirm={setCalcData} />
        <MeetingSection calcData={calcData} />
        <OfferSection />
        <BannerSection />
        <KnowledgeSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
