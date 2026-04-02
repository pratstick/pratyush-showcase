export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-[#1e1e30]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#a0a0b8] text-sm">
          © {year}{' '}
          <span className="text-white font-medium">Pratyush</span>. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pratstick"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0a0b8] hover:text-[#6c63ff] transition-colors text-sm"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <span className="text-[#1e1e30]">|</span>
          <a
            href="https://linkedin.com/in/pratstick"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0a0b8] hover:text-[#6c63ff] transition-colors text-sm"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <span className="text-[#1e1e30]">|</span>
          <a
            href="#hero"
            className="text-[#a0a0b8] hover:text-white transition-colors text-sm flex items-center gap-1"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
