"use client";
import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";

const SvgLeft = ({ liText, link }) => {
  return (
    <Link href={link} className={styles.li_text_link_left}>
      <img src="/Icons/Vector.svg" alt="list icon" />
      <p style={{ margin: 0 }}>{liText}</p>
    </Link>
  );
};


export default function Footer() {


  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        <div className={styles.footer_logo_img}>
          <Image src={'/Logo.svg'} alt="logo" width={1000} height={1000} />
        </div>
        <h5>© Дом42. Все права защищены.</h5>
        <Link href="/">
          <p>Политика конфиденциальности</p>
        </Link>
      </div>
      <div className={styles.footer_links}>
        <SvgLeft liText="Главная" link="/" />
        <SvgLeft liText="Проекты" link="/projects" />
        <SvgLeft liText="Технологии" link="/technologies" />
        <SvgLeft liText="Для ветеранов СВО" link="/stroybat42" />
        <SvgLeft liText="Контакты" link="/contacts" />
      </div>
      <div className={styles.footer_contacts}>
        <h5>Главный офис</h5>
        <p>г. Кемерово, ул. Тухачевского, 50/5 (этаж 4, офис 1а)</p>
        <h5>Телефон</h5>
        <Link href="tel:+7 (3842) 65-77-75">
          <p>+7 (3842) 65-77-75</p>
        </Link>
        <h5>Почта</h5>
        <Link href="mailto:750535@bk.ru">
          <p>750535@bk.ru</p>
        </Link>
        <div className={styles.footer_social}>
          <Link href="">
            <img src="/Icons/tg.svg" className={styles.footer_svg} />
          </Link>
          <Link href="https://max.ru/u/f9LHodD0cOJRtuggQMOzpRNL_nNU-UmfUsIFVsCkyA29ihOmzySYtogrmNo">
            <img src="/Icons/max.svg" className={styles.footer_svg} />
          </Link>
          <Link href="https://vk.com/arhitek142">
            <img src="/Icons/vk.svg" className={styles.footer_svg} />
          </Link>
          <Link href="https://rutube.ru/channel/27042220/">
            <img src="/Icons/рутуб.svg" className={styles.footer_svg} />
          </Link>
          <Link href="">
            <img src="/Icons/дзен.svg" className={styles.footer_svg} />
          </Link>
        </div>
        <div className={styles.footer_bottom}>
          <h5>© Дом42. Все права защищены.</h5>
          <Link href="/privacy">
            <p>Политика конфиденциальности</p>
          </Link>
        </div>
      </div>

      {/* Добавленная строка с копирайтом */}
      <div className={styles.footer_copyright}>
        <a href="https://virlab42.ru">
          Сайт разработан компанией <span>Вирлаб</span>
        </a>
      </div>
    </div>
  );
}
