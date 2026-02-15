import './JunglePhases.css'

export function JunglePhases() {
  const phases = [
    { phase: 1, title: 'Seed the Jungle', items: ['Token launch', 'Liquidity locked', 'Community building'], status: 'done' },
    { phase: 2, title: 'Vines Grow', items: ['CEX listings', 'Influencer partnerships', 'Meme campaigns'], status: 'active' },
    { phase: 3, title: 'Monkeys Unite', items: ['NFT collection', 'Staking rewards', 'Jungle games'], status: 'upcoming' },
    { phase: 4, title: 'Banana Moon', items: ['Major exchange listings', 'Ecosystem expansion', 'World domination'], status: 'upcoming' },
  ]

  return (
    <section className="phases" id="phases">
      <div className="section-bg phases-bg" />
      <div className="container">
        <h2 className="section-title">
          Chimping out stages
        </h2>
        <p className="section-subtitle">
          Hellcat n Henny
        </p>
        <div className="phases-timeline">
          {phases.map((p, i) => (
            <div 
              key={p.phase} 
              className={`phase-card phase-${p.status}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="phase-header">
                <span className="phase-number">Phase {p.phase}</span>
                <span className={`phase-status phase-status-${p.status}`}>
                  {p.status === 'done' && '✓ Done'}
                  {p.status === 'active' && '🔥 Live'}
                  {p.status === 'upcoming' && '🔜 Soon'}
                </span>
              </div>
              <h3 className="phase-title">{p.title}</h3>
              <ul className="phase-items">
                {p.items.map(item => (
                  <li key={item}>🍌 {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
