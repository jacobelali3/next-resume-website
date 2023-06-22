/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
          'fade-in-down': {
              '0%': {
                  opacity: '0',
                  transform: 'translateY(-10px)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateY(0)'
              },
          }
      },
      animation: {
          'beat': 'fade-in-down 2s ease-out'

      }
  },
  },
  plugins: [],
}
