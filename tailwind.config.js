/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "Poppins,sans-serif",
        'orbitron': "Orbitron,sans-serif",
      },
      backgroundImage: {
        'hero': "url(./assets/image/webp/hero_bg.png)",
        'btn': "url(./assets/image/webp/button_bg.png)",
        'featured': "url(./assets/image/webp/featured_bg.png)",
        'slider': "url(./assets/image/webp/slider_bg.png)",
        'impact': "url(./assets/image/webp/impact_bg.png)",
        'clients': "url(./assets/image/webp/clients_bg.png)",
        'debbie': "url(./assets/image/webp/debbie_bg.png)",
        'faq': "url(./assets/image/webp/faq_bg.png)",
        'footer': "url(./assets/image/webp/footer_bg.png)",
        'newsletter': "url(./assets/image/webp/newsletter_bg.png)",
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
      backgroundColor: {
        "light_black": "#141414",
        "red": "#FF1E2F"
      },
      fontSize: {
        '42': "42px",
        '38': "38px",
        '29': "29px",
        '64': "64px",
        '36': "36px",
      },
      backgroundSize: {
        '100': "100% 100%"
      }
    },
  },
  plugins: [],
}