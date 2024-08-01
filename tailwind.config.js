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
        'hero': "url(./assets/image/webp/hero_bg.webp)",
        'btn': "url(./assets/image/webp/button_bg.webp)",
        'featured': "url(./assets/image/webp/featured_bg.webp)",
        'slider': "url(./assets/image/webp/slider_bg.webp)",
        'impact': "url(./assets/image/webp/impact_bg.webp)",
        'clients': "url(./assets/image/webp/clients_bg.webp)",
        'debbie': "url(./assets/image/webp/debbie_bg.webp)",
        'faq': "url(./assets/image/webp/faq_bg.webp)",
        'footer': "url(./assets/image/webp/footer_bg.webp)",
        'newsletter': "url(./assets/image/webp/newsletter_bg.webp)",
        'mission': "url(./assets/image/webp/mission_bg.webp)",
        'mission_border': "url(./assets/image/webp/mission_border.webp)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1164px",
        },
      },
      backgroundColor: {
        "light_black": "#141414",
        "red": "#FF1E2F"
      },
      borderColor: {
        'sky_blue': "#3EBFFF",
        'light_brown': "#5A5555",
        'light_gray': "#FFFFFF45",
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
      },
      textColor: {
        'sky_blue': "#3EBFFF",
      }
    },
  },
  plugins: [],
}