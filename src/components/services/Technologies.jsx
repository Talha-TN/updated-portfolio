import React from 'react'
import { servicesData } from "../../data/Data";
const Technologies = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-6 justify-items-center">
    {servicesData.map((data, index) => (
      <div key={index} className="relative group">
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {data.tooltipText}
        </div>

        <img
          src={data.source}
          alt="Service Icon"
          className="w-12 h-12 object-contain cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-xl"
        />
      </div>
    ))}
  </div>
  )
}

export default Technologies