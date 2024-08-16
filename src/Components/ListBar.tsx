import React from "react";

interface ListBarProps {
   icon: string;
   heading: string;
   text: string;
}
export const ListBar: React.FC<ListBarProps> = ({ icon, heading, text }) => {
   return (
      <div className="duration-300 justify-self-center  bg-white hover:scale-105 rounded-xl p-4 w-[300px] flex flex-col justify-center shadow-lg">
         <img src={icon} className="w-[200px] self-center" />
         <div className="flex flex-col">
            <div className="self-center font-heading text-[30px]">
               {heading}
            </div>
            <div className="self-center font-text py-5 text-center">{text}</div>
         </div>
      </div>
   );
};
