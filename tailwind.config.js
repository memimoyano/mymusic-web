/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night': '#141414',
        'periwinkle' : '#BCB4FF',
        'light-periwinkle' : '#DAD6FF',
        'mindaro' : '#E9FC88',
        'mauve' : '#EDB4F8',
        'ivory' : '#FFFEEC',
        'dim-gray' : '#63625C',
        'black-olive': '#3B3B38',
        'dark-night' : '#0A0A0A',
      }
    },
  },
  plugins: [],
}
