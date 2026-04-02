import { Fragment, useEffect, useRef, useState, ElementType } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface WaveTextProps {
  text: string
  /** HTML tag to render the outer wrapper as. Default: 'span' */
  as?: ElementType
  /** Delay before the first character starts (ms). Default: 0 */
  delay?: number
  /** Stagger between consecutive characters (ms). Default: 22 */
  charDelay?: number
  /**
   * When true, animation fires immediately on mount (for above-the-fold elements like Hero).
   * When false (default), animation fires when element enters the viewport on scroll.
   */
  onMount?: boolean
  className?: string
}

/**
 * Renders text with a wave/ripple reveal — each character slides up from
 * below its clipping box with a staggered delay.
 *
 * Words are kept intact (whitespace-nowrap) so line breaks only happen
 * between words, never in the middle of a word.
 *
 * Usage:
 *   // Hero — fires on page load:
 *   <WaveText text={t('hero.title')} onMount delay={100} charDelay={22} />
 *
 *   // Other sections — fires on scroll:
 *   <WaveText text={t('about.title')} delay={100} charDelay={22} />
 *   <WaveText as="h2" text="Section heading" delay={200} className="text-4xl font-bold" />
 */
export function WaveText({
  text,
  as: Tag = 'span',
  delay = 0,
  charDelay = 22,
  onMount = false,
  className = '',
}: WaveTextProps) {
  // Scroll-based trigger (default)
  const { ref: scrollRef, isVisible } = useScrollReveal()

  // Mount-based trigger (Hero)
  const [mountReady, setMountReady] = useState(false)
  useEffect(() => {
    if (!onMount) return
    const frame = requestAnimationFrame(() => setMountReady(true))
    return () => cancelAnimationFrame(frame)
  }, [onMount])

  const ready = onMount ? mountReady : isVisible

  // useRef must always be called (Rules of Hooks) — used only in onMount mode
  const mountRef = useRef<HTMLElement>(null)
  const tagRef = onMount ? mountRef : (scrollRef as React.RefObject<HTMLElement>)

  const words = text.split(' ')
  let charIndex = 0

  return (
    <Tag ref={tagRef} className={className} aria-label={text} role="text">
      {words.map((word, wi) => {
        const wordStart = charIndex
        charIndex += word.length + 1 // +1 accounts for the space after each word

        return (
          <Fragment key={wi}>
            {/* whitespace-nowrap keeps all characters of one word together */}
            <span className="inline-block whitespace-nowrap">
              {word.split('').map((char, ci) => (
                <span
                  key={ci}
                  className="inline-block overflow-hidden"
                  style={{ verticalAlign: 'bottom', paddingBottom: '0.2em', marginBottom: '-0.2em' }}
                >
                  <span
                    className={ready ? 'inline-block animate-char-reveal' : 'inline-block opacity-0'}
                    style={ready ? { animationDelay: `${delay + (wordStart + ci) * charDelay}ms` } : undefined}
                    aria-hidden="true"
                  >
                    {char}
                  </span>
                </span>
              ))}
            </span>
            {/* Regular space between words — allows natural line breaking */}
            {wi < words.length - 1 && ' '}
          </Fragment>
        )
      })}
    </Tag>
  )
}
