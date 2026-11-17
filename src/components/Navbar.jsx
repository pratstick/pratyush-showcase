import { useState } from 'react'
import { Menu, X, Volume2, VolumeX, Tv } from 'lucide-react'
import { playJump, playPipe, playPowerUp, playCoin, setMuted } from '../utils/audio'
import { MarioCoin, MarioMushroom } from './PixelSprites'

const navLinks = [
  { href: '#about', label: 'About', stage: '1-2' },
  { href: '#skills', label: 'Skills', stage: '1-3' },
  { href: '#projects', label: 'Projects', stage: '1-4' },
  { href: '#contact', label: 'Contact', stage: '8-4' },
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
  const [isAudioMuted, setIsAudioMuted] = useState(true) // Muted by default for professional UX

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
    <nav className="sticky top-0 z-50 w-full bg-[#0c101d]/90 dark:bg-[#0c101d]/90 bg-white/90 backdrop-blur-md border-b-2 border-black/80 select-none shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        {/* Left: Brand & Mario Arcade Stats */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="#hero"
            onClick={() => playJump()}
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-7 h-7 rounded bg-red-600 border border-black flex items-center justify-center font-pixel text-xs text-white pixel-btn shadow-none">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-tight text-neutral-900 dark:text-white group-hover:text-red-500 transition-colors">
                Pratyush
              </span>
              <span className="font-pixel text-[9px] text-amber-500 tracking-wider">
                {formattedScore} PTS
              </span>
            </div>
          </a>

          {/* Interactive Coin counter */}
          <div className="hidden sm:flex items-center gap-1.5 bg-black/5 dark:bg-black/50 px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 font-pixel text-[10px] text-amber-600 dark:text-amber-400">
            <MarioCoin className="w-3.5 h-3.5" />
            <span>x{formattedCoins}</span>
          </div>
        </div>

        {/* Center: Stage Navigation Links (Clean, readable sans-serif with quirky stage numbers) */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-amber-600 dark:hover:text-amber-400 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/60 flex items-center gap-1.5 transition-all"
              >
                <span className="font-pixel text-[8px] text-red-500 bg-red-500/10 px-1 py-0.5 rounded">
                  {link.stage}
                </span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Arcade Mode Toggles & Action */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle (With clear visual status) */}
          <button
            type="button"
            onClick={toggleSound}
            className={`px-2 py-1.5 rounded-md font-pixel text-[9px] flex items-center gap-1 pixel-btn ${
              isAudioMuted
                ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                : 'bg-emerald-600 text-white font-bold'
            }`}
            title={isAudioMuted ? 'Click to enable 8-bit sound effects' : 'Mute sound'}
            aria-label="Toggle Sound"
          >
            {isAudioMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            <span className="hidden sm:inline">{isAudioMuted ? 'SFX' : 'ON'}</span>
          </button>

          {/* CRT Filter Toggle */}
          <button
            type="button"
            onClick={() => {
              playPowerUp()
              onToggleCrt()
            }}
            className={`px-2 py-1.5 rounded-md font-pixel text-[9px] flex items-center gap-1 pixel-btn ${
              isCrt
                ? 'bg-sky-500 text-black font-bold'
                : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
            }`}
            title="Toggle CRT Retro Filter"
            aria-label="Toggle CRT Filter"
          >
            <Tv size={12} />
            <span className="hidden sm:inline">CRT</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-2 py-1.5 rounded-md font-pixel text-[9px] bg-amber-400 hover:bg-amber-300 text-black pixel-btn font-bold"
            title="Switch theme (Overworld / Underground)"
          >
            {theme === 'dark' ? '☀️ 1-1' : '🌙 1-2'}
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="hidden sm:flex px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-pixel text-[10px] pixel-btn rounded-md items-center gap-1.5"
          >
            <MarioMushroom className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playJump()
              setIsOpen(!isOpen)
            }}
            className="md:hidden p-1.5 bg-neutral-200 dark:bg-neutral-800 border border-black rounded pixel-btn text-neutral-800 dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0c101d] border-t border-neutral-300 dark:border-neutral-800 px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="flex items-center justify-between py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-amber-500 border-b border-neutral-200 dark:border-neutral-800"
            >
              <span>{link.label}</span>
              <span className="font-pixel text-[9px] text-red-500">STAGE {link.stage}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="block w-full py-2.5 text-center bg-emerald-600 text-white font-pixel text-xs rounded-md pixel-btn mt-3"
          >
            Hire Player 1
          </a>
        </div>
      )}
    </nav>
  )
}
