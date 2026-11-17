import { useState, useEffect, useCallback } from 'react'
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles } from 'lucide-react'
import {
  MarioCloud,
  MarioBush,
  InteractiveQuestionBlock,
  PratyushAvatar,
} from './PixelSprites'
import { playJump, playPowerUp, playPipe } from '../utils/audio'

export default function Hero({ onAddScore, onAddCoin }) {
  const [avatarJumping, setAvatarJumping] = useState(false)
  const [triviaMsg, setTriviaMsg] = useState('')

  const handleAvatarJump = useCallback(() => {
    playJump()
    setAvatarJumping(true)
    if (onAddScore) onAddScore(100)
    setTimeout(() => setAvatarJumping(false), 250)
  }, [onAddScore])

  // Spacebar jump trigger when not typing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault()
        handleAvatarJump()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleAvatarJump])

  const handleMysteryBlock = (msg) => {
    if (onAddCoin) onAddCoin()
    setTriviaMsg(msg)
    setTimeout(() => setTriviaMsg(''), 3500)
  }

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden pt-10 pb-16 px-4"
    >
      {/* Drifting 8-bit clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 opacity-60">
        <div className="absolute top-8 left-[10%] animate-cloud-drift" style={{ animationDuration: '60s' }}>
          <MarioCloud className="w-24 h-12 md:w-32 md:h-16" />
        </div>
        <div className="absolute top-28 left-[60%] animate-cloud-drift" style={{ animationDuration: '45s', animationDelay: '-18s' }}>
          <MarioCloud className="w-20 h-10 md:w-24 md:h-12" />
        </div>
        <div className="absolute top-48 left-[80%] animate-cloud-drift" style={{ animationDuration: '70s', animationDelay: '-35s' }}>
          <MarioCloud className="w-28 h-14" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full text-center my-auto">
        {/* World badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#151c32] text-neutral-800 dark:text-neutral-200 border-2 border-black text-xs font-mono mb-6 shadow-pixel-sm">
          <span className="font-pixel text-[9px] text-red-500 font-bold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/30">
            WORLD 1-1
          </span>
          <span className="text-neutral-600 dark:text-neutral-300 font-sans text-xs">
            Available for full-time roles &amp; freelance
          </span>
        </div>

        {/* Name Heading (High readability bold modern sans with quirky retro accent) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4">
          Hi, I&apos;m{' '}
          <span className="text-red-500 dark:text-red-500 relative inline-block">
            Pratyush
            <span className="font-pixel text-[10px] text-amber-500 absolute -top-3 -right-6 hidden sm:inline">
              LVL 99
            </span>
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mb-6 font-sans">
          Full Stack Developer &amp; AI Engineer
        </p>

        {/* Description (Clean, legible prose) */}
        <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300 text-base md:text-lg leading-relaxed mb-8">
          I build intelligent web applications and data-driven solutions — from AI-powered tools
          to community platforms and enterprise analytics systems.
        </p>

        {/* Quirky Interactive Element: Mystery Question Blocks & Jumping Avatar */}
        <div className="my-6 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-4 sm:gap-5">
            <InteractiveQuestionBlock
              rewardText="+200 PTS"
              label="?"
              onHit={() => handleMysteryBlock('🍄 Power-Up: Adobe Hackathon Finalist!')}
            />
            <InteractiveQuestionBlock
              rewardText="★ 1-UP!"
              label="?"
              onHit={() => handleMysteryBlock('★ Star Power: Full Stack & AI Systems!')}
            />
            <InteractiveQuestionBlock
              rewardText="+500 PTS"
              label="?"
              onHit={() => handleMysteryBlock('🔥 Fire Flower: Rapid Prototyping!')}
            />
          </div>

          {/* Interactive Player Avatar */}
          <div
            className="flex flex-col items-center cursor-pointer group mt-2"
            onClick={handleAvatarJump}
          >
            <PratyushAvatar className="w-16 h-16 md:w-20 md:h-20" isJumping={avatarJumping} />
            <span className="font-pixel text-[8px] text-neutral-500 dark:text-neutral-400 group-hover:text-amber-500 transition-colors mt-1">
              [CLICK OR PRESS SPACE TO JUMP]
            </span>
          </div>

          {/* Floating Trivia notification */}
          {triviaMsg && (
            <div className="font-sans text-xs font-semibold text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/80 px-4 py-2 rounded-md border-2 border-amber-500 animate-fade-in shadow-pixel-sm">
              {triviaMsg}
            </div>
          )}
        </div>

        {/* CTA Buttons (Professional, high-contrast & tactile) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            onClick={() => playPipe()}
            className="w-full sm:w-auto px-7 py-3 bg-red-600 hover:bg-red-500 text-white font-sans font-bold text-sm rounded-md pixel-btn flex items-center justify-center gap-2"
          >
            <span>View My Work</span>
            <ArrowDown size={16} />
          </a>

          <a
            href="https://drive.google.com/file/d/1LG-571O4afUFPksKR3V2h1WZaHY2ju7C/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playPowerUp()}
            className="w-full sm:w-auto px-7 py-3 bg-amber-400 hover:bg-amber-300 text-black font-sans font-bold text-sm rounded-md pixel-btn flex items-center justify-center gap-2"
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/pratstick"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playJump()}
            className="p-2.5 bg-white dark:bg-[#151c32] hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-2 border-black rounded-md pixel-btn flex items-center gap-2 font-mono text-xs font-medium"
            aria-label="GitHub"
          >
            <Github size={18} />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/pratyush-k-/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playJump()}
            className="p-2.5 bg-white dark:bg-[#151c32] hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-2 border-black rounded-md pixel-btn flex items-center gap-2 font-mono text-xs font-medium"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href="mailto:pratyushk2005@gmail.com"
            onClick={() => playJump()}
            className="p-2.5 bg-white dark:bg-[#151c32] hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-2 border-black rounded-md pixel-btn flex items-center gap-2 font-mono text-xs font-medium"
            aria-label="Email"
          >
            <Mail size={18} />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>

      {/* Bush Ground Trim */}
      <div className="w-full flex items-end justify-between px-6 pointer-events-none opacity-60">
        <MarioBush className="w-16 h-8 md:w-24 md:h-12" />
        <MarioBush className="w-14 h-7 md:w-20 md:h-10 hidden sm:block" />
        <MarioBush className="w-16 h-8 md:w-24 md:h-12" />
      </div>
    </section>
  )
}
