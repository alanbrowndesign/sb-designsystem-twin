import tw from 'twin.macro';
import { PageWrapper, ShawbrookLogo } from '@/components';
import { styled, globalCss } from '@/styles/stitches.config';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';

const Card = styled('div', {
  ...tw`flex flex-col gap-10 p-8 rounded-xl`,
  width: '100%',
  maxWidth: 1800,
});
const StyleWrapper = styled('div', {
  ...tw`text-center min-h-screen flex flex-col gap-10 p-6`,
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

export default function TypographyPage() {
  globalStyles();
  return (
    <PageWrapper>
      <StyleWrapper tw='bg-gray-300'>
        <Card tw='bg-white'>
          <div tw='text-left text-primary-charcoal space-y-[0.6em]'>
            <h1 tw='text-hero'>The quick brown fox</h1>
            <h1 tw='text-headline'>The quick brown fox</h1>
            <h1 tw='text-title1'>The quick brown fox</h1>
            <h1 tw='text-title2'>The quick brown fox</h1>
            <h1 tw='text-title3'>The quick brown fox</h1>
            <h1 tw='text-heading'>The quick brown fox</h1>
            <h1 tw='text-subhead'>The quick brown fox</h1>
            <h1 tw='text-body'>The quick brown fox</h1>
            <h1 tw='text-footnote'>The quick brown fox</h1>
            <h1 tw='text-micro'>The quick brown fox</h1>
          </div>
        </Card>
      </StyleWrapper>
    </PageWrapper>
  );
}
