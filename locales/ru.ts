// locales/ru.ts
export const ru = {
  common: {
    brand: "TheLustYoung",
    role: "Front-end разработчик",
    nav: {
      home: "Главная",
      projects: "Проекты",
      services: "Услуги",
      contact: "Контакты",
    },
    ctaViewProjects: "Смотреть проекты",
    ctaContact: "Связаться",
  },
  hero: {
    title: "Создаю современные веб-приложения",
    subtitle:
      "Делаю интерфейсы с аккуратной интеграцией API и читаемым кодом для backend-команд.",
  },
  about: {
    title: "Обо мне",
    text: `Меня зовут Владислав, я front-end разработчик с 3-х летним опытом. 
Код для меня — что-то медитативное: мне нравится писать его и общаться с ним. 
Я создаю проекты для себя и тех, кому откликается мой подход.`,
  },
  skills: {
    title: "Навыки",
    coreTitle: "Core-стек",
    interestTitle: "В поле интереса",
  },
  projects: {
    title: "Проекты",
    subtitle: "Подборка кейсов, которые лучше всего показывают мой подход к фронтенду.",
  },
  services: {
    title: "Чем могу помочь",
  },
  faq: {
    title: "FAQ",
  },
  contact: {
    pageTitle: "Контакты",
  direct: {
    title: "Прямые контакты",
    subtitle: "Лучше всего писать в Telegram или на почту.",
    telegram: "Telegram",
    email: "Почта",
  },
    title: "Связаться",
    subtitle: "Если откликается подход — напишите пару строк о задаче.",
    form: {
  name: "Имя",
  email: "Email",
  message: "Сообщение",
  submit: "Отправить",
  success: "Сообщение отправлено. Я отвечу на ваш email.",
  error:
    "Что-то пошло не так. Попробуйте позже или напишите мне напрямую в Telegram или на почту.",
  errors: {
    required: "Поле обязательно",
    email: "Введите корректный email",
  },
},
  },
  notFound: {
    title: "Страница не найдена",
    backHome: "Вернуться на главную",
  },
} as const;
