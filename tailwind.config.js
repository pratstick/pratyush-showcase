/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive', 'monospace'],
        arcade: ['VT323', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        mario: {
          red: '#e52521',
          blue: '#0026a3',
          sky: '#5c94fc',
          gold: '#fcbc00',
          green: '#00a800',
          greenDark: '#006800',
          brick: '#b83400',
          brickDark: '#6c1e00',
          question: '#fc9838',
          pipe: '#00a800',
          pipeLight: '#00f800',
          pipeDark: '#004800',
          cloud: '#fcfcfc',
          darkBg: '#090a12',
          cardDark: '#121422',
        },
        dark: {
          900: '#070913',
          800: '#0e1122',
          700: '#161930',
          600: '#212648',
        },
        accent: {
          DEFAULT: '#e52521',
          light: '#ff4c48',
          dark: '#b8120e',
        },
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(0,0,0,0.85)',
        'pixel-sm': '2px 2px 0px 0px rgba(0,0,0,0.85)',
        'pixel-lg': '6px 6px 0px 0px rgba(0,0,0,0.9)',
        'pixel-red': '4px 4px 0px 0px #b8120e',
        'pixel-gold': '4px 4px 0px 0px #c47c00',
        'pixel-green': '4px 4px 0px 0px #006800',
        'pixel-inset': 'inset 3px 3px 0px rgba(255,255,255,0.4), inset -3px -3px 0px rgba(0,0,0,0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'bounce-brick': 'bounceBrick 0.25s ease-in-out',
        'coin-spin': 'coinSpin 0.7s steps(4) infinite',
        'mario-run': 'marioRun 0.4s steps(3) infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'cloud-drift': 'cloudDrift 45s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceBrick: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        coinSpin: {
          '0%': { transform: 'scaleX(1)' },
          '25%': { transform: 'scaleX(0.2)' },
          '50%': { transform: 'scaleX(-1)' },
          '75%': { transform: 'scaleX(-0.2)' },
          '100%': { transform: 'scaleX(1)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.25)' },
        },
        cloudDrift: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(calc(100vw + 200px))' },
        },
      },
    },
  },
  plugins: [],
}
