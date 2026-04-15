import { describe, it, expect } from 'vitest'
import {
  isHeroCalcStep2Disabled,
  isCalcSectionReady,
  buildCalcFinancingObject,
  type CalcSectionData,
} from './formFlow'

const baseCalcData: CalcSectionData = {
  activeTab: 'new',
  value: 150000,
  contribution: 10,
  buyout: 1,
  period: 60,
  vehicleDetails: '',
  financingObject: '',
}

// ---------------------------------------------------------------------------
// isHeroCalcStep2Disabled
// ---------------------------------------------------------------------------
describe('isHeroCalcStep2Disabled', () => {
  describe('type: vehicle', () => {
    it('blocks when vehicleCondition is missing', () => {
      expect(isHeroCalcStep2Disabled('vehicle', null, 'find', 'BMW 3', '')).toBe(true)
    })

    it('blocks when searchOption is missing', () => {
      expect(isHeroCalcStep2Disabled('vehicle', 'new', null, 'BMW 3', '')).toBe(true)
    })

    it('blocks when vehicleDetails is too short (< 2 characters)', () => {
      expect(isHeroCalcStep2Disabled('vehicle', 'new', 'find', 'B', '')).toBe(true)
    })

    it('blocks when vehicleDetails is empty', () => {
      expect(isHeroCalcStep2Disabled('vehicle', 'used', 'have', '', '')).toBe(true)
    })

    it('passes when vehicleCondition + searchOption + vehicleDetails are all filled', () => {
      expect(isHeroCalcStep2Disabled('vehicle', 'new', 'find', 'BMW 3 seria', '')).toBe(false)
    })

    it('passes for used + have', () => {
      expect(isHeroCalcStep2Disabled('vehicle', 'used', 'have', 'Audi A4', '')).toBe(false)
    })

    it('financingObject is ignored for vehicle type', () => {
      // financingObject does not matter for vehicle — other conditions are checked
      expect(isHeroCalcStep2Disabled('vehicle', 'new', 'find', 'BMW 3', 'anything')).toBe(false)
    })
  })

  describe('type: other', () => {
    it('blocks when financingObject is empty', () => {
      expect(isHeroCalcStep2Disabled('other', null, null, '', '')).toBe(true)
    })

    it('blocks when financingObject is too short (< 4 characters)', () => {
      expect(isHeroCalcStep2Disabled('other', null, null, '', 'abc')).toBe(true)
    })

    it('blocks when financingObject contains only spaces', () => {
      expect(isHeroCalcStep2Disabled('other', null, null, '', '    ')).toBe(true)
    })

    it('does NOT block when financingObject has at least 4 characters — vehicleCondition not required', () => {
      expect(isHeroCalcStep2Disabled('other', null, null, '', 'Masz')).toBe(false)
    })

    it('does NOT block for a longer description', () => {
      expect(isHeroCalcStep2Disabled('other', null, null, '', 'Maszyna budowlana JCB')).toBe(false)
    })

    it('vehicleCondition is irrelevant for other type', () => {
      // Even with vehicleCondition=null and searchOption=null — only financingObject matters
      expect(isHeroCalcStep2Disabled('other', null, null, 'BMW 3', 'Koparka')).toBe(false)
    })
  })
})

// ---------------------------------------------------------------------------
// isCalcSectionReady
// ---------------------------------------------------------------------------
describe('isCalcSectionReady', () => {
  it('returns false for null (user has not completed the calculator)', () => {
    expect(isCalcSectionReady(null)).toBe(false)
  })

  it('returns true for activeTab: new — sliders always have values', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'new' })).toBe(true)
  })

  it('returns true for activeTab: used — sliders always have values', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'used' })).toBe(true)
  })

  it('returns true for new with vehicleDetails (optional)', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'new', vehicleDetails: 'Toyota Corolla' })).toBe(true)
  })

  it('returns false for activeTab: other with empty financingObject', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'other', financingObject: '' })).toBe(false)
  })

  it('returns false for activeTab: other with financingObject too short (< 4 characters)', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'other', financingObject: 'abc' })).toBe(false)
  })

  it('returns false when financingObject contains only spaces', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'other', financingObject: '   ' })).toBe(false)
  })

  it('returns true for activeTab: other with financingObject filled (>= 4 characters)', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'other', financingObject: 'Masz' })).toBe(true)
  })

  it('returns true for activeTab: other with full description', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'other', financingObject: 'Maszyna budowlana' })).toBe(true)
  })
})

// ---------------------------------------------------------------------------
// buildCalcFinancingObject
// ---------------------------------------------------------------------------
describe('buildCalcFinancingObject', () => {
  it('for other: returns trimmed financingObject', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'other', financingObject: '  Koparka  ' }
    expect(buildCalcFinancingObject(data)).toBe('Koparka')
  })

  it('for other: returns full description', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'other', financingObject: 'Maszyna budowlana JCB' }
    expect(buildCalcFinancingObject(data)).toBe('Maszyna budowlana JCB')
  })

  it('for new without vehicleDetails: returns "Pojazd: Nowy"', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'new', vehicleDetails: '' }
    expect(buildCalcFinancingObject(data)).toBe('Pojazd: Nowy')
  })

  it('for new with vehicleDetails: returns full string with separator', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'new', vehicleDetails: 'BMW 3 seria' }
    expect(buildCalcFinancingObject(data)).toBe('Pojazd: Nowy / BMW 3 seria')
  })

  it('for used without vehicleDetails: returns "Pojazd: Używany"', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'used', vehicleDetails: '' }
    expect(buildCalcFinancingObject(data)).toBe('Pojazd: Używany')
  })

  it('for used with vehicleDetails: returns full trimmed string', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'used', vehicleDetails: '  Audi A4 2019  ' }
    expect(buildCalcFinancingObject(data)).toBe('Pojazd: Używany / Audi A4 2019')
  })

  it('vehicleDetails with only spaces is treated as empty', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'new', vehicleDetails: '   ' }
    expect(buildCalcFinancingObject(data)).toBe('Pojazd: Nowy')
  })
})
