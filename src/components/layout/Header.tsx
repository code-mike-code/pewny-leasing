import { useState, useEffect } from 'react'
import { Phone, MessageCircle, X, Menu } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'
import { useLanguage } from '@/hooks/useLanguage'
import { useNavigate, useLocation } from 'react-router-dom'
import logoDark from '@/assets/logo/logo-dark-removebg.webp'

export function Header() {
  const { t, language, setLanguage } = useLanguage()
  const phone = t('contact.info.phone')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [topBarVisible, setTopBarVisible] = useState(true)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    let lastY = window.scrollY
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < 10) {
        setTopBarVisible(true)
      } else {
        setTopBarVisible(currentY < lastY)
      }
      lastY = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault()
    if (pathname === '/') {
      const target = document.querySelector(hash)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/' + hash)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={`bg-primary text-dark font-medium text-sm flex justify-end items-center z-50 overflow-hidden transition-all duration-300 ease-in-out ${
        topBarVisible ? 'h-10 opacity-100' : 'h-0 opacity-0'
      }`}>
        <div className="h-full pr-4 lg:pr-[clamp(1rem,3vw,2.5rem)] tracking-widest font-semibold flex items-center">
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover-wipe hover-wipe-dark px-6 flex items-center h-full transition-colors ml-[-12px]">
            {phone}
          </a>
          <div className="flex items-center h-full ml-[-12px]">
            <button
              onClick={() => setLanguage('pl')}
              aria-label="Język polski"
              aria-pressed={language === 'pl'}
              className={language === 'pl'
                ? 'shape-rhombus bg-dark text-primary px-5 h-full text-xs font-black tracking-widest'
                : 'hover-wipe hover-wipe-dark px-5 h-full text-xs font-black tracking-widest text-dark'
              }
            >
              PL
            </button>
            <button
              onClick={() => setLanguage('en')}
              aria-label="English language"
              aria-pressed={language === 'en'}
              className={language === 'en'
                ? 'shape-rhombus bg-dark text-primary px-5 h-full text-xs font-black tracking-widest ml-[-12px]'
                : 'hover-wipe hover-wipe-dark px-5 h-full text-xs font-black tracking-widest text-dark ml-[-12px]'
              }
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#0A0A0A] border-b border-dark-card text-white">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-[clamp(1rem,4vw,3rem)] h-[76px] flex items-center justify-between">

          {/* Left Nav */}
          <nav className="hidden lg:flex items-center font-semibold text-sm h-full pl-6">
            <a href="#book-meeting" onClick={e => handleSectionClick(e, '#book-meeting')} className="hover-wipe hover-wipe-yellow text-white flex items-center h-full px-[clamp(1rem,2.2vw,2rem)] transition-colors">{t('nav.bookMeeting')}</a>
            <a href="#services" onClick={e => handleSectionClick(e, '#services')} className="hover-wipe hover-wipe-yellow text-white flex items-center h-full px-[clamp(1rem,2.2vw,2rem)] transition-colors ml-[-12px]">{t('nav.offer')}</a>
            <a href="#calculator" onClick={e => handleSectionClick(e, '#calculator')} className="hover-wipe hover-wipe-yellow text-white flex items-center h-full px-[clamp(1rem,2.2vw,2rem)] border-b-2 border-primary transition-colors ml-[-12px]">{t('nav.calculator')}</a>
            <a href="#knowledge" onClick={e => handleSectionClick(e, '#knowledge')} className="hover-wipe hover-wipe-yellow text-white flex items-center h-full px-[clamp(1rem,2.2vw,2rem)] transition-colors ml-[-12px]">{t('nav.knowledge')}</a>
          </nav>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <a href="/" aria-label="Pewny Leasing – strona główna">
              <img src={logoDark} alt="Pewny Leasing" className="h-[76px] w-auto object-contain py-[4px]" />
            </a>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center h-full pr-6">
            <CTAButton
              href="#contact"
              onClick={e => { e.preventDefault(); if (pathname === '/') { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) } else { navigate('/#contact') } }}
              variant="outline-yellow"
              size="sm"
              className="font-bold tracking-wider uppercase h-full !px-[clamp(1.5rem,2.5vw,2.5rem)]"
            >
              {t('nav.quickContact')}
            </CTAButton>
            <div className="flex items-center h-full text-gray-300 ml-[-12px]">
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover-wipe hover-wipe-yellow h-full px-6 flex items-center transition-colors"><Phone size={20} strokeWidth={2} /></a>
              <a
                href={`https://wa.me/${phone.replace(/[\s+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
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
            aria-label={mobileOpen ? t('common.close') : t('nav.toggleMenu')}
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
          <a href="#book-meeting" onClick={e => { handleSectionClick(e, '#book-meeting'); setMobileOpen(false) }} className="text-white py-4 px-4 border-b border-dark-card hover:bg-primary hover:text-dark transition-colors">{t('nav.bookMeeting')}</a>
          <a href="#services" onClick={e => { handleSectionClick(e, '#services'); setMobileOpen(false) }} className="text-white py-4 px-4 border-b border-dark-card hover:bg-primary hover:text-dark transition-colors">{t('nav.offer')}</a>
          <a href="#calculator" onClick={e => { handleSectionClick(e, '#calculator'); setMobileOpen(false) }} className="text-white py-4 px-4 border-b border-dark-card hover:bg-primary hover:text-dark transition-colors">{t('nav.calculator')}</a>
          <a href="#knowledge" onClick={e => { handleSectionClick(e, '#knowledge'); setMobileOpen(false) }} className="text-white py-4 px-4 border-b border-dark-card hover:bg-primary hover:text-dark transition-colors">{t('nav.knowledge')}</a>
          <div className="py-4 px-4 flex items-center gap-4">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
              <Phone size={18} /> {phone}
            </a>
            <a
              href={`https://wa.me/${phone.replace(/[\s+]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
          <div className="mt-2 py-4 px-4">
            <CTAButton
              href="#contact"
              onClick={e => { e.preventDefault(); setMobileOpen(false); if (pathname === '/') { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) } else { navigate('/#contact') } }}
              variant="outline-yellow"
              size="sm"
              className="w-full font-bold tracking-wider uppercase justify-center"
            >
              {t('nav.quickContact')}
            </CTAButton>
          </div>

          {/* Separator */}
          <div className="mx-4 border-t border-dark-card" />

          {/* Footer mobilnego menu: język */}
          <div className="px-4 py-4 flex items-center justify-end">
            <div className="flex items-center text-xs font-black tracking-widest">
              <button
                onClick={() => setLanguage('pl')}
                aria-label="Język polski"
                aria-pressed={language === 'pl'}
                className={language === 'pl'
                  ? 'shape-rhombus bg-primary text-dark px-4 py-2'
                  : 'hover-wipe hover-wipe-yellow px-4 py-2 text-gray-400'
                }
              >
                PL
              </button>
              <button
                onClick={() => setLanguage('en')}
                aria-label="English language"
                aria-pressed={language === 'en'}
                className={language === 'en'
                  ? 'shape-rhombus bg-primary text-dark px-4 py-2 ml-[-12px]'
                  : 'hover-wipe hover-wipe-yellow px-4 py-2 text-gray-400 ml-[-12px]'
                }
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
