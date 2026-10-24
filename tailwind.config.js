/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#151311',
        'bg-deep': '#0D0C0B',
        'accent-primary': '#E87532',
        'accent-secondary': '#B86F45',
        'text-primary': '#F8F3EC',
        'text-secondary': '#B9B0A6',
        'border-subtle': '#39332F',
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}