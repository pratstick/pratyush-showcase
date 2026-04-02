export const projects = [
  {
    id: 1,
    name: "The Interview Alchemist",
    tagline: "AI-powered interview preparation platform",
    description:
      "Intelligent MERN stack interview prep platform with AI-powered question generation, NLP response analysis, and real-time feedback. Helps candidates practice with domain-specific questions and get scored answers.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "NLP"],
    category: "Full-Stack",
    stars: 0,
    url: "https://github.com/pratstick/The-Interview-Alchemist",
    featured: true,
    gradient: "from-violet-600 to-indigo-600",
    icon: "🧪",
  },
  {
    id: 2,
    name: "Supply Chain Analytics",
    tagline: "Enterprise ML platform for supply chain optimization",
    description:
      "Enterprise supply chain optimization platform featuring advanced ML models (Random Forest, XGBoost, Prophet), intelligent allocation algorithms, Streamlit dashboard, and automated monitoring. Built on Databricks with comprehensive feature engineering.",
    tech: ["Python", "XGBoost", "Prophet", "Streamlit", "Databricks", "Pandas"],
    category: "Data / ML",
    stars: 1,
    url: "https://github.com/pratstick/supply-chain-predictive-analytics",
    featured: true,
    gradient: "from-emerald-600 to-teal-600",
    icon: "📦",
  },
  {
    id: 3,
    name: "ShareSphere",
    tagline: "Community platform for neighborhood mutual aid",
    description:
      "A modern neighborhood help platform built with Next.js 15, Sanity CMS, and Clerk authentication. Connect with neighbors to offer and request help, building stronger communities through mutual support.",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "Clerk", "Tailwind CSS"],
    category: "Full-Stack",
    stars: 0,
    url: "https://github.com/pratstick/ShareSphere",
    featured: true,
    gradient: "from-pink-600 to-rose-600",
    icon: "🤝",
  },
  {
    id: 4,
    name: "Rabin-Karp XOR Enhancement",
    tagline: "Optimized pattern matching with XOR filters",
    description:
      "XOR filter-based enhancement of the Rabin-Karp algorithm for optimized string pattern matching and reduced hash collisions. Demonstrates algorithmic research with benchmarking and analysis.",
    tech: ["Python", "Algorithms", "Data Structures", "Benchmarking"],
    category: "Algorithms",
    stars: 0,
    url: "https://github.com/pratstick/rabin-karp-xor-filter-enhancement",
    featured: true,
    gradient: "from-amber-600 to-orange-600",
    icon: "🔍",
  },
  {
    id: 5,
    name: "AI Invoice Extractor",
    tagline: "Smart invoice parsing with Google Gemini",
    description:
      "Invoice Extractor app that leverages Google Gemini's multimodal capabilities to extract structured data from invoice images. Supports bulk processing with high accuracy.",
    tech: ["Python", "Google Gemini", "Streamlit", "PIL"],
    category: "AI / ML",
    stars: 3,
    url: "https://github.com/pratstick/AI-Invoice-Extractor",
    featured: false,
    gradient: "from-sky-600 to-blue-600",
    icon: "🧾",
  },
  {
    id: 6,
    name: "Browser MCP Agent",
    tagline: "Natural language web automation with GPT-4.1",
    description:
      "Web automation solution using OpenAI GPT-4.1 Mini and Anthropic's Model Context Protocol (MCP) with Puppeteer for natural language browser control and intelligent web interaction.",
    tech: ["Python", "OpenAI GPT-4.1", "MCP", "Puppeteer", "Node.js"],
    category: "AI / Automation",
    stars: 0,
    url: "https://github.com/pratstick/browser-mcp-agent",
    featured: false,
    gradient: "from-fuchsia-600 to-purple-600",
    icon: "🤖",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
