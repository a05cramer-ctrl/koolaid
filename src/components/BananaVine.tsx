interface BananaVineProps {
  side: 'left' | 'right'
}

export function BananaVine({ side }: BananaVineProps) {
  return (
    <div className={`banana-vine banana-vine-${side}`} aria-hidden>
      <svg viewBox="0 0 80 400" className="vine-svg">
        {/* Vine stem */}
        <path 
          d="M 40 0 Q 20 100 40 200 Q 60 300 40 400" 
          fill="none" 
          stroke="#22C55E" 
          strokeWidth="8" 
          strokeLinecap="round"
        />
        <path 
          d="M 40 0 Q 20 100 40 200 Q 60 300 40 400" 
          fill="none" 
          stroke="#16A34A" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
        {/* Leaves */}
        <ellipse cx="20" cy="80" rx="25" ry="8" fill="#22C55E" transform="rotate(-30 20 80)" />
        <ellipse cx="60" cy="180" rx="25" ry="8" fill="#22C55E" transform="rotate(30 60 180)" />
        <ellipse cx="15" cy="280" rx="25" ry="8" fill="#16A34A" transform="rotate(-45 15 280)" />
        {/* Bananas */}
        <ellipse cx="35" cy="120" rx="10" ry="5" fill="#FDE047" transform="rotate(-20 35 120)" />
        <ellipse cx="50" cy="240" rx="10" ry="5" fill="#FBBF24" transform="rotate(15 50 240)" />
        <ellipse cx="30" cy="350" rx="10" ry="5" fill="#FDE047" transform="rotate(-10 30 350)" />
      </svg>
    </div>
  )
}
