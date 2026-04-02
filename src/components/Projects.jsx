import { useReveal } from '../hooks/useReveal';
import { featuredProjects, otherProjects } from '../data/projects';

function CategoryBadge({ category }) {
  const colorMap = {
    'Full-Stack': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    'Data / ML': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'Algorithms': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'AI / ML': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    'AI / Automation': 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
  };
  return (
    <span
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${
        colorMap[category] || 'bg-gray-500/10 text-gray-400 border-gray-500/20'
      }`}
    >
      {category}
    </span>
  );
}

function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`card-glass rounded-2xl overflow-hidden flex flex-col ${
        featured ? 'md:col-span-1' : ''
      }`}
    >
      {/* Gradient banner */}
      <div
        className={`h-2 bg-gradient-to-r ${project.gradient}`}
        aria-hidden="true"
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl" role="img" aria-label={project.name}>
              {project.icon}
            </span>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">{project.name}</h3>
              <CategoryBadge category={project.category} />
            </div>
          </div>
          {project.stars > 0 && (
            <span className="flex items-center gap-1 text-xs text-[#a0a0b8]">
              <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {project.stars}
            </span>
          )}
        </div>

        {/* Tagline */}
        <p className="text-[#6c63ff] text-sm font-medium mb-2">{project.tagline}</p>

        {/* Description */}
        <p className="text-[#a0a0b8] text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 rounded bg-[#1e1e30] text-[#a0a0b8] border border-[#2a2a40]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white font-medium hover:text-[#6c63ff] transition-colors group w-fit"
          aria-label={`View ${project.name} on GitHub`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          View on GitHub
          <svg
            className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" className="py-24 bg-[#0f0f1a]">
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="text-[#6c63ff] font-mono text-sm tracking-widest uppercase mb-3">
            03. projects
          </p>
          <h2 className="section-heading text-white mb-4">Featured Work</h2>
          <p className="text-[#a0a0b8] mb-12 max-w-xl">
            A selection of projects that showcase my range across web development,
            machine learning, and algorithmic engineering.
          </p>

          {/* Featured grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} featured />
            ))}
          </div>

          {/* Other projects */}
          {otherProjects.length > 0 && (
            <>
              <h3 className="text-white font-semibold text-xl mb-5 mt-10">Other Projects</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {otherProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </>
          )}

          <div className="mt-10 text-center">
            <a
              href="https://github.com/pratstick"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              See all repositories on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
