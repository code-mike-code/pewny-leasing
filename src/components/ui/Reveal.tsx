import { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

type RevealVariant = 'up' | 'left' | 'right' | 'scale'

const variantClass: Record<RevealVariant, string> = {
  up:    'animate-reveal-up',
  left:  'animate-reveal-left',
  right: 'animate-reveal-right',
  scale: 'animate-reveal-scale',
}

interface RevealProps {
  children: ReactNode
  /** Animation direction / type. Default: 'up' */
  variant?: RevealVariant
  /** Delay before animation starts after element enters viewport (ms). Default: 0 */
  delay?: number
  /** Extra classes on the wrapper div (e.g. layout, sizing). */
  className?: string
}

/**
 * Wraps any element with a scroll-triggered reveal animation.
 * Triggers once when the element enters the viewport.
 *
 * Variants:
 *   up    — slides up from below (default, for text blocks, cards, buttons)
 *   left  — slides in from the left
 *   right — slides in from the right
 *   scale — scales up from 88% (ideal for images and large elements)
 *
 * Usage:
 *   <Reveal><Card /></Reveal>
 *   <Reveal variant="scale"><img src={…} /></Reveal>
 *   <Reveal variant="left" delay={150}>…</Reveal>
 *   <Reveal variant="right" delay={300} className="col-span-2">…</Reveal>
 *
 *   // Staggered list:
 *   {items.map((item, i) => (
 *     <Reveal key={item.id} delay={i * 100}>
 *       <ListItem {...item} />
 *     </Reveal>
 *   ))}
 */
export function Reveal({ children, variant = 'up', delay = 0, className }: RevealProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={cn(isVisible ? variantClass[variant] : 'opacity-0', className)}
      style={isVisible && delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
