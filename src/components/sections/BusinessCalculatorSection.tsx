import { Car, History, PlusCircle, ArrowRight } from 'lucide-react'
import { useState, useMemo } from 'react'
import { calculateLeaseInstallment, formatCurrency } from '@/lib/calculator'
import { CTAButton } from '@/components/ui/CTAButton'

export function BusinessCalculatorSection() {
  const [activeTab, setActiveTab] = useState<'new' | 'used' | 'other'>('new')
  
  const [value, setValue] = useState(150000)
  const [contribution, setContribution] = useState(10)
  const [buyout, setBuyout] = useState(1)
  const [period, setPeriod] = useState(60)

  const estimatedRate = useMemo(() => {
    return calculateLeaseInstallment(value, contribution, buyout, period)
  }, [value, contribution, buyout, period])

  // Opcje kart
  const cards = [
    {
      id: 'new',
      icon: <Car size={28} strokeWidth={1.5} />,
      title: 'Nowy Pojazd',
      subtitle: 'Z salonu z pełnym rabatem',
    },
    {
      id: 'used',
      icon: <History size={28} strokeWidth={1.5} />,
      title: 'Używany',
      subtitle: 'Sprawdzone źródło, niska rata',
    },
    {
      id: 'other',
      icon: <PlusCircle size={28} strokeWidth={1.5} />,
      title: 'Coś innego',
      subtitle: 'Potrzebujesz finansowania na coś innego dla swojego biznesu? Daj nam znać!',
    }
  ] as const

  return (
    <section id="calculator" className="py-32 bg-[#F2F5F9] w-full">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        
        {/* Nagłówek sekcji */}
        <div className="flex flex-col items-center text-center mb-16 px-4">
          <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Wybierz Swoją Drogę</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[1.1] tracking-tighter uppercase italic">
            Elastyczne <span className="text-primary italic">Rozwiązania</span>
          </h3>
        </div>

        {/* Karty wyboru */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => {
            const isActive = activeTab === card.id
            return (
              <button
                key={card.id}
                onClick={() => setActiveTab(card.id)}
                className={`
                  flex flex-col items-center justify-center p-8 rounded-2xl text-center
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

        {/* Wyszukiwarka (pojawia się tylko dla pojazdów) */}
        {(activeTab === 'new' || activeTab === 'used') && (
          <div className="flex justify-center mb-16 animate-slide-up">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm border border-gray-100 p-2 relative overflow-hidden flex items-center">
              <input 
                type="text"
                placeholder="Wpisz markę i model pojazdu..."
                className="w-full py-4 text-center text-gray-700 bg-transparent outline-none placeholder:text-gray-400 font-medium"
              />
            </div>
          </div>
        )}

        {/* Główne okno kalkulatora biznesowego */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Lewy panel (Jasny - Styl Profesjonalny) */}
          <div className="bg-gray-50 p-10 lg:p-14 w-full lg:w-[45%] flex flex-col justify-center border-r border-gray-100">
            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">Analiza Finansowa</h4>
            <h3 className="text-3xl lg:text-5xl font-black text-navy mb-8 tracking-tighter leading-[1] uppercase italic">
              Pełny Plan <br/>
              <span className="text-primary italic">Inwestycyjny</span>
            </h3>
            
            <p className="text-gray-500 font-medium text-sm lg:text-base leading-relaxed mb-10 max-w-sm">
              Skorzystaj z naszego zaawansowanego kalkulatora, aby dokładnie zaplanować koszty finansowania dla Twojej floty lub sprzętu. Gwarantujemy najniższe stopy procentowe na rynku.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-[10px] font-bold text-navy uppercase tracking-wider">Brak ukrytych kosztów</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-[10px] font-bold text-navy uppercase tracking-wider">Finansowanie 100%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-[10px] font-bold text-navy uppercase tracking-wider">Szybka decyzja</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-[10px] font-bold text-navy uppercase tracking-wider">Najniższe RRSO</span>
              </div>
            </div>
          </div>

          {/* Prawy panel (Biały - Formularz) */}
          <div className="p-10 lg:p-14 w-full lg:w-[55%] flex flex-col justify-center bg-white">
            <div className="space-y-10">
              
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between items-center mb-4 text-sm font-bold text-dark tracking-wide">
                  <span>Wartość przedmiotu (netto)</span>
                  <span className="text-primary">{value.toLocaleString('pl-PL')} PLN</span>
                </div>
                <input 
                  type="range" 
                  min="20000" 
                  max="1000000" 
                  step="1000"
                  value={value} 
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary border border-gray-200"
                />
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between items-center mb-4 text-sm font-bold text-dark tracking-wide">
                  <span>Wpłata własna (%)</span>
                  <span className="text-primary">{contribution}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="45" 
                  value={contribution} 
                  onChange={(e) => setContribution(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary border border-gray-200"
                />
              </div>

              {/* Slider - Buyout */}
              <div>
                <div className="flex justify-between items-center mb-4 text-sm font-bold text-dark tracking-wide">
                  <span>Wykup końcowy (%)</span>
                  <span className="text-primary">{buyout}%</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  value={buyout} 
                  onChange={(e) => setBuyout(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary border border-gray-200"
                />
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex justify-between items-center mb-4 text-sm font-bold text-dark tracking-wide">
                  <span>Okres leasingu (mc)</span>
                  <span className="text-primary">{period} mc</span>
                </div>
                <input 
                  type="range" 
                  min="12" 
                  max="60" 
                  step="1"
                  value={period} 
                  onChange={(e) => setPeriod(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary border border-gray-200"
                />
              </div>

            </div>

            <hr className="my-10 border-gray-100" />

            {/* Wynik i przycisk */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4 mt-auto">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Twoja rata miesięczna
                </p>
                <div className="text-4xl lg:text-5xl font-black text-dark tracking-tighter flex items-baseline leading-none">
                  {formatCurrency(estimatedRate)} <span className="text-xl lg:text-2xl font-bold ml-1">PLN</span>
                </div>
              </div>
              
              <CTAButton variant="yellow" className="w-full sm:w-auto group">
                WYŚLIJ WNIOSEK
                <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
              </CTAButton>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
