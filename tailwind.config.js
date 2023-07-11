/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        neutralBlack: "#222030",
        darkBlack: "#11101A",
        darkerBlack: "#000000",
        neutralWhite: "#FFFFFF",
        brownyWhite: "#DDCCAA",
        darkGray: "#6C757D",
        neutralGray: "#D9D9D9",
        lightishGray: "#a5b4fc",
        darkBlue: "#0D6EFD",
        lightBlue: "#CED4DA",
        neutralGreen: "#198754",
        neutralRed: "#E31221",
        shinyRed: "#CC0E10",
        grapeRed: "#B80D0F",
        dullRed: "#EC4C57",
        dullerRed: "#F3426C",
        neutralViolet: "#9747FF66",
      },
      colors: {
        neutralBlack: "#222030",
        darkBlack: "#11101A",
        darkerBlack: "#000000",
        neutralWhite: "#FFFFFF",
        brownyWhite: "#DDCCAA",
        darkGray: "#6C757D",
        neutralGray: "#D9D9D9",
        lightishGray: "#a5b4fc",
        darkBlue: "#0D6EFD",
        lightBlue: "#CED4DA",
        neutralGreen: "#198754",
        neutralRed: "#E31221",
        shinyRed: "#CC0E10",
        grapeRed: "#B80D0F",
        dullRed: "#DC3545",
        dullerRed: "#F3426C",
        neutralViolet: "#9747FF66",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundImage: () => ({
        gradientPrimary:
          "linear-gradient(187.16deg,#181623 0.07%,#191725 51.65%,#0D0B14 98.75%)",
      }),
    },
  },
  plugins: [],
};
