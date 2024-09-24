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
    <section className="flex flex-col md:flex-row items-center md:items-start justify-between text-white space-y-6 md:space-y-0 md:space-x-10 max-w-[1080px] mx-auto px-2 py-6 mt-[100px]">
      
      <AboutMe />
      <AboutMeImage />
    </section>
  );
};

export default About;
