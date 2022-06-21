// stitches.config.ts
import { createStitches, createTheme } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { red, redDark, slate, slateDark } from '@radix-ui/colors';

type TypeStyles =
  | 'hero'
  | 'headline'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'heading'
  | 'subhead'
  | 'body'
  | 'footnote'
  | 'caption'
  | 'micro';

export const stitchesUtils = {
  mx: (value: string | number) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: string | number) => ({
    marginTop: value,
    marginBottom: value,
  }),

  px: (value: string | number) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: string | number) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  size: (value: string | number) => ({ width: value, height: value }),
  spaceY: (value: string | number) => ({
    '& > :not([hidden]) ~ :not([hidden])': {
      marginTop: value,
    },
  }),
  spaceX: (value: string | number) => ({
    '& > :not([hidden]) ~ :not([hidden])': {
      marginLeft: value,
    },
  }),
  typeStyle: (styleName: TypeStyles) =>
    styleName === 'hero'
      ? {
          fontFamily: 'var(--fonts-display)',
          fontSize: 'var(--fontSizes-6xl)',
          fontWeight: 'var(--fontWeights-semibold)',
          lineHeight: 'var(--lineHeights-tight)',
        }
      : styleName === 'headline'
      ? {
          fontFamily: 'var(--fonts-display)',
          fontSize: 'var(--fontSizes-5xl)',
          fontWeight: 'var(--fontWeights-semibold)',
          lineHeight: 'var(--lineHeights-tight)',
        }
      : styleName === 'title1'
      ? {
          fontFamily: 'var(--fonts-display)',
          fontSize: 'var(--fontSizes-4xl)',
          fontWeight: 'var(--fontWeights-semibold)',
          lineHeight: 'var(--lineHeights-tight)',
        }
      : styleName === 'title2'
      ? {
          fontFamily: 'var(--fonts-display)',
          fontSize: 'var(--fontSizes-3xl)',
          fontWeight: 'var(--fontWeights-semibold)',
          lineHeight: 'var(--lineHeights-tight)',
        }
      : styleName === 'title3'
      ? {
          fontFamily: 'var(--fonts-display)',
          fontSize: 'var(--fontSizes-2xl)',
          fontWeight: 'var(--fontWeights-semibold)',
          lineHeight: 'var(--lineHeights-tight)',
        }
      : styleName === 'heading'
      ? {
          fontFamily: 'var(--fonts-display)',
          fontSize: 'var(--fontSizes-xl)',
          fontWeight: 'var(--fontWeights-medium)',
          lineHeight: 'var(--lineHeights-snug)',
        }
      : styleName === 'subhead'
      ? {
          fontFamily: 'var(--fonts-display)',
          fontSize: 'var(--fontSizes-lg)',
          fontWeight: 'var(--fontWeights-medium)',
          lineHeight: 'var(--lineHeights-snug)',
        }
      : styleName === 'body'
      ? {
          fontFamily: 'var(--fonts-text)',
          fontSize: 'var(--fontSizes-base)',
          fontWeight: 'var(--fontWeights-normal)',
          lineHeight: 'var(--lineHeights-normal)',
        }
      : styleName === 'footnote'
      ? {
          fontFamily: 'var(--fonts-text)',
          fontSize: 'var(--fontSizes-sm)',
          fontWeight: 'var(--fontWeights-normal)',
          lineHeight: 'var(--lineHeights-relaxed)',
        }
      : styleName === 'micro'
      ? {
          fontFamily: 'var(--fonts-text)',
          fontSize: 'var(--fontSizes-xs)',
          fontWeight: 'var(--fontWeights-normal)',
          lineHeight: 'var(--lineHeights-relaxed)',
        }
      : {},
};

