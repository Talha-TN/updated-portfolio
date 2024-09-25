
import React from 'react';
import HeroAbout from './HeroAbout';
import HeroImage from './HeroImage';
const Hero = () => {
  return (
    <main className="text-white  flex  items-start justify-between  max-w-[1080px] mx-auto mt-20  flex-wrap paragraph">
     <HeroAbout/>
     <HeroImage/>
    </main>
  );
};

export default Hero;
