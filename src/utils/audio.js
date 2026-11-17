// Web Audio 8-bit Retro Sound Synthesizer
// Pure procedural sound effects - 0 external audio files needed

let audioCtx = null

function getAudioContext() {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

let isMuted = true

export function setMuted(muted) {
  isMuted = muted
}

export function getMuted() {
  return isMuted
}

export function playCoin() {
  if (isMuted) return
  const ctx = getAudioContext()
  if (!ctx) return

  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = 'square'
  // B5 (987.77 Hz) -> E6 (1318.51 Hz) - iconic Mario coin interval
  osc.frequency.setValueAtTime(987.77, now)
  osc.frequency.setValueAtTime(1318.51, now + 0.08)

  gain.gain.setValueAtTime(0.15, now)
  gain.gain.setValueAtTime(0.15, now + 0.08)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35)

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start(now)
  osc.stop(now + 0.35)
}

export function playJump() {
  if (isMuted) return
  const ctx = getAudioContext()
  if (!ctx) return

  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = 'square'
  osc.frequency.setValueAtTime(160, now)
  osc.frequency.exponentialRampToValueAtTime(520, now + 0.14)

  gain.gain.setValueAtTime(0.15, now)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16)

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start(now)
  osc.stop(now + 0.16)
}

export function playPowerUp() {
  if (isMuted) return
  const ctx = getAudioContext()
  if (!ctx) return

  const notes = [330, 392, 659, 523, 587, 784]
  notes.forEach((freq, idx) => {
    const now = ctx.currentTime + idx * 0.06
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(freq, now)

    gain.gain.setValueAtTime(0.14, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.07)
  })
}

export function play1Up() {
  if (isMuted) return
  const ctx = getAudioContext()
  if (!ctx) return

  // Classic 1-up motif: E5, G5, E6, C6, D6, G6
  const notes = [659.25, 783.99, 1318.51, 1046.50, 1174.66, 1567.98]
  notes.forEach((freq, idx) => {
    const now = ctx.currentTime + idx * 0.075
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'square'
    osc.frequency.setValueAtTime(freq, now)

    gain.gain.setValueAtTime(0.13, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.09)
  })
}

export function playStomp() {
  if (isMuted) return
  const ctx = getAudioContext()
  if (!ctx) return

  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = 'triangle'
  osc.frequency.setValueAtTime(140, now)
  osc.frequency.exponentialRampToValueAtTime(35, now + 0.1)

  gain.gain.setValueAtTime(0.2, now)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12)

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start(now)
  osc.stop(now + 0.12)
}

export function playPipe() {
  if (isMuted) return
  const ctx = getAudioContext()
  if (!ctx) return

  const freqs = [380, 310, 260, 210, 170]
  freqs.forEach((freq, idx) => {
    const now = ctx.currentTime + idx * 0.05
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'square'
    osc.frequency.setValueAtTime(freq, now)

    gain.gain.setValueAtTime(0.12, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.06)
  })
}

export function playStageClear() {
  if (isMuted) return
  const ctx = getAudioContext()
  if (!ctx) return

  const melody = [
    { freq: 523.25, dur: 0.12 }, // C5
    { freq: 659.25, dur: 0.12 }, // E5
    { freq: 783.99, dur: 0.12 }, // G5
    { freq: 1046.50, dur: 0.18 }, // C6
    { freq: 880.00, dur: 0.14 }, // A5
    { freq: 1046.50, dur: 0.28 }, // C6
  ]

  let cursor = ctx.currentTime
  melody.forEach((note) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'square'
    osc.frequency.setValueAtTime(note.freq, cursor)

    gain.gain.setValueAtTime(0.14, cursor)
    gain.gain.exponentialRampToValueAtTime(0.001, cursor + note.dur)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(cursor)
    osc.stop(cursor + note.dur)

    cursor += note.dur + 0.03
  })
}
