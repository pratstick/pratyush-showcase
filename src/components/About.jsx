import { MarioMushroom, MarioFlower, MarioStar, MarioCoin } from './PixelSprites'
import { Zap, Award, Heart, Code2, Globe, Cpu } from 'lucide-react'
import { playPowerUp } from '../utils/audio'

const powerUpCards = [
  {
    icon: MarioMushroom,
    badge: 'LVL 99',
    title: 'Full Stack Development',
    desc: 'Building end-to-end applications with React, Next.js, Node.js, and modern high-speed tooling.',
    accent: 'border-red-500 bg-red-500/5 dark:bg-red-950/20 text-red-600 dark:text-red-400',
  },
  {
    icon: MarioFlower,
    badge: 'FIRE POWER',
    title: 'AI & Machine Learning',
    desc: 'Integrating LLMs, Gemini, OpenAI, and ML pipelines into real-world products that solve real problems.',
    accent: 'border-amber-500 bg-amber-500/5 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400',
  },
  {
    icon: MarioStar,
    badge: 'STAR POWER',
    title: 'Community Impact',
    desc: 'Designing neighborhood platforms and community software that connect people and spark real support.',
    accent: 'border-yellow-500 bg-yellow-500/5 dark:bg-yellow-950/20 text-yellow-600 dark:text-yellow-400',
  },
  {
    icon: MarioCoin,
    badge: 'CLEAN CODE',
    title: 'Scalable Architecture',
    desc: 'Writing maintainable, robust architecture focused on performance, modularity, and best practices.',
    accent: 'border-emerald-500 bg-emerald-500/5 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* World Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-pixel text-[9px] text-red-500 bg-red-500/10 px-2 py-1 border border-red-500/30 rounded">
            STAGE 1-2
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            About &amp; Player Lore
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-8 font-sans">
          Building things that <span className="text-red-500">matter</span>
        </h2>

        {/* Main Grid: Narrative (Left) + RPG Stat Card (Right) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Left: Professional Story Text (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
            <p>
              I&apos;m a full stack developer and AI engineer with a passion for crafting web
              applications that blend clean, intuitive interfaces with intelligent, resilient backends.
              My work spans from consumer-facing community platforms to enterprise-grade analytics pipelines.
            </p>
            <p>
              Whether it&apos;s wiring up a Gemini AI model to help developers ace technical interviews,
              building a neighborhood mutual-help network, or optimizing supply chains with XGBoost and
              Prophet — I enjoy tackling real problems with elegant, maintainable code.
            </p>

            {/* Quick Status Tags */}
            <div className="pt-4 flex flex-wrap gap-2">
              {['Open to Opportunities', 'Product-Focused', 'Impact-Driven', 'Fast Learner'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono font-medium bg-neutral-100 dark:bg-[#151c32] text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-pixel-sm"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Quirky Character Stats Sheet (5 cols) */}
          <div className="lg:col-span-5 arcade-card p-5 rounded-lg bg-white dark:bg-[#12172b]">
            <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-4">
              <span className="font-sans font-bold text-sm text-neutral-900 dark:text-white">
                Player Profile: Pratyush
              </span>
              <span className="font-pixel text-[9px] text-emerald-600 dark:text-emerald-400">
                LVL 99
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              {/* HP Bar */}
              <div>
                <div className="flex justify-between font-mono text-[11px] mb-1">
                  <span className="text-red-500 font-semibold flex items-center gap-1">
                    <Heart size={11} className="fill-red-500" /> ENERGY (HP)
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">100 / 100</span>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden border border-black/30">
                  <div className="bg-red-500 h-full w-full rounded-full" />
                </div>
              </div>

              {/* Mana Bar */}
              <div>
                <div className="flex justify-between font-mono text-[11px] mb-1">
                  <span className="text-sky-500 font-semibold flex items-center gap-1">
                    <Zap size={11} className="fill-sky-500" /> CODE FUEL (MP)
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">9999 / 9999</span>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden border border-black/30">
                  <div className="bg-sky-500 h-full w-full rounded-full" />
                </div>
              </div>

              {/* Specs */}
              <div className="border-t border-neutral-200 dark:border-neutral-800 pt-3 space-y-2 font-mono text-[11px]">
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">ROLE:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">Full Stack &amp; AI Engineer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">HONOR:</span>
                  <span className="font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                    <Award size={12} /> Adobe Hackathon Finalist
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Ability Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {powerUpCards.map((card) => {
            const IconComp = card.icon
            return (
              <div
                key={card.title}
                onClick={() => playPowerUp()}
                className={`p-4 rounded-lg border-2 ${card.accent} shadow-pixel-sm hover:-translate-y-1 transition-all cursor-pointer group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <IconComp className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  <span className="font-pixel text-[8px] px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-bold">
                    {card.badge}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-sm text-neutral-900 dark:text-white mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
