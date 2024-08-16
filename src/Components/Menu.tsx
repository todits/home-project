import React, { useContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { PopupContext } from "./Context/PopupContext";

const MenuList = [
   {
      name: "Home",
      link: "https://hansenpartners.net/",
   },
   { name: "Contact Us", link: "https://hansenpartners.net/" },
];
export const Menu: React.FC = () => {
   // Use the context and handle potential undefined value
   const popupContext = useContext(PopupContext);

   if (!popupContext) {
      throw new Error("Menu must be used within a PopupContextProvider");
   }

   const { toggleMenu, setToggleMenu } = popupContext;

   const handleClickMenu = () => {
      setToggleMenu(false);
   };

   return (
      <div
         className={`${
            toggleMenu
               ? "right-[0px] shadow-2xl"
               : "-right-[400px] max-md:-right-[270px]"
         } w-[400px] max-md:w-[270px] px-8 py-[5vh] h-screen fixed top-0 bg-white z-[200] duration-300 `}
      >
         <div className="relative h-full flex flex-col w-full">
            <IoCloseOutline
               size={35}
               className="self-end absolute cursor-pointer"
               onClick={handleClickMenu}
            />
            <div className="self-center h-[100%] flex flex-col justify-center w-full">
               {MenuList.map(({ name, link }) => (
                  <div
                     key={name}
                     className=" text-center border-b-[1px] border-gray-300 py-3"
                  >
                     <a href={link} className="w-full ">
                        <h1 className="text-[23px] hover:bg-[#dddddd] bg-none duration-300">
                           {name}
                        </h1>
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
