import { cn } from '@/lib/utils'
import { useNavigate, useLocation } from 'react-router-dom'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      if (pathname === '/') {
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/' + href)
      }
    }
    onClick?.()
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'text-lg font-bold text-dark hover:text-grey-mid transition-colors duration-200',
        className,
      )}
    >
      {children}
    </a>
  )
}
