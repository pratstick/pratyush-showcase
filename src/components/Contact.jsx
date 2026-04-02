import { useState } from 'react'
import { Github, Linkedin, Mail, Send, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to a backend or form service (e.g. Formspree, EmailJS) to actually send messages.
    console.warn('Contact form: no backend configured — message not sent.')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-indigo-400 font-mono text-sm">04.</span>
          <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">Contact</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl">
          I&apos;m currently open to new opportunities. Whether you have a project in mind, a role to
          discuss, or just want to say hi — my inbox is always open.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Let&apos;s connect</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/pratstick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 glass rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Github size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 font-mono">GitHub</p>
                    <p className="text-sm font-medium">github.com/pratstick</p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/pratyush-k-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 glass rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Linkedin size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 font-mono">LinkedIn</p>
                    <p className="text-sm font-medium">linkedin.com/in/pratyush-k-/</p>
                  </div>
                </a>
                <a
                  href="mailto:pratyushk2005@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 glass rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 font-mono">Email</p>
                    <p className="text-sm font-medium">pratyushk2005@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+919022904732"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 glass rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 font-mono">Phone</p>
                    <p className="text-sm font-medium">+91 9022904732</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-gray-400 mb-2">
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
                  className="w-full px-4 py-3 glass rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-gray-400 mb-2">
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
                  className="w-full px-4 py-3 glass rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-gray-400 mb-2">
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
                className="w-full px-4 py-3 glass rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              {submitted ? (
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
            {submitted && (
              <p className="text-center text-sm text-emerald-400 animate-fade-in">
                Thanks! I&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
