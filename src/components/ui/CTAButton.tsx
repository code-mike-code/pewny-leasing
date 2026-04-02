import { cn } from '@/lib/utils'
import './CTAButton.css'

interface CTAButtonProps {
  href?: string
  onClick?: React.MouseEventHandler
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  variant?: 'yellow' | 'dark' | 'grey' | 'outline-yellow'
  size?: 'sm' | 'md'
  className?: string
  children: React.ReactNode
}

export function CTAButton({
  href,
  onClick,
  type = 'button',
  disabled,
  variant = 'yellow',
  size = 'md',
  className,
  children,
}: CTAButtonProps) {
  const classes = cn('cta-btn', `cta-btn--${variant}`, `cta-btn--${size}`, className)

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
