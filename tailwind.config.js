/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        "purple":"#7403fd",
        "yellow":"#fed400",
        "black":"#131313"
  
      },
    }
  },
  plugins: [],
}
