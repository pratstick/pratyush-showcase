import { useState } from 'react'
import { MarioCoin, MarioMushroom, MarioFlower, MarioStar } from './PixelSprites'
import { Dices, Sparkles } from 'lucide-react'
import { playPowerUp, playJump } from '../utils/audio'

const skillCategories = [
  {
    category: 'Frontend',
    icon: '⚔️',
    color: 'border-blue-500 text-blue-700 dark:text-blue-400 bg-blue-500/5 dark:bg-blue-950/20',
    skills: ['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'React Router', 'Vite'],
  },
  {
    category: 'Backend & APIs',
    icon: '🧪',
    color: 'border-purple-500 text-purple-700 dark:text-purple-400 bg-purple-500/5 dark:bg-purple-950/20',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'JWT Auth'],
  },
  {
    category: 'AI & Machine Learning',
    icon: '🔮',
    color: 'border-red-500 text-red-700 dark:text-red-400 bg-red-500/5 dark:bg-red-950/20',
    skills: ['Google Gemini API', 'OpenAI API', 'XGBoost', 'Random Forest', 'Prophet', 'Scikit-learn'],
  },
  {
    category: 'Data & Cloud',
    icon: '📜',
    color: 'border-emerald-500 text-emerald-700 dark:text-emerald-400 bg-emerald-500/5 dark:bg-emerald-950/20',
    skills: ['Databricks', 'Apache Spark', 'Streamlit', 'Linear Programming', 'Feature Engineering'],
  },
  {
    category: 'CMS & Infrastructure',
    icon: '🗝️',
    color: 'border-amber-500 text-amber-700 dark:text-amber-400 bg-amber-500/5 dark:bg-amber-950/20',
    skills: ['Sanity CMS', 'Clerk Auth', 'Vercel', 'pnpm', 'Docker'],
  },
  {
    category: 'Programming Languages',
    icon: '💎',
    color: 'border-pink-500 text-pink-700 dark:text-pink-400 bg-pink-500/5 dark:bg-pink-950/20',
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
    <section id="skills" className="py-16 md:py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* World Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-pixel text-[9px] text-red-500 bg-red-500/10 px-2 py-1 border border-red-500/30 rounded">
              STAGE 1-3
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Tech Arsenal &amp; Tools
            </span>
          </div>

          {/* Quirky Interactive Button */}
          <button
            type="button"
            onClick={handleRollPowerUp}
            className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-black font-sans font-semibold text-xs rounded-md pixel-btn flex items-center gap-1.5 shadow-pixel-sm"
          >
            <Dices size={15} />
            <span>Roll Random Skill</span>
          </button>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-3 font-sans">
          Tools &amp; Technologies
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base max-w-xl mb-8">
          Technologies and tools I work with across web development, AI engineering, and data analytics.
        </p>

        {/* Random Power-up alert */}
        {randomSkill && (
          <div className="mb-6 p-3 bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-500 rounded-lg flex items-center justify-between shadow-pixel-sm animate-fade-in text-xs font-mono text-amber-900 dark:text-amber-300">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500" />
              <span>
                Equipped Power-Up: <strong className="underline text-sm font-bold">{randomSkill}</strong>
              </span>
            </div>
            <span className="font-pixel text-[9px] text-emerald-600 dark:text-emerald-400 font-bold">+150 PTS</span>
          </div>
        )}

        {/* 6 Category Chests */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="arcade-card p-5 rounded-lg bg-white dark:bg-[#12172b]"
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <span>{cat.icon}</span>
                  <h3 className="font-sans font-bold text-sm text-neutral-900 dark:text-white">
                    {cat.category}
                  </h3>
                </div>
                <span className="font-mono text-xs text-neutral-400">
                  {cat.skills.length}
                </span>
              </div>

              {/* Skill Chips (High readability, clean hover effects) */}
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
                      className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-all cursor-pointer select-none ${
                        isSelected
                          ? 'bg-amber-400 text-black border-black font-bold scale-105 shadow-pixel-sm'
                          : 'bg-neutral-100 dark:bg-[#171f3a] text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white'
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
    </section>
  )
}
