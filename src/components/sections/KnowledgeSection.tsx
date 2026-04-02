import { Coins, ArrowRight } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'
import placeholderImg from '@/assets/img/hero-company.webp' // fallback image 

export function KnowledgeSection() {
  return (
    <section id="knowledge" className="py-32 bg-white w-full">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Lewy panel - Webinar (Jasny Styl Premium) */}
          <div className="relative w-full lg:w-[65%] rounded-[2.5rem] bg-gray-50 p-10 lg:p-14 text-navy overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between items-start">
            
            <div className="relative z-10 w-full lg:w-[60%] flex flex-col">
              <span className="inline-block bg-[#FEFCE8] text-primary font-black text-[10px] uppercase tracking-widest px-3 py-1 mb-8 self-start border border-yellow-100">
                WEBINAR
              </span>
              
              <h3 className="text-3xl lg:text-5xl font-black text-navy leading-[1] tracking-tighter mb-8 uppercase italic">
                Jak zacząć <br /> bez <span className="text-primary italic">Kapitału?</span>
              </h3>
              
              <p className="text-gray-500 font-medium text-sm lg:text-base leading-relaxed mb-10 max-w-[90%]">
                Odkryj strategie finansowania, które pozwalają na rozwój skali bez angażowania kapitału własnego. Zapisz się na darmowe spotkanie.
              </p>

              <CTAButton variant="yellow" className="group self-start">
                Zapisz się teraz
                <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
              </CTAButton>
            </div>

            {/* Kreatywnie osadne zdjęcie (Perspective / Rotate) */}
            <div className="hidden lg:block absolute right-[-5%] top-[10%] bottom-[10%] w-1/2 overflow-visible perspective-[1200px]">
               <div className="w-full h-full transform pb-12 rotate-y-[-10deg] rotate-z-[2deg] rounded-xl overflow-hidden shadow-2xl relative">
                 <img 
                    src={placeholderImg} 
                    alt="Webinar Spotkanie" 
                    className="w-full h-full object-cover scale-110"
                 />
               </div>
            </div>

          </div>

          {/* Prawy panel - Cash Back */}
          <div className="w-full lg:w-[35%] rounded-[2.5rem] bg-white p-10 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col relative overflow-hidden group">
            {/* Dekoracyjna obwódka (border na górze i z prawej w kolorze żółtym) - realizowane przez absolutny element */}
            <div className="absolute top-0 right-0 w-full h-[3px] bg-gradient-to-r from-transparent to-primary/80" />
            <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-primary/80 to-transparent" />
            
            <div className="mb-8">
              <div className="bg-[#FEFCE8] p-3 rounded-lg inline-flex items-center justify-center text-primary mb-6">
                <Coins size={24} strokeWidth={2} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-navy tracking-tight mb-4 uppercase italic">
                Cash <span className="text-primary italic">Back</span>
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Odzyskaj część wpłaconych środków przy każdej transakcji. Transparentne bonusy dla stałych klientów.
              </p>
            </div>

            <div className="mt-auto pt-8 flex">
              <CTAButton href="#warunki" variant="outline-yellow" size="sm" className="group !text-primary hover:!text-dark">
                Sprawdź warunki
                <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
              </CTAButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
