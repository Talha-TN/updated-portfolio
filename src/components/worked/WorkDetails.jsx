
// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// // Animation Variants for the container and items
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { 
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: 'easeInOut',
//       staggerChildren: 0.2, // Stagger effect for each child element
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 }, // Initially hidden and below the screen
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.5, ease: 'easeOut' },
//   },
// };

// const WorkDetails = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.2, // Triggers when 20% of the element is visible
//     triggerOnce: false, // Trigger only once
//   });

//   return (
//     <motion.div
//       ref={ref}
//       className="flex flex-col text-gray-400 flex-wrap"
//       variants={containerVariants}
//       initial="hidden"
//       animate={inView ? 'visible' : 'hidden'}
//     >
//       <motion.div className="max-w-[450px]" variants={itemVariants}>
//         <h1 className="text-blue-400">
//           Web Development Intern:
//           <span className="text-blue-400 hover:text-gray-400 ml-2">
//             <a href="https://www.linkedin.com/company/codsoft/posts/?feedView=all" target="_blank" rel="noopener noreferrer">Codesoft</a>
//           </span>
//         </h1>
//         <p className="text-[14px] mt-1 leading-relaxed">
//           "During my virtual internship at CodeSoft, I gained hands-on
//           experience in web development by working on multiple projects
//           utilizing HTML, CSS, and JavaScript. This opportunity allowed me to
//           enhance my technical skills and apply them in real-world scenarios,
//           preparing me for future challenges in the field."
//         </p>
//       </motion.div>

//       <motion.div className="max-w-[450px] mt-4" variants={itemVariants}>
//         <h1 className="text-blue-400">
//           React JS Intern:
//           <span className="text-blue-400 hover:text-gray-400 ml-2 text-md">
//             <a href="https://www.linkedin.com/company/web-evolution-company/mycompany/" target="_blank" rel="noopener noreferrer">Web Evolution</a>
//           </span>
//         </h1>
//         <p className="text-[14px] mt-1 leading-relaxed">
//           "I am currently completing a React JS internship at Web Evolution,
//           where I am working on several projects and gaining valuable experience
//           in frontend technologies such as HTML, CSS, JavaScript, React JS,
//           Tailwind CSS, React Router, and Redux."
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default WorkDetails;
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation Variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      staggerChildren: 0.2, // Stagger effect for each child element
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Initially hidden and below the screen
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const WorkDetails = () => {
  const [ref, inView] = useInView({
    threshold: 0.2, // Triggers when 20% of the element is visible
    triggerOnce: true, // Trigger only once
  });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col text-gray-400 flex-wrap"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.div className="max-w-[350px] mx-auto" variants={itemVariants}>
        <h1 className="text-blue-400 text-lg sm:text-xl lg:text-md">
          Web Development Intern:
          <span className="text-blue-400 hover:text-gray-400 ml-2">
            <a href="https://www.linkedin.com/company/codsoft/posts/?feedView=all" target="_blank" rel="noopener noreferrer">Codesoft</a>
          </span>
        </h1>
        <p className="text-[14px] sm:text-base mt-1 leading-relaxed lg:text-sm">
          "During my virtual internship at CodeSoft, I gained hands-on
          experience in web development by working on multiple projects
          utilizing HTML, CSS, and JavaScript. This opportunity allowed me to
          enhance my technical skills and apply them in real-world scenarios,
          preparing me for future challenges in the field."
        </p>
      </motion.div>

      <motion.div className="max-w-[350px] mx-auto mt-4" variants={itemVariants}>
        <h1 className="text-blue-400 text-lg sm:text-xl">
          React JS Intern:
          <span className="text-blue-400 hover:text-gray-400 ml-2 text-md">
            <a href="https://www.linkedin.com/company/web-evolution-company/mycompany/" target="_blank" rel="noopener noreferrer">Web Evolution</a>
          </span>
        </h1>
        <p className="text-[14px] sm:text-base mt-1 leading-relaxed lg:text-sm">
          "I am currently completing a React JS internship at Web Evolution,
          where I am working on several projects and gaining valuable experience
          in frontend technologies such as HTML, CSS, JavaScript, React JS,
          Tailwind CSS, React Router, and Redux."
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WorkDetails;
