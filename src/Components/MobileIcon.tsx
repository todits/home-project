import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
export const MobileIcon = () => {
   return (
      <div className="max-md:scale-100 scale-0 w-[100px] h-[100px] fixed z-[300]  right-0 bottom-0">
         <div className="flex flex-col fixed bottom-8 right-5 gap-3">
            <a href="luxuryhomesinwc@icloud.com">
               <IoMdMail className="text-[#525252] w-14 h-14 p-3 rounded-full bg-slate-300 border-[2px] border-gray-400" />
            </a>
            <a href="tel:(925)553-6707">
               <FaPhone className="text-[#525252] w-14 h-14 p-3 rounded-full bg-slate-300 border-[2px] border-gray-400" />
            </a>
         </div>
      </div>
   );
};
