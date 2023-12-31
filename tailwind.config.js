/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: "#4877b2",
        hoverBlue: "#304f75",
      },
      boxShadow: {
        snowWhite: "0 0 3px 3px #ffffffc2;",
      },
      animation: {
        loader: "mulShdSpin 1.3s infinite linear",
      },
    },
  },
  plugins: [],
};
