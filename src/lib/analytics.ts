/**
 * Google Analytics 4 — instrukcja konfiguracji
 * ─────────────────────────────────────────────
 * 1. Wejdź na https://analytics.google.com i utwórz konto + property (GA4).
 * 2. Skopiuj swój Measurement ID — wygląda jak: G-XXXXXXXXXX
 * 3. Utwórz plik `.env.local` w katalogu głównym projektu i wklej:
 *
 *      VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 *
 * 4. GA ładuje się automatycznie po kliknięciu "Akceptuj" w bannerze cookies
 *    (logika w src/components/ui/CookieConsent.tsx).
 *
 * 5. Weryfikacja: otwórz stronę w przeglądarce → DevTools → Network → wpisz
 *    "google-analytics" w filtrze — powinieneś zobaczyć request do GA.
 *    Możesz też użyć rozszerzenia "Google Analytics Debugger" (Chrome).
 *
 * Uwaga: zmienna VITE_* jest wbudowana w bundle podczas buildu (Vite).
 *        NIE przechowuj w niej wartości wrażliwych (kluczy API, haseł).
 */

// Bezpieczna referencja do gtag — jeśli GA nie zostało jeszcze załadowane
// (użytkownik nie wyraził zgody), wywołania są ignorowane.
function gtag(...args: unknown[]): void {
  const w = window as unknown as Record<string, unknown>
  if (!w.dataLayer) return
  ;(w.dataLayer as unknown[]).push(args)
}

// ─── Śledzenie odsłon (page views) ──────────────────────────────────────────
// Wywołaj przy zmianie trasy jeśli używasz React Router bez przeładowania strony.
// Przykład użycia w komponencie:
//   useEffect(() => { trackPageView(location.pathname) }, [location])
export function trackPageView(path: string): void {
  gtag('event', 'page_view', { page_path: path })
}

// ─── Zdarzenia konwersji ─────────────────────────────────────────────────────

// Kliknięcie CTA / umów spotkanie
export function trackMeetingClick(source: string): void {
  gtag('event', 'meeting_click', {
    event_category: 'engagement',
    event_label: source, // np. 'hero_cta', 'calculator_confirm'
  })
}

// Przejście przez kalkulator — krok po kroku
export function trackCalculatorStep(step: number, stepName: string): void {
  gtag('event', 'calculator_step', {
    event_category: 'calculator',
    event_label: stepName,
    value: step,
  })
}

// Finalizacja kalkulatora (użytkownik potwierdził konfigurację)
export function trackCalculatorComplete(vehicleValue: number, leasingType: string): void {
  gtag('event', 'calculator_complete', {
    event_category: 'conversion',
    event_label: leasingType,   // np. 'operacyjny', 'konsumencki'
    value: vehicleValue,        // wartość pojazdu w PLN
    currency: 'PLN',
  })
}

// Wysłanie formularza kontaktowego
export function trackFormSubmit(formName: string): void {
  gtag('event', 'form_submit', {
    event_category: 'conversion',
    event_label: formName,      // np. 'contact', 'meeting_request'
  })
}

// Kliknięcie w numer telefonu / WhatsApp
export function trackPhoneClick(channel: 'phone' | 'whatsapp'): void {
  gtag('event', 'contact_click', {
    event_category: 'engagement',
    event_label: channel,
  })
}

// Zmiana języka (PL/EN)
export function trackLanguageChange(lang: string): void {
  gtag('event', 'language_change', {
    event_category: 'ui',
    event_label: lang,
  })
}
