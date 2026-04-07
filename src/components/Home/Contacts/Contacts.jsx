"use client";
import { useState } from "react";
import "./Contacts.scss";

export default function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.style.overflow = "hidden"; // Блокируем скролл фона
    } else {
      document.body.style.overflow = "unset";
      setFormData({ name: "", phone: "" });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phone.replace(/\D/g, "").length < 11) {
      alert("Пожалуйста, введите полный номер телефона");
      return;
    }
    console.log("Заявка из контактов:", formData);
    alert("Заявка успешно отправлена!");
    toggleModal();
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
                  +7 923 523 83 30
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
                <a href="mailto:dom.region42@gmail.com" className="contacts__link">
                  dom.region42@gmail.com
                </a>
              </div>
            </div>
          </div>

          <button className="cta-form" onClick={toggleModal}>
            <label>Оставить заявку</label>
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
              <button type="submit" className="cta-form">
                <label>Отправить заявку</label>
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
