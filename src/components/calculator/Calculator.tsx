import { useState, useMemo } from 'react'
import { calculateLeaseInstallment, formatCurrency } from '@/lib/calculator'
import { validateNIP, validateEmail, validatePhone } from '@/lib/validation'
import { ArrowRight } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'

export function Calculator() {
  const [calculatorType, setCalculatorType] = useState<'vehicle' | 'other'>('vehicle')
  const [financingObject, setFinancingObject] = useState('')
  const [value, setValue] = useState(150000)
  const [contribution, setContribution] = useState(20)
  const [buyout, setBuyout] = useState(1)
  const [period, setPeriod] = useState(48)
  
  const [step, setStep] = useState(1)
  const [vehicleCondition, setVehicleCondition] = useState<'new' | 'used' | null>(null)
  const [searchOption, setSearchOption] = useState<'find' | 'have' | null>(null)
  const [vehicleDetails, setVehicleDetails] = useState('')
  
  // Krok 3 z 3
  const [wantsCashback, setWantsCashback] = useState(false)
  const [meetingType, setMeetingType] = useState<'online' | 'in_person' | null>(null)
  const [nip, setNip] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<{nip?: string, email?: string, phone?: string}>({})

  const estimatedRate = useMemo(() => {
    return calculateLeaseInstallment(value, contribution, buyout, period)
  }, [value, contribution, buyout, period])

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full h-[580px] flex flex-col text-dark translate-y-0">
      {/* Top Tabs */}
      <div className="flex text-sm font-bold tracking-wider bg-gray-50 flex-shrink-0">
        <button 
          onClick={() => setCalculatorType('vehicle')}
          style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)' }}
          className={`flex-1 py-3 text-center transition-colors ${
            calculatorType === 'vehicle' ? 'bg-primary text-dark' : 'bg-white text-gray-400 hover:bg-gray-50'
          }`}
        >
          POJAZD
        </button>
        <button 
          onClick={() => setCalculatorType('other')}
          style={{ clipPath: 'polygon(12px 0, 100% 0, 100% 100%, 0 100%)' }}
          className={`flex-1 py-3 text-center transition-colors ml-[-12px] ${
            calculatorType === 'other' ? 'bg-primary text-dark' : 'bg-white text-gray-400 hover:bg-gray-50'
          }`}
        >
          COŚ INNEGO
        </button>
      </div>

      <div className="flex-1 px-4 lg:px-8 py-3 lg:py-5 flex flex-col">
        {/* Header content */}
        <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 tracking-wider mb-1">
          <span>KALKULATOR LEASINGOWY</span>
          <span className="text-primary bg-yellow-50 px-2 py-0.5 rounded">KROK {step} Z 3</span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-100 h-1 rounded-full mb-3 lg:mb-4">
          <div className={`bg-primary h-1 rounded-full transition-all duration-500 ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'}`}></div>
        </div>

        <h3 className="text-xl font-black text-center mb-4 lg:mb-6 tracking-tight uppercase flex-shrink-0">
          {step === 1 && 'SKONFIGURUJ OFERTĘ'}
          {step === 2 && (calculatorType === 'vehicle' ? 'DOBIERZ POJAZD' : 'PRZEDMIOT FINANSOWANIA')}
          {step === 3 && 'FINALIZACJA WNIOSKU'}
        </h3>

        {/* Dynamic Step Content Area */}
        <div className="flex-1 flex flex-col justify-center min-h-0">
          {step === 1 && (
            <div className="space-y-4 lg:space-y-5 animate-fade-in">
              {/* Value Slider */}
              <div className="group">
                <div className="flex justify-between items-center mb-1 font-bold">
                  <span className="text-xs uppercase text-gray-500">Wartość netto PLN</span>
                  <span className="text-primary text-lg">{value.toLocaleString('pl-PL')}</span>
                </div>
                <input 
                  type="range" min="20000" max="1000000" step="1000"
                  value={value} onChange={(e) => setValue(Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Contribution Slider */}
              <div className="group">
                <div className="flex justify-between items-center mb-1 font-bold">
                  <span className="text-xs uppercase text-gray-500">Wpłata własna</span>
                  <span className="text-primary text-lg">{contribution}%</span>
                </div>
                <input 
                  type="range" min="0" max="45"
                  value={contribution} onChange={(e) => setContribution(Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Buyout Slider */}
              <div className="group">
                <div className="flex justify-between items-center mb-1 font-bold">
                  <span className="text-xs uppercase text-gray-500">Wykup końcowy</span>
                  <span className="text-primary text-lg">{buyout}%</span>
                </div>
                <input 
                  type="range" min="1" max="50"
                  value={buyout} onChange={(e) => setBuyout(Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Period Slider */}
              <div className="group">
                <div className="flex justify-between items-center mb-1 font-bold">
                  <span className="text-xs uppercase text-gray-500">Okres (12-60 mc)</span>
                  <span className="text-primary text-lg">{period} mc</span>
                </div>
                <input 
                  type="range" min="12" max="60" step="1"
                  value={period} onChange={(e) => setPeriod(Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-4 animate-fade-in py-2">
              <div className="grid grid-cols-2 gap-3">
                <label className={`flex items-center gap-2 p-2.5 border rounded-xl cursor-pointer transition-colors ${vehicleCondition === 'new' ? 'border-primary bg-yellow-50/50' : 'border-gray-200 hover:border-primary'}`}>
                  <input type="radio" name="condition" checked={vehicleCondition === 'new'} onChange={() => { setVehicleCondition('new'); setSearchOption(null); }} className="w-4 h-4 accent-primary" />
                  <span className="font-bold text-sm">Nowy</span>
                </label>
                <label className={`flex items-center gap-2 p-2.5 border rounded-xl cursor-pointer transition-colors ${vehicleCondition === 'used' ? 'border-primary bg-yellow-50/50' : 'border-gray-200 hover:border-primary'}`}>
                  <input type="radio" name="condition" checked={vehicleCondition === 'used'} onChange={() => { setVehicleCondition('used'); setSearchOption(null); }} className="w-4 h-4 accent-primary" />
                  <span className="font-bold text-sm">Używany</span>
                </label>
              </div>

              <hr className="border-gray-100" />

              {calculatorType === 'vehicle' ? (
                <div className="space-y-3">
                  <div className={`transition-opacity duration-300 ${vehicleCondition !== 'new' ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="radio" name="searchOption" checked={searchOption === 'find'} onChange={() => setSearchOption('find')} disabled={vehicleCondition !== 'new'} className="w-4 h-4 mt-1 accent-primary" />
                      <div className="flex-1">
                        <span className="font-bold text-sm block">Znajdź mi pojazd na maksymalnym rabacie</span>
                        {searchOption === 'find' && (
                          <input type="text" placeholder="Marka, model..." value={vehicleDetails} onChange={e => setVehicleDetails(e.target.value)} className="w-full mt-2 p-2 border border-gray-200 rounded-lg outline-none focus:border-primary text-xs shadow-sm" />
                        )}
                      </div>
                    </label>
                  </div>
                  <div className={`transition-opacity duration-300 ${vehicleCondition !== 'used' ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="radio" name="searchOption" checked={searchOption === 'have'} onChange={() => setSearchOption('have')} disabled={vehicleCondition !== 'used'} className="w-4 h-4 mt-1 accent-primary" />
                      <div className="flex-1">
                        <span className="font-bold text-sm block">Mam już wybrany</span>
                        {searchOption === 'have' && (
                          <input type="text" placeholder="Link lub opis..." value={vehicleDetails} onChange={e => setVehicleDetails(e.target.value)} className="w-full mt-2 p-2 border border-gray-200 rounded-lg outline-none focus:border-primary text-xs shadow-sm" />
                        )}
                      </div>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="block">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">Opis przedmiotu finansowania</span>
                    <textarea 
                      placeholder="Co chcesz sfinansować?" value={financingObject} onChange={e => setFinancingObject(e.target.value)} rows={3}
                      className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-primary text-sm shadow-sm resize-none"
                    />
                  </label>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3 animate-fade-in">
              <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-colors ${wantsCashback ? 'border-primary bg-yellow-50/50' : 'border-gray-200 hover:border-primary'}`}>
                <input type="checkbox" checked={wantsCashback} onChange={(e) => { setWantsCashback(e.target.checked); if (!e.target.checked) setMeetingType(null); }} className="w-4 h-4 accent-primary" />
                <div className="flex-1">
                  <span className="font-bold text-sm block text-dark">Cash back</span>
                  <span className="text-gray-400 text-[10px] block">rezerwacja wizyty online/osobiście</span>
                </div>
              </label>

              <div className={`grid grid-cols-2 gap-2 transition-all duration-300 ${!wantsCashback ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                <button onClick={() => setMeetingType('online')} className={`py-2 text-xs font-bold border rounded-lg ${meetingType === 'online' ? 'border-primary bg-yellow-50 text-dark' : 'border-gray-100 text-gray-400'}`}>Online</button>
                <button onClick={() => setMeetingType('in_person')} className={`py-2 text-xs font-bold border rounded-lg ${meetingType === 'in_person' ? 'border-primary bg-yellow-50 text-dark' : 'border-gray-100 text-gray-400'}`}>Osobiście</button>
              </div>

              <div className="space-y-2.5">
                <input type="text" placeholder="Nr NIP" value={nip} onChange={e => setNip(e.target.value)} className="w-full p-2.5 border border-gray-200 rounded-lg outline-none focus:border-primary text-sm" />
                <div className="relative">
                  <input type="email" placeholder="E-mail *" value={email} onChange={e => setEmail(e.target.value)} className={`w-full p-2.5 border rounded-lg outline-none focus:border-primary text-sm ${errors.email ? 'border-red-500' : 'border-gray-200'}`} />
                </div>
                <div className="relative">
                  <input type="tel" placeholder="Telefon *" value={phone} onChange={e => setPhone(e.target.value)} className={`w-full p-2.5 border rounded-lg outline-none focus:border-primary text-sm ${errors.phone ? 'border-red-500' : 'border-gray-200'}`} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Result & Submit Button Area */}
        <div className="mt-4 lg:mt-6 pt-4 border-t border-gray-50 flex-shrink-0">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">ESTYMACJA RATY</p>
              <div className="text-2xl md:text-3xl font-black tracking-tighter text-dark">
                {formatCurrency(estimatedRate)} <span className="text-base font-bold">PLN</span>
              </div>
            </div>
            <div className="flex gap-2 flex-1 justify-end max-w-[240px]">
              {step > 1 && (
                <CTAButton 
                  onClick={() => setStep(step - 1)}
                  variant="outline-yellow"
                  size="sm"
                  className="!px-6 !text-primary hover:!text-dark"
                >
                  <span className="text-[10px] tracking-[0.2em]">WRÓĆ</span>
                </CTAButton>
              )}
              <CTAButton
                variant="yellow"
                size="sm"
                className="flex-1 group"
                disabled={
                  (step === 2 && calculatorType === 'other' && (!vehicleCondition || financingObject.trim().length < 4)) ||
                  (step === 2 && calculatorType === 'vehicle' && (!vehicleCondition || !searchOption || vehicleDetails.trim().length < 2))
                }
                onClick={() => {
                  if (step === 1) setStep(2)
                  else if (step === 2) setStep(3)
                  else {
                    let newErrors: typeof errors = {}
                    if (nip.trim() !== '' && !validateNIP(nip)) newErrors.nip = "Błędny NIP"
                    if (!validateEmail(email)) newErrors.email = "Błędny email"
                    if (!validatePhone(phone)) newErrors.phone = "Błędny telefon"
                    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
                    if (wantsCashback && meetingType === null) { alert('Wybierz formę spotkania.'); return; }
                    setErrors({}); alert('🎉 Wniosek wysłany!');
                  }
                }}
              >
                <span className="text-[10px] tracking-[0.2em]">{step === 3 ? 'WYŚLIJ' : 'DALEJ'}</span>
                <ArrowRight size={16} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
