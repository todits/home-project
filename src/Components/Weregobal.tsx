import image15 from "../assets/images/image15.png";
import image12 from "../assets/images/image12.png";
import image13 from "../assets/images/image13.png";
import image14 from "../assets/images/image14.png";

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
export const Weregobal = () => {
   return (
      <div className="max-w-screen-2xl mx-auto px-8 max-[1000px]:max-w-[700px]">
         <div className="flex max-[1000px]:flex-col max-[1000px]:w-[100%] mx-auto">
            <div className="flex relative justify-center flex-col mb-6 max-[1000px]:mr-0 -mr-7">
               <img
                  src={image15}
                  alt=""
                  className="w-[100%] self-center object-scale-down"
               />
            </div>
            <div className="w-[75%] max-[1000px]:w-[100%]  z-10 p-6 self-center mx-auto flex flex-col bg-white shadow-2xl">
               <p className="text-center pb-5">
                  Through our international affiliations, we have a strong
                  presence in over 50 countries. Our luxury listings are sent to
                  prominent international real estate sites, reaching over 70
                  million potential buyers and investors worldwide through our
                  relationships with:
               </p>
               <div className="flex justify-center bg-white bottom-7 w-[100%] self-center">
                  {Logos.map(({ src, width }) => (
                     <div
                        key={src}
                        className="self-center flex py-3 justify-center"
                     >
                        <img src={src} alt="" className={`${width} h-auto `} />
                     </div>
                  ))}
               </div>
               <p className="text-center pb-3">
                  We also have several well-positioned affiliate offices in
                  China, providing our clients with access to buyers in Hong
                  Kong, Shanghai, and Beijing.
               </p>
            </div>
         </div>
      </div>
   );
};
