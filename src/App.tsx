import { useRef } from "react";
import { Navbar } from "./Components/Navbar";

import "./App.css";
import { Heading } from "./Components/Heading";
import { MarketingPlan } from "./Components/MarketingPlan";
import { Sectionthree } from "./Components/Sectionthree";
import { Sectionfour } from "./Components/Sectionfour";
import { Sectionfive } from "./Components/Sectionfive";
import { Sectionsix } from "./Components/Sectionsix";
import { Sectionseven } from "./Components/Sectionseven";
import { WeMarket } from "./Components/WeMarket";
import { OurPartners } from "./Components/OurPartners";
import { Weregobal } from "./Components/Weregobal";
import Responsive from "./Components/Responsive";
import { WorkWithUs } from "./Components/WorkWithUs";
import { NewsLetter } from "./Components/NewsLetter";
import { Footer } from "./Components/Footer";
import { Sticky } from "./Components/Sticky";
import { Menu } from "./Components/Menu";
import { PopupContextProvider } from "./Components/Context/PopupContext";
import ContactUs from "./Components/ContactUs";
import { MobileIcon } from "./Components/MobileIcon";

interface ContactUsHandle {
   open: () => void;
}

function App() {
   const modalRef = useRef<ContactUsHandle>(null);

   // Handler to open the ContactUs modal
   function handleOpenContactUsClick() {
      if (modalRef.current) {
         modalRef.current.open();
      }
   }

   return (
      <PopupContextProvider>
         <div className="relative">
            <MobileIcon />
            <ContactUs ref={modalRef} />
            <Navbar openModal={handleOpenContactUsClick} />
            <Menu />
            <Heading />
            <Sticky openModal={handleOpenContactUsClick} />
            <MarketingPlan />
            <Sectionthree />
            <Sectionfour />
            <Sectionfive />
            <Sectionsix />
            <Sectionseven />
            <WeMarket />
            <OurPartners />
            <Weregobal />
            <Responsive />
            <WorkWithUs openModal={handleOpenContactUsClick} />
            <NewsLetter />
            <Footer />
            <MobileIcon />
         </div>
      </PopupContextProvider>
   );
}

export default App;
