import icon1 from "../assets/icons/responsive.png";
import icon2 from "../assets/icons/syndication.png";
import icon3 from "../assets/icons/tour.png";
import icon4 from "../assets/icons/photography.png";
import { ListBar } from "./ListBar";

const MarketingList = [
   {
      icon: icon1,
      heading: "Responsive",
      text: "I am always available via phone, text, or email.",
   },

   {
      icon: icon2,
      heading: "Syndication",
      text: "I market your property locally, nationally, and internationally",
   },
   {
      icon: icon3,
      heading: "Virtual Tour",
      text: "Let's make your home stand out with a high quality virtual tour.",
   },
   {
      icon: icon4,
      heading: "Photography",
      text: "Beatiful, high-end photography is a central part of our marketing plan for your property.",
   },
];

export const MarketingPlan = () => {
   return (
      <div className="min-h-[800px] py-[50px] flex w-full flex-col self-center justify-center">
         <div className="font-heading text-[45px] content-center self-center px-9 text-center leading-[50px]">
            Comprehensive Marketing Plan
         </div>
         <div className="grid self-center pt-5 gap-7 group grid-rows-1 grid-flow-col max-sm:grid-rows-4 max-[1450px]:grid-rows-2">
            {MarketingList.map(({ icon, heading, text }) => (
               <ListBar
                  key={heading}
                  icon={icon}
                  heading={heading}
                  text={text}
               />
            ))}
         </div>
      </div>
   );
};
