import Lottie from 'lottie-react';
import React from 'react';
import aboutAnimation from "../../assets/images/aboutme.json"

const AboutMeImage = () => {
  return (
    // <img
    //   src={Profile}
    //   alt="Profile"
    //   className="w-[300px] h-[300px] object-cover rounded-lg custom-hover-shadow"
    // />
    <Lottie animationData={aboutAnimation}  className="w-[400px] h-[400px] object-cover rounded-lg " />
  );
};

export default AboutMeImage;
