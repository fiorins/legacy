const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    
    extend: {
      colors: {
        primary: '#FF7890', //qui ho settato i miei colori 
        secondary: "#FABB55",
        current: 'currentColor',
        transparent: 'transparent',
        rossi: {
          450: '#DC143C', //qui la weight del colore posso mettere
          550: '#FF0000',
        }
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
