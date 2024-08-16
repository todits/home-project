import image9 from "../assets/images/image9.png";

export const Sectionseven = () => {
   return (
      <div className="flex max-w-[1900px] m-auto px-[5%] py-24 max-[1500px]:flex-col">
         <div className="w-full self-center">
            <img
               src={image9}
               alt=""
               className="h-[600px] w-[100%] object-cover object-left-top max-lg:h-[300px]"
            />
         </div>

         <div className="w-[55%] max-[1500px]:w-full p-12 max-md:px-7 shadow-xl">
            <div className="text-[35px] font-heading pb-4 leading-10 font-semibold">
               The Hansen Partners Communications Tablet
            </div>
            <div className="font-text text-xl pb-4">
               We have created this as a wonderful tool so that we can
               communicate with you daily, provide you with updates on what is
               happening with your home. We are available at the with a click of
               your tablet.
            </div>
            <div className="font-text font-bold pl-3">Benefits:</div>
            <ul className="list-disc list-inside pl-7 font-text pb-4">
               <li>
                  Review all documents and sign in the comfort of your home or
                  anywhere.
               </li>
               <li>
                  Stay up to date on all marketing activities, review materials,
                  photos, etc. in real time.
               </li>
               <li>
                  Meet with us face to face on our Gotomeeting.com platform to
                  go over and discuss the events of the week.
               </li>
               <li>
                  You have your own email assigned just for you and your common
                  space to quickly write a note, or quickly send a video message
                  to us for fast communication using our Bomb bomb video
                  messaging system.
               </li>
            </ul>
            <div className="font-text">
               We believe that transparency and guiding you and your family
               through the process is key to having the best experience. During
               these uncertain times. It is a good feeling to know you have some
               one with a proven track record you can count on. We will be here
               to handle your needs during the Real Estate process. We think of
               it before a need even arises. Because, that is just what we do.
               Who you work with does matter!
            </div>
         </div>
      </div>
   );
};
