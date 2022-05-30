import { styled } from '@/styles/stitches.config';
import tw from 'twin.macro';

/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline';

const features = [
  {
    name: 'Invite team members',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Notifications',
    description:
      'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
  },
  {
    name: 'List view',
    description:
      'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
  },
  {
    name: 'Boards',
    description:
      'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
  },
  {
    name: 'Keyboard shortcuts',
    description:
      'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
  },
  {
    name: 'Reporting',
    description:
      'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
  },
  {
    name: 'Calendars',
    description:
      'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
  },
  {
    name: 'Mobile app',
    description:
      'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
  },
];

export function FeatureList() {
  return (
    <div>
      <div tw='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        <div tw='mx-auto max-w-3xl text-center'>
          <h2 tw='text-title2 text-gray-900'>
            Compare all our savings accounts
          </h2>
          <p tw='mt-4 text-subhead leading-normal text-gray-600'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <dl tw='mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8'>
          {features.map((feature) => (
            <div key={feature.name} tw='relative'>
              <dt>
                <CheckIcon
                  tw='absolute h-6 w-6 text-green-500'
                  aria-hidden='true'
                />
                <p tw='ml-9 text-lg font-medium leading-6 text-gray-900'>
                  {feature.name}
                </p>
              </dt>
              <dd tw='mt-2 ml-9 text-base text-gray-500'>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
