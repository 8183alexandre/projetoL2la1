/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,css,js}"],

  theme: {

    fontfamily:{
      'sans':['Roboto', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/fotos/foto.ntl.d.jpg.jpg')"
      }
    },
  },
  plugins: [],
}

