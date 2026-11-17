import { useEffect, useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  const [score, setScore] = useState(12800)
  const [coins, setCoins] = useState(16)
  const [isCrt, setIsCrt] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'))
  const toggleCrt = () => setIsCrt((curr) => !curr)

  const handleAddScore = useCallback((pts) => {
    setScore((s) => s + pts)
  }, [])

  const handleAddCoin = useCallback(() => {
    setCoins((c) => c + 1)
    setScore((s) => s + 200)
  }, [])

  return (
    <div className={`min-h-screen bg-transparent transition-colors ${isCrt ? 'crt-overlay' : ''}`}>
      {/* 8-Bit Arcade HUD & Marquee Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        score={score}
        coins={coins}
        isCrt={isCrt}
        onToggleCrt={toggleCrt}
      />

      <main>
        {/* World 1-1: Overworld */}
        <Hero onAddScore={handleAddScore} onAddCoin={handleAddCoin} />

        {/* World 1-2: Player RPG Stats */}
        <About />

        {/* World 1-3: Inventory & Tech Arsenal */}
        <Skills onAddScore={handleAddScore} />

        {/* World 1-4: Boss Stage & Featured Quests */}
        <Projects onAddScore={handleAddScore} />

        {/* World 8-4: Warp Zone & Contact Castle */}
        <Contact onAddScore={handleAddScore} onAddCoin={handleAddCoin} />
      </main>

      {/* Stage Clear Flagpole Footer */}
      <Footer />
    </div>
  )
}

export default App
