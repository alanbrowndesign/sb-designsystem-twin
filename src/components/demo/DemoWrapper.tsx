import tw from 'twin.macro';
import { styled } from '@/styles/stitches.config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const StyledContainer = styled('div', {
  ...tw`sm:m-4 lg:m-16 space-y-3 sm:space-y-10`,
});

const StyledDemoWrapper = styled('div', {
  ...tw`bg-slate-1 p-4 lg:p-16 sm:pt-20 sm:rounded-lg relative`,
  border: '1px solid $slate5',
});

const StyledTrigger = styled('button', {
  ...tw`w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center`,
  svg: {
    width: 16,
    height: 16,
    path: {
      stroke: '#fff',
    },
  },
});

const StyledNavMenu = styled('ul', {
  ...tw`hidden`,
  variants: {
    visible: {
      true: {
        ...tw`block`,
      },
    },
    display: {
      side: {
        ...tw`absolute right-0 top-12 width[240px] bg-white p-3 rounded-xl border z-10 shadow-lg`,
      },
      inline: {
        ...tw`flex width[auto] gap-4 flex-shrink-0 flex-wrap`,
        a: {
          ...tw`bg-blue-700 text-white rounded-full px-4 hover:text-white whitespace-nowrap`,
        },
      },
    },
  },
  defaultVariants: {
    display: 'side',
  },
});

const StyledNav = styled('nav', {
  ...tw`relative`,
  [`${StyledNavMenu}`]: {},
});

const StyledLink = styled('a', {
  ...tw`block mt-3 relative p-2 font-bold text-blue-600 hover:text-blue-400 hover:underline`,
  cursor: 'pointer',
});

const BackLink = styled('button', {
  ...tw`mb-6 sm:absolute sm:mb-0 left-4 top-4 w-6 h-6`,
  svg: {
    width: '100%',
    height: '100%',
    path: {
      fill: 'blue',
    },
  },
  span: {
    ...tw`hidden`,
  },
  variants: {
    hidden: {
      true: {
        display: 'none',
      },
    },
  },
});

const Nav = ({ menuVisible, display }: any) => {
  return (
    <StyledNavMenu visible={menuVisible} display={display}>
      <li>
        <Link href='/tailwindui/featuresection'>
          <StyledLink>Feature section</StyledLink>
        </Link>
      </li>
      <li>
        <Link href='/tailwindui/ctasection' passHref>
          <StyledLink>CTA section</StyledLink>
        </Link>
      </li>
      <li>
        <Link href='/tailwindui/header'>
          <StyledLink>Header - centred</StyledLink>
        </Link>
      </li>
      <li>
        <Link href='/tailwindui/banners'>
          <StyledLink>Header Banner</StyledLink>
        </Link>
      </li>
      <li>
        <Link href='/tailwindui/formlayout'>
          <StyledLink>Form Layout</StyledLink>
        </Link>
      </li>
      <li>
        <Link href='/tailwindui/inputfield'>
          <StyledLink>Input field</StyledLink>
        </Link>
      </li>
    </StyledNavMenu>
  );
};

export const DemoWrapper = (props: any) => {
  const { children } = props;
  const [navVisible, updateNavVisible] = useState(false);
  const router = useRouter();
  return (
    <StyledContainer>
      <div tw='p-4 sm:p-0 flex justify-between'>
        <div tw=''>
          <h1 tw='text-3xl font-bold'>
            <Link href='/'>
              <a>Tailwind UI Demos</a>
            </Link>
          </h1>
          <div tw='text-xl'>
            <a
              tw='text-blue-700 underline font-semibold'
              href='https://tailwindcss.com/'
              target='_blank'
            >
              Tailwind
            </a>{' '}
            +{' '}
            <a
              tw='text-blue-700 underline font-semibold'
              href='https://stitches.dev/'
              target='_blank'
            >
              Stitches
            </a>{' '}
            with{' '}
            <a
              tw='text-blue-700 underline font-semibold'
              href='https://github.com/ben-rogerson/twin.macro'
              target='_blank'
            >
              Twin
            </a>
          </div>
        </div>

        <StyledNav>
          <StyledTrigger
            onClick={() => {
              updateNavVisible(!navVisible);
            }}
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 310 259.34'>
              <path
                d='M19.67 1032.7H270.3m-250.63-100H270.3m-250.63-100H270.3'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeWidth: '49.33635712',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 4,
                  strokeOpacity: 1,
                  strokeDasharray: 'none',
                }}
                transform='translate(10.02 -803.03)'
              />
            </svg>
          </StyledTrigger>
          <Nav menuVisible={navVisible} />
        </StyledNav>
      </div>
      <StyledDemoWrapper>
        <BackLink
          onClick={() => router.back()}
          hidden={router.pathname === '/'}
        >
          <span>Back</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 492 492'
            xmlSpace='preserve'
          >
            <path d='m464.344 207.418.768.168H135.888l103.496-103.724c5.068-5.064 7.848-11.924 7.848-19.124 0-7.2-2.78-14.012-7.848-19.088L223.28 49.538c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844L7.844 226.914C2.76 231.998-.02 238.77 0 245.974c-.02 7.244 2.76 14.02 7.844 19.096l177.412 177.412c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652L134.72 284.406h329.992c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z' />
          </svg>
        </BackLink>
        {children || (
          <div tw='space-y-4 text-xl'>
            <p>
              A proof of concept to test how easily Tailwind UI's component
              library works with Twin and Stitches.
            </p>
            <div>Choose a component to get started</div>
            <Nav menuVisible display='inline' />
          </div>
        )}
      </StyledDemoWrapper>
    </StyledContainer>
  );
};
