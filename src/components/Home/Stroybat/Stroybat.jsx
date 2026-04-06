"use client";
import Image from "next/image";
import "./Stroybat.scss";
import Link from "next/link";

export default function Stroybat() {
  return (
    <section className="stroybat">
      <div className="stroybat__wrapper">
        <div className="stroybat__image">
          <Image
            src="/Stroybat/stroy.jpg"
            alt="stroybat"
            width={1000}
            height={800}
          />
        </div>

        <div className="stroybat__content">
          <p className="stroybat__label">Социально ориентированная компания</p>

          <h2 className="stroybat__title">
            <span>СТРОЙБАТ 42</span>
          </h2>

          <p className="stroybat__text">
            Мы создаём <span>рабочие места</span>, проводим обучение и
            стажировку для ветеранов СВО.
          </p>

          <p className="stroybat__text">
            Кроме того, 2% от стоимости каждого дома мы направляем для адресной
            помощи инвалидам боевых действий.
          </p>

          <Link href={"/dlya-veteranov-svo"} className="cta-form">
            <label>Подробнее</label>
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
          </Link>
        </div>
      </div>
    </section>
  );
}
