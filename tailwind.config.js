/  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/ /*.{js,ts,jsx,tsx,mdx}',
    './components/ /*.{js,ts,jsx,tsx,mdx}',
    './app/ /*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#1f1f1f',
        'brand-surface': '#2a2a2a',
        'brand-accent': '#6b7280',
        'brand-border': '#3a3a3a',
        'brand-foreground': '#d4d4d4'
      ,
        pink: {
          500: '#878787'
        },
        violet: {
          600: '#4a4a4a'
        },
        cyan: {
          400: '#6b7280'
        },
        amber: {
          300: '#9ca3af'
        },
        green: {
          400: '#6b7280'
        },
        orange: {
          400: '#8b8b8b'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
      },

      extend: {
        screens: {
          "4k": "1980px",
        },
      },
    },
  },
  plugins: [],
}
