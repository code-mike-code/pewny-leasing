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
  const pageTitle = `Pewny Leasing – ${t('footer.tagline')}`
  const pageDescription = t('meta.description')

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={t('meta.keywords')} />
        <link rel="canonical" href="https://www.pewnyleasing24.pl/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pewnyleasing24.pl/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://www.pewnyleasing24.pl/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pewny Leasing – Broker Leasingowy dla Firm" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="Pewny Leasing" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.pewnyleasing24.pl/" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.pewnyleasing24.pl/og-image.png" />

        {/* JSON-LD: FinancialService + LocalBusiness */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["FinancialService", "LocalBusiness"],
          "@id": "https://www.pewnyleasing24.pl/#organization",
          "name": "Pewny Leasing",
          "description": "Broker leasingowy i finansowy dla firm B2B. Leasing operacyjny, wynajem długoterminowy i krótkoterminowy, finansowanie flot samochodowych, leasing samochodów premium oraz sprzętu specjalistycznego dla branż IT, medycznej, budowlanej, przemysłowej, rolniczej i automotive.",
          "url": "https://www.pewnyleasing24.pl",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.pewnyleasing24.pl/logo.webp",
            "width": 300,
            "height": 80
          },
          "image": "https://www.pewnyleasing24.pl/og-image.png",
          "telephone": "+48535454858",
          "email": "kontakt@pewnyleasing24.pl",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Modlińska 310/312 lok. 2",
            "addressLocality": "Warszawa",
            "postalCode": "03-152",
            "addressRegion": "Mazowieckie",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 52.3102,
            "longitude": 20.9947
          },
          "areaServed": [
            { "@type": "State", "name": "Mazowieckie" },
            { "@type": "Country", "name": "Polska" }
          ],
          "serviceType": [
            "Leasing operacyjny",
            "Leasing finansowy",
            "Wynajem długoterminowy",
            "Wynajem krótkoterminowy",
            "Finansowanie flot samochodowych",
            "Leasing samochodów premium",
            "Leasing sprzętu IT",
            "Leasing sprzętu medycznego",
            "Leasing maszyn budowlanych",
            "Leasing maszyn rolniczych",
            "Cash back leasing"
          ],
          "currenciesAccepted": "PLN",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "10:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.instagram.com/pewnyleasing",
            "https://www.facebook.com/pewnyleasing",
            "https://www.youtube.com/@pewnyleasing"
          ]
        })}</script>

        {/* JSON-LD: OfferCatalog */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Leasing i Wynajem dla Firm B2B",
          "provider": {
            "@type": "Organization",
            "name": "Pewny Leasing",
            "@id": "https://www.pewnyleasing24.pl/#organization"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Oferta Pewny Leasing",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Leasing operacyjny samochodów",
                "description": "Leasing operacyjny samochodów osobowych i dostawczych klasy premium — nowych i używanych. Wszystkie marki, rabaty, szybka decyzja."
              },
              {
                "@type": "Offer",
                "name": "Wynajem długoterminowy (LTR)",
                "description": "Wynajem długoterminowy pojazdów dla firm. Kompleksowa usługa bez ryzyka residualnego."
              },
              {
                "@type": "Offer",
                "name": "Finansowanie floty firmowej",
                "description": "Kompleksowe finansowanie flot pojazdów dla firm. Negocjowane warunki, zarządzanie flotą, rabaty flotowe."
              },
              {
                "@type": "Offer",
                "name": "Leasing sprzętu specjalistycznego",
                "description": "Leasing sprzętu IT, medycznego, budowlanego, przemysłowego, rolniczego. Finansowanie dla wszystkich branż."
              },
              {
                "@type": "Offer",
                "name": "Cash back leasing",
                "description": "Zwrot gotówki przy zakupie pojazdu lub sprzętu w leasingu. Dodatkowe korzyści finansowe dla firm."
              }
            ]
          }
        })}</script>

        {/* JSON-LD: BreadcrumbList */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Strona główna",
              "item": "https://www.pewnyleasing24.pl/"
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
