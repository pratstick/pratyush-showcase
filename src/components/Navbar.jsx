import { useState } from 'react'
import { Menu, X, Volume2, VolumeX, Tv } from 'lucide-react'
import { playJump, playPipe, playPowerUp, playCoin, setMuted } from '../utils/audio'
import { MarioCoin, MarioMushroom } from './PixelSprites'

const navLinks = [
  { href: '#hero', label: 'HERO', stage: '1-1' },
  { href: '#about', label: 'ABOUT', stage: '1-2' },
  { href: '#skills', label: 'SKILLS', stage: '1-3' },
  { href: '#projects', label: 'PROJECTS', stage: '1-4' },
  { href: '#contact', label: 'CONTACT', stage: '8-4' },
]

export default function Navbar({
  theme,
  onToggleTheme,
  score,
  coins,
  isCrt,
  onToggleCrt,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAudioMuted, setIsAudioMuted] = useState(false)

  const toggleSound = () => {
    const next = !isAudioMuted
    setIsAudioMuted(next)
    setMuted(next)
    if (!next) playCoin()
  }

  const handleNavClick = () => {
    playPipe()
    setIsOpen(false)
  }

  const formattedScore = String(score).padStart(6, '0')
  const formattedCoins = String(coins).padStart(2, '0')

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0a0b16]/95 border-b-4 border-black backdrop-blur-md select-none font-pixel shadow-pixel">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2.5 flex items-center justify-between gap-2">
        {/* Left: Player & Score */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#hero"
            onClick={() => playJump()}
            className="flex flex-col group text-left"
          >
            <span className="text-red-500 font-bold text-xs sm:text-sm tracking-wider group-hover:text-red-400">
              PRATYUSH
            </span>
            <span className="text-yellow-400 text-[10px] sm:text-xs tracking-widest drop-shadow-[1px_1px_0_#000]">
              {formattedScore}
            </span>
          </a>

          {/* Coin Badge */}
          <div className="flex items-center gap-1 bg-black px-2 py-1 rounded border-2 border-neutral-700 text-[10px] sm:text-xs text-yellow-300">
            <MarioCoin className="w-3.5 h-3.5" />
            <span className="font-bold">x{formattedCoins}</span>
          </div>
        </div>

        {/* Center: Stage Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="px-2.5 py-1.5 text-neutral-300 hover:text-yellow-300 text-[10px] rounded hover:bg-neutral-800/80 border border-transparent hover:border-yellow-400 flex items-center gap-1 transition-all"
              >
                <span className="text-red-400 text-[9px]">[{link.stage}]</span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Arcade Controls & CTA */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            className={`p-1.5 rounded pixel-btn text-xs ${
              isAudioMuted ? 'bg-red-950 text-red-400' : 'bg-green-800 text-green-300'
            }`}
            title={isAudioMuted ? 'Unmute sound' : 'Mute sound'}
            aria-label="Toggle Sound"
          >
            {isAudioMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>

          {/* CRT Filter Toggle */}
          <button
            type="button"
            onClick={() => {
              playPowerUp()
              onToggleCrt()
            }}
            className={`px-2 py-1.5 rounded pixel-btn text-[9px] flex items-center gap-1 ${
              isCrt ? 'bg-cyan-500 text-black font-bold' : 'bg-neutral-800 text-cyan-400'
            }`}
            title="Toggle CRT Scanline Filter"
            aria-label="Toggle CRT Filter"
          >
            <Tv size={12} />
            <span className="hidden sm:inline">CRT</span>
          </button>

          {/* Theme Toggle (World 1-1 / 1-2) */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-2 py-1.5 rounded pixel-btn bg-yellow-400 text-black text-[9px] font-bold"
            title="Switch Theme (1-1 Overworld / 1-2 Underground)"
          >
            {theme === 'dark' ? '☀️ 1-1' : '🌙 1-2'}
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="hidden sm:flex px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white text-[10px] pixel-btn rounded items-center gap-1.5"
          >
            <MarioMushroom className="w-3.5 h-3.5" />
            <span>HIRE ME</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playJump()
              setIsOpen(!isOpen)
            }}
            className="md:hidden p-1.5 bg-neutral-900 border-2 border-black rounded pixel-btn text-yellow-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0e1a] border-t-2 border-black px-4 py-3 space-y-2 text-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="flex items-center justify-between py-2 text-yellow-300 hover:text-white border-b border-neutral-800"
            >
              <span>{link.label}</span>
              <span className="text-red-400 text-[10px]">STAGE {link.stage}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="block w-full py-2 text-center bg-green-600 text-white font-bold rounded pixel-btn mt-2"
          >
            HIRE PLAYER 1
          </a>
        </div>
      )}
    </nav>
  )
}
