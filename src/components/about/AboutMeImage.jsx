// import Lottie from 'lottie-react';
// import React from 'react';
// import aboutAnimation from "../../assets/images/aboutme.json"

// const AboutMeImage = () => {
//   return (
//     <Lottie animationData={aboutAnimation}  className="w-[400px] h-[400px] object-cover rounded-lg " />
//   );
// };

// export default AboutMeImage;
// //////////////////
import Lottie from 'lottie-react';
import React from 'react';
import aboutAnimation from "../../assets/images/aboutme.json";

const AboutMeImage = () => {
  return (
    <Lottie 
      animationData={aboutAnimation} 
      className="w-[350px] h-[350px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-lg mx-auto sm:mx-0"
    />
  );
};

export default AboutMeImage;
