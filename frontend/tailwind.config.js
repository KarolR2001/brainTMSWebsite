/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Główne kolory projektu
        primary: '#0e766d', // główny kolor akcentowy, przyciski, linki, elementy interaktywne
        secondary: '#85c55b', // dodatkowe akcenty, ikony, podkreślenia, animacje
        accent: {
          100: '#00abac',
          200: '#5fa05a',
          300: '#00b3ac',
        },
        background: '#e8e8e8', // tła sekcji, karty, podziały
        dark: '#000000', // tło nawigacji, teksty
        light: '#ffffff', // teksty na ciemnym tle
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 