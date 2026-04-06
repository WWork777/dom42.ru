import Image from "next/image";
import styles from "./ArmShema.module.scss";

export default function ArmShema() {
  return (
    <section className={styles.arm_shema}>
      <h2>Схема армирования стеновой панели (СП-1)</h2>

      <div className={styles.arm_shema_content}>
        <div className={styles.leftSide}>
          <Image
            src="/Techs/2.png"
            alt="Схема армирования"
            width={800}
            height={600}
            className={styles.gost}
          />
          <h3>Проектирование с учётом всех норм</h3>
          <p>Список нормативных документов:</p>

          <ul>
            <li>СП 22.13330.2016 «Основания зданий и сооружений»</li>
            <li>СП 24.13333.2011 «Свайные фундаменты»</li>
            <li>СП 63.13330.2018 «Бетонные и железобетонные конструкции»</li>
            <li>СП 64.13330.2017 «Деревянные конструкции»</li>
            <li>СП 131.13330.2020 «Строительная климатология»</li>
            <li>СП 70.13330.2012 «Несущие и ограждающие конструкции»</li>
            <li>СП 71.13330.2017 «Изоляционные и отделочные покрытия»</li>
          </ul>
        </div>

        <div className={styles.rightSide}>
          <Image
            src="/Techs/3.png"
            alt="Схема армирования"
            width={800}
            height={600}
            className={styles.shema}
          />
        </div>
      </div>
    </section>
  );
}
