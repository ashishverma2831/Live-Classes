/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        100: '400px'
      },
      animation:{
        'trim': 'trim 2s linear infinite'
      }
    },
  },
  plugins: [],
}

