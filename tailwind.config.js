/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EA755E",
        secondary: "#BD675F",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
