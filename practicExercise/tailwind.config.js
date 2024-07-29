/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto' : ['roboto', 'sans-serif'] ,
        'pixelify' : ['pixelify', 'serif'],
        'Silkscreen' : 'silkscreen'
      }
    },
  },
  plugins: [],
}

