import tw from 'twin.macro';
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';

export const HeaderBanner = () => {
  return (
    <div tw='bg-indigo-600'>
      <div tw='mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8'>
        <div tw='flex flex-wrap items-center justify-between'>
          <div tw='flex w-0 flex-1 items-center'>
            <span tw='flex rounded-lg bg-indigo-800 p-2'>
              <SpeakerphoneIcon tw='h-6 w-6 text-white' aria-hidden='true' />
            </span>
            <p tw='ml-3 truncate font-medium text-white'>
              <span tw='md:hidden'>We announced a new product!</span>
              <span tw='hidden md:inline'>
                Big news! We're excited to announce a brand new product.
              </span>
            </p>
          </div>
          <div tw='order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto'>
            <a
              href='#'
              tw='flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50'
            >
              Learn more
            </a>
          </div>
          <div tw='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
            <button
              type='button'
              tw='-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'
            >
              <span tw='sr-only'>Dismiss</span>
              <XIcon tw='h-6 w-6 text-white' aria-hidden='true' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
