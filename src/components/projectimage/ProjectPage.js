import React from "react";
import { useParams } from "react-router-dom";
import projectData from "../../projects.json";
import "./ProjectPage.css";

function Project() {
  const { id } = useParams();
  const project = projectData.find((project) => project.id === parseInt(id));

  return (
    <div className="project">
      <h2>{project.name}</h2>
      <img src={project.image} className="projectImage" alt={project.name} />
      <p>
        <div className="linkDiv">
        <a href={project.deployedApp} className="link" target="_blank" rel="noreferrer">
          Deployed App
        </a>
        </div>

        <div className="linkDiv">
        <a href={project.gitHub} className="link" target="_blank" rel="noreferrer">
          GitHub Repository
        </a>
        </div>
      </p>
    </div>
  );
}

export default Project;