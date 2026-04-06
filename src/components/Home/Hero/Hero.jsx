import Image from "next/image";
import "./hero.scss";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <Image
          className="hero-img"
          src={"/Hero/hero.jpg"}
          width={2000}
          height={1500}
          alt="Дом42 купить дом"
        />
        <div className="hero-content">
          <div className="slogan">
            <h1>
              Новый стандарт <br></br>ИЖС в Кузбассе
            </h1>
            <p>Надёжность, комфорт, энергоэффективность</p>
            <div className="hero-adv">
              <div>80 000 ₽/м²</div>
              <div className="hero-adv-line"></div>
              <div>80 дней</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
