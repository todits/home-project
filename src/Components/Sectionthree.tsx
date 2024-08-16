import React from "react";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

export const Sectionthree = () => {
   return (
      <div className="flex flex-col ">
         <div className="self-center w-[95vw] justify-center flex ">
            <div className="flex w-full max-w-[2000px] max-[900px]:flex-col">
               <div className="bg-[#525252] max-[900px]:h-[200px] max-[900px]:w-full hover:bg-black duration-300 h-full w-[50%] flex items-center font-heading text-[30px] justify-center">
                  <div className="w-[210px] text-center text-white">
                     Decor Guidance
                  </div>
               </div>
               <img
                  src={image1}
                  alt=""
                  className="w-[50%] max-[900px]:w-full"
               />
            </div>
         </div>
         <div className=" self-center w-[95vw] justify-center flex">
            <div className="flex w-full max-w-[2000px] max-[900px]:flex-col ">
               <img
                  src={image2}
                  alt=""
                  className="w-[50%] max-[900px]:w-full max-[900px]:order-2"
               />
               <div className=" h-full max-[900px]:order-1 max-[900px]:w-full py-9 hover:bg-[#7a7a7a] hover:text-white duration-300 w-[50%] flex flex-col items-center  justify-center">
                  <div className=" text-center text-[40px] font-heading ">
                     My Staging Expertise
                  </div>
                  <ul className="list-disc list-inside font-text">
                     <li className="py-1">Unclutter and organize your home</li>
                     <li className="py-1">
                        Neatly arrange drawers and cabinets
                     </li>
                     <li className="py-1">
                        Keep pets outdoors or off the premises
                     </li>
                     <li className="py-1">Play soft music</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className=" self-center w-[95vw] justify-center flex">
            <div className="flex w-full max-w-[2000px] max-[900px]:flex-col">
               <div className="max-[900px]:w-full py-10 bg-[#525252] hover:bg-black duration-300 h-full w-[50%] flex items-center font-heading text-[30px] justify-center">
                  <div className="w-[210px] text-center text-white">
                     Intentional Layout
                  </div>
               </div>
               <img
                  src={image3}
                  alt=""
                  className="w-[50%] max-[900px]:w-full"
               />
            </div>
         </div>
         <div className=" self-center w-[95vw] justify-center flex">
            <div className="flex w-full max-w-[2000px] max-[900px]:flex-col">
               <img
                  src={image2}
                  alt=""
                  className="w-[50%] max-[900px]:w-full max-[900px]:order-2 max-[900px]:mb-[100px]"
               />
               <div className=" max-[900px]:order-1 h-full w-[50%] max-[900px]:w-full py-10 hover:bg-[#7a7a7a] duration-300 hover:text-white flex flex-col items-center  justify-center">
                  <ul className=" list-disc list-inside font-text">
                     <li className="py-1">Unclutter and organize your home</li>
                     <li className="py-1">
                        Neatly arrange drawers and cabinets
                     </li>
                     <li className="py-1">
                        Keep pets outdoors or off the premises
                     </li>
                     <li className="py-1">Play soft music</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};
