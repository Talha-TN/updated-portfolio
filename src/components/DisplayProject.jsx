import React, { useContext } from "react";
import { myProjectDataContext } from "./MyProjects";
const DisplayProject = () => {
  const projectList = useContext(myProjectDataContext);
  return (
    <div className="project">
      {projectList.map((project,index) => {
        return (
          <div key={index} className="display-projects" >
            <div className="card-body">
              <img className="project-logo" src={project.logo} alt="project-logo" />
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}.</p>
              <a href={project.link} className="btn btn-primary" target="_blank">
                view project
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayProject;
