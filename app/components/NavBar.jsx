import React from "react";
import Logo from "./Logo";
import { GitHub, LinkedIn } from "./Icons";
import SocialLink from "./SocialLink";
import CustomLink from "./CustomLink";

const NavBar = () => {
  return (
    <header className="w-full px-20 py-8 font-medium flex items-center justify-between">
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
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
