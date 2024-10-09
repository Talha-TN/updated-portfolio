// import React from 'react'
// import Lottie from 'lottie-react'
// import workanimation from "../../assets/images/work2.json"
// const WorkAnimation = () => {
//   return (
//     <div>
//         <Lottie  animationData={workanimation} className='w-[400px] h-[400px]' />
//     </div>
//   )
// }

// export default WorkAnimation
///////////
import React from 'react';
import Lottie from 'lottie-react';
import workanimation from "../../assets/images/work2.json";

const WorkAnimation = () => {
  return (
    <div className="flex justify-center mt-4 md:mt-0">
      <Lottie animationData={workanimation} className='w-[300px] md:w-[400px] h-[300px] md:h-[400px]' />
    </div>
  );
};

export default WorkAnimation;
