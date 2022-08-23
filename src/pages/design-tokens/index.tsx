import tw from 'twin.macro';
import { PageWrapper, ShawbrookLogo } from '@/components';
import { styled, globalCss, css } from '@/styles/stitches.config';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';

const Card = styled('div', {
  ...tw`flex flex-col gap-10 p-10`,
  width: 600,
});
const StyleWrapper = styled('div', {
  ...tw`text-center min-h-screen flex flex-col items-center gap-10 justify-center`,
});
const SwatchRow = styled('div', {
  ...tw`flex justify-center gap-10`,
});
const Swatch = styled('div', {
  width: 100,
  height: 100,
  borderRadius: '9999rem',
  border: '2px solid $gray500',
});

const globalStyles = globalCss({
  html: {
    ...tw`h-full bg-white`,
  },
  body: {
    ...tw`h-full`,
  },
  '#__next': {
    ...tw`h-full`,
  },
});

const MyNewSwatch = styled('div', {
  width: 100,
  height: 100,
  borderRadius: '9999rem',
  border: '2px solid $gray500',
});

export default function DesignTokensPage() {
  globalStyles();
  return (
    <PageWrapper>
      <StyleWrapper tw=''>
        <Card tw='bg-white'>
          <div>
            <h1 tw='text-hero'>Hello everyone</h1>
            <div tw='flex'>
              <p tw='text-headline'>This is a demo of design tokens!</p>
            </div>
          </div>
          <SwatchRow>
            <Swatch tw='bg-primary-pink' />
            <Swatch tw='bg-primary-green' />
            <Swatch tw='' />
            <Swatch tw='' />
          </SwatchRow>
        </Card>
      </StyleWrapper>
    </PageWrapper>
  );
}
