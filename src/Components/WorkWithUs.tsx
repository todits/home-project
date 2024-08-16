import React from "react";
import image17 from "../assets/images/image17.png";

interface ModalProps {
   openModal?: () => void;
}

export const WorkWithUs: React.FC<ModalProps> = ({ openModal }) => {
   return (
      <div className="relative max-w-full h-[650px] my-[100px] bg-center bg-[url(./assets/images/image17.png)]">
         <div className="bg-[#0000007c] h-full">
            <div className="flex flex-col h-full max-w-screen-md mx-auto py-12 justify-center">
               <h1 className=" text-[45px] text-center text-white pb-8 border-b-2 border-white">
                  Work With Us
               </h1>
               <p className="mt-10 text-white text-center w-[600px] max-md:w-[100%] px-4 self-center">
                  With decades of experience in luxurious Tri Valley real
                  estate, our team is here to ensure that your dreams are a
                  reality. Let us guide you through your home buying journey,
                  contact us today!
               </p>
               <button
                  onClick={openModal}
                  className="p-5 border-2 self-center mt-8 text-[14px] font-text border-white uppercase font-bold text-white w-[200px]"
               >
                  Contact Us
               </button>
            </div>
         </div>
      </div>
   );
};
