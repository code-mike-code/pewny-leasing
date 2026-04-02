import { ArrowRight } from 'lucide-react'
import { Calculator } from '@/components/calculator/Calculator'
// Używam dummy placeholder aby symulować postać z makiety
import heroBg from '@/assets/img/hero-taxi.webp' // Zastąpione w CSS lub tymczasowo jako bg

export function HeroSection() {
  return (
    <>
      <section 
        id="hero" 
        className="relative flex items-start lg:items-center bg-[#050505] overflow-hidden pt-[100px] lg:pt-[116px] pb-12 min-h-screen"
      >
        {/* Background Image / Placeholder */}
        <div 
           className="absolute inset-0 opacity-40 mix-blend-overlay"
           style={{
             backgroundImage: `url(${heroBg})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
           }}
           aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            
            {/* Left Side: Headings & Buttons */}
            <div className="flex flex-col justify-center">
              <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Pewny Leasing</h2>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase italic mb-8">
                <span className="block">Architektura</span>
                <span className="block text-primary italic">Twojego Leasingu</span>
              </h1>
              
              <p className="text-gray-300 font-medium text-sm md:text-lg max-w-xl mb-10 leading-relaxed">
                Jakość wykonania, udowodniona. Nie tylko obiecana. Profesjonalne wsparcie w finansowaniu Twojego biznesu i floty marzeń.
              </p>

              {/* CTA widoczne tylko na desktop */}
              <div className="hidden lg:flex flex-row gap-4">
                <MenuCTAButtonPrimary />
                <MenuCTAButtonSecondary />
              </div>
            </div>

            {/* Right Side: Calculator Widget + CTA na mobile/tablet */}
            <div className="flex flex-col gap-4 justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-full mx-auto lg:mx-0">
                <Calculator />
              </div>

              {/* CTA widoczne tylko na mobile i tablet (pod kalkulatorem) */}
              <div className="flex lg:hidden flex-col sm:flex-row gap-4">
                <MenuCTAButtonPrimary />
                <MenuCTAButtonSecondary />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

function MenuCTAButtonPrimary() {
  return (
    <a href="#kontakt" className="hover-wipe hover-wipe-dark shape-rhombus bg-primary text-dark font-bold border-b-2 border-primary px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 group">
      SZYBKI KONTAKT
      <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
    </a>
  )
}

function MenuCTAButtonSecondary() {
  return (
    <a href="#oferta" className="hover-wipe hover-wipe-dark shape-rhombus bg-primary text-dark font-bold border-b-2 border-primary px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3 group">
      POJAZDY Z RABATEM
      <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
    </a>
  )
}
