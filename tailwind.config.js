/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-green': '#0e1c19',
      'green': '#4f584a',
      'yellow': '#dcb86a',
      'white': '#ffffff'
    },
    extend: {
      fontFamily: {
        bodoni: ['BodoniModaSC', 'serif'],
        'bodoni-italic': ['BodoniModaSC-Italic', 'serif'],
      },
    },
  },
  plugins: [],
}

