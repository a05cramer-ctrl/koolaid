interface MonkeyProps {
  side: 'left' | 'right'
}

export function Monkey({ side }: MonkeyProps) {
  return (
    <div className={`monkey monkey-${side}`} aria-hidden>
      <svg viewBox="0 0 100 120" className="monkey-svg">
        {/* Simple cartoon monkey - rounded blob style */}
        {/* Body - purple-tinted rounded shape */}
        <ellipse cx="50" cy="85" rx="28" ry="25" fill="#7C3AED" stroke="#5B21B6" strokeWidth="2" />
        {/* Head - larger circle */}
        <circle cx="50" cy="40" r="32" fill="#9333EA" stroke="#6B21A8" strokeWidth="2" />
        {/* Ears - small circles */}
        <circle cx="22" cy="32" r="10" fill="#A855F7" stroke="#6B21A8" strokeWidth="1" />
        <circle cx="78" cy="32" r="10" fill="#A855F7" stroke="#6B21A8" strokeWidth="1" />
        {/* Face mask - lighter purple */}
        <ellipse cx="50" cy="45" rx="18" ry="20" fill="#A78BFA" />
        {/* Big cartoon eyes */}
        <ellipse cx="42" cy="42" rx="6" ry="8" fill="#0F0A14" />
        <ellipse cx="58" cy="42" rx="6" ry="8" fill="#0F0A14" />
        <circle cx="44" cy="40" r="2" fill="white" />
        <circle cx="60" cy="40" r="2" fill="white" />
        {/* Wide grin */}
        <path d="M 38 55 Q 50 65 62 55" fill="none" stroke="#5B21B6" strokeWidth="2.5" strokeLinecap="round" />
        {/* Arms - curved, holding nothing */}
        <path d="M 22 75 Q 8 60 15 50" fill="none" stroke="#7C3AED" strokeWidth="10" strokeLinecap="round" />
        <path d="M 78 75 Q 92 60 85 50" fill="none" stroke="#7C3AED" strokeWidth="10" strokeLinecap="round" />
      </svg>
    </div>
  )
}
