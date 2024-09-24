// import React from 'react'
// import AboutMe from './AboutMe'
// import AboutMeImage from './AboutMeImage'
// const About = () => {
//   return (
//     <section className='text-white flex  items-start max-w-[1300px]   flex-wrap'>
//     <AboutMe/>
//     <AboutMeImage/>
//     </section>
//   )
// }

// export default About
import React from 'react';
import AboutMe from './AboutMe';
import AboutMeImage from './AboutMeImage';

const About = () => {
  return (
    <>
    <h1 className='text-blue-400 text-2xl text-center mt-[100px]'>About me</h1>
    <section className="flex flex-col md:flex-row items-center md:items-center justify-between text-white  md:space-y-0 md:space-x-10 max-w-[1080px] mx-auto  ">
      
      <AboutMe />
      <AboutMeImage />
    </section>
    </>
  );
};

export default About;
