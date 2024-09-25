// import React from "react";

// const AboutMe = () => {
//   return (
//     <section className="max-w-[1080px] mx-auto  bg-gray-800 text-white py-12 px-8 md:px-16">
//       <div className="container mx-auto max-w-4xl">
//         <h2 className="text-4xl font-bold text-white mb-6">
//           About Me
//         </h2>

//         <p className="text-lg leading-relaxed text-gray-300 mb-6">
//           Hi, I am Ahsan Khalid, a recent graduate with a BS in Software Engineering from
//           Szabist Islamabad - Pakistan. I’m passionate about full-stack web development and
//           skilled in using Next.js for both front-end and back-end solutions. My expertise
//           extends to Node.js and Express.js for robust server-side development, with MongoDB
//           and PostgreSQL handling diverse data needs. I focus on creating dynamic, responsive,
//           and visually engaging web applications, and am proficient in JavaScript (ES6), CSS3,
//           and Tailwind CSS. Additionally, I leverage Firebase for real-time functionalities and
//           Git for effective project management and collaboration. Dedicated to user-centered
//           design, I continually explore new technologies and trends to enhance my craft.
//         </p>

//         <p className="text-xl font-semibold mb-4 text-white">
//           Here are a few technologies I’ve been working with recently:
//         </p>

//         <ul className="grid grid-cols-2 gap-4 text-gray-300 text-lg list-disc pl-5">
//           <li>Next.js / TypeScript</li>
//           <li>React.js</li>
//           <li>Tailwind CSS</li>
//           <li>PostgreSQL</li>
//           <li>Node.js</li>
//           <li>Express.js</li>
//           <li>MongoDB</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

import React from "react";

const AboutMe = () => {
  return (
    <section className="text-white">
        
      <div>
        <p className="text-sm leading-relaxed text-gray-400 mb-4 w-[600px]">
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
        </p>

        <p className="text-sm font-semibold mb-2 text-gray-400">
          Here are a few technologies I’ve been working with recently:
        </p>

        <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm list-disc pl-5">
          <li>Next.js / TypeScript</li>
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>PostgreSQL</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
