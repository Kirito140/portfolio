import "../../assets/styles/Project.scss";
import { Projects } from "../../utils/types";
import { ProjectsImages } from "../Images/Images";

type EducationProps = {
  items: Projects[];
};

function Education({ items }: EducationProps) {
  return (
    <div className="projects-container" id="education">
      <h1 id="Education-Projects">Education</h1>

      <div className="projects-grid">
        {items.map((education) => (
          <div key={education.id} className="project education-card">
            <h2>{education.title}</h2>

            {education.date && <span className="education-date">{education.date}</span>}

            <p>{education.description}</p>

            {/* Affichage des images */}
            {education.images && <ProjectsImages images={education.images} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;