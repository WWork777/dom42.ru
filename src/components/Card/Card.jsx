import Image from "next/image";
import "./Card.scss";
import Link from "next/link";

export default function Card() {
  return (
    <>
      <div className="preview-card">
        <div className="image-wrapper">
          <Image
            src={"/Projects/nokturn110/1.jpg"}
            width={1000}
            height={1000}
            alt="проект Дом42"
          />
        </div>
        <div className="card-info">
          <div className="project-name">
            <p>Ноктюрн 110</p>
            <Link href={""} className="link-more">
              {/* <span>Подробнее</span> */}
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
          <div className="project-info">
            <div className="project-info-card">
              <div className="icon-container">
                <Image
                  src={"/Icons/площадь.png"}
                  width={60}
                  height={60}
                  alt="проект Дом42"
                />
              </div>
              <span>110 м²</span>
            </div>
            <div className="project-info-card">
              <div className="icon-container">
                <Image
                  src={"/Icons/спальня.svg"}
                  width={60}
                  height={60}
                  alt="проект Дом42"
                />
              </div>
              <span>3</span>
            </div>
            <div className="project-info-card">
              <div className="icon-container">
                <Image
                  src={"/Icons/ванна.svg"}
                  width={60}
                  height={60}
                  alt="проект Дом42"
                />
              </div>
              <span>2</span>
            </div>
          </div>
          <span className="project-price">8 800 000 ₽</span>
        </div>
      </div>
      <div className="preview-card">
        <div className="image-wrapper">
          <Image
            src={"/Projects/nocturn90/1.jpg"}
            width={1000}
            height={1000}
            alt="проект Дом42"
          />
        </div>
        <div className="card-info">
          <div className="project-name">
            <p>Ноктюрн 90</p>
            <Link href={""} className="link-more">
              {/* <span>Подробнее</span> */}
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
          <div className="project-info">
            <div className="project-info-card">
              <div className="icon-container">
                <Image
                  src={"/Icons/площадь.png"}
                  width={60}
                  height={60}
                  alt="проект Дом42"
                />
              </div>
              <span>110 м²</span>
            </div>
            <div className="project-info-card">
              <div className="icon-container">
                <Image
                  src={"/Icons/спальня.svg"}
                  width={60}
                  height={60}
                  alt="проект Дом42"
                />
              </div>
              <span>3</span>
            </div>
            <div className="project-info-card">
              <div className="icon-container">
                <Image
                  src={"/Icons/ванна.svg"}
                  width={60}
                  height={60}
                  alt="проект Дом42"
                />
              </div>
              <span>2</span>
            </div>
          </div>
          <span className="project-price">8 800 000 ₽</span>
        </div>
      </div>
      <div className="preview-card">
        <div className="image-wrapper">
          <Image
            src={"/Projects/ballada130/1.jpg"}
            width={1000}
            height={1000}
            alt="проект Дом42"
          />
        </div>
        <div className="card-info">
          <div className="project-name">
            <p>Ноктюрн 110</p>
            <Link href={""} className="link-more">
              {/* <span>Подробнее</span> */}
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
          <div className="project-info">
            <div className="project-info-card">
              <div className="icon-container">
                <Image
                  src={"/Icons/площадь.png"}
                  width={60}
                  height={60}
                  alt="проект Дом42"
                />
              </div>
              <span>110 м²</span>
            </div>
            <div className="project-info-card">
              <div className="icon-container">
                <Image
                  src={"/Icons/спальня.svg"}
                  width={60}
                  height={60}
                  alt="проект Дом42"
                />
              </div>
              <span>3</span>
            </div>
            <div className="project-info-card">
              <div className="icon-container">
                <Image
                  src={"/Icons/ванна.svg"}
                  width={60}
                  height={60}
                  alt="проект Дом42"
                />
              </div>
              <span>2</span>
            </div>
          </div>
          <span className="project-price">8 800 000 ₽</span>
        </div>
      </div>
    </>
  );
}
