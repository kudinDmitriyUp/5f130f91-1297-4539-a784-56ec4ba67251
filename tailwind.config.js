/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'picsart-purple': '#8B5CF6',
        'picsart-pink': '#EC4899',
        'picsart-dark': '#1F2937',
        'picsart-gray': '#6B7280',
        'picsart-light-gray': '#F3F4F6'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}