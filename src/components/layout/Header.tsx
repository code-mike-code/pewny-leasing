import { useState, useEffect } from 'react'
import { Instagram, Facebook, Youtube, Phone, MessageCircle, X, Menu } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'

export function Header() {
  const phone = '+48 123 456 789' // TODO: przenieść do i18n
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState<'pl' | 'en'>('pl') // TODO: podpiąć pod i18n
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar - Żółty pasek: zawsze widoczny na desktop, na mobile pojawia się po scroll */}
      <div className={`bg-primary text-dark font-medium text-sm flex justify-between items-center z-50 overflow-hidden transition-all duration-300 ease-in-out ${
        scrolled ? 'h-10 opacity-100' : 'h-0 opacity-0 lg:h-10 lg:opacity-100'
      }`}>
        <div className="flex items-center h-full pl-4 lg:pl-10">
          <a href="#" aria-label="Instagram" className="hover-wipe hover-wipe-dark px-4 flex items-center h-full transition-colors"><Instagram size={18} /></a>
          <a href="#" aria-label="Facebook" className="hover-wipe hover-wipe-dark px-4 flex items-center h-full transition-colors ml-[-12px]"><Facebook size={18} /></a>
          <a href="#" aria-label="YouTube" className="hover-wipe hover-wipe-dark px-4 flex items-center h-full transition-colors ml-[-12px]"><Youtube size={18} /></a>
        </div>
        <div className="h-full pr-4 lg:pr-10 tracking-widest font-semibold flex items-center">
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover-wipe hover-wipe-dark px-6 flex items-center h-full transition-colors ml-[-12px]">
            {phone}
          </a>
        </div>
      </div>

      {/* Main Header - Czarny pasek */}
      <div className="bg-[#0A0A0A] border-b border-dark-card text-white">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 h-[76px] flex items-center justify-between">
          
          {/* Lewe Menu */}
          <nav className="hidden lg:flex items-center font-semibold text-sm h-full pl-6">
            <a href="#book-meeting" className="hover-wipe hover-wipe-yellow text-white flex items-center h-full px-8 transition-colors">Umów spotkanie</a>
            <a href="#services" className="hover-wipe hover-wipe-yellow text-white flex items-center h-full px-8 transition-colors ml-[-12px]">Oferta</a>
            <a href="#calculator" className="hover-wipe hover-wipe-yellow text-white flex items-center h-full px-8 border-b-2 border-primary transition-colors ml-[-12px]">Kalkulator</a>
            <a href="#knowledge" className="hover-wipe hover-wipe-yellow text-white flex items-center h-full px-8 transition-colors ml-[-12px]">Wiedza</a>
          </nav>

          {/* Logo Centrum */}
          <div className="flex-1 flex justify-center">
            <a href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
              Pewny<span className="font-medium text-gray-300">Leasing</span>
            </a>
          </div>

          {/* Prawe Przyciski i Ikony */}
          <div className="hidden lg:flex items-center h-full pr-6">
            <CTAButton href="#contact" variant="outline-yellow" size="sm" className="font-bold tracking-wider uppercase h-full !px-8">
              SZYBKI KONTAKT
            </CTAButton>
            <div className="flex items-center h-full text-gray-300 ml-[-12px]">
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover-wipe hover-wipe-yellow h-full px-6 flex items-center transition-colors"><Phone size={20} strokeWidth={2} /></a>
              <a 
                href={`https://wa.me/${phone.replace(/[\s+]/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Napisz na WhatsApp" 
                className="hover-wipe hover-wipe-yellow h-full px-6 flex items-center transition-colors ml-[-12px]"
              >
                <MessageCircle size={20} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Mobile menu Button */}
          <button 
            onClick={() => setMobileOpen(o => !o)}
            className="lg:hidden text-white ml-auto p-2"
            aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      <div className={`lg:hidden bg-[#0A0A0A] border-b border-dark-card overflow-hidden transition-all duration-300 ease-in-out ${
        mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="flex flex-col font-semibold text-sm px-4 py-2">
          <a href="#book-meeting" onClick={() => setMobileOpen(false)} className="text-white py-4 px-4 border-b border-dark-card hover:bg-primary hover:text-dark transition-colors">Umów spotkanie</a>
          <a href="#services" onClick={() => setMobileOpen(false)} className="text-white py-4 px-4 border-b border-dark-card hover:bg-primary hover:text-dark transition-colors">Oferta</a>
          <a href="#calculator" onClick={() => setMobileOpen(false)} className="text-white py-4 px-4 border-b border-dark-card hover:bg-primary hover:text-dark transition-colors">Kalkulator</a>
          <a href="#knowledge" onClick={() => setMobileOpen(false)} className="text-white py-4 px-4 border-b border-dark-card hover:bg-primary hover:text-dark transition-colors">Wiedza</a>
          <div className="py-4 px-4 flex items-center gap-6">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
              <Phone size={18} /> {phone}
            </a>
          </div>
          <div className="mt-4 py-4 px-4">
            <CTAButton href="#contact" variant="outline-yellow" size="sm" className="w-full font-bold tracking-wider uppercase justify-center">
              SZYBKI KONTAKT
            </CTAButton>
          </div>

          {/* Separator */}
          <div className="mx-4 border-t border-dark-card" />

          {/* Footer mobilnego menu: Social + język */}
          <div className="px-4 py-4 flex items-center justify-between">
            {/* Ikony social media */}
            <div className="flex items-center gap-3 text-gray-400">
              <a href="#" aria-label="Instagram" className="p-3 hover:text-primary transition-colors"><Instagram size={24} /></a>
              <a href="#" aria-label="Facebook" className="p-3 hover:text-primary transition-colors"><Facebook size={24} /></a>
              <a href="#" aria-label="YouTube" className="p-3 hover:text-primary transition-colors"><Youtube size={24} /></a>
            </div>

            {/* Przełącznik języka */}
            <div className="flex items-center gap-1 text-xs font-bold tracking-widest">
              <button
                onClick={() => setLang('pl')}
                className={`px-3 py-1.5 transition-colors ${
                  lang === 'pl' ? 'bg-primary text-dark' : 'text-gray-400 hover:text-white'
                }`}
              >
                PL
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 transition-colors ${
                  lang === 'en' ? 'bg-primary text-dark' : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
