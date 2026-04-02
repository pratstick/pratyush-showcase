import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-indigo-300 mb-8 animate-fade-in">
          <Sparkles size={14} />
          <span>Available for full-time roles &amp; freelance</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
          Hi, I&apos;m{' '}
          <span className="text-gradient">Pratyush</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-6 animate-slide-up">
          Full Stack Developer &amp; AI Engineer
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mb-10 animate-fade-in">
          I build intelligent web applications and data-driven solutions — from AI-powered tools
          to community platforms and enterprise analytics systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25 text-center"
          >
            View My Work
          </a>
          {/* TODO: Replace href="#" with your resume PDF path, e.g. "/resume.pdf" */}
          <a
            href="https://drive.google.com/file/d/1T0EM5ru9YewWYaYakylpFoJb6EFJ__PM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 glass hover:bg-white/10 text-gray-200 font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            aria-label="Download resume"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5 animate-fade-in">
          <a
            href="https://github.com/pratstick"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/pratyush-k-/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:pratyushk2005@gmail.com"
            className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-mono">scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
