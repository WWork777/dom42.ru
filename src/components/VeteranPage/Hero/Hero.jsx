import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_left}>
        <h1 className={styles.hero_title}>СТРОЙБАТ42</h1>
        <p className={styles.hero_text}>
          Социальный вектор компании ДОМ42. Мы создаём рабочие места, проводим
          обучение и стажировку для ветеранов СВО.
        </p>
        <p className={styles.hero_desc}>
          Кроме того, 2% от стоимости каждого дома мы направляем для адресной
          помощи инвалидам боевых действий.
        </p>
        <div className={styles.hero_desc_block}>
          <p className={styles.hero_desc_block__text}>
            Это не разовая благотворительная акция.<br></br> Это{" "}
            <span>системная работа по созданию рабочих мест</span>, обеспечению
            жильём и социальной адаптации ветеранов СВО в Кузбассе.
          </p>
        </div>
      </div>
      <div className={styles.hero_right}>
        <Image
          src="/VeteranPage/veteran.png"
          alt="СТРОЙБАТ42"
          width={1920}
          height={1080}
          className={styles.hero_img}
        />
      </div>
    </section>
  );
}
