import React from 'react';
import Profile from "../../assets/images/profile.png";


const HeroImage = () => {
  return (
    <img
    loading='lazy'
      src={Profile}
      alt="hero-image"
      className="w-[420px] h-[400px] rounded-lg custom-hover-shadow"
    />
  );
};

export default HeroImage;
