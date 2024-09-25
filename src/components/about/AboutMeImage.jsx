import Lottie from 'lottie-react';
import React from 'react';
import aboutAnimation from "../../assets/images/aboutme.json"

const AboutMeImage = () => {
  return (
    <Lottie animationData={aboutAnimation}  className="w-[400px] h-[400px] object-cover rounded-lg " />
  );
};

export default AboutMeImage;
