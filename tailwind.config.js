/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
      },
      colors: {
        cute: {
          pink: '#FF8FAB',
          lightPink: '#FFE5EC',
          softPink: '#FFF0F3',
          purple: '#E2D4F0',
          lilac: '#C8B6FF',
          yellow: '#FFF3B0',
          mint: '#D8F3DC',
          cream: '#FFFDF9',
          brown: '#6B4F4F',
          dark: '#3D3443'
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'cute': '0 8px 24px -4px rgba(255, 143, 171, 0.25)',
        'cute-hover': '0 12px 28px -4px rgba(255, 143, 171, 0.4)',
      }
    },
  },
  plugins: [],
}
