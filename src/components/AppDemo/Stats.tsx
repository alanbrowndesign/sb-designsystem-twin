import { styled } from '@/styles/stitches.config';
import tw from 'twin.macro';

const StyledComponent = styled('div', {
  background: 'red',
});

type MyComponentProps = {
  children: React.ReactNode;
};

export const MyComponent = (props: MyComponentProps) => {
  const { children } = props;
  return <StyledComponent>{children}</StyledComponent>;
};

/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';
import {
  CursorClickIcon,
  MailOpenIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { css } from 'twin.macro';

const stats = [
  {
    id: 1,
    name: 'Total Subscribers',
    stat: '71,897',
    icon: <UsersIcon tw='h-6 w-6 text-white' />,
    change: '122',
    changeType: 'increase',
  },
  {
    id: 2,
    name: 'Avg. Open Rate',
    stat: '58.16%',
    icon: <MailOpenIcon tw='h-6 w-6 text-white' />,
    change: '5.4%',
    changeType: 'increase',
  },
  {
    id: 3,
    name: 'Avg. Click Rate',
    stat: '24.57%',
    icon: <CursorClickIcon tw='h-6 w-6 text-white' />,
    change: '3.2%',
    changeType: 'decrease',
  },
];

export function Stats() {
  return (
    <div>
      <h3 tw='text-lg font-medium leading-6 text-gray-900'>Last 30 days</h3>

      <dl tw='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {stats.map((item) => (
          <div
            key={item.id}
            tw='relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6'
          >
            <dt>
              <div tw='absolute rounded-md bg-secondary-blue-3 p-3'>
                {item.icon}
              </div>
              <p tw='ml-16 truncate text-sm font-medium text-gray-500'>
                {item.name}
              </p>
            </dt>
            <dd tw='ml-16 flex items-baseline pb-6 sm:pb-7'>
              <p tw='text-2xl font-semibold text-gray-900'>{item.stat}</p>
              <p
                tw='ml-2 flex items-baseline text-sm font-semibold'
                css={[
                  item.changeType === 'increase'
                    ? 'text-green-600'
                    : 'text-red-600',
                ]}
              >
                {item.changeType === 'increase' ? (
                  <ArrowSmUpIcon
                    tw='h-5 w-5 flex-shrink-0 self-center text-green-500'
                    aria-hidden='true'
                  />
                ) : (
                  <ArrowSmDownIcon
                    tw='h-5 w-5 flex-shrink-0 self-center text-red-500'
                    aria-hidden='true'
                  />
                )}

                <span tw='sr-only'>
                  {item.changeType === 'increase' ? 'Increased' : 'Decreased'}{' '}
                  by
                </span>
                {item.change}
              </p>
              <div tw='absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6'>
                <div tw='text-sm'>
                  <a
                    href='#'
                    tw='font-medium bg-primary-pink px-4 py-2 border-radius[6px 0 6px 0] text-white hover:bg-pink-500'
                  >
                    {' '}
                    View all<span tw='sr-only'> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
