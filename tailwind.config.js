/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.{md,markdown}',
    './*.{html,md,markdown}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1c95ff',
        'brand-dark': '#101010',
        'brand-gray': '#1a1a1a',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
