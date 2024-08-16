import React from "react";
import image18 from "../assets/images/image18.png";
import image19 from "../assets/images/image19.png";
import image20 from "../assets/images/image20.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Logos = [
   {
      src: image18,
   },
   {
      src: image19,
   },
   {
      src: image20,
   },
];

const Socials = [
   {
      id: 1,
      link: "https://www.facebook.com/juliehansenpartership",
      icon: <FaFacebookF size={40} className="text-[#7a7a7a] p-3" />,
   },
   {
      id: 2,
      link: "https://www.linkedin.com/in/julie-hansen-orvis-10b99359/",
      icon: <FaLinkedinIn size={40} className="text-[#7a7a7a] p-3" />,
   },
];
export const Footer = () => {
   return (
      <div className=" flex flex-col bg-[#7a7a7a] ">
         <div className="flex gap-[40px] w-full justify-center bg-white mt-1">
            {Logos.map(({ src }) => (
               <div
                  key={src}
                  className=" w-[4%] min-w-[40px] max-w-[60px] py-2 self-center"
               >
                  <img src={src} alt="" className="flex" />
               </div>
            ))}
         </div>
         <div className="flex gap-6 w-full justify-center my-3">
            {Socials.map(({ id, link, icon }) => (
               <a
                  key={id}
                  href={link}
                  className="duration-300 rounded-full bg-white hover:scale-105 hover:bg-gray-300"
               >
                  {icon}
               </a>
            ))}
         </div>
         <p className="self-center text-white text-[18px] tracking-wider text-center">
            Website Designed & Developed by{" "}
            <a
               href="https://www.luxurypresence.com/"
               target="_blank"
               className="duration-500 border-b-[1px] border-[#ffffff00] hover:border-white"
            >
               Luxury Presence
            </a>
         </p>
         <p className="self-center text-white text-[16px] py-5 tracking-wider">
            Copyright 2024 |{" "}
            <a href="https://hansenpartners.net/terms-and-conditions">
               Privacy Policy
            </a>
         </p>
      </div>
   );
};
