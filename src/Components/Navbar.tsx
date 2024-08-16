import React, { useContext } from "react";
import logo from "../assets/logo.png";
import "../Style.css";
import { useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { PopupContext } from "./Context/PopupContext";

const NavList = [
   { name: "MEET THE TEAM", link: "https://hansenpartners.net/team" },
   {
      name: "SEARCH FOR HOMES",
      link: "https://hansenpartners.net/home-search/listings?sortBy=LP_LISTING_ON_MARKET_TIMESTAMP&sortDirection=DESC&propertyType=%5B%22COMMERCIAL%22%2C%22CONDO%22%2C%22CO_OP%22%2C%22LAND%22%2C%22MANUFACTURED_MOBILE%22%2C%22MULTI_FAMILY%22%2C%22OTHER%22%2C%22RESIDENTIAL%22%2C%22TOWNHOUSE%22%5D&listingStatus=%5B%22ACTIVE%22%2C%22COMING_SOON%22%5D&center=%7B%22lat%22%3A37.695118812286985%2C%22lng%22%3A-121.90293729999999%7D&zoom=11&boundary=%5B%5B%5B38.0095775006787%2C-122.41277158955077%5D%2C%5B38.0095775006787%2C-121.39310301044921%5D%2C%5B37.37932078870408%2C-121.39310301044921%5D%2C%5B37.37932078870408%2C-122.41277158955077%5D%2C%5B38.0095775006787%2C-122.41277158955077%5D%5D%5D&omnibox=&keyword=&page=1&limit=48&isLease=false&cityName=&stateName=",
   },
   {
      name: "OUR COMMUNITIES",
      link: "https://hansenpartners.net/neighborhoods",
   },
   {
      name: "HOME EVALUATION",
      link: "https://hansenpartners.net/home-valuation",
   },
   { name: "SERVICES", link: "/" },
   {
      name: " HOMES ACROSS AMERICA",
      link: "https://hansenpartners.net/FeaturedListingHOA",
   },
   { name: "TESTIMONIALS", link: "https://hansenpartners.net/testimonials" },
   { name: "CONTACT US" },
];

interface NavbarProps {
   openModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ openModal }) => {
   const toggleContext = useContext(PopupContext);

   if (!toggleContext) {
      throw new Error("Navbar must be used within a PopupProvider");
   }

   const { setToggleMenu } = toggleContext;

   const handleClickMenu = () => {
      setToggleMenu(true);
   };
   useEffect(() => {
      const body = document.body;
      let lastScroll = 0;

      const handleScroll = () => {
         const currentScroll = window.pageYOffset;

         if (currentScroll <= 100) {
            body.classList.remove("scrollUp", "scrollDown");
            return;
         }

         if (
            currentScroll > lastScroll &&
            !body.classList.contains("scrollDown")
         ) {
            body.classList.remove("scrollUp");
            body.classList.add("scrollDown");
         } else if (
            currentScroll < lastScroll &&
            !body.classList.contains("scrollUp")
         ) {
            body.classList.remove("scrollDown");
            body.classList.add("scrollUp");
         }

         lastScroll = currentScroll;
      };
      const handleScrollDown = () => {
         const currentScroll = window.pageYOffset;

         if (currentScroll <= 0) {
            body.classList.remove("headingTop", "headingScroll");
            return;
         }

         if (currentScroll > 0 && !body.classList.contains("headingScroll")) {
            body.classList.remove("headingTop");
            body.classList.add("headingScroll");
         } else if (
            currentScroll === 0 &&
            !body.classList.contains("headingTop")
         ) {
            body.classList.remove("headingScroll");
            body.classList.add("headingTop");
         }

         lastScroll = currentScroll;
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("scroll", handleScrollDown);

      return () => {
         window.removeEventListener("scroll", handleScroll);
         window.addEventListener("scroll", handleScrollDown);
      };
   }, []);

   return (
      <div
         id="head"
         className="fixed z-50 mt-[20px] duration-300 h-[100px] w-screen flex justify-center mx-auto"
      >
         <div className="flex justify-center self-center max-w-screen-2xl py-6 px-3 max-[1250px]:justify-between ">
            <div className="w-[10%] max-[1250px]:w-[20%] max-[1250px]:min-w-[200px] self-center">
               <img src={logo} alt="" className="" />
            </div>
            <div className="flex justify-end self-center max-[1250px]:hidden ">
               {NavList.map(({ name, link }) =>
                  link ? (
                     <a key={name} href={link} target="_blank" className="px-3">
                        <div className=" duration-500 hover:border-white border-[#ffffff00] border-b-[1px]  text-[11.5px] whitespace-nowrap self-center tracking-widest text-white font-bold ">
                           {name}
                        </div>
                     </a>
                  ) : (
                     <button key={name} onClick={openModal} className="px-3">
                        <div className=" duration-500 hover:border-white border-[#ffffff00] border-b-[1px]  text-[11.5px] whitespace-nowrap self-center tracking-widest text-white font-bold ">
                           {name}
                        </div>
                     </button>
                  )
               )}
            </div>
            <RxHamburgerMenu
               size={30}
               className="text-white pl-[10px] w-[50px] cursor-pointer"
               onClick={handleClickMenu}
            />
         </div>
      </div>
   );
};
