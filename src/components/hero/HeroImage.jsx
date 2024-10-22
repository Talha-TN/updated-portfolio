// import React from 'react';
// import Profile from "../../assets/images/profile.png";


// const HeroImage = () => {
//   return (
//     <img
//     loading='lazy'
//       src={Profile}
//       alt="hero-image"
//       className="w-[420px] h-[400px] rounded-lg custom-hover-shadow"
//     />
//   );
// };

// export default HeroImage;
//////////
import React from 'react';
import Profile from "../../assets/images/profile.webp";

const HeroImage = () => {
  return (
    <div className="responsive">
    <img
      loading="lazy"
      src={Profile}
      alt="hero-image"
      className="responsive-image w-[80%] max-w-[300px] h-auto sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[300px] rounded-lg custom-hover-shadow mx-auto mt-4 "
    />
    </div>
  );
};

export default HeroImage;
