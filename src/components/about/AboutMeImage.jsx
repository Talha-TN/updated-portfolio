
import React from 'react';
import Profile from "../../assets/images/tech.webp"

const AboutMeImage = () => {
  return (
    <img
      src={Profile}
      alt="Profile"
      className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg"
    />
  );
};

export default AboutMeImage;
