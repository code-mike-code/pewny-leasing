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
  describe('typ: pojazd (vehicle)', () => {
    it('blokuje gdy brak vehicleCondition', () => {
      expect(isHeroCalcStep2Disabled('vehicle', null, 'find', 'BMW 3', '')).toBe(true)
    })

    it('blokuje gdy brak searchOption', () => {
      expect(isHeroCalcStep2Disabled('vehicle', 'new', null, 'BMW 3', '')).toBe(true)
    })

    it('blokuje gdy vehicleDetails jest za krótki (< 2 znaki)', () => {
      expect(isHeroCalcStep2Disabled('vehicle', 'new', 'find', 'B', '')).toBe(true)
    })

    it('blokuje gdy vehicleDetails pusty', () => {
      expect(isHeroCalcStep2Disabled('vehicle', 'used', 'have', '', '')).toBe(true)
    })

    it('przepuszcza gdy vehicleCondition + searchOption + vehicleDetails wypełnione', () => {
      expect(isHeroCalcStep2Disabled('vehicle', 'new', 'find', 'BMW 3 seria', '')).toBe(false)
    })

    it('przepuszcza dla used + have', () => {
      expect(isHeroCalcStep2Disabled('vehicle', 'used', 'have', 'Audi A4', '')).toBe(false)
    })

    it('financingObject jest ignorowane dla vehicle', () => {
      // financingObject nie ma znaczenia dla vehicle, liczą się inne warunki
      expect(isHeroCalcStep2Disabled('vehicle', 'new', 'find', 'BMW 3', 'cokolwiek')).toBe(false)
    })
  })

  describe('typ: inne (other)', () => {
    it('blokuje gdy financingObject pusty', () => {
      expect(isHeroCalcStep2Disabled('other', null, null, '', '')).toBe(true)
    })

    it('blokuje gdy financingObject za krótki (< 4 znaki)', () => {
      expect(isHeroCalcStep2Disabled('other', null, null, '', 'abc')).toBe(true)
    })

    it('blokuje gdy financingObject ma tylko spacje', () => {
      expect(isHeroCalcStep2Disabled('other', null, null, '', '    ')).toBe(true)
    })

    it('NIE blokuje gdy financingObject ma min. 4 znaki — vehicleCondition nie jest wymagany', () => {
      expect(isHeroCalcStep2Disabled('other', null, null, '', 'Masz')).toBe(false)
    })

    it('NIE blokuje dla dłuższego opisu', () => {
      expect(isHeroCalcStep2Disabled('other', null, null, '', 'Maszyna budowlana JCB')).toBe(false)
    })

    it('vehicleCondition nie ma znaczenia dla other', () => {
      // Nawet z vehicleCondition=null i searchOption=null — liczy się tylko financingObject
      expect(isHeroCalcStep2Disabled('other', null, null, 'BMW 3', 'Koparka')).toBe(false)
    })
  })
})

// ---------------------------------------------------------------------------
// isCalcSectionReady
// ---------------------------------------------------------------------------
describe('isCalcSectionReady', () => {
  it('zwraca false dla null (użytkownik nie przeszedł przez kalkulator)', () => {
    expect(isCalcSectionReady(null)).toBe(false)
  })

  it('zwraca true dla activeTab: new — suwaki zawsze mają wartości', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'new' })).toBe(true)
  })

  it('zwraca true dla activeTab: used — suwaki zawsze mają wartości', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'used' })).toBe(true)
  })

  it('zwraca true dla new z vehicleDetails (opcjonalne)', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'new', vehicleDetails: 'Toyota Corolla' })).toBe(true)
  })

  it('zwraca false dla activeTab: other z pustym financingObject', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'other', financingObject: '' })).toBe(false)
  })

  it('zwraca false dla activeTab: other z za krótkim financingObject (< 4 znaki)', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'other', financingObject: 'abc' })).toBe(false)
  })

  it('zwraca false gdy financingObject to same spacje', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'other', financingObject: '   ' })).toBe(false)
  })

  it('zwraca true dla activeTab: other z wypełnionym financingObject (>= 4 znaki)', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'other', financingObject: 'Masz' })).toBe(true)
  })

  it('zwraca true dla activeTab: other z pełnym opisem', () => {
    expect(isCalcSectionReady({ ...baseCalcData, activeTab: 'other', financingObject: 'Maszyna budowlana' })).toBe(true)
  })
})

// ---------------------------------------------------------------------------
// buildCalcFinancingObject
// ---------------------------------------------------------------------------
describe('buildCalcFinancingObject', () => {
  it('dla other zwraca financingObject (przycięty)', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'other', financingObject: '  Koparka  ' }
    expect(buildCalcFinancingObject(data)).toBe('Koparka')
  })

  it('dla other zwraca pełny opis', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'other', financingObject: 'Maszyna budowlana JCB' }
    expect(buildCalcFinancingObject(data)).toBe('Maszyna budowlana JCB')
  })

  it('dla new bez vehicleDetails zwraca "Pojazd: Nowy"', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'new', vehicleDetails: '' }
    expect(buildCalcFinancingObject(data)).toBe('Pojazd: Nowy')
  })

  it('dla new z vehicleDetails zwraca pełny string z ukośnikiem', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'new', vehicleDetails: 'BMW 3 seria' }
    expect(buildCalcFinancingObject(data)).toBe('Pojazd: Nowy / BMW 3 seria')
  })

  it('dla used bez vehicleDetails zwraca "Pojazd: Używany"', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'used', vehicleDetails: '' }
    expect(buildCalcFinancingObject(data)).toBe('Pojazd: Używany')
  })

  it('dla used z vehicleDetails zwraca pełny string', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'used', vehicleDetails: '  Audi A4 2019  ' }
    expect(buildCalcFinancingObject(data)).toBe('Pojazd: Używany / Audi A4 2019')
  })

  it('vehicleDetails z samymi spacjami traktuje jak pusty', () => {
    const data: CalcSectionData = { ...baseCalcData, activeTab: 'new', vehicleDetails: '   ' }
    expect(buildCalcFinancingObject(data)).toBe('Pojazd: Nowy')
  })
})
