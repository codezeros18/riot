/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'herobackg' : '#0A0A0A',
        'dropdownbackg' : '#292929',
        'blacktheme' : '#353535',
        'scrollnav' : '#111111',
        'dropnav' : '#FBFBFB',
        'headgrey' : '#F0F0F0',
        'navgrays' : '#F9F9F9',
        'navgrey' : '#808080',
        'navgrey2' : '#334139',
        'blackkie' : '#101010',
        'frenchgray' : '#D2D7DF',
        'rightblue': '#1E3A8A', // Original dark blue
        'leftblue': '#3B82F6', // Original blue
        'white': '#FFFFFF',
        'rightblueHover': '#2B4CA0', // Brighter dark blue for hover
        'leftblueHover': '#5393F7', // Brighter blue for hover
        'whiteHover': '#FFFFFF', // No change for white
        'signred' : '#D13639',
        'blueShadow': 'rgba(59, 130, 246, 0.6)', // Brighter blue shadow
      },
      boxShadow: {
        blue: '0 10px 15px -3px rgba(59, 130, 246, 0.6), 0 4px 6px -2px rgba(59, 130, 246, 0.4)',
      },
      fontFamily: {
        'montserrat': ['Montserrat',' sans-serif'],
        'roboto' : ['Roboto',' sans-serif'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'nunito': ['Nunito','sans-serif'],
        'inter': ['Inter','sans-serif'],
        'poppins': ['Poppins','sans-serif'],
        'work': ['Work Sans','sans-serif'],
        'open': ['Open Sans','sans-serif'],
        'lexend': ['Lexend','sans-serif']
    },
    },
  },
  plugins: [],
}

