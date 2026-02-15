import './Header.css'
import { PUMP_FUN_URL } from '../constants'

export function Header() {
  return (
    <header className="header">
      <a href="#top" className="header-logo">$KOOLAID</a>
      <nav className="header-nav">
        <a href="#phases">Chimping out stages</a>
        <a href="#tribe">Our Hood</a>
        <a href={PUMP_FUN_URL} target="_blank" rel="noopener noreferrer" className="header-buy">Buy Now</a>
      </nav>
    </header>
  )
}
