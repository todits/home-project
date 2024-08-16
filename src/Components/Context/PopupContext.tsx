import React, { createContext, useState } from "react";

interface PopupContextType {
   toggleMenu: boolean;
   setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
   togglePopUp: boolean;
   setTogglePopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PopupContext = createContext<PopupContextType | undefined>(
   undefined
);

export const PopupContextProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [toggleMenu, setToggleMenu] = useState(false);
   const [togglePopUp, setTogglePopUp] = useState(false);

   return (
      <PopupContext.Provider
         value={{ toggleMenu, setToggleMenu, togglePopUp, setTogglePopUp }}
      >
         {children}
      </PopupContext.Provider>
   );
};
