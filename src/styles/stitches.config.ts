// stitches.config.ts
import { createStitches, createTheme } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { red, redDark, slate, slateDark } from '@radix-ui/colors';

export const { styled, css, theme, globalCss, config, keyframes, getCssText } =
  createStitches({
    theme: {
      colors: {
        ...red,
        ...slate,
      },
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
