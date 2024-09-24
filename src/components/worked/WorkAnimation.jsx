import React from 'react'
import Lottie from 'lottie-react'
import workanimation from "../../assets/images/work2.json"
const WorkAnimation = () => {
  return (
    <div>
        <Lottie animationData={workanimation} className='w-[400px] h-[400px]' />
    </div>
  )
}

export default WorkAnimation