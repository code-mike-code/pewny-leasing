import emailjs from '@emailjs/browser'

interface InquiryData {
  calculatorType: 'vehicle' | 'other'
  financingObject?: string
  value: number
  contribution: number
  buyout: number
  period: number
  vehicleCondition?: 'new' | 'used' | null
  searchOption?: 'find' | 'have' | null
  vehicleDetails?: string
  wantsCashback: boolean
  meetingType?: 'online' | 'in_person' | null
  nip: string
  email: string
  phone: string
  name: string
}

export async function sendCalculatorInquiry(data: InquiryData) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    console.warn('EmailJS environment variables missing')
    return Promise.reject(new Error('EmailJS environment variables are not configured'))
  }

  const typeLabel: Record<string, string> = {
    vehicle: 'Pojazd',
    other: 'Inne',
  }
  const conditionLabel: Record<string, string> = {
    new: 'Nowy',
    used: 'Używany',
  }
  const searchLabel: Record<string, string> = {
    find: 'Szukam pojazdu',
    have: 'Mam pojazd',
  }
  const meetingLabel: Record<string, string> = {
    online: 'Spotkanie online',
    in_person: 'Spotkanie osobiste',
  }

  const payload = {
    from_name: data.name || `Zgłoszenie - ${typeLabel[data.calculatorType] ?? data.calculatorType}`,
    from_email: data.email,
    to_email: data.email,
    phone: data.phone,
    name: data.name,
    nip: data.nip || '-',
    type: typeLabel[data.calculatorType] ?? data.calculatorType,
    financing_object: data.financingObject || '-',
    value: data.value,
    contribution: `${data.contribution}%`,
    buyout: `${data.buyout}%`,
    period: `${data.period} mies.`,
    condition: conditionLabel[data.vehicleCondition ?? ''] ?? '-',
    search_option: searchLabel[data.searchOption ?? ''] ?? '-',
    details: data.vehicleDetails || '-',
    cashback: data.wantsCashback
      ? `Tak — ${meetingLabel[data.meetingType ?? ''] ?? data.meetingType}`
      : 'Nie',
  }

  const sends = [emailjs.send(serviceId, templateId, payload, publicKey)]

  if (autoReplyTemplateId) {
    sends.push(emailjs.send(serviceId, autoReplyTemplateId, payload, publicKey))
  }

  await Promise.all(sends)
}
