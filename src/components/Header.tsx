import './Header.css'

export function Header() {
  return (
    <header className="header">
      <a href="#top" className="header-logo">$KOOLAID</a>
      <nav className="header-nav">
        <a href="#phases">Chimping out stages</a>
        <a href="#tribe">Our Hood</a>
        <a href="#tribe" className="header-buy">Buy Now</a>
      </nav>
    </header>
  )
}
