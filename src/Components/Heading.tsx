import React from "react";
import { FaSearch } from "react-icons/fa";

export const Heading = () => {
   return (
      <div className="w-full h-[55vh] bg-center bg-cover bg-[url('./assets/heading.jpeg')] min-h-[450px]">
         <div className="w-full flex flex-col h-full items-center bg-[#00000042] text justify-center">
            <div className="font-heading content-center text-[80px] text-white h-full max-md:text-[40px]">
               SERVICES
            </div>
         </div>
      </div>
   );
};
