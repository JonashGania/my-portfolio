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
      },
      width: {
        '960': '960px'
      },
      maxWidth: {
        '960': '960px'
      }
    },
  },
  plugins: [],
}

