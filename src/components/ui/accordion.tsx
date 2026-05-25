import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item
    className={cn('border-b border-gray-200', className)}
    {...props}
  />
)

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        'flex flex-1 items-center justify-between py-6 text-left text-xl font-bold text-dark transition-all hover:text-grey-mid [&[data-state=open]>svg]:rotate-90',
        className,
      )}
      {...props}
    >
      {children}
      <ArrowRight
        size={18}
        strokeWidth={2.5}
        className="shrink-0 text-grey-mid transition-transform duration-300"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    className="overflow-hidden group data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn(
      'pb-6 pt-0 text-base text-grey-mid leading-relaxed',
      'group-data-[state=open]:animate-content-reveal group-data-[state=closed]:animate-content-hide',
      className,
    )}>
      {children}
    </div>
  </AccordionPrimitive.Content>
)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
