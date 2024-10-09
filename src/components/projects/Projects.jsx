
// import React from 'react';
// import ProjectsCard from './ProjectsCard';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// // Animation Variants for the container and children
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: 'easeInOut',
//       staggerChildren: 0.3, // Stagger effect for each child element
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 }, // Initially hidden and below the screen
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.5, ease: 'easeOut' },
//   },
// };

// const Projects = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.2, // Triggers when 20% of the element is visible
//     triggerOnce: false, // Trigger only once
//   });

//   return (
//     <motion.div
//       id="projects"
//       ref={ref}
//       className=" max-w-[1080px] mx-auto py-16 px-4 sm:px-6 lg:px-8 paragraph"
//       variants={containerVariants}
//       initial="hidden"
//       animate={inView ? 'visible' : 'hidden'}
//     >
//       <motion.div
//         className="max-w-7xl mx-auto text-center"
//         variants={itemVariants}
//       >
//         <h2 className="text-2xl font-semibold text-blue-400 ">
//           My Projects
//         </h2>
//       </motion.div>

//       <motion.div className="mt-12" variants={itemVariants}>
//         <ProjectsCard />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Projects;

/////////////
import React from 'react';
import ProjectsCard from './ProjectsCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation Variants for the container and children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      staggerChildren: 0.3, // Stagger effect for each child element
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Initially hidden and below the screen
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2, // Triggers when 20% of the element is visible
    triggerOnce: false, // Trigger only once
  });

  return (
    <motion.div
      id="projects"
      ref={ref}
      className="max-w-[1080px] mx-auto py-10 px-4 sm:px-6 lg:px-8 paragraph"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={itemVariants}
      >
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-400">
          My Projects
        </h2>
      </motion.div>

      <motion.div className="mt-12" variants={itemVariants}>
        <ProjectsCard />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
