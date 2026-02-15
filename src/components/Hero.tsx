import { useRef, useState } from 'react'
import { CONTRACT_ADDRESS } from '../constants'
import './Hero.css'
import { Monkey } from './Monkey'
import { Splash } from './Splash'
import { BananaVine } from './BananaVine'
import heroImage from '../22CAE1DC-6BB8-4C7F-B4EB-7E6F629854EF-removebg-preview.png'
import ngaSound from '../u_zpj3vbdres-monkey-128368.mp3'

export function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyContractAddress = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const toggleSound = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="hero">
      <div className="hero-bg">
        <Splash />
        <BananaVine side="left" />
        <BananaVine side="right" />
        <Monkey side="left" />
        <Monkey side="right" />
      </div>

      <img 
        src={heroImage} 
        alt="Kool Aid mascot with monkey, bananas and purple punch" 
        className="hero-image"
      />

      <div className="hero-content">
        <div className="hero-badge">$KOOLAID</div>
        <h1 className="hero-headline">
          <span className="headline-main">DRINK THE PUMP.</span>
          <span className="headline-alt">GO BANANAS.</span>
        </h1>
        <p className="hero-subheadline">
          The Ultimate Victim Card Coin
        </p>
        <audio ref={audioRef} src={ngaSound} loop />
        <div className="hero-ctas">
          <button type="button" className="btn btn-primary" onClick={copyContractAddress}>
            {copied ? 'COPIED!' : 'COPY CA'}
          </button>
          <a href="https://x.com/KoolAid_dev" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Join the Hood on X</a>
          <button type="button" className="btn btn-accent" onClick={toggleSound}>
            {isPlaying ? 'STOP SOUND' : 'NGA SOUNDS'}
          </button>
        </div>
      </div>
    </section>
  )
}
