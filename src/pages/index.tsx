import tw from 'twin.macro';
import { PageWrapper, DemoWrapper } from '@/components';
import { styled } from '@/styles/stitches.config';
import Link from 'next/link';

const StyledLink = styled('div', {
  ...tw`flex gap-2 underline cursor-pointer text-secondary-pink-4 text-subhead mb-4`,
});

export default function HomePage() {
  return (
    <PageWrapper>
      <div tw='m-10'>
        <h1 tw='text-headline text-primary-pink mb-4'>
          Shawbrook Design System Demos
        </h1>
        <Link href={'/demoapp'}>
          <div tw='flex items-center gap-2 mb-4'>
            <StyledLink
              css={{
                marginBottom: 0,
              }}
            >
              Demo app{' '}
            </StyledLink>
            <div tw='width[fit-content] no-underline bg-secondary-blue-3 px-2 py-1 rounded text-decoration[none] text-white'>
              new
            </div>
          </div>
        </Link>
        <Link href={'/tailwindui'}>
          <StyledLink>Tailwind UI tests</StyledLink>
        </Link>
      </div>
    </PageWrapper>
  );
}
