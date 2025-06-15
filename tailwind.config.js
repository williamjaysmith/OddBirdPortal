/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          0: 'var(--color-grey-0)',
          50: 'var(--color-grey-50)',
          100: 'var(--color-grey-100)',
          200: 'var(--color-grey-200)',
          300: 'var(--color-grey-300)',
          400: 'var(--color-grey-400)',
          500: 'var(--color-grey-500)',
          600: 'var(--color-grey-600)',
          700: 'var(--color-grey-700)',
          800: 'var(--color-grey-800)',
          900: 'var(--color-grey-900)',
        },
        blue: {
          100: 'var(--color-blue-100)',
          700: 'var(--color-blue-700)',
        },
        green: {
          100: 'var(--color-green-100)',
          700: 'var(--color-green-700)',
        },
        yellow: {
          100: 'var(--color-yellow-100)',
          700: 'var(--color-yellow-700)',
        },
        silver: {
          100: 'var(--color-silver-100)',
          700: 'var(--color-silver-700)',
        },
        indigo: {
          100: 'var(--color-indigo-100)',
          700: 'var(--color-indigo-700)',
        },
        red: {
          100: 'var(--color-red-100)',
          700: 'var(--color-red-700)',
          800: 'var(--color-red-800)',
        },
        brand: {
          50: 'var(--color-brand-50)',
          100: 'var(--color-brand-100)',
          200: 'var(--color-brand-200)',
          500: 'var(--color-brand-500)',
          600: 'var(--color-brand-600)',
          700: 'var(--color-brand-700)',
          800: 'var(--color-brand-800)',
          900: 'var(--color-brand-900)',
        },
      },
      fontSize: {
        'tiny': '1.0rem',
        'small': '1.2rem',
        'medium': '1.4rem',
        'large': '1.6rem',
        'huge': '1.8rem',
      },
      borderRadius: {
        'tiny': '3px',
        'small': '5px',
        'medium': '7px',
        'large': '9px',
      },
      spacing: {
        '1.2': '1.2rem',
        '1.6': '1.6rem',
        '2.4': '2.4rem',
        '3.2': '3.2rem',
        '4.8': '4.8rem',
        '6.4': '6.4rem',
        '9.6': '9.6rem',
        '12.8': '12.8rem',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
}