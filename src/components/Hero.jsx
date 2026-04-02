import { useEffect, useState } from 'react';

const roles = [
  'Full-Stack Developer',
  'ML Engineer',
  'Systems Engineer',
  'Open-Source Builder',
];

function TypewriterRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-[#6c63ff] font-mono">
      {displayed}
      <span className="cursor-blink text-[#8b83ff]">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg"
    >
      {/* Background gradient orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #6c63ff, transparent)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
        style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center md:text-left">
        <div className="animate-fade-in-up">
          <p className="text-[#6c63ff] font-mono text-sm tracking-widest uppercase mb-4">
            👋 Hello, world — I&apos;m
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-[1.05]">
            <span className="gradient-text">Pratyush</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#a0a0b8] mb-6 h-10">
            <TypewriterRole />
          </h2>
          <p className="text-lg text-[#a0a0b8] max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
            I build intelligent systems — from AI-powered web apps to ML pipelines and
            algorithmic research. Passionate about clean code, impactful products, and
            turning ideas into production-ready software.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
            <a
              href="https://github.com/pratstick"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
              aria-label="GitHub profile"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          </div>

          {/* Download resume placeholder */}
          <div className="mt-6">
            <a
              href="#"
              aria-label="Download Resume (coming soon)"
              className="inline-flex items-center gap-2 text-sm text-[#a0a0b8] hover:text-[#6c63ff] transition-colors group"
              title="Resume download coming soon"
            >
              <svg
                className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-1 animate-float">
          <span className="text-xs text-[#a0a0b8] tracking-widest uppercase">scroll</span>
          <svg
            className="w-5 h-5 text-[#6c63ff]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
