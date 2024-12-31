/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D00000',
          50: '#FFE5E5',
          100: '#FFB3B3',
          200: '#FF8080',
          300: '#FF4D4D',
          400: '#FF1A1A',
          500: '#D00000',
          600: '#9D0000',
          700: '#6A0000',
          800: '#370000',
          900: '#040000',
        },
      },
    },
  },
  plugins: [],
};