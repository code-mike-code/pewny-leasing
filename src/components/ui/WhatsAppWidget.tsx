const WA_NUMBER = '48530181372'
const WA_URL = `https://wa.me/${WA_NUMBER}`

export function WhatsAppWidget() {
  return (
    <div className="fixed bottom-10 right-6 z-50 w-14 h-14">
      {/* Pulsing ring */}
      <span
        className="absolute inset-0 rounded-circle bg-white animate-wa-ping"
        aria-hidden="true"
      />
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Napisz do nas na WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-circle bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200"
      >
        {/* Ikona czatu (MessageCircle - bez brandingu WhatsApp) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#111111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="28"
          height="28"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </a>
    </div>
  )
}
