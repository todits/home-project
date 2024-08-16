/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            title: ["Inter"],
            heading: ["Playfair Display"],
            text: ["Karla"],
         },
      },
   },
   plugins: [],
};
