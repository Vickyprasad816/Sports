/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:['class'],
  theme: {
    extend: {
      colors:{
        'white': '#ffffff',
        'black':'#000000',
        'cgray': '#3B3E47',
        'ncol':' #292B32',
        'event':' #292B32',
        'gradient':'#18282A',
        'bgcard':'#818A97'
        
      },
      fontFamily:{
        'poppins':["Poppins","sans-serif"],
        'inter':["Inter","sans-serif"]
      }
    },
  },
  plugins: [],
}