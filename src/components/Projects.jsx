import { Github, ExternalLink, Cpu, Globe, Search, BarChart3, FileText, BookOpen, Network, Dumbbell, FileSearch, Bot } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'The Interview Alchemist',
    description:
      'AI-powered technical interview prep platform. Create role-specific sessions, get Gemini-generated questions with answers, pin key concepts, and track your progress across sessions.',
    icon: Cpu,
    iconBg: 'bg-indigo-400/25',
    iconColor: 'text-indigo-100',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Gemini AI', 'Tailwind CSS'],
    tagColor: 'bg-indigo-400/15 text-indigo-100 border-indigo-200/35',
    github: 'https://github.com/pratstick/The-Interview-Alchemist',
    demo: null,
    highlight: 'AI-Powered',
  },
  {
    id: 2,
    title: 'ShareSphere',
    description:
      'Community platform connecting neighbors for mutual support — from dog walking to grocery runs. Includes AI content moderation, neighborhood spaces, real-time updates, and user reputation.',
    icon: Globe,
    iconBg: 'bg-emerald-400/25',
    iconColor: 'text-emerald-100',
    tags: ['Next.js 15', 'TypeScript', 'Sanity CMS', 'Clerk', 'OpenAI', 'Tailwind CSS'],
    tagColor: 'bg-emerald-400/15 text-emerald-100 border-emerald-200/35',
    github: 'https://github.com/pratstick/ShareSphere',
    demo: null,
    highlight: 'Full Stack',
  },
  {
    id: 3,
    title: 'Supply Chain Predictive Analytics',
    description:
      'Enterprise Databricks solution for supply chain optimization: demand forecasting with ML ensembles (XGBoost, Prophet, Random Forest), transportation linear programming, and intelligent stock allocation.',
    icon: BarChart3,
    iconBg: 'bg-cyan-400/25',
    iconColor: 'text-cyan-100',
    tags: ['Python', 'Databricks', 'XGBoost', 'Prophet', 'Spark', 'Streamlit'],
    tagColor: 'bg-cyan-400/15 text-cyan-100 border-cyan-200/35',
    github: 'https://github.com/pratstick/supply-chain-predictive-analytics',
    demo: null,
    highlight: 'ML / Data',
  },
  {
    id: 4,
    title: 'Rabin-Karp XOR Filter Enhancement',
    description:
      'A performance-optimized implementation of the Rabin-Karp string-matching algorithm using XOR Filters. Reduces hash collisions and improves runtime efficiency compared to standard and Bloom filter variants.',
    icon: Search,
    iconBg: 'bg-purple-400/25',
    iconColor: 'text-purple-100',
    tags: ['Python', 'Algorithms', 'XOR Filter', 'Probabilistic DS', 'Optimization'],
    tagColor: 'bg-purple-400/15 text-purple-100 border-purple-200/35',
    github: 'https://github.com/pratstick/rabin-karp-xor-filter-enhancement',
    demo: null,
    highlight: 'Algorithms',
  },
  {
    id: 5,
    title: 'AI Invoice Extractor',
    description:
      'Streamlit web app that extracts structured data from PDF and image invoices using Tesseract OCR and Google Gemini AI. Supports one-click export to CSV/JSON with robust error handling and a clean interactive interface.',
    icon: FileText,
    iconBg: 'bg-orange-400/25',
    iconColor: 'text-orange-100',
    tags: ['Python', 'Streamlit', 'Gemini AI', 'Tesseract OCR', 'Google AI'],
    tagColor: 'bg-orange-400/15 text-orange-100 border-orange-200/35',
    github: 'https://github.com/pratstick/AI-Invoice-Extractor',
    demo: null,
    highlight: 'AI / OCR',
  },
  {
    id: 6,
    title: 'PaperPulse',
    description:
      'Full-stack AI research digest that ingests arXiv papers, generates LLM summaries with relevance scoring, and delivers a personalized daily feed. Powered by FastAPI, Next.js 16, and TanStack Query with pluggable OpenAI/Anthropic providers.',
    icon: BookOpen,
    iconBg: 'bg-sky-400/25',
    iconColor: 'text-sky-100',
    tags: ['FastAPI', 'Next.js', 'TypeScript', 'OpenAI', 'SQLAlchemy', 'Tailwind CSS'],
    tagColor: 'bg-sky-400/15 text-sky-100 border-sky-200/35',
    github: 'https://github.com/pratstick/PaperPulse',
    demo: null,
    highlight: 'Full Stack',
  },
  {
    id: 7,
    title: 'Multi-Agent Doc Intelligence',
    description:
      'LangGraph-orchestrated multi-agent RAG pipeline for technical documentation Q&A. A router agent classifies queries as conceptual or implementation and dispatches to specialized agents backed by FAISS vector retrieval and Groq LLM inference.',
    icon: Network,
    iconBg: 'bg-violet-400/25',
    iconColor: 'text-violet-100',
    tags: ['Python', 'LangGraph', 'FAISS', 'Groq', 'RAG', 'sentence-transformers'],
    tagColor: 'bg-violet-400/15 text-violet-100 border-violet-200/35',
    github: 'https://github.com/pratstick/multi-agent-doc-intelligence',
    demo: null,
    highlight: 'Multi-Agent',
  },
  {
    id: 8,
    title: 'GymClock',
    description:
      'Android workout timer and planner with custom interval timers, weekly scheduling, curated splits, and personal-record tracking. Built with Jetpack Compose, Room + Flow, Hilt DI, and optional Firebase cloud sync.',
    icon: Dumbbell,
    iconBg: 'bg-green-400/25',
    iconColor: 'text-green-100',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'Hilt', 'MVVM', 'Firebase'],
    tagColor: 'bg-green-400/15 text-green-100 border-green-200/35',
    github: 'https://github.com/pratstick/GymClock',
    demo: null,
    highlight: 'Android',
  },
  {
    id: 9,
    title: 'Persona-Driven Doc Intelligence',
    description:
      'Adobe Hackathon solution using YOLOv11-based document layout analysis and Sentence Transformers to extract and rank sections most relevant to a given persona and job-to-be-done. Fully offline, containerised Docker deployment.',
    icon: FileSearch,
    iconBg: 'bg-rose-400/25',
    iconColor: 'text-rose-100',
    tags: ['Python', 'YOLOv11', 'Sentence Transformers', 'PyMuPDF', 'Docker'],
    tagColor: 'bg-rose-400/15 text-rose-100 border-rose-200/35',
    github: 'https://github.com/pratstick/persona-driven-doc-intel',
    demo: null,
    highlight: 'Hackathon',
  },
  {
    id: 10,
    title: 'Browser MCP Agent',
    description:
      'Enterprise web automation agent combining GPT-4.1 Mini with Anthropic\'s Model Context Protocol and Puppeteer. Accepts natural-language commands to navigate, interact with, and extract data from websites via a Streamlit UI.',
    icon: Bot,
    iconBg: 'bg-amber-400/25',
    iconColor: 'text-amber-100',
    tags: ['Python', 'MCP', 'GPT-4.1', 'Puppeteer', 'Streamlit', 'asyncio'],
    tagColor: 'bg-amber-400/15 text-amber-100 border-amber-200/35',
    github: 'https://github.com/pratstick/browser-mcp-agent',
    demo: null,
    highlight: 'Automation',
  },
]

function ProjectCard({ project }) {
  const Icon = project.icon
  return (
    <article className="relative flex flex-col p-6 glass-strong rounded-2xl card-hover group overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${project.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
          <Icon size={22} className={project.iconColor} />
        </div>
        <span className="px-2.5 py-1 text-xs font-mono font-semibold glass rounded-full theme-text">
          {project.highlight}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold theme-text mb-3 group-hover:text-indigo-200 transition-colors">
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
          className="flex items-center gap-1.5 text-xs theme-muted hover:text-white transition-colors font-medium"
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
            className="flex items-center gap-1.5 text-xs theme-muted hover:text-indigo-200 transition-colors font-medium"
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
              A selection of projects ranging from AI-powered web apps to research publications and enterprise data pipelines.
            </p>
          </div>
          <a
            href="https://github.com/pratstick"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 text-sm text-indigo-200 hover:text-white transition-colors font-medium"
          >
            <Github size={16} />
            All repos →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
