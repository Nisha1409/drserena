/** @type {import('tailwindcss').Config} */
/* In your global CSS or Tailwind config */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-lora)', 'serif'],
        sans: ['"Source Sans Pro"', 'sans-serif'],
        georgia: ['Georgia'],
        work: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
