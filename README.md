# Pratyush — Personal Portfolio

A modern, responsive personal portfolio website built with **React + Vite + Tailwind CSS**.

## Features

- 🌑 Dark, professional theme with gradient accents
- ⚡ Fast builds via Vite
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations and hover effects
- 🔍 SEO-friendly meta tags
- ♿ Accessible markup (ARIA labels, semantic HTML)
- 📬 Contact form UI (frontend-only; plug in a backend or form service)

## Sections

| Section | Description |
|---------|-------------|
| Hero | Name, title, intro, GitHub/LinkedIn/Email links, CV download |
| About | Bio and focus areas |
| Skills | Tech stack by category |
| Projects | 4 featured GitHub projects with cards, badges, and links |
| Contact | Social links + contact form |

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# Clone the repo
git clone https://github.com/pratstick/pratyush-showcase.git
cd pratyush-showcase

# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev
```

### Build for Production

```bash
npm run build
# Output is in the /dist folder
```

### Preview Production Build

```bash
npm run preview
```

## Folder Structure

```
pratyush-showcase/
├── public/               # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Customization

- **Content**: Edit the data arrays in each component file
- **Colors**: Adjust `tailwind.config.js` color tokens
- **Projects**: Update the `projects` array in `src/components/Projects.jsx`
- **Contact links**: Update URLs in `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`
- **Resume**: Replace the `#` href on the "Download CV" button with a link to your PDF

## License

MIT
