import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/pratstick',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/pratstick',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:pratstick@example.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  const [ref, visible] = useReveal();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Frontend-only placeholder
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-[#0f0f1a]">
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="text-[#6c63ff] font-mono text-sm tracking-widest uppercase mb-3">
            05. contact
          </p>
          <h2 className="section-heading text-white mb-4">Get In Touch</h2>
          <p className="text-[#a0a0b8] mb-12 max-w-xl">
            Whether you have a project idea, want to collaborate, or just want to say hi —
            my inbox is always open. I&apos;ll get back to you as soon as I can.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="card-glass rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-10 text-center gap-4">
                  <span className="text-5xl">🎉</span>
                  <h3 className="text-white font-bold text-xl">Message received!</h3>
                  <p className="text-[#a0a0b8] text-sm">
                    Thanks for reaching out. I&apos;ll be in touch shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', message: '' }); }}
                    className="btn-secondary text-sm mt-2"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-[#a0a0b8] mb-1.5">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-[#0a0a0f] border border-[#1e1e30] text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#6c63ff] focus:ring-1 focus:ring-[#6c63ff]/30 transition-colors placeholder-[#4a4a60]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-[#a0a0b8] mb-1.5">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-[#0a0a0f] border border-[#1e1e30] text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#6c63ff] focus:ring-1 focus:ring-[#6c63ff]/30 transition-colors placeholder-[#4a4a60]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-[#a0a0b8] mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      className="w-full bg-[#0a0a0f] border border-[#1e1e30] text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#6c63ff] focus:ring-1 focus:ring-[#6c63ff]/30 transition-colors placeholder-[#4a4a60] resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-center">
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Social links & info */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Let&apos;s connect</h3>
                <p className="text-[#a0a0b8] text-sm leading-relaxed">
                  I&apos;m always excited to work on interesting problems and meet talented people.
                  Find me across the web:
                </p>
              </div>

              <div className="space-y-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 card-glass rounded-xl px-5 py-4 group"
                    aria-label={s.label}
                  >
                    <span className="text-[#6c63ff] group-hover:text-[#8b83ff] transition-colors">
                      {s.icon}
                    </span>
                    <span className="text-white font-medium text-sm group-hover:text-[#6c63ff] transition-colors">
                      {s.label}
                    </span>
                    <svg
                      className="w-4 h-4 text-[#a0a0b8] ml-auto group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Availability badge */}
              <div className="card-glass rounded-xl px-5 py-4 mt-2 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <p className="text-[#a0a0b8] text-sm">
                  Available for <span className="text-white font-medium">freelance</span> and{' '}
                  <span className="text-white font-medium">full-time opportunities</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
