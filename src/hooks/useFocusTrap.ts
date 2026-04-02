import { useEffect, useRef } from 'react'

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

/**
 * Traps keyboard focus inside `ref` when `isOpen` is true.
 * - Moves focus to the first focusable element on open.
 * - Cycles Tab / Shift+Tab within the container.
 * - Closes on Escape (calls `onClose`).
 * - Restores focus to the previously focused element on close.
 */
export function useFocusTrap(
  ref: React.RefObject<HTMLElement>,
  isOpen: boolean,
  onClose?: () => void,
): void {
  // Persist the element that had focus before the trap was activated.
  // useRef survives remounts (e.g. BookingModal with conditional return null).
  const previousFocusRef = useRef<Element | null>(null)

  useEffect(() => {
    if (!isOpen) return

    previousFocusRef.current = document.activeElement

    const el = ref.current
    if (!el) return

    const getFocusables = () =>
      Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))

    // Focus first focusable element
    getFocusables()[0]?.focus()

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose?.()
        return
      }

      if (e.key !== 'Tab') return

      const focusables = getFocusables()
      if (focusables.length === 0) {
        e.preventDefault()
        return
      }

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      ;(previousFocusRef.current as HTMLElement | null)?.focus()
    }
  }, [isOpen, ref, onClose])
}
