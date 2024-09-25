import React from 'react'

const ServicesParas = () => {
  return (
    <div className="space-y-4 text-gray-300">
    <p className="leading-relaxed">
      Building responsive static/dynamic websites using Next.js
    </p>
    <p className="leading-relaxed">
      Building responsive Single Page Apps in React.js
    </p>
    <p className="leading-relaxed">
      Converting Figma designs into Webpages
    </p>
  </div>
  )
}

export default ServicesParas
// const ServicesParas = ({ inView }) => {
//   return (
//     <div className={`transition-opacity duration-1000 ease-in-out ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
//       <p className="text-sm leading-relaxed text-gray-400 mb-4">
//         Here you can describe the services offered or any other relevant details.
//       </p>
//     </div>
//   );
// };
// export default ServicesParas