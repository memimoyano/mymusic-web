/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-night' : '#0A0A0A',
        'night' : '#141414',
        'light-night' : '#1F1F1F',
        'eerie-black' : '#202020',
        'jet' : '#282826',
        'black-olive' : '#3b3b38',
        'dim-gray' : '#63625c',
        'ivory': '#fffeec',
        'periwinkle' : '#bcb4ff',
        'dark-periwinkle' : '#A399FF',
        'light-periwinkle': '#dad6ff',
        'mindaro' : '#e9fc88',
      }
    },
  },
  plugins: [],
}
