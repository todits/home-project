import React from "react";

export const NewsLetter = () => {
   return (
      <div className="max-w-screen-2xl mx-auto px-[40px] flex w-full gap-8 mb-[100px] max-[1200px]:flex-col">
         <div className="flex flex-col max-[1200px]:w-[100%] w-[50%] justify-between mx-auto max-w-[750px]">
            <div className=" w-full shadow-md p-7 rounded-md mb-6 border-gray-300 border-[1px]">
               <h1 className="pb-1 border-gray-400 border-b-[1px] mb-8">
                  Julie Hansen Partnership
               </h1>
               <p className="tracking-wider">
                  An elite group of the East Bay’s most talented and visionary
                  real estate professionals believed buyers and sellers deserved
                  more from their real estate company. More service. More
                  resources. More integrity. More global reach. In a word, more
                  of everything people should expect when they buy or sell their
                  homes.
               </p>
            </div>
            <div className="max-md:flex-col tracking-wider flex shadow-md p-7 rounded-md  border-gray-300 border-[1px]">
               <div className="border-gray-300 max-md:border-r-[0] max-md:border-b-[1px] max-md:pb-5 max-md:mb-5 border-r-[1px] pr-4">
                  <p className="font-bold pb-4 ">ADDRESS</p>
                  <p>
                     4733 Chabot Drive #100 <br />
                     Pleasanton, CA 94588
                  </p>
                  <p>​​​​​​​Julie Hansen-Orvis | CA DRE# 00934447</p>
               </div>
               <div className="justify-center pl-7 max-md:pl-0">
                  <p className="font-bold pb-4">CONTACT INFORMATION</p>
                  <p>(925) 553-6707</p>
                  <p>luxuryhomesinwc@icloud.com</p>
               </div>
            </div>
         </div>
         <div className="w-[50%]  max-[1200px]:w-[100%] mx-auto max-w-[750px]">
            <div className="flex flex-col h-full w-full shadow-md p-7 rounded-md border-gray-300 border-[1px]">
               <h1 className="text-center pb-4">Newsletter</h1>
               <p className="text-center w-[400px] max-md:w-full self-center text-[18px] pb-5">
                  Subscribe to our Newsletter for latest news and updates. Stay
                  tuned!
               </p>
               <input
                  type="email"
                  placeholder="Email Address"
                  className="box-border outline-none font-text w-full border-black border-b-[1px] mb-5"
               />
               <div className="flex gap-3 mb-9">
                  <input type="checkbox" className="mb-auto mt-1" />
                  <p className="text-[12px] tracking-wider">
                     By providing Julie Hansen Partnership your contact
                     information, you acknowledge and agree to our{" "}
                     <a
                        href="https://hansenpartners.net/terms-and-conditions"
                        className="underline font-bold"
                        target="_blank"
                     >
                        Privacy Policy
                     </a>{" "}
                     and consent to receiving marketing communications,
                     including through automated calls, texts, and emails, some
                     of which may use artificial or prerecorded voices. This
                     consent isn’t necessary for purchasing any products or
                     services and you may opt out at any time. To opt out from
                     texts, you can reply, ‘stop’ at any time. To opt out from
                     emails, you can click on the unsubscribe link in the
                     emails. Message and data rates may apply.
                  </p>
               </div>
               <button className="font-text self-center tracking-wider font-bold p-4 border-2 w-[200px] border-black">
                  SUBSCRIBE
               </button>
            </div>
         </div>
      </div>
   );
};
