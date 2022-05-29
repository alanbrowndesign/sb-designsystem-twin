import tw from 'twin.macro';
import { PageWrapper, ShawbrookLogo } from '@/components';
import { FeatureList, Pricing, Stats } from '@/components/AppDemo';
import { styled, globalCss } from '@/styles/stitches.config';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Menu as HeadlessMenu } from '@headlessui/react';
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';

const StyledMenuButton = styled(HeadlessMenu.Button, {
  ...tw`max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500`,
});

const navigation = [
  {
    name: 'Dashboard',
    href: '#',
    icon: <HomeIcon tw='mr-4 flex-shrink-0 h-6 w-6 text-pink-900' />,
    current: true,
  },
  {
    name: 'Team',
    href: '#',
    icon: <UsersIcon tw='mr-4 flex-shrink-0 h-6 w-6 text-pink-900' />,
    current: false,
  },
  {
    name: 'Projects',
    href: '#',
    icon: <FolderIcon tw='mr-4 flex-shrink-0 h-6 w-6 text-pink-900' />,
    current: false,
  },
  {
    name: 'Calendar',
    href: '#',
    icon: <CalendarIcon tw='mr-4 flex-shrink-0 h-6 w-6 text-pink-900' />,
    current: false,
  },
  {
    name: 'Documents',
    href: '#',
    icon: <InboxIcon tw='mr-4 flex-shrink-0 h-6 w-6 text-pink-900' />,
    current: false,
  },
  {
    name: 'Reports',
    href: '#',
    icon: <ChartBarIcon tw='mr-4 flex-shrink-0 h-6 w-6 text-pink-900' />,
    current: false,
  },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const globalStyles = globalCss({
  html: {
    ...tw`h-full bg-gray-100`,
  },
  body: {
    ...tw`h-full bg-gray-100`,
  },
  '#__next': {
    ...tw`h-full`,
  },
});

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function DashboardPage() {
  globalStyles();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <PageWrapper>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            tw='relative z-40 md:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div tw='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            <div tw='fixed inset-0 flex z-40'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel tw='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-pink-700'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div tw='absolute top-0 right-0 -mr-12 pt-2'>
                      <button
                        type='button'
                        tw='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span tw='sr-only'>Close sidebar</span>
                        <XIcon tw='h-6 w-6 text-white' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div tw='flex-shrink-0 flex items-center px-4'>
                    <img
                      tw='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg'
                      alt='Workflow'
                    />
                  </div>
                  <div tw='mt-5 flex-1 h-0 overflow-y-auto'>
                    <nav tw='px-2'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='group'
                          css={[
                            tw`flex items-center rounded-md px-2 py-2 text-base font-medium`,
                            item.current
                              ? 'bg-indigo-800 text-white'
                              : 'text-indigo-100 hover:bg-indigo-600',
                          ]}
                        >
                          <div tw='flex gap-3 mt-10'>
                            {item.icon}
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div tw='flex-shrink-0 w-14' aria-hidden='true'>
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div tw='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div tw='flex flex-col flex-grow pt-5 bg-primary-pink overflow-y-auto'>
            <div tw='flex items-center flex-shrink-0 px-4'>
              <ShawbrookLogo
                css={{
                  height: 40,
                  path: {
                    fill: 'white',
                  },
                }}
              />
            </div>
            <div tw='mt-5 flex-1 flex flex-col'>
              <nav tw='flex-1 px-2 pb-4'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='group'
                    css={[
                      tw`flex items-center rounded-md px-2 py-2 text-sm font-medium`,
                      item.current
                        ? 'bg-indigo-800 text-white'
                        : 'text-indigo-100 hover:bg-indigo-600',
                    ]}
                  >
                    <div tw='flex mt-4'>
                      {item.icon}
                      <div tw='text-white'>{item.name}</div>
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div tw='md:pl-64 flex flex-col flex-1'>
          <div tw='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow'>
            <button
              type='button'
              tw='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span tw='sr-only'>Open sidebar</span>
              <MenuAlt2Icon tw='h-6 w-6' aria-hidden='true' />
            </button>
            <div tw='flex-1 px-4 flex justify-between'>
              <div tw='flex-1 flex'>
                <form tw='w-full flex md:ml-0' action='#' method='GET'>
                  <label htmlFor='search-field' tw='sr-only'>
                    Search
                  </label>
                  <div tw='relative w-full text-gray-400 focus-within:text-gray-600'>
                    <div tw='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                      <SearchIcon tw='h-5 w-5' aria-hidden='true' />
                    </div>
                    <input
                      id='search-field'
                      tw='block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                      placeholder='Search'
                      type='search'
                      name='search'
                    />
                  </div>
                </form>
              </div>
              <div tw='ml-4 flex items-center md:ml-6'>
                <button
                  type='button'
                  tw='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span tw='sr-only'>View notifications</span>
                  <BellIcon tw='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Profile dropdown */}
                <HeadlessMenu as='div'>
                  <StyledMenuButton>
                    <span tw='sr-only'>Open user menu</span>
                    <img
                      tw='h-8 w-8 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </StyledMenuButton>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <HeadlessMenu.Items tw='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      {userNavigation.map((item) => (
                        <HeadlessMenu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </HeadlessMenu.Item>
                      ))}
                    </HeadlessMenu.Items>
                  </Transition>
                </HeadlessMenu>
              </div>
            </div>
          </div>

          <main>
            <div tw='py-6'>
              <div tw='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                <h1 tw='text-title1 text-primary-pink'>Savings Dashboard</h1>
              </div>
              <div tw='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                {/* Replace with your content */}
                <div tw='py-4 space-y-10'>
                  <Stats />
                  <FeatureList />
                  <Pricing />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </PageWrapper>
  );
}
