const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', //false, 'media' or 'class'
  theme: {
    container: {
      center: true,
    },

    screens: {  
      'xs': '375px',  //ho aggiunto quest'altro breakpoint per schermi piu piccoli di iPhoneX
      // => @media (max-width: 375px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },

    extend: {
      fontFamily: {
        'righteous': ['Righteous', 'cursive'],  //questa è la rule e va messa la stessa che si trova su google fonts
        'firacode': ['Fira Code', 'monospace'],
        'sourcecode': ['Source Code Pro', 'monospace'],
      },

      colors: {
        primario: '#FF7890', //qui ho settato i miei colori 
        secondario: "#FABB55", 
        scuro1: "#1F1C2E",
        scuro2: "#343E59",
        biancoperla: "#F3F6FD",
        current: 'currentColor',
        transparent: 'transparent',
        rosso: {
          450: '#DC143C', //qui posso mettere la weight del colore
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
