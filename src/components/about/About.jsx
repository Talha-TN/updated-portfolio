
import React from 'react';
import AboutMe from './AboutMe';
import AboutMeImage from './AboutMeImage';
const About = () => {
  return (
    <>
    <h1 id="about" className='text-blue-400 text-2xl text-center mt-[100px] paragraph'>About me</h1>
    <section className="flex flex-col md:flex-row items-center md:items-center justify-between text-white  md:space-y-0 md:space-x-10 max-w-[1080px] mx-auto paragraph ">
      
      <AboutMe />
      <AboutMeImage />
    </section>
    </>
  );
};

export default About;
