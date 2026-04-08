import Characteristics from "@/components/TechsPage/Characteristics/Characteristics";
import ArmShema from "@/components/TechsPage/ArmShema/ArmShema";
import ElementsShema from "@/components/TechsPage/ElementsShema/ElementsShema";
import Contacts from "@/components/Home/Contacts/Contacts";

const baseUrl = 'http://dom-142.ru';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Дом42 | Технология префаб-монолит • Дома за 80 дней в Кемерово',
  description:
    'Строительство домов по технологии префаб-монолит в Кузбассе. Заводское качество, срок службы 150+ лет, класс энергоэффективности A+. 80 000 ₽/м² — финальная цена. Соответствует СП РФ.',

  alternates: {
    canonical: baseUrl,
  },

  keywords: [
    'префаб монолит технология',
    'строительство домов Кемерово',
    'дома из железобетона',
    'энергоэффективные дома Кузбасс',
    'заводское домостроение',
    'дома под ключ 80 дней',
    'монолитные панели',
    'армированные стеновые панели',
    'строительство по СП нормам',
    'дома с утеплением 30 мм',
    'кровля битумная черепица',
    'железобетонные конструкции',
    'ИЖС Кузбасс',
    'быстровозводимые дома',
  ],

  openGraph: {
    title: 'Дом42 | Префаб-монолит: надёжность железобетона + заводская точность',
    description:
      'Дома за 80 дней по 80 000 ₽/м². Срок службы 150+ лет. Класс огнестойкости III, снеговая нагрузка 280 кг/м². Соответствует всем СП РФ.',
    type: 'website',
    url: baseUrl,
    siteName: 'Дом42',
    images: [
      {
        url: `${baseUrl}/images/Hero/hero.jpg`,
        width: 1200,
        height: 630,
        alt: 'Дом42 - Технология префаб-монолит: схема армирования и конструкция дома',
      },
    ],
    locale: 'ru_RU',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Дом42 | Префаб-монолит: дом-конструктор из железобетона',
    description:
      '80 дней • 80 000 ₽/м² • 150+ лет службы. Заводское качество + монолитная прочность.',
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

  authors: [{ name: 'Дом42 - Префаб-монолит технологии' }],
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

  // Дополнительные данные для SEO и соцсетей
  other: {
    'og:price:amount': '80000',
    'og:price:currency': 'RUB',
    'business:region': 'Кемеровская область',
    'business:city': 'Кемерово',
    'product:service_type': 'строительство домов',
    'product:material': 'железобетон, префаб-монолит',
    'product:duration': 'P80D', // 80 дней в формате ISO 8601
  },
};

export default function TechnologiesPage() {
  return (
    <>
      <Characteristics />
      <ArmShema />
      <ElementsShema />
      <Contacts />
    </>
  );
}
