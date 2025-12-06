/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  
  theme: {
    extend: {
      colors : {
        backgroundapp : "#D3DCF8",
      },
     fontFamily: {
      'urbanist': ['Urbanist', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  
  plugins: [
    forms,
  ],
}