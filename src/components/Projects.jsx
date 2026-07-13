import { useState } from 'react'
import { Github, ExternalLink, Cpu, Globe, BarChart3, BookOpen, Network, FileSearch, Bot, Sparkles } from 'lucide-react'

const spotlightProjects = [
  {
    id: 1,
    title: 'Persona-Driven Semantic Search Engine',
    description:
      'Adobe Hackathon-winning solution using YOLOv11 layout analysis and Sentence Transformers to rank document sections for a given persona and task. Designed for fully offline, containerised deployment.',
    icon: FileSearch,
    iconBg: 'bg-rose-400/25',
    iconColor: 'text-rose-400',
    tags: ['Python', 'YOLOv11', 'Sentence Transformers', 'PyMuPDF', 'Docker'],
    tagColor: 'bg-rose-400/15 theme-text border-rose-300/35',
    github: 'https://github.com/pratstick/persona-driven-doc-intel',
    demo: null,
    highlight: 'Hackathon Winner',
  },
  {
    id: 2,
    title: 'ShareSphere',
    description:
      'Community platform connecting neighbors for mutual support with AI moderation, neighborhood spaces, real-time updates, and trust/reputation scoring.',
    icon: Globe,
    iconBg: 'bg-emerald-400/25',
    iconColor: 'text-emerald-400',
    tags: ['Next.js 15', 'TypeScript', 'Sanity CMS', 'Clerk', 'OpenAI', 'Tailwind CSS'],
    tagColor: 'bg-emerald-400/15 theme-text border-emerald-300/35',
    github: 'https://github.com/pratstick/ShareSphere',
    demo: null,
    highlight: 'Full Stack',
  },
  {
    id: 3,
    title: 'The Interview Alchemist',
    description:
      'AI interview prep workspace with role-based practice sessions, Gemini-generated question/answer flows, concept pinning, and progress tracking.',
    icon: Cpu,
    iconBg: 'bg-indigo-400/25',
    iconColor: 'text-indigo-400',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Gemini AI', 'Tailwind CSS'],
    tagColor: 'bg-indigo-400/15 theme-text border-indigo-300/35',
    github: 'https://github.com/pratstick/The-Interview-Alchemist',
    demo: null,
    highlight: 'AI Product',
  },
]

const selectedProjects = [
  {
    id: 4,
    title: 'PaperPulse',
    description:
      'AI research digest that ingests arXiv papers, generates LLM summaries with relevance scoring, and serves a personalized feed.',
    icon: BookOpen,
    iconBg: 'bg-sky-400/25',
    iconColor: 'text-sky-400',
    tags: ['FastAPI', 'Next.js', 'TypeScript', 'OpenAI', 'SQLAlchemy'],
    tagColor: 'bg-sky-400/15 theme-text border-sky-300/35',
    github: 'https://github.com/pratstick/PaperPulse',
    demo: null,
    highlight: 'Research AI',
  },
  {
    id: 5,
    title: 'Supply Chain Predictive Analytics',
    description:
      'Enterprise Databricks solution combining ML forecasting, transport optimization, and intelligent stock allocation.',
    icon: BarChart3,
    iconBg: 'bg-cyan-400/25',
    iconColor: 'text-cyan-400',
    tags: ['Python', 'Databricks', 'XGBoost', 'Prophet', 'Spark'],
    tagColor: 'bg-cyan-400/15 theme-text border-cyan-300/35',
    github: 'https://github.com/pratstick/supply-chain-predictive-analytics',
    demo: null,
    highlight: 'Enterprise ML',
  },
  {
    id: 6,
    title: 'Multi-Agent Doc Intelligence',
    description:
      'LangGraph-based multi-agent RAG pipeline with routing, retrieval, and specialist agents for technical Q&A workflows.',
    icon: Network,
    iconBg: 'bg-violet-400/25',
    iconColor: 'text-violet-400',
    tags: ['Python', 'LangGraph', 'FAISS', 'Groq', 'RAG'],
    tagColor: 'bg-violet-400/15 theme-text border-violet-300/35',
    github: 'https://github.com/pratstick/multi-agent-doc-intelligence',
    demo: null,
    highlight: 'Multi-Agent',
  },
  {
    id: 7,
    title: 'Browser MCP Agent',
    description:
      'Natural-language web automation system powered by MCP and LLM orchestration for browser control and extraction workflows.',
    icon: Bot,
    iconBg: 'bg-amber-400/25',
    iconColor: 'text-amber-400',
    tags: ['Python', 'MCP', 'GPT-4.1', 'Puppeteer', 'Streamlit'],
    tagColor: 'bg-amber-400/15 theme-text border-amber-300/35',
    github: 'https://github.com/pratstick/browser-mcp-agent',
    demo: null,
    highlight: 'Automation',
  },
]

