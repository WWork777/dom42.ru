import "./style.scss";
import CardProject from "@/components/CardProject/CardProject";
import projects from "@/app/projects/data/projects.json";
import Stroybat from "@/components/Home/Stroybat/Stroybat";
import Contacts from "@/components/Home/Contacts/Contacts";

export default function ProjectsPage() {
  return (
    <>
      <section className="project-page">
        <h1>Выберите свой дом</h1>

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
      <Stroybat />
      <Contacts />
    </>
  );
}
