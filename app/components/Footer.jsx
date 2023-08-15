import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark 
      font-medium text-lg mt-5 px-20 dark:border-light"
    >
      <div className="py-5 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All rights Reserved</span>
        <div>Build with &#x1f495; in NextJS</div>
        <Link href="mailto:k.buhantsev@gmail.com" target="_blanc">
          Say hello
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
