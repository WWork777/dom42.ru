import FeedbackForm from "@/components/ContactsPage/FeedbackForm";
import styles from "./page.module.scss";
import Link from "next/link";

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
                  +7 (3842) 65-77-75
                </a>
              </div>
            </div>

            <div className={styles.contacts_item}>
              <div className={styles.contacts_icon}>
                <img src="/Icons/почта.svg" alt="email" />
              </div>
              <div className={styles.contacts_text_block}>
                <p className={styles.contacts_label}>Email</p>
                <a href="mailto:info@dom42.ru" className={styles.contacts_link}>
                  info@dom42.ru
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