export const { styled, css, theme, globalCss, config, keyframes, getCssText } =
  createStitches({
    theme: {
      fontSizes: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: 'clamp(1.13rem, calc(1.10rem + 0.13vw), 1.20rem)', // 18px
        xl: 'clamp(1.27rem, calc(1.21rem + 0.29vw), 1.44rem)', // 20px
        '2xl': 'clamp(1.42rem, calc(1.32rem + 0.51vw), 1.73rem)', // 24px
        '3xl': 'clamp(1.60rem, calc(1.44rem + 0.79vw), 2.07rem)', // 30px
        '4xl': 'clamp(1.80rem, calc(1.57rem + 1.14vw), 2.49rem)', // 36px
        '5xl': 'clamp(2.03rem, calc(1.71rem + 1.60vw), 2.99rem)', // 48px
        '6xl': 'clamp(2.28rem, calc(1.85rem + 2.17vw), 3.58rem)', // 60px
        '7xl': 'clamp(2.57rem, calc(1.99rem + 2.89vw), 4.30rem)', // 72px
        '8xl': 'clamp(2.89rem, calc(2.13rem + 3.79vw), 5.16rem)', // 96px
        '9xl': 'clamp(3.25rem, calc(2.27rem + 4.91vw), 6.19rem)', // 128px
      },
      radii: {
        none: 0,
        sm: '0.125rem', // 2px
        rounded: '0.25rem', // 4px,
        md: '0.25rem', // 6px,
        lg: '0.5rem', // 8px,
        xl: '0.75rem', // 12px,
        '2xl': '1rem', // 16px,
        '3xl': '1.5rem', // 24px,
        full: '9999rem', // full,
      },
      shadows: {
        sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        shadow:
          '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
        md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
      },
      lineHeights: {
        none: '1',
        tighter: '1.1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
      fonts: {
        text: "'Inter var', sans-serif",
        display: 'silka, sans-serif',
      },
      space: {
        '0': '0',
        px: '0.0625rem',
        '0.5': '0.125rem', // 2px
        '1': '0.25rem', // 4px
        '1.5': '0.375rem', // 6px
        '2': '0.5rem', // 8px
        '2.5': '0.625rem', // 10px
        '3': '0.75rem', // 12px
        '3.5': '0.875rem', // 14px
        '4': '1rem', // 16px
        '5': '1.25rem', // 20px
        '6': '1.5rem', // 24px
        '7': '1.75rem', // 28px
        '8': '2rem', // 32px
        '9': '2.25rem', // 36px
        '10': '2.5rem', // 40px
        '11': '2.75rem', // 44px
        '12': '3rem', // 48px
        '14': '3.5rem', // 56px
        '16': '4rem', // 64px
        '20': '5rem', // 80px
        '24': '6rem', // 96px
        '28': '7rem', // 112px
        '32': '8rem', // 128px
        '36': '9rem', // 144px
        '40': '10rem', // 160px
        '44': '11rem', // 176px
        '48': '12rem', // 192px
        '52': '13rem', // 208px
        '56': '14rem', // 224px
        '60': '15rem', // 240px
        '64': '16rem', // 256px
        '72': '18rem', // 288px
        '80': '20rem', // 320px
        '96': '24rem', // 384px
      },
      fontWeights: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        transparent: 'transparent',
        // ************************
        // *** Primary Palette ****
        // ************************
        primaryPink: 'rgba(225, 10, 147, 1)',
        primaryCharcoal: 'rgba(40, 44, 54, 1)',
        primaryBlue: 'rgba(186, 227, 243, 1)',
        primaryGreen: 'rgba(176, 255, 183, 1)',
        primaryGray: 'rgba(240, 240, 243, 1)',

        // ************************
        // *** Secondary Palette **
        // ************************
        // Secondary Grey
        secondaryGray1: '$gray200',
        secondaryGray2: '$gray300',
        secondaryGray3: '$gray400',
        secondaryGray4: '$gray600',

        // Secondary Purple
        secondaryPurple1: '$purple100',
        secondaryPurple2: '$purple400',
        secondaryPurple3: '$purple600',
        secondaryPurple4: '$purple900',

        // Secondary Pink
        secondaryPink1: '$pink200',
        secondaryPink2: '$pink400',
        secondaryPink3: '$pink500',
        secondaryPink4: '$pink900',

        // Secondary Green
        secondaryGreen1: '$green200',
        secondaryGreen2: '$green300',
        secondaryGreen3: '$green500',
        secondaryGreen4: '$green800',

        // Secondary Blue
        secondaryBlue1: '$blue100',
        secondaryBlue2: '$blue300',
        secondaryBlue3: '$blue400',
        secondaryBlue4: '$blue600',

        // Secondary Yellow
        secondaryYellow1: '$yellow50',
        secondaryYellow2: '$yellow100',
        secondaryYellow3: '$yellow300',
        secondaryYellow4: '$yellow500',

        // ************************
        // *** Extended Palette ***
        // ************************

        // Purple
        purple50: 'rgba(245, 242, 255, 1)',
        purple100: 'rgba(232, 230, 255, 1)',
        purple200: 'rgba(224, 217, 255, 1)',
        purple300: 'rgba(202, 192, 235, 1)',
        purple400: 'rgba(180, 171, 214, 1)',
        purple500: 'rgba(132, 122, 196, 1)',
        purple600: 'rgba(95, 80, 188, 1)',
        purple700: 'rgba(78, 63, 171, 1)',
        purple800: 'rgba(62, 55, 148, 1)',
        purple900: 'rgba(53, 46, 124, 1)',

        // Pink
        pink50: 'rgba(255, 247, 253, 1)',
        pink100: 'rgba(254, 238, 250, 1)',
        pink200: 'rgba(255, 204, 243, 1)',
        pink300: 'rgba(250, 182, 234, 1)',
        pink400: 'rgba(239, 143, 226, 1)',
        pink500: 'rgba(198, 79, 170, 1)',
        pink600: 'rgba(171, 51, 143, 1)',
        pink700: 'rgba(145, 29, 118, 1)',
        pink800: 'rgba(138, 14, 109, 1)',
        pink900: 'rgba(128, 0, 92, 1)',

        // Blue
        blue50: 'rgba(239, 254, 252, 1)',
        blue100: 'rgba(194, 249, 240, 1)',
        blue200: 'rgba(147, 237, 220, 1)',
        blue300: 'rgba(106, 226, 203, 1)',
        blue400: 'rgba(20, 193, 163, 1)',
        blue500: 'rgba(16, 156, 131, 1)',
        blue600: 'rgba(37, 127, 116, 1)',
        blue700: 'rgba(15, 97, 93, 1)',
        blue800: 'rgba(8, 82, 78, 1)',
        blue900: 'rgba(3, 67, 69, 1)',

        // Green
        green50: 'rgba(241, 255, 241, 1)',
        green100: 'rgba(219, 255, 219, 1)',
        green200: 'rgba(149, 255, 175, 1)',
        green300: 'rgba(152, 237, 163, 1)',
        green400: 'rgba(98, 217, 113, 1)',
        green500: 'rgba(11, 173, 26, 1)',
        green600: 'rgba(35, 122, 47, 1)',
        green700: 'rgba(26, 102, 35, 1)',
        green800: 'rgba(8, 91, 18, 1)',
        green900: 'rgba(4, 77, 13, 1)',

        // Yellow
        yellow50: 'rgba(255, 240, 179, 1)',
        yellow100: 'rgba(255, 241, 141, 1)',
        yellow200: 'rgba(250, 222, 110, 1)',
        yellow300: 'rgba(255, 194, 72, 1)',
        yellow400: 'rgba(227, 168, 59, 1)',
        yellow500: 'rgba(188, 133, 25, 1)',
        yellow600: 'rgba(156, 88, 0, 1)',
        yellow700: 'rgba(135, 68, 0, 1)',
        yellow800: 'rgba(120, 56, 0, 1)',
        yellow900: 'rgba(105, 45, 0, 1)',

        // Red
        red50: 'rgba(127, 29, 29, 1)',
        red100: 'rgba(153, 27, 27, 1)',
        red200: 'rgba(185, 28, 28, 1)',
        red300: 'rgba(220, 38, 38, 1)',
        red400: 'rgba(239, 68, 68, 1)',
        red500: 'rgba(248, 113, 113, 1)',
        red600: 'rgba(255, 173, 173, 1)',
        red700: 'rgba(254, 211, 211, 1)',
        red800: 'rgba(254, 242, 242, 1)',
        red900: 'rgba(254, 242, 242, 1)',

        // Gray
        gray50: 'rgba(250, 250, 250, 1)',
        gray100: 'rgba(240, 240, 243, 1)',
        gray200: 'rgba(231, 231, 232, 1)',
        gray300: 'rgba(199, 200, 204, 1)',
        gray400: 'rgba(145, 147, 153, 1)',
        gray500: 'rgba(114, 117, 122, 1)',
        gray600: 'rgba(85, 87, 91, 1)',
        gray700: 'rgba(56, 59, 66, 1)',
        gray800: 'rgba(40, 44, 54, 1)',
        gray900: 'rgba(18, 21, 28, 1)',
      },
      letterSpacings: {
        tighter: '-0.025em',
        tight: '-0.0125em',
        normal: '0em',
        wide: '0.0125em',
        wider: '0.02em',
        widest: '0.05em',
      },
    },
    media: {
      xs: '(min-width: 0)',
      sm: '(min-width: 40rem)', // 640px
      md: '(min-width: 46rem)', // 768px
      lg: '(min-width: 64rem)', // 1024px
      xl: '(min-width: 80rem)', // 1280px
      '2xl': '(min-width: 96rem)', // 1536px
    },
    utils: {
      ...stitchesUtils,
    },
  });

export const darkTheme = createTheme('dark', {
  colors: {
    ...redDark,
    ...slateDark,
  },
});

type CSS = Stitches.CSS<typeof config>;
export type { CSS } from '@stitches/react/types/css-util';
