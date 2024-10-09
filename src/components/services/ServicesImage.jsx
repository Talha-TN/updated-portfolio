// import React from "react";
// import Lottie from "lottie-react";
// import animation from "../../assets/images/Animation.json"
// const ServicesImage = () => {
//   return (
//     <div className="mb-10 md:mb-0 md:w-1/2 flex justify-center md:justify-start">

//       <Lottie animationData={animation}   className="w-[400px] md:w-[450px] rounded-lg  "/>
//     </div>
//   );
// };

// export default ServicesImage;
////////////////////
import React from "react";
import Lottie from "lottie-react";
import animation from "../../assets/images/Animation.json";

const ServicesImage = () => {
  return (
    <div className="mt-2 md:mb-0 md:w-1/2 flex justify-center md:justify-start">
      <Lottie animationData={animation} className="w-[300px] md:w-[400px] rounded-lg" />
    </div>
  );
};

export default ServicesImage;
