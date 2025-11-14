// data/projects.ts

export type ProjectType = "commercial" | "pet" | "experiment";

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  type: ProjectType;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "landing-neon",
    slug: "landing-neon",
    title: "fullcycle-agency",
    shortDescription:
      "Футуристичный лендинг с неоновыми акцентами и плавными анимациями на React + Framer Motion.",
    longDescription:
      "Одностраничный лендинг с акцентом на анимации и ощущение «дорогого» продукта. Реализованы плавные scroll-анимации, hover-эффекты, адаптивная сетка и интеграция с простым API для формы.",
    type: "pet",
    stack: ["Vite + React", "JavaScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/TheLustYoung/fullcycle-agency",
    demoUrl: "https://1233-tawny.vercel.app",
  },
  {
    id: "shop-frontend",
    slug: "shop-frontend",
    title: "Shop Frontend",
    shortDescription:
      "SPA интернет-магазин с фильтрами, корзиной и интеграцией c API.",
    longDescription:
      "Фронтенд магазина на базе React/Next с клиентской и серверной отрисовкой. Реализованы фильтры, пагинация, корзина и работа с REST API. Уделено внимание читаемости кода и структуре компонентов.",
    type: "pet",
    stack: ["Vite + React", "JavaScript (ES6+)", "React Router", "Framer Motion", "Context API", "localStorage", "Tailwind CSS",],
    githubUrl: "https://github.com/TheLustYoung/shop-frontend",
    demoUrl: "https://shop-frontend-five-eta.vercel.app",
  },
  {
    id: "Project3",
    slug: "shop-frontend",
    title: "Shop Frontend",
    shortDescription:
      "SPA интернет-магазин с фильтрами, корзиной и интеграцией c API.",
    longDescription:
      "Фронтенд магазина на базе React/Next с клиентской и серверной отрисовкой. Реализованы фильтры, пагинация, корзина и работа с REST API. Уделено внимание читаемости кода и структуре компонентов.",
    type: "pet",
    stack: ["Vite + React", "JavaScript (ES6+)", "React Router", "Framer Motion", "Context API", "localStorage", "Tailwind CSS",],
    githubUrl: "https://github.com/TheLustYoung/shop-frontend",
    demoUrl: "https://shop-frontend-five-eta.vercel.app",
  },
  {
    id: "Project4",
    slug: "shop-frontend",
    title: "Shop Frontend",
    shortDescription:
      "SPA интернет-магазин с фильтрами, корзиной и интеграцией c API.",
    longDescription:
      "Фронтенд магазина на базе React/Next с клиентской и серверной отрисовкой. Реализованы фильтры, пагинация, корзина и работа с REST API. Уделено внимание читаемости кода и структуре компонентов.",
    type: "pet",
    stack: ["Vite + React", "JavaScript (ES6+)", "React Router", "Framer Motion", "Context API", "localStorage", "Tailwind CSS",],
    githubUrl: "https://github.com/TheLustYoung/shop-frontend",
    demoUrl: "https://shop-frontend-five-eta.vercel.app",
  },
  {
    id: "Project5",
    slug: "shop-frontend",
    title: "Shop Frontend",
    shortDescription:
      "SPA интернет-магазин с фильтрами, корзиной и интеграцией c API.",
    longDescription:
      "Фронтенд магазина на базе React/Next с клиентской и серверной отрисовкой. Реализованы фильтры, пагинация, корзина и работа с REST API. Уделено внимание читаемости кода и структуре компонентов.",
    type: "pet",
    stack: ["Vite + React", "JavaScript (ES6+)", "React Router", "Framer Motion", "Context API", "localStorage", "Tailwind CSS",],
    githubUrl: "https://github.com/TheLustYoung/shop-frontend",
    demoUrl: "https://shop-frontend-five-eta.vercel.app",
  },
  {
    id: "Project6 ",
    slug: "shop-frontend",
    title: "Shop Frontend",
    shortDescription:
      "SPA интернет-магазин с фильтрами, корзиной и интеграцией c API.",
    longDescription:
      "Фронтенд магазина на базе React/Next с клиентской и серверной отрисовкой. Реализованы фильтры, пагинация, корзина и работа с REST API. Уделено внимание читаемости кода и структуре компонентов.",
    type: "pet",
    stack: ["Vite + React", "JavaScript (ES6+)", "React Router", "Framer Motion", "Context API", "localStorage", "Tailwind CSS",],
    githubUrl: "https://github.com/TheLustYoung/shop-frontend",
    demoUrl: "https://shop-frontend-five-eta.vercel.app",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
