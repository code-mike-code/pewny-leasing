import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/hooks/useLanguage'

const CONSENT_KEY = 'pewnyleasing_cookie_consent'

function loadGoogleAnalytics(measurementId: string) {
  if (!measurementId || document.getElementById('ga-script')) return

  // Initialize dataLayer and gtag function
  const w = window as unknown as Record<string, unknown>
  w.dataLayer = (w.dataLayer as unknown[]) || []
  function gtag(...args: unknown[]) {
    ;(w.dataLayer as unknown[]).push(args)
  }
  gtag('js', new Date())
  gtag('config', measurementId)

  // Inject the GA script tag
  const script = document.createElement('script')
  script.id = 'ga-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
}

export function CookieConsent() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)
  const measurementId = (import.meta.env.VITE_GA_MEASUREMENT_ID as string) ?? ''
  const acceptButtonRef = useRef<HTMLButtonElement>(null)

  // Move focus to the Accept button when banner appears (ARIA dialog requirement)
  useEffect(() => {
    if (visible) {
      acceptButtonRef.current?.focus()
    }
  }, [visible])

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === 'accepted') {
      loadGoogleAnalytics(measurementId)
    } else if (!consent) {
      // Small delay to avoid layout shift on initial render
      const timer = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(timer)
    }
  }, [measurementId])

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    loadGoogleAnalytics(measurementId)
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label={t('cookies.title')}
      className="fixed bottom-0 left-0 right-0 z-[100] bg-black border-t-2 border-primary shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white mb-1">
            {t('cookies.title')}
          </p>
          <p className="text-xs text-white/60 leading-relaxed">
            {t('cookies.description')}
          </p>
          <a
            href="/privacy-policy"
            className="text-xs text-primary underline underline-offset-2 mt-1 inline-block hover:text-white transition-colors duration-150"
          >
            {t('cookies.learnMore')}
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-5 py-2.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition-colors duration-150 min-h-[44px]"
          >
            {t('cookies.reject')}
          </button>
          <button
            ref={acceptButtonRef}
            onClick={handleAccept}
            className="px-6 py-2.5 text-sm font-semibold text-dark bg-primary hover:bg-primary-hover transition-colors duration-150 min-h-[44px]"
          >
            {t('cookies.accept')}
          </button>
        </div>
      </div>
    </div>
  )
}
