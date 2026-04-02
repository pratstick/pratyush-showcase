const skillCategories = [
  {
    category: 'Frontend',
    color: 'indigo',
    skills: ['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'React Router', 'Vite'],
  },
  {
    category: 'Backend',
    color: 'purple',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'JWT Auth'],
  },
  {
    category: 'AI / ML',
    color: 'cyan',
    skills: ['Google Gemini API', 'OpenAI API', 'XGBoost', 'Random Forest', 'Prophet', 'Scikit-learn'],
  },
  {
    category: 'Data & Cloud',
    color: 'emerald',
    skills: ['Databricks', 'Apache Spark', 'Streamlit', 'Linear Programming', 'Feature Engineering'],
  },
  {
    category: 'CMS & Auth',
    color: 'orange',
    skills: ['Sanity CMS', 'Clerk Auth', 'Vercel', 'pnpm'],
  },
  {
    category: 'Languages',
    color: 'pink',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
]

const colorMap = {
  indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
  purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  orange: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
  pink: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
}

const headerColorMap = {
  indigo: 'text-indigo-400',
  purple: 'text-purple-400',
  cyan: 'text-cyan-400',
  emerald: 'text-emerald-400',
  orange: 'text-orange-400',
  pink: 'text-pink-400',
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-indigo-400 font-mono text-sm">02.</span>
          <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">Tech Stack</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tools &amp; Technologies
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl">
          Technologies I&apos;ve worked with across web development, AI integration, and data engineering.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ category, color, skills }) => (
            <div key={category} className="p-6 glass rounded-xl card-hover">
              <h3 className={`font-mono font-semibold text-sm mb-4 ${headerColorMap[color]}`}>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 text-xs rounded-md border font-medium ${colorMap[color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
