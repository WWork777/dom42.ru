"use client";

import { useState } from "react";
import Image from "next/image";
import "./Risks.scss";

export default function Risks() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  // Исправлено объявление состояния для обычного JS
  const [status, setStatus] = useState("idle");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          projectName: "Префаб-монолит (Риски)",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          setIsOpen(false);
          setStatus("idle");
          setEmail("");
        }, 2500);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="about risks">
      <Image
        src={"/Risks/img.jpg"}
        alt="Дом42 работа"
        width={1000}
        height={1000}
      />
      <div className="about-text">
        <div className="about-text-title">
          <h2>
            Главные преимущества технологии <span>«ПРЕФАБ-МОНОЛИТ»</span>
          </h2>
          <p>
            Какие 7 рисков и дополнительных расходов исключает технология
            «Префаб-монолит»
          </p>
          <p>
            Оставьте email - получите таблицу сравнения префаб-монолита с
            кирпичными и каркасными домами.
          </p>
        </div>
        <div className="advantage-block">
          <button className="cta-form" onClick={() => setIsOpen(true)}>
            <label>Получить сравнение</label>
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

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              &times;
            </button>

            {status === "success" ? (
              <div className="status-msg">
                <h3>Готово!</h3>
                <p>Таблица сравнения отправлена на ваш email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <h3>Получить сравнение</h3>
                <p>Введите ваш email, чтобы мы могли отправить вам таблицу.</p>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Отправка..." : "Получить таблицу"}
                </button>
                {status === "error" && (
                  <p className="error-text">
                    Произошла ошибка. Попробуйте позже.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
