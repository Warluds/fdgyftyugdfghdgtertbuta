import fenomenImg from "@/assets/project-fenomen.jpg";
import fenomen2 from "@/assets/fenomen-2.jpg";
import fenomen3 from "@/assets/fenomen-3.jpg";
import albionImg from "@/assets/project-albion.jpg";
import albion2 from "@/assets/albion-2.jpg";
import albion3 from "@/assets/albion-3.jpg";
import legendImg from "@/assets/project-legend.jpg";
import legend2 from "@/assets/legend-2.jpg";
import legend3 from "@/assets/legend-3.jpg";
import miraiImg from "@/assets/project-mirai.jpg";
import mirai2 from "@/assets/mirai-2.jpg";
import mirai3 from "@/assets/mirai-3.jpg";

export type ProjectSpec = { label: string; value: string };

export type Project = {
  slug: "fenomen" | "albion" | "legend" | "mirai";
  id: string;
  name: string;
  tier: string;
  tagline: string;
  price: string;
  location: string;
  status: string;
  cover: string;
  gallery: string[];
  description: string[];
  specs: ProjectSpec[];
};

export const projects: Project[] = [
  {
    slug: "fenomen",
    id: "01",
    name: "Fenomen",
    tier: "Комфорт",
    tagline: "Кирпичная классика, переосмысленная для современного Алматы.",
    price: "от 30,6 млн ₸",
    location: "Алматы, мкр. Нуркент, 9 к 12",
    status: "Сдача 3 очереди — II кв. 2026",
    cover: fenomenImg,
    gallery: [fenomenImg, fenomen2, fenomen3],
    description: [
      "BUTA Fenomen — это девять кирпичных корпусов, выросших на месте старого микрорайона Нуркент. Архитектура отсылает к ленинградскому модернизму: рельефная кладка, высокие окна, ритм лоджий.",
      "Внутри — закрытый двор без машин, ландшафтный парк с деревьями взрослого возраста, авторская детская площадка и пешеходный променад вдоль ручья.",
    ],
    specs: [
      { label: "Этажность", value: "9 этажей" },
      { label: "Очередей", value: "3 очереди" },
      { label: "Площадь квартир", value: "от 38 до 142 м²" },
      { label: "Высота потолков", value: "2.95 м" },
      { label: "Паркинг", value: "Подземный, 1.2 м/с" },
      { label: "Отделка", value: "White Box" },
      { label: "Лифты", value: "Otis, бесшумные" },
      { label: "Безопасность", value: "Закрытый двор, видеонаблюдение" },
    ],
  },
  {
    slug: "albion",
    id: "02",
    name: "Albion",
    tier: "Комфорт",
    tagline: "Английский квартал у подножия Заилийского Алатау.",
    price: "от 22,8 млн ₸",
    location: "Алматы, мкр. Кайрат, 377",
    status: "Сдача 1 очереди — II кв. 2026",
    cover: albionImg,
    gallery: [albionImg, albion2, albion3],
    description: [
      "BUTA Albion вдохновлён лондонскими townhouse-кварталами. Тёмный кирпич, латунные детали, эркеры с панорамным видом на горы.",
      "Малоэтажность сохраняет приватность: всего 5 этажей в каждом корпусе, два лифта на подъезд, лобби с консьерж-сервисом 24/7.",
    ],
    specs: [
      { label: "Этажность", value: "5 этажей" },
      { label: "Квартир в доме", value: "до 60" },
      { label: "Площадь квартир", value: "от 32 до 168 м²" },
      { label: "Высота потолков", value: "3.10 м" },
      { label: "Паркинг", value: "Двухуровневый подземный" },
      { label: "Отделка", value: "White Box / Под ключ" },
      { label: "Сервис", value: "Консьерж 24/7" },
      { label: "Двор", value: "Без машин, ландшафт от MAP Studio" },
    ],
  },
  {
    slug: "legend",
    id: "03",
    name: "Legend",
    tier: "Комфорт",
    tagline: "Дом, в котором уже горит свет.",
    price: "от 27 млн ₸",
    location: "Алматы, пр. Турара Рыскулова, 103/7",
    status: "Введён в эксплуатацию",
    cover: legendImg,
    gallery: [legendImg, legend2, legend3],
    description: [
      "BUTA Legend — первый знаковый проект группы. Он сдан, заселён и проверен временем: фасады, инженерия и двор сегодня выглядят так же, как в день открытия.",
      "Квартиры доступны на вторичном рынке через отдел продаж BUTA — с гарантией юридической чистоты и сохранением фирменного сервиса.",
    ],
    specs: [
      { label: "Статус", value: "Сдан и заселён" },
      { label: "Этажность", value: "8 этажей" },
      { label: "Площадь квартир", value: "от 45 до 156 м²" },
      { label: "Высота потолков", value: "3.00 м" },
      { label: "Паркинг", value: "Подземный + гостевой" },
      { label: "Отделка", value: "Готовые ремонты" },
      { label: "Инфраструктура", value: "Школа и сад рядом" },
      { label: "Двор", value: "Закрытый, ландшафтный" },
    ],
  },
  {
    slug: "mirai",
    id: "04",
    name: "Mirai",
    tier: "Комфорт",
    tagline: "未来 — будущее. Японская сдержанность в Алматы.",
    price: "от 21,3 млн ₸",
    location: "Алматы, Алатауская трасса, 30",
    status: "Сдача 1 очереди — II кв. 2026",
    cover: miraiImg,
    gallery: [miraiImg, mirai2, mirai3],
    description: [
      "BUTA Mirai — диалог с японской архитектурой. Деревянные ламели на фасадах, дзен-сад во входной группе, акцент на естественном свете и природных материалах.",
      "Планировки продуманы под современный ритм: кухни-гостиные, гардеробные у входа, гостевые санузлы и тихие спальни в глубине квартир.",
    ],
    specs: [
      { label: "Этажность", value: "6 этажей" },
      { label: "Очередей", value: "2 очереди" },
      { label: "Площадь квартир", value: "от 35 до 124 м²" },
      { label: "Высота потолков", value: "3.00 м" },
      { label: "Паркинг", value: "Подземный, тёплый" },
      { label: "Отделка", value: "White Box" },
      { label: "Двор", value: "Японский сад, бассейн карпов" },
      { label: "Энергия", value: "Тепловые насосы, рекуперация" },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);