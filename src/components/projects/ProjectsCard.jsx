
// import React from 'react';
// import projectsData from '../../data/ProjectsData';
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// // Animation variants for each project card
// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeInOut" }
//   }
// };

// const ProjectsCard = () => {
//   return (
//     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 p-4">
//       {projectsData.map((project) => {
//         const [ref, inView] = useInView({
//           threshold: 0.1,
//           triggerOnce: true,
//         });

//         return (
//           <motion.div
//             key={project.name}
//             className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
//             variants={cardVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             ref={ref}
//           >
//             <div className="w-full h-48 bg-gray-900">
//               <img 
//                 src={project.image} 
//                 alt="project-image" 
//                 className="w-full h-full object-contain" 
//               />
//             </div>
//             <div className="p-4">
//               <div className="flex space-x-2 text-sm text-gray-400 mb-3">
//                 <p>{project.technologies.first}</p>
//                 <span>|</span>
//                 <p>{project.technologies.second}</p>
//                 <span>|</span>
//                 <p>{project.technologies.third}</p>
//               </div>
//               <div className="flex justify-between items-center mb-2">
//                 <h1 className="text-xl font-semibold text-blue-400">{project.name}</h1>
//                 <div className="flex space-x-4 text-gray-300">
//                   <a href={project.github} target="_blank" rel="noopener noreferrer">
//                     <FaGithub className="hover:text-blue-400" />
//                   </a>
//                   <a href={project.websitelink} target="_blank" rel="noopener noreferrer">
//                     <FaExternalLinkAlt className="hover:text-blue-400" />
//                   </a>
//                 </div>
//               </div>
//               <p className="text-gray-400">{project.date}</p>
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default ProjectsCard;
////////////////////
import React from 'react';
import projectsData from '../../data/ProjectsData';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants for each project card
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};

const ProjectsCard = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 p-2 lg:p-6">
      {projectsData.map((project) => {
        const [ref, inView] = useInView({
          threshold: 0.1,
          triggerOnce: true,
        });

        return (
          <motion.div
            key={project.name}
            className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            <div className="w-full h-48 md:h-56 lg:h-40 bg-gray-900 flex items-center justify-center">
              <img 
                src={project.image} 
                alt="project-image" 
                className="w-full h-full object-cover" // Changed to object-cover for better responsiveness
              />
            </div>
            <div className="p-4">
              <div className="flex flex-wrap space-x-2 text-sm text-gray-400 mb-3">
                <p>{project.technologies.first}</p>
                <span>|</span>
                <p>{project.technologies.second}</p>
                <span>|</span>
                <p>{project.technologies.third}</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-lg md:text-xl font-semibold text-blue-400">{project.name}</h1>
                <div className="flex space-x-4 text-gray-300">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-blue-400" />
                  </a>
                  <a href={project.websitelink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="hover:text-blue-400" />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 text-sm md:text-base">{project.date}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectsCard;
