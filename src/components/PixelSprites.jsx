import { useState } from 'react'
import { playCoin } from '../utils/audio'

// 8-bit SVG Sprites

export function MarioCoin({ className = "w-6 h-6", spin = true }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`${className} ${spin ? 'animate-coin-spin inline-block' : 'inline-block'}`}
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Outer border */}
      <rect x="4" y="1" width="8" height="14" fill="#000000" />
      <rect x="2" y="2" width="12" height="12" fill="#000000" />
      {/* Gold base */}
      <rect x="4" y="2" width="8" height="12" fill="#fcbc00" />
      <rect x="3" y="3" width="10" height="10" fill="#fcbc00" />
      {/* Highlight */}
      <rect x="4" y="3" width="2" height="10" fill="#fcfcfc" />
      <rect x="5" y="3" width="4" height="2" fill="#fcfcfc" />
      {/* Inner line */}
      <rect x="7" y="5" width="2" height="6" fill="#b88600" />
    </svg>
  )
}

export function MarioMushroom({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Outline */}
      <rect x="4" y="1" width="8" height="7" fill="#000000" />
      <rect x="2" y="3" width="12" height="5" fill="#000000" />
      <rect x="1" y="5" width="14" height="4" fill="#000000" />
      <rect x="3" y="9" width="10" height="6" fill="#000000" />
      {/* Red Cap */}
      <rect x="4" y="2" width="8" height="6" fill="#e52521" />
      <rect x="2" y="4" width="12" height="4" fill="#e52521" />
      <rect x="1" y="6" width="14" height="2" fill="#e52521" />
      {/* White Spots */}
      <rect x="6" y="2" width="4" height="4" fill="#fcfcfc" />
      <rect x="2" y="5" width="2" height="2" fill="#fcfcfc" />
      <rect x="12" y="5" width="2" height="2" fill="#fcfcfc" />
      {/* Face Base */}
      <rect x="4" y="9" width="8" height="5" fill="#fce0a8" />
      {/* Eyes */}
      <rect x="5" y="10" width="1" height="3" fill="#000000" />
      <rect x="10" y="10" width="1" height="3" fill="#000000" />
    </svg>
  )
}

export function MarioStar({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Outline */}
      <polygon
        points="8,1 10,6 15,6 11,9 13,15 8,11 3,15 5,9 1,6 6,6"
        fill="#000000"
        stroke="#000000"
        strokeWidth="1.5"
      />
      {/* Star Yellow */}
      <polygon
        points="8,2 9.6,6 14,6 10.5,8.8 12,13.5 8,10.5 4,13.5 5.5,8.8 2,6 6.4,6"
        fill="#fce000"
      />
      {/* Eyes */}
      <rect x="6.5" y="6.5" width="1" height="3" fill="#000000" />
      <rect x="8.5" y="6.5" width="1" height="3" fill="#000000" />
    </svg>
  )
}

export function MarioFlower({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Outline */}
      <rect x="5" y="1" width="6" height="8" fill="#000000" />
      <rect x="3" y="2" width="10" height="6" fill="#000000" />
      <rect x="7" y="9" width="2" height="6" fill="#000000" />
      <rect x="4" y="12" width="8" height="3" fill="#000000" />
      {/* Orange Ring */}
      <rect x="4" y="2" width="8" height="6" fill="#fc9838" />
      {/* Yellow Ring */}
      <rect x="5" y="3" width="6" height="4" fill="#fce000" />
      {/* White Center */}
      <rect x="6" y="4" width="4" height="2" fill="#fcfcfc" />
      {/* Stem & Leaves */}
      <rect x="7" y="9" width="2" height="5" fill="#00a800" />
      <rect x="4" y="12" width="3" height="2" fill="#00a800" />
      <rect x="9" y="12" width="3" height="2" fill="#00a800" />
      {/* Eyes */}
      <rect x="6.5" y="4" width="1" height="2" fill="#000000" />
      <rect x="8.5" y="4" width="1" height="2" fill="#000000" />
    </svg>
  )
}

export function MarioCloud({ className = "w-24 h-12" }) {
  return (
    <svg viewBox="0 0 48 24" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Cloud Outline */}
      <path
        d="M12 8 h6 v-4 h12 v4 h6 v4 h8 v8 h-40 v-8 h8 z"
        fill="#000000"
      />
      {/* Cloud Body */}
      <path
        d="M13 9 h5 v-4 h10 v4 h5 v4 h7 v6 h-36 v-6 h9 z"
        fill="#fcfcfc"
      />
      {/* Blue shadow tone at bottom */}
      <rect x="7" y="17" width="34" height="2" fill="#bce0fc" />
      {/* Cute Eyes */}
      <rect x="18" y="11" width="2" height="4" fill="#000000" />
      <rect x="28" y="11" width="2" height="4" fill="#000000" />
    </svg>
  )
}

export function MarioBush({ className = "w-20 h-10" }) {
  return (
    <svg viewBox="0 0 40 20" className={className} style={{ imageRendering: 'pixelated' }}>
      <path
        d="M10 6 h6 v-4 h8 v4 h6 v4 h6 v8 h-32 v-8 h6 z"
        fill="#000000"
      />
      <path
        d="M11 7 h5 v-4 h6 v4 h5 v4 h5 v6 h-28 v-6 h7 z"
        fill="#00a800"
      />
      <rect x="9" y="15" width="22" height="2" fill="#005800" />
    </svg>
  )
}

