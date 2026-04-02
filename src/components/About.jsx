import { useReveal } from '../hooks/useReveal';

const highlights = [
  { icon: '🎓', label: 'Engineering Student', sub: 'Computer Science & Engineering' },
  { icon: '🌏', label: 'Based in India', sub: 'Open to Remote Opportunities' },
  { icon: '🛠️', label: 'Builder Mindset', sub: 'End-to-end product development' },
  { icon: '🤖', label: 'AI Enthusiast', sub: 'LLMs, ML pipelines & automation' },
];

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="py-24 bg-[#0f0f1a]">
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''}`}
        >
          <p className="text-[#6c63ff] font-mono text-sm tracking-widest uppercase mb-3">
            01. about me
          </p>
          <h2 className="section-heading text-white mb-12">
            Who I Am
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text block */}
            <div className="space-y-5 text-[#a0a0b8] text-base leading-relaxed">
              <p>
                I&apos;m Pratyush, a software engineer with a focus on building intelligent,
                full-stack applications and data-driven systems. I thrive at the intersection
                of <span className="text-white font-medium">software engineering</span>,{' '}
                <span className="text-white font-medium">machine learning</span>, and{' '}
                <span className="text-white font-medium">product design</span>.
              </p>
              <p>
                My work spans MERN stack web apps, enterprise ML pipelines on Databricks,
                algorithmic research, and AI integrations using Google Gemini and OpenAI APIs.
                I enjoy turning complex requirements into clean, maintainable code.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring emerging AI tools, contributing to
                open-source, or solving algorithmic problems. I believe great software is
                built iteratively with a deep understanding of both users and systems.
              </p>
              <div className="pt-2">
                <a
                  href="https://github.com/pratstick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#6c63ff] hover:text-[#8b83ff] transition-colors font-medium group"
                >
                  View my GitHub
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="card-glass rounded-xl p-5 flex flex-col gap-2"
                >
                  <span className="text-2xl" role="img" aria-label={h.label}>
                    {h.icon}
                  </span>
                  <p className="text-white font-semibold text-sm">{h.label}</p>
                  <p className="text-[#a0a0b8] text-xs leading-relaxed">{h.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
