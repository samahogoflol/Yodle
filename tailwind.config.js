/** @type {import('tailwindcss').Config} */
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
      sans: ['Urbanist', 'sans-serif'],
      special: ['Georgia', 'serif'], // Новий, унікальний клас
},
    },
  },
  
  plugins: [
    forms,
  ],
}