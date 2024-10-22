
// import React from 'react';
// import HeroAbout from './HeroAbout';
// import HeroImage from './HeroImage';
// import { motion } from 'framer-motion';
// import "./hero-responsive.css"

// // Define animation variants
// const heroVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: "easeInOut",
//       when: "beforeChildren", // Animates children after the parent is visible
//       staggerChildren: 0.3, // Stagger for smoother sequence
//     },
//   },
// };

// const aboutVariants = {
//   hidden: { opacity: 0, x: -100 }, // Slide in from left
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.8, ease: "easeInOut" }, // Smooth entry
//   },
// };

// const imageVariants = {
//   hidden: { opacity: 0, x: 100 }, // Slide in from right
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.8, ease: "easeInOut" }, // Smooth entry
//   },
// };

// const Hero = () => {
//   return (
//     <motion.main
//       className="flex flex-col md:flex-row lg:mt-6 md:items-center lg:justify-around]"
//       variants={heroVariants} // Apply parent animation
//       initial="hidden"
//       animate="visible"
//     >
//       {/* HeroAbout section sliding in from the left */}
//       <motion.div variants={aboutVariants}>
//         <HeroAbout />
//       </motion.div>

//       {/* HeroImage section sliding in from the right */}
//       <motion.div variants={imageVariants} >
//         <HeroImage  />
//       </motion.div>
//     </motion.main>
//   );
// };

// export default Hero;
//////////////////
import React from 'react';
import HeroAbout from './HeroAbout';
import HeroImage from './HeroImage';
import { motion } from 'framer-motion';
import './hero-responsive.css';

// Define animation variants
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      when: 'beforeChildren', // Animates children after the parent is visible
      staggerChildren: 0.3, // Stagger for smoother sequence
    },
  },
};

const aboutVariants = {
  hidden: { opacity: 0, x: -100 }, // Slide in from left
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeInOut' }, // Smooth entry
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 }, // Slide in from right
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeInOut' }, // Smooth entry
  },
};

const Hero = () => {
  return (
    <motion.main
      className="flex flex-col  items-center justify-between px-4 py-8 sm:flex-col sm:px-6 md:flex-row md:px-8 lg:items-center lg:justify-around"
      variants={heroVariants} // Apply parent animation
      initial="hidden"
      animate="visible"
    >
      {/* HeroAbout section sliding in from the left */}
      <motion.div variants={aboutVariants} className="w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
        <HeroAbout />
      </motion.div>

      {/* HeroImage section sliding in from the right */}
      <motion.div
        variants={imageVariants}
        className="w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0"
      >
        <HeroImage />
      </motion.div>
    </motion.main>
  );
};

export default Hero;
