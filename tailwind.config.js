/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        slate: {
          1: 'var(--colors-slate1)',
          2: 'var(--colors-slate2)',
          3: 'var(--colors-slate3)',
          4: 'var(--colors-slate4)',
          5: 'var(--colors-slate5)',
          6: 'var(--colors-slate6)',
          7: 'var(--colors-slate7)',
          8: 'var(--colors-slate8)',
          9: 'var(--colors-slate9)',
          10: 'var(--colors-slate10)',
          11: 'var(--colors-slate11)',
          12: 'var(--colors-slate12)',
        },
        red: {
          1: 'var(--colors-red1)',
          2: 'var(--colors-red2)',
          3: 'var(--colors-red3)',
          4: 'var(--colors-red4)',
          5: 'var(--colors-red5)',
          6: 'var(--colors-red6)',
          7: 'var(--colors-red7)',
          8: 'var(--colors-red8)',
          9: 'var(--colors-red9)',
          10: 'var(--colors-red10)',
          11: 'var(--colors-red11)',
          12: 'var(--colors-red12)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
