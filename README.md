# Pratyush — Personal Portfolio

A modern, responsive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS v4**.

Live at: [pratstick.github.io/pratyush-showcase](https://pratstick.github.io/pratyush-showcase) *(deploy separately)*

## ✨ Features

- **Dark, premium theme** with smooth animations and hover effects
- **Fully responsive** — mobile, tablet, and desktop
- **Sections**: Hero · About · Skills · Projects · Experience · Contact
- **Typewriter effect** in the hero section
- **Intersection observer** reveal animations as you scroll
- **Project cards** with tech badges and GitHub links
- **Contact form** UI (frontend-only, ready to wire up a backend)
- **SEO-friendly**: Open Graph, Twitter Card, semantic HTML
- **Accessible**: ARIA labels, keyboard-navigable, semantic landmarks

## 🗂️ Folder Structure

```
pratyush-showcase/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js     ← edit project details here
│   │   └── skills.js       ← edit tech stack here
│   ├── hooks/
│   │   └── useReveal.js    ← intersection observer hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           ← Tailwind + custom CSS
├── index.html              ← SEO meta tags & Google Fonts
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

### Installation & Development

```bash
# 1. Clone the repo
git clone https://github.com/pratstick/pratyush-showcase.git
cd pratyush-showcase

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output in dist/
```

### Preview the Production Build

```bash
npm run preview
# → http://localhost:4173
```

## 🛠️ Customisation

| What to change | Where |
|---|---|
| Project data (names, descriptions, tech) | `src/data/projects.js` |
| Tech stack categories | `src/data/skills.js` |
| Personal bio text | `src/components/About.jsx` |
| Experience & achievements | `src/components/Experience.jsx` |
| Social links & email | `src/components/Contact.jsx` |
| SEO meta tags | `index.html` |
| Colour palette | `src/index.css` (`@theme` block) |

## 📦 Tech Stack

- [React 19](https://react.dev/) — UI library
- [Vite 8](https://vite.dev/) — build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first CSS
- [Inter](https://rsms.me/inter/) & [Fira Code](https://github.com/tonsky/FiraCode) — fonts

## 📄 License

MIT © Pratyush
