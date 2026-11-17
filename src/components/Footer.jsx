import { Github, ArrowUp, Heart } from 'lucide-react'
import { playJump, playCoin } from '../utils/audio'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    playJump()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-white dark:bg-[#0a0c16] border-t-2 border-black/80 text-neutral-800 dark:text-neutral-200 pt-12 pb-8 px-4 select-none transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Castle & Flag graphic */}
        <div className="relative mb-5 flex items-end justify-center gap-3">
          {/* Flagpole */}
          <div className="relative flex flex-col items-center">
            <div className="w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-black" />
            <div className="w-1.5 h-24 bg-neutral-300 dark:bg-neutral-600 border-x border-black" />
            <div className="absolute top-3 left-2 bg-emerald-500 border border-black px-1.5 py-0.5 text-[8px] font-pixel text-white font-bold">
              ★ 100%
            </div>
          </div>

          {/* 8-bit Mini Castle */}
          <div className="bg-[#994018] border-2 border-black p-3 rounded-t-sm shadow-pixel-sm">
            <div className="flex justify-center gap-1.5 -mt-6 mb-1.5">
              <div className="w-3.5 h-3.5 bg-[#994018] border border-black" />
              <div className="w-3.5 h-3.5 bg-[#994018] border border-black" />
              <div className="w-3.5 h-3.5 bg-[#994018] border border-black" />
            </div>
            <div className="w-5 h-7 bg-black/80 mx-auto rounded-t-full border border-neutral-700" />
          </div>
        </div>

        <p className="font-sans font-bold text-base md:text-lg text-neutral-900 dark:text-white mb-1">
          Stage Clear! Thank You for Visiting.
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 font-mono">
          Ready to build intelligent full-stack systems together.
        </p>

        {/* Warp to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="px-5 py-2 bg-amber-400 hover:bg-amber-300 text-black font-sans font-semibold text-xs rounded-md pixel-btn flex items-center gap-1.5 mb-8 shadow-pixel-sm"
        >
          <ArrowUp size={14} />
          <span>Back to Top [1-1]</span>
        </button>

        <div className="w-full border-t border-neutral-200 dark:border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
          <p>
            © {year} Pratyush. Built with React, Tailwind &amp; playful arcade magic.
          </p>

          <a
            href="https://github.com/pratstick"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCoin()}
            className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-amber-500 transition-colors"
          >
            <Github size={14} />
            <span>@pratstick</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
