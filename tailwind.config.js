/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.js"],
  theme: {
    screens: {
      sm: "700px",
      md: "1055px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        mainBgColor: "#F7F8FA",
        DarkBlue: "#1D2552",
        mainTextColor: "#595B68",
        lightGray: "#7A7A87",
        smallTextColor: "#888B9D",
        borderColor: "#E7E9FB",
        greenIndicator: "#008545",
        redIndicator: "#DD0C0D",
        blueIndicator: "#495FE9",
        darkColor: "#050A29",
        btnAllColor: "#AAB5FA",
        unpaidBtnColor: "#F8CECF",
        paidBtnColor: "#C5EBD5",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(0px)" },
        },
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
