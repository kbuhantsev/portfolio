"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GitHub, LinkedIn } from "./Icons";
import { animate, motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-1
        group-hover:w-full transition-[width] ease duration-300
        ${pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const SocialLink = motion(Link);

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
        <SocialLink
          href="https://github.com/kbuhantsev"
          target={"_blanc"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <GitHub width="2em" height="3em" />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/kbuhantsev"
          target={"_blanc"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
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
