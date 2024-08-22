import React, { createContext } from "react";
import DisplayProject from "./DisplayProject";
import "../css/myproject.css";
import { projectList } from "./ProjectsData";
const myProjectDataContext = createContext();
const MyProjects = () => {
  return (
    <>
      <div className="my-projects">
        <h1 className=" services-heading">My Projects</h1>
        <myProjectDataContext.Provider value={projectList}>
          <DisplayProject />
        </myProjectDataContext.Provider>
      </div>
    </>
  );
};

export default MyProjects;
export {myProjectDataContext};
