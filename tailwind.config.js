/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["*"],
  theme: {
    screens: {
      'xs': '390px',
      'xs2': '640px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary': '#333B7C',
        'secondary': '#EF8041',
        'tertiary': '#333B7C',
        'menu_mobile': '#202020',

      },
    },
  },
  plugins: [],
}

