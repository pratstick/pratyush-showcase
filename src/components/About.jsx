import { Code2, Cpu, Globe, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    desc: 'Building end-to-end applications with React, Node.js, and modern web technologies.',
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    desc: 'Integrating LLMs and ML models into real-world products that solve practical problems.',
  },
  {
    icon: Globe,
    title: 'Community-Driven Products',
    desc: 'Designing platforms that connect people and create meaningful impact.',
  },
  {
    icon: Zap,
    title: 'Clean & Scalable Code',
    desc: 'Writing efficient, maintainable code with a focus on performance and best practices.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto section-shell">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-indigo-400 font-mono text-sm">01.</span>
          <span className="theme-subtle font-mono text-sm uppercase tracking-widest">About</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold theme-text mb-6">
              Building things that{' '}
              <span className="text-gradient">matter</span>
            </h2>

            <div className="space-y-4 theme-muted leading-relaxed">
              <p>
                I&apos;m a full stack developer and AI engineer with a passion for crafting web
                applications that blend clean interfaces with intelligent backends. My work spans
                from consumer-facing community platforms to enterprise-grade analytics pipelines.
              </p>
              <p>
                Whether it&apos;s wiring up a Gemini AI model to help developers ace interviews,
                building a neighborhood help network, or optimizing supply chains with XGBoost and
                Prophet — I enjoy tackling real problems with elegant, maintainable code.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Open to Opportunities', 'Product-Focused', 'Impact-Driven'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono theme-text glass rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon, title, desc }) => {
              const CardIcon = icon
              return (
              <div
                key={title}
                className="p-5 glass-strong rounded-xl card-hover group"
              >
                <div className="w-10 h-10 bg-indigo-500/25 rounded-lg flex items-center justify-center mb-3 group-hover:bg-indigo-500/35 transition-colors">
                  <CardIcon size={20} className="text-indigo-400" />
                </div>
                <h3 className="theme-text font-semibold text-sm mb-1.5">{title}</h3>
                <p className="theme-muted text-xs leading-relaxed">{desc}</p>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
