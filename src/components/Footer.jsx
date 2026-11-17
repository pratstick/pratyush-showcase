import { Github, ArrowUp, Heart } from 'lucide-react'
import { MarioCoin, MarioStar, MarioBush } from './PixelSprites'
import { playJump, playCoin } from '../utils/audio'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    playJump()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black border-t-4 border-black text-white font-pixel pt-12 pb-8 px-4 select-none">
      {/* Mario Flagpole & Castle Banner */}
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center mb-8">
        {/* Castle & Flag graphic */}
        <div className="relative mb-6 flex items-end justify-center gap-4">
          {/* Flagpole */}
          <div className="relative flex flex-col items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-black" />
            <div className="w-1.5 h-28 bg-neutral-300 border-x border-black" />
            <div className="absolute top-4 left-2 bg-green-500 border border-black px-2 py-0.5 text-[8px] text-black font-bold">
              ★ 100%
            </div>
          </div>

          {/* 8-bit Mini Castle */}
          <div className="bg-[#994018] border-4 border-black p-4 rounded-t-sm shadow-pixel">
            <div className="flex justify-center gap-2 -mt-7 mb-2">
              <div className="w-4 h-4 bg-[#994018] border-2 border-black" />
              <div className="w-4 h-4 bg-[#994018] border-2 border-black" />
              <div className="w-4 h-4 bg-[#994018] border-2 border-black" />
            </div>
            <div className="w-6 h-8 bg-black mx-auto rounded-t-full border border-neutral-700" />
          </div>
        </div>

        <p className="text-yellow-400 text-sm md:text-base tracking-wider mb-2">
          COURSE CLEAR! THANK YOU FOR PLAYING!
        </p>
        <p className="font-arcade text-xl text-neutral-400 mb-6">
          ALL ADVENTURES CONTINUE AT GITHUB.COM/PRATSTICK
        </p>

        {/* Warp to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-pixel text-xs rounded pixel-btn flex items-center gap-2 mb-8"
        >
          <ArrowUp size={14} />
          <span>WARP TO TOP [1-1]</span>
        </button>

        <div className="w-full border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-400">
          <p>
            © {year} PRATYUSH. CODED WITH{' '}
            <Heart size={12} className="inline text-red-500 fill-red-500" /> &amp; RETRO ARCADE MAGIC.
          </p>

          <a
            href="https://github.com/pratstick"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCoin()}
            className="flex items-center gap-2 text-yellow-400 hover:text-white transition-colors"
          >
            <Github size={14} />
            <span>@PRATSTICK</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
