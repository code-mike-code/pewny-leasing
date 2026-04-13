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
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    console.warn('EmailJS environment variables missing')
    return Promise.reject(new Error('EmailJS environment variables are not configured'))
  }

  const payload = {
    from_name: data.name || `Zgłoszenie - ${data.calculatorType === 'vehicle' ? 'Pojazd' : 'Inne'}`,
    from_email: data.email,
    phone: data.phone,
    name: data.name,
    nip: data.nip,
    type: data.calculatorType,
    financing_object: data.financingObject || '-',
    value: data.value,
    contribution: `${data.contribution}%`,
    buyout: `${data.buyout}%`,
    period: `${data.period} mc`,
    condition: data.vehicleCondition || '-',
    search_option: data.searchOption || '-',
    details: data.vehicleDetails || '-',
    cashback: data.wantsCashback ? `Tak (${data.meetingType})` : 'Nie',
  }

  return emailjs.send(serviceId, templateId, payload, publicKey)
}
