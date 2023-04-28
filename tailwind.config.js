/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'greyish': '#D9D9D9',
        'greenish': '#4EE1A0',
        'dark-gray': '#242424',
      },
    },
  },
  plugins: [],
}

