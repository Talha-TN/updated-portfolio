import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesParas = () => {
  const paragraphs = [
    "Building responsive static/dynamic websites using Next.js",
    "Building responsive Single Page Apps in React.js",
    "Converting Figma designs into Webpages",
  ];

  return (
    <div className="space-y-4 text-gray-300">
      {paragraphs.map((text, index) => {
        const [ref, inView] = useInView({
          threshold: 0.1,
          triggerOnce: false,
        });

        return (
          <motion.p
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible state
            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index
            className="leading-relaxed"
          >
            {text}
          </motion.p>
        );
      })}
    </div>
  );
};

export default ServicesParas;
///////////////
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const ServicesParas = () => {
//   const paragraphs = [
//     "Building responsive static/dynamic websites using Next.js",
//     "Building responsive Single Page Apps in React.js",
//     "Converting Figma designs into Webpages",
//   ];

//   return (
//     <div className="space-y-4 text-gray-300 w-[360px]">
//       {paragraphs.map((text, index) => {
//         const [ref, inView] = useInView({
//           threshold: 0.1,
//           triggerOnce: false,
//         });

//         return (
//           <motion.p
//             key={index}
//             ref={ref}
//             initial={{ opacity: 0, y: 20 }} // Initial state
//             animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible state
//             transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index
//             className="leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl" // Responsive text sizes
//           >
//             {text}
//           </motion.p>
//         );
//       })}
//     </div>
//   );
// };

// export default ServicesParas;
