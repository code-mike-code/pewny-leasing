import { ArrowRight } from 'lucide-react'
import { useState, useMemo } from 'react'
import { calculateLeaseInstallment, formatCurrency } from '@/lib/calculator'
import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'
import { useLanguage } from '@/hooks/useLanguage'
import { type CalcSectionData } from '@/lib/formFlow'
import Icon1 from '@/assets/icons/bmw-yellow.svg';
import Icon2 from '@/assets/icons/auto-used-removebg-preview.png';
import Icon3 from '@/assets/icons/spec-tools-removebg-preview.png';

const CARD_ICONS = [Icon1, Icon2, Icon3]
const CARD_ALTS = ['bmw-m3-yellow', 'auto-used', 'sale']

interface BusinessCalculatorSectionProps {
  onConfirm: (data: CalcSectionData) => void
}

export function BusinessCalculatorSection({ onConfirm }: BusinessCalculatorSectionProps) {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'new' | 'used' | 'other'>('new')
  const tabIds = ['new', 'used', 'other'] as const

  const [value, setValue] = useState(150000)
  const [contribution, setContribution] = useState(10)
  const [buyout, setBuyout] = useState(1)
  const [period, setPeriod] = useState(60)
  const [vehicleDetails, setVehicleDetails] = useState('')
  const [financingObject, setFinancingObject] = useState('')

  const estimatedRate = useMemo(() => {
    return calculateLeaseInstallment(value, contribution, buyout, period)
  }, [value, contribution, buyout, period])

  const cards = tabIds.map((id, i) => ({
    id,
    icon: <img src={CARD_ICONS[i]} alt={CARD_ALTS[i]} className='w-[100px] h-auto' />,
    title: t(`businessCalc.cards.${i}.title`),
    subtitle: t(`businessCalc.cards.${i}.subtitle`),
  }))

  const isDalajDisabled = activeTab === 'other' && financingObject.trim().length < 4

  function handleDalej() {
    onConfirm({ activeTab, value, contribution, buyout, period, vehicleDetails, financingObject })
    document.getElementById('book-meeting')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="calculator" className="py-24 lg:py-32 xl:py-32 bg-[#F2F5F9] w-full relative">
      <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-12">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 px-4">
          <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">{t('businessCalc.heading')}</h2>
          <h3 className="text-[clamp(1.8rem,8vw,2.5rem)] md:text-[clamp(2.5rem,6vw,3.2rem)] lg:text-[clamp(2.2rem,5vw,3.8rem)] xl:text-6xl font-black text-navy leading-[1.1] tracking-tighter uppercase italic">
            {t('businessCalc.title')} <span className="text-primary italic">{t('businessCalc.titleAccent')}</span>
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => {
            const isActive = activeTab === card.id
            return (
              <button
                key={card.id}
                onClick={() => {
                  if (activeTab !== card.id) {
                    setActiveTab(card.id)
                    setVehicleDetails('')
                    setFinancingObject('')
                    setValue(150000)
                    setContribution(10)
                    setBuyout(1)
                    setPeriod(60)
                  }
                }}
                className={`
                  flex flex-col items-center justify-center p-6 rounded-2xl text-center
                  transition-all duration-300 transform outline-none border-2
                  ${isActive
                    ? 'bg-[#FEFCE8] border-primary shadow-lg scale-105 z-10'
                    : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-primary/50'
                  }
                `}
              >
                <div className={`mb-4 ${isActive ? 'text-dark' : 'text-gray-800'}`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{card.title}</h3>
                <p className="text-sm font-medium text-gray-400 max-w-[200px] leading-relaxed">
                  {card.subtitle}
                </p>
              </button>
            )
          })}
        </div>

        {/* Vehicle search (for new/used) */}
        {(activeTab === 'new' || activeTab === 'used') && (
          <div className="flex justify-center mb-16 animate-slide-up">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm border border-gray-100 p-2 relative overflow-hidden flex items-center">
              <input
                type="text"
                placeholder={t('businessCalc.searchPlaceholder')}
                value={vehicleDetails}
                onChange={(e) => setVehicleDetails(e.target.value)}
                className="w-full py-4 text-center text-gray-700 bg-transparent outline-none placeholder:text-gray-400 font-medium"
              />
            </div>
          </div>
        )}

        {/* Other: description field */}
        {activeTab === 'other' && (
          <div className="flex justify-center mb-16 animate-slide-up">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm border border-gray-100 p-4 relative overflow-hidden">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                {t('businessCalc.other.label')}
              </label>
              <textarea
                placeholder={t('businessCalc.other.placeholder')}
                value={financingObject}
                onChange={(e) => setFinancingObject(e.target.value)}
                rows={3}
                className="w-full text-gray-700 bg-transparent outline-none placeholder:text-gray-400 font-medium resize-none focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Calculator Panel */}
        <Reveal variant="scale">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[500px]">

            {/* Left panel */}
            <div className="bg-gray-50 p-10 lg:p-14 xl:p-20 w-full lg:w-[45%] flex flex-col justify-center border-r border-gray-100">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">{t('businessCalc.left.badge')}</h4>
              <h3 className="text-[clamp(1.5rem,6vw,2.2rem)] md:text-[clamp(2rem,5vw,2.8rem)] lg:text-[clamp(1.75rem,4vw,3.2rem)] xl:text-5xl font-black text-navy mb-8 tracking-tighter leading-[1] uppercase italic">
                {t('businessCalc.left.title')} <br/>
                <span className="text-primary italic">{t('businessCalc.left.titleAccent')}</span>
              </h3>

              <p className="text-gray-500 font-medium text-sm lg:text-base xl:text-lg leading-relaxed mb-10 max-w-sm">
                {t('businessCalc.left.description')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-[10px] font-bold text-navy uppercase tracking-wider">{t('businessCalc.left.noHiddenCosts')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-[10px] font-bold text-navy uppercase tracking-wider">{t('businessCalc.left.fullFinancing')}</span>
                </div>
              </div>
            </div>

            {/* Right panel — sliders only */}
            <div className="p-10 lg:p-14 xl:p-20 w-full lg:w-[55%] flex flex-col justify-center bg-white relative">
              <div className="space-y-8 animate-fade-in">
                <h4 className="text-xl font-black uppercase italic text-navy">{t('businessCalc.right.heading')}</h4>

                {/* Slider: value */}
                <div>
                  <div className="flex justify-between items-center mb-4 text-sm font-bold text-dark tracking-wide">
                    <span>{t('businessCalc.sliders.value')}</span>
                    <span className="text-primary">{value.toLocaleString('pl-PL')} PLN</span>
                  </div>
                  <input
                    type="range" min="20000" max="1000000" step="1000"
                    value={value} onChange={(e) => setValue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary border border-gray-200"
                  />
                </div>

                {/* Sliders: contribution + buyout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex justify-between items-center mb-4 text-sm font-bold text-dark tracking-wide">
                      <span>{t('businessCalc.sliders.contribution')} {contribution}%</span>
                    </div>
                    <input
                      type="range" min="0" max="45"
                      value={contribution} onChange={(e) => setContribution(Number(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary border border-gray-200"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-4 text-sm font-bold text-dark tracking-wide">
                      <span>{t('businessCalc.sliders.buyout')} {buyout}%</span>
                    </div>
                    <input
                      type="range" min="1" max="50"
                      value={buyout} onChange={(e) => setBuyout(Number(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary border border-gray-200"
                    />
                  </div>
                </div>

                {/* Slider: period */}
                <div>
                  <div className="flex justify-between items-center mb-4 text-sm font-bold text-dark tracking-wide">
                    <span>{t('businessCalc.sliders.period')}</span>
                    <span className="text-primary">{period} mc</span>
                  </div>
                  <input
                    type="range" min="12" max="60" step="1"
                    value={period} onChange={(e) => setPeriod(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary border border-gray-200"
                  />
                </div>

                <hr className="border-gray-100" />

                {/* Result & button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-auto">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t('businessCalc.result.label')}</p>
                    <div className="text-[clamp(2rem,10vw,3rem)] md:text-[clamp(3rem,8vw,4rem)] lg:text-[clamp(3rem,5vw,4rem)] xl:text-6xl font-black text-dark tracking-tighter flex items-baseline leading-none">
                      {formatCurrency(estimatedRate)} <span className="text-[clamp(1rem,4vw,1.5rem)] lg:text-2xl xl:text-3xl font-bold ml-1">PLN</span>
                    </div>
                  </div>

                  <CTAButton
                    variant="yellow"
                    className="w-full sm:w-auto group"
                    disabled={isDalajDisabled}
                    onClick={handleDalej}
                  >
                    {t('businessCalc.btn.toMeeting')}
                    <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
