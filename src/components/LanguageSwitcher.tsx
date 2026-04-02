import { useState, useRef, useEffect } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { useLanguage, type Language } from '@/hooks/useLanguage'
import { cn } from '@/lib/utils'

const LANGUAGES: { code: Language; flag: string; label: string }[] = [
  { code: 'pl', flag: '🇵🇱', label: 'Polski' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
]

interface LanguageSwitcherProps {
  className?: string
  dropdownAlign?: 'left' | 'right'
  dropdownLayout?: 'list' | 'grid'
}

export function LanguageSwitcher({ className, dropdownAlign = 'right', dropdownLayout = 'list' }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const current = LANGUAGES.find((l) => l.code === language)!

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close on Escape and restore focus to trigger
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        ref={triggerRef}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 text-xs font-semibold text-grey-mid hover:text-dark transition-colors duration-200 min-h-[44px] px-1"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t('nav.selectLanguage')}
      >
        <Globe size={15} strokeWidth={1.75} />
        <span>{current.code.toUpperCase()}</span>
        <ChevronDown
          size={12}
          strokeWidth={2}
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div
          role="menu"
          className={cn(
            'absolute top-full mt-1 bg-white border border-gray-100 shadow-lg z-50',
            dropdownAlign === 'right' ? 'right-0' : 'left-0',
            dropdownLayout === 'grid' ? 'grid grid-cols-3 p-1 w-40' : 'w-44 py-1',
          )}
        >
          {LANGUAGES.map(({ code, flag }) => (
            <button
              key={code}
              role="menuitemradio"
              aria-checked={language === code}
              onClick={() => { setLanguage(code); setOpen(false) }}
              className={cn(
                'flex items-center transition-colors duration-150',
                dropdownLayout === 'grid'
                  ? cn(
                      'flex-col gap-1 p-2 text-xs font-semibold justify-center',
                      language === code
                        ? 'text-dark bg-gray-50'
                        : 'text-grey-mid hover:text-dark hover:bg-gray-50',
                    )
                  : cn(
                      'w-full gap-3 px-4 py-2.5 text-sm',
                      language === code
                        ? 'text-dark font-semibold bg-gray-50'
                        : 'text-grey-mid hover:text-dark hover:bg-gray-50',
                    ),
              )}
            >
              <span className="text-base leading-none">{flag}</span>
              <span>{code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
