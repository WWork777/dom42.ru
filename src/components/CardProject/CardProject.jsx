"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./CardProject.module.scss";
import Link from "next/link";

export default function CardProject({
  name,
  slug,
  price,
  area,
  bedrooms,
  bathrooms,
  image,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  
  // Добавляем состояния для статуса отправки
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Сбрасываем форму и статусы при закрытии
      setFormData({ name: "", phone: "" });
      setStatus("");
    }
  };

  const formatPhone = (v) => {
    const n = v.replace(/\D/g, "");
    if (!n) return "";
    if (n.length <= 1) return `+7`;
    if (n.length <= 4) return `+7 (${n.slice(1)}`;
    if (n.length <= 7) return `+7 (${n.slice(1, 4)}) ${n.slice(4)}`;
    if (n.length <= 9)
      return `+7 (${n.slice(1, 4)}) ${n.slice(4, 7)}-${n.slice(7)}`;
    return `+7 (${n.slice(1, 4)}) ${n.slice(4, 7)}-${n.slice(7, 9)}-${n.slice(9, 11)}`;
  };

  // Обновленная логика отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Проверка на заполненность номера телефона
    if (formData.phone.replace(/\D/g, "").length < 11) {
      setStatus("Пожалуйста, введите полный номер телефона");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/modal-send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          // Добавляем название проекта, чтобы понимать, откуда пришла заявка
          projectName: name, 
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Заявка успешно отправлена!");
        alert("Заявка на расчет доставки отправлена!");
        setFormData({ name: "", phone: "" });
        toggleModal(); // Закрываем модалку при успешной отправке
      } else {
        setStatus("Ошибка при отправке. Попробуйте еще раз.");
      }
    } catch (error) {
      setStatus("Ошибка при отправке. Проверьте соединение с интернетом.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.preview_card}>
      <Image
        src={image}
        width={1000}
        height={1000}
        alt={name}
        className={styles.main_image}
      />

      <div className={styles.card_info}>
        <div className={styles.project_name}>
          <p>{name}</p>
          <Link href={`/projects/${slug}`} className={styles.link_more}>
            <span className={styles.link_text}>Подробнее</span>
            <div className={styles.orange_arrow}>
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
          </Link>
        </div>

        <div className={styles.project_info}>
          <div className={styles.project_info_card}>
            <div className={styles.icon_container}>
              <Image src={"/Icons/площадь.png"} width={60} height={60} alt="" />
            </div>
            <span>{area}</span>
          </div>
          <div className={styles.project_info_card}>
            <div className={styles.icon_container}>
              <Image src={"/Icons/спальня.svg"} width={60} height={60} alt="" />
            </div>
            <span>{bedrooms}</span>
          </div>
          <div className={styles.project_info_card}>
            <div className={styles.icon_container}>
              <Image src={"/Icons/ванна.svg"} width={60} height={60} alt="" />
            </div>
            <span>{bathrooms}</span>
          </div>
        </div>

        <div className={styles.project_price_container}>
          <div className={styles.price_block}>
            <span className={styles.project_price}>{price}</span>
            <label className={styles.price_label}>
              Полная стоимость
              <br />
              без доставки до объекта
            </label>
          </div>
          <button className={styles.calc_button} onClick={toggleModal}>
            Рассчитать доставку
          </button>
        </div>
      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
      {isModalOpen && (
        <div className={styles.modal_overlay} onClick={toggleModal}>
          <div
            className={styles.modal_content}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.close_btn} onClick={toggleModal}>
              &times;
            </button>
            <h3>Доставка проекта</h3>
            <p>
              Укажите ваши данные для расчета доставки проекта:{" "}
              <strong>{name}</strong>
            </p>

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
                placeholder="+7 (___) ___-__-__"
                required
                maxLength={18}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: formatPhone(e.target.value),
                  })
                }
              />
              
              <button 
                type="submit" 
                className={styles.submit_button}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "Отправка..." : "Отправить заявку"}</span>
                {!isSubmitting && (
                  <div className={styles.arrow_box_small}>
                    <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M8.25 5.5L13.75 11L8.25 16.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </button>
            </form>
            
            {/* Вывод статуса ошибки/успеха */}
            {status && (
              <p style={{ marginTop: '10px', color: status.includes('Ошибка') || status.includes('Пожалуйста') ? 'red' : 'green', fontSize: '14px', textAlign: 'center' }}>
                {status}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}