const otherRepos = [
  {
    id: 1,
    name: 'AI Invoice Extractor',
    stack: 'Python · Streamlit · Gemini',
    github: 'https://github.com/pratstick/AI-Invoice-Extractor',
  },
  {
    id: 2,
    name: 'GymClock',
    stack: 'Kotlin · Jetpack Compose · Room',
    github: 'https://github.com/pratstick/GymClock',
  },
]

function ProjectCard({ project, featured = false }) {
  const Icon = project.icon
  return (
    <article
      className={`relative flex flex-col p-6 rounded-2xl card-hover group overflow-hidden ${
        featured ? 'glass-strong' : 'glass'
      }`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${project.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
          <Icon size={22} className={project.iconColor} />
        </div>
        <span className={`px-2.5 py-1 text-xs font-mono font-semibold rounded-full theme-text ${featured ? 'glass' : 'glass-strong'}`}>
          {project.highlight}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold theme-text mb-3 transition-colors">
        {project.title}
      </h3>
      <p className="theme-muted text-sm leading-relaxed flex-1 mb-5">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`px-2 py-0.5 text-xs rounded border font-medium ${project.tagColor}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs theme-muted hover-theme-text transition-colors font-medium"
          aria-label={`View ${project.title} on GitHub`}
        >
          <Github size={14} />
          Source Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs theme-muted hover-theme-text transition-colors font-medium"
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const [showSelected, setShowSelected] = useState(false)

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto section-shell">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-indigo-400 font-mono text-sm">03.</span>
          <span className="theme-subtle font-mono text-sm uppercase tracking-widest">Work</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold theme-text mb-3">
              Featured Projects
            </h2>
            <p className="theme-muted max-w-lg">
              A curated, resume-focused set of projects with strongest product, AI, and engineering impact.
            </p>
          </div>
          <a
            href="https://github.com/pratstick"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 text-sm theme-secondary hover-theme-text transition-colors font-medium"
          >
            <Github size={16} />
            All repos →
          </a>
        </div>

        <div className="glass rounded-2xl px-4 py-3 border border-indigo-300/25 mb-8 inline-flex items-center gap-2">
          <Sparkles size={15} className="text-indigo-300" />
          <p className="text-sm theme-secondary">
            Front section shows only the most notable work to keep the portfolio clean and recruiter-friendly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {spotlightProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={() => setShowSelected((currentValue) => !currentValue)}
            className="px-5 py-2.5 glass hover-glass theme-text text-sm rounded-lg transition-colors font-medium"
          >
            {showSelected ? 'Show Less' : 'View More Projects'}
          </button>
          {showSelected && (
            <div className="w-full space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {selectedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold theme-text mb-4">Other Repositories</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {otherRepos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-xl border border-white/10 px-4 py-3 hover-glass transition-colors"
                      aria-label={`View ${repo.name} on GitHub`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="theme-text text-sm font-medium">{repo.name}</p>
                        <ExternalLink size={14} className="theme-subtle group-hover:theme-text" />
                      </div>
                      <p className="theme-subtle text-xs mt-1">{repo.stack}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
