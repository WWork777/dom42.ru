"use client";
import { useState } from "react";
import "./Contacts.scss";

export default function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  
  // Добавляем состояния для статуса отправки
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.style.overflow = "hidden"; // Блокируем скролл фона
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

  // Обновленная асинхронная функция отправки
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
          name: formData.name,
          phone: formData.phone,
          // Передаем пометку, чтобы вы понимали, откуда пришла заявка
          details: "Заявка из блока Контакты", 
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Заявка успешно отправлена!");
        alert("Заявка успешно отправлена!");
        setFormData({ name: "", phone: "" });
        toggleModal(); // Закрываем модальное окно после успеха
      } else {
        setStatus("Ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      setStatus("Ошибка сети. Проверьте подключение к интернету.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contacts" id="contacts">
      <div className="contacts__wrapper">
        <div className="contacts__card">
          <h2 className="contacts__title">Контакты</h2>

          <div className="contacts__items">
            {/* Телефон */}
            <div className="contacts__item">
              <div className="contacts__icon">
                <img src="/Icons/телефон.svg" alt="telephone" />
              </div>
              <div>
                <p className="contacts__label">Телефон</p>
                <a href="tel:+73842657775" className="contacts__link">
                  +7 (3842) 65-77-75
                </a>
              </div>
            </div>

            {/* Адрес */}
            <div className="contacts__item">
              <div className="contacts__icon">
                <img src="/Icons/адрес.svg" alt="address" />
              </div>
              <div>
                <p className="contacts__label">Адрес</p>
                <p className="contacts__text">
                  г. Кемерово, ул. Тухачевского, 50/5
                </p>
              </div>
            </div>

            {/* Почта */}
            <div className="contacts__item">
              <div className="contacts__icon">
                <img src="/Icons/почта.svg" alt="email" />
              </div>
              <div>
                <p className="contacts__label">Email</p>
                <a href="mailto:info@dom42.ru" className="contacts__link">
                  info@dom42.ru
                </a>
              </div>
            </div>
          </div>

          <button className="cta-form" onClick={toggleModal}>
            <label style={{ cursor: "pointer" }}>Оставить заявку</label>
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
        </div>

        <div className="contacts__map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Afecae58673fe12a65b45e531ccf29eb7907ce0224f2e481e64a5ffdb24c76162"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* <button className="close-btn" onClick={toggleModal}>
              &times;
            </button> */}
            <h3>Связаться с нами</h3>
            <p>Оставьте ваши данные, и мы перезвоним вам</p>

            <form onSubmit={handleSubmit} className="modal-form">
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
                className="cta-form" 
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1 }}
              >
                <label style={{ cursor: isSubmitting ? "default" : "pointer" }}>
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </label>
                {!isSubmitting && (
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
    </section>
  );
}