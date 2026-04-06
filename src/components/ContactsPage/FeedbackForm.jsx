"use client";
import { useState } from "react";
import styles from "./FeedbackForm.module.scss";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Функция маски телефона: +7 (999) 999-99-99
  const formatPhoneNumber = (value) => {
    const phone = value.replace(/\D/g, "");
    const size = phone.length;

    if (size === 0) return "";
    if (size <= 1) return "+7";
    if (size <= 4) return `+7 (${phone.slice(1)}`;
    if (size <= 7) return `+7 (${phone.slice(1, 4)}) ${phone.slice(4)}`;
    if (size <= 9)
      return `+7 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7)}`;
    return `+7 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7, 9)}-${phone.slice(9, 11)}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let finalValue = type === "checkbox" ? checked : value;

    if (name === "phone") {
      finalValue = formatPhoneNumber(value);
    }

    setFormData((prev) => ({ ...prev, [name]: finalValue }));

    // Снимаем ошибку при вводе
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (formData.phone.replace(/\D/g, "").length < 11) newErrors.phone = true;
    if (!formData.agreement) newErrors.agreement = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Имитация отправки
    console.log("Отправка данных:", formData);

    setTimeout(() => {
      alert("Сообщение отправлено!");
      setFormData({ name: "", phone: "", message: "", agreement: false });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className={styles.feedback}>
      <div className={styles.container}>
        <div className={styles.form_wrapper}>
          <h2 className={styles.title}>Остались вопросы? Напишите нам</h2>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className={`${styles.input} ${errors.name ? styles.error : ""}`}
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              className={`${styles.input} ${errors.phone ? styles.error : ""}`}
              value={formData.phone}
              onChange={handleChange}
              maxLength={18}
            />

            <textarea
              name="message"
              placeholder="Сообщение"
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <div
              className={`${styles.checkbox_wrapper} ${errors.agreement ? styles.error_check : ""}`}
            >
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                className={styles.checkbox}
                checked={formData.agreement}
                onChange={handleChange}
              />
              <label htmlFor="agreement">
                Согласен на обработку персональных данных
              </label>
            </div>

            <button
              type="submit"
              className={styles.button}
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? "Отправка..." : "Задать вопрос"}</span>
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
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
