/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo Bhaina 2"', "sans-serif"],
        pacifico: ["Pacifico"],
      },
    },
  },
  plugins: [],
};
