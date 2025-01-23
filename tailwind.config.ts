import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        midnight: '#121212',
        gradientBlue: '#7FB6D5'
      },
      width: {
        '960': '960px'
      },
      maxWidth: {
        '960': '960px'
      },
      borderRadius: {
        'circle': '50%'
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(110px, 1fr))'
      }
    },
  },
  plugins: [],
} satisfies Config;
