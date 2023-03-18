import React from "react";
import projectData from "../../projects.json";
import ProjectCard from "../../components/projectcard/ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="projects">
        {projectData.map((project) => (
            
            <ProjectCard
              id={project.id}
              name={project.name}
              image={project.image}
              deployedApp={project.deployedApp}
              gitHub={project.gitHub}
            />
        ))}
      </div>
    </>
  );
}

export default Projects;

