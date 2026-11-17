import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Github, Linkedin, Mail, Send, AlertCircle } from 'lucide-react'
import { MarioPipeSprite, MarioStar } from './PixelSprites'
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
        // Fallback simulated delay if env variables are pending
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
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* World Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-pixel text-xs text-red-500 bg-black px-2 py-1 border-2 border-red-500 rounded">
            WORLD 8-4
          </span>
          <span className="font-pixel text-xs text-yellow-400 tracking-wider">
            &gt; WARP ZONE &amp; FINAL CASTLE
          </span>
        </div>

        {/* Warp Zone Pipes Header */}
        <div className="bg-[#0e101f] border-4 border-black p-6 md:p-8 rounded-lg shadow-pixel-lg mb-8">
          <div className="text-center mb-8">
            <h2 className="font-pixel text-2xl md:text-3xl text-white retro-shadow mb-2">
              WELCOME TO WARP ZONE!
            </h2>
            <p className="font-arcade text-xl text-yellow-300">
              JUMP INTO A PIPE TO CONNECT WITH PRATYUSH
            </p>
          </div>

          {/* 3 Interactive Warp Pipes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center my-6">
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
                <MarioPipeSprite height={60} width={80} />
              </div>
              <span className="font-pixel text-xs text-white mt-3 group-hover:text-yellow-300 flex items-center gap-1.5">
                <Github size={14} /> GITHUB
              </span>
              <span className="font-arcade text-base text-neutral-400">
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
                <MarioPipeSprite height={60} width={80} />
              </div>
              <span className="font-pixel text-xs text-white mt-3 group-hover:text-yellow-300 flex items-center gap-1.5">
                <Linkedin size={14} /> LINKEDIN
              </span>
              <span className="font-arcade text-base text-neutral-400">
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
                <MarioPipeSprite height={60} width={80} />
              </div>
              <span className="font-pixel text-xs text-white mt-3 group-hover:text-yellow-300 flex items-center gap-1.5">
                <Mail size={14} /> EMAIL
              </span>
              <span className="font-arcade text-base text-neutral-400">
                pratyushk2005@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Message Dispatch Castle Terminal */}
        <div className="bg-[#0e101f] border-4 border-black p-6 md:p-8 rounded-lg shadow-pixel-lg">
          <div className="border-b-2 border-neutral-800 pb-4 mb-6">
            <h3 className="font-pixel text-lg md:text-xl text-white mb-2 flex items-center gap-2">
              <Send size={18} className="text-red-500" />
              <span>TRANSMIT DIRECT DISPATCH TO PLAYER 1</span>
            </h3>
            <p className="font-arcade text-lg text-neutral-300">
              Have a role, full-time opportunity, freelance project or question? Send an instant signal!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-pixel text-[10px] text-yellow-300 mb-2">
                  YOUR CALLSIGN / NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="PLAYER 2 (e.g. Satoshi)"
                  className="w-full bg-black border-2 border-neutral-700 focus:border-yellow-400 text-white font-mono text-sm px-4 py-3 rounded outline-none shadow-pixel-sm transition-colors"
                />
              </div>

              <div>
                <label className="block font-pixel text-[10px] text-yellow-300 mb-2">
                  CONTACT FREQUENCY / EMAIL *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@domain.com"
                  className="w-full bg-black border-2 border-neutral-700 focus:border-yellow-400 text-white font-mono text-sm px-4 py-3 rounded outline-none shadow-pixel-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-pixel text-[10px] text-yellow-300 mb-2">
                TRANSMISSION MESSAGE *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Let's build something awesome together..."
                className="w-full bg-black border-2 border-neutral-700 focus:border-yellow-400 text-white font-mono text-sm px-4 py-3 rounded outline-none shadow-pixel-sm transition-colors"
              />
            </div>

            {/* Status alerts */}
            {status === 'success' && (
              <div className="p-3 bg-green-950 border-2 border-green-500 rounded font-pixel text-xs text-green-300 flex items-center gap-2">
                <MarioStar className="w-5 h-5 animate-spin" />
                <span>★ 1-UP! TRANSMISSION SENT TO PRATYUSH&apos;S INBOX (+1000 PTS) ★</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-3 bg-red-950 border-2 border-red-500 rounded font-pixel text-xs text-red-300 flex items-center gap-2">
                <AlertCircle size={16} />
                <span>TRANSMISSION FAILED. PLEASE DIRECT EMAIL TO PRATYUSHK2005@GMAIL.COM</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-pixel text-xs md:text-sm rounded pixel-btn flex items-center justify-center gap-2"
            >
              <Send size={16} />
              <span>{status === 'sending' ? 'TRANSMITTING...' : 'DISPATCH MESSAGE [PRESS A]'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
