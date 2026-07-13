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
  indigo: 'bg-indigo-400/15 text-indigo-100 border-indigo-200/35',
  purple: 'bg-purple-400/15 text-purple-100 border-purple-200/35',
  cyan: 'bg-cyan-400/15 text-cyan-100 border-cyan-200/35',
  emerald: 'bg-emerald-400/15 text-emerald-100 border-emerald-200/35',
  orange: 'bg-orange-400/15 text-orange-100 border-orange-200/35',
  pink: 'bg-pink-400/15 text-pink-100 border-pink-200/35',
}

const headerColorMap = {
  indigo: 'text-indigo-200',
  purple: 'text-purple-200',
  cyan: 'text-cyan-200',
  emerald: 'text-emerald-200',
  orange: 'text-orange-200',
  pink: 'text-pink-200',
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto section-shell">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-indigo-400 font-mono text-sm">02.</span>
          <span className="theme-subtle font-mono text-sm uppercase tracking-widest">Tech Stack</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold theme-text mb-4">
          Tools &amp; Technologies
        </h2>
        <p className="theme-muted mb-12 max-w-xl">
          Technologies I&apos;ve worked with across web development, AI integration, and data engineering.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ category, color, skills }) => (
            <div key={category} className="p-6 glass-strong rounded-xl card-hover">
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
