import { Gauge, Landmark, ShieldCheck } from 'lucide-react'

export function WhyUsSection() {
  const features = [
    {
      id: 1,
      icon: <Gauge size={32} className="text-primary" strokeWidth={2} />,
      title: 'SZYBKOŚĆ DECYZJI',
      description: 'Decyzja kredytowa nawet w 2 godziny od złożenia wniosku online.',
    },
    {
      id: 2,
      icon: <Landmark size={32} className="text-primary" strokeWidth={2} />,
      title: 'STABILNOŚĆ',
      description: 'Współpracujemy z największymi bankami w Polsce i Europie.',
    },
    {
      id: 3,
      icon: <ShieldCheck size={32} className="text-primary" strokeWidth={2} />,
      title: 'BEZPIECZEŃSTWO',
      description: 'Pełne ubezpieczenie GAP w pakiecie dla każdego klienta biznesowego.',
    }
  ]

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-black text-white w-full border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-20 px-4">
          <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Nasze Atuty</h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1] tracking-tighter uppercase italic">
            Dlaczego <br className="md:hidden" />
            <span className="text-primary italic">Pewny Leasing?</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature) => (
            <div key={feature.id} className="group flex flex-col items-center text-center p-8 rounded-[2rem] border border-white/5 hover:border-primary/50 transition-all duration-500 bg-[#0A0A0A] hover:shadow-[0_0_40px_rgba(251,191,36,0.05)]">
              <div className="w-20 h-20 bg-navy rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-black tracking-tight mb-4 whitespace-nowrap uppercase italic">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-[280px] group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
