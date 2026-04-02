import { Github, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/5 bg-[#0d0d14] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {year} Pratyush. Built with{' '}
          <Heart size={12} className="inline text-indigo-400" aria-label="love" />
          {' '}using React &amp; Tailwind CSS.
        </p>
        <a
          href="https://github.com/pratstick"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm"
        >
          <Github size={14} />
          <span>pratstick</span>
        </a>
      </div>
    </footer>
  )
}
