'use client'

import Image from "next/image";
import "./Set.scss";

export default function Set() {
    return (
        <section className="about set">
                <Image src={'/Set/set.jpg'} alt="Дом42 работа" width={1000} height={1000} />
            <div className="about-text">
                <div className="about-text-title">
                    <h2>Что входит в <span>комплект дома</span> заводской готовности.</h2>

                    <p>
                        Базовый комплект за 80 000 ₽/м²
                    </p>
                </div>
                <div className="advantage-block">
                    <button className="cta-form">
                        <label>Получить ЧЕК-ЛИСТ</label>
                        <div className="orange-arrow">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25 5.5L13.75 11L8.25 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}