"use client";
import { useState } from "react";
import Link from "next/link";
import "./ProductInfo.scss";
import Image from "next/image";

export default function ProductInfo({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const { final_name, price, characteristics = {} } = product;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.style.overflow = "hidden";
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
    console.log("Запрос расчета доставки для:", final_name, formData);
    alert("Заявка на расчет принята! Мы свяжемся с вами.");
    toggleModal();
  };

  return (
    <>
      <div className="product-name">
        <h1>{final_name}</h1>
        <p className="product-model">{product.shortDescription}</p>
      </div>

      <div className="price-container">
        <p>{price}</p>

        <div className="buy-container">
          <button className="cta-form">
            <Link href="#contacts">Задать вопрос</Link>
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

          {/* Кнопка открытия модалки */}
          <button className="cta-form" onClick={toggleModal}>
            <label>Рассчитать с доставкой</label>
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
      </div>

      <div className="specifications-container">
        <div className="specifications-container-header">
          <span>Основные характеристики</span>
        </div>

        <div className="specifications-list">
          <div className="spec-item">
            <span className="back-icon">
              <Image
                src={"/Icons/площадь.png"}
                width={50}
                height={50}
                alt="площадь"
              />
            </span>
            <span>Площадь: {characteristics.area}</span>
          </div>

          <div className="spec-item">
            <span className="back-icon">
              <Image src={"/Icons/р.svg"} width={50} height={50} alt="цена" />
            </span>
            <span>Цена за м²: {characteristics.price_per_m2}</span>
          </div>

          <div className="spec-item">
            <span className="back-icon">
              <Image
                src={"/Icons/arrow.png"}
                width={50}
                height={50}
                alt="этажи"
              />
            </span>
            <span>Этажей: {characteristics.floors}</span>
          </div>

          <div className="spec-item">
            <span className="back-icon">
              <Image
                src={"/Icons/ванна.svg"}
                width={50}
                height={50}
                alt="ванна"
              />
            </span>
            <span>Спальни: {characteristics.bedrooms}</span>
          </div>

          <div className="spec-item">
            <span className="back-icon">
              <Image
                src={"/Icons/спальня.svg"}
                width={50}
                height={50}
                alt="спальня"
              />
            </span>
            <span>Санузлы: {characteristics.bathrooms}</span>
          </div>

          <div className="spec-item">
            <span className="back-icon">
              <Image
                src={"/Icons/certified.png"}
                width={50}
                height={50}
                alt="класс"
              />
            </span>
            <span>Класс: {characteristics.class}</span>
          </div>

          <div className="spec-item">
            <span className="back-icon">
              <Image
                src={"/Icons/security-update.png"}
                width={50}
                height={50}
                alt="Сейсмостойкость"
              />
            </span>
            <span>Сейсмостойкость: {characteristics.seismic_stability}</span>
          </div>

          <div className="spec-item">
            <span className="back-icon">
              <Image
                src={"/Icons/solar_home-broken.svg"}
                width={50}
                height={50}
                alt="Срок"
              />
            </span>
            <span>Срок строительства: {characteristics.delivery_time}</span>
          </div>
        </div>
      </div>

      <div className="specifications-container">
        <div className="specifications-container-header">
          <span>Описание</span>
        </div>
        <p className="specifications-description">{product.description}</p>
      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={toggleModal}>
              &times;
            </button>
            <h3>Рассчитать доставку</h3>
            <p>
              Оставьте данные для проекта: <strong>{final_name}</strong>
            </p>

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
                <label>Получить расчет</label>
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
    </>
  );
}
