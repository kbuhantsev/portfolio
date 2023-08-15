"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { GitHub, LinkedIn } from "./Icons";
import SocialLink from "./SocialLink";
import CustomLink from "./CustomLink";
import ThemeSwitcher from "./ThemeSwitcher";
import CustomMobileLink from "./CustomMobileLink";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-20 py-8 font-medium flex items-center justify-between relative">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mr-4" />
          <CustomLink href="/projects" title="Projects" className="mr-4" />
          <CustomLink href="/articles" title="Articles" />
        </nav>

        <nav className="flex items-center gap-3">
          <SocialLink href="https://github.com/kbuhantsev">
            <GitHub width="2em" height="3em" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/kbuhantsev">
            <LinkedIn width="2em" height="3em" />
          </SocialLink>
          <ThemeSwitcher />
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen ? (
        <div
          className="min-w-[70vw] flex flex-col justify-between items-center
       fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 
       bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 "
        >
          <nav className="flex items-center flex-col justify-center gap-3 mb-3">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center gap-3">
            <SocialLink href="https://github.com/kbuhantsev">
              <GitHub width="2em" height="3em" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/kbuhantsev">
              <LinkedIn width="2em" height="3em" />
            </SocialLink>
            <ThemeSwitcher />
          </nav>
        </div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
