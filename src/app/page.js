import About from "@/components/Home/About/About";
import Contacts from "@/components/Home/Contacts/Contacts";
import Form from "@/components/Home/Form/Form";
import Hero from "@/components/Home/Hero/Hero";
import Numbers from "@/components/Home/Numbers/Numbers";
import Preview from "@/components/Home/Preview/Preview";
import Risks from "@/components/Home/Risks/Risks";
import Set from "@/components/Home/Set/Set";
import Stroybat from "@/components/Home/Stroybat/Stroybat";

const baseUrl = "http://dom-142.ru";

/** @type {import('next').Metadata} */
export const metadata = {
  title: "Дом42 | Строительство домов по технологии префаб-монолит в Кемерово",
  description:
    "Строительство энергоэффективных домов в Кузбассе по технологии префаб-монолит. 80 000 ₽/м², срок 80 дней, класс A+. Финальная цена без скрытых платежей. Гарантия 100+ лет.",

  // Каноническая ссылка
  alternates: {
    canonical: baseUrl,
  },

  keywords: [
    "строительство домов Кемерово",
    "префаб монолит",
    "дома заводской готовности",
    "энергоэффективные дома Кузбасс",
    "строительство ИЖС",
    "каркасно-монолитные дома",
    "дома под ключ Кемерово",
    "быстровозводимые дома",
    "технология префаб",
    "монолитное домостроение",
    "готовые дома Кузбасс",
    "энергосберегающие дома",
  ],

  openGraph: {
    title: "Дом42 | Строительство домов префаб-монолит в Кузбассе",
    description:
      "Новый стандарт ИЖС в Кузбассе. Дома за 80 дней по 80 000 ₽/м². Класс энергоэффективности A+. Финальная цена без скрытых платежей.",
    type: "website",
    url: baseUrl,
    siteName: "Дом42",
    images: [
      {
        url: `${baseUrl}/images/Hero/hero.jpg`, // Создайте изображение 1200x630px с домами
        width: 1200,
        height: 630,
        alt: "Дом42 - Строительство энергоэффективных домов по технологии префаб-монолит",
      },
    ],
    locale: "ru_RU",
  },

  twitter: {
    card: "summary_large_image",
    title: "Дом42 | Строительство домов префаб-монолит",
    description:
      "Дома за 80 дней по 80 000 ₽/м². Класс A+. Финальная цена без скрытых платежей",
    images: [`${baseUrl}/images/Hero/hero.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Верификация сайта
  verification: {
    // google: "ваш-google-verification-code",
    // yandex: "ваш-yandex-verification-code",
  },

  // Дополнительные метатеги
  authors: [{ name: "Дом42 - Строительство домов" }],
  creator: "Дом42",
  publisher: "Дом42",

  // Форматирование для мобильных
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
    url: false,
  },

  // Viewport настройки
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",

  // Apple specific
  appleWebApp: {
    title: "Дом42",
    statusBarStyle: "black-translucent",
  },

  // Manifest
  manifest: "/manifest.json",

  // Structured Data для строительной компании
  other: {
    "og:price:amount": "80000",
    "og:price:currency": "RUB",
    "business:region": "Кемеровская область",
    "business:city": "Кемерово",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Numbers />
      <Preview />
      <Risks />
      <Set />
      <Form />
      <About />

      <Stroybat />
      <Contacts />
    </>
  );
}
