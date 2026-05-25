export type Lang = "ru" | "kk" | "en" | "tr" | "zh";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "ru", label: "Русский", short: "RU" },
  { code: "kk", label: "Қазақша", short: "KZ" },
  { code: "en", label: "English", short: "EN" },
  { code: "tr", label: "Türkçe", short: "TR" },
  { code: "zh", label: "中文", short: "ZH" },
];

type ProjectI18n = {
  tier: string;
  tagline: string;
  location: string;
  status: string;
  price: string;
  description: string[];
  specs: { label: string; value: string }[];
};

type Dict = {
  nav: { projects: string; philosophy: string; commercial: string; contact: string; phoneLabel: string };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    sub: string;
    stats: { k: string; v: string }[];
    side: string;
  };
  philosophy: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    body: string;
    pillars: { t: string; d: string }[];
    interiors: string;
    city: string;
  };
  projects: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    onMap: string;
    open: string;
    fromPrice: string;
  };
  commercial: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    body: string;
    stats: [string, string][];
  };
  contact: {
    eyebrow: string;
    title: string;
    callBtn: string;
    requestBtn: string;
    address: string;
  };
  footer: { rights: string; est: string };
  page: {
    crumbHome: string;
    crumbProjects: string;
    from: string;
    about: string;
    bookVisit: string;
    specsEyebrow: string;
    specsTitleA: string;
    specsTitleB: string;
    othersEyebrow: string;
    othersTitleA: string;
    othersTitleB: string;
    ctaEyebrow: string;
    ctaTitleA: string;
    ctaTitleB: string;
    photo: string;
    photoOf: (i: number, n: number) => string;
  };
  projectsData: Record<"fenomen" | "albion" | "legend" | "mirai", ProjectI18n>;
};

