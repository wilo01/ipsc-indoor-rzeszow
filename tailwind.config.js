/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './assets/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5C400',
        dark: '#111111',
        'dark-alt': '#1A1A1A',
        'section-alt': '#1F1F1F',
        'dark-card': '#2D2D2D',
        'text-secondary': '#AAAAAA',
        danger: '#E53E3E',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        countdown: ['"Orbitron"', 'monospace'],
      },
    },
  },
  plugins: [],
};
