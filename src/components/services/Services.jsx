import React from "react";
import Technologies from "./Technologies";
import ServicesImage from "./ServicesImage";
import ServicesParas from "./ServicesParas";
import ServicesHeading from "./ServicesHeading";
const Services = () => {
  return (
    <div className="text-white max-w-[1080px] mx-auto mt-20 px-6">
     <ServicesHeading
      <div className="flex flex-col md:flex-row justify-between items-center">
       <ServicesImage/>
        <div className="md:w-1/2 space-y-6 flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white ">
            Frontend Development
          </h2>
         <Technologies/>

        <ServicesParas/>
        </div>
      </div>
    </div>
  );
};

export default Services;
