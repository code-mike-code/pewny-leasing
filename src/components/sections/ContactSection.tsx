import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, ArrowRight, Loader2, CheckCircle2, AlertCircle, X } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Modli%C5%84ska+310%2F312+lok.+2%2C+03-152+Warszawa&output=embed&hl=pl'

interface ContactForm {
  name: string
  email: string
  phone: string
  topic: string
  message: string
  gdpr: boolean
}

export function ContactSection() {
  const { t } = useLanguage()
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', phone: '', topic: '', message: '', gdpr: false })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [mapOpen, setMapOpen] = useState(false)

  // lock body scroll when map is open
  useEffect(() => {
    document.body.style.overflow = mapOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mapOpen])

  const contactItems = [
    { icon: Phone, label: t('contact.info.phone'), sub: t('contact.info.phoneNote'), href: `tel:${t('contact.info.phone').replace(/\s/g, '')}` },
    { icon: Mail, label: t('contact.info.email'), sub: t('contact.info.emailSub'), href: `mailto:${t('contact.info.email')}` },
    { icon: MapPin, label: t('contact.info.address'), sub: t('contact.info.addressSub'), onMapOpen: () => setMapOpen(true) },
    { icon: Clock, label: t('contact.info.hours'), sub: t('contact.info.hoursSub') },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.gdpr) return

    setStatus('loading')
    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        setStatus('error')
        return
      }

      const result = await response.json()
      if (result.status === 'success') {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', topic: '', message: '', gdpr: false })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Contact error:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 xl:py-40 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal>
              <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">
                {t('nav.contact')}
              </h2>
              <h3 className="text-[clamp(1.8rem,10vw,2.8rem)] md:text-[clamp(2.8rem,8vw,3.8rem)] lg:text-[clamp(2.5rem,5vw,4.5rem)] xl:text-6xl font-black text-white leading-[1] tracking-tighter uppercase italic mb-8">
                {t('contact.heading')} <br />
                <span className="text-primary italic">{t('contact.headingAccent')}</span>
              </h3>
              <p className="text-gray-400 font-medium text-sm lg:text-base xl:text-lg leading-relaxed mb-12 max-w-md">
                {t('contact.subheading')}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactItems.map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{item.sub}</span>
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-[clamp(1rem,4vw,1.125rem)] md:text-[clamp(1.125rem,3vw,1.25rem)] lg:text-lg font-bold text-white hover:text-primary transition-colors">
                        {item.label}
                      </a>
                    ) : item.onMapOpen ? (
                      <button
                        onClick={item.onMapOpen}
                        className="text-[clamp(1rem,4vw,1.125rem)] md:text-[clamp(1.125rem,3vw,1.25rem)] lg:text-lg font-bold text-white hover:text-primary transition-colors text-left leading-tight underline decoration-primary/40 underline-offset-4 hover:decoration-primary cursor-pointer"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <p className="text-[clamp(1rem,4vw,1.125rem)] md:text-[clamp(1.125rem,3vw,1.25rem)] lg:text-lg font-bold text-white leading-tight">
                        {item.label}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <Reveal variant="right">
              <div className="bg-[#0A0A0A] p-8 lg:p-12 xl:p-16 border border-white/5 relative group">
                {/* Rhombus corner accent */}
                <div className="absolute -top-px -right-px w-12 h-12 bg-primary clip-path-rhombus-sm opacity-20 group-hover:opacity-100 transition-opacity duration-700" 
                     style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />

                {status === 'success' ? (
                  <div className="py-20 text-center animate-reveal-up">
                    <div className="w-20 h-20 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-primary" />
                    </div>
                    <h4 className="text-2xl font-black uppercase italic mb-4">{t('contact.form.success')}</h4>
                    <CTAButton onClick={() => setStatus('idle')} variant="outline-yellow" size="sm">{t('contact.form.backToForm')}</CTAButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 xl:space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
                      <FormInput 
                        label={t('contact.form.name')} 
                        placeholder={t('contact.form.namePlaceholder')}
                        value={form.name} 
                        onChange={v => setForm({...form, name: v})} 
                        required 
                      />
                      <FormInput 
                        label={t('contact.form.email')} 
                        placeholder={t('contact.form.emailPlaceholder')}
                        type="email" 
                        value={form.email} 
                        onChange={v => setForm({...form, email: v})} 
                        required 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormInput 
                        label={t('contact.form.phone')} 
                        placeholder={t('contact.form.phonePlaceholder')}
                        type="tel" 
                        value={form.phone} 
                        onChange={v => setForm({...form, phone: v})} 
                      />
                      <div className="flex flex-col">
                        <label className="text-[10px] xl:text-[11px] font-black text-gray-500 uppercase tracking-widest mb-3 block">{t('contact.form.topic')}</label>
                        <div className="flex gap-3">
                          {([t('contact.form.topicCar'), t('contact.form.topicOther')] as const).map((tValue) => (
                            <button
                              key={tValue}
                              type="button"
                              onClick={() => setForm({...form, topic: tValue as any})}
                              className={cn(
                                "flex-1 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300 shape-rhombus border",
                                form.topic === tValue 
                                  ? "bg-primary text-dark border-primary" 
                                  : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30"
                              )}
                            >
                              {tValue}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <FormTextarea 
                      label={t('contact.form.message')} 
                      placeholder={t('contact.form.messagePlaceholder')}
                      value={form.message} 
                      onChange={v => setForm({...form, message: v})} 
                      required 
                    />

                    <div className="pt-2">
                      <RhombusCheckbox 
                        checked={form.gdpr} 
                        onChange={() => setForm({...form, gdpr: !form.gdpr})} 
                        label={t('contact.form.gdpr')}
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-3 text-red-500 text-xs font-bold bg-red-500/5 p-4 border border-red-500/20">
                        <AlertCircle size={16} />
                        {t('contact.form.error')}
                      </div>
                    )}

                    <CTAButton 
                      type="submit" 
                      variant="yellow" 
                      className="w-full group" 
                      disabled={status === 'loading' || !form.gdpr}
                    >
                      {status === 'loading' ? (
                        <Loader2 size={20} className="animate-spin" />
                      ) : (
                        <>
                          {t('contact.form.submit')}
                          <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                        </>
                      )}
                    </CTAButton>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* ── Google Maps slide-up modal ── */}
      {/* Backdrop */}
      <div
        onClick={() => setMapOpen(false)}
        className={`fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${mapOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t('common.closeMap')}
        className={`fixed bottom-0 left-0 right-0 z-[91] bg-[#0A0A0A] border-t-2 border-primary shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mapOpen ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ height: '65vh' }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-primary" />
            <span className="text-white font-bold text-sm tracking-wide">
              {t('contact.info.address')}
            </span>
          </div>
          <button
            onClick={() => setMapOpen(false)}
            aria-label={t('common.closeMap')}
            className="hover-wipe hover-wipe-yellow shape-rhombus w-10 h-10 flex items-center justify-center bg-white/5 text-white transition-colors"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Map iframe */}
        <div className="w-full" style={{ height: 'calc(65vh - 57px)' }}>
          {mapOpen && (
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja Pewny Leasing – Modlińska 310/312, Warszawa"
            />
          )}
        </div>
      </div>

    </section>
  )
}

function FormInput({ label, value, onChange, type = 'text', required = false, placeholder }: { label: string, value: string, onChange: (v: string) => void, type?: string, required?: boolean, placeholder?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] xl:text-[11px] font-black text-gray-500 uppercase tracking-widest block">{label}{required && '*'}</label>
      <input 
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/5 border border-white/10 px-4 py-3 xl:py-4 text-sm xl:text-base font-bold text-white outline-none focus:border-primary transition-colors focus:bg-white/10"
      />
    </div>
  )
}

function FormTextarea({ label, value, onChange, placeholder, required = false }: { label: string, value: string, onChange: (v: string) => void, placeholder?: string, required?: boolean }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] xl:text-[11px] font-black text-gray-500 uppercase tracking-widest block">{label}{required && '*'}</label>
      <textarea 
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={4}
        className="w-full bg-white/5 border border-white/10 px-4 py-3 xl:py-4 text-sm xl:text-base font-bold text-white outline-none focus:border-primary transition-colors focus:bg-white/10 resize-none"
      />
    </div>
  )
}

function RhombusCheckbox({ checked, onChange, label }: { checked: boolean, onChange: () => void, label: string }) {
  return (
    <label className="flex items-start gap-4 cursor-pointer group">
      <div className="relative mt-0.5">
        <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
        <div 
          className={cn(
            "w-5 h-5 border-2 transition-all duration-300 flex items-center justify-center shape-rhombus-checkbox",
            checked ? "border-primary bg-primary" : "border-white group-hover:border-primary/60"
          )}
        >
          {checked && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-3 h-3 text-dark">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-[10px] leading-tight font-black text-gray-500 hover:text-gray-400 transition-colors uppercase tracking-widest pt-0.5">
        {label}
      </span>
    </label>
  )
}
