import Card from "@/components/Card/Card";
import "./Preview.scss";
import projects from "@/app/projects/data/projects.json";
import CardProject from "@/components/CardProject/CardProject";

export default function Preview() {
  return (
    <>
      <section className="preview">
        <h2>Выберите свой дом</h2>
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
