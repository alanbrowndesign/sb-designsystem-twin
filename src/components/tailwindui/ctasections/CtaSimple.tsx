import tw from 'twin.macro';

export const CtaSimple = () => {
  return (
    <div tw='bg-gray-50'>
      <div tw='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8'>
        <h2 tw='font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span tw='block'>Ready to dive in?</span>
          <span tw='block text-indigo-600'>Start your free trial today.</span>
        </h2>
        <div tw='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div tw='inline-flex rounded-md shadow'>
            <a
              href='#'
              tw='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700'
            >
              Get started
            </a>
          </div>
          <div tw='ml-3 inline-flex rounded-md shadow'>
            <a
              href='#'
              tw='inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50'
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
