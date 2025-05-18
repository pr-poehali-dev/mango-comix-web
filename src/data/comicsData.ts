import { ComicType } from "@/components/ComicCard";

export const comicsData: ComicType[] = [
  {
    id: "1",
    title: "Школьные истории",
    description:
      "Комедийная манга о повседневной жизни необычных учеников старшей школы Аомори. Дружба, первая любовь и много смешных ситуаций!",
    image:
      "https://images.unsplash.com/photo-1614544443394-216c187598d0?q=80&w=2574&auto=format&fit=crop",
    categories: ["Комедия", "Школа", "Романтика"],
  },
  {
    id: "2",
    title: "Путь героя",
    description:
      "Эпическое фэнтези о юноше, который обнаруживает в себе древнюю силу и отправляется в опасное путешествие, чтобы спасти свой мир от надвигающейся тьмы.",
    image:
      "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?q=80&w=2670&auto=format&fit=crop",
    categories: ["Приключения", "Экшен", "Фэнтези"],
  },
  {
    id: "3",
    title: "Тайны старого города",
    description:
      "Детективная история о загадочных событиях в небольшом приморском городке. Главной героине предстоит раскрыть серию странных происшествий и узнать тёмное прошлое своей семьи.",
    image:
      "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?q=80&w=2680&auto=format&fit=crop",
    categories: ["Детектив", "Мистика"],
  },
  {
    id: "4",
    title: "Сердце дракона",
    description:
      "Романтическая история о девушке, которая встречает загадочного юношу, скрывающего свою истинную сущность. Любовь, которая может изменить судьбы двух миров.",
    image:
      "https://images.unsplash.com/photo-1514329926535-7f6dbfbfb114?q=80&w=2680&auto=format&fit=crop",
    categories: ["Романтика", "Фэнтези"],
  },
  {
    id: "5",
    title: "Космические приключения",
    description:
      "Научно-фантастическая манга о команде исследователей космоса, которые сталкиваются с неизведанными формами жизни и опасными аномалиями во время своей миссии.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    categories: ["Приключения", "Научная фантастика", "Экшен"],
  },
  {
    id: "6",
    title: "Весенний вальс",
    description:
      "Трогательная история первой любви двух старшеклассников, чьи чувства расцветают вместе с весенней сакурой. Нежная и светлая манга о взрослении и искренних эмоциях.",
    image:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=2676&auto=format&fit=crop",
    categories: ["Романтика", "Школа", "Повседневность"],
  },
  {
    id: "7",
    title: "Боевой клуб",
    description:
      "Динамичная манга о подпольных боях без правил. Главный герой вынужден участвовать в турнире, чтобы спасти свою сестру, и сталкивается с опасными противниками.",
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2574&auto=format&fit=crop",
    categories: ["Экшен", "Боевые искусства", "Драма"],
  },
  {
    id: "8",
    title: "Улыбка судьбы",
    description:
      "Комедийная история с элементами фэнтези о девушке, которая получает способность видеть нити судьбы людей и пытается использовать этот дар, чтобы помочь окружающим.",
    image:
      "https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=2574&auto=format&fit=crop",
    categories: ["Комедия", "Фэнтези", "Повседневность"],
  },
];

export const getComicsByCategory = (category: string): ComicType[] => {
  return comicsData.filter((comic) => comic.categories.includes(category));
};

export const getAllCategories = (): string[] => {
  const categoriesSet = new Set<string>();

  comicsData.forEach((comic) => {
    comic.categories.forEach((category) => {
      categoriesSet.add(category);
    });
  });

  return Array.from(categoriesSet).sort();
};
