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
//////////
// import React from 'react';
// import Profile from "../../assets/images/profile.png";

// const HeroImage = () => {
//   return (
//     <div className="flex justify-center mb-4"> {/* Center the image container */}
//       <img
//         loading='lazy'
//         src={Profile}
//         alt="hero-image"
//         className="w-[50%] mt-4  md:w-[300px] h-auto rounded-lg custom-hover-shadow"
//       />
//     </div>
//   );
// };

// export default HeroImage;
