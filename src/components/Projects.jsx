import { Github, ExternalLink, Trophy, Swords, Cpu, Globe, BookOpen, BarChart3, Network, Bot } from 'lucide-react'
import { playPipe } from '../utils/audio'

const spotlightProjects = [
  {
    id: 1,
    stage: 'BOSS STAGE 1',
    title: 'Persona-Driven Semantic Search Engine',
    description:
      'Adobe Hackathon finalist solution using YOLOv11 layout analysis and Sentence Transformers to rank document sections for a given persona and task. Designed for fully offline, containerised deployment.',
    icon: Trophy,
    highlight: 'HACKATHON FINALIST 🏆',
    highlightColor: 'bg-yellow-400 text-black border-black',
    tags: ['Python', 'YOLOv11', 'Sentence Transformers', 'PyMuPDF', 'Docker'],
    github: 'https://github.com/pratstick/persona-driven-doc-intel',
    demo: null,
  },
  {
    id: 2,
    stage: 'WORLD QUEST 2',
    title: 'ShareSphere',
    description:
      'Community platform connecting neighbors for mutual support with AI moderation, neighborhood spaces, real-time updates, and trust/reputation scoring.',
    icon: Globe,
    highlight: 'COMMUNITY FULL STACK 🌐',
    highlightColor: 'bg-emerald-500 text-white border-black',
    tags: ['Next.js 15', 'TypeScript', 'Sanity CMS', 'Clerk', 'OpenAI', 'Tailwind CSS'],
    github: 'https://github.com/pratstick/ShareSphere',
    demo: null,
  },
  {
    id: 3,
    stage: 'MAGIC LAB 3',
    title: 'The Interview Alchemist',
    description:
      'AI interview prep workspace with role-based practice sessions, Gemini-generated question/answer flows, concept pinning, and progress tracking.',
    icon: Cpu,
    highlight: 'AI PRODUCT 🧠',
    highlightColor: 'bg-purple-500 text-white border-black',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Gemini AI', 'Tailwind CSS'],
    github: 'https://github.com/pratstick/The-Interview-Alchemist',
    demo: null,
  },
]

const selectedProjects = [
  {
    id: 4,
    stage: 'SIDE QUEST 4',
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
    stage: 'ENTERPRISE 5',
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
    stage: 'RAG AGENT 6',
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
    stage: 'BROWSER AUTOMATION 7',
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
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Stage Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-pixel text-xs text-red-500 bg-black px-2 py-1 border-2 border-red-500 rounded">
            WORLD 1-4
          </span>
          <span className="font-pixel text-xs text-yellow-400 tracking-wider">
            &gt; BOSS STAGES &amp; QUEST CLEARANCES
          </span>
        </div>

        {/* Section title */}
        <div className="mb-10">
          <h2 className="font-pixel text-2xl md:text-3xl text-white retro-shadow mb-2">
            FEATURED <span className="text-yellow-400">QUESTS &amp; BUILDS</span>
          </h2>
          <p className="font-arcade text-xl text-neutral-300">
            Real deployments, hackathon finalists &amp; intelligent applications.
          </p>
        </div>

        {/* 3 Main Spotlight Boss Quests */}
        <div className="space-y-8 mb-16">
          {spotlightProjects.map((project) => {
            const IconComp = project.icon
            return (
              <div
                key={project.id}
                className="bg-[#0e101f] border-4 border-black rounded-lg p-6 md:p-8 shadow-pixel-lg relative overflow-hidden group hover:border-yellow-400 transition-all"
              >
                {/* Stage Flag & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b-2 border-neutral-800 pb-3">
                  <div className="flex items-center gap-2 font-pixel text-xs">
                    <span className="text-red-500 font-bold">[{project.stage}]</span>
                    <span className="text-neutral-400 hidden sm:inline">•</span>
                    <span className="text-yellow-300 font-sans font-medium text-xs">CLEARED ✓</span>
                  </div>

                  <span
                    className={`font-pixel text-[9px] px-2.5 py-1 rounded border-2 shadow-pixel ${project.highlightColor}`}
                  >
                    {project.highlight}
                  </span>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8">
                    <h3 className="font-pixel text-lg md:text-xl text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 text-sm md:text-base font-sans leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Loot / Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2.5 py-1 bg-black/80 text-yellow-300 border border-neutral-700 rounded"
                        >
                          +{tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleInspect}
                          className="px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-yellow-300 font-pixel text-[10px] rounded border-2 border-black pixel-btn flex items-center gap-2"
                        >
                          <Github size={14} />
                          <span>INSPECT SOURCE [GITHUB]</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleInspect}
                          className="px-4 py-2.5 bg-green-600 hover:bg-green-500 text-white font-pixel text-[10px] rounded border-2 border-black pixel-btn flex items-center gap-2"
                        >
                          <ExternalLink size={14} />
                          <span>ENTER STAGE [LIVE DEMO]</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right side Icon Badge */}
                  <div className="md:col-span-4 flex items-center justify-center">
                    <div className="w-28 h-28 bg-black/70 border-4 border-neutral-800 rounded-lg flex flex-col items-center justify-center p-4 shadow-pixel group-hover:scale-105 group-hover:border-yellow-400 transition-all">
                      <IconComp size={40} className="text-yellow-400 mb-2" />
                      <span className="font-pixel text-[8px] text-neutral-400 text-center uppercase">
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
        <div className="mb-6">
          <h3 className="font-pixel text-lg text-white mb-2 flex items-center gap-2">
            <Swords size={18} className="text-red-500" />
            <span>MORE ADVENTURES &amp; SYSTEMS</span>
          </h3>
          <p className="font-arcade text-lg text-neutral-400 mb-6">
            Autonomous web agents, research aggregators &amp; supply-chain pipelines.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {selectedProjects.map((p) => {
              const IconComp = p.icon
              return (
                <div
                  key={p.id}
                  className="bg-[#0e101f] border-2 border-neutral-800 hover:border-yellow-400 p-6 rounded-md shadow-pixel transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-pixel text-[9px] text-red-400">[{p.stage}]</span>
                      <span className="font-pixel text-[8px] bg-neutral-900 text-yellow-300 px-2 py-0.5 border border-neutral-700 rounded">
                        {p.highlight}
                      </span>
                    </div>

                    <h4 className="font-pixel text-sm text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {p.title}
                    </h4>

                    <p className="text-neutral-300 text-xs font-sans leading-relaxed mb-4">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] px-2 py-0.5 bg-black text-neutral-300 border border-neutral-800 rounded"
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
                        className="inline-flex items-center gap-2 font-pixel text-[9px] text-yellow-400 hover:text-white"
                      >
                        <Github size={12} />
                        <span>VIEW REPO &gt;&gt;</span>
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
