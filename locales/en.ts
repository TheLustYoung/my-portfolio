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
    subtitle: "A selection of projects that best showcase my frontend approach.",
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
