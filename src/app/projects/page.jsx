import "./style.scss";
import CardProject from "@/components/CardProject/CardProject";
import projects from "@/app/projects/data/projects.json";
import Stroybat from "@/components/Home/Stroybat/Stroybat";
import Contacts from "@/components/Home/Contacts/Contacts";

const baseUrl = 'http://dom-142.ru';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Дом42 | Проекты домов префаб-монолит в Кемерово • от 6.8 млн ₽',
  description:
    'Готовые проекты домов: Ноктюрн 90 (90 м²), Ноктюрн 110 (110 м²), Баллада 130 (130 м²). Строительство за 80 дней по 80 000 ₽/м². Социальная компания: поддерживаем ветеранов СВО. Кемерово, Кузбасс.',

  alternates: {
    canonical: baseUrl,
  },

  keywords: [
    'проекты домов Кемерово',
    'Ноктюрн 110',
    'Ноктюрн 90',
    'Баллада 130',
    'дома префаб-монолит',
    'купить дом Кузбасс',
    'дома от 6.8 млн рублей',
    'строительство для ветеранов',
    'СТРОЙБАТ 42',
    'дома заводской готовности',
    'энергоэффективные дома',
    'ИЖС под ключ Кемерово',
    'железобетонные дома',
    'дома с доставкой',
  ],

  openGraph: {
    title: 'Дом42 | Проекты домов: Ноктюрн и Баллада • Префаб-монолит',
    description:
      'Выберите свой дом: 90–130 м², 2–4 спальни, от 6 800 000 ₽. Строительство за 80 дней. 2% от стоимости — на помощь ветеранам СВО.',
    type: 'website',
    url: baseUrl,
    siteName: 'Дом42',
    images: [
      {
        url: `${baseUrl}/images/Hero/hero.jpg`,
        width: 1200,
        height: 630,
        alt: 'Дом42 - Проекты домов Ноктюрн и Баллада по технологии префаб-монолит',
      },
    ],
    locale: 'ru_RU',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Дом42 | Дома Ноктюрн и Баллада • от 6.8 млн ₽',
    description:
      '90–130 м², 80 дней строительства, префаб-монолит. Поддержка ветеранов СВО.',
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    // google: "ваш-google-verification-code",
    // yandex: "ваш-yandex-verification-code",
  },

  authors: [{ name: 'Дом42 - Строительство домов в Кузбассе' }],
  creator: 'Дом42',
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
    title: 'Дом42',
    statusBarStyle: 'black-translucent',
  },

  manifest: '/manifest.json',

  other: {
    'og:price:amount': '6800000',
    'og:price:currency': 'RUB',
    'business:region': 'Кемеровская область',
    'business:city': 'Кемерово',
    'business:street': 'ул. Тухачевского, 50/5',
    'business:phone': '+79235238330',
    'product:category': 'проекты домов',
    'social:cause': 'поддержка ветеранов СВО',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="project-page">
        <h1>Выберите свой дом</h1>

        <div className="projects-container">
          {projects.map((project) => (
            <CardProject
              key={project.slug}
              name={project.name}
              slug={project.slug}
              price={project.price}
              area={project.characteristics.area}
              bedrooms={project.characteristics.bedrooms}
              bathrooms={project.characteristics.bathrooms}
              image={project.images?.[0]}
            />
          ))}
        </div>


      </section>
      <Stroybat />
      <Contacts />
    </>
  );
}
