import React from "react";
import { servicesData } from "../../data/techData";
const Technologies = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-6 justify-items-center">
      {servicesData.map((data, index) => (
        <div key={index} className="relative group">
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {data.tooltipText}
          </div>

          <img
            src={data.source}
            alt="Service Icon"
            className="w-14 h-14 rounded-full object-contain cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-neon"
          />
        </div>
      ))}
    </div>
  );
};

export default Technologies;
// const Technologies = ({ inView }) => {
//   return (
//     <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm list-disc pl-5">
//       {['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'].map((tech, index) => (
//         <li
//           key={tech}
//           className={`transition-opacity duration-1000 ease-in-out delay-[${(index + 1) * 100}] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//         >
//           {tech}
//         </li>
//       ))}
//     </ul>
//   );
// };
// export default Technologies