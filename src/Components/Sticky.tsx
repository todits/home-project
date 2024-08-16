import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoBook } from "react-icons/io5";

interface NavbarProps {
   openModal?: () => void;
}

export const Sticky: React.FC<NavbarProps> = ({ openModal }) => {
   return (
      <div
         id="search"
         className="px-[7%] z-[150] sticky top-0 font-heading flex justify-end text-[20px] w-full bg-[#525252] h-[60px] text-white"
      >
         <div className="relative max-w-screen-2xl w-full flex justify-between ">
            <div className="flex ">
               <FaSearch className="self-center" />
               <input
                  type="text"
                  placeholder="Search by Address or Area"
                  className="self-center outline-none bg-[#525252] mx-5 h-5 font-title text-[15px] font-semibold"
               />
            </div>
            <button
               className="self-center flex gap-4 group"
               onClick={openModal}
            >
               <p className="max-md:hidden duration-500 font-bold text-[15px] self-center bg-white text-[#525252] px-7 rounded-md group-hover:text-white group-hover:bg-[#525252]">
                  BOOK AN APPOINMENT
               </p>
               <IoBook className="self-center scale-0 group-hover:scale-100 max-md:scale-100 duration-300 -ml-7" />
            </button>
         </div>
      </div>
   );
};
