import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Github, Linkedin, Mail, Send, AlertCircle, CheckCircle2 } from 'lucide-react'
import { MarioPipeSprite } from './PixelSprites'
import { playStageClear, playJump, playPipe } from '../utils/audio'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact({ onAddScore, onAddCoin }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    playJump()
    setStatus('sending')

    try {
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
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
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800))
      }
      playStageClear()
      if (onAddScore) onAddScore(1000)
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      console.error('EmailJS send error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* World Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-pixel text-[9px] text-red-500 bg-red-500/10 px-2 py-1 border border-red-500/30 rounded">
            STAGE 8-4
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Warp Zone &amp; Contact
          </span>
        </div>

        {/* Warp Zone Pipes */}
        <div className="arcade-card p-6 md:p-8 rounded-lg bg-white dark:bg-[#12172b] mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 dark:text-white mb-2 font-sans">
              Welcome to the Warp Zone!
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-md mx-auto">
              Jump into any warp pipe to connect directly across GitHub, LinkedIn, or Email.
            </p>
          </div>

          {/* 3 Interactive Warp Pipes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center my-4">
            {/* Pipe 1: GitHub */}
            <a
              href="https://github.com/pratstick"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                playPipe()
                if (onAddCoin) onAddCoin()
              }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="group-hover:-translate-y-2 transition-transform">
                <MarioPipeSprite height={56} width={76} />
              </div>
              <span className="font-sans font-bold text-sm text-neutral-900 dark:text-white mt-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 flex items-center gap-1.5">
                <Github size={15} /> GitHub
              </span>
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                github.com/pratstick
              </span>
            </a>

            {/* Pipe 2: LinkedIn */}
            <a
              href="https://linkedin.com/in/pratyush-k-/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                playPipe()
                if (onAddCoin) onAddCoin()
              }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="group-hover:-translate-y-2 transition-transform">
                <MarioPipeSprite height={56} width={76} />
              </div>
              <span className="font-sans font-bold text-sm text-neutral-900 dark:text-white mt-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 flex items-center gap-1.5">
                <Linkedin size={15} /> LinkedIn
              </span>
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                in/pratyush-k-/
              </span>
            </a>

            {/* Pipe 3: Email */}
            <a
              href="mailto:pratyushk2005@gmail.com"
              onClick={() => {
                playPipe()
                if (onAddCoin) onAddCoin()
              }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="group-hover:-translate-y-2 transition-transform">
                <MarioPipeSprite height={56} width={76} />
              </div>
              <span className="font-sans font-bold text-sm text-neutral-900 dark:text-white mt-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 flex items-center gap-1.5">
                <Mail size={15} /> Direct Email
              </span>
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                pratyushk2005@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Message Dispatch Form */}
        <div className="arcade-card p-6 md:p-8 rounded-lg bg-white dark:bg-[#12172b]">
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-6">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1.5 flex items-center gap-2">
              <Send size={18} className="text-red-500" />
              <span>Send a Direct Message</span>
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Have an open role, project idea, or just want to connect? Drop a message below!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Alex Smith"
                  className="w-full bg-neutral-50 dark:bg-[#0d111d] border-2 border-neutral-300 dark:border-neutral-700 focus:border-red-500 text-neutral-900 dark:text-white text-sm px-4 py-2.5 rounded-md outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="alex@example.com"
                  className="w-full bg-neutral-50 dark:bg-[#0d111d] border-2 border-neutral-300 dark:border-neutral-700 focus:border-red-500 text-neutral-900 dark:text-white text-sm px-4 py-2.5 rounded-md outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Let's discuss an opportunity or project..."
                className="w-full bg-neutral-50 dark:bg-[#0d111d] border-2 border-neutral-300 dark:border-neutral-700 focus:border-red-500 text-neutral-900 dark:text-white text-sm px-4 py-2.5 rounded-md outline-none transition-colors"
              />
            </div>

            {/* Success state */}
            {status === 'success' && (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500 rounded-md text-xs font-medium text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>Message transmitted successfully! Pratyush will be in touch shortly. (+1000 PTS)</span>
              </div>
            )}

            {/* Error state */}
            {status === 'error' && (
              <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-500 rounded-md text-xs font-medium text-red-800 dark:text-red-300 flex items-center gap-2">
                <AlertCircle size={16} />
                <span>Delivery error. Please reach out directly to pratyushk2005@gmail.com</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-7 py-3 bg-red-600 hover:bg-red-500 text-white font-sans font-bold text-sm rounded-md pixel-btn flex items-center justify-center gap-2"
            >
              <Send size={15} />
              <span>{status === 'sending' ? 'Transmitting...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
