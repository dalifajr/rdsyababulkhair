import { useId } from 'react'

const Logo = ({ size = 60, className = '' }) => {
  const id = useId().replace(/:/g, '')
  const emerald = `emerald-${id}`
  const gold = `gold-${id}`
  const soft = `soft-${id}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={emerald} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#065f5b" />
        </linearGradient>
        <linearGradient id={gold} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#d4af37" />
        </linearGradient>
        <radialGradient id={soft} cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="60" cy="60" r="56" fill={`url(#${emerald})`} />
      <circle cx="60" cy="60" r="56" fill={`url(#${soft})`} />
      <circle cx="60" cy="60" r="49" fill="none" stroke={`url(#${gold})`} strokeWidth="2.6" />

      <path
        d="M28 71V52c0-16 12-28 32-28s32 12 32 28v19"
        fill="none"
        stroke={`url(#${gold})`}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M36 70h48v10c0 2-2 4-4 4H40c-2 0-4-2-4-4V70z"
        fill="#ffffff"
        opacity="0.95"
      />
      <path d="M60 40a10 10 0 1 1 0 20 7 7 0 1 0 0-20z" fill={`url(#${gold})`} />
      <circle cx="70" cy="46" r="1.8" fill={`url(#${gold})`} />

      <path d="M43 66v14c5-2 11-2 17 0V66c-6-2-12-2-17 0z" fill="#ffffff" opacity="0.96" />
      <path d="M60 66v14c6-2 12-2 17 0V66c-5-2-11-2-17 0z" fill="#f6fffd" opacity="0.96" />
      <line x1="60" y1="66" x2="60" y2="80" stroke={`url(#${gold})`} strokeWidth="1.8" />
      <line x1="48" y1="71" x2="56" y2="71" stroke="#0d9488" strokeWidth="1" opacity="0.6" />
      <line x1="48" y1="75" x2="56" y2="75" stroke="#0d9488" strokeWidth="1" opacity="0.6" />
      <line x1="64" y1="71" x2="72" y2="71" stroke="#0d9488" strokeWidth="1" opacity="0.6" />
      <line x1="64" y1="75" x2="72" y2="75" stroke="#0d9488" strokeWidth="1" opacity="0.6" />

      <text
        x="60"
        y="96"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="9"
        fontWeight="700"
        letterSpacing="0.6"
        fontFamily="Segoe UI, sans-serif"
      >
        RQ SYABABUL KHAIR
      </text>
    </svg>
  )
}

export default Logo
