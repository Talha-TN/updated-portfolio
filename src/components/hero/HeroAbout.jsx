import React from "react";
const HeroAbout = () => {
  return (
    <>
      <div className="flex flex-col gap-4 flex-wrap">
        <p className="text-xl text-blue-400 mb-4">Hi, my name is</p>

        <div className="w-full md:w-[500px] text-5xl md:text-3xl font-bold leading-tight ">
          <h1 className="tracking-wide">
            Talha Nawaz. <br />I create visually pleasing solutions for the web.
          </h1>
        </div>
        <p className="text-lg text-gray-400 max-w-[520px] mb-6">
          I'm a Front-End Web Developer who turns ideas into dynamic web
          experiences. With React.js for creating interactive user interfaces
          and Tailwind CSS for efficient and responsive styling, I bring designs
          to life with seamless, modern front-end solutions.
        </p>

        {/* Availability status */}
        <p className="text-lg text-blue-400 font-semibold">
          Currently available for a job & freelance
        </p>
      </div>
    </>
  );
};

export default HeroAbout;
