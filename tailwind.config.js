/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#c542f5'
      }
    },
  },
  safelist: [{ pattern: /^.*$/ }],
  plugins: [],
}

