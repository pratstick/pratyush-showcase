import { useState, useEffect, useCallback } from 'react'
import { Github, Linkedin, Mail, Download, Play, Trophy } from 'lucide-react'
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

  // Spacebar jump trigger
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
      className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden pt-8 pb-16 px-4"
    >
      {/* Drifting 8-bit clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 opacity-70">
        <div className="absolute top-8 left-[10%] animate-cloud-drift" style={{ animationDuration: '55s' }}>
          <MarioCloud className="w-28 h-14 md:w-36 md:h-18" />
        </div>
        <div className="absolute top-24 left-[55%] animate-cloud-drift" style={{ animationDuration: '40s', animationDelay: '-15s' }}>
          <MarioCloud className="w-20 h-10 md:w-28 md:h-14" />
        </div>
        <div className="absolute top-44 left-[80%] animate-cloud-drift" style={{ animationDuration: '65s', animationDelay: '-30s' }}>
          <MarioCloud className="w-32 h-16" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full text-center my-auto">
        {/* World indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-yellow-300 font-pixel text-[10px] md:text-xs rounded border-2 border-yellow-400 shadow-pixel mb-6">
          <Trophy size={14} className="text-yellow-400" />
          <span>STAGE 1-1: PRATYUSH KINGDOM</span>
          <span className="text-neutral-400">|</span>
          <span className="text-green-400">STATUS: READY TO CODE</span>
        </div>

        {/* Arcade Title Marquee */}
        <div className="mb-6">
          <h1 className="font-pixel text-3xl sm:text-5xl md:text-6xl text-white tracking-wider retro-shadow leading-tight mb-3">
            SUPER <span className="text-red-500">PRATYUSH</span>
          </h1>
          <p className="font-pixel text-xs sm:text-sm md:text-base text-yellow-300 tracking-wide retro-shadow-sm">
            FULL STACK DEVELOPER &amp; AI ENGINEER [LVL 99]
          </p>
        </div>

        {/* Avatar & Interactive Question Mark Row */}
        <div className="my-8 flex flex-col items-center justify-center gap-6">
          {/* Mystery Blocks Row */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <InteractiveQuestionBlock
              rewardText="+200 PTS"
              label="?"
              onHit={() => handleMysteryBlock('🍄 POWER-UP: Adobe Hackathon Finalist!')}
            />
            <InteractiveQuestionBlock
              rewardText="★ STAR!"
              label="?"
              onHit={() => handleMysteryBlock('★ STARMAN: Invincibility unlocked!')}
            />
            <InteractiveQuestionBlock
              rewardText="+500 PTS"
              label="?"
              onHit={() => handleMysteryBlock('🔥 FIRE FLOWER: AI & Machine Learning mastery!')}
            />
          </div>

          {/* Interactive Player Avatar */}
          <div className="flex flex-col items-center cursor-pointer group" onClick={handleAvatarJump}>
            <PratyushAvatar className="w-20 h-20 md:w-24 md:h-24" isJumping={avatarJumping} />
            <span className="font-pixel text-[9px] text-neutral-300 bg-black/80 px-2 py-0.5 rounded border border-neutral-700 mt-2 group-hover:border-yellow-400 group-hover:text-yellow-300 transition-colors">
              CLICK OR PRESS SPACE TO JUMP!
            </span>
          </div>

          {/* Floating Trivia notification */}
          {triviaMsg && (
            <div className="font-pixel text-xs text-yellow-300 bg-black/90 px-4 py-2 rounded-lg border-2 border-yellow-400 animate-bounce shadow-pixel">
              {triviaMsg}
            </div>
          )}
        </div>

        {/* Bio dialogue box */}
        <div className="max-w-2xl mx-auto bg-black/85 text-left border-4 border-white p-5 rounded-lg shadow-pixel-lg mb-8 backdrop-blur-sm">
          <div className="flex items-center justify-between border-b-2 border-neutral-700 pb-2 mb-3">
            <span className="font-pixel text-[10px] text-red-500 font-bold">QUEST OBJECTIVE</span>
            <span className="font-pixel text-[9px] text-neutral-400">SCROLL DOWN TO PROGRESS</span>
          </div>
          <p className="font-arcade text-xl sm:text-2xl text-neutral-200 leading-snug">
            &gt; &quot;I build intelligent web applications and data-driven solutions — from AI-powered tools
            to community platforms and enterprise analytics systems.&quot;
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="#projects"
            onClick={() => playPipe()}
            className="px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-pixel text-xs md:text-sm rounded pixel-btn flex items-center gap-2"
          >
            <Play size={16} className="fill-white" />
            <span>START GAME [VIEW WORK]</span>
          </a>

          <a
            href="https://drive.google.com/file/d/1LG-571O4afUFPksKR3V2h1WZaHY2ju7C/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playPowerUp()}
            className="px-6 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-black font-pixel text-xs md:text-sm rounded pixel-btn flex items-center gap-2"
          >
            <Download size={16} />
            <span>SAVE GAME [DOWNLOAD CV]</span>
          </a>
        </div>

        {/* Social Arcade Slots */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/pratstick"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playJump()}
            className="p-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-yellow-400 border-2 border-black rounded pixel-btn flex items-center gap-2 font-pixel text-[10px]"
            aria-label="GitHub"
          >
            <Github size={18} />
            <span className="hidden sm:inline">GITHUB</span>
          </a>

          <a
            href="https://linkedin.com/in/pratyush-k-/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playJump()}
            className="p-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-blue-400 border-2 border-black rounded pixel-btn flex items-center gap-2 font-pixel text-[10px]"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
            <span className="hidden sm:inline">LINKEDIN</span>
          </a>

          <a
            href="mailto:pratyushk2005@gmail.com"
            onClick={() => playJump()}
            className="p-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-red-400 border-2 border-black rounded pixel-btn flex items-center gap-2 font-pixel text-[10px]"
            aria-label="Email"
          >
            <Mail size={18} />
            <span className="hidden sm:inline">EMAIL</span>
          </a>
        </div>
      </div>

      {/* Mario Bush Ground Trim */}
      <div className="w-full flex items-end justify-between px-6 pointer-events-none opacity-80">
        <MarioBush className="w-20 h-10 md:w-28 md:h-14" />
        <MarioBush className="w-16 h-8 md:w-24 md:h-12 hidden sm:block" />
        <MarioBush className="w-20 h-10 md:w-28 md:h-14" />
      </div>
    </section>
  )
}
