import icon1 from "../assets/icons/responsive.png";
import icon2 from "../assets/icons/syndication.png";
import icon3 from "../assets/icons/tour.png";
import icon4 from "../assets/icons/drone.png";
import image16 from "../assets/images/image16.png";

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

const Responsive = () => {
   return (
      <div className="max-w-screen-2xl mx-auto my-8">
         <div className="flex justify-end relative w-full max-[1000px]:flex-col">
            <div className="gap-[0] duration-300 hover:gap-[2%] group max-[1000px]:gap-[2%] max-[1000px]:grid-rows-2 max-md:grid-rows-4 max-[1000px]:right-[0] right-[20%] hover:right-[25%] max-[1000px]:hover:right-[0] max-[1000px]:relative absolute bottom-[20px] px-5 z-10 grid self-center pt-5 grid-rows-1 grid-flow-col">
               {MarketingList.map(({ icon, heading, text }) => (
                  <div
                     key={icon}
                     className="duration-300 justify-self-center group-hover:ml-0 -ml-[30px] max-[1000px]:ml-0 bg-white hover:scale-105 rounded-xl px-4 w-[230px] flex flex-col justify-center shadow-lg"
                  >
                     <img src={icon} className="w-[130px] self-center" />
                     <div className="flex flex-col">
                        <div className="self-center font-heading text-[30px]">
                           {heading}
                        </div>
                        <div className="self-center font-text py-5 text-center">
                           {text}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className=" w-[50%] max-[1000px]:w-[80%] max-[1000px]:mx-auto max-[1000px]:justify-center z-0 flex justify-end">
               <img
                  src={image16}
                  alt=""
                  className=" w-[95%] max-w-[600px] z-0"
               />
            </div>
         </div>
      </div>
   );
};

export default Responsive;
