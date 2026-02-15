import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { JunglePhases } from './components/JunglePhases'
import { BananaTribe } from './components/BananaTribe'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="app" id="top">
      <Header />
      <Hero />
      <JunglePhases />
      <BananaTribe />
      <Footer />
    </div>
  )
}

export default App
