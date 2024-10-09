// import React from 'react'
// import WorkDetails from './WorkDetails'
// import WorkAnimation from './WorkAnimation'
// const Work = () => {
//   return (
//     <div className='max-w-[1080px] mx-auto paragraph'>
//        <h1 className='text-center text-blue-400 text-2xl font-semibold mt-8'>Where i worked</h1>
//        <div className="flex justify-around items-center flex-wrap">
//         <WorkDetails/>
//         <WorkAnimation/>
//        </div>
//     </div>
//   )
// }
// export default Work
///////////////
import React from 'react';
import WorkDetails from './WorkDetails';
import WorkAnimation from './WorkAnimation';

const Work = () => {
  return (
    <div className='max-w-[1080px] mx-auto paragraph px-4 sm:px-6 lg:px-8'>
      <h1 className='text-center text-blue-400 text-2xl sm:text-3xl font-semibold mt-6'>Where I Worked</h1>
      <div className="flex justify-center items-center flex-wrap mt-6 lg:gap-28 lg:mt-10">
        <WorkDetails />
        <WorkAnimation />
      </div>
    </div>
  );
};

export default Work;
