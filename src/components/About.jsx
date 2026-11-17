import { MarioMushroom, MarioFlower, MarioStar, MarioCoin } from './PixelSprites'
import { Zap, Award, Heart } from 'lucide-react'
import { playPowerUp } from '../utils/audio'

const powerUpCards = [
  {
    icon: MarioMushroom,
    title: 'Full Stack Growth',
    badge: 'LVL 99',
    desc: 'Building end-to-end applications with React, Next.js, Node.js, and modern high-speed tooling.',
    color: 'border-red-500 bg-red-950/40 text-red-400',
  },
  {
    icon: MarioFlower,
    title: 'AI & Machine Learning',
    badge: 'FIRE POWER',
    desc: 'Integrating LLMs, Gemini, OpenAI, and ML pipelines into real-world products that solve real problems.',
    color: 'border-orange-500 bg-orange-950/40 text-orange-400',
  },
  {
    icon: MarioStar,
    title: 'Community Impact',
    badge: 'STAR POWER',
    desc: 'Designing neighborhood platforms and community software that connect people and spark real support.',
    color: 'border-yellow-500 bg-yellow-950/40 text-yellow-400',
  },
  {
    icon: MarioCoin,
    title: 'Clean & Scalable Code',
    badge: '100 PTS',
    desc: 'Writing maintainable, robust architecture focused on speed, modularity, and best engineering practices.',
    color: 'border-green-500 bg-green-950/40 text-green-400',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* World header banner */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-pixel text-xs text-red-500 bg-black px-2 py-1 border-2 border-red-500 rounded">
            WORLD 1-2
          </span>
          <span className="font-pixel text-xs text-yellow-400 tracking-wider">
            &gt; PLAYER STATS &amp; ORIGIN STORY
          </span>
        </div>

        {/* Main Card Shell */}
        <div className="bg-[#0e101f] border-4 border-black p-6 md:p-8 rounded-lg shadow-pixel-lg">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Player Stat Sheet (5 cols) */}
            <div className="lg:col-span-5 bg-black border-4 border-neutral-700 p-5 rounded-md text-white font-pixel shadow-pixel">
              <div className="flex items-center justify-between border-b-2 border-neutral-800 pb-3 mb-4">
                <span className="text-yellow-400 text-xs">PLAYER 1: PRATYUSH</span>
                <span className="text-green-400 text-[10px]">LVL 99</span>
              </div>

              {/* Character Specs */}
              <div className="space-y-3 text-[10px]">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-red-400 flex items-center gap-1">
                      <Heart size={10} className="fill-red-500" /> HP (ENERGY)
                    </span>
                    <span className="text-neutral-300">100 / 100</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2.5 rounded-sm overflow-hidden border border-neutral-600">
                    <div className="bg-red-500 h-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-blue-400 flex items-center gap-1">
                      <Zap size={10} className="fill-blue-400" /> MANA (CODE FUEL)
                    </span>
                    <span className="text-neutral-300">9999 / 9999</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2.5 rounded-sm overflow-hidden border border-neutral-600">
                    <div className="bg-blue-500 h-full w-full" />
                  </div>
                </div>

                <div className="border-t border-neutral-800 pt-3 space-y-2 text-neutral-300">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">CLASS:</span>
                    <span className="text-yellow-300">Full Stack / AI Wizard</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">GUILD:</span>
                    <span className="text-cyan-300">Open Source / Builders</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">TROPHY:</span>
                    <span className="text-yellow-400 flex items-center gap-1">
                      <Award size={10} /> Adobe Hackathon Finalist
                    </span>
                  </div>
                </div>

                {/* Badges / Buffs */}
                <div className="border-t border-neutral-800 pt-3">
                  <span className="text-[9px] text-neutral-400 block mb-2">ACTIVE BUFFS:</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-1.5 py-0.5 bg-yellow-950 border border-yellow-600 text-yellow-300 text-[8px]">
                      +50 SPEED
                    </span>
                    <span className="px-1.5 py-0.5 bg-purple-950 border border-purple-600 text-purple-300 text-[8px]">
                      +99 LLM LOGIC
                    </span>
                    <span className="px-1.5 py-0.5 bg-green-950 border border-green-600 text-green-300 text-[8px]">
                      CLEAN ARCHITECTURE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Lore & Dialogue Box (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h2 className="font-pixel text-2xl md:text-3xl text-white retro-shadow mb-4">
                  BUILDING THINGS THAT <span className="text-yellow-400">MATTER</span>
                </h2>

                {/* RPG Dialogue Container */}
                <div className="bg-black/80 border-2 border-white/60 p-5 rounded-md font-arcade text-xl md:text-2xl text-neutral-200 leading-relaxed space-y-3 mb-6 shadow-pixel">
                  <p>
                    &gt; &quot;I&apos;m a full stack developer and AI engineer with a passion for crafting web
                    applications that blend clean interfaces with intelligent backends. My work spans
                    from consumer-facing community platforms to enterprise-grade analytics pipelines.&quot;
                  </p>
                  <p>
                    &gt; &quot;Whether it&apos;s wiring up a Gemini AI model to help developers ace interviews,
                    building a neighborhood help network, or optimizing supply chains with XGBoost and
                    Prophet — I enjoy tackling real problems with elegant, maintainable code.&quot;
                  </p>
                </div>

                {/* Quest tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['OPEN FOR HIRES', 'PRODUCT FOCUSED', 'RAPID PROTOTYPER', 'AI INTEGRATOR'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 font-pixel text-[9px] bg-neutral-900 text-yellow-300 border-2 border-black rounded pixel-btn"
                    >
                      ★ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid: 4 Power-Up Ability Cards */}
          <div className="mt-8 pt-8 border-t-2 border-neutral-800 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {powerUpCards.map((card) => {
              const IconComp = card.icon
              return (
                <div
                  key={card.title}
                  onClick={() => playPowerUp()}
                  className={`p-4 rounded-md border-2 ${card.color} bg-black/60 shadow-pixel pixel-btn cursor-pointer group transition-all`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <IconComp className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    <span className="font-pixel text-[8px] px-1.5 py-0.5 bg-black border border-current rounded">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="font-pixel text-xs text-white mb-2 group-hover:text-yellow-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
