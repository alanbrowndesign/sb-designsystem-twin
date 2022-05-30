import tw from 'twin.macro';
import { PageWrapper, ShawbrookLogo } from '@/components';
import { styled, globalCss } from '@/styles/stitches.config';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';

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

export default function DemoappPage() {
  globalStyles();
  return (
    <PageWrapper>
      <div tw='flex min-h-full'>
        <div tw='bg-white flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div tw='mx-auto w-full max-w-sm'>
            <div tw='space-y-10'>
              <ShawbrookLogo
                css={{
                  height: 64,
                }}
              />

              <h2 tw='mt-6 text-title2 text-primary-pink'>
                Sign in to your account
              </h2>
            </div>

            <div tw='mt-8'>
              <div tw='mt-6'>
                <form action='#' method='POST' tw='space-y-6'>
                  <div>
                    <label htmlFor='email' tw='block text-body text-gray-700'>
                      Email address
                    </label>
                    <div tw='mt-1'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        tw='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500'
                      />
                    </div>
                  </div>

                  <div tw='space-y-1'>
                    <label
                      htmlFor='password'
                      tw='block text-body text-gray-700'
                    >
                      Password
                    </label>
                    <div tw='mt-1'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        tw='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500'
                      />
                    </div>
                  </div>

                  <div tw='flex items-center justify-between'>
                    <div tw='flex items-center'>
                      <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        tw='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-pink-500'
                      />
                      <label
                        htmlFor='remember-me'
                        tw='ml-2 block text-sm text-gray-900'
                      >
                        Remember me
                      </label>
                    </div>

                    <div tw='text-sm'>
                      <a
                        href='#'
                        tw='underline font-medium text-pink-600 hover:text-pink-500'
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <Link href='/demoapp/dashboard'>
                      <a tw='cursor-pointer flex w-full justify-center border-radius[8px 0 8px 0] border border-transparent bg-primary-pink py-2 px-4 text-subhead text-white shadow-sm hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2'>
                        Sign in
                      </a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div tw='relative hidden w-0 flex-1 lg:block'>
          <Image
            tw='absolute inset-0 h-full w-full object-cover'
            src='/images/lifestyle-1.webp'
            alt=''
            layout='fill'
          />
        </div>
      </div>
    </PageWrapper>
  );
}
