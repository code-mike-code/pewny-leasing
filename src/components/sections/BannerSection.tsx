import './BannerSection.css'

export function BannerSection() {
  const row1 = ['Audi', 'BMW', 'Tesla', 'Mercedes', 'Porsche', 'Lexus', 'Toyota', 'Volkswagen', 'Volvo', 'Ford', 'Hyundai', 'KIA']
  const row2 = ['Lamborghini', 'Ferrari', 'Bentley', 'Aston Martin', 'Maserati', 'Rolls Royce', 'Jeep', 'Land Rover', 'Range Rover', 'Jaguar']

  const renderBrand = (brand: string) => (
    <span key={brand + Math.random()} className="mx-8 lg:mx-12 text-white font-black text-lg md:text-2xl tracking-widest uppercase opacity-40 hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default whitespace-nowrap">
      {brand}
    </span>
  )

  return (
    <section className="bg-black py-8 lg:py-12 w-full border-y border-white/5 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 mb-8">
        <p className="text-center text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">
          Finansujemy pojazdy wszystkich marek
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:gap-12">
        {/* Row 1: Right to Left */}
        <div className="flex overflow-hidden">
          <div className="marquee-track flex items-center">
            {[...row1, ...row1, ...row1].map((brand) => renderBrand(brand))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex overflow-hidden">
          <div className="marquee-track-reverse flex items-center">
            {[...row2, ...row2, ...row2].map((brand) => renderBrand(brand))}
          </div>
        </div>
      </div>
    </section>
  )
}
