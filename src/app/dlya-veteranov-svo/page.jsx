import GoodDeed from "@/components/VeteranPage/GoodDeal/GoodDeed";
import styles from "./page.module.scss";
import Hero from "@/components/VeteranPage/Hero/Hero";
import JoinTeam from "@/components/VeteranPage/JoinTeam/JoinTeam";
import Tasks from "@/components/VeteranPage/Tasks/Tasks";
import WeDo from "@/components/VeteranPage/WeDo/WeDo";
import Contacts from "@/components/Home/Contacts/Contacts";

const baseUrl = 'http://dom-142.ru';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'СТРОЙБАТ42 | Социальная программа Дом42 • Поддержка ветеранов СВО',
  description:
    'Системная помощь ветеранам СВО в Кузбассе: трудоустройство, обучение, жильё. 2% от стоимости каждого дома — в фонд помощи инвалидам боевых действий. Работа от 100 000 ₽/мес.',

  alternates: {
    canonical: `${baseUrl}stroybat`,
  },

  keywords: [
    'СТРОЙБАТ42',
    'помощь ветеранам СВО Кузбасс',
    'работа для ветеранов СВО',
    'социальная программа Дом42',
    'трудоустройство ветеранов Кемерово',
    'жильё для участников СВО',
    'бесплатное обучение строительству',
    'фонд помощи инвалидам боевых действий',
    'социальная адаптация ветеранов',
    'строительство для ветеранов',
    'вакансии для участников СВО',
    'добрые дела Кузбасс',
    'социально ответственная компания',
  ],

  openGraph: {
    title: 'СТРОЙБАТ42 | Дом42 — работа, жильё и поддержка ветеранов СВО',
    description:
      'Создаём рабочие места, обучаем, обеспечиваем жильём ветеранов СВО. 2% от каждого дома — на адресную помощь. Присоединяйтесь к доброму делу.',
    type: 'website',
    url: `${baseUrl}stroybat`,
    siteName: 'Дом42',
    images: [
      {
        url: `${baseUrl}/images/Hero/hero.jpg`, // Рекомендуется создать изображение с командой/ветеранами
        width: 1200,
        height: 630,
        alt: 'СТРОЙБАТ42 - Социальная программа поддержки ветеранов СВО от Дом42',
      },
    ],
    locale: 'ru_RU',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'СТРОЙБАТ42 | Работа и поддержка ветеранов СВО',
    description:
      'Обучение, работа от 100 000 ₽/мес, жильё со скидкой. 2% от дома — в фонд помощи. Кузбасс.',
    images: [`${baseUrl}/images/Hero/hero.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  verification: {
    // google: "ваш-google-verification-code",
    // yandex: "ваш-yandex-verification-code",
  },

  authors: [{ name: 'Дом42 — СТРОЙБАТ42' }],
  creator: 'СТРОЙБАТ42',
  publisher: 'Дом42',

  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
    url: false,
  },

  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',

  appleWebApp: {
    title: 'СТРОЙБАТ42',
    statusBarStyle: 'black-translucent',
  },

  manifest: '/manifest.json',

  other: {
    'og:article:section': 'Социальная ответственность',
    'business:cause': 'поддержка ветеранов СВО',
    'business:donation_percent': '2',
    'business:region': 'Кемеровская область',
    'job:salary_min': '100000',
    'job:salary_currency': 'RUB',
    'job:training_duration': '30-90 дней',
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <Tasks />
      <WeDo />
      <JoinTeam />
      <GoodDeed />
      <Contacts />
    </>
  );
}
