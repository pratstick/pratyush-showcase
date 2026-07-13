import { useState, useEffect } from 'react'
import { Menu, X, Code2, Sun, Moon } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong border-b border-white/20 shadow-xl shadow-black/25'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-indigo-400 font-mono font-bold text-xl hover:text-indigo-300 transition-colors"
        >
          <Code2 size={24} />
          <span>pratstick</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="theme-muted hover-theme-text transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2 glass rounded-lg text-indigo-400 hover-theme-text hover-glass transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </li>
          <li>
            <a
              href="#contact"
              className="px-4 py-2 glass theme-text text-sm font-medium rounded-lg transition-colors hover-glass"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden theme-muted hover-theme-text transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass-strong border-t border-white/20">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="theme-secondary hover-theme-text transition-colors text-sm font-medium block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={onToggleTheme}
                className="inline-flex items-center gap-2 px-4 py-2 glass theme-text text-sm font-medium rounded-lg transition-colors hover-glass"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-block px-4 py-2 glass theme-text text-sm font-medium rounded-lg transition-colors hover-glass"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
