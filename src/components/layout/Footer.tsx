import { Instagram, Facebook, Youtube } from 'lucide-react'
import { NavLink } from '@/components/NavLink'
import { useLanguage } from '@/hooks/useLanguage'
import logoLight from '@/assets/logo/logo-pl-light-removebg.webp'

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F8FAFC] pt-20 pb-8 overflow-hidden relative flex flex-col justify-between min-h-[400px]">

      {/* Główne kolumny */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[30%_20%_20%_20%] gap-12 lg:gap-8 mb-24 z-10 relative">

        {/* Kolumna 1: Marka */}
        <div className="flex flex-col">
          <div className="mb-4">
            <img src={logoLight} alt="Pewny Leasing" className="h-12 w-auto object-contain" />
          </div>
          <p className="text-gray-400 font-medium text-xs md:text-sm leading-relaxed pr-8">
            {t('footer.brand.description')}
          </p>
        </div>

        {/* Kolumna 2: Menu */}
        <div className="flex flex-col">
          <h4 className="text-navy font-bold text-xs uppercase tracking-widest mb-6">{t('footer.menu.heading')}</h4>
          <ul className="space-y-2">
            <li><NavLink href="#book-meeting" className="text-gray-500 hover-wipe-v hover-wipe-v-yellow px-4 py-2 inline-flex items-center text-sm font-medium transition-colors">{t('footer.menu.bookMeeting')}</NavLink></li>
            <li><NavLink href="#services" className="text-gray-500 hover-wipe-v hover-wipe-v-yellow px-4 py-2 inline-flex items-center text-sm font-medium transition-colors">{t('footer.menu.offer')}</NavLink></li>
            <li><NavLink href="#calculator" className="text-[#2F855A] hover-wipe-v hover-wipe-v-yellow px-4 py-2 inline-flex items-center font-bold text-sm transition-colors">{t('footer.menu.calculator')}</NavLink></li>
            <li><NavLink href="#knowledge" className="text-gray-500 hover-wipe-v hover-wipe-v-yellow px-4 py-2 inline-flex items-center text-sm font-medium transition-colors">{t('footer.menu.knowledge')}</NavLink></li>
          </ul>
        </div>

        {/* Kolumna 3: Firma */}
        <div className="flex flex-col">
          <h4 className="text-navy font-bold text-xs uppercase tracking-widest mb-6">{t('footer.company.heading')}</h4>
          <ul className="space-y-2">
            <li><NavLink href="#contact" className="text-gray-500 hover-wipe-v hover-wipe-v-yellow px-4 py-2 inline-flex items-center text-sm font-medium transition-colors">{t('footer.company.contact')}</NavLink></li>
            <li><NavLink href="#regulamin" className="text-gray-500 hover-wipe-v hover-wipe-v-yellow px-4 py-2 inline-flex items-center text-sm font-medium transition-colors">{t('footer.company.terms')}</NavLink></li>
            <li><NavLink href="#polityka-prywatnosci" className="text-gray-500 hover-wipe-v hover-wipe-v-yellow px-4 py-2 inline-flex items-center text-sm font-medium transition-colors">{t('footer.company.privacy')}</NavLink></li>
          </ul>
        </div>

        {/* Kolumna 4: Social Media */}
        <div className="flex flex-col">
          <h4 className="text-navy font-bold text-xs uppercase tracking-widest mb-6">{t('footer.social.heading')}</h4>
          <div className="flex gap-2">
            <a href="#" aria-label="Instagram" className="w-12 h-12 bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover-wipe hover-wipe-yellow transition-all">
              <Instagram size={20} strokeWidth={2} />
            </a>
            <a href="#" aria-label="Facebook" className="w-12 h-12 bg-white border border-gray-100 ml-[-8px] flex items-center justify-center text-gray-400 hover-wipe hover-wipe-yellow transition-all">
              <Facebook size={20} strokeWidth={2} />
            </a>
            <a href="#" aria-label="YouTube" className="w-12 h-12 bg-white border border-gray-100 ml-[-8px] flex items-center justify-center text-gray-400 hover-wipe hover-wipe-yellow transition-all">
              <Youtube size={20} strokeWidth={2} />
            </a>
          </div>
        </div>

      </div>

      {/* Tło - Gigantyczny napis Watermark */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <span className="hidden lg:block absolute bottom-24 left-0 w-full text-center text-[12.5vw] font-black tracking-tighter text-[#EDF2F7] leading-none whitespace-nowrap opacity-60">
          PEWNY LEASING
        </span>
        <div className="hidden md:flex lg:hidden absolute bottom-24 left-12 flex-col leading-[0.8] text-[#EDF2F7] opacity-60 font-black text-[20vw] tracking-tighter">
          <span>PEWNY</span>
          <span>LEASING</span>
        </div>
        <div className="md:hidden absolute top-0 right-0 h-full -mt-16">
          <span className="[writing-mode:vertical-rl] rotate-180 text-[#EDF2F7] opacity-60 font-black text-[35vw] tracking-tighter leading-none whitespace-nowrap">
            PEWNY LEASING
          </span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 w-full px-6 text-center py-8 border-t border-gray-200 mt-auto bg-white/50 backdrop-blur-sm">
        <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
          {t('footer.copyrightText').replace('{year}', String(currentYear))}
        </p>
      </div>

    </footer>
  )
}
