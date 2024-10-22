import React from "react";

const HeroAbout = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 ">
        <p className="text-xl text-blue-400 mb-4 myname-responsive lg:mt-4">Hi, my name is</p>
        <div className="text-2xl text-center">
          <h1 className="para-responsive tracking-wide text-gray-200">
            Talha Nawaz. <br />I create visually pleasing solutions for the web.
          </h1>
        </div>
        <p className="  text-lg text-gray-400 mb-6 ml-6 ">
          I'm a Front-End Web Developer who turns ideas into dynamic web
          experiences. With React.js for creating interactive user interfaces
          and Tailwind CSS for efficient and responsive styling, I bring designs
          to life with seamless, modern front-end solutions.
        </p>

        {/* Availability status */}
        <p className="freelance text-lg text-blue-400 font-semibold">
          Currently available for a job & freelance
        </p>
      </div>
    </>
  );
};

export default HeroAbout;

// import React from "react";

// const HeroAbout = () => {
//   return (
//     <div className="flex flex-col gap-4 flex-wrap items-center text-center">
//       <p className="text-lg text-blue-400 mb-2">Hi, my name is</p>

//       <div className="w-full md:w-[500px] text-2xl sm:text-4xl font-bold leading-tight">
//         <h1 className="tracking-wide text-gray-200">
//           Talha Nawaz. <br />I create visually pleasing solutions for the web.
//         </h1>
//       </div>
//       <p className="text-[14px]  md:text-lg text-gray-400 max-w-[320px] mb-4 mt-2">
//         I'm a Front-End Web Developer who turns ideas into dynamic web
//         experiences. With React.js for creating interactive user interfaces
//         and Tailwind CSS for efficient and responsive styling, I bring designs
//         to life with seamless, modern front-end solutions.
//       </p>

//       {/* Availability status */}
//       <p className="text-sm md:text-lg text-blue-400 font-semibold">
//         Currently available for a job & freelance
//       </p>
//     </div>
//   );
// };

// export default HeroAbout;
