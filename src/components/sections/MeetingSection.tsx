import { Video, Building2, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { CTAButton } from '@/components/ui/CTAButton'

export function MeetingSection() {
  const [activeMeeting, setActiveMeeting] = useState<'online' | 'personal'>('online')

  return (
    <section id="book-meeting" className="py-32 bg-white w-full">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Lewa kolumna: Wybór spotkania */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4 text-left">Zarezerwuj Termin</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[1.1] tracking-tighter uppercase italic mb-6">
              Spotkajmy się <br className="hidden md:block" />
              <span className="text-primary italic">Przy Kawie</span>
            </h3>
            <p className="text-gray-500 font-medium mb-10 max-w-sm leading-relaxed text-sm md:text-base">
              Wolisz rozmowę w cztery oczy czy szybki call? Wybierz formę, która Ci najbardziej odpowiada. Nasi eksperci czekają na Twoje pytania.
            </p>

            <div className="space-y-4">
              {/* Opcja 1: Online */}
              <button 
                onClick={() => setActiveMeeting('online')}
                className={`
                  w-full text-left flex items-center p-6 rounded-xl transition-all duration-300 outline-none
                  ${activeMeeting === 'online' 
                    ? 'bg-[#F2F5F9] border-transparent shadow-sm' 
                    : 'bg-[#F8FAFC] border border-transparent hover:bg-[#F2F5F9]'
                  }
                `}
              >
                <div className="bg-white p-3 rounded-lg shadow-sm mr-6 text-primary flex items-center justify-center">
                  <Video size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-0.5">Spotkanie Online</h3>
                  <p className="text-gray-500 text-sm font-medium">Zoom, Teams lub Google Meet</p>
                </div>
              </button>

              {/* Opcja 2: Osobiste */}
              <button 
                onClick={() => setActiveMeeting('personal')}
                className={`
                  w-full text-left flex items-center p-6 rounded-xl transition-all duration-300 outline-none
                  ${activeMeeting === 'personal' 
                    ? 'bg-[#F2F5F9] border-transparent shadow-sm' 
                    : 'bg-[#F8FAFC] border border-transparent hover:bg-[#F2F5F9]'
                  }
                `}
              >
                <div className="bg-white p-3 rounded-lg shadow-sm mr-6 text-primary flex items-center justify-center">
                  <Building2 size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-0.5">Spotkanie Osobiste</h3>
                  <p className="text-gray-500 text-sm font-medium">W naszym biurze lub u Ciebie</p>
                </div>
              </button>
            </div>
          </div>

          {/* Prawa kolumna: Formularz danych */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#F9FAFB] rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
              <h3 className="text-xl font-black text-navy tracking-tight mb-10 uppercase italic">
                Podaj dane do <span className="text-primary italic">Twojej oferty</span>
              </h3>

              <div className="space-y-8">
                {/* Pole 1: NIP full-width */}
                <div className="w-full group">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-focus-within:text-navy transition-colors">
                    NIP Firmy
                  </label>
                  <input 
                    type="text" 
                    placeholder="000-000-00-00" 
                    className="w-full bg-transparent border-b border-gray-200 py-2 pt-1 pb-3 text-gray-800 font-medium placeholder:text-gray-400 focus:outline-none focus:border-navy transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-8 sm:gap-6">
                  {/* Pole 2: Email half-width */}
                  <div className="w-full sm:w-1/2 group">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-focus-within:text-navy transition-colors">
                      Email
                    </label>
                    <input 
                      type="email" 
                      placeholder="twoj@email.pl" 
                      className="w-full bg-transparent border-b border-gray-200 py-2 pt-1 pb-3 text-gray-800 font-medium placeholder:text-gray-400 focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>

                  {/* Pole 3: Telefon half-width */}
                  <div className="w-full sm:w-1/2 group">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-focus-within:text-navy transition-colors">
                      Telefon
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+48 000 000 000" 
                      className="w-full bg-transparent border-b border-gray-200 py-2 pt-1 pb-3 text-gray-800 font-medium placeholder:text-gray-400 focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                </div>

                {/* Przycisk */}
                <div className="pt-4">
                  <CTAButton variant="yellow" className="w-full group">
                    Otrzymaj ofertę w 15 minut
                    <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
