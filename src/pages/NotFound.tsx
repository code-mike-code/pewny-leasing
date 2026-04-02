import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Drago Partner</title>
      </Helmet>

      <Header />
      <main className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-8xl font-black text-illuminating mb-4">404</p>
          <h1 className="text-3xl font-black text-dark mb-6">
            Strona nie istnieje
          </h1>
          <Link
            to="/"
            className="inline-block bg-dark text-white text-sm font-bold px-8 py-4 min-h-[44px] hover:bg-dark/80 transition-colors"
          >
            Wróć na stronę główną
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
