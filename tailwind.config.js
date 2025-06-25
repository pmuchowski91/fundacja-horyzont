/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--montserrat-font)'],
        sans: ['var(--inter-font)'],
      },
      colors: {
        secondary: {
          DEFAULT: 'var(--secondary)',
        },
        'nav-primary': {
          DEFAULT: 'var(--nav-primary)',
        },
        'nav-secondary': {
          DEFAULT: 'var(--nav-secondary)',
        },
        'contact-icons': {
          DEFAULT: 'var(--contact-icons)',
        },
      },
      backgroundImage: {
        primary: 'var(--primary)',
      },
    },
  },
  plugins: [],
}
