
// import React from "react";
// import { FaLinkedin } from "react-icons/fa";
// import { IoMail } from "react-icons/io5";
// import { FaGithub } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// // Animation variants for the footer
// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeInOut" }
//   }
// };

// const iconVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { 
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.3, ease: "easeInOut" }
//   }
// };

// const Footer = () => {
//   const spanColor = "text-2xl text-gray-400 hover:text-blue-400 cursor-pointer";
//   const [ref, inView] = useInView({
//     threshold: 0.2,
//     triggerOnce: false,
//   });

//   return (
//     <motion.div
//       id="footer"
//       className="text-white max-w-[500px] m-auto mt-20 paragraph"
//       ref={ref}
//       variants={containerVariants}
//       initial="hidden"
//       animate={inView ? "visible" : "hidden"}
//     >
//       <div>
//         <h1 className="text-center text-blue-400 font-semibold text-2xl">
//           Get in Touch
//         </h1>
//         <p className="text-[14px] text-gray-400 mt-3">
//           "Please feel free to reach out to me through the accounts I've listed
//           in my portfolio, or you can also send me an email at the address
//           provided. I'm excited to connect and collaborate on some amazing
//           projects together!"
//         </p>
//       </div>
//       <div className="flex justify-center items-center gap-3 mt-4 pb-10">
//         <motion.span className={spanColor} variants={iconVariants}>
//           <a
//             href="https://www.linkedin.com/in/talha-nawaz-5421931a4/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin />
//           </a>
//         </motion.span>
//         <motion.span className={spanColor} variants={iconVariants}>
//           <a
//             href="mailto:nawazt964@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <IoMail />
//           </a>
//         </motion.span>
//         <motion.span className={spanColor} variants={iconVariants}>
//           <a
//             href="https://github.com/Talha-TN"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub />
//           </a>
//         </motion.span>
//       </div>
//     </motion.div>
//   );
// };

// export default Footer;
///////
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants for the footer
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const Footer = () => {
  const spanColor = "text-2xl text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300";
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      id="footer"
      className="text-white max-w-[600px] mx-auto mt-20 px-4 sm:px-6 lg:px-8 paragraph"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div>
        <h1 className="text-center text-blue-400 font-semibold text-2xl sm:text-xl">
          Get in Touch
        </h1>
        <p className="pb-6 text-[14px] sm:text-sm text-gray-400 mt-3 text-center">
          "Please feel free to reach out to me through the accounts I've listed
          in my portfolio, or you can also send me an email at the address
          provided. I'm excited to connect and collaborate on some amazing
          projects together!"
        </p>
      </div>
      <div className="flex justify-center items-center gap-5 mt-4 pb-10 flex-wrap">
        <motion.span className={spanColor} variants={iconVariants}>
          <a
            href="https://www.linkedin.com/in/talha-nawaz-5421931a4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </motion.span>
        <motion.span className={spanColor} variants={iconVariants}>
          <a
            href="mailto:nawazt964@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMail />
          </a>
        </motion.span>
        <motion.span className={spanColor} variants={iconVariants}>
          <a
            href="https://github.com/Talha-TN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Footer;