export function MarioPipeSprite({ height = 64, width = 72 }) {
  return (
    <div className="relative inline-flex flex-col items-center select-none" style={{ width }}>
      {/* Pipe Rim Top */}
      <div className="w-full h-8 mario-pipe-top rounded-t-sm flex items-center justify-between px-2">
        <div className="w-2 h-full bg-white/30" />
        <div className="w-2 h-full bg-black/30" />
      </div>
      {/* Pipe Neck */}
      <div
        className="w-[84%] mario-pipe border-t-0"
        style={{ height }}
      >
        <div className="w-2 h-full bg-white/20 absolute left-2 top-0" />
        <div className="w-2 h-full bg-black/30 absolute right-2 top-0" />
      </div>
    </div>
  )
}

// Interactive Mystery Question Block
export function InteractiveQuestionBlock({
  onHit,
  rewardText = "+100 PTS",
  className = "w-14 h-14",
  label = "?"
}) {
  const [bumping, setBumping] = useState(false)
  const [floatingRewards, setFloatingRewards] = useState([])

  const handleClick = () => {
    playCoin()
    setBumping(true)
    setTimeout(() => setBumping(false), 220)

    const id = Date.now()
    setFloatingRewards((prev) => [...prev, { id, text: rewardText }])
    setTimeout(() => {
      setFloatingRewards((prev) => prev.filter((r) => r.id !== id))
    }, 800)

    if (onHit) onHit()
  }

  return (
    <div className="relative inline-block select-none">
      {/* Floating coin / reward popout */}
      {floatingRewards.map((reward) => (
        <div
          key={reward.id}
          className="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-none z-30 animate-coin-hop flex items-center gap-1 font-pixel text-xs text-yellow-300 drop-shadow-[0_2px_0_#000]"
        >
          <MarioCoin className="w-4 h-4" />
          <span>{reward.text}</span>
        </div>
      ))}

      <button
        type="button"
        onClick={handleClick}
        className={`mario-question-block ${className} flex items-center justify-center font-pixel text-2xl font-bold text-white transition-transform ${
          bumping ? '-translate-y-3' : 'hover:-translate-y-1'
        }`}
        title="Hit the block for coins!"
        aria-label="Mystery Question Block"
      >
        <span className="drop-shadow-[2px_2px_0_#000000]">{label}</span>
      </button>
    </div>
  )
}

// 8-bit Pratyush Developer Avatar
export function PratyushAvatar({ className = "w-20 h-20", isJumping = false }) {
  return (
    <div
      className={`relative inline-block transition-transform duration-200 ${
        isJumping ? '-translate-y-6 scale-110' : ''
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className={className}
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Mario Red Cap */}
        <rect x="7" y="1" width="10" height="3" fill="#e52521" />
        <rect x="6" y="3" width="13" height="2" fill="#e52521" />
        <rect x="15" y="4" width="5" height="1" fill="#e52521" />
        {/* Cap emblem "P" */}
        <circle cx="12" cy="2.5" r="1.5" fill="#fcfcfc" />
        <text x="12" y="3.3" fontSize="2.2" textAnchor="middle" fill="#e52521" fontWeight="bold">P</text>

        {/* Hair */}
        <rect x="5" y="5" width="4" height="4" fill="#2d1b00" />
        <rect x="4" y="7" width="2" height="3" fill="#2d1b00" />

        {/* Face */}
        <rect x="8" y="5" width="10" height="6" fill="#fce0a8" />
        <rect x="7" y="6" width="2" height="4" fill="#fce0a8" />

        {/* Cool Developer Shades */}
        <rect x="9" y="6" width="4" height="2" fill="#000000" />
        <rect x="14" y="6" width="4" height="2" fill="#000000" />
        <rect x="13" y="6" width="1" height="1" fill="#000000" />
        <rect x="10" y="6" width="1" height="1" fill="#00f8ff" />
        <rect x="15" y="6" width="1" height="1" fill="#00f8ff" />

        {/* Mustache */}
        <rect x="10" y="9" width="8" height="1.5" fill="#2d1b00" />

        {/* Overalls / Red Shirt */}
        <rect x="7" y="11" width="10" height="4" fill="#e52521" />
        {/* Blue Overalls */}
        <rect x="6" y="13" width="12" height="6" fill="#0026a3" />
        <rect x="8" y="11" width="2" height="4" fill="#0026a3" />
        <rect x="14" y="11" width="2" height="4" fill="#0026a3" />
        {/* Yellow Buttons */}
        <rect x="8" y="13" width="1.5" height="1.5" fill="#fcbc00" />
        <rect x="14.5" y="13" width="1.5" height="1.5" fill="#fcbc00" />

        {/* Hands / Gloves */}
        <rect x="4" y="14" width="2.5" height="3" fill="#fcfcfc" />
        <rect x="17.5" y="14" width="2.5" height="3" fill="#fcfcfc" />

        {/* Brown Boots */}
        <rect x="6" y="19" width="4" height="3" fill="#6c1e00" />
        <rect x="14" y="19" width="4" height="3" fill="#6c1e00" />
      </svg>
    </div>
  )
}