export const translations: Record<Lang, Dict> = {
  ru: {
    nav: { projects: "Проекты", philosophy: "Философия", commercial: "Коммерческая", contact: "Контакты", phoneLabel: "Единый номер" },
    hero: {
      eyebrow: "Девелопер · Алматы · с 2014",
      titleA: "Наследие",
      titleB: "будущего.",
      sub: "Устойчивые пространства для жизни, работы и развития — на пересечении природы, человека и технологии.",
      stats: [
        { k: "10", v: "лет на рынке" },
        { k: "12", v: "реализованных ЖК" },
        { k: "8 500+", v: "семей в домах BUTA" },
        { k: "Almaty", v: "столица проектов" },
      ],
      side: "Nature · Human · Technology",
    },
    philosophy: {
      eyebrow: "— Философия",
      titleA: "Дом — это не\u00a0стены.",
      titleB: "Это тишина после длинного дня.",
      body: "Каждый проект BUTA рождается из диалога с местом — рельефом, светом, ветром с гор Заилийского Алатау. Мы строим так, чтобы здание стало частью пейзажа, а не упрёком ему.",
      pillars: [
        { t: "Nature", d: "Уважение к ландшафту" },
        { t: "Human", d: "Масштаб человека" },
        { t: "Tech", d: "Инженерия завтра" },
      ],
      interiors: "BUTA Interiors",
      city: "Almaty, KZ",
    },
    projects: {
      eyebrow: "— Портфолио · 2026",
      titleA: "Жилые комплексы",
      titleB: "в Алматы.",
      onMap: "Смотреть на карте",
      open: "Открыть →",
      fromPrice: "от",
    },
    commercial: {
      eyebrow: "— Commercial",
      titleA: "Коммерческая",
      titleB: "недвижимость.",
      body: "Помещения на первых линиях наших жилых кварталов — для тех, кто строит сервис рядом с жителями: кофейни, студии, лавки добрых соседей. Готовые витрины, высокие потолки, отдельные входы.",
      stats: [
        ["120+", "помещений в продаже"],
        ["от 32 м²", "минимальная площадь"],
        ["1 линия", "пешеходного трафика"],
        ["Trade-in", "доступен"],
      ],
    },
    contact: {
      eyebrow: "— Поговорим",
      title: "Запишитесь на личный показ — мы покажем дом до того, как его покажет кто-то ещё.",
      callBtn: "Позвонить · 3888",
      requestBtn: "Заказать звонок",
      address: "Almaty · Республики 56 · ежедневно 10:00 — 20:00",
    },
    footer: { rights: "© 2026 BUTA Group. Все права защищены.", est: "est. 2014" },
    page: {
      crumbHome: "BUTA Group",
      crumbProjects: "Проекты",
      from: "от",
      about: "— О проекте",
      bookVisit: "Записаться на показ",
      specsEyebrow: "— Ключевые параметры",
      specsTitleA: "Технические",
      specsTitleB: "детали.",
      othersEyebrow: "— Другие проекты",
      othersTitleA: "Посмотрите ещё",
      othersTitleB: "три истории",
      ctaEyebrow: "— Поговорим",
      ctaTitleA: "Хотите увидеть",
      ctaTitleB: "вживую?",
      photo: "Фото",
      photoOf: (i, n) => `Фото ${i} из ${n}`,
    },
    projectsData: {
      fenomen: {
        tier: "Комфорт",
        tagline: "Кирпичная классика, переосмысленная для современного Алматы.",
        location: "Алматы, мкр. Нуркент, 9 к 12",
        status: "Сдача 3 очереди — II кв. 2026",
        price: "от 30,6 млн ₸",
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
      albion: {
        tier: "Комфорт",
        tagline: "Английский квартал у подножия Заилийского Алатау.",
        location: "Алматы, мкр. Кайрат, 377",
        status: "Сдача 1 очереди — II кв. 2026",
        price: "от 22,8 млн ₸",
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
      legend: {
        tier: "Комфорт",
        tagline: "Дом, в котором уже горит свет.",
        location: "Алматы, пр. Турара Рыскулова, 103/7",
        status: "Введён в эксплуатацию",
        price: "от 27 млн ₸",
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
      mirai: {
        tier: "Комфорт",
        tagline: "未来 — будущее. Японская сдержанность в Алматы.",
        location: "Алматы, Алатауская трасса, 30",
        status: "Сдача 1 очереди — II кв. 2026",
        price: "от 21,3 млн ₸",
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
    },
  },

  kk: {
    nav: { projects: "Жобалар", philosophy: "Философия", commercial: "Коммерциялық", contact: "Байланыс", phoneLabel: "Бірыңғай нөмір" },
    hero: {
      eyebrow: "Девелопер · Алматы · 2014-тен",
      titleA: "Болашақтың",
      titleB: "мұрасы.",
      sub: "Табиғат, адам және технология тоғысындағы өмір сүруге, жұмыс істеуге және дамуға арналған тұрақты кеңістіктер.",
      stats: [
        { k: "10", v: "нарықтағы жыл" },
        { k: "12", v: "іске асырылған ТК" },
        { k: "8 500+", v: "BUTA үйлеріндегі отбасылар" },
        { k: "Алматы", v: "жобалардың астанасы" },
      ],
      side: "Nature · Human · Technology",
    },
    philosophy: {
      eyebrow: "— Философия",
      titleA: "Үй — қабырға\u00a0емес.",
      titleB: "Ұзақ күннен кейінгі тыныштық.",
      body: "BUTA-ның әрбір жобасы орынмен — жер бедерімен, жарықпен, Іле Алатауының желімен сұхбаттан туады. Біз ғимарат пейзаждың кінәсі емес, бөлігі болатындай етіп саламыз.",
      pillars: [
        { t: "Nature", d: "Ландшафтқа құрмет" },
        { t: "Human", d: "Адам ауқымы" },
        { t: "Tech", d: "Ертеңгі инженерия" },
      ],
      interiors: "BUTA Interiors",
      city: "Алматы, ҚЗ",
    },
    projects: {
      eyebrow: "— Портфолио · 2026",
      titleA: "Тұрғын кешендері",
      titleB: "Алматыда.",
      onMap: "Картадан көру",
      open: "Ашу →",
      fromPrice: "бастап",
    },
    commercial: {
      eyebrow: "— Commercial",
      titleA: "Коммерциялық",
      titleB: "жылжымайтын мүлік.",
      body: "Тұрғын кварталдарымыздың бірінші қабатындағы үй-жайлар — тұрғындарға жақын сервис құратындарға арналған: кофеханалар, студиялар, жақсы көрші дүкендері. Дайын витриналар, биік төбелер, бөлек кірулер.",
      stats: [
        ["120+", "сатылымдағы үй-жай"],
        ["32 м²-ден", "ең аз ауданы"],
        ["1-ші желі", "жаяу жүргіншілер ағыны"],
        ["Trade-in", "қолжетімді"],
      ],
    },
    contact: {
      eyebrow: "— Сөйлесейік",
      title: "Жеке көрсетілімге жазылыңыз — біз үйді басқалар көрсетпей тұрып көрсетеміз.",
      callBtn: "Қоңырау · 3888",
      requestBtn: "Қоңырауға тапсырыс",
      address: "Алматы · Республики 56 · күн сайын 10:00 — 20:00",
    },
    footer: { rights: "© 2026 BUTA Group. Барлық құқықтар қорғалған.", est: "est. 2014" },
    page: {
      crumbHome: "BUTA Group",
      crumbProjects: "Жобалар",
      from: "бастап",
      about: "— Жоба туралы",
      bookVisit: "Көрсетілімге жазылу",
      specsEyebrow: "— Негізгі параметрлер",
      specsTitleA: "Техникалық",
      specsTitleB: "сипаттамалар.",
      othersEyebrow: "— Басқа жобалар",
      othersTitleA: "Тағы көріңіз",
      othersTitleB: "үш әңгіме",
      ctaEyebrow: "— Сөйлесейік",
      ctaTitleA: "Көргіңіз келе ме",
      ctaTitleB: "тікелей?",
      photo: "Фото",
      photoOf: (i, n) => `${n}-нің ${i}-фотосы`,
    },
    projectsData: {
      fenomen: {
        tier: "Комфорт",
        tagline: "Заманауи Алматыға қайта ойластырылған кірпіш классикасы.",
        location: "Алматы, Нұркент ы/а, 9 к 12",
        status: "3-кезек тапсыру — 2026 ж. II тоқсан",
        price: "30,6 млн ₸ бастап",
        description: [
          "BUTA Fenomen — ескі Нұркент ы/а орнында өскен тоғыз кірпіш корпусы. Архитектурасы ленинградтық модернизмге сілтейді: рельефті қалау, биік терезелер, лоджиялар ырғағы.",
          "Ішінде — көліксіз жабық аула, ересек ағаштары бар ландшафтық парк, авторлық балалар алаңы және өзен бойымен жаяу жүру жолы.",
        ],
        specs: [
          { label: "Қабат саны", value: "9 қабат" },
          { label: "Кезектер", value: "3 кезек" },
          { label: "Пәтер ауданы", value: "38-ден 142 м²-ге дейін" },
          { label: "Төбе биіктігі", value: "2.95 м" },
          { label: "Паркинг", value: "Жерасты, 1.2 м/с" },
          { label: "Әрлеу", value: "White Box" },
          { label: "Лифттер", value: "Otis, үнсіз" },
          { label: "Қауіпсіздік", value: "Жабық аула, бейнебақылау" },
        ],
      },
      albion: {
        tier: "Комфорт",
        tagline: "Іле Алатауының бөктеріндегі ағылшын кварталы.",
        location: "Алматы, Қайрат ы/а, 377",
        status: "1-кезек тапсыру — 2026 ж. II тоқсан",
        price: "22,8 млн ₸ бастап",
        description: [
          "BUTA Albion лондондық townhouse-кварталдарынан шабыт алған. Қою кірпіш, латунь бөлшектері, тауларға панорамалық эркерлер.",
          "Аз қабаттылық жекелікті сақтайды: әр корпуста небәрі 5 қабат, әр кіреберісте екі лифт, тәулік бойы консьерж-сервисі бар лобби.",
        ],
        specs: [
          { label: "Қабат саны", value: "5 қабат" },
          { label: "Үйдегі пәтер", value: "60-қа дейін" },
          { label: "Пәтер ауданы", value: "32-ден 168 м²-ге дейін" },
          { label: "Төбе биіктігі", value: "3.10 м" },
          { label: "Паркинг", value: "Екі деңгейлі жерасты" },
          { label: "Әрлеу", value: "White Box / Кілт астына" },
          { label: "Сервис", value: "Консьерж 24/7" },
          { label: "Аула", value: "Көліксіз, MAP Studio ландшафты" },
        ],
      },
      legend: {
        tier: "Комфорт",
        tagline: "Шамы жанып тұрған үй.",
        location: "Алматы, Тұрар Рысқұлов д., 103/7",
        status: "Пайдалануға берілді",
        price: "27 млн ₸ бастап",
        description: [
          "BUTA Legend — топтың алғашқы белгілі жобасы. Ол тапсырылып, қоныстанып, уақыт сынынан өтті: бүгінгі фасадтар, инженерия және аула ашылған күнгідей көрінеді.",
          "Пәтерлерді BUTA сату бөлімі арқылы екінші нарықтан алуға болады — заңдық тазалық кепілдігі және фирмалық сервиспен.",
        ],
        specs: [
          { label: "Мәртебесі", value: "Тапсырылған, қоныстанған" },
          { label: "Қабат саны", value: "8 қабат" },
          { label: "Пәтер ауданы", value: "45-тен 156 м²-ге дейін" },
          { label: "Төбе биіктігі", value: "3.00 м" },
          { label: "Паркинг", value: "Жерасты + қонақ" },
          { label: "Әрлеу", value: "Дайын жөндеулер" },
          { label: "Инфрақұрылым", value: "Мектеп пен бақша жанында" },
          { label: "Аула", value: "Жабық, ландшафтық" },
        ],
      },
      mirai: {
        tier: "Комфорт",
        tagline: "未来 — болашақ. Алматыдағы жапондық ұстамдылық.",
        location: "Алматы, Алатау тас жолы, 30",
        status: "1-кезек тапсыру — 2026 ж. II тоқсан",
        price: "21,3 млн ₸ бастап",
        description: [
          "BUTA Mirai — жапон архитектурасымен диалог. Фасадтардағы ағаш ламельдер, кіреберістегі дзен-бақ, табиғи жарық пен материалдарға басымдық.",
          "Жоспарлаулар заманауи ырғаққа сай: ас үй-қонақ бөлмелер, кіреберістегі гардеробтар, қонақ санторапкаптары және пәтердің тереңіндегі тыныш жатын бөлмелер.",
        ],
        specs: [
          { label: "Қабат саны", value: "6 қабат" },
          { label: "Кезектер", value: "2 кезек" },
          { label: "Пәтер ауданы", value: "35-тен 124 м²-ге дейін" },
          { label: "Төбе биіктігі", value: "3.00 м" },
          { label: "Паркинг", value: "Жерасты, жылы" },
          { label: "Әрлеу", value: "White Box" },
          { label: "Аула", value: "Жапон бағы, шортан бассейні" },
          { label: "Энергия", value: "Жылу сорғылары, рекуперация" },
        ],
      },
    },
  },

  en: {
    nav: { projects: "Projects", philosophy: "Philosophy", commercial: "Commercial", contact: "Contact", phoneLabel: "Single number" },
    hero: {
      eyebrow: "Developer · Almaty · since 2014",
      titleA: "Legacy of",
      titleB: "the future.",
      sub: "Sustainable spaces for living, working and growing — at the intersection of nature, people and technology.",
      stats: [
        { k: "10", v: "years on the market" },
        { k: "12", v: "completed projects" },
        { k: "8,500+", v: "families in BUTA homes" },
        { k: "Almaty", v: "capital of our work" },
      ],
      side: "Nature · Human · Technology",
    },
    philosophy: {
      eyebrow: "— Philosophy",
      titleA: "A home isn't just\u00a0walls.",
      titleB: "It's the quiet after a long day.",
      body: "Every BUTA project begins as a dialogue with its place — the terrain, the light, the wind from the Trans-Ili Alatau. We build so the architecture becomes part of the landscape, not a reproach to it.",
      pillars: [
        { t: "Nature", d: "Respect for landscape" },
        { t: "Human", d: "Human scale" },
        { t: "Tech", d: "Engineering of tomorrow" },
      ],
      interiors: "BUTA Interiors",
      city: "Almaty, KZ",
    },
    projects: {
      eyebrow: "— Portfolio · 2026",
      titleA: "Residential complexes",
      titleB: "in Almaty.",
      onMap: "See on map",
      open: "Open →",
      fromPrice: "from",
    },
    commercial: {
      eyebrow: "— Commercial",
      titleA: "Commercial",
      titleB: "real estate.",
      body: "Ground-floor units in our residential quarters — for those building services next to residents: cafés, studios, neighbourhood shops. Ready storefronts, high ceilings, separate entrances.",
      stats: [
        ["120+", "units for sale"],
        ["from 32 m²", "minimum area"],
        ["1st line", "of foot traffic"],
        ["Trade-in", "available"],
      ],
    },
    contact: {
      eyebrow: "— Let's talk",
      title: "Book a private tour — we'll show you the home before anyone else does.",
      callBtn: "Call · 3888",
      requestBtn: "Request a callback",
      address: "Almaty · Respubliki 56 · daily 10:00 — 20:00",
    },
    footer: { rights: "© 2026 BUTA Group. All rights reserved.", est: "est. 2014" },
    page: {
      crumbHome: "BUTA Group",
      crumbProjects: "Projects",
      from: "from",
      about: "— About",
      bookVisit: "Book a viewing",
      specsEyebrow: "— Key parameters",
      specsTitleA: "Technical",
      specsTitleB: "details.",
      othersEyebrow: "— Other projects",
      othersTitleA: "Explore",
      othersTitleB: "three more stories",
      ctaEyebrow: "— Let's talk",
      ctaTitleA: "Want to see",
      ctaTitleB: "in person?",
      photo: "Photo",
      photoOf: (i, n) => `Photo ${i} of ${n}`,
    },
    projectsData: {
      fenomen: {
        tier: "Comfort",
        tagline: "Brick classics reimagined for modern Almaty.",
        location: "Almaty, Nurkent district, 9/12",
        status: "Phase 3 delivery — Q2 2026",
        price: "from 30.6M ₸",
        description: [
          "BUTA Fenomen is nine brick buildings rising on the site of the old Nurkent district. The architecture nods to Leningrad modernism: textured brickwork, tall windows, the rhythm of loggias.",
          "Inside: a car-free courtyard, a landscaped park with mature trees, a custom playground and a pedestrian promenade along the stream.",
        ],
        specs: [
          { label: "Floors", value: "9 floors" },
          { label: "Phases", value: "3 phases" },
          { label: "Apartments", value: "from 38 to 142 m²" },
          { label: "Ceiling height", value: "2.95 m" },
          { label: "Parking", value: "Underground, 1.2 m/s" },
          { label: "Finishing", value: "White Box" },
          { label: "Elevators", value: "Otis, silent" },
          { label: "Security", value: "Gated yard, CCTV" },
        ],
      },
      albion: {
        tier: "Comfort",
        tagline: "An English quarter at the foot of the Trans-Ili Alatau.",
        location: "Almaty, Kairat district, 377",
        status: "Phase 1 delivery — Q2 2026",
        price: "from 22.8M ₸",
        description: [
          "BUTA Albion takes its cue from London townhouse blocks. Dark brick, brass detailing, bay windows with panoramic mountain views.",
          "Low-rise scale preserves privacy: just 5 floors per building, two lifts per entrance, lobby with 24/7 concierge.",
        ],
        specs: [
          { label: "Floors", value: "5 floors" },
          { label: "Units per building", value: "up to 60" },
          { label: "Apartments", value: "from 32 to 168 m²" },
          { label: "Ceiling height", value: "3.10 m" },
          { label: "Parking", value: "Two-level underground" },
          { label: "Finishing", value: "White Box / Turnkey" },
          { label: "Service", value: "Concierge 24/7" },
          { label: "Courtyard", value: "Car-free, MAP Studio landscaping" },
        ],
      },
      legend: {
        tier: "Comfort",
        tagline: "A home where the lights are already on.",
        location: "Almaty, Turar Ryskulov ave., 103/7",
        status: "Completed and occupied",
        price: "from 27M ₸",
        description: [
          "BUTA Legend was the group's first landmark project. Delivered, populated and proven by time: façades, engineering and courtyard look just like on opening day.",
          "Apartments are available on the secondary market through BUTA sales — with guaranteed legal cleanliness and the same signature service.",
        ],
        specs: [
          { label: "Status", value: "Completed, occupied" },
          { label: "Floors", value: "8 floors" },
          { label: "Apartments", value: "from 45 to 156 m²" },
          { label: "Ceiling height", value: "3.00 m" },
          { label: "Parking", value: "Underground + guest" },
          { label: "Finishing", value: "Move-in ready" },
          { label: "Infrastructure", value: "School and kindergarten nearby" },
          { label: "Courtyard", value: "Gated, landscaped" },
        ],
      },
      mirai: {
        tier: "Comfort",
        tagline: "未来 — the future. Japanese restraint in Almaty.",
        location: "Almaty, Alatau highway, 30",
        status: "Phase 1 delivery — Q2 2026",
        price: "from 21.3M ₸",
        description: [
          "BUTA Mirai is a dialogue with Japanese architecture. Wooden slats on the façades, a zen garden at the entrance, an emphasis on natural light and natural materials.",
          "Floor plans suit a modern rhythm: kitchen-living rooms, wardrobes by the entry, guest baths and quiet bedrooms deep in the apartment.",
        ],
        specs: [
          { label: "Floors", value: "6 floors" },
          { label: "Phases", value: "2 phases" },
          { label: "Apartments", value: "from 35 to 124 m²" },
          { label: "Ceiling height", value: "3.00 m" },
          { label: "Parking", value: "Underground, heated" },
          { label: "Finishing", value: "White Box" },
          { label: "Courtyard", value: "Japanese garden, koi pond" },
          { label: "Energy", value: "Heat pumps, recuperation" },
        ],
      },
    },
  },

  tr: {
    nav: { projects: "Projeler", philosophy: "Felsefe", commercial: "Ticari", contact: "İletişim", phoneLabel: "Tek numara" },
    hero: {
      eyebrow: "Geliştirici · Almatı · 2014'ten beri",
      titleA: "Geleceğin",
      titleB: "mirası.",
      sub: "Doğa, insan ve teknolojinin kesişiminde yaşamak, çalışmak ve gelişmek için sürdürülebilir alanlar.",
      stats: [
        { k: "10", v: "yıllık deneyim" },
        { k: "12", v: "tamamlanan proje" },
        { k: "8.500+", v: "BUTA evinde aile" },
        { k: "Almatı", v: "projelerin başkenti" },
      ],
      side: "Nature · Human · Technology",
    },
    philosophy: {
      eyebrow: "— Felsefe",
      titleA: "Ev sadece\u00a0duvar değildir.",
      titleB: "Uzun bir günün ardından gelen sessizliktir.",
      body: "Her BUTA projesi yerin kendisiyle — topografya, ışık, Trans-İli Alatau dağlarından esen rüzgârla — bir diyalog olarak doğar. Bina manzaranın bir parçası olsun, ona sitem etmesin diye inşa ediyoruz.",
      pillars: [
        { t: "Nature", d: "Peyzaja saygı" },
        { t: "Human", d: "İnsan ölçeği" },
        { t: "Tech", d: "Yarının mühendisliği" },
      ],
      interiors: "BUTA Interiors",
      city: "Almatı, KZ",
    },
    projects: {
      eyebrow: "— Portföy · 2026",
      titleA: "Konut kompleksleri",
      titleB: "Almatı'da.",
      onMap: "Haritada gör",
      open: "Aç →",
      fromPrice: "den",
    },
    commercial: {
      eyebrow: "— Commercial",
      titleA: "Ticari",
      titleB: "gayrimenkul.",
      body: "Konut bloklarımızın zemin katlarındaki dükkânlar — sakinlerin yanında hizmet kuranlar için: kafeler, stüdyolar, mahalle dükkânları. Hazır vitrinler, yüksek tavanlar, ayrı girişler.",
      stats: [
        ["120+", "satılık birim"],
        ["32 m²'den", "asgari alan"],
        ["1. hat", "yaya trafiği"],
        ["Trade-in", "mevcut"],
      ],
    },
    contact: {
      eyebrow: "— Konuşalım",
      title: "Özel bir tura kaydolun — evi başkası göstermeden önce size gösterelim.",
      callBtn: "Ara · 3888",
      requestBtn: "Geri arama iste",
      address: "Almatı · Respubliki 56 · her gün 10:00 — 20:00",
    },
    footer: { rights: "© 2026 BUTA Group. Tüm hakları saklıdır.", est: "est. 2014" },
    page: {
      crumbHome: "BUTA Group",
      crumbProjects: "Projeler",
      from: "den",
      about: "— Proje hakkında",
      bookVisit: "Görüşme planla",
      specsEyebrow: "— Temel parametreler",
      specsTitleA: "Teknik",
      specsTitleB: "detaylar.",
      othersEyebrow: "— Diğer projeler",
      othersTitleA: "Bir de",
      othersTitleB: "üç hikâyeye bakın",
      ctaEyebrow: "— Konuşalım",
      ctaTitleA: "Görmek ister misiniz",
      ctaTitleB: "yerinde?",
      photo: "Fotoğraf",
      photoOf: (i, n) => `Fotoğraf ${i} / ${n}`,
    },
    projectsData: {
      fenomen: {
        tier: "Konfor",
        tagline: "Modern Almatı için yeniden yorumlanmış tuğla klasiği.",
        location: "Almatı, Nurkent mh., 9/12",
        status: "3. etap teslim — 2026 2. çeyrek",
        price: "30,6 mn ₸'den",
        description: [
          "BUTA Fenomen, eski Nurkent mahallesinin yerinde yükselen dokuz tuğla bloktur. Mimari Leningrad modernizmine selam veriyor: dokulu tuğla, yüksek pencereler, locaların ritmi.",
          "İçeride: araçsız kapalı avlu, yetişkin ağaçlı peyzajlı park, özel tasarım çocuk oyun alanı ve dere boyunca yaya yolu.",
        ],
        specs: [
          { label: "Kat sayısı", value: "9 kat" },
          { label: "Etaplar", value: "3 etap" },
          { label: "Daireler", value: "38'den 142 m²'ye" },
          { label: "Tavan yüksekliği", value: "2.95 m" },
          { label: "Otopark", value: "Yer altı, 1.2 m/s" },
          { label: "Teslim", value: "White Box" },
          { label: "Asansör", value: "Otis, sessiz" },
          { label: "Güvenlik", value: "Kapalı avlu, kamera" },
        ],
      },
      albion: {
        tier: "Konfor",
        tagline: "Trans-İli Alatau eteklerinde bir İngiliz mahallesi.",
        location: "Almatı, Kairat mh., 377",
        status: "1. etap teslim — 2026 2. çeyrek",
        price: "22,8 mn ₸'den",
        description: [
          "BUTA Albion, Londra townhouse mahallelerinden ilham alıyor. Koyu tuğla, pirinç detaylar, dağ manzaralı cumbalar.",
          "Az katlı yapı mahremiyeti korur: her blokta sadece 5 kat, her girişte iki asansör, 24/7 konsiyerjli lobi.",
        ],
        specs: [
          { label: "Kat sayısı", value: "5 kat" },
          { label: "Blok başına daire", value: "60'a kadar" },
          { label: "Daireler", value: "32'den 168 m²'ye" },
          { label: "Tavan yüksekliği", value: "3.10 m" },
          { label: "Otopark", value: "İki seviyeli yer altı" },
          { label: "Teslim", value: "White Box / Anahtar teslim" },
          { label: "Servis", value: "Konsiyerj 7/24" },
          { label: "Avlu", value: "Araçsız, MAP Studio peyzajı" },
        ],
      },
      legend: {
        tier: "Konfor",
        tagline: "Işıkları çoktan yanan bir ev.",
        location: "Almatı, Turar Ryskulov bulv., 103/7",
        status: "Hizmete açıldı",
        price: "27 mn ₸'den",
        description: [
          "BUTA Legend, grubun ilk önemli projesi. Teslim edildi, yerleşildi ve zamanla sınandı: cepheler, mühendislik ve avlu bugün hâlâ açılış günündeki gibi görünüyor.",
          "Daireler BUTA satış departmanı aracılığıyla ikinci el piyasada mevcut — hukuki temizlik garantisi ve markaya özgü hizmet ile.",
        ],
        specs: [
          { label: "Durum", value: "Teslim, oturuluyor" },
          { label: "Kat sayısı", value: "8 kat" },
          { label: "Daireler", value: "45'ten 156 m²'ye" },
          { label: "Tavan yüksekliği", value: "3.00 m" },
          { label: "Otopark", value: "Yer altı + misafir" },
          { label: "Teslim", value: "Hazır iç mekân" },
          { label: "Altyapı", value: "Okul ve kreş yakın" },
          { label: "Avlu", value: "Kapalı, peyzajlı" },
        ],
      },
      mirai: {
        tier: "Konfor",
        tagline: "未来 — gelecek. Almatı'da Japon sadeliği.",
        location: "Almatı, Alatau otoyolu, 30",
        status: "1. etap teslim — 2026 2. çeyrek",
        price: "21,3 mn ₸'den",
        description: [
          "BUTA Mirai, Japon mimarisiyle bir diyalog. Cephelerde ahşap lameller, girişte zen bahçesi, doğal ışık ve doğal malzemelere vurgu.",
          "Planlar modern ritme uygun: mutfak-oturma odası, girişte gardırop, misafir banyoları ve dairenin derinliğinde sessiz yatak odaları.",
        ],
        specs: [
          { label: "Kat sayısı", value: "6 kat" },
          { label: "Etaplar", value: "2 etap" },
          { label: "Daireler", value: "35'ten 124 m²'ye" },
          { label: "Tavan yüksekliği", value: "3.00 m" },
          { label: "Otopark", value: "Yer altı, ısıtmalı" },
          { label: "Teslim", value: "White Box" },
          { label: "Avlu", value: "Japon bahçesi, koi havuzu" },
          { label: "Enerji", value: "Isı pompası, ısı geri kazanım" },
        ],
      },
    },
  },

  zh: {
    nav: { projects: "项目", philosophy: "理念", commercial: "商业", contact: "联系", phoneLabel: "统一热线" },
    hero: {
      eyebrow: "开发商 · 阿拉木图 · 自 2014",
      titleA: "未来的",
      titleB: "传承。",
      sub: "在自然、人与科技的交汇处,打造可持续的生活、工作与成长空间。",
      stats: [
        { k: "10", v: "年市场经验" },
        { k: "12", v: "已交付项目" },
        { k: "8,500+", v: "BUTA 家庭" },
        { k: "阿拉木图", v: "项目之都" },
      ],
      side: "Nature · Human · Technology",
    },
    philosophy: {
      eyebrow: "— 理念",
      titleA: "家不只是\u00a0墙。",
      titleB: "它是漫长一天后的宁静。",
      body: "每一个 BUTA 项目都源于与场地的对话——地形、光线和外伊犁阿拉套山的风。我们希望建筑成为景观的一部分,而不是对景观的打扰。",
      pillars: [
        { t: "Nature", d: "尊重景观" },
        { t: "Human", d: "人的尺度" },
        { t: "Tech", d: "明日工程" },
      ],
      interiors: "BUTA Interiors",
      city: "阿拉木图,KZ",
    },
    projects: {
      eyebrow: "— 作品集 · 2026",
      titleA: "住宅综合体",
      titleB: "于阿拉木图。",
      onMap: "在地图查看",
      open: "打开 →",
      fromPrice: "起",
    },
    commercial: {
      eyebrow: "— Commercial",
      titleA: "商业",
      titleB: "地产。",
      body: "我们住宅街区的临街铺位——为愿意贴近居民提供服务的人准备:咖啡馆、工作室、邻里小店。即装橱窗、高净空、独立入口。",
      stats: [
        ["120+", "在售铺位"],
        ["32 m² 起", "最小面积"],
        ["一线", "步行客流"],
        ["Trade-in", "可置换"],
      ],
    },
    contact: {
      eyebrow: "— 聊一聊",
      title: "预约私人看房——在别人之前,先带您走进未来的家。",
      callBtn: "致电 · 3888",
      requestBtn: "申请回电",
      address: "阿拉木图 · Respubliki 56 · 每日 10:00 — 20:00",
    },
    footer: { rights: "© 2026 BUTA Group. 保留所有权利。", est: "est. 2014" },
    page: {
      crumbHome: "BUTA Group",
      crumbProjects: "项目",
      from: "起",
      about: "— 项目介绍",
      bookVisit: "预约看房",
      specsEyebrow: "— 核心参数",
      specsTitleA: "技术",
      specsTitleB: "细节。",
      othersEyebrow: "— 其他项目",
      othersTitleA: "再看",
      othersTitleB: "三段故事",
      ctaEyebrow: "— 聊一聊",
      ctaTitleA: "想亲自看看",
      ctaTitleB: "吗?",
      photo: "照片",
      photoOf: (i, n) => `第 ${i} / ${n} 张`,
    },
    projectsData: {
      fenomen: {
        tier: "舒适",
        tagline: "为现代阿拉木图重新诠释的砖砌经典。",
        location: "阿拉木图,努尔肯特小区 9/12",
        status: "三期交付 — 2026 年第二季度",
        price: "3060 万 ₸ 起",
        description: [
          "BUTA Fenomen 是建于原努尔肯特小区之上的九栋砖楼。建筑致敬列宁格勒现代主义:浮雕砌砖、高大窗户、阳台节奏。",
          "内部:无车封闭庭院、栽有成年乔木的园林公园、定制儿童游乐场以及沿溪步行长廊。",
        ],
        specs: [
          { label: "层数", value: "9 层" },
          { label: "期数", value: "3 期" },
          { label: "户型面积", value: "38 — 142 m²" },
          { label: "层高", value: "2.95 m" },
          { label: "车位", value: "地下,1.2 m/s" },
          { label: "交付标准", value: "White Box" },
          { label: "电梯", value: "Otis,静音" },
          { label: "安防", value: "封闭庭院,监控" },
        ],
      },
      albion: {
        tier: "舒适",
        tagline: "外伊犁阿拉套山脚下的英伦街区。",
        location: "阿拉木图,凯拉特小区 377",
        status: "一期交付 — 2026 年第二季度",
        price: "2280 万 ₸ 起",
        description: [
          "BUTA Albion 灵感来自伦敦联排街区。深色砖、黄铜细节、可俯瞰群山的飘窗。",
          "低层布局保护私密:每栋仅 5 层,每个单元两部电梯,大堂 24/7 礼宾服务。",
        ],
        specs: [
          { label: "层数", value: "5 层" },
          { label: "每栋户数", value: "最多 60" },
          { label: "户型面积", value: "32 — 168 m²" },
          { label: "层高", value: "3.10 m" },
          { label: "车位", value: "双层地下" },
          { label: "交付标准", value: "White Box / 拎包入住" },
          { label: "服务", value: "礼宾 24/7" },
          { label: "庭院", value: "无车,MAP Studio 景观" },
        ],
      },
      legend: {
        tier: "舒适",
        tagline: "灯火已亮的家。",
        location: "阿拉木图,图拉尔·雷斯库洛夫大街 103/7",
        status: "已交付入住",
        price: "2700 万 ₸ 起",
        description: [
          "BUTA Legend 是集团首个标志项目。已交付、已入住、经时间检验:今日的立面、机电与庭院与开盘当日如出一辙。",
          "可通过 BUTA 销售部在二手市场购入——产权清晰,沿用品牌服务。",
        ],
        specs: [
          { label: "状态", value: "已交付入住" },
          { label: "层数", value: "8 层" },
          { label: "户型面积", value: "45 — 156 m²" },
          { label: "层高", value: "3.00 m" },
          { label: "车位", value: "地下 + 访客" },
          { label: "交付标准", value: "精装即入" },
          { label: "配套", value: "毗邻学校与幼儿园" },
          { label: "庭院", value: "封闭式景观" },
        ],
      },
      mirai: {
        tier: "舒适",
        tagline: "未来。阿拉木图中的日式克制。",
        location: "阿拉木图,阿拉套公路 30",
        status: "一期交付 — 2026 年第二季度",
        price: "2130 万 ₸ 起",
        description: [
          "BUTA Mirai 与日本建筑对话。立面木格栅、入口禅意庭院,强调自然光与天然材料。",
          "户型契合当代节奏:厨客一体、入口衣帽间、客用卫浴,以及位于户内深处的安静卧室。",
        ],
        specs: [
          { label: "层数", value: "6 层" },
          { label: "期数", value: "2 期" },
          { label: "户型面积", value: "35 — 124 m²" },
          { label: "层高", value: "3.00 m" },
          { label: "车位", value: "地下,带保温" },
          { label: "交付标准", value: "White Box" },
          { label: "庭院", value: "日式庭院,锦鲤池" },
          { label: "能源", value: "热泵,热回收" },
        ],
      },
    },
  },
};