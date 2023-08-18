import React from 'react';

const Layout = ({ children, className = '' }) => {
  return (
    <div
      className={`${className} w-full min-h-screen inline-block z-0
       bg-light text-dark dark:bg-dark dark:text-light
       px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8
       pt-0 md:pt-16 sm:pt-8`}
    >
      {children}
    </div>
  );
};

export default Layout;
