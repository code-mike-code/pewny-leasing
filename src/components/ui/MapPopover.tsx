import { useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { useLanguage } from '@/hooks/useLanguage'

interface MapPopoverProps {
  address: string
  open: boolean
  onClose: () => void
}

export function MapPopover({ address, open, onClose }: MapPopoverProps) {
  const { t } = useLanguage()
  const sheetRef = useRef<HTMLDivElement>(null)
  // MapPopover is always mounted (CSS animation), so the hook reacts to open changes.
  // Note: cross-origin iframe is not focusable — focus lands on the close button.
  useFocusTrap(sheetRef, open, onClose)

  const encodedAddress = encodeURIComponent(address)

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Bottom sheet */}
      <div
        ref={sheetRef}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-50 bg-white transition-transform duration-300',
          open ? 'translate-y-0' : 'translate-y-full',
        )}
        role="dialog"
        aria-modal="true"
        aria-label={address}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-100">
          <span className="text-sm font-semibold text-dark truncate pr-4">{address}</span>
          <button
            onClick={onClose}
            className="shrink-0 p-1 text-grey-mid hover:text-dark transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={t('common.closeMap')}
          >
            <X size={18} />
          </button>
        </div>
        <div className="h-[50vh] sm:h-[55vh] md:h-[60vh]">
          {open && (
            <iframe
              title="Lokalizacja"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src={`https://maps.google.com/maps?q=${encodedAddress}&output=embed&hl=pl`}
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>
      </div>
    </>
  )
}
