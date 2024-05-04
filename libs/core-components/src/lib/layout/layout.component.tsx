import classNames from 'classnames';
import { ReactNode } from 'react';
import { Head } from '../head.component';
// import { Breadcrumb } from './breadcrumb.component';
// import { Header } from './header.component';

type LayoutProps = {
  title?: string;
  breadcrumb?: string;
  heading?: string;
  wrapperClass?: string;
  children: ReactNode;
  head?: ReactNode;
};

// const DynamicPopupButton = dynamic(
//   () => import('react-calendly').then((mod) => mod.PopupWidget),
//   {
//     ssr: false,
//   }
// );

export const Layout = ({
  title,
  breadcrumb,
  heading,
  wrapperClass,
  head,
  children,
}: LayoutProps) => {
  return (
    <>
      <Head {...{ title }}>{head}</Head>
      <section
        className={classNames(wrapperClass ? wrapperClass : 'main-homepage')}
      >
        {/* <Header /> */}
        {/* {breadcrumb && <Breadcrumb {...{ breadcrumb, heading }} />} */}
        {children}
      </section>
      {/* <DynamicPopupButton
        url="https://calendly.com/msalanvarov"
        rootElement={document.getElementById('__next') as HTMLElement}
        text="☕ Chat with Sal"
        color="#5b78f6"
      />
      <Footer /> */}
    </>
  );
};
