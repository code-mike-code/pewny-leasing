import { useState, useRef } from 'react'
import { ArrowRight, Loader2, AlertTriangle } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { CTAButton } from '@/components/ui/CTAButton'
import { InquiryForm, type InquiryFormHandle } from '@/components/forms/InquiryForm'
import { isCalcSectionReady, buildCalcFinancingObject, type CalcSectionData } from '@/lib/formFlow'
import { cn } from '@/lib/utils'
import IconOnline from '@/assets/icons/online-meet.webp'
import IconPersonal from '@/assets/icons/personal-meet.webp'

interface MeetingSectionProps {
  calcData: CalcSectionData | null
}

export function MeetingSection({ calcData }: MeetingSectionProps) {
  const { t } = useLanguage()
  const [activeMeeting, setActiveMeeting] = useState<'online' | 'personal'>('online')
  const [wantsCashback, setWantsCashback] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [showCalcError, setShowCalcError] = useState(false)
  const formRef = useRef<InquiryFormHandle>(null)

  function handleSubmit() {
    if (!isCalcSectionReady(calcData)) {
      setShowCalcError(true)
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    setShowCalcError(false)
    formRef.current?.submit()
  }

  const contextData = calcData
    ? {
        calculatorType: calcData.activeTab === 'other' ? 'other' as const : 'vehicle' as const,
        financingObject: buildCalcFinancingObject(calcData),
        value: calcData.value,
        contribution: calcData.contribution,
        buyout: calcData.buyout,
        period: calcData.period,
        vehicleCondition: calcData.activeTab === 'other' ? null : calcData.activeTab,
        wantsCashback,
        meetingType: wantsCashback ? (activeMeeting === 'online' ? 'online' as const : 'in_person' as const) : null,
      }
    : {
        calculatorType: 'other' as const,
        financingObject: `Spotkanie: ${activeMeeting === 'online' ? 'Online' : 'Osobiście'}`,
        wantsCashback,
        meetingType: wantsCashback ? (activeMeeting === 'online' ? 'online' as const : 'in_person' as const) : null,
      }

  return (
    <section id="book-meeting" className="py-32 xl:py-48 bg-white w-full">
      <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-12">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left: Meeting choice */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4 text-left">{t('meeting.heading')}</h2>
            <h3 className="text-[clamp(1.8rem,10vw,2.5rem)] md:text-[clamp(2.5rem,8vw,3.5rem)] lg:text-[clamp(2.5rem,7vw,4.5rem)] xl:text-7xl font-black text-navy leading-[1.1] tracking-tighter uppercase italic mb-6">
              {t('meeting.title')} <br className="hidden md:block" />
              <span className="text-primary italic">{t('meeting.titleAccent')}</span>
            </h3>
            <p className="text-gray-500 font-medium mb-10 max-w-sm leading-relaxed text-sm md:text-base xl:text-lg">
              {t('meeting.subtitle')}
            </p>

            <div className="space-y-4">
              {/* Online */}
              <button
                onClick={() => setActiveMeeting('online')}
                className={`
                  w-full text-left flex items-center p-6 transition-all duration-300 outline-none border-anim
                  ${activeMeeting === 'online'
                    ? 'bg-[#F2F5F9] shadow-sm border-anim-active'
                    : 'bg-[#F8FAFC] hover:bg-[#F2F5F9]'
                  }
                `}
              >
                <div className="p-3 mr-6 text-primary flex items-center justify-center">
                  <img src={IconOnline} alt='online-meet' className='w-[60px] h-auto bg-transparent' />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg xl:text-xl mb-0.5">{t('meeting.online.title')}</h3>
                  <p className="text-gray-500 text-sm font-medium">{t('meeting.online.subtitle')}</p>
                </div>
              </button>

              {/* Personal */}
              <button
                onClick={() => setActiveMeeting('personal')}
                className={`
                  w-full text-left flex items-center p-6 transition-all duration-300 outline-none border-anim
                  ${activeMeeting === 'personal'
                    ? 'bg-[#F2F5F9] shadow-sm border-anim-active'
                    : 'bg-[#F8FAFC] hover:bg-[#F2F5F9]'
                  }
                `}
              >
                <div className="p-3 mr-6 text-primary flex items-center justify-center">
                  <img src={IconPersonal} alt='personal-meet' className='w-[60px] h-auto' />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg xl:text-xl mb-0.5">{t('meeting.personal.title')}</h3>
                  <p className="text-gray-500 text-sm font-medium">{t('meeting.personal.subtitle')}</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#F9FAFB] rounded-[2.5rem] p-10 md:p-12 xl:p-16 shadow-sm border border-gray-100 relative overflow-hidden">
              <h3 className="text-xl font-black text-navy tracking-tight mb-10 uppercase italic">
                {t('meeting.form.heading')} <span className="text-primary italic">{t('meeting.form.headingAccent')}</span>
              </h3>

              {/* Error: calc data missing */}
              {showCalcError && (
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 animate-reveal-up">
                  <AlertTriangle size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black text-amber-800 uppercase tracking-wide mb-1">
                      {t('meeting.form.calcMissingTitle')}
                    </p>
                    <p className="text-xs font-medium text-amber-700 leading-snug mb-3">
                      {t('meeting.form.calcMissingText')}
                    </p>
                    <button
                      onClick={() => {
                        setShowCalcError(false)
                        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-[10px] font-black text-amber-800 uppercase tracking-widest underline underline-offset-2 hover:text-amber-900 transition-colors"
                    >
                      {t('meeting.form.goToCalc')}
                    </button>
                  </div>
                </div>
              )}

              {formStatus !== 'success' && (
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
                  <label className="flex items-center gap-2 cursor-pointer group flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={wantsCashback}
                      onChange={(e) => setWantsCashback(e.target.checked)}
                      className="w-4 h-4 accent-primary"
                    />
                    <div className="flex flex-col">
                      <span className="font-black text-[11px] uppercase italic text-navy leading-none">{t('calculator.cashback.title')}</span>
                      <span className="text-[9px] text-gray-400 font-bold leading-none mt-0.5 whitespace-nowrap">{t('calculator.cashback.subtitle')}</span>
                    </div>
                  </label>

                  <div className={cn(
                    "flex items-center gap-4 transition-all duration-300",
                    wantsCashback ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
                  )}>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="meeting-section-type"
                        checked={activeMeeting === 'online'}
                        onChange={() => setActiveMeeting('online')}
                        className="w-3.5 h-3.5 accent-primary"
                      />
                      <span className={cn("text-[10px] font-black uppercase tracking-wider", activeMeeting === 'online' ? "text-primary" : "text-gray-400")}>{t('calculator.meeting.online')}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="meeting-section-type"
                        checked={activeMeeting === 'personal'}
                        onChange={() => setActiveMeeting('personal')}
                        className="w-3.5 h-3.5 accent-primary"
                      />
                      <span className={cn("text-[10px] font-black uppercase tracking-wider", activeMeeting === 'personal' ? "text-primary" : "text-gray-400")}>{t('calculator.meeting.inPerson')}</span>
                    </label>
                  </div>
                </div>
              )}

              <InquiryForm
                ref={formRef}
                variant="compact"
                showNameField={true}
                hideSubmit
                onStatusChange={setFormStatus}
                onSuccess={() => setShowCalcError(false)}
                contextData={contextData}
              />

              {formStatus !== 'success' && (
                <div className="mt-6">
                  <CTAButton
                    variant="yellow"
                    className="w-full group"
                    disabled={formStatus === 'loading'}
                    onClick={handleSubmit}
                  >
                    {formStatus === 'loading' ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <>
                        {t('meeting.form.submitLabel').toUpperCase()}
                        <ArrowRight size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:-rotate-45" />
                      </>
                    )}
                  </CTAButton>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
