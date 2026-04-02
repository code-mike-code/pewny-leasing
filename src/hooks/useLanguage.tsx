import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import { pl } from '@/translations/pl'
import { en } from '@/translations/en'

export type Language = 'pl' | 'en'

type TranslationValue = string | Record<string, unknown>

const translations: Record<Language, Record<string, TranslationValue>> = {
  pl,
  en,
}

function getNestedValue(
  obj: Record<string, TranslationValue>,
  key: string,
): string {
  const keys = key.split('.')
  let current: TranslationValue = obj
  for (const k of keys) {
    if (typeof current !== 'object' || current === null) return key
    current = (current as Record<string, TranslationValue>)[k]
  }
  return typeof current === 'string' ? current : key
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pl')

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
  }, [])

  const t = useCallback(
    (key: string): string => {
      return getNestedValue(translations[language], key)
    },
    [language],
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
