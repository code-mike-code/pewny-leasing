import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { CTAButton } from '@/components/ui/CTAButton'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'

type CarOption = 'own' | 'rent' | ''

interface FormData {
  name: string
  email: string
  phone: string
  city: string
  car: CarOption
  gdpr: boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  city?: string
  car?: string
  gdpr?: string
}

const INITIAL: FormData = { name: '', email: '', phone: '', city: '', car: '', gdpr: false }

function validate(
  data: FormData,
  required: string,
  emailInvalid: string,
  phoneInvalid: string,
): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = required
  if (!data.email.trim()) {
    errors.email = required
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = emailInvalid
  }
  if (!data.phone.trim()) {
    errors.phone = required
  } else if (!/^[\d\s+\-()]{7,}$/.test(data.phone)) {
    errors.phone = phoneInvalid
  }
  if (!data.city.trim()) errors.city = required
  if (!data.car) errors.car = required
  if (!data.gdpr) errors.gdpr = required
  return errors
}

export function ContactFormSection() {
  const { t } = useLanguage()
  const [form, setForm] = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors = validate(form, t('form.required'), t('form.emailInvalid'), t('form.phoneInvalid'))
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setStatus('loading')
    try {
      const payload = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        city: form.city,
        car: form.car === 'own' ? t('form.carOwn') : t('form.carRent'),
      }
      await Promise.all([
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          payload,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        ),
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          payload,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        ),
      ])
      setStatus('success')
      setForm(INITIAL)
      setErrors({})
    } catch (err) {
      console.error('[ContactForm] EmailJS error:', err)
      setStatus('error')
    }
  }

  const inputClass = (error?: string) =>
    cn(
      'w-full border px-4 py-3 text-sm text-dark placeholder:text-grey-mid bg-white focus:outline-none focus:border-dark transition-colors',
      error ? 'border-red-400' : 'border-gray-200',
    )

  const labelClass = 'block text-xs font-semibold uppercase tracking-wider text-dark mb-2'

  return (
    <section id="contact-form" className="py-32 md:py-32 lg:py-40 bg-ghost-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Heading column */}
          <div className="lg:pt-2">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark leading-none tracking-tight mb-6">
                {t('form.heading')}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-grey-mid text-lg">
                {t('form.subheading')}
              </p>
            </Reveal>
          </div>

          {/* Form column */}
          <div>
            {status === 'success' ? (
              <Reveal>
                <div className="flex flex-col items-start gap-4 py-12">
                  <CheckCircle size={40} className="text-dark" />
                  <p className="text-xl font-bold text-dark">{t('form.success')}</p>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name */}
                <Reveal>
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      {t('form.name')}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t('form.namePlaceholder')}
                      className={inputClass(errors.name)}
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>
                </Reveal>

                {/* Email */}
                <Reveal delay={100}>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      {t('form.email')}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t('form.emailPlaceholder')}
                      className={inputClass(errors.email)}
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </Reveal>

                {/* Phone + City */}
                <Reveal delay={200}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        {t('form.phone')}
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder={t('form.phonePlaceholder')}
                        className={inputClass(errors.phone)}
                        aria-invalid={errors.phone ? true : undefined}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" role="alert" className="mt-1 text-xs text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="city" className={labelClass}>
                        {t('form.city')}
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        value={form.city}
                        onChange={handleChange}
                        placeholder={t('form.cityPlaceholder')}
                        className={inputClass(errors.city)}
                        aria-invalid={errors.city ? true : undefined}
                        aria-describedby={errors.city ? 'city-error' : undefined}
                      />
                      {errors.city && (
                        <p id="city-error" role="alert" className="mt-1 text-xs text-red-500">
                          {errors.city}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>

                {/* Car option */}
                <Reveal delay={300}>
                  <div
                    role="group"
                    aria-labelledby="car-label"
                    aria-describedby={errors.car ? 'car-error' : undefined}
                  >
                    <p id="car-label" className={labelClass}>{t('form.car')}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {(['own', 'rent'] as const).map((option) => {
                        const label = option === 'own' ? t('form.carOwn') : t('form.carRent')
                        const selected = form.car === option
                        return (
                          <label
                            key={option}
                            className={cn(
                              'flex items-center gap-3 flex-1 border px-4 py-3 cursor-pointer transition-colors text-sm font-medium',
                              selected
                                ? 'border-dark bg-dark text-white'
                                : 'border-gray-200 bg-white text-dark hover:border-grey-mid',
                            )}
                          >
                            <input
                              type="radio"
                              name="car"
                              value={option}
                              checked={selected}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <span
                              className={cn(
                                'w-4 h-4 border-2 flex items-center justify-center shrink-0',
                                selected ? 'border-white' : 'border-grey-mid',
                              )}
                            >
                              {selected && <span className="w-2 h-2 bg-illuminating block" />}
                            </span>
                            {label}
                          </label>
                        )
                      })}
                    </div>
                    {errors.car && (
                      <p id="car-error" role="alert" className="mt-1 text-xs text-red-500">
                        {errors.car}
                      </p>
                    )}
                  </div>
                </Reveal>

                {/* GDPR */}
                <Reveal delay={400}>
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        id="gdpr"
                        name="gdpr"
                        checked={form.gdpr}
                        onChange={handleChange}
                        className="sr-only"
                        aria-invalid={errors.gdpr ? true : undefined}
                        aria-describedby={errors.gdpr ? 'gdpr-error' : undefined}
                      />
                      <span
                        className={cn(
                          'mt-0.5 w-5 h-5 border-2 flex items-center justify-center shrink-0 transition-colors',
                          form.gdpr ? 'bg-dark border-dark' : 'border-gray-300 group-hover:border-dark',
                        )}
                      >
                        {form.gdpr && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                            <path d="M1 4L3.5 6.5L9 1" stroke="#f5df4d" strokeWidth="1.5" strokeLinecap="square" />
                          </svg>
                        )}
                      </span>
                      <span className="text-xs text-grey-mid leading-relaxed">{t('form.gdpr')}</span>
                    </label>
                    {errors.gdpr && (
                      <p id="gdpr-error" role="alert" className="mt-1 text-xs text-red-500">
                        {errors.gdpr}
                      </p>
                    )}
                  </div>
                </Reveal>

                {/* Error banner */}
                {status === 'error' && (
                  <div className="flex items-center gap-3 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                    <AlertCircle size={16} className="shrink-0" />
                    {t('form.error')}
                  </div>
                )}

                {/* Submit */}
                <Reveal delay={500}>
                  <CTAButton
                    type="submit"
                    variant="yellow"
                    disabled={status === 'loading'}
                    className="w-full"
                  >
                    {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
                    {t('form.submit')}
                  </CTAButton>
                </Reveal>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
