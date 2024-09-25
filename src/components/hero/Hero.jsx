
import React from 'react';
import HeroAbout from './HeroAbout';
import HeroImage from './HeroImage';
import { motion } from 'framer-motion';

// Define animation variants
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      when: "beforeChildren", // Animates children after the parent is visible
      staggerChildren: 0.3, // Stagger for smoother sequence
    },
  },
};

const aboutVariants = {
  hidden: { opacity: 0, x: -100 }, // Slide in from left
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" }, // Smooth entry
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 }, // Slide in from right
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" }, // Smooth entry
  },
};

const Hero = () => {
  return (
    <motion.main
      className="text-white flex items-start justify-between max-w-[1080px] mx-auto mt-20 flex-wrap paragraph"
      variants={heroVariants} // Apply parent animation
      initial="hidden"
      animate="visible"
    >
      {/* HeroAbout section sliding in from the left */}
      <motion.div variants={aboutVariants}>
        <HeroAbout />
      </motion.div>

      {/* HeroImage section sliding in from the right */}
      <motion.div variants={imageVariants}>
        <HeroImage />
      </motion.div>
    </motion.main>
  );
};

export default Hero;
