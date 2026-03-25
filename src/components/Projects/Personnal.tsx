import React from "react";
import "../../assets/styles/Project.scss";
import { Projects } from "../../utils/types";
import { ProjectsImages } from "../Images/Images";

type PersonalProps = {
  items: Projects[];
};

function Personal({ items }: PersonalProps) {
  return (
    <div className="projects-container" id="projects">
      <h1 id="Personal-Projects">Personal Projects</h1>

      <div className="projects-grid">
        {items.map((project) => (
          <div key={project.id} className="project">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h2>{project.title}</h2>
              </a>
            ) : (
              <h2>{project.title}</h2>
            )}

            <p>{project.description}</p>

            {/* Affichage des images */}
            {project.images && <ProjectsImages images={project.images} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personal;