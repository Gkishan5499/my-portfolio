/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
//   
theme: {
  extend: {
    colors: {
      border: 'hsl(240, 5%, 90%)', // example
      ring: 'hsl(240, 100%, 70%)',
      background: 'black',
      foreground: '#111111',
    },
    keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },

  }  
},
 

}