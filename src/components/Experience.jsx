import { useReveal } from '../hooks/useReveal';

const experiences = [
  {
    period: '2024 – Present',
    title: 'Open-Source & Independent Projects',
    org: 'Self-directed',
    type: 'Development',
    points: [
      'Built The Interview Alchemist — a full-stack MERN + AI interview prep platform with NLP analysis and real-time feedback.',
      'Developed enterprise supply chain analytics platform using ML models (RF, XGBoost, Prophet) deployed on Databricks.',
      'Created ShareSphere, a community platform with Next.js 15, Sanity CMS, and Clerk auth.',
      'Published algorithmic research on XOR filter-based Rabin-Karp optimization.',
      'Built AI agents and automation tools leveraging OpenAI GPT-4.1 and Google Gemini APIs.',
    ],
  },
  {
    period: '2023 – 2024',
    title: 'Engineering Coursework & Labs',
    org: 'Computer Science & Engineering',
    type: 'Education',
    points: [
      'Completed advanced coursework in algorithms, data structures, and VLSI design.',
      'Designed and simulated CMOS XOR gate circuits using Cadence Virtuoso with parametric analysis.',
      'Implemented Emotion Classifier using Verilog as part of minor project coursework.',
      'Solved SQL 50 Study Plan on LeetCode to strengthen database querying skills.',
    ],
  },
  {
    period: '2022 – 2023',
    title: 'Full-Stack Foundations',
    org: 'The Odin Project & Self-learning',
    type: 'Learning',
    points: [
      'Completed The Odin Project curriculum covering HTML, CSS, JavaScript, and React.',
      'Built multiple projects including a JavaScript-based Rock-Paper-Scissors game and expense tracker.',
      'Developed proficiency in mobile development with Kotlin and Dart/Flutter.',
    ],
  },
];

const achievements = [
  { icon: '🏆', title: 'Google Gemma 3n Impact Challenge', desc: 'Submitted a project for Google\'s Gemma 3n Impact Challenge showcasing AI capabilities.' },
  { icon: '⭐', title: '3+ GitHub Stars', desc: 'AI Invoice Extractor received community recognition with stars on GitHub.' },
  { icon: '🔬', title: 'Algorithmic Research', desc: 'Published XOR filter enhancement of Rabin-Karp for optimized pattern matching.' },
  { icon: '🚀', title: '20+ Repositories', desc: 'Consistently shipping projects across AI, full-stack, mobile, and systems domains.' },
];

export default function Experience() {
  const [ref, visible] = useReveal();

  return (
    <section id="experience" className="py-24 bg-[#0a0a0f]">
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="text-[#6c63ff] font-mono text-sm tracking-widest uppercase mb-3">
            04. experience
          </p>
          <h2 className="section-heading text-white mb-12">Journey & Achievements</h2>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Timeline */}
            <div className="lg:col-span-2 space-y-8">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l border-[#1e1e30] hover:border-[#6c63ff]/40 transition-colors">
                  <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-[#6c63ff] border-2 border-[#0a0a0f] shadow-[0_0_10px_rgba(108,99,255,0.5)]" />

                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-[#6c63ff]">{exp.period}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#1e1e30] text-[#a0a0b8] border border-[#2a2a40]">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-lg">{exp.title}</h3>
                  <p className="text-[#6c63ff] text-sm font-medium mb-3">{exp.org}</p>

                  <ul className="space-y-1.5">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="text-[#a0a0b8] text-sm flex gap-2">
                        <span className="text-[#6c63ff] mt-0.5 flex-shrink-0">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg mb-2">Highlights</h3>
              {achievements.map((a) => (
                <div key={a.title} className="card-glass rounded-xl p-4 flex gap-3 items-start">
                  <span className="text-xl flex-shrink-0" role="img" aria-label={a.title}>
                    {a.icon}
                  </span>
                  <div>
                    <p className="text-white font-medium text-sm">{a.title}</p>
                    <p className="text-[#a0a0b8] text-xs mt-0.5 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
