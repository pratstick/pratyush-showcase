import { Github, ExternalLink, Trophy, Swords, Cpu, Globe, BookOpen, BarChart3, Network, Bot } from 'lucide-react'
import { playPipe } from '../utils/audio'

const spotlightProjects = [
  {
    id: 1,
    stage: 'STAGE 1',
    title: 'Persona-Driven Semantic Search Engine',
    description:
      'Adobe Hackathon finalist solution using YOLOv11 layout analysis and Sentence Transformers to rank document sections for a given persona and task. Designed for fully offline, containerised deployment.',
    icon: Trophy,
    highlight: 'HACKATHON FINALIST 🏆',
    highlightBadge: 'bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border-amber-500',
    tags: ['Python', 'YOLOv11', 'Sentence Transformers', 'PyMuPDF', 'Docker'],
    github: 'https://github.com/pratstick/persona-driven-doc-intel',
    demo: null,
  },
  {
    id: 2,
    stage: 'STAGE 2',
    title: 'ShareSphere',
    description:
      'Community platform connecting neighbors for mutual support with AI moderation, neighborhood spaces, real-time updates, and trust/reputation scoring.',
    icon: Globe,
    highlight: 'COMMUNITY FULL STACK 🌐',
    highlightBadge: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-500',
    tags: ['Next.js 15', 'TypeScript', 'Sanity CMS', 'Clerk', 'OpenAI', 'Tailwind CSS'],
    github: 'https://github.com/pratstick/ShareSphere',
    demo: null,
  },
  {
    id: 3,
    stage: 'STAGE 3',
    title: 'The Interview Alchemist',
    description:
      'AI interview prep workspace with role-based practice sessions, Gemini-generated question/answer flows, concept pinning, and progress tracking.',
    icon: Cpu,
    highlight: 'AI PRODUCT 🧠',
    highlightBadge: 'bg-purple-100 text-purple-900 dark:bg-purple-950/60 dark:text-purple-300 border-purple-500',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Gemini AI', 'Tailwind CSS'],
    github: 'https://github.com/pratstick/The-Interview-Alchemist',
    demo: null,
  },
]

const selectedProjects = [
  {
    id: 4,
    stage: 'STAGE 4',
    title: 'PaperPulse',
    description:
      'AI research digest that ingests arXiv papers, generates LLM summaries with relevance scoring, and serves a personalized feed.',
    icon: BookOpen,
    highlight: 'Research AI',
    tags: ['FastAPI', 'Next.js', 'TypeScript', 'OpenAI', 'SQLAlchemy'],
    github: 'https://github.com/pratstick/PaperPulse',
    demo: null,
  },
  {
    id: 5,
    stage: 'STAGE 5',
    title: 'Supply Chain Predictive Analytics',
    description:
      'Enterprise Databricks solution combining ML forecasting, transport optimization, and intelligent stock allocation.',
    icon: BarChart3,
    highlight: 'Enterprise ML',
    tags: ['Python', 'Databricks', 'XGBoost', 'Prophet', 'Spark'],
    github: 'https://github.com/pratstick/supply-chain-predictive-analytics',
    demo: null,
  },
  {
    id: 6,
    stage: 'STAGE 6',
    title: 'Multi-Agent Doc Intelligence',
    description:
      'LangGraph-based multi-agent RAG pipeline with routing, retrieval, and specialist agents for technical Q&A workflows.',
    icon: Network,
    highlight: 'Multi-Agent RAG',
    tags: ['Python', 'LangGraph', 'FAISS', 'Groq', 'RAG'],
    github: 'https://github.com/pratstick/multi-agent-doc-intelligence',
    demo: null,
  },
  {
    id: 7,
    stage: 'STAGE 7',
    title: 'Browser MCP Agent',
    description:
      'Natural-language web automation system powered by MCP and LLM orchestration for browser control and extraction workflows.',
    icon: Bot,
    highlight: 'Autonomous Agent',
    tags: ['Python', 'MCP', 'GPT-4.1', 'Puppeteer', 'Streamlit'],
    github: 'https://github.com/pratstick/browser-mcp-agent',
    demo: null,
  },
]

export default function Projects({ onAddScore }) {
  const handleInspect = () => {
    playPipe()
    if (onAddScore) onAddScore(250)
  }

  return (
    <section id="projects" className="py-16 md:py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* World Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-pixel text-[9px] text-red-500 bg-red-500/10 px-2 py-1 border border-red-500/30 rounded">
            STAGE 1-4
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Featured Projects &amp; Boss Builds
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-3 font-sans">
          Featured Work &amp; Case Studies
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base max-w-xl mb-10">
          Production systems, hackathon finalists, and intelligent full-stack applications.
        </p>

        {/* Spotlight Projects */}
        <div className="space-y-8 mb-16">
          {spotlightProjects.map((project) => {
            const IconComp = project.icon
            return (
              <div
                key={project.id}
                className="arcade-card rounded-lg p-6 md:p-8 bg-white dark:bg-[#12172b] relative group"
              >
                {/* Header Flag */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="font-pixel text-[9px] text-red-500 font-bold">
                      [{project.stage}]
                    </span>
                    <span className="text-neutral-400 hidden sm:inline">•</span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      COMPLETE ✓
                    </span>
                  </div>

                  <span
                    className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md border ${project.highlightBadge}`}
                  >
                    {project.highlight}
                  </span>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>

                    {/* Loot / Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2.5 py-1 bg-neutral-100 dark:bg-[#171f3a] text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleInspect}
                          className="px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-sans font-semibold text-xs rounded-md pixel-btn flex items-center gap-2"
                        >
                          <Github size={15} />
                          <span>View Code [GitHub]</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleInspect}
                          className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-semibold text-xs rounded-md pixel-btn flex items-center gap-2"
                        >
                          <ExternalLink size={15} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Icon Badge Right */}
                  <div className="md:col-span-4 flex items-center justify-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 bg-neutral-100 dark:bg-[#18203c] border-2 border-black rounded-lg flex flex-col items-center justify-center p-3 shadow-pixel-sm group-hover:scale-105 transition-all">
                      <IconComp size={36} className="text-amber-500 mb-1" />
                      <span className="font-pixel text-[8px] text-neutral-500 dark:text-neutral-400 uppercase">
                        QUEST #{project.id}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Selected Side Quests */}
        <div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2 font-sans">
            <Swords size={20} className="text-red-500" />
            <span>Additional Projects &amp; Experiments</span>
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
            Autonomous web agents, research aggregators, and supply-chain ML pipelines.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {selectedProjects.map((p) => (
              <div
                key={p.id}
                className="arcade-card rounded-lg p-5 bg-white dark:bg-[#12172b] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-pixel text-[9px] text-red-500">[{p.stage}]</span>
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-neutral-100 dark:bg-[#171f3a] text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700">
                      {p.highlight}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                    {p.title}
                  </h4>

                  <p className="text-neutral-600 dark:text-neutral-300 text-xs leading-relaxed mb-4 font-sans">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2 py-0.5 bg-neutral-100 dark:bg-[#171f3a] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleInspect}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                    >
                      <Github size={13} />
                      <span>Explore Repository →</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
