/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'r1' : '#FF9693',
        'r2' : '#FF7E79',
        'r3' : '#FD6B66',
        'r4' : '#ED4F49',
        'r5' : '#D83A34',
        'r6' : '#CC251F',
        'r7' : '#B91913',
        'r8' : '#A6100A',
        'r9' : '#900905',
        'r10' : '#800703',
      },
      fontFamily: {
        'roboto' : ['roboto', 'sans-serif'] ,
        'pixelify' : ['Pixelify Sans', 'serif'],
        'Silkscreen' : 'silkscreen'
      }
    },
  },
  plugins: [],
}

