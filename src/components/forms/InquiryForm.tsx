import { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { CTAButton } from '@/components/ui/CTAButton'
import { cn } from '@/lib/utils'
import { sendCalculatorInquiry } from '@/lib/emailjs'
import { validateNIP, validateEmail, validatePhone } from '@/lib/validation'

interface InquiryContextData {
  calculatorType?: 'vehicle' | 'other'
  financingObject?: string
  value?: number
  contribution?: number
  buyout?: number
  period?: number
  vehicleCondition?: 'new' | 'used' | null
  searchOption?: 'find' | 'have' | null
  vehicleDetails?: string
  wantsCashback?: boolean
  meetingType?: 'online' | 'in_person' | null
  name?: string
}

export interface InquiryFormHandle {
  submit: () => void
  status: 'idle' | 'loading' | 'success' | 'error'
  isValid: boolean
}

interface InquiryFormProps {
  variant?: 'compact' | 'full'
  showAdvancedFields?: boolean
  showNameField?: boolean
  contextData?: InquiryContextData
  onSuccess?: () => void
  onStatusChange?: (status: 'idle' | 'loading' | 'success' | 'error') => void
  submitLabel?: string
  hideSubmit?: boolean
}

export const InquiryForm = forwardRef<InquiryFormHandle, InquiryFormProps>(({
  variant = 'compact',
  showAdvancedFields = false,
  showNameField = false,
  contextData = {},
  onSuccess,
  onStatusChange,
  submitLabel,
  hideSubmit = false
}, ref) => {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [nip, setNip] = useState('')
  const [city, setCity] = useState('')
  const [message, setMessage] = useState('')
  const [gdpr, setGdpr] = useState(false)

  const [errors, setErrors] = useState<{nip?: string, email?: string, phone?: string}>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (onStatusChange) onStatusChange(status)
  }, [status, onStatusChange])

  async function handleSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault()
    if (!gdpr) return

    const newErrors: typeof errors = {}
    if (nip.trim() !== '' && !validateNIP(nip)) newErrors.nip = t('inquiryForm.errors.nip')
    if (!validateEmail(email)) newErrors.email = t('inquiryForm.errors.email')
    if (!validatePhone(phone)) newErrors.phone = t('inquiryForm.errors.phone')

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setStatus('loading')

    try {
      await sendCalculatorInquiry({
        calculatorType: 'vehicle',
        value: 0,
        contribution: 0,
        buyout: 0,
        period: 0,
        wantsCashback: false,
        ...contextData,
        name: (variant === 'full' || showAdvancedFields || showNameField) ? name : (contextData.name || 'Klient'),
        email,
        phone,
        nip,
        vehicleDetails: showAdvancedFields ? `City: ${city} | Message: ${message}` : contextData.vehicleDetails,
      })
      setStatus('success')
      if (onSuccess) onSuccess()
    } catch (err) {
      console.error('[InquiryForm] Error:', err)
      setStatus('error')
    }
  }

  useImperativeHandle(ref, () => ({
    submit: () => handleSubmit(),
    status,
    isValid: gdpr && !!email && !!phone,
  }))

  if (status === 'success') {
    return (
      <div className={cn(
        "flex flex-col items-center justify-center p-8 text-center animate-reveal-up h-full min-h-[300px]",
        variant === 'compact' ? "bg-white" : ""
      )}>
        <div className="w-20 h-20 bg-primary/10 flex items-center justify-center rounded-full mb-6">
          <CheckCircle2 size={40} className="text-primary" />
        </div>
        <h4 className="text-2xl font-black uppercase italic mb-4">{t('inquiryForm.successTitle')}</h4>
        <p className="text-gray-500 mb-8 font-medium max-w-sm mx-auto">
          {t('inquiryForm.successText')}
        </p>
        {!hideSubmit && (
          <CTAButton onClick={() => setStatus('idle')} variant="yellow" size="sm">OK</CTAButton>
        )}
      </div>
    )
  }

  const isFull = variant === 'full'
  const resolvedSubmitLabel = submitLabel ?? t('inquiryForm.submitDefault')

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", isFull ? "lg:space-y-8 xl:space-y-12" : "space-y-3")}>
      <div className={cn("grid gap-6", isFull ? "md:grid-cols-2 lg:gap-8 xl:gap-12" : "grid-cols-1 gap-3")}>
        {/* Name */}
        {(isFull || showAdvancedFields || showNameField) && (
          <FormInput
            label={t('inquiryForm.name')}
            value={name}
            onChange={setName}
            placeholder={t('inquiryForm.namePlaceholder')}
            required
          />
        )}

        <FormInput
          label={t('inquiryForm.email')}
          type="email"
          value={email}
          onChange={setEmail}
          placeholder={t('inquiryForm.emailPlaceholder')}
          error={errors.email}
          required
        />

        <FormInput
          label={t('inquiryForm.phone')}
          type="tel"
          value={phone}
          onChange={setPhone}
          placeholder="+48 000 000 000"
          error={errors.phone}
          required
        />

        {showAdvancedFields && (
          <FormInput
            label={t('inquiryForm.location')}
            value={city}
            onChange={setCity}
            placeholder={t('inquiryForm.locationPlaceholder')}
            required
          />
        )}
      </div>

      <FormInput
        label={t('inquiryForm.nip')}
        value={nip}
        onChange={setNip}
        placeholder={t('inquiryForm.nipPlaceholder')}
        error={errors.nip}
      />

      {showAdvancedFields && (
        <FormTextarea
          label={t('inquiryForm.message')}
          placeholder={t('inquiryForm.messagePlaceholder')}
          value={message}
          onChange={setMessage}
          required
        />
      )}

      <div className="pt-2">
        <RhombusCheckbox
          checked={gdpr}
          onChange={() => setGdpr(!gdpr)}
          label={t('contact.form.gdpr')}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-3 text-red-500 text-xs font-black bg-red-500/5 p-4 border border-red-500/20 rounded-xl">
          <AlertCircle size={16} />
          {t('contact.form.error')}
        </div>
      )}

      {!hideSubmit && (
        <CTAButton
          type="submit"
          variant="yellow"
          className="w-full group"
          disabled={status === 'loading' || !gdpr}
        >
          {status === 'loading' ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <>
              {resolvedSubmitLabel}
              <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
            </>
          )}
        </CTAButton>
      )}
    </form>
  )
})

