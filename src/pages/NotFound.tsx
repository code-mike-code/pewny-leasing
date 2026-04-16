import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { useLanguage } from '@/hooks/useLanguage'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>404 – {t('notFound.heading')} | Pewny Leasing</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <main className="relative flex items-center justify-center bg-[#050505] overflow-hidden pt-[116px] pb-16 min-h-screen">

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span className="text-[30vw] font-black tracking-tighter text-white/[0.03] leading-none whitespace-nowrap">
            404
          </span>
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 lg:px-8 w-full text-center">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">
            {t('notFound.badge')}
          </p>

          <p className="text-[clamp(5rem,20vw,12rem)] font-black text-primary leading-none tracking-tighter italic mb-4">
            {t('notFound.title')}
          </p>

          <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-black text-white uppercase italic tracking-tighter mb-4">
            {t('notFound.heading')}
          </h1>

          <p className="text-gray-400 font-medium text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
            {t('notFound.description')}
          </p>

          <Link
            to="/"
            className="hover-wipe hover-wipe-dark shape-rhombus bg-primary text-dark font-bold border-b-2 border-primary px-8 py-4 inline-flex items-center justify-center gap-3 transition-all duration-300 group"
          >
            {t('notFound.cta')}
            <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
