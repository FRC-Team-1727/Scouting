module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rhr: ['"Manrope-ExtraBold"'],
        'rhr-ns': ['"Manrope-Medium"'],
      },
      colors: {
        red: { rhr: '#a01109' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
