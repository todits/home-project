import React from "react";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";

export const Sectionsix = () => {
   return (
      <div className="max-w-screen-2xl m-auto px-[5%] max-[1000px]:py-12 py-24 ">
         <div className="flex gap-[5%] max-[1000px]:flex-col">
            <div className="w-[50%] max-[1000px]:w-[100%] mx-auto max-[1000px]:max-w-[550px] max-[1000px]:mb-8">
               <div className="h-full flex flex-col">
                  <div className="font-heading text-[30px] self-center font-bold pb-6 text-center">
                     Over 33 Years of <br />
                     Real Estate Success
                  </div>
                  <div className="shadow-md h-full rounded-2xl bg-[#ededed] relative">
                     <img src={image7} alt="" className="rounded-t-2xl" />
                     <div className="font-text  bg-[#ededed] p-5 rounded-b-2xl">
                        We provide every one of our clients with a level of
                        service they won’t find anywhere else. We give them what
                        they need, often before they know they need it.
                        ​​​​​​​In real estate, almost everything can be
                        negotiated. When you choose Hansen Partners It is
                        experience is 100% nonnegotiable. ​​​​​​​ ​​​​​​​And
                        it’s an experience like no other.
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-[50%] max-[1000px]:w-[100%] max-[1000px]:max-w-[550px] mx-auto">
               <div className="h-full flex flex-col">
                  <div className="font-heading text-[30px] font-bold text-center pb-6">
                     We Want To Create An Unforgettable Experience For You...
                  </div>
                  <div className="shadow-md rounded-2xl bg-[#ededed] h-full">
                     <img src={image8} alt="" className="rounded-t-2xl" />
                     <div className="font-text bg-[#ededed] p-5 rounded-b-2xl">
                        We combine data gained from your home’s Comparative
                        Market Analysis with local market research to create a
                        marketing plan designed to help you meet your selling
                        goals. Your home’s carefully designed plan will include
                        a range of online, print, and other marketing tools
                        targeted to the best-qualified pool of buyers. ​​​​​​​
                        Successfully marketing a home in today’s real estate
                        environment requires a firm with experience and
                        flexibility. Hansen Partners provides both.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
