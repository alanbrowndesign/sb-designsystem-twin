import tw, { theme, globalStyles } from 'twin.macro';
import { globalCss } from './stitches.config';

const customStyles = {
  body: {
    background: '$gray100',
    fontFamily: 'var(--fonts-text)',
  },
  // For future, responsive type sizes
  // ':root': {
  //   '@sm': {
  //     '--fontSizes-6xl': '13.75rem',
  //   },
  // },
  '@font-face': [
    // *** Normal (400) ***
    {
      fontFamily: 'silka',
      fontWeight: 400,
      fontStyle: 'normal',
      src: 'url("/fonts/silka-regular-webfont.woff2")',
    },
    {
      fontFamily: 'silka',
      fontWeight: 400,
      fontStyle: 'italic',
      src: 'url("/fonts/silka-regularitalic-webfont.woff2")',
    },

    // *** Medium (500) ***
    {
      fontFamily: 'silka',
      fontWeight: 500,
      fontStyle: 'normal',
      src: 'url("/fonts/silka-medium-webfont.woff2")',
    },
    {
      fontFamily: 'silka',
      fontWeight: 500,
      fontStyle: 'italic',
      src: 'url("/fonts/silka-mediumitalic-webfont.woff2")',
    },

    // *** Semibold (600) ***
    {
      fontFamily: 'silka',
      fontWeight: 600,
      fontStyle: 'normal',
      src: 'url("/fonts/silka-semibold-webfont.woff2")',
    },
    {
      fontFamily: 'silka',
      fontWeight: 600,
      fontStyle: 'italic',
      src: 'url("/fonts/silka-semibolditalic-webfont.woff2")',
    },

    // *** bold (700) ***
    {
      fontFamily: 'silka',
      fontWeight: 700,
      fontStyle: 'normal',
      src: 'url("/fonts/silka-bold-webfont.woff2")',
    },
    {
      fontFamily: 'silka',
      fontWeight: 700,
      fontStyle: 'italic',
      src: 'url("/fonts/silka-bolditalic-webfont.woff2")',
    },
  ],
};

export const localStyles = () => {
  globalCss(globalStyles as Record<any, any>)();
  globalCss(customStyles)();
};
