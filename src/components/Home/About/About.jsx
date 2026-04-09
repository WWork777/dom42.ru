'use client'

import Image from "next/image";
import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <div className="video-container">
        <iframe
          loading="lazy"
          width="720"
          height="405"
          src="https://rutube.ru/play/embed/167ccb0b9d39728643ac8831a9acd16b/?skinColor=F07E00"
          style={{ border: "none" }}
          allow="clipboard-write; autoplay"
          allowFullScreen
        ></iframe>
      </div>
      <div className="about-text">
        <div className="about-text-title">
        <h2>
          <span>Префаб-монолит.</span>
          <br />
          Подробности и детали технологии.
        </h2>

        <p>
          Смотрите серию коротких видеороликов. Подписывайтесь на наши
          социальные сети, чтобы не пропустить новости
        </p>
        </div>
        <div className="advantage-block">
          <a className="link-advantage more-videos" href="https://rutube.ru/channel/27042220/">
            Больше видео
          </a>

          <a className="link-advantage" href="https://rutube.ru/channel/27042220/">
            <Image
              src="/Icons/рутуб.svg"
              alt="rutube dom42"
              width={50}
              height={50}
            />
          </a>

          <a className="link-advantage" href="">
            <Image
              src="/Icons/дзен.svg"
              alt="dzen dom42"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
    </section>
  );
}