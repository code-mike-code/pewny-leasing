import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { CTAButton } from '@/components/ui/CTAButton'
// import { BookingModal } from '@/components/modals/BookingModal' // TODO: odblokować po podłączeniu Monday CRM (VITE_MONDAY_BOOKING_URL)
import { MapPopover } from '@/components/ui/MapPopover'
import { Reveal } from '@/components/ui/Reveal'

export function ContactSection() {
  const { t } = useLanguage()
  // const [modalOpen, setModalOpen] = useState(false) // TODO: odblokować razem z BookingModal
  const [mapOpen, setMapOpen] = useState(false)

  const phone = t('contact.info.phone')
  const phoneNote = t('contact.info.phoneNote')
  const email = t('contact.info.email')
  const address = t('contact.info.address')
  const hours = t('contact.info.hours')

  const contactItems = [
    {
      icon: Phone,
      value: phone,
      element: (
        <div className="pt-2.5 flex flex-col gap-0.5">
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="text-white text-sm hover:text-illuminating transition-colors duration-200"
          >
            {phone}
          </a>
          {phoneNote && (
            <span className="text-white/50 text-xs">{phoneNote}</span>
          )}
        </div>
      ),
    },
    {
      icon: Mail,
      value: email,
      element: (
        <a
          href={`mailto:${email}`}
          className="text-white pt-2.5 text-sm hover:text-illuminating transition-colors duration-200"
        >
          {email}
        </a>
      ),
    },
    {
      icon: MapPin,
      value: address,
      element: (
        <button
          onClick={() => setMapOpen(true)}
          className="text-white pt-2.5 text-sm text-left hover:text-illuminating transition-colors duration-200"
        >
          {address}
        </button>
      ),
    },
    {
      icon: Clock,
      value: hours,
      element: (
        <span className="text-white pt-2.5 text-sm">{hours}</span>
      ),
    },
  ]

  return (
    <>
      <section
        id="contact"
        className="py-32 md:py-32 lg:py-40 bg-grey-mid text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* CTA column */}
            <div>
              <Reveal>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none tracking-tight mb-6">
                  {t('contact.heading')}
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-white/70 text-lg mb-10">
                  {t('contact.subheading')}
                </p>
              </Reveal>

              <Reveal delay={280}>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
                  <CTAButton href="#contact-form" variant="yellow">
                    {t('contact.ctaPrimary')}
                  </CTAButton>

                  {/*
                  ── PRZYCISK REZERWACJI WIZYTY (Monday CRM) ──────────────────
                  Odkomentuj gdy VITE_MONDAY_BOOKING_URL zostanie skonfigurowany
                  w pliku .env i przetestowany z kalendarzem Monday CRM.
                  Patrz instrukcja w: src/components/modals/BookingModal.tsx
                  ─────────────────────────────────────────────────────────── */}
                  {/* <CTAButton onClick={() => setModalOpen(true)} variant="dark">
                    {t('contact.ctaSecondary')}
                  </CTAButton> */}
                </div>
              </Reveal>
            </div>

            {/* Contact info column */}
            <div className="flex flex-col justify-center">
              <ul className="space-y-6">
                {contactItems.map(({ icon: Icon, element }, index) => (
                  <Reveal key={index} delay={360 + index * 70}>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-white/5 shrink-0">
                        <Icon size={16} className="text-illuminating" />
                      </div>
                      {element}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} /> */}
      <MapPopover address={address} open={mapOpen} onClose={() => setMapOpen(false)} />
    </>
  )
}
