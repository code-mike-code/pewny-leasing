import { Linkedin, Instagram } from 'lucide-react'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F8FAFC] pt-20 pb-8 overflow-hidden relative border-t border-gray-100 flex flex-col justify-between min-h-[500px]">
      
      {/* Główne kolumny */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24 z-10 relative">
        
        {/* Kolumna 1: Marka */}
        <div className="flex flex-col">
          <h3 className="text-navy font-bold text-lg uppercase tracking-wide mb-4">
            PEWNY LEASING
          </h3>
          <p className="text-gray-500 font-medium text-sm max-w-[240px] leading-relaxed">
            Twoje wsparcie w świecie finansowania pojazdów i maszyn.
          </p>
        </div>

        {/* Kolumna 2: Menu */}
        <div className="flex flex-col">
          <h4 className="text-navy font-bold text-xs uppercase tracking-widest mb-6">MENU</h4>
          <ul className="space-y-4">
            <li><NavLink href="#book-meeting" className="text-gray-500 hover:text-navy text-sm font-medium transition-colors">Umów spotkanie</NavLink></li>
            <li><NavLink href="#services" className="text-gray-500 hover:text-navy text-sm font-medium transition-colors">Oferta</NavLink></li>
            <li><NavLink href="#calculator" className="text-[#2F855A] font-bold text-sm hover:text-[#276749] transition-colors">Kalkulator</NavLink></li>
            <li><NavLink href="#knowledge" className="text-gray-500 hover:text-navy text-sm font-medium transition-colors">Wiedza</NavLink></li>
          </ul>
        </div>

        {/* Kolumna 3: Firma */}
        <div className="flex flex-col">
          <h4 className="text-navy font-bold text-xs uppercase tracking-widest mb-6">FIRMA</h4>
          <ul className="space-y-4">
            <li><NavLink href="#kariera" className="text-gray-500 hover:text-navy text-sm font-medium transition-colors">Kariera</NavLink></li>
            <li><NavLink href="#contact" className="text-gray-500 hover:text-navy text-sm font-medium transition-colors">Kontakt</NavLink></li>
            <li><NavLink href="#regulamin" className="text-gray-500 hover:text-navy text-sm font-medium transition-colors">Regulamin</NavLink></li>
            <li><NavLink href="#polityka-prywatnosci" className="text-gray-500 hover:text-navy text-sm font-medium transition-colors">Polityka Prywatności</NavLink></li>
          </ul>
        </div>

        {/* Kolumna 4: Social Media */}
        <div className="flex flex-col">
          <h4 className="text-navy font-bold text-xs uppercase tracking-widest mb-6">SOCIAL MEDIA</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white border border-gray-100 rounded shadow-sm flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all">
              <Linkedin size={20} strokeWidth={2} />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white border border-gray-100 rounded shadow-sm flex items-center justify-center text-gray-400 hover:text-[#E1306C] hover:border-[#E1306C]/30 transition-all">
              <Instagram size={20} strokeWidth={2} />
            </a>
          </div>
        </div>

      </div>

      {/* Tło - Gigantyczny napis Watermark */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none z-0">
        <span className="text-[12vw] font-black tracking-[0.2em] text-[#EDF2F7] leading-none whitespace-nowrap">
          PEWNY LEASING
        </span>
      </div>

      {/* Bottom Bar: Copyrights */}
      <div className="relative z-10 w-full px-6 text-center pt-8 border-t border-gray-200 mt-auto">
        <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
          &copy; {currentYear} PEWNY LEASING. WSZELKIE PRAWA ZASTRZEŻONE.
        </p>
      </div>

    </footer>
  )
}
