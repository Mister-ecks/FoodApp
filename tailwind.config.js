const { urlAlphabet } = require('nanoid');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens:{
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        genOrange: "#FA4A0C",
        hnBlue: "#252B42",
        textGray: "#737373",
        mobileBg: "#FAFAFA",
        download: "#F7F7F7"
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
      backgroundImage: {
        "hero-image": "url('./public/images/background.svg')"
      }
    },
  },
  plugins: [],
}
