
// import React from "react";
// import { Link } from "react-scroll";
// import { motion } from "framer-motion";
// import resume from "../../assets/images/Talha Nawaz - resume.pdf";
// import { toast } from "react-toastify";
// import { useEffect } from "react";
// import "./header-responsive.css"

// const Header = () => {
//   useEffect(()=>{
//     toast.success("🙋‍♂️");
//   },[])
//   const linksStyles =
//     "hover:text-blue-400 transition duration-300 text-[16px] px-2 cursor-pointer hover:underline hover:underline-offset-8";

//   // Define motion variants for reusability
//   const headerVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8, // Increase duration for smoothness
//         ease: "easeInOut", // Ease in and out for smoother start and end
//       },
//     },
//   };
  
//   const navVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8, // Smooth transition for the entire nav
//         ease: "easeInOut",
//         staggerChildren: 0.15, // Less delay between child animations
//       },
//     },
//   };
  
//   const linkVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5, // Longer duration for each link to make it smoother
//         ease: "easeInOut", // Smooth transition for each link
//       },
//     },
//   };
  

//   return (
//     <motion.header
//       initial="hidden"
//       animate="visible"
//       variants={headerVariants}
//       className="mt-4 bg-gray-800 text-white py-4 shadow-lg max-w-[1080px] mx-auto flex justify-between items-center px-4 flex-wrap"
//     >
//       {/* Animated heading */}
//       <motion.div variants={headerVariants}>
//         <h1 className="text-3xl text-blue-400 font-bold tracking-wider heading">
//           Talha Nawaz
//         </h1>
//       </motion.div>

//       {/* Animated navigation */}
//       <motion.nav variants={navVariants}>
//         <ul className="flex space-x-6 items-center paragraph flex-wrap responsive">
//           <motion.li variants={linkVariants} className={linksStyles}>
//             <Link to="projects" smooth={true} duration={1200} spy={true} offset={-50}>
//               Projects
//             </Link>
//           </motion.li>
//           <motion.li variants={linkVariants} className={linksStyles}>
//             <Link to="about" smooth={true} duration={900} spy={true} offset={-50}>
//               About
//             </Link>
//           </motion.li>
//           <motion.li variants={linkVariants} className={linksStyles}>
//             <Link to="services" smooth={true} duration={900} spy={true} offset={-50}>
//               Services
//             </Link>
//           </motion.li>
//           <motion.li variants={linkVariants} className={linksStyles}>
//             <Link to="footer" smooth={true} duration={1700} offset={-50}>
//               Contact us
//             </Link>
//           </motion.li>

//           {/* Animated resume button */}
//           <motion.a
//             href={resume}
//             download="Talha-Nawaz-Resume.pdf"
//             variants={linkVariants}
//             className="border border-blue-500 p-1 px-2 text-blue-400 hover:text-gray-400 transition duration-300"
//           >
//             Resume
//           </motion.a>
//         </ul>
//       </motion.nav>
//     </motion.header>
//   );
// };

// export default Header;
/////////////////////////
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import resume from "../../assets/images/Talha Nawaz - resume.pdf";
import { toast } from "react-toastify";
import "./header-responsive.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navbar visibility
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    toast.success("🙋‍♂️");
  }, []);

  const linksStyles =
    "hover:text-blue-400 transition duration-300 text-[16px] px-2 cursor-pointer hover:underline hover:underline-offset-8";

  // Define motion variants for reusability
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="mt-4 ml-12 bg-gray-800 text-white py-4 shadow-lg max-w-[1080px] mx-auto flex justify-between items-center px-4 flex-wrap relative"
    >
      {/* Logo and Title */}
      <motion.div variants={headerVariants}>
        <h1 className="text-3xl text-blue-400 font-bold tracking-wider heading">
          Talha Nawaz
        </h1>
      </motion.div>

      {/* Mobile Toggle Button */}
      <button
        className="block lg:hidden text-blue-400"
        onClick={toggleNavbar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Navbar Links for Desktop */}
      <motion.nav className="hidden lg:block" variants={headerVariants}>
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

      {/* Responsive Navbar for Mobile */}
      {isOpen && (
        <motion.nav
          className="lg:hidden w-full mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ul className="flex  space-y-4 justify-center items-center">
            <li className={`${linksStyles} mt-4`}>
              <Link
                to="projects"
                smooth={true}
                duration={1200}
                spy={true}
                offset={-50}
                onClick={toggleNavbar}
              >
                Projects
              </Link>
            </li>
            <li className={linksStyles}>
              <Link
                to="about"
                smooth={true}
                duration={900}
                spy={true}
                offset={-50}
                onClick={toggleNavbar}
              >
                About
              </Link>
            </li>
            <li className={linksStyles}>
              <Link
                to="services"
                smooth={true}
                duration={900}
                spy={true}
                offset={-50}
                onClick={toggleNavbar}
              >
                Services
              </Link>
            </li>
            <li className={linksStyles}>
              <Link
                to="footer"
                smooth={true}
                duration={1700}
                offset={-50}
                onClick={toggleNavbar}
              >
                Contact us
              </Link>
            </li>
            <a
              href={resume}
              download="Talha-Nawaz-Resume.pdf"
              className="border border-blue-500 p-1 px-2 ml-1 text-blue-400 hover:text-gray-400 transition duration-300"
              onClick={toggleNavbar}
            >
              Resumeee
            </a>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;

