import styles from "./GoodDeed.module.scss";
import Link from "next/link";

export default function GoodDeed() {
  return (
    <section className={styles.good_deed}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>ДОМ И ДОБРОЕ ДЕЛО</h2>

          <p className={styles.text}>
            Когда вы приобретаете дом в нашей компании, вы не только получаете
            качественное жильё. Вы участвуете в важном добром деле: помогаете
            ветеранам вернуться к нормальной жизни.
          </p>

          <div className={styles.highlight_box}>
            <p className={styles.bold_text}>
              Дом42 — это значит жить в достойных условиях, совершив поступок,
              достойный уважения.
            </p>
            <p className={styles.orange_text}>
              2% от стоимости каждого дома мы направляем в фонд помощи инвалидам
              боевых действий.
            </p>
          </div>
        </div>

        <Link href="/projects" className={styles.cta_button}>
          <span>Выбрать проект</span>
          <div className={styles.arrow_box}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M8.25 5.5L13.75 11L8.25 16.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
}
