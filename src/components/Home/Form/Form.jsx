"use client";
import { useState } from "react";
import "./Form.scss";

export default function Form() {
  const [formData, setFormData] = useState({
    project: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(""); // Добавлено состояние для статуса отправки

  // Функция форматирования номера
  const formatPhoneNumber = (value) => {
    if (!value) return value;

    // Оставляем только цифры
    const phoneNumber = value.replace(/\D/g, "");
    const phoneNumberLength = phoneNumber.length;

    // Если пользователь стирает всё, не возвращаем +7
    if (phoneNumberLength === 0) return "";

    // Начинаем всегда с +7, даже если ввели 8 или другую цифру в начале
    if (phoneNumberLength <= 1) return `+7`;
    if (phoneNumberLength <= 4) return `+7 (${phoneNumber.slice(1)}`;
    if (phoneNumberLength <= 7)
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    if (phoneNumberLength <= 9)
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Применяем маску только для поля phone
    if (name === "phone") {
      formattedValue = formatPhoneNumber(value);
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.project) {
      newErrors.project = "Выберите проект дома";
    }

    if (!formData.address || formData.address.trim().length < 5) {
      newErrors.address = "Введите полный адрес или кадастровый номер";
    }

    // Валидация: в маске +7 (XXX) XXX-XX-XX ровно 11 цифр (включая 7)
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 11) {
      newErrors.phone = "Введите полный номер телефона";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setStatus(""); // Очищаем предыдущий статус

    try {
      const response = await fetch("/api/rashet-send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: formData.phone,
          project: formData.project, // Передаем выбранный проект
          address: formData.address, // Передаем адрес в детали
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Заявка на расчет успешно отправлена!");
        setFormData({ project: "", address: "", phone: "" });
        setErrors({});
        // Очищаем сообщение об успехе через 5 секунд (по желанию)
        setTimeout(() => setStatus(""), 5000);
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
    <section className="calc-form">
      <div className="calc-form__wrapper">
        <h2>
          РАССЧИТАЙТЕ <span>ТОЧНУЮ СТОИМОСТЬ</span> ДЛЯ ВАШЕГО УЧАСТКА
        </h2>

        <p className="calc-form__subtitle">
          Оставьте адрес участка или кадастровый номер. Мы проверим удалённость,
          подъездные пути и пришлём расчёт с доставкой и монтажом.
        </p>

        <form className="calc-form__form" onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <select
              name="project"
              value={formData.project}
              onChange={handleChange}
              className={errors.project ? "error" : ""}
            >
              <option value="">Выберите проект</option>
              <option value="Ноктюрн 110">Ноктюрн 110</option>
              <option value="Ноктюрн 90">Ноктюрн 90</option>
              <option value="Баллада 130">Баллада 130</option>
            </select>
            {errors.project && (
              <span className="error-text">{errors.project}</span>
            )}
          </div>

          <div className="input-group">
            <input
              type="text"
              name="address"
              placeholder="Адрес участка"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? "error" : ""}
            />
            {errors.address && (
              <span className="error-text">{errors.address}</span>
            )}
          </div>

          <div className="input-group">
            <input
              type="tel"
              name="phone"
              placeholder="+7 (999) 000-00-00"
              value={formData.phone}
              onChange={handleChange}
              maxLength={18} // Ограничиваем длину строки с учетом символов маски
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <button
            type="submit"
            className={`cta-form ${isSubmitting ? "loading" : ""}`}
            disabled={isSubmitting}
            style={{ opacity: isSubmitting ? 0.7 : 1 }}
          >
            <label style={{ cursor: isSubmitting ? "default" : "pointer" }}>
              {isSubmitting ? "Отправка..." : "Получить расчёт"}
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

        {/* Вывод статуса ошибки или успеха под формой */}
        {status && (
          <p style={{ 
            marginTop: '20px', 
            color: status.includes('Ошибка') ? '#ff4d4f' : '#52c41a', 
            fontSize: '16px', 
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            {status}
          </p>
        )}
      </div>
    </section>
  );
}