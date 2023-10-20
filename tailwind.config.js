/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#040615',
        'gradientBlue': '#7FB6D5'
      },
      width: {
        '960': '960px'
      },
      maxWidth: {
        '960': '960px'
      },
      borderRadius: {
        'circle': '50%'
      }

    },
  },
  plugins: [],
}

