import tw, { theme, globalStyles } from 'twin.macro';
import { globalCss } from './stitches.config';

const transitionTime = 300;

const customStyles = {
  body: {
    background: '$slate3',
  },
};

export const localStyles = () => {
  globalCss(customStyles)();
  globalCss(globalStyles as Record<any, any>)();
};
