/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#070A10',
        'background-alt': '#0B0F19',
        card: '#0F1626',
        'card-hover': '#141E33',
        border: 'rgba(255, 255, 255, 0.08)',
        accent: {
          lime: '#A3E635',
          'lime-hover': '#84CC16',
          emerald: '#10B981',
          teal: '#14B8A6',
          cyan: '#06B6D4',
          orange: '#F97316',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-lime': '0 0 60px -10px rgba(163, 230, 53, 0.35)',
        'glow-emerald': '0 0 60px -10px rgba(16, 185, 129, 0.3)',
        'glow-orange': '0 0 60px -10px rgba(249, 115, 22, 0.25)',
        'glow-cyan': '0 0 60px -10px rgba(6, 182, 212, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'phone': '0 25px 70px -12px rgba(0, 0, 0, 0.9), 0 0 40px rgba(163, 230, 53, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        }
      }
    },
  },
  plugins: [],
};
