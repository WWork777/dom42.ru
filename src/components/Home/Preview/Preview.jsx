import Card from "@/components/Card/Card";
import Link from "next/link";
import "./Preview.scss";
import projects from "@/app/projects/data/projects.json";
import CardProject from "@/components/CardProject/CardProject";

export default function Preview() {
  return (
    <>
      <section className="preview">
        <div className="preview-title">
          <h2>Выберите свой дом</h2>

          <Link href={"https://arhitek42.ru/"} target="_blank" className="cta-form">
            <label>Нужен индивидуальный проект?</label>
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
        
        <div className="projects-container">
          {projects.map((project) => (
            <CardProject
              key={project.slug}
              name={project.name}
              slug={project.slug}
              price={project.price}
              area={project.characteristics.area}
              bedrooms={project.characteristics.bedrooms}
              bathrooms={project.characteristics.bathrooms}
              image={project.images?.[0]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
