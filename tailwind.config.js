/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.5xl'), fontWeight: theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.bold') },
        'h3': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.bold') },
        'h4': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
        'h5': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
        'h6': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.bold') },
      })
    })],
}
