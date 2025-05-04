/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'clash': ['Clash Display', 'sans-serif'],
        'matter': ['Matter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
