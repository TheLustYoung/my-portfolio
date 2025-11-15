// locales/en.ts
export const en = {
  common: {
    brand: "TheLustYoung",
    role: "Front-end developer",
    nav: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
    },
    ctaViewProjects: "View projects",
    ctaContact: "Get in touch",
  },

  hero: {
    title: "I build modern web applications",
    subtitle:
      "I create interfaces with clean API integration and readable code backend teams enjoy working with.",
  },

  about: {
    title: "About me",
    text: `My name is Vladislav, I'm a front-end developer with 3 years of experience. 
Coding is meditative to me — I enjoy writing and communicating with code. 
I build projects for myself and for those who resonate with this mindset.`,
  },

  skills: {
    title: "Skills",
    coreTitle: "Core stack",
    interestTitle: "In the field of interest",
  },

  projects: {
    title: "Projects",
    subtitle:
      "A selection of projects that best showcase my frontend approach.",

    viewMore: "View details",
    moreStack: "View project details",
    screenshots: "Project screenshots",
    openDemo: "Open demo",
    openCode: "View on GitHub",

    showAllPhotos: "Show all photos",


    type: {
      commercial: "Commercial project",
      pet: "Pet project",
      experiment: "Experiment",
    },

    roles: {
      default:
        "I was responsible for the frontend: architecture, layout, animations and API integration.",
    },

    // === Fullcycle Agency / landing-neon ===
    landingNeon: {
      title: "Fullcycle Agency — neon landing",
      short:
        "A futuristic neon landing page with smooth animations, bold typography and a premium look & feel.",
      long: `
✨ Overview

Fullcycle Agency is a single-page neon-style landing. The goal was to make it feel dynamic and premium without overloading the user.

📌 Implemented:
• Smooth motion and page transitions with Framer Motion  
• Scroll-based animations and subtle hover effects  
• Responsive grid for mobile and desktop  
• Simple API integration for the contact form  

🛠 Stack:
Vite + React, JavaScript, Framer Motion, Tailwind CSS.

🔥 Why it matters:
This project demonstrates how I work with visuals and motion — making the interface expressive while keeping it fast and usable.`,
      why: `
🔥 Why I built it

• To experiment with premium, futuristic UI  
• To practice Framer Motion in a real landing page scenario  
• To explore how far animations can go without hurting UX  
• To have a strong visual case in my portfolio`,
    },

    // === Shop Frontend ===
    shopFrontend: {
      title: "Shop Frontend — store interface",
      short:
        "SPA online store with filters, cart, product page and API integration. Lightweight, fast and well-structured.",
      long: `
🛒 Overview

Shop Frontend is a frontend for an online store. The focus was on UX: browsing products, managing cart and preserving state.

📌 Implemented:
• Product catalog with filters and pagination  
• Cart with localStorage persistence  
• Product page with animations and extra info  
• REST API integration for data fetching  
• Responsive layout from mobile to desktop  

🛠 Stack:
Vite + React, JavaScript (ES6+), React Router, Framer Motion, Context API, localStorage, Tailwind CSS.

💡 Why it matters:
This project shows how I handle stateful applications: structure, readability and clear component separation.`,
      why: `
🎯 Why I built it

• To simulate a real e-commerce frontend with state-heavy UI  
• To practice working with filters, pagination and cart logic  
• To improve how I structure components and context-based state  
• To show a realistic “store” case to potential clients and teams`,
    },

    // === Admin Panel ===
    adminPanel: {
      title: "AirControl Admin — analytics dashboard",
      short:
        "Admin panel in a Nike-inspired dark style with KPIs, charts, orders and user management.",
      long: `
📊 Overview

AirControl Admin is an internal dashboard concept for managing an online store or digital product. 
The idea was to make an admin panel feel as polished and modern as a public-facing website — 
with a dark, slightly sporty visual style and clear information hierarchy.

📌 Implemented:
• Main dashboard with key metrics (revenue, orders, conversion, active users)  
• Orders table with status badges and quick actions  
• Basic user list and activity overview  
• Responsive layout that works both on desktop and laptop screens  
• Reusable UI components for cards, tables and layouts  

🛠 Stack:
Next.js, TypeScript, Tailwind CSS, basic chart components and responsive grid.

🎨 Visual style:
Dark UI, soft borders, subtle glow, spacing tuned to feel “expensive” while staying functional.`,
      why: `
💡 Why I built it

• To show that I can design and implement internal tools, not only marketing pages  
• To practice structuring an admin interface: navigation, layout, tables, stats blocks  
• To work with a Nike-like visual direction in product UI (clean, bold, confident)  
• To have a portfolio example that feels close to real dashboards used by teams every day`,
    },
  },

  services: {
    title: "What I do",
  },

  faq: {
    title: "FAQ",
  },

  contact: {
    pageTitle: "Contacts",

    direct: {
      title: "Direct contacts",
      subtitle: "The best way to reach me is via Telegram or email.",
      telegram: "Telegram",
      email: "Email",
    },

    title: "Contact",
    subtitle: "If you like the approach, send me a few words about your task.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send",
      success: "Message sent. I will reply to your email.",
      error:
        "Something went wrong. Please try again later or contact me directly via Telegram or email.",
      errors: {
        required: "This field is required",
        email: "Please enter a valid email",
      },
    },
  },

  notFound: {
    title: "Page not found",
    backHome: "Back to home",
  },
} as const;
