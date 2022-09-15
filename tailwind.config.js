/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.js"],
  theme: {
    extend: {
      colors: {
        mainBgColor: "#F7F8FA",
        DarkBlue: "#1D2552",
        mainTextColor: "#595B68",
        lightGray: "#7A7A87",
        smallTextColor: "#888B9D",
        borderColor: "#E7E9FB",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
