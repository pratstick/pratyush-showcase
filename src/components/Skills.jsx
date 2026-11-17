import { useState } from 'react'
import { MarioCoin, MarioMushroom, MarioFlower, MarioStar } from './PixelSprites'
import { Dices } from 'lucide-react'
import { playPowerUp, playJump } from '../utils/audio'

const skillCategories = [
  {
    category: 'FRONTEND SPELLS',
    icon: '⚔️',
    color: 'border-blue-500 bg-blue-950/40 text-blue-300',
    headerColor: 'text-blue-400',
    skills: ['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'React Router', 'Vite'],
  },
  {
    category: 'BACKEND POTIONS',
    icon: '🧪',
    color: 'border-purple-500 bg-purple-950/40 text-purple-300',
    headerColor: 'text-purple-400',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'JWT Auth'],
  },
  {
    category: 'AI / ML RUNES',
    icon: '🔮',
    color: 'border-red-500 bg-red-950/40 text-red-300',
    headerColor: 'text-red-400',
    skills: ['Google Gemini API', 'OpenAI API', 'XGBoost', 'Random Forest', 'Prophet', 'Scikit-learn'],
  },
  {
    category: 'DATA & CLOUD SCROLLS',
    icon: '📜',
    color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300',
    headerColor: 'text-emerald-400',
    skills: ['Databricks', 'Apache Spark', 'Streamlit', 'Linear Programming', 'Feature Engineering'],
  },
  {
    category: 'CMS & AUTH KEYCARDS',
    icon: '🗝️',
    color: 'border-amber-500 bg-amber-950/40 text-amber-300',
    headerColor: 'text-amber-400',
    skills: ['Sanity CMS', 'Clerk Auth', 'Vercel', 'pnpm'],
  },
  {
    category: 'CORE CODE LANGUAGES',
    icon: '💎',
    color: 'border-pink-500 bg-pink-950/40 text-pink-300',
    headerColor: 'text-pink-400',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
]

export default function Skills({ onAddScore }) {
  const [randomSkill, setRandomSkill] = useState(null)

  const handleRollPowerUp = () => {
    playPowerUp()
    if (onAddScore) onAddScore(150)
    const allSkills = skillCategories.flatMap((c) => c.skills)
    const chosen = allSkills[Math.floor(Math.random() * allSkills.length)]
    setRandomSkill(chosen)
  }

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* World header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-xs text-red-500 bg-black px-2 py-1 border-2 border-red-500 rounded">
              WORLD 1-3
            </span>
            <span className="font-pixel text-xs text-yellow-400 tracking-wider">
              &gt; POWER-UP INVENTORY &amp; TECH ARSENAL
            </span>
          </div>

          {/* Quirky Random Power-Up Gacha button */}
          <button
            type="button"
            onClick={handleRollPowerUp}
            className="px-3.5 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-pixel text-[10px] rounded pixel-btn flex items-center gap-2"
          >
            <Dices size={14} />
            <span>RANDOM ITEM ROLL</span>
          </button>
        </div>

        {/* Random Power-up alert */}
        {randomSkill && (
          <div className="mb-6 p-3 bg-black border-2 border-yellow-400 rounded-lg flex items-center justify-between shadow-pixel animate-fade-in font-pixel text-xs text-yellow-300">
            <div className="flex items-center gap-2">
              <MarioStar className="w-5 h-5 animate-spin" />
              <span>EQUIPPED POWER-UP: <strong className="text-white underline">{randomSkill}</strong>!</span>
            </div>
            <span className="text-[10px] text-green-400">+150 EXP GAINED</span>
          </div>
        )}

        {/* Inventory Bag Container */}
        <div className="bg-[#0e101f] border-4 border-black p-6 md:p-8 rounded-lg shadow-pixel-lg">
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-neutral-800">
            <div>
              <h2 className="font-pixel text-2xl md:text-3xl text-white retro-shadow">
                EQUIPPED <span className="text-yellow-400">ARSENAL</span>
              </h2>
              <p className="font-arcade text-xl text-neutral-300 mt-1">
                Verified battle-tested tools across full stack web, AI integration &amp; enterprise data.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <MarioMushroom className="w-8 h-8" />
              <MarioFlower className="w-8 h-8" />
              <MarioCoin className="w-8 h-8" />
            </div>
          </div>

          {/* 6 Category Chests */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="bg-black/80 border-2 border-neutral-700 hover:border-yellow-400 p-5 rounded-md shadow-pixel transition-all group"
              >
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{cat.icon}</span>
                    <h3 className={`font-pixel text-[11px] font-bold ${cat.headerColor}`}>
                      {cat.category}
                    </h3>
                  </div>
                  <span className="font-pixel text-[9px] text-neutral-400">
                    x{cat.skills.length}
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isSelected = randomSkill === skill
                    return (
                      <span
                        key={skill}
                        onClick={() => {
                          playJump()
                          if (onAddScore) onAddScore(50)
                        }}
                        className={`px-2.5 py-1 text-xs font-mono font-medium rounded border pixel-btn cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-yellow-400 text-black border-white font-bold scale-105 shadow-pixel-gold'
                            : 'bg-neutral-900 text-neutral-200 border-neutral-700 hover:border-white hover:text-white'
                        }`}
                      >
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
