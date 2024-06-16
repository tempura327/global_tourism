/** @type {import('tailwindcss').Config} */

import { yellow, slate, red, orange } from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '28px',
      },
    },
    fontFamily: {
      primary: ['Roboto', 'Nunito Sans'],
    },
    extend: {
      colors: {
        primary: '#08A6BB',
        secondary: yellow[400],
        'neutral-light': '#CBCBCB',
        'neutral-middle': '#AEAEAE',
        'neutral-main': '#525151',
        'neutral-dark': '#313131',
        info: slate[500],
        error: red[500],
        warning: orange[500],
      },
    },
  },
};
