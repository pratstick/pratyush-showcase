import { Github, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 px-6">
      <div className="max-w-5xl mx-auto glass rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="theme-muted text-sm">
          © {year} Pratyush. Built with{' '}
          <Heart size={12} className="inline text-indigo-400" aria-label="love" />
          {' '}using React &amp; Tailwind CSS.
        </p>
        <a
          href="https://github.com/pratstick"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 theme-muted hover:text-white transition-colors text-sm"
        >
          <Github size={14} />
          <span>pratstick</span>
        </a>
      </div>
    </footer>
  )
}
