/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background': '#4C956C',
        'text-color': '#FFFFFF',
        'delete-button': '#D68C45',
      'hover-clr':'#2C6E49'
      },
      width:{
        '60vw':'60vw'
      },
      margin:{
        '2rem':'2rem'
      },
      fontSize:{
        '18px':'18px',
        '22px':'22px',
        '30px':'30px',
      }
    },
  },
  plugins: [],
}