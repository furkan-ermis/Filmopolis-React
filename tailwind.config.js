/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
 content: ["./src/**/*.{js,jsx,ts,tsx}"],  theme: {
    extend: {},
  },
  
  plugins: [require('@kamona/tailwindcss-perspective'),require('tailwind-scrollbar-hide')],
}

