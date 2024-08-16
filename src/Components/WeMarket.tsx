import React from "react";
import image10 from "../assets/images/image10.png";

const List = [
   {
      heading: "Local Exposure",
      text: `Through our partnership with Nextdoor, the private online
                  social network now used in over 80% of U.S. neighborhoods and
                  virtually all Bay Area neighborhoods, we make sure your home
                  receives targeted local exposure. When you list your home with
                  Hansen Partners it will automatically appear on Nextdoor in
                  your neighborhood.`,
   },
   {
      heading: "National Exposure",
      text: `We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We  will receive every inquiry about your property directly.`,
   },
   {
      heading: "International Exposure",
      text: `To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, 
China.apr.com, Caimeiju, Juwai, Country Life UK`,
   },
];

export const WeMarket = () => {
   return (
      <div className="flex flex-col  bg-[#7a7a7a] text-white py-[50px]">
         <h1 className="self-center pb-9 px-5 text-center">
            We Market Your Home to The World
         </h1>
         <p className="self-center font-bold">Our Online Marketing Strategy</p>
         <p className="max-w-screen-lg self-center p-8">
            ​​​​​​​The Bay Area remains one of the world's most sought-after
            regions to live in, and when looking to sell, it is vital that your
            home be marketed online to audiences locally, nationally, and
            internationally.
         </p>
         <div className="flex max-[1000px]:flex-col">
            {List.map(({ heading, text }) => (
               <div
                  key={heading}
                  className="w-[33.33%] max-[1500px]:w-full max-[1000px]:border-x-[0px] max-[1000px]:my-[0] max-[1000px]:py-[40px] max-[1000px]:border-b-[1px] px-[4%] my-[40px] flex flex-col border-x-[1px]"
               >
                  <p className="font-bold text-[20px] self-center pb-5">
                     {heading}
                  </p>
                  <p>{text}</p>
               </div>
            ))}
         </div>
         <div className="self-center w-full h-full bg-white flex justify-center ">
            <img
               src={image10}
               alt=""
               className=" py-[10px] w-[20%] self-center min-w-[250px]"
            />
         </div>
      </div>
   );
};
