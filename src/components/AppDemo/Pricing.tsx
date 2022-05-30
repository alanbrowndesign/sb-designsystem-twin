import tw from 'twin.macro';

/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline';

const hobbyFeatures = [
  'Pariatur quod similique',
  'Sapiente libero doloribus',
  'Vel ipsa esse repudiandae',
];
const scaleFeatures = [
  'Pariatur quod similique',
  'Sapiente libero doloribus',
  'Vel ipsa esse repudiandae',
];
const growthFeatures = [
  'Quia rem est sed impedit magnam',
  'Dolorem vero ratione voluptates',
  'Qui sed ab doloribus voluptatem dolore',
  'Laborum commodi molestiae id et fugiat',
  'Nam ut ipsa nesciunt culpa modi dolor',
];

export function Pricing() {
  return (
    <div>
      <div tw='px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20'>
        <div>
          <h2 tw='text-heading uppercase leading-6 tracking-wider text-gray-800'>
            Your savings
          </h2>
          <p tw='mt-2 text-title2 text-primary-pink'>
            The right rate for you, whoever you are
          </p>
          <p tw='mt-3 max-w-3xl text-heading font-normal leading-normal text-gray-700'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            numquam eligendi quos odit doloribus molestiae voluptatum.
          </p>
        </div>
      </div>

      <div tw='mt-16 pb-12 lg:mt-20 lg:pb-20'>
        <div tw='relative z-0'>
          <div tw='absolute inset-0 h-5/6 lg:h-2/3' />
          <div tw='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div tw='relative lg:grid lg:grid-cols-7'>
              <div tw='mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none'>
                <div tw='flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg'>
                  <div tw='flex flex-1 flex-col'>
                    <div tw='bg-white px-6 py-10'>
                      <div>
                        <h3
                          tw='text-center text-2xl font-medium text-gray-900'
                          id='tier-hobby'
                        >
                          Hobby
                        </h3>
                        <div tw='mt-4 flex items-center justify-center'>
                          <span tw='flex items-start px-3 text-6xl tracking-tight text-gray-900'>
                            <span tw='mt-2 mr-2 text-4xl font-medium'>$</span>
                            <span tw='font-extrabold'>79</span>
                          </span>
                          <span tw='text-xl font-medium text-gray-500'>
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div tw='flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10'>
                      <ul role='list' tw='space-y-4'>
                        {hobbyFeatures.map((feature) => (
                          <li key={feature} tw='flex items-start'>
                            <div tw='flex-shrink-0'>
                              <CheckIcon
                                tw='h-6 w-6 flex-shrink-0 text-green-500'
                                aria-hidden='true'
                              />
                            </div>
                            <p tw='ml-3 text-base font-medium text-gray-500'>
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div tw='mt-8'>
                        <div tw='rounded-lg shadow-md'>
                          <a
                            href='#'
                            tw='block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-pink-600 hover:bg-gray-50'
                            aria-describedby='tier-hobby'
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div tw='mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none'>
                <div tw='relative z-10 rounded-lg shadow-xl'>
                  <div
                    tw='pointer-events-none absolute inset-0 rounded-lg border-2 border-pink-600'
                    aria-hidden='true'
                  />
                  <div tw='absolute inset-x-0 top-0 translate-y-px transform'>
                    <div tw='flex -translate-y-1/2 transform justify-center'>
                      <span tw='inline-flex rounded-full bg-pink-600 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-white'>
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div tw='rounded-t-lg bg-white px-6 pt-12 pb-10'>
                    <div>
                      <h3
                        tw='text-center text-3xl font-semibold text-gray-900 sm:-mx-6'
                        id='tier-growth'
                      >
                        Growth
                      </h3>
                      <div tw='mt-4 flex items-center justify-center'>
                        <span tw='flex items-start px-3 text-6xl tracking-tight text-gray-900 sm:text-6xl'>
                          <span tw='mt-2 mr-2 text-4xl font-medium'>$</span>
                          <span tw='font-extrabold'>149</span>
                        </span>
                        <span tw='text-2xl font-medium text-gray-500'>
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                  <div tw='rounded-b-lg border-t-2 border-gray-100 bg-gray-50 px-6 pt-10 pb-8 sm:px-10 sm:py-10'>
                    <ul role='list' tw='space-y-4'>
                      {growthFeatures.map((feature) => (
                        <li key={feature} tw='flex items-start'>
                          <div tw='flex-shrink-0'>
                            <CheckIcon
                              tw='h-6 w-6 flex-shrink-0 text-green-500'
                              aria-hidden='true'
                            />
                          </div>
                          <p tw='ml-3 text-base font-medium text-gray-500'>
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div tw='mt-10'>
                      <div tw='rounded-lg shadow-md'>
                        <a
                          href='#'
                          tw='block w-full rounded-lg border border-transparent bg-primary-pink px-6 py-4 text-center text-xl font-medium leading-6 text-white hover:bg-pink-700'
                          aria-describedby='tier-growth'
                        >
                          Start your trial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div tw='mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none'>
                <div tw='flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg'>
                  <div tw='flex flex-1 flex-col'>
                    <div tw='bg-white px-6 py-10'>
                      <div>
                        <h3
                          tw='text-center text-2xl font-medium text-gray-900'
                          id='tier-scale'
                        >
                          Scale
                        </h3>
                        <div tw='mt-4 flex items-center justify-center'>
                          <span tw='flex items-start px-3 text-6xl tracking-tight text-gray-900'>
                            <span tw='mt-2 mr-2 text-4xl font-medium'>$</span>
                            <span tw='font-extrabold'>349</span>
                          </span>
                          <span tw='text-xl font-medium text-gray-500'>
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div tw='flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10'>
                      <ul role='list' tw='space-y-4'>
                        {scaleFeatures.map((feature) => (
                          <li key={feature} tw='flex items-start'>
                            <div tw='flex-shrink-0'>
                              <CheckIcon
                                tw='h-6 w-6 flex-shrink-0 text-green-500'
                                aria-hidden='true'
                              />
                            </div>
                            <p tw='ml-3 text-base font-medium text-gray-500'>
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div tw='mt-8'>
                        <div tw='rounded-lg shadow-md'>
                          <a
                            href='#'
                            tw='block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-pink-600 hover:bg-gray-50'
                            aria-describedby='tier-scale'
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
