/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#374151",
        secondary: "#2C677E",
        tertiary: "#FFFFFF",
      },
      backgroundImage: {
        "header-bg": "url('/src/assets/images/bg.jpeg')",
      },
    },
  },
  plugins: [],
};
