/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#2962ff',
        'primary-glow': 'rgba(41, 98, 255, 0.15)',
        'surface-dark': '#1e1e1e',
        'background-dark': '#121212',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      boxShadow: {
        'glow': '0 0 15px var(--primary-glow)',
      }
    },
  },
  plugins: [],
}