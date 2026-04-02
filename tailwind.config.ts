import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FBBF24', // Główny żółty/amber z makiety
        'primary-hover': '#F59E0B',
        navy: '#0B235C', // Nowy ciemny granatowy z makiety
        dark: '#111111',
        'dark-card': '#1C1C1C',
        'glass-bg': 'rgba(255, 255, 255, 0.08)',
        'grey-mid': '#9CA3AF',
        'ghost-white': '#F8F8FF',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        condensed: ['"Roboto Condensed"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0',
        none: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '0',
        circle: '9999px',
      },
      scale: {
        '65': '0.65',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'slide-up': 'slide-up 800ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'scale-in': 'scale-in 900ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'char-reveal': 'char-reveal 900ms ease-out both',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.65)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'char-reveal': {
          '0%': { transform: 'translateY(130%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
