/**
 * Wspólna logika formularza zgłoszeniowego rozproszonego na dwie sekcje:
 * BusinessCalculatorSection (dane kalkulatora) + MeetingSection (dane kontaktowe).
 *
 * Funkcje są czyste (bez efektów ubocznych) — łatwe do testowania.
 */

export interface CalcSectionData {
  activeTab: 'new' | 'used' | 'other'
  value: number
  contribution: number
  buyout: number
  period: number
  vehicleDetails: string
  financingObject: string
}

/**
 * Czy przycisk "Dalej" w kroku 2 kalkulatora Hero (Calculator.tsx) powinien być zablokowany.
 *
 * Dla 'other': wymaga tylko wypełnionego financingObject (min. 4 znaki).
 * Dla 'vehicle': wymaga vehicleCondition + searchOption + vehicleDetails (min. 2 znaki).
 */
export function isHeroCalcStep2Disabled(
  calculatorType: 'vehicle' | 'other',
  vehicleCondition: 'new' | 'used' | null,
  searchOption: 'find' | 'have' | null,
  vehicleDetails: string,
  financingObject: string,
): boolean {
  if (calculatorType === 'other') {
    return financingObject.trim().length < 4
  }
  return !vehicleCondition || !searchOption || vehicleDetails.trim().length < 2
}

/**
 * Czy dane z sekcji Kalkulator są gotowe do wysłania zgłoszenia przez MeetingSection.
 *
 * Dla 'other': financingObject musi mieć min. 4 znaki.
 * Dla 'new'/'used': suwaki zawsze mają wartości — wystarczy że calcData nie jest null.
 */
export function isCalcSectionReady(data: CalcSectionData | null): boolean {
  if (!data) return false
  if (data.activeTab === 'other') {
    return data.financingObject.trim().length >= 4
  }
  return true
}

/**
 * Buduje czytelny string financingObject do emaila na podstawie danych z kalkulatora.
 */
export function buildCalcFinancingObject(data: CalcSectionData): string {
  if (data.activeTab === 'other') return data.financingObject.trim()
  const condition = data.activeTab === 'new' ? 'Nowy' : 'Używany'
  const details = data.vehicleDetails.trim()
  return details ? `Pojazd: ${condition} / ${details}` : `Pojazd: ${condition}`
}
