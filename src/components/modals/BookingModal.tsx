import { useRef } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─────────────────────────────────────────────────────────────────────────────
// INTEGRACJA Z MONDAY CRM — INSTRUKCJA PODŁĄCZENIA KALENDARZA
// ─────────────────────────────────────────────────────────────────────────────
//
// 1. Zaloguj się do Monday.com i przejdź do swojego CRM workspace.
//
// 2. Utwórz / znajdź widok kalendarza lub formularz rezerwacji:
//    a) Jeśli używasz "Workforms" (formularze Monday):
//       → Apps → WorkForms → utwórz formularz z polami: imię, telefon, termin
//       → Kliknij "Share" i skopiuj publiczny link (format: https://forms.monday.com/...)
//    b) Jeśli używasz wbudowanego "Scheduling" lub integracji Calendly/Tidycal:
//       → skopiuj bezpośredni link do strony rezerwacji
//    c) Jeśli Monday.com ma ustawioną stronę rezerwacji przez CRM:
//       → Board → View → Calendar View → Share Public Link
//
// 3. Wklej skopiowany URL do pliku .env jako:
//    VITE_MONDAY_BOOKING_URL=https://forms.monday.com/forms/...
//
// 4. Kliknięcie przycisku "Potwierdź" otworzy ten URL w nowej karcie.
//    Możesz też zmienić window.open() na <iframe> jeśli chcesz embed w modalu.
//
// 5. Po podłączeniu usuń komentarze przy przyciskach CTA w:
//    - src/components/sections/HeroSection.tsx     (linia ~50)
//    - src/components/sections/ContactSection.tsx  (linia ~97)
// ─────────────────────────────────────────────────────────────────────────────

interface BookingModalProps {
  open: boolean
  onClose: () => void
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  const { t } = useLanguage()
  const modalRef = useRef<HTMLDivElement>(null)

  // Hooks must be called before any conditional return (Rules of Hooks)
  useFocusTrap(modalRef, open, onClose)

  const handleConfirm = () => {
    onClose()

    // ── Monday CRM Booking URL ──────────────────────────────────────────────
    // Ustaw VITE_MONDAY_BOOKING_URL w pliku .env (patrz instrukcja powyżej).
    // Przykład: VITE_MONDAY_BOOKING_URL=https://forms.monday.com/forms/abc123
    // ───────────────────────────────────────────────────────────────────────
    const mondayBookingUrl = import.meta.env.VITE_MONDAY_BOOKING_URL
    if (mondayBookingUrl) {
      window.open(mondayBookingUrl, '_blank', 'noopener,noreferrer')
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        '[BookingModal] Brak VITE_MONDAY_BOOKING_URL w .env — uzupełnij adres URL kalendarza Monday CRM.'
      )
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark/70"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel — role="dialog" and focus trap scoped to this element */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={cn(
          'relative bg-white w-full max-w-md p-8',
          'shadow-2xl',
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-grey-mid hover:text-dark transition-colors"
          aria-label={t('common.close')}
        >
          <X size={18} />
        </button>

        <h2
          id="modal-title"
          className="text-xl font-black text-dark mb-4"
        >
          {t('contact.modalTitle')}
        </h2>

        <p className="text-sm text-grey-mid leading-relaxed mb-8">
          {t('contact.modalText')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleConfirm}
            className="flex-1 bg-illuminating text-dark text-sm font-bold px-6 py-3 min-h-[44px] hover:bg-yellow-300 transition-colors duration-200"
          >
            {t('contact.modalConfirm')}
          </button>
          <button
            onClick={onClose}
            className="flex-1 border border-gray-200 text-dark text-sm font-medium px-6 py-3 min-h-[44px] hover:bg-gray-50 transition-colors duration-200"
          >
            {t('contact.modalCancel')}
          </button>
        </div>
      </div>
    </div>
  )
}
