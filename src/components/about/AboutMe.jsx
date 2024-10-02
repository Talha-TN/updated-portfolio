
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Define motion variants for reusability
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="transition-all duration-1500"
      >
        {/* Paragraph with motion */}
        <motion.p
          variants={textVariants}
          className="text-sm leading-relaxed text-gray-400 mb-4 w-[600px]"
        >
          Hi, I am Talha, a recent graduate with a BS in Software Engineering
          from Lahore Garrison University. I’m passionate about full-stack web
          development and skilled in using Next.js for both front-end and
          back-end solutions. My expertise extends to Node.js and Express.js for
          robust server-side development, with MongoDB and PostgreSQL handling
          diverse data needs. I focus on creating dynamic, responsive, and
          visually engaging web applications, and am proficient in JavaScript
          (ES6), CSS3, and Tailwind CSS. Additionally, I leverage Firebase for
          real-time functionalities and Git for effective project management and
          collaboration.
        </motion.p>

        {/* Subheading with motion */}
        <motion.p
          variants={textVariants}
          className="text-sm font-semibold mb-2 text-gray-400"
        >
          Here are a few technologies I’ve been working with recently:
        </motion.p>

        {/* List of technologies with motion */}
        <motion.ul
          className="grid grid-cols-2 gap-2 text-gray-300 text-sm list-disc pl-5"
          variants={containerVariants}
        >
          {[
            "Next.js",
            "React.js",
            "Tailwind CSS",
            "PostgreSQL",
            "Node.js",
            "Express.js",
            "MongoDB",
            "TypeScript"
          ].map((tech, index) => (
            <motion.li
              key={tech}
              variants={listItemVariants}
              className="opacity-0"
            >
              {tech}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default AboutMe;
// ///////////////
// import React from "react";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

// const AboutMe = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: false,
//   });

//   // Define motion variants for reusability
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.3 },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1 } },
//   };

//   const listItemVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <section className="text-white">
//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//         variants={containerVariants}
//         className="transition-all duration-1500"
//       >
//         {/* Paragraph with motion */}
//         <motion.p
//           variants={textVariants}
//           className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400 mb-4 max-w-[360px] mx-auto"
//         >
//           Hi, I am Talha, a recent graduate with a BS in Software Engineering
//           from Lahore Garrison University. I’m passionate about full-stack web
//           development and skilled in using Next.js for both front-end and
//           back-end solutions. My expertise extends to Node.js and Express.js for
//           robust server-side development, with MongoDB and PostgreSQL handling
//           diverse data needs. I focus on creating dynamic, responsive, and
//           visually engaging web applications, and am proficient in JavaScript
//           (ES6), CSS3, and Tailwind CSS. Additionally, I leverage Firebase for
//           real-time functionalities and Git for effective project management and
//           collaboration.
//         </motion.p>

//         {/* Subheading with motion */}
//         <motion.p
//           variants={textVariants}
//           className="text-sm sm:text-base font-semibold mb-2 text-gray-400 max-w-[360px]"
//         >
//           Here are a few technologies I’ve been working with recently:
//         </motion.p>

//         {/* List of technologies with motion */}
//         <motion.ul
//           className="grid grid-cols-2 mt-2 sm:grid-cols-2 gap-2 text-gray-300 text-sm list-disc pl-5"
//           variants={containerVariants}
//         >
//           {[
//             "Next.js ",
//             "React.js",
//             "Tailwind CSS",
//             "PostgreSQL",
//             "Node.js",
//             "Express.js",
//             "MongoDB",
//             "TypeScript"
//           ].map((tech) => (
//             <motion.li
//               key={tech}
//               variants={listItemVariants}
//               className="opacity-0"
//             >
//               {tech}
//             </motion.li>
//           ))}
//         </motion.ul>
//       </motion.div>
//     </section>
//   );
// };

// export default AboutMe;
