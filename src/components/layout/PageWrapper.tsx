// import { styled, config, css } from '@/styles/stitches.config';
import Head from 'next/head';
import { forwardRef } from 'react';

type PageWrapperProps = {
  children: React.ReactNode;
  background?: string;
  gap?: number;
  title?: string;
  sideBarActive?: any;
  css?: any;
};

export const PageWrapper = forwardRef((props: PageWrapperProps, ref: any) => {
  const { css, title, children, background, gap, sideBarActive, ...rest } =
    props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
});

export const PageWrapper2 = ({
  css,
  title,
  children,
  background,
  gap,
  ...rest
}: PageWrapperProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

PageWrapper.defaultProps = {
  title: 'UI Test',
};
