import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Github, Linkedin, Mail, Send, Phone } from 'lucide-react'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

if (import.meta.env.DEV && (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY)) {
  console.warn(
    'Contact form: EmailJS environment variables are not configured.\n' +
    'Copy .env.local.example to .env.local and fill in your EmailJS credentials.',
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Pratyush',
        },
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS send error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto section-shell">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-indigo-400 font-mono text-sm">04.</span>
          <span className="theme-subtle font-mono text-sm uppercase tracking-widest">Contact</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold theme-text mb-4">
          Get In Touch
        </h2>
        <p className="theme-muted mb-12 max-w-xl">
          I&apos;m currently open to new opportunities. Whether you have a project in mind, a role to
          discuss, or just want to say hi — my inbox is always open.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <div className="space-y-8">
            <div>
              <h3 className="theme-text font-semibold mb-4">Let&apos;s connect</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/pratstick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 theme-muted hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 glass rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Github size={18} />
                  </span>
                  <div>
                    <p className="text-xs theme-subtle font-mono">GitHub</p>
                    <p className="text-sm font-medium theme-secondary">github.com/pratstick</p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/pratyush-k-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 theme-muted hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 glass rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Linkedin size={18} />
                  </span>
                  <div>
                    <p className="text-xs theme-subtle font-mono">LinkedIn</p>
                    <p className="text-sm font-medium theme-secondary">linkedin.com/in/pratyush-k-/</p>
                  </div>
                </a>
                <a
                  href="mailto:pratyushk2005@gmail.com"
                  className="flex items-center gap-3 theme-muted hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 glass rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-xs theme-subtle font-mono">Email</p>
                    <p className="text-sm font-medium theme-secondary">pratyushk2005@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+919022904732"
                  className="flex items-center gap-3 theme-muted hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 glass rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-xs theme-subtle font-mono">Phone</p>
                    <p className="text-sm font-medium theme-secondary">+91 9022904732</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono theme-muted mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 glass rounded-xl text-sm theme-text placeholder:text-slate-500/70 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono theme-muted mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 glass rounded-xl text-sm theme-text placeholder:text-slate-500/70 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono theme-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 glass rounded-xl text-sm theme-text placeholder:text-slate-500/70 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 glass-strong hover:bg-white/25 disabled:opacity-60 disabled:cursor-not-allowed theme-text font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {status === 'sending' ? (
                <span>Sending…</span>
              ) : status === 'success' ? (
                <>
                  <span>Message Sent!</span>
                  <span>✓</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
            {status === 'success' && (
              <p className="text-center text-sm text-emerald-400 animate-fade-in">
                Thanks! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm text-red-400 animate-fade-in">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
