import { useReveal } from '../hooks/useReveal';
import { techBadges } from '../data/skills';

export default function Skills() {
  const [ref, visible] = useReveal();

  const categories = [
    {
      label: 'Languages',
      icon: '💻',
      items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Kotlin', 'Dart'],
    },
    {
      label: 'Frontend',
      icon: '🎨',
      items: ['React', 'Next.js', 'Tailwind CSS', 'HTML / CSS', 'Vite'],
    },
    {
      label: 'Backend & DB',
      icon: '⚙️',
      items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Sanity CMS'],
    },
    {
      label: 'AI / Data',
      icon: '🤖',
      items: ['Machine Learning', 'XGBoost', 'Prophet', 'Pandas', 'Google Gemini', 'NLP', 'OpenAI'],
    },
    {
      label: 'Tools & Platforms',
      icon: '🛠️',
      items: ['Git / GitHub', 'Databricks', 'Streamlit', 'Docker', 'Clerk'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0f]">
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="text-[#6c63ff] font-mono text-sm tracking-widest uppercase mb-3">
            02. skills
          </p>
          <h2 className="section-heading text-white mb-4">Tech Stack</h2>
          <p className="text-[#a0a0b8] mb-12 max-w-xl">
            A snapshot of the technologies I work with across full-stack development,
            machine learning, and systems engineering.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.label} className="card-glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl" role="img" aria-label={cat.label}>
                    {cat.icon}
                  </span>
                  <h3 className="text-white font-semibold">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#1e1e30] text-[#a0a0b8] border border-[#2a2a40] hover:border-[#6c63ff] hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* All-tech badge cloud */}
          <div className="mt-12">
            <p className="text-[#a0a0b8] text-sm mb-4 font-medium">Also familiar with:</p>
            <div className="flex flex-wrap gap-2">
              {techBadges.slice(8).map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-3 py-1 rounded-full border border-[#6c63ff]/20 text-[#6c63ff] bg-[#6c63ff]/5 hover:bg-[#6c63ff]/15 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
