import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface Slide {
  src: string
  alt: string
}

interface ImageCarouselProps {
  slides: Slide[]
  interval?: number
  imgClassName?: string
  className?: string
  eagerFirst?: boolean
}

export function ImageCarousel({
  slides,
  interval = 4500,
  imgClassName = 'object-cover',
  className,
  eagerFirst = false,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)
  // Increments on every slide change so each newly active image gets a fresh key,
  // forcing React to remount it and replay animate-carousel-enter.
  const [changeCount, setChangeCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
      setChangeCount((c) => c + 1)
    }, interval)
    return () => clearInterval(timer)
  }, [slides.length, interval])

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: 'opacity 700ms ease-in-out',
          }}
          aria-hidden={i !== current}
        >
          <img
            // Key changes when this slide becomes active → remount → animation replays
            key={i === current ? `${i}-${changeCount}` : i}
            src={slide.src}
            alt={slide.alt}
            loading={eagerFirst && i === 0 ? 'eager' : 'lazy'}
            className={cn(
              'w-full h-full',
              i === current ? 'animate-carousel-enter' : '',
              imgClassName,
            )}
          />
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setChangeCount((c) => c + 1) }}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === current ? true : undefined}
            className={cn(
              'h-2 transition-all duration-300',
              i === current
                ? 'w-6 bg-illuminating'
                : 'w-2 bg-grey-mid hover:bg-white',
            )}
          />
        ))}
      </div>
    </div>
  )
}
