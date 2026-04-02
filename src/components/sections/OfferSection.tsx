import { ShieldCheck, Zap, Globe, Car, Building, ArrowRight } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'
import supercarImg from '@/assets/img/supercar_offer_premium_1775045858058.png'
import equipmentImg from '@/assets/img/specialized_equipment_financing_1775045894211.png'

export function OfferSection() {
  const categories = [
    {
      icon: <Car className="text-primary" size={28} />,
      title: "Finansowanie Pojazdów",
      description: "Leasing operacyjny i konsumencki dla każdej klasy pojazdów. Od miejskich aut rodzinnych po segment premium.",
      tags: ["Leasing", "Pożyczka", "Najem"]
    },
    {
      icon: <ShieldCheck className="text-primary" size={28} />,
      title: "Wynajem Długoterminowy",
      description: "Stała miesięczna rata obejmująca serwis, ubezpieczenie i opony. Ciesz się jazdą bez zmartwień o koszty.",
      tags: ["Full Service Leasing", "Abonament"]
    },
    {
      icon: <Building className="text-primary" size={28} />,
      title: "Sprzęt Profesjonalny",
      description: "Finansowanie maszyn budowlanych, sprzętu medycznego oraz linii produkcyjnych na preferencyjnych warunkach.",
      tags: ["Maszyny", "Medycyna", "IT"]
    },
    {
      icon: <Globe className="text-primary" size={28} />,
      title: "Dostęp do Rabatów",
      description: "Dzięki współpracy z największymi sieciami dealerskimi w Polsce, oferujemy rabaty niedostępne dla klientów indywidualnych.",
      tags: ["Rabaty Flotowe", "Upusty"]
    }
  ]

  return (
    <section id="services" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-3xl">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Nasza Oferta</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[1.1] tracking-tighter uppercase italic">
              Finansowanie szyte na <br className="hidden md:block" />
              <span className="text-primary">miarę Twoich potrzeb</span>
            </h3>
          </div>
          <p className="text-gray-500 font-medium max-w-sm lg:mb-2">
            Kompleksowe doradztwo finansowe i najszersza gama pojazdów na rynku – od rodzinnej Toyoty po ekskluzywne Porsche i Lamborghini.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {categories.map((cat, idx) => (
            <div key={idx} className="group p-8 border border-gray-100 rounded-2xl hover:border-primary transition-all duration-300 hover:shadow-xl bg-white flex flex-col h-full">
              <div className="mb-6 p-4 bg-gray-50 rounded-xl group-hover:bg-yellow-50 transition-colors self-start">
                {cat.icon}
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">{cat.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Blocks: Supercars & Equipment */}
        <div className="space-y-8">
          
          {/* Supercars Block */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-navy min-h-[500px] flex items-center">
            <div className="absolute inset-0 z-0">
              <img 
                src={supercarImg} 
                alt="Ekskluzywne samochody sportowe Lamborghini Porsche Bugatti leasing" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
            </div>
            
            <div className="relative z-10 p-8 md:p-16 lg:p-20 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest mb-6">
                <Zap size={16} /> 
                Luxury & Sports Collection
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight uppercase italic">
                Od rodzinnej Toyoty do <br />
                <span className="text-primary italic">Lamborghini i Bugatti</span>
              </h3>
              <p className="text-gray-300 font-medium text-sm md:text-base mb-10 leading-relaxed">
                Spełniamy motoryzacyjne marzenia. Oferujemy finansowanie na auta egzotyczne, kolekcjonerskie i super-samochody. Dzięki naszym kontaktom w całej Europie, znajdziemy dla Ciebie unikalny egzemplarz.
              </p>
              <CTAButton variant="yellow" className="w-full sm:w-auto group">
                SPRAWDŹ DOSTĘPNOŚĆ
                <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
              </CTAButton>
            </div>
          </div>

          {/* Equipment Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center border border-gray-100">
              <h3 className="text-3xl md:text-4xl font-black text-navy mb-6 leading-tight uppercase italic">
                Sprzęt dla <br />
                <span className="text-primary">profesjonalistów</span>
              </h3>
              <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                Leasing i wynajem sprzętu specjalistycznego to klucz do rozwoju Twojego biznesu. Finansujemy urządzenia medyczne, maszyny budowlane, serwery IT oraz wyposażenie biur. 
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-xs font-bold text-navy uppercase">Medicina</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-xs font-bold text-navy uppercase">Industria</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-xs font-bold text-navy uppercase">Technologia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-xs font-bold text-navy uppercase">Transport</span>
                </div>
              </div>
              <CTAButton variant="outline-yellow" size="sm" className="self-start group !text-primary hover:!text-dark">
                DOWIEDZ SIĘ WIĘCEJ
                <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
              </CTAButton>
            </div>
            
            <div className="rounded-[2.5rem] overflow-hidden min-h-[400px]">
              <img 
                src={equipmentImg} 
                alt="Finansowanie maszyn i sprzętu medycznego leasing profesjonalny" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
