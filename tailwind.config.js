/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amber': '#B8860B',
        'amber-light': '#C9981A',
        'amber-dark': '#8B6508',
        'amber-deep': '#6B4E00',
        'amber-glow': '#D4A017',
        'gold': '#A67C00',
        'gold-light': '#B8891A',
        'gold-dark': '#7D5C00',
        'dark-bg': '#0A0A0A',
        'dark-card': '#121212',
        'dark-card-2': '#14130E',
        'dark-border': '#1F1F1F',
        'dark-border-2': '#2A2718',
      },
      boxShadow: {
        'amber': '0 0 14px rgba(184, 134, 11, 0.35)',
        'amber-sm': '0 0 8px rgba(184, 134, 11, 0.3)',
        'amber-lg': '0 0 22px rgba(184, 134, 11, 0.5)',
        'gold': '0 0 14px rgba(166, 124, 0, 0.35)',
      },
      fontFamily: {
        'display': ['Outfit', 'sans-serif'],
        'body': ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-amber': 'pulse-amber 2.5s ease-in-out infinite',
        'glow-amber': 'glow-amber 3s ease-in-out infinite alternate',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'pulse-amber': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(184, 134, 11, 0.3)' },
          '50%': { boxShadow: '0 0 18px rgba(184, 134, 11, 0.5)' },
        },
        'glow-amber': {
          '0%': { filter: 'brightness(1)' },
          '100%': { filter: 'brightness(1.12)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
