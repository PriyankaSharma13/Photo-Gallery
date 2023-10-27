/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    
    extend: {
      backgroundColor: {
        'black-90': 'rgba(0, 0, 0, 0.9)',
      },
     
    },
  },
  plugins: [],
}
