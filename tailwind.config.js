/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,mdx}', './dist/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#005596',
        'primary-dark': '#12456B',
        'primary-darker': '#162F42',
        'primary-light': '#B0C8FF',
        'primary-lighter': '#ABDBFF',
        'primary-lightest': '#D4EDFF',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}