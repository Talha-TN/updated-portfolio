import React from 'react'
import image from "../../assets/images/about-img.png";
const ServicesImage = () => {
  return (
    <div className="mb-10 md:mb-0 md:w-1/2 flex justify-center md:justify-start">
    <img
      src={image}
      alt="About"
      className="w-[300px] md:w-[350px] rounded-lg shadow-lg"
    />
  </div>
  )
}

export default ServicesImage