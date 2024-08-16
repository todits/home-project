import React, { forwardRef, useImperativeHandle, useRef, Ref } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";

interface ContactUsHandle {
   open: () => void;
}

const Inputs = [
   {
      type: "text",
      placeholder: "Name",
   },
   {
      type: "tel",
      placeholder: "Phone",
   },
   {
      type: "email",
      placeholder: "Email",
   },
   {
      type: "text",
      placeholder: "Message",
   },
];

const ContactUs = forwardRef<ContactUsHandle>(function ContactUs({}, ref) {
   const dialog = useRef<HTMLDialogElement>(null);

   useImperativeHandle(ref, () => ({
      open: () => {
         if (dialog.current) {
            dialog.current.showModal();
         }
      },
      close: () => {
         if (dialog.current) {
            dialog.current.close();
         }
      },
   }));

   const targetElement = document.getElementById("modal");

   if (!targetElement) {
      console.error("Target container for portal not found");
      return null;
   }

   return createPortal(
      <dialog
         ref={dialog}
         className="bg-[#00000000]  w-[100%] max-[1000px] popup h-screen z-300 fixed duration-300 p-6 max-md:p-0"
      >
         <div className="w-full h-full flex flex-col ">
            <form
               method="dialog"
               id="modal-actions"
               className="self-end max-[1300px]:fixed z-50"
            >
               <IoCloseOutline
                  size={60}
                  className="self-end text-white cursor-pointer max-[1300px]:text-gray-600"
                  onClick={() => dialog.current?.close()}
               />
            </form>
            <div className="max-[1300px]:flex-col w-[90%] relative h-[100%]  max-h-[700px] max-w-[1200px] max-md:my-[20px] m-auto bg-black popupscreen flex">
               <div className="max-[1300px]:order-2 bg-black text-white w-[50%] max-[1300px]:w-[100%] h-full p-16 flex flex-col justify-center">
                  <div className="self-center pb-5">
                     <FaPhoneVolume size={30} className="text-white" />
                  </div>
                  <p className="text-[20px] self-center mb-16">
                     (925) 553-6707
                  </p>
                  <p className="self-center text-[20px] mb-16">
                     luxuryhomesinwc@icloud.com
                  </p>
                  <p className="self-center text-[20px] mb-4">
                     <FaMapLocationDot size={30} className="text-white" />
                  </p>
                  <p className="text-[20px] text-center">
                     4337 Chabot Drive, Pleasanton, CA 94588Julie Hansen-Orvis |
                     CA DRE# 00934447
                  </p>
               </div>
               <div className="max-[1300px]:order-1 max-[1300px]:w-[100%] max-md:p-[8%] bg-white w-[50%] h-full justify-between p-16 flex flex-col ">
                  <h1 className="self-center text-[40px] font-bold max-md:text-[25px]">
                     Submit A Message
                  </h1>
                  <form action="" className="flex flex-col">
                     <div className="flex flex-col">
                        {Inputs.map(({ type, placeholder }) => (
                           <input
                              type={type}
                              placeholder={placeholder}
                              className="mb-9 border-gray-300 border-b-[1px] pb-2 outline-none text-[14px]"
                           />
                        ))}
                     </div>
                     <div className="flex flex-col">
                        <div className="flex gap-3 mb-9">
                           <input type="checkbox" className="mb-auto mt-1" />
                           <p className="text-[12px] tracking-wider">
                              By providing Julie Hansen Partnership your contact
                              information, you acknowledge and agree to our
                              Privacy Policy and consent to receiving marketing
                              communications, including through automated calls,
                              texts, and emails, some of which may use
                              artificial or prerecorded voices. This consent
                              isn’t necessary for purchasing any products or
                              services and you may opt out at any time. To opt
                              out from texts, you can reply, ‘stop’ at any time.
                              To opt out from emails, you can click on the
                              unsubscribe link in the emails. Message and data
                              rates may apply.
                           </p>
                        </div>
                        <button className="font-text self-center tracking-wider font-bold p-4 border-2 w-[200px] border-black">
                           Send
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </dialog>,
      targetElement
   );
});

export default ContactUs;
