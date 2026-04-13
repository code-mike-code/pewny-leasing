import { useState, useMemo, useRef } from 'react'
import { calculateLeaseInstallment, formatCurrency } from '@/lib/calculator'
import { ArrowRight, Loader2 } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'
import { InquiryForm, type InquiryFormHandle } from '@/components/forms/InquiryForm'
import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/lib/utils'
import { isHeroCalcStep2Disabled } from '@/lib/formFlow'

export function Calculator() {
  const { t } = useLanguage()
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

  const [wantsCashback, setWantsCashback] = useState(false)
  const [meetingType, setMeetingType] = useState<'online' | 'in_person' | null>(null)

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const formRef = useRef<InquiryFormHandle>(null)

  const estimatedRate = useMemo(() => {
    return calculateLeaseInstallment(value, contribution, buyout, period)
  }, [value, contribution, buyout, period])

  const handleTypeChange = (type: 'vehicle' | 'other') => {
    setCalculatorType(type)
    setStep(1)
    setValue(150000)
    setContribution(20)
    setBuyout(1)
    setPeriod(48)
    setFinancingObject('')
    setVehicleCondition(null)
    setSearchOption(null)
    setVehicleDetails('')
    setWantsCashback(false)
    setMeetingType(null)
    setFormStatus('idle')
  }

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full h-[580px] xl:h-[640px] flex flex-col text-dark translate-y-0 relative">
      {/* Top Tabs */}
      <div role="tablist" aria-label={t('calculator.aria.tablist')} className="flex text-sm font-bold tracking-wider bg-gray-50 flex-shrink-0">
        <button
          role="tab"
          aria-selected={calculatorType === 'vehicle'}
          aria-controls="calculator-panel"
          onClick={() => handleTypeChange('vehicle')}
          style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)' }}
          className={`flex-1 py-3 text-center transition-colors ${
            calculatorType === 'vehicle' ? 'bg-primary text-dark' : 'bg-white text-gray-400 hover:bg-gray-50'
          }`}
        >
          {t('calculator.tabs.vehicle')}
        </button>
        <button
          role="tab"
          aria-selected={calculatorType === 'other'}
          aria-controls="calculator-panel"
          onClick={() => handleTypeChange('other')}
          style={{ clipPath: 'polygon(12px 0, 100% 0, 100% 100%, 0 100%)' }}
          className={`flex-1 py-3 text-center transition-colors ml-[-12px] ${
            calculatorType === 'other' ? 'bg-primary text-dark' : 'bg-white text-gray-400 hover:bg-gray-50'
          }`}
        >
          {t('calculator.tabs.other')}
        </button>
      </div>

      <div className="flex-1 px-4 lg:px-8 xl:px-10 py-3 lg:py-5 xl:py-8 flex flex-col min-h-0">
        {/* Header content */}
        <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 tracking-wider mb-1">
          <span>{t('calculator.header.title')}</span>
          <span aria-live="polite" aria-atomic="true" className="text-primary bg-yellow-50 px-2 py-0.5 rounded">
            {t('calculator.header.step').replace('{step}', String(step))}
          </span>
        </div>

        {/* Progress bar */}
        <div
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={3}
          aria-label={t('calculator.header.step').replace('{step}', String(step))}
          className="w-full bg-gray-100 h-1 rounded-full mb-3 lg:mb-4"
        >
          <div className={`bg-primary h-1 rounded-full transition-all duration-500 ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'}`} />
        </div>

        <h3 className="text-xl xl:text-2xl font-black text-center mb-4 lg:mb-6 xl:mb-10 tracking-tight uppercase flex-shrink-0">
          {step === 1 && t('calculator.step1.title')}
          {step === 2 && (calculatorType === 'vehicle' ? t('calculator.step2.vehicleTitle') : t('calculator.step2.otherTitle'))}
          {step === 3 && t('calculator.step3.title')}
        </h3>

        {/* Dynamic Step Content Area */}
        <div id="calculator-panel" role="tabpanel" className="flex-1 flex flex-col justify-center min-h-0 overflow-hidden">
          <div className="overflow-y-auto h-full scrollbar-hide">
            {step === 1 && (
              <div className="space-y-4 lg:space-y-5 xl:space-y-7 animate-fade-in pb-2">
                {/* Value Slider */}
                <div className="group">
                  <div className="flex justify-between items-center mb-1 font-bold">
                    <span className="text-xs uppercase text-gray-500" id="slider-value-label">{t('calculator.sliders.value')}</span>
                    <span className="text-primary text-lg xl:text-xl">{value.toLocaleString('pl-PL')}</span>
                  </div>
                  <input
                    type="range" min="20000" max="1000000" step="1000"
                    value={value} onChange={(e) => setValue(Number(e.target.value))}
                    aria-labelledby="slider-value-label"
                    aria-valuetext={`${value.toLocaleString('pl-PL')} PLN`}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Contribution Slider */}
                <div className="group">
                  <div className="flex justify-between items-center mb-1 font-bold">
                    <span className="text-xs uppercase text-gray-500" id="slider-contribution-label">{t('calculator.sliders.contribution')}</span>
                    <span className="text-primary text-lg xl:text-xl">{contribution}%</span>
                  </div>
                  <input
                    type="range" min="0" max="45"
                    value={contribution} onChange={(e) => setContribution(Number(e.target.value))}
                    aria-labelledby="slider-contribution-label"
                    aria-valuetext={`${contribution}%`}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Buyout Slider */}
                <div className="group">
                  <div className="flex justify-between items-center mb-1 font-bold">
                    <span className="text-xs uppercase text-gray-500" id="slider-buyout-label">{t('calculator.sliders.buyout')}</span>
                    <span className="text-primary text-lg xl:text-xl">{buyout}%</span>
                  </div>
                  <input
                    type="range" min="1" max="50"
                    value={buyout} onChange={(e) => setBuyout(Number(e.target.value))}
                    aria-labelledby="slider-buyout-label"
                    aria-valuetext={`${buyout}%`}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Period Slider */}
                <div className="group">
                  <div className="flex justify-between items-center mb-1 font-bold">
                    <span className="text-xs uppercase text-gray-500" id="slider-period-label">{t('calculator.sliders.period')}</span>
                    <span className="text-primary text-lg xl:text-xl">{period} mc</span>
                  </div>
                  <input
                    type="range" min="12" max="60" step="1"
                    value={period} onChange={(e) => setPeriod(Number(e.target.value))}
                    aria-labelledby="slider-period-label"
                    aria-valuetext={`${period}`}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-fade-in py-2">
                {calculatorType === 'vehicle' && (
                  <>
                    <fieldset>
                      <legend className="sr-only">{t('calculator.condition.legend')}</legend>
                      <div className="grid grid-cols-2 gap-3">
                        <label className={`flex items-center gap-2 p-2.5 border rounded-xl cursor-pointer transition-colors ${vehicleCondition === 'new' ? 'border-primary bg-yellow-50/50' : 'border-gray-200 hover:border-primary'}`}>
                          <input type="radio" name="condition" checked={vehicleCondition === 'new'} onChange={() => { setVehicleCondition('new'); setSearchOption(null); }} className="w-4 h-4 accent-primary" />
                          <span className="font-bold text-sm">{t('calculator.condition.new')}</span>
                        </label>
                        <label className={`flex items-center gap-2 p-2.5 border rounded-xl cursor-pointer transition-colors ${vehicleCondition === 'used' ? 'border-primary bg-yellow-50/50' : 'border-gray-200 hover:border-primary'}`}>
                          <input type="radio" name="condition" checked={vehicleCondition === 'used'} onChange={() => { setVehicleCondition('used'); setSearchOption(null); }} className="w-4 h-4 accent-primary" />
                          <span className="font-bold text-sm">{t('calculator.condition.used')}</span>
                        </label>
                      </div>
                    </fieldset>
                    <hr className="border-gray-100" />
                  </>
                )}

                {calculatorType === 'vehicle' ? (
                  <fieldset>
                    <legend className="sr-only">{t('calculator.option.legend')}</legend>
                    <div className="space-y-3">
                      <div className={`transition-opacity duration-300 ${vehicleCondition !== 'new' ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input type="radio" name="searchOption" checked={searchOption === 'find'} onChange={() => setSearchOption('find')} disabled={vehicleCondition !== 'new'} className="w-4 h-4 mt-1 accent-primary" />
                          <div className="flex-1">
                            <span className="font-bold text-sm block">{t('calculator.option.find')}</span>
                            {searchOption === 'find' && (
                              <input type="text" placeholder={t('calculator.option.findPlaceholder')} value={vehicleDetails} onChange={e => setVehicleDetails(e.target.value)} aria-label={t('calculator.option.findAriaLabel')} className="w-full mt-2 p-2 border border-gray-200 rounded-lg outline-none focus:border-primary text-xs shadow-sm" />
                            )}
                          </div>
                        </label>
                      </div>
                      <div className={`transition-opacity duration-300 ${vehicleCondition !== 'used' ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input type="radio" name="searchOption" checked={searchOption === 'have'} onChange={() => setSearchOption('have')} disabled={vehicleCondition !== 'used'} className="w-4 h-4 mt-1 accent-primary" />
                          <div className="flex-1">
                            <span className="font-bold text-sm block">{t('calculator.option.have')}</span>
                            {searchOption === 'have' && (
                              <input type="text" placeholder={t('calculator.option.havePlaceholder')} value={vehicleDetails} onChange={e => setVehicleDetails(e.target.value)} aria-label={t('calculator.option.haveAriaLabel')} className="w-full mt-2 p-2 border border-gray-200 rounded-lg outline-none focus:border-primary text-xs shadow-sm" />
                            )}
                          </div>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                ) : (
                  <div className="space-y-2">
                    <label className="block">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">{t('calculator.other.label')}</span>
                      <textarea
                        placeholder={t('calculator.other.placeholder')} value={financingObject} onChange={e => setFinancingObject(e.target.value)} rows={3}
                        className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-primary text-sm shadow-sm resize-none"
                      />
                    </label>
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in h-full">
                {formStatus !== 'success' && (
                  <div className="flex items-center gap-4 mb-4 pt-1 border-b border-gray-50 pb-3">
                    <label className="flex items-center gap-2 cursor-pointer group flex-shrink-0">
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          checked={wantsCashback}
                          onChange={(e) => {
                            setWantsCashback(e.target.checked);
                            if (e.target.checked && !meetingType) setMeetingType('online');
                            if (!e.target.checked) setMeetingType(null);
                          }}
                          className="w-4 h-4 accent-primary"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-[11px] uppercase italic text-navy leading-none">{t('calculator.cashback.title')}</span>
                        <span className="text-[9px] text-gray-400 font-bold leading-none mt-0.5 whitespace-nowrap">{t('calculator.cashback.subtitle')}</span>
                      </div>
                    </label>

                    <div className={cn(
                      "flex items-center gap-4 transition-all duration-300",
                      wantsCashback ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
                    )}>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="meeting"
                          checked={meetingType === 'online'}
                          onChange={() => setMeetingType('online')}
                          className="w-3.5 h-3.5 accent-primary"
                        />
                        <span className={cn("text-[10px] font-black uppercase tracking-wider", meetingType === 'online' ? "text-primary" : "text-gray-400")}>{t('calculator.meeting.online')}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="meeting"
                          checked={meetingType === 'in_person'}
                          onChange={() => setMeetingType('in_person')}
                          className="w-3.5 h-3.5 accent-primary"
                        />
                        <span className={cn("text-[10px] font-black uppercase tracking-wider", meetingType === 'in_person' ? "text-primary" : "text-gray-400")}>{t('calculator.meeting.inPerson')}</span>
                      </label>
                    </div>
                  </div>
                )}

                <InquiryForm
                  ref={formRef}
                  variant="compact"
                  hideSubmit={true}
                  onStatusChange={setFormStatus}
                  onSuccess={() => {}}
                  contextData={{
                    calculatorType,
                    financingObject: calculatorType === 'vehicle'
                      ? `Vehicle: ${vehicleCondition === 'new' ? 'New' : 'Used'} / ${searchOption === 'find' ? 'Find' : 'Have selected'} / ${vehicleDetails}`
                      : financingObject,
                    value,
                    contribution,
                    buyout,
                    period,
                    vehicleCondition,
                    searchOption,
                    vehicleDetails,
                    wantsCashback,
                    meetingType,
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Result & Submit Button Area */}
        {formStatus !== 'success' && (
          <div className="mt-2 lg:mt-4 xl:mt-4 pt-2 xl:pt-4 border-t border-gray-50 flex-shrink-0">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">{t('calculator.result.label')}</p>
                <div className="text-2xl md:text-3xl xl:text-4xl font-black tracking-tighter text-dark">
                  {formatCurrency(estimatedRate)} <span className="text-base xl:text-lg font-bold">PLN</span>
                </div>
              </div>
              <div className="flex gap-2 flex-1 justify-end max-w-[240px]">
                {step > 1 && (
                  <CTAButton
                    onClick={() => {
                      if (formStatus === 'loading') return;
                      setStep(step - 1);
                    }}
                    variant="outline-yellow"
                    size="sm"
                    className="!px-6 !text-primary hover:!text-dark"
                    disabled={formStatus === 'loading'}
                  >
                    <span className="text-[10px] tracking-[0.2em]">{t('calculator.btn.back')}</span>
                  </CTAButton>
                )}
                <CTAButton
                  variant="yellow"
                  size="sm"
                  className="flex-1 group"
                  disabled={
                    formStatus === 'loading' ||
                    (step === 2 && isHeroCalcStep2Disabled(calculatorType, vehicleCondition, searchOption, vehicleDetails, financingObject))
                  }
                  onClick={() => {
                    if (step === 1) setStep(2)
                    else if (step === 2) setStep(3)
                    else if (step === 3) formRef.current?.submit()
                  }}
                >
                  {formStatus === 'loading' ? (
                    <Loader2 size={16} className="animate-spin mx-auto" />
                  ) : (
                    <>
                      <span className="text-[10px] tracking-[0.2em]">{step === 3 ? t('calculator.btn.submit') : t('calculator.btn.next')}</span>
                      <ArrowRight size={16} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                    </>
                  )}
                </CTAButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
