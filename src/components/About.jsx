import { Code2, Cpu, Globe, BookOpen } from 'lucide-react'

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
    icon: BookOpen,
    title: 'Research & Algorithms',
    desc: 'Publishing academic work on algorithm optimization and probabilistic data structures.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#0d0d14]">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-indigo-400 font-mono text-sm">01.</span>
          <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">About</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Building things that{' '}
              <span className="text-gradient">matter</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
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
              <p>
                I also have an academic side: my research on enhancing the Rabin-Karp algorithm
                with XOR Filters has been published in the{' '}
                <em>International Journal of Computing Sciences Research</em>, achieving a 47%+
                runtime improvement over the baseline.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Open to Opportunities', 'Research-Oriented', 'Impact-Driven'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono text-indigo-300 glass rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-5 glass rounded-xl card-hover group"
              >
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-indigo-600/30 transition-colors">
                  <Icon size={20} className="text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
