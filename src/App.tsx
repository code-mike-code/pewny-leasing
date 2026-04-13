import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from '@/hooks/useLanguage'
import Index from '@/pages/Index'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsOfService from '@/pages/TermsOfService'
import FAQ from '@/pages/FAQ'
import CashBack from '@/pages/CashBack'
import NotFound from '@/pages/NotFound'
import { CookieConsent } from '@/components/ui/CookieConsent'
import { ScrollToTop } from '@/components/ScrollToTop'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cashback" element={<CashBack />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
