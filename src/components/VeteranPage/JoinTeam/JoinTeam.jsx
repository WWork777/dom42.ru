"use client";
import { useState } from "react";
import styles from "./JoinTeam.module.scss";
// import Link from "next/link"; // Если Link больше нигде не используется, его можно убрать
import Image from "next/image";

export default function JoinTeam() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  // Добавляем состояния для отправки
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const benefits = [
    "Бесплатное обучение (30–90 дней стажировки)",
    "Работу в бригаде с опытными наставниками",
    "Зарплату от 100 000+ ₽/мес",
    "Возможность построить дом для себя по цене ниже рыночной",
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Очищаем форму и статус при закрытии окна
      setFormData({ name: "", phone: "" });
      setStatus("");
    }
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          name: formData.name,
          phone: formData.phone,
          details: "Заявка в команду (Ветераны СВО)", // Метка, чтобы понимать откуда лид
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Заявка успешно отправлена!");
        alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
        setFormData({ name: "", phone: "" });
        toggleModal(); // Закрываем модалку после успешной отправки
      } else {
        setStatus("Ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("Ошибка сети. Проверьте подключение к интернету.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.join_team}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>ХОТИТЕ РАБОТАТЬ С НАМИ?</h2>
          <p className={styles.subtitle}>
            Если вы ветеран СВО и хотите получить востребованную и социально
            значимую профессию, стабильный заработок и работать в команде, —
            приходите.
          </p>

          <h3 className={styles.list_title}>Мы предлагаем:</h3>
          <ul className={styles.list}>
            {benefits.map((benefit, index) => (
              <li key={index} className={styles.list_item}>
                <div className={styles.icon_check}>
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 5L5 9L13 1"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <button className={styles.button} onClick={toggleModal}>
            <span>Хочу в команду</span>
            <div className={styles.arrow_box}>
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
        </div>

        <div className={styles.image_wrapper}>
          <Image
            src="/VeteranPage/working.jpg"
            alt="Работа в команде"
            width={800}
            height={500}
            className={styles.img}
          />
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
            <h3>Вступить в команду</h3>
            <p>Оставьте ваши данные, и мы перезвоним для уточнения деталей</p>

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
                    phone: formatPhoneNumber(e.target.value),
                  })
                }
              />
              
              {/* Заменено с <Link> на <button type="submit"> */}
              <button 
                type="submit" 
                className="cta-form"
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? "default" : "pointer" }}
              >
                <span>{isSubmitting ? "Отправка..." : "Оставить заявку"}</span>
                {!isSubmitting && (
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
                )}
              </button>
            </form>

            {/* Вывод статуса ошибки/успеха */}
            {status && (
              <p style={{ 
                marginTop: '15px', 
                color: status.includes('Ошибка') || status.includes('Пожалуйста') ? 'red' : 'green', 
                fontSize: '14px', 
                textAlign: 'center' 
              }}>
                {status}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}