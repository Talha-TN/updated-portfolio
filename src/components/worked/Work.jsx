import React from 'react'
import WorkDetails from './WorkDetails'
import WorkAnimation from './WorkAnimation'
const Work = () => {
  return (
    <div className='max-w-[1080px] mx-auto paragraph'>
       <h1 className='text-center text-blue-400 text-2xl font-semibold mt-8'>Where i worked</h1>
       <div className="flex justify-around items-center">
        <WorkDetails/>
        <WorkAnimation/>
       </div>
    </div>
  )
}
export default Work