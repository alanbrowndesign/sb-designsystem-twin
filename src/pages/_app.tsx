import { AppProps } from 'next/app';
import { localStyles } from '@/styles/globalStyles';
import { ThemeProvider } from 'next-themes';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consisten layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  localStyles();
  return (
    // <ThemeProvider attribute='class'>
    <Component {...pageProps} />
    // </ThemeProvider>
  );
}

export default MyApp;
