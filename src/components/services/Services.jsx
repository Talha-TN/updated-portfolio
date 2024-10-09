// import React from "react";
// import Technologies from "./Technologies";
// import ServicesImage from "./ServicesImage";
// import ServicesParas from "./ServicesParas";
// import ServicesHeading from "./ServicesHeading";

// const Services = () => {
//   return (
//     <div id="services" className="text-white max-w-[1080px] mx-auto mt-16 px-6 paragraph">
//      <ServicesHeading/>
//       <div className="flex flex-col md:flex-row justify-between items-center">
//        <ServicesImage/>
//         <div className="md:w-1/2 space-y-6 flex flex-col gap-2">
//           <h2 className="text-2xl font-semibold text-gray-300 ">
//             Frontend Development
//           </h2>
//          <Technologies/>
//         <ServicesParas/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
//////////////////////
import React from "react";
import Technologies from "./Technologies";
import ServicesImage from "./ServicesImage";
import ServicesParas from "./ServicesParas";
import ServicesHeading from "./ServicesHeading";

const Services = () => {
  return (
    <div id="services" className="text-white max-w-[1080px] mx-auto  px-6 paragraph">
      <ServicesHeading />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <ServicesImage />
        <div className="md:w-1/2 space-y-6 flex flex-col gap-2">
          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-300 text-center md:text-left">
            Frontend Development
          </h2>
          <Technologies />
          <ServicesParas />
        </div>
      </div>
    </div>
  );
};

export default Services;

