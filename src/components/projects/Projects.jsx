
import React from 'react';
import ProjectsCard from './ProjectsCard';
const Projects = () => {
  return (
    <div className=" max-w-[1080px] mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-400 sm:text-4xl">
          My Projects
        </h2>
      </div>
      <div className="mt-12 ">
        <ProjectsCard />
      </div>
    </div>
  );
};

export default Projects;
