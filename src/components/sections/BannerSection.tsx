import './BannerSection.css'
import { useLanguage } from '@/hooks/useLanguage'

// Financial partners (top row)
import aliorLogo from '@/assets/partners-logos/logo-alior.webp'
import pkoLogo from '@/assets/partners-logos/pko-logo-removebg.webp'
import pekaoLogo from '@/assets/partners-logos/pekao-logo-removebg.webp'
import masterLeaseLogo from '@/assets/partners-logos/master-lease-logo-removebg.webp'
import nestLogo from '@/assets/partners-logos/nest-lease-logo-removebg.webp'
import vehisLogo from '@/assets/partners-logos/vehis-logo-removebg.webp'
import mLeasingLogo from '@/assets/partners-logos/m-leasing-logo-removebg.webp'
import milleniumLogo from '@/assets/partners-logos/milenium-logo-removebg.webp'
import santanderLogo from '@/assets/partners-logos/santander-logo-removebg.webp'
import eflLogo from '@/assets/partners-logos/efl-logo-removebg.webp'
import ingLogo from '@/assets/partners-logos/ing-logo-removebg.webp'
import bnpLogo from '@/assets/partners-logos/bnp-paribas-logo-removebg.webp'

// Car brands (bottom row)
import bmwLogo from '@/assets/partners-logos/bmw-logo-removebg.webp'
import mercedesLogo from '@/assets/partners-logos/mercedes-logo-removebg.webp'
import landRoverLogo from '@/assets/partners-logos/land-rover-logo-removebg.webp'
import audiLogo from '@/assets/partners-logos/audi-logo-removebg.webp'
import volkswagenLogo from '@/assets/partners-logos/volkswagen-logo-removebg.webp'
import lamborghiniLogo from '@/assets/partners-logos/lamborghini-logo-removebg.webp'
import ferrariLogo from '@/assets/partners-logos/ferrari-logo-removebg.webp'
import teslaLogo from '@/assets/partners-logos/tesla-logo-removebg.webp'
import volvoLogo from '@/assets/partners-logos/volvo-logo-removebg.webp'
import fordLogo from '@/assets/partners-logos/ford-logo-removebg.webp'
import toyotaLogo from '@/assets/partners-logos/toyota-logo-removebg.webp'
import jetourLogo from '@/assets/partners-logos/jetour-logo-removebg.webp'
import jaguarLogo from '@/assets/partners-logos/jaguar-logo-removebg.webp'
import hongqiLogo from '@/assets/partners-logos/hongqi-logo.webp'
import kiaLogo from '@/assets/partners-logos/kia-logo-removebg.webp'
import porscheLogo from '@/assets/partners-logos/porsche-logo-removebg.webp'
import bentleyLogo from '@/assets/partners-logos/bentley-logo-removebg.webp'
import astonMartinLogo from '@/assets/partners-logos/aston-martin-logo-removebg.webp'
import jeepLogo from '@/assets/partners-logos/jeep-logo-removebg.webp'
import maseratiLogo from '@/assets/partners-logos/maserati-logo-removebg.webp'
import hondaLogo from '@/assets/partners-logos/honda-logo-removebg.webp'
import mazdaLogo from '@/assets/partners-logos/mazda-logo-removebg.webp'
import mitsubishiLogo from '@/assets/partners-logos/mitsubishi-logo-removebg.webp'
import nissanLogo from '@/assets/partners-logos/nissan-logo-removebg.webp'
import suzukiLogo from '@/assets/partners-logos/suzuki-logo-removebg.webp'
import lexusLogo from '@/assets/partners-logos/lexus-logo-removebg.webp'

interface Partner {
  name: string
  logo: string
}

const financialPartners: Partner[] = [
  { name: 'Alior Bank', logo: aliorLogo },
  { name: 'PKO Leasing', logo: pkoLogo },
  { name: 'Pekao Leasing', logo: pekaoLogo },
  { name: 'Master Lease', logo: masterLeaseLogo },
  { name: 'Nest', logo: nestLogo },
  { name: 'VEHIS', logo: vehisLogo },
  { name: 'M Leasing', logo: mLeasingLogo },
  { name: 'Millennium', logo: milleniumLogo },
  { name: 'Santander', logo: santanderLogo },
  { name: 'EFL', logo: eflLogo },
  { name: 'ING', logo: ingLogo },
  { name: 'BNP Paribas', logo: bnpLogo },
]

const carBrands: Partner[] = [
  { name: 'BMW', logo: bmwLogo },
  { name: 'Mercedes', logo: mercedesLogo },
  { name: 'Range Rover', logo: landRoverLogo },
  { name: 'Audi', logo: audiLogo },
  { name: 'Volkswagen', logo: volkswagenLogo },
  { name: 'Lamborghini', logo: lamborghiniLogo },
  { name: 'Ferrari', logo: ferrariLogo },
  { name: 'Tesla', logo: teslaLogo },
  { name: 'Volvo', logo: volvoLogo },
  { name: 'Ford', logo: fordLogo },
  { name: 'Toyota', logo: toyotaLogo },
  { name: 'Jetour', logo: jetourLogo },
  { name: 'Jaguar', logo: jaguarLogo },
  { name: 'Hongqi', logo: hongqiLogo },
  { name: 'Kia', logo: kiaLogo },
  { name: 'Porsche', logo: porscheLogo },
  { name: 'Bentley', logo: bentleyLogo },
  { name: 'Aston Martin', logo: astonMartinLogo },
  { name: 'Jeep', logo: jeepLogo },
  { name: 'Maserati', logo: maseratiLogo },
  { name: 'Honda', logo: hondaLogo },
  { name: 'Mazda', logo: mazdaLogo },
  { name: 'Mitsubishi', logo: mitsubishiLogo },
  { name: 'Nissan', logo: nissanLogo },
  { name: 'Suzuki', logo: suzukiLogo },
  { name: 'Lexus', logo: lexusLogo },
]

const renderLogo = ({ name, logo }: Partner, index: number) => (
  <div key={`${name}-${index}`} className="mx-8 lg:mx-12 flex items-center justify-center">
    <img
      src={logo}
      alt={name}
      className="h-12 md:h-16 w-auto max-w-[120px] md:max-w-[160px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
      draggable={false}
    />
  </div>
)

export function BannerSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-8 lg:py-12 w-full border-y border-black/5 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 mb-8">
        <p className="text-center text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">
          {t('banner.tagline')}
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:gap-12">
        {/* Row 1 — Financial partners: Right to Left */}
        <div className="flex overflow-hidden">
          <div className="marquee-track flex items-center">
            {[...financialPartners, ...financialPartners, ...financialPartners].map((p, i) => renderLogo(p, i))}
          </div>
        </div>

        {/* Row 2 — Car brands: Left to Right */}
        <div className="flex overflow-hidden">
          <div className="marquee-track-reverse flex items-center">
            {[...carBrands, ...carBrands, ...carBrands].map((p, i) => renderLogo(p, i))}
          </div>
        </div>
      </div>
    </section>
  )
}
