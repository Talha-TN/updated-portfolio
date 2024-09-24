// import React from 'react';
// import projectsData from '../../data/ProjectsData';
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// const ProjectsCard = () => {
//   return (
//     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 p-4">
//       {projectsData.map((project) => (
//         <div key={project.name} className=" rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
//           <img src={project.image} alt="project-image" className="w-full h-48 object-cover" />
//           <div className="p-4">
//             <div className="flex space-x-2 text-sm text-gray-400 mb-3">
//               <p>{project.technologies.first}</p>
//               <span>|</span>
//               <p>{project.technologies.second}</p>
//               <span>|</span>
//               <p>{project.technologies.third}</p>
//             </div>
//             <div className="flex justify-between items-center mb-2">
//               <h1 className="text-xl font-semibold text-white">{project.name}</h1>
//               <div className="flex space-x-4 text-gray-300">
//                 <a href={project.github} target="_blank" rel="noopener noreferrer">
//                   <FaGithub className="hover:text-white" />
//                 </a>
//                 <a href={project.websitelink} target="_blank" rel="noopener noreferrer">
//                   <FaExternalLinkAlt className="hover:text-white" />
//                 </a>
//               </div>
//             </div>
//             <p className="text-gray-400">{project.date}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProjectsCard;


import React from 'react';
import projectsData from '../../data/ProjectsData';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsCard = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 p-4">
      {projectsData.map((project) => (
        <div key={project.name} className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ]  ">
          <div className="w-full h-48 bg-gray-900">
            <img 
              src={project.image} 
              alt="project-image" 
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="p-4">
            <div className="flex space-x-2 text-sm text-gray-400 mb-3">
              <p>{project.technologies.first}</p>
              <span>|</span>
              <p>{project.technologies.second}</p>
              <span>|</span>
              <p>{project.technologies.third}</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-xl font-semibold text-blue-400">{project.name}</h1>
              <div className="flex space-x-4 text-gray-300">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:text-blue-400" />
                </a>
                <a href={project.websitelink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="hover:text-blue-400" />
                </a>
              </div>
            </div>
            <p className="text-gray-400">{project.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCard;