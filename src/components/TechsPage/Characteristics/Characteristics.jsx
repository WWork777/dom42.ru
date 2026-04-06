import styles from "./Characteristics.module.scss";

export default function Characteristics() {
  return (
    <>
      <section className={styles.characteristics}>
        <div className={styles.characteristics_img} />
        <div className={styles.characteristics_text}>
          <h1>Технология и характеристики</h1>
          <p className={styles.orange}>
            Качество, которое Вы получите за 80 000 ₽/м²
          </p>
          <p className={styles.text}>
            Непревзойдённая надёжность и долговечность железобетона, в сочетании
            с рациональными архитектурными решениями и комфортом.
          </p>
          <p>
            <i>
              «Армирование стеновых панелей выполнено с запасом несущей
              способности, рассчитанным с учётом реальных снеговых и ветровых
              нагрузок в Кузбассе. Ориентация на заводское исполнение
              гарантирует предсказуемое качество и долговечность несущих
              конструкций на весь срок эксплуатации дома».
            </i>
          </p>
          <p className={styles.text}>
            Все технические решения соответствуют требованиям противопожарных,
            санитарно-гигиенических и экологических норм РФ.
          </p>
          <span>Срок эксплуатации — более 150 лет</span>
        </div>
      </section>
    </>
  );
}
