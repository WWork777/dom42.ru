import FeedbackForm from "@/components/ContactsPage/FeedbackForm";
import styles from "./page.module.scss";
import Link from "next/link";

const baseUrl = 'http://dom-142.ru';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Контакты Дом42 | Офис в Кемерово • +7 (923) 523-83-30',
  description:
    'Свяжитесь с нами: г. Кемерово, ул. Тухачевского, 50/5 (офис 1а). Телефон: +7 (923) 523-83-30. Email: dom.region42@gmail.com. Консультация по проектам домов префаб-монолит.',

  alternates: {
    canonical: `${baseUrl}contacts`,
  },

  keywords: [
    'Дом42 контакты',
    'строительство домов Кемерово телефон',
    'офис Дом42 Тухачевского',
    'заказать дом Кузбасс',
    'консультация по проектам',
    'рассчитать стоимость дома',
    'СТРОЙБАТ 42 контакты',
    'адрес строительной компании',
    'связаться с застройщиком',
    'Дом42 Кемерово офис',
  ],

  openGraph: {
    title: 'Контакты Дом42 | Офис в Кемерово',
    description:
      'г. Кемерово, ул. Тухачевского, 50/5. +7 (923) 523-83-30. Обсудим ваш проект дома префаб-монолит.',
    type: 'website',
    url: `${baseUrl}contacts`,
    siteName: 'Дом42',
    images: [
      {
        url: `${baseUrl}/images/Hero/hero.jpg`,
        width: 1200,
        height: 630,
        alt: 'Дом42 - Офис в Кемерово, ул. Тухачевского 50/5',
      },
    ],
    locale: 'ru_RU',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Контакты Дом42 | Кемерово',
    description: '+7 (923) 523-83-30 • ул. Тухачевского, 50/5 • Консультация по проектам',
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

  authors: [{ name: 'Дом42 - Строительство домов' }],
  creator: 'Дом42',
  publisher: 'Дом42',

  formatDetection: {
    telephone: true,  // ✅ Важно: включено для кликабельного телефона
    date: false,
    address: true,    // ✅ Важно: включено для адреса
    email: true,      // ✅ Важно: включено для email
    url: false,
  },

  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',

  appleWebApp: {
    title: 'Дом42 Контакты',
    statusBarStyle: 'black-translucent',
  },

  manifest: '/manifest.json',

  other: {
    'business:contact_phone': '+79235238330',
    'business:contact_email': 'dom.region42@gmail.com',
    'business:street_address': 'ул. Тухачевского, 50/5, офис 1а',
    'business:address_locality': 'Кемерово',
    'business:address_region': 'Кемеровская область',
    'business:postal_code': '650000',
    'business:country': 'RU',
    'geo:latitude': '55.3331',    // 📍 Замените на точные координаты офиса
    'geo:longitude': '86.0831',
    'opening_hours': 'Mo-Fr 09:00-18:00',
  },
};

export default function ContactsPage() {
  return (
    <>
      <div className={styles.contacts_page}>
        <div className={styles.contacts_container}>
          <div className={styles.contacts_info}>
            <h1>Контакты</h1>

            <div className={styles.contacts_item}>
              <div className={styles.contacts_icon}>
                <img src="/Icons/адрес.svg" alt="address" />
              </div>
              <div className={styles.contacts_text_block}>
                <p className={styles.contacts_label}>Адрес</p>
                <p className={styles.contacts_text}>
                  г. Кемерово, ул. Тухачевского, 50/5 (этаж 4, офис 1а)
                </p>
              </div>
            </div>

            <div className={styles.contacts_item}>
              <div className={styles.contacts_icon}>
                <img src="/Icons/телефон.svg" alt="telephone" />
              </div>
              <div className={styles.contacts_text_block}>
                <p className={styles.contacts_label}>Телефон</p>
                <a href="tel:+73842657775" className={styles.contacts_link}>
                  +7 923 523 83 30
                </a>
              </div>
            </div>

            <div className={styles.contacts_item}>
              <div className={styles.contacts_icon}>
                <img src="/Icons/почта.svg" alt="email" />
              </div>
              <div className={styles.contacts_text_block}>
                <p className={styles.contacts_label}>Email</p>
                <a href="mailto:dom.region42@gmail.com" className={styles.contacts_link}>
                  dom.region42@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.contacts_item}>
              <div className={styles.contacts_icon}>
                <img src="/Icons/time.svg" alt="time" />
              </div>
              <div className={styles.contacts_text_block}>
                <p className={styles.contacts_label}>Часы работы</p>
                <div className={styles.contacts_schedule}>
                  <p>Пн-Пт: 9:00 - 18:00</p>
                  <p>Сб-Вс: По договорённости</p>
                </div>
              </div>
            </div>

            <p className={styles.social_label}>Мы в соцсетях</p>
            <div className={styles.social}>
              <Link href="#">
                <img src="/Icons/tg.svg" alt="tg" />
              </Link>
              <Link href="#">
                <img src="/Icons/max.svg" alt="max" />
              </Link>
              <Link href="#">
                <img src="/Icons/vk.svg" alt="vk" />
              </Link>
              <Link href="#">
                <img src="/Icons/рутуб.svg" alt="rutube" />
              </Link>
              <Link href="#">
                <img src="/Icons/дзен.svg" alt="dzen" />
              </Link>
            </div>
          </div>

          <div className={styles.contacts_map}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Afecae58673fe12a65b45e531ccf29eb7907ce0224f2e481e64a5ffdb24c76162"
              width="100%"
              height="100%"
              frameBorder="0"
            />
          </div>
        </div>
      </div>

      <FeedbackForm />
    </>
  );
}
