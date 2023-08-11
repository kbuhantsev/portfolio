"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionedLink = motion(Link);

const SocialLink = ({ href, children }) => {
  return (
    <MotionedLink
      href={href}
      target={"_blanc"}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </MotionedLink>
  );
};

export default SocialLink;
