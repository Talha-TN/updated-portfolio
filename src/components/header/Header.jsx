
import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import resume from "../../assets/images/Talha Nawaz - resume.pdf";

const Header = () => {
  const linksStyles =
    "hover:text-blue-400 transition duration-300 text-[16px] px-2 cursor-pointer hover:underline hover:underline-offset-8";

  // Define motion variants for reusability
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Increase duration for smoothness
        ease: "easeInOut", // Ease in and out for smoother start and end
      },
    },
  };
  
  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Smooth transition for the entire nav
        ease: "easeInOut",
        staggerChildren: 0.15, // Less delay between child animations
      },
    },
  };
  
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Longer duration for each link to make it smoother
        ease: "easeInOut", // Smooth transition for each link
      },
    },
  };
  

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="mt-4 bg-gray-800 text-white py-4 shadow-lg max-w-[1080px] mx-auto flex justify-between items-center px-4"
    >
      {/* Animated heading */}
      <motion.div variants={headerVariants}>
        <h1 className="text-3xl text-blue-400 font-bold tracking-wider heading">
          Talha Nawaz
        </h1>
      </motion.div>

      {/* Animated navigation */}
      <motion.nav variants={navVariants}>
        <ul className="flex space-x-6 items-center paragraph">
          <motion.li variants={linkVariants} className={linksStyles}>
            <Link to="projects" smooth={true} duration={1200} spy={true} offset={-50}>
              Projects
            </Link>
          </motion.li>
          <motion.li variants={linkVariants} className={linksStyles}>
            <Link to="about" smooth={true} duration={900} spy={true} offset={-50}>
              About
            </Link>
          </motion.li>
          <motion.li variants={linkVariants} className={linksStyles}>
            <Link to="services" smooth={true} duration={900} spy={true} offset={-50}>
              Services
            </Link>
          </motion.li>
          <motion.li variants={linkVariants} className={linksStyles}>
            <Link to="footer" smooth={true} duration={1700} offset={-50}>
              Contact us
            </Link>
          </motion.li>

          {/* Animated resume button */}
          <motion.a
            href={resume}
            download="Talha-Nawaz-Resume.pdf"
            variants={linkVariants}
            className="border border-blue-500 p-1 px-2 text-blue-400 hover:text-gray-400 transition duration-300"
          >
            Resume
          </motion.a>
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
