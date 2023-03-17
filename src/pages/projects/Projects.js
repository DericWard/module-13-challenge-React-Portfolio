import React from "react";
// import { Link } from "react-router-dom"; // Import the Link component
import projectData from "../../projects.json";
import ProjectCard from "../../components/projectcard/ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="projects">
        {projectData.map((project) => (
          // <Link to={`/project/${project.id}`} key={project.id}>
            
            <ProjectCard
              id={project.id}
              name={project.name}
              image={project.image}
              deployedApp={project.deployedApp}
              gitHub={project.gitHub}
            />
          // </Link>
        ))}
      </div>
    </>
  );
}

export default Projects;

