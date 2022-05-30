import tw from 'twin.macro';
import { PageWrapper, DemoWrapper } from '@/components';
import { styled } from '@/styles/stitches.config';
import Link from 'next/link';

const StyledLink = styled('div', {
  ...tw`block underline cursor-pointer text-secondary-pink-4 text-subhead mb-4`,
});

export default function HomePage() {
  return (
    <PageWrapper>
      <div tw='m-10'>
        <h1 tw='text-headline text-primary-pink mb-4'>
          Shawbrook Design System Demos
        </h1>
        <Link href={'/tailwindui'}>
          <StyledLink>Tailwind UI tests</StyledLink>
        </Link>
        <Link href={'/demoapp'}>
          <StyledLink>Demo app</StyledLink>
        </Link>
      </div>
    </PageWrapper>
  );
}
