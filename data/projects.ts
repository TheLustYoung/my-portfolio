// data/projects.ts

export type ProjectType = "commercial" | "pet" | "experiment";

export type Project = {
  id: string;
  slug: string;
  type: ProjectType;
  stack: string[];
  image: string;
  gallery?: string[];
  github?: string;
  demo?: string;
  i18nKey: string;
};

export const projects: Project[] = [
  {
    id: "landing-neon",
    slug: "landing-neon", // ВАЖНО: именно так
    type: "pet",
    stack: ["Vite + React", "JavaScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/TheLustYoung/fullcycle-agency",
    demo: "https://1233-tawny.vercel.app",
    image: "/projects/landing-neon/landing-neon-1-1.jpg",
    gallery: [
      "/projects/landing-neon/landing-neon-1-1.jpg",
      "/projects/landing-neon/landing-neon-2-1.jpg",
      "/projects/landing-neon/landing-neon-3-1.jpg",
      "/projects/landing-neon/landing-neon-4.jpg",
      "/projects/landing-neon/landing-neon-5.jpg",
      "/projects/landing-neon/landing-neon-6.jpg",
    ],
    i18nKey: "projects.landingNeon",
  },
  {
    id: "shop-frontend",
    slug: "shop-frontend",
    type: "pet",
    stack: [
      "Vite + React",
      "JavaScript (ES6+)",
      "React Router",
      "Framer Motion",
      "Context API",
      "localStorage",
      "Tailwind CSS",
    ],
    github: "https://github.com/TheLustYoung/shop-frontend",
    demo: "https://shop-frontend-five-eta.vercel.app",
    image: "/projects/shop-frontend/shop-frontend-1.jpg",
    gallery: [
      "/projects/shop-frontend/shop-frontend-1.jpg",
      "/projects/shop-frontend/shop-frontend-2.jpg",
      "/projects/shop-frontend/shop-frontend-3.jpg",
      "/projects/shop-frontend/shop-frontend-4.jpg",
      "/projects/shop-frontend/shop-frontend-5.jpg",
    ],
    i18nKey: "projects.shopFrontend",
  },
  {
    id: "aircontrol-admin",
    slug: "aircontrol-admin",
    type: "pet",
    stack: [
      "Next.ts", 
      "TypeScript", 
      "ESLint", 
      "React Compiler", 
      "Custom Components", 
      "PostCSS",
      "Tailwind CSS",
    ],
    github: "https://github.com/TheLustYoung/aircontrol-admin",
    demo: "https://aircontrol-admin.vercel.app",
    image: "/projects/airControl/cover.jpg",
    gallery: [
      "/projects/airControl/airControl-1.jpg",
      "/projects/airControl/airControl-2.jpg",
      "/projects/airControl/airControl-3.jpg",
    ],
    i18nKey: "projects.adminPanel",
  },
  {
    id: "TLYshop",
    slug: "TLYshop",
    type: "pet",
    stack: [
      "Next.ts", 
      "TypeScript", 
      "ESLint", 
      "React Compiler", 
      "Custom Components", 
      "PostCSS",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL"
    ],
    github: "https://github.com/TheLustYoung/",
    demo: "",
    image: "/projects/tlyshop/title.png",
    gallery: [
      "/projects/tlyshop/title.png",
      "/projects/tlyshop/main.png",
      "/projects/tlyshop/footer.png",
    ],
    i18nKey: "projects.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
