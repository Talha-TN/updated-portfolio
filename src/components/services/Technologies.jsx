import React from "react";
import { servicesData } from "../../data/techData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Correct import

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.2, // Stagger appearance of each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Slide up from below
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Technologies = () => {
  // Create a reference for the component and check if it's in view
  const [ref, inView] = useInView({
    threshold: 0.2, // 20% of the component is visible
    triggerOnce: false, // Only trigger once when the component enters the viewport
  });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-6 justify-items-center"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Only animate when in view
    >
      {servicesData.map((data, index) => (
        <motion.div
          key={index}
          className="relative group"
          variants={itemVariants}
        >
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {data.tooltipText}
          </div>

          {/* Technology Icon */}
          <motion.img
            src={data.source}
            alt="Service Icon"
            className="w-14 h-14 rounded-full object-contain cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-neon"
            whileHover={{ scale: 1.1, rotate: 6, transition: { duration: 0.3 } }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Technologies;

//////////////
// import React from "react";
// import { servicesData } from "../../data/techData";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer"; // Correct import

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: "easeInOut",
//       staggerChildren: 0.2, // Stagger appearance of each child
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 }, // Slide up from below
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

// const Technologies = () => {
//   // Create a reference for the component and check if it's in view
//   const [ref, inView] = useInView({
//     threshold: 0.2, // 20% of the component is visible
//     triggerOnce: false, // Only trigger once when the component enters the viewport
//   });

//   return (
//     <motion.div
//       ref={ref}
//       className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6 justify-items-center"
//       variants={containerVariants}
//       initial="hidden"
//       animate={inView ? "visible" : "hidden"} // Only animate when in view
//     >
//       {servicesData.map((data, index) => (
//         <motion.div
//           key={index}
//           className="relative group flex flex-col items-center"
//           variants={itemVariants}
//         >
//           {/* Tooltip */}
//           <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//             {data.tooltipText}
//           </div>

//           {/* Technology Icon */}
//           <motion.img
//             src={data.source}
//             alt="Service Icon"
//             className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-contain cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-neon"
//             whileHover={{ scale: 1.1, rotate: 6, transition: { duration: 0.3 } }}
//           />
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export default Technologies;
