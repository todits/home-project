import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.png";
import image13 from "../assets/images/image13.png";
import image14 from "../assets/images/image14.png";

export const OurPartners = () => {
   const Logos = [
      {
         src: image13,
         width: "w-[40%]",
      },
      {
         src: image12,
         width: "w-[60%]",
      },
      {
         src: image14,
         width: "w-[60%]",
      },
   ];
   return (
      <div className="max-w-screen-xl mx-auto my-11 flex flex-col">
         <div className=" self-center mb-[50px]">
            <div className="flex relative justify-center flex-col mb-6">
               <img
                  src={image11}
                  alt=""
                  className="w-[70%] self-center object-scale-down"
               />
               <div className="flex justify-center absolute bg-white bottom-4 w-[70%] self-center">
                  {Logos.map(({ src, width }) => (
                     <div
                        key={src}
                        className="self-center flex py-3 justify-center"
                     >
                        <img src={src} alt="" className={`${width} h-auto `} />
                     </div>
                  ))}
               </div>
            </div>
            <div className="w-[75%] self-center mx-auto">
               <p className="text-center font-bold pb-5">
                  Leading Real Estate Companies of The World® & Luxury Portfolio
                  International
               </p>
               <p className="text-center pb-3">
                  JRockcliff is a founding member of Luxury Portfolio
                  International®, the luxury division of Leading Real Estate
                  Companies of the World®. With more than 500 member firms
                  around the world, Our luxury listings are exposed to a vast
                  global audience and reach potential buyers and investors in
                  over 50 countries.
               </p>

               <p className="text-center pb-3 font-bold">
                  Who’s Who in Luxury Real Estate is a global collection of
                  luxury real estate brokers.
               </p>
            </div>
         </div>
      </div>
   );
};
