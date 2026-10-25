/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Hind Siliguri"', 'sans-serif'],
        display: ['"Outfit"', '"Hind Siliguri"', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: "#71B002",
          dark: "#528200",
          light: "#8ED116",
          forest: "#0D1F12",
          surface: "#F8FAF7",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
