/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
      },
      colors: {
        awBg: '#0E0E0E',
        awGold: '#B79B6C',
        awGoldSoft: '#C9B28C',
        awMuted: '#8C7A63',
        awPaper: '#111111',
        ink: '#0B0C0E',
        mist: '#f7f8fb',
        accent: '#2563eb'
      },
    },
  },
  plugins: [],
}