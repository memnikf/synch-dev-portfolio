export type Language = 'en' | 'ru';

export type SiteCopy = {
  nav: {
    work: string;
    lab: string;
    stack: string;
    contact: string;
    menu: string;
    close: string;
  };
  loader: {
    label: string;
    line: string;
  };
  hero: {
    role: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    proof: string[];
  };
  work: {
    kicker: string;
    title: string;
    body: string;
    items: Array<{
      title: string;
      type: string;
      year: string;
      description: string;
      tags: string[];
    }>;
  };
  lab: {
    kicker: string;
    title: string;
    body: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  stack: {
    kicker: string;
    title: string;
    body: string;
    groups: Array<{
      title: string;
      items: string[];
    }>;
    process: Array<{
      step: string;
      title: string;
      description: string;
    }>;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    name: string;
    email: string;
    project: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    close: string;
  };
  footer: {
    line: string;
    rights: string;
  };
};

export const copy: Record<Language, SiteCopy> = {
  en: {
    nav: {
      work: 'Work',
      lab: 'Lab',
      stack: 'Stack',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close'
    },
    loader: {
      label: 'Synch.dev',
      line: 'Composing tactile interfaces.'
    },
    hero: {
      role: 'Creative Frontend Developer / WebGL / Motion UI',
      title: 'Interfaces that feel alive.',
      body:
        'Synch.dev builds polished web experiences with 3D scenes, animation systems, and production-ready frontend architecture.',
      primary: 'View Work',
      secondary: 'Start Project',
      proof: ['3D scenes', 'Motion systems', 'RU / EN', 'Performance']
    },
    work: {
      kicker: 'Selected Work',
      title: 'Digital objects with a shipped-product spine.',
      body:
        'Each project is framed as a tactile artifact: clear problem, sharp interaction model, and an interface system built to survive production.',
      items: [
        {
          title: 'Orbit CRM',
          type: 'Product Interface',
          year: '2026',
          description: 'A calm sales workspace with animated pipeline states and dense data that still breathes.',
          tags: ['React', 'Motion', 'Design System']
        },
        {
          title: 'Luma Configurator',
          type: '3D Commerce',
          year: '2025',
          description: 'A WebGL product configurator with tactile material previews and mobile-first performance.',
          tags: ['Three.js', 'WebGL', 'UX']
        },
        {
          title: 'Pulse Atlas',
          type: 'Data Experience',
          year: '2025',
          description: 'A visual analytics surface where charts, maps, and interaction states move as one system.',
          tags: ['Data Viz', 'TypeScript', 'QA']
        },
        {
          title: 'Northline Studio',
          type: 'Brand Site',
          year: '2024',
          description: 'A premium studio portfolio with scroll-led storytelling and lightweight cinematic motion.',
          tags: ['Frontend', 'Animation', 'Performance']
        }
      ]
    },
    lab: {
      kicker: 'Interactive Lab',
      title: 'Small experiments, production instincts.',
      body:
        'A compact look at the systems behind the polish: particles, shader-like gradients, scroll choreography, and micro-interactions.',
      items: [
        {
          title: 'Particle Field',
          description: 'Soft points react to the hero object and keep the first viewport alive without stealing focus.'
        },
        {
          title: 'Shader Surface',
          description: 'Layered gradients, masks, and depth cues create WebGL flavor with restrained cost.'
        },
        {
          title: 'Scroll Motion',
          description: 'Sections reveal with measured timing, preserving readability and page rhythm.'
        },
        {
          title: 'Micro UI',
          description: 'Buttons, cards, toggles, and modals respond with small physical gestures.'
        }
      ]
    },
    stack: {
      kicker: 'Stack & Process',
      title: 'Visual craft backed by reliable frontend systems.',
      body:
        'The work combines creative direction with the quieter pieces that make an interface feel trustworthy: architecture, accessibility, performance, and QA.',
      groups: [
        { title: 'Interface', items: ['React', 'TypeScript', 'Vite', 'Design systems'] },
        { title: 'Motion', items: ['Three.js', 'WebGL', 'Canvas', 'CSS motion'] },
        { title: 'Quality', items: ['Responsive QA', 'Accessibility', 'Performance budgets', 'Build checks'] }
      ],
      process: [
        {
          step: '01',
          title: 'Shape the feeling',
          description: 'Define the visual direction, motion principles, and first-screen promise.'
        },
        {
          step: '02',
          title: 'Prototype the hard parts',
          description: 'Test 3D, scroll, and interaction risk before polishing the full page.'
        },
        {
          step: '03',
          title: 'Build the system',
          description: 'Turn the direction into reusable components, content, and responsive rules.'
        },
        {
          step: '04',
          title: 'Verify the experience',
          description: 'Check build output, real browser behavior, mobile layout, and canvas rendering.'
        }
      ],
      stats: [
        { value: '60fps', label: 'motion target' },
        { value: '2 langs', label: 'EN and RU' },
        { value: '4 cases', label: 'portfolio artifacts' }
      ]
    },
    contact: {
      kicker: 'Start a project',
      title: 'Tell me what you want to make feel alive.',
      body: 'Share a short brief and I will reply with the next practical step.',
      name: 'Name',
      email: 'Email',
      project: 'Project',
      submit: 'Send request',
      sending: 'Sending...',
      successTitle: 'Request received',
      successBody: 'Thanks. The form is stubbed for now, but the interaction path is ready for a real endpoint.',
      close: 'Close'
    },
    footer: {
      line: 'Creative frontend, 3D interfaces, and motion systems for ambitious web products.',
      rights: 'Synch.dev. All rights reserved.'
    }
  },
  ru: {
    nav: {
      work: 'Работы',
      lab: 'Лаборатория',
      stack: 'Стек',
      contact: 'Контакт',
      menu: 'Меню',
      close: 'Закрыть'
    },
    loader: {
      label: 'Synch.dev',
      line: 'Собираем тактильные интерфейсы.'
    },
    hero: {
      role: 'Creative Frontend Developer / WebGL / Motion UI',
      title: 'Интерфейсы, которые ощущаются живыми.',
      body:
        'Synch.dev создает выразительные веб-интерфейсы с 3D-сценами, анимационными системами и продакшн-архитектурой фронтенда.',
      primary: 'Смотреть работы',
      secondary: 'Обсудить проект',
      proof: ['3D-сцены', 'Motion-системы', 'RU / EN', 'Производительность']
    },
    work: {
      kicker: 'Избранные работы',
      title: 'Цифровые объекты с продакшн-основой.',
      body:
        'Каждый проект подан как тактильный артефакт: ясная задача, сильная интеракция и интерфейсная система, готовая к реальному запуску.',
      items: [
        {
          title: 'Orbit CRM',
          type: 'Product Interface',
          year: '2026',
          description: 'Спокойное рабочее пространство продаж с анимированными состояниями и плотными, но читаемыми данными.',
          tags: ['React', 'Motion', 'Design System']
        },
        {
          title: 'Luma Configurator',
          type: '3D Commerce',
          year: '2025',
          description: 'WebGL-конфигуратор продукта с тактильными материалами и производительностью для мобильных экранов.',
          tags: ['Three.js', 'WebGL', 'UX']
        },
        {
          title: 'Pulse Atlas',
          type: 'Data Experience',
          year: '2025',
          description: 'Визуальная аналитика, где графики, карты и состояния интерфейса двигаются как единая система.',
          tags: ['Data Viz', 'TypeScript', 'QA']
        },
        {
          title: 'Northline Studio',
          type: 'Brand Site',
          year: '2024',
          description: 'Премиальное портфолио студии со scroll-storytelling и легкой кинематографичной анимацией.',
          tags: ['Frontend', 'Animation', 'Performance']
        }
      ]
    },
    lab: {
      kicker: 'Интерактивная лаборатория',
      title: 'Небольшие эксперименты, продакшн-мышление.',
      body:
        'Компактный взгляд на системы за визуальным слоем: частицы, shader-like градиенты, scroll-хореография и микроинтеракции.',
      items: [
        {
          title: 'Particle Field',
          description: 'Мягкие точки реагируют на hero-объект и оживляют первый экран, не споря с текстом.'
        },
        {
          title: 'Shader Surface',
          description: 'Слои градиентов, масок и глубины дают WebGL-характер без лишней тяжести.'
        },
        {
          title: 'Scroll Motion',
          description: 'Секции раскрываются в спокойном ритме, сохраняя читаемость и структуру страницы.'
        },
        {
          title: 'Micro UI',
          description: 'Кнопки, карточки, переключатели и модалки отвечают маленькими физичными жестами.'
        }
      ]
    },
    stack: {
      kicker: 'Стек и процесс',
      title: 'Визуальная выразительность на надежной frontend-системе.',
      body:
        'Работа соединяет creative direction с тихими, но важными вещами: архитектурой, доступностью, производительностью и QA.',
      groups: [
        { title: 'Интерфейс', items: ['React', 'TypeScript', 'Vite', 'Design systems'] },
        { title: 'Motion', items: ['Three.js', 'WebGL', 'Canvas', 'CSS motion'] },
        { title: 'Качество', items: ['Responsive QA', 'Accessibility', 'Performance budgets', 'Build checks'] }
      ],
      process: [
        {
          step: '01',
          title: 'Найти ощущение',
          description: 'Зафиксировать визуальное направление, принципы motion и обещание первого экрана.'
        },
        {
          step: '02',
          title: 'Проверить сложное',
          description: 'Протестировать 3D, scroll и интеракции до полной полировки страницы.'
        },
        {
          step: '03',
          title: 'Собрать систему',
          description: 'Превратить направление в компоненты, контент и responsive-правила.'
        },
        {
          step: '04',
          title: 'Проверить опыт',
          description: 'Проверить сборку, браузер, мобильную верстку и отрисовку canvas.'
        }
      ],
      stats: [
        { value: '60fps', label: 'цель motion' },
        { value: '2 языка', label: 'EN и RU' },
        { value: '4 кейса', label: 'артефакты портфолио' }
      ]
    },
    contact: {
      kicker: 'Начать проект',
      title: 'Расскажите, что должно ощущаться живым.',
      body: 'Опишите задачу коротко, и я отвечу с ближайшим практическим шагом.',
      name: 'Имя',
      email: 'Email',
      project: 'Проект',
      submit: 'Отправить',
      sending: 'Отправка...',
      successTitle: 'Заявка получена',
      successBody: 'Спасибо. Форма пока работает как stub, но сценарий готов для подключения реального endpoint.',
      close: 'Закрыть'
    },
    footer: {
      line: 'Creative frontend, 3D-интерфейсы и motion-системы для амбициозных веб-продуктов.',
      rights: 'Synch.dev. Все права защищены.'
    }
  }
};
