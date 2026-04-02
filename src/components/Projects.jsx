import { Github, ExternalLink, Cpu, Globe, Search, BarChart3 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'The Interview Alchemist',
    description:
      'AI-powered technical interview prep platform. Create role-specific sessions, get Gemini-generated questions with answers, pin key concepts, and track your progress across sessions.',
    icon: Cpu,
    iconBg: 'bg-indigo-600/20',
    iconColor: 'text-indigo-400',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Gemini AI', 'Tailwind CSS'],
    tagColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
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
    iconBg: 'bg-emerald-600/20',
    iconColor: 'text-emerald-400',
    tags: ['Next.js 15', 'TypeScript', 'Sanity CMS', 'Clerk', 'OpenAI', 'Tailwind CSS'],
    tagColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
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
    iconBg: 'bg-cyan-600/20',
    iconColor: 'text-cyan-400',
    tags: ['Python', 'Databricks', 'XGBoost', 'Prophet', 'Spark', 'Streamlit'],
    tagColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    github: 'https://github.com/pratstick/supply-chain-predictive-analytics',
    demo: null,
    highlight: 'ML / Data',
  },
  {
    id: 4,
    title: 'Rabin-Karp XOR Filter Enhancement',
    description:
      'Academic research implementing an XOR Filter–enhanced Rabin-Karp string-matching algorithm. Achieved 47.53% runtime improvement over the naive baseline and 9% over the Bloom filter variant. Published in IJCSR.',
    icon: Search,
    iconBg: 'bg-purple-600/20',
    iconColor: 'text-purple-400',
    tags: ['Python', 'Algorithms', 'XOR Filter', 'Probabilistic DS', 'Research'],
    tagColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    github: 'https://github.com/pratstick/rabin-karp-xor-filter-enhancement',
    demo: null,
    highlight: 'Research',
  },
]

function ProjectCard({ project }) {
  const Icon = project.icon
  return (
    <article className="relative flex flex-col p-6 glass rounded-2xl card-hover group overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${project.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
          <Icon size={22} className={project.iconColor} />
        </div>
        <span className="px-2.5 py-1 text-xs font-mono font-semibold glass rounded-full text-gray-300">
          {project.highlight}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{project.description}</p>

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
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors font-medium"
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
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-indigo-300 transition-colors font-medium"
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
    <section id="projects" className="section-padding bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-indigo-400 font-mono text-sm">03.</span>
          <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">Work</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-lg">
              A selection of projects ranging from AI-powered web apps to research publications and enterprise data pipelines.
            </p>
          </div>
          <a
            href="https://github.com/pratstick"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
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
