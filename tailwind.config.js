const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#000000',
      'white':'#ffffff'

    },
    fontFamily:{
      poppins: ["Poppins", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
      nav: ["Nav" , "Salsa"]
    },
    extend: {
      backgroundImage: {
        // 'bg': "url('./bg.png.jpeg')",
        
      },
      colors:{
        'cyan':colors.cyan,
        'teal':colors.teal,
      }
      
    },
  },
  plugins: [],
}

