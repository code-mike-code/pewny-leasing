import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from '@/hooks/useLanguage'
import Index from '@/pages/Index'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsOfService from '@/pages/TermsOfService'
import NotFound from '@/pages/NotFound'
import { CookieConsent } from '@/components/ui/CookieConsent'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
