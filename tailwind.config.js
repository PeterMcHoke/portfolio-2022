/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      serif: ['Reforesta'],
      sans: ['Varela Round'],
    },
    extend: {
      colors: {
        primary: '#25233A',
      },
    },
  },
  plugins: [],
};
