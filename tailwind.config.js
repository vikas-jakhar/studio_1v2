/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "Poppins,sans-serif",
      },
      backgroundImage: {
        'hero': "url(./assets/image/webp/hero_bg.png)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
        },
        screens: {
          sm: "664px",
          md: "792px",
          lg: "1048px",
          xl: "1164px",
        },
      },
    },
  },
  plugins: [],
}