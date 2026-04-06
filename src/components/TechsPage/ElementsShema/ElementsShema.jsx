"use client"; // Обязательно для использования useState
import { useState } from "react";
import styles from "./ElementsShema.module.scss";
import Image from "next/image";

export default function ElementsShema() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    // При закрытии можно очищать форму
    if (isModalOpen) setFormData({ name: "", phone: "" });
  };

  // Функция маски
  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/\D/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength === 0) return "";
    if (phoneNumberLength <= 1) return `+7`;
    if (phoneNumberLength <= 4) return `+7 (${phoneNumber.slice(1)}`;
    if (phoneNumberLength <= 7)
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    if (phoneNumberLength <= 9)
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formattedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация на длину номера (в маске должно быть 11 цифр)
    if (formData.phone.replace(/\D/g, "").length < 11) {
      alert("Пожалуйста, введите полный номер телефона");
      return;
    }

    console.log("Данные для расчета:", formData);
    alert("Заявка отправлена! Мы свяжемся с вами.");
    setIsModalOpen(false);
    setFormData({ name: "", phone: "" });
  };
  return (
    <section className={styles.elements_shema}>
      <h2>Схема элементов конструкции</h2>
      <p>Характеристика</p>

      <div>
        {" "}
        {/* короче это надо, потому что там дальше транформ Y-30px = gap 30px ну хочешь чини */}
        <div className={styles.lists}>
          <ol className={styles.text}>
            <li>Уровень ответственности</li>
            <li>Уровень огнестойкости</li>
            <li>Климатический район</li>
            <li>Расчётная температура</li>
            <li>Снеговой район</li>
            <li>Снеговая нагрузка (расч.)</li>
          </ol>
          <ol className={styles.nums}>
            <li>2 (нормальный)</li>
            <li>III (60 мин)</li>
            <li>III</li>
            <li>–39°C</li>
            <li>IV</li>
            <li>280 кг/м²</li>
          </ol>
          <ol className={styles.text}>
            <li>Ветровой район</li>
            <li>Ветровое давление</li>
            <li>Глубина промерзания</li>
            <li>Сейсмичность</li>
            <li>Толщина стеновой панели</li>
            <li>Толщина стен с учётом утепления</li>
          </ol>
          <ol className={styles.nums}>
            <li>III</li>
            <li>38 кг/м²</li>
            <li>2,2 м</li>
            <li>7 баллов</li>
            <li>150 мм</li>
            <li>30 мм</li>
          </ol>
        </div>
        <div className={styles.shema}>
          <Image
            src="/Techs/4.png"
            alt="Схема армирования"
            width={800}
            height={600}
            className={styles.shema_img}
          />
          <div className={styles.shema_text}>
            <h4>
              Что такое технология <br /> «Префаб-монолит»?
            </h4>
            <p>
              «Префаб-монолит» (от англ. prefabricated — сборный) — это
              современный индустриальный метод строительства, который объединяет
              в себе лучшие качества: заводскую точность и монолитную прочность.
            </p>
            <p>
              Простыми словами: это дом-конструктор, собранный из готовых
              железобетонных элементов, которые соединяются между собой
              монолитным бетоном в единую, неразрывную и сверхпрочную
              конструкцию.
            </p>
            <p>
              В отличие от традиционного строительства, мы производим все
              основные элементы дома в заводских условиях: Железобетонные
              стеновые панели (несущие и внутренние), Плиты перекрытия, Сваи и
              элементы фундамента, Стропильные фермы для кровли, Фасадные
              термопанели. Комплект привозят на участок, где производится его
              сборка.
            </p>

            <p>
              <span>Результат:</span> полностью готовый к чистовой отделке дом
              за 80 рабочих дней.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.crowlya}>
        <div className={styles.crowlya_leftSide}>
          <h3>Кровля</h3>
          <div className={styles.crowlya_text}>
            <p>
              Стропильная ферма из древесины хвойных пород первого сорта
              (плотность не менее 500 кг/м³) с антисептической и огнезащитной
              обработкой.
            </p>
            <p className={styles.orange}>
              Выдерживает снеговую нагрузку до 280 кг/м². Утепление — минвата
              250 мм. Кровля — гибкая битумная черепица.
            </p>
          </div>
          <div className={styles.button}>
            <button type="submit" className="cta-form" onClick={toggleModal}>
              <label>Получить расчёт</label>
              <div className="orange-arrow">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 5.5L13.75 11L8.25 16.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <Image
          src="/Techs/4.png"
          alt="Схема армирования"
          width={800}
          height={600}
          className={styles.shema_img}
        />
      </div>

      {isModalOpen && (
        <div className={styles.modal_overlay} onClick={toggleModal}>
          <div
            className={styles.modal_content}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.close_btn} onClick={toggleModal}>
              &times;
            </button>
            <h3>Заявка на расчёт</h3>
            <p>Оставьте свои контакты, и наш инженер свяжется с вами</p>

            <form onSubmit={handleSubmit} className={styles.modal_form}>
              <input
                type="text"
                placeholder="Ваше имя"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="+7 (999) 000-00-00"
                required
                maxLength={18} // Ограничение длины строки маски
                value={formData.phone}
                onChange={handlePhoneChange}
              />
              <button type="submit" className="cta-form">
                <label>Отправить данные</label>
                <div className="orange-arrow">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M8.25 5.5L13.75 11L8.25 16.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
