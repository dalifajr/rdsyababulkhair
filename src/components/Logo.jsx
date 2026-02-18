const Logo = ({ size = 60, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#065f5b" />
        </linearGradient>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#b8960d" />
        </linearGradient>
      </defs>
      
      {/* Main circle background */}
      <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />
      
      {/* Inner decorative ring */}
      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
      
      {/* Quran/Book symbol */}
      <g transform="translate(50, 50)">
        {/* Book base */}
        <path
          d="M-20 -5 L-20 20 Q0 25 20 20 L20 -5 Q0 0 -20 -5Z"
          fill="#ffffff"
          opacity="0.95"
        />
        {/* Book spine */}
        <line x1="0" y1="-5" x2="0" y2="22" stroke="url(#goldGradient)" strokeWidth="2" />
        {/* Left page lines */}
        <line x1="-15" y1="2" x2="-3" y2="4" stroke="#0d9488" strokeWidth="1.5" opacity="0.6" />
        <line x1="-15" y1="8" x2="-3" y2="10" stroke="#0d9488" strokeWidth="1.5" opacity="0.6" />
        <line x1="-15" y1="14" x2="-3" y2="16" stroke="#0d9488" strokeWidth="1.5" opacity="0.6" />
        {/* Right page lines */}
        <line x1="15" y1="2" x2="3" y2="4" stroke="#0d9488" strokeWidth="1.5" opacity="0.6" />
        <line x1="15" y1="8" x2="3" y2="10" stroke="#0d9488" strokeWidth="1.5" opacity="0.6" />
        <line x1="15" y1="14" x2="3" y2="16" stroke="#0d9488" strokeWidth="1.5" opacity="0.6" />
      </g>
      
      {/* Crescent moon symbol */}
      <g transform="translate(50, 25)">
        <path
          d="M0 -12 A10 10 0 1 1 0 8 A7 7 0 1 0 0 -12"
          fill="url(#goldGradient)"
        />
        {/* Star */}
        <polygon
          points="12,-2 13.5,2 18,2 14.5,5 16,9 12,6.5 8,9 9.5,5 6,2 10.5,2"
          fill="url(#goldGradient)"
          transform="scale(0.6)"
        />
      </g>
      
      {/* Text: RQ */}
      <text
        x="50"
        y="75"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="12"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        SYABABUL KHAIR
      </text>
    </svg>
  )
}

export default Logo
