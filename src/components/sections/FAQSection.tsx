import { useLanguage } from '@/hooks/useLanguage'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { Reveal } from '@/components/ui/Reveal'

export function FAQSection() {
  const { t } = useLanguage()
  const faqItems = [0, 1, 2, 3, 4, 5].map((i) => ({
    question: t(`faq.items.${i}.question`),
    answer: t(`faq.items.${i}.answer`),
  }))

  return (
    <section id="faq" className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-black text-dark leading-none tracking-tight mb-16">
            {t('faq.heading')}
          </h2>
        </Reveal>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <Reveal key={index} delay={160 + index * 80}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <span className="whitespace-pre-line">{item.answer}</span>
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
