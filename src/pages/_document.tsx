import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { getCssText } from '@/styles/stitches.config';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          {/* Fonts */}
          <link
            rel='preload'
            href='/fonts/silka-regular-webfont.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/silka-regularitalic-webfont.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/silka-medium-webfont.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/silka-mediumitalic-webfont.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/silka-semibold-webfont.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/silka-semibolditalic-webfont.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/silka-bold-webfont.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/silka-bolditalic-webfont.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