InquiryForm.displayName = 'InquiryForm'

function FormInput({ label, value, onChange, type = 'text', required = false, placeholder = '', error }: { label: string, value: string, onChange: (v: string) => void, type?: string, required?: boolean, placeholder?: string, error?: string }) {
  return (
    <div className="space-y-1 group">
      <div className="flex justify-between items-center">
        <label className="text-[10px] xl:text-[11px] font-black text-gray-400 uppercase tracking-widest block transition-colors group-focus-within:text-navy">{label}{required && '*'}</label>
        {error && <span className="text-[10px] xl:text-[11px] font-bold text-red-500 uppercase">{error}</span>}
      </div>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className={cn(
          "w-full bg-transparent border-b py-2 xl:py-3 text-sm xl:text-base font-bold text-navy outline-none transition-colors placeholder:text-gray-300 placeholder:font-medium",
          error ? "border-red-500" : "border-gray-200 focus:border-navy"
        )}
      />
    </div>
  )
}

function FormTextarea({ label, value, onChange, placeholder, required = false }: { label: string, value: string, onChange: (v: string) => void, placeholder?: string, required?: boolean }) {
  return (
    <div className="space-y-1 group">
      <label className="text-[10px] xl:text-[11px] font-black text-gray-400 uppercase tracking-widest block transition-colors group-focus-within:text-navy">{label}{required && '*'}</label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={3}
        className="w-full bg-transparent border-b border-gray-200 py-3 xl:py-4 text-sm xl:text-base font-bold text-navy outline-none focus:border-navy transition-colors placeholder:text-gray-300 placeholder:font-medium resize-none"
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
            checked ? "border-primary bg-primary" : "border-navy/20 group-hover:border-primary/50"
          )}
        >
          {checked && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-3 h-3 text-navy">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-[9px] leading-tight font-black text-gray-400 group-hover:text-navy transition-colors uppercase tracking-widest pt-0.5 max-w-sm">
        {label}
      </span>
    </label>
  )
}
