
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
///////////////
// import React from 'react';
// import AboutMe from './AboutMe';
// import AboutMeImage from './AboutMeImage';

// const About = () => {
//   return (
//     <>
//       <h1 id="about" className='text-blue-400 text-xl sm:text-3xl md:text-4xl text-center mt-[100px] mb-8 paragraph'>
//         About Me
//       </h1>
//       <section className="flex flex-col md:flex-row items-center justify-center md:justify-between text-white md:space-x-10 max-w-[1080px] mx-auto paragraph">
//         <AboutMe />
//         <AboutMeImage />
//       </section>
//     </>
//   );
// };

// export default About;
