/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#d1c4ec",
        
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideDown: 'slideDown 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar": {
          "-ms-overflow-style": "none", /* Internet Explorer */
          "scrollbar-width": "none", /* Firefox */
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none", /* Chrome, Safari, Edge */
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

