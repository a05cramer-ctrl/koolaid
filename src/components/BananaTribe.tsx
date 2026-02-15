import './BananaTribe.css'

export function BananaTribe() {
  const links = [
    { label: 'Twitter', href: '#', icon: '🐦', color: '#1DA1F2' },
  ]

  return (
    <section className="tribe" id="tribe">
      <div className="section-bg tribe-bg" />
      <div className="container">
        <h2 className="section-title">
          Our Hood
        </h2>
        <div className="tribe-stats">
          <div className="tribe-stat">
            <span className="stat-value">10K+</span>
            <span className="stat-label">NGS</span>
          </div>
          <div className="tribe-stat">
            <span className="stat-value">$1M+</span>
            <span className="stat-label">Volume</span>
          </div>
          <div className="tribe-stat">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Chaos</span>
          </div>
        </div>
        <div className="tribe-links">
          {links.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              className="tribe-link"
              style={{ '--link-color': link.color } as React.CSSProperties}
            >
              <span className="tribe-link-icon">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
        <div className="tribe-cta">
          <a href="#" className="btn btn-primary btn-lg">Buy $KOOLAID</a>
        </div>
      </div>
    </section>
  )
}
