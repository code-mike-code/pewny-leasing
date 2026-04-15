/**
 * Shared logic for the lead submission form split across two sections:
 * BusinessCalculatorSection (calculator data) + MeetingSection (contact data).
 *
 * All functions are pure (no side effects) — easy to unit-test.
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
 * Whether the "Next" button in step 2 of the hero calculator (Calculator.tsx) should be disabled.
 *
 * For 'other': requires a non-empty financingObject (min. 4 characters).
 * For 'vehicle': requires vehicleCondition + searchOption + vehicleDetails (min. 2 characters).
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
 * Whether the calculator section data is ready for the MeetingSection to submit a lead.
 *
 * For 'other': financingObject must be at least 4 characters.
 * For 'new'/'used': sliders always have values — calcData being non-null is sufficient.
 */
export function isCalcSectionReady(data: CalcSectionData | null): boolean {
  if (!data) return false
  if (data.activeTab === 'other') {
    return data.financingObject.trim().length >= 4
  }
  return true
}

/**
 * Builds a human-readable financingObject string for the email body from calculator data.
 */
export function buildCalcFinancingObject(data: CalcSectionData): string {
  if (data.activeTab === 'other') return data.financingObject.trim()
  const condition = data.activeTab === 'new' ? 'Nowy' : 'Używany'
  const details = data.vehicleDetails.trim()
  return details ? `Pojazd: ${condition} / ${details}` : `Pojazd: ${condition}`
}
