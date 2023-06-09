import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <>
    <div className="card">
      <div className="img-container">
      <Link to={`/project/${props.id}`}>
        <img alt={props.name} src={props.image} />
      </Link>
      </div>

      <div className="content">
        <ul  className="listContent">
          <li>
            <strong>Project:</strong> {props.name}
          </li>
          <li>
            <strong>Live:</strong> <a href={props.deployedApp} target="_blank" rel="noreferrer">Deployed app</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href={props.gitHub} target="_blank" rel="noreferrer">GitHub for this app</a>
          </li>
        </ul>
      </div>

    </div>
  </>
  );
};

export default ProjectCard;