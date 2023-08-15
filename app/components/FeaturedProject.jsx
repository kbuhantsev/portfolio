import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GitHub } from "../components/Icons";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
    dark:border-light dark:bg-dark"
    >
      <Link
        href={link}
        target="_blanc"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blanc"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blanc" className="w-10">
            <GitHub />
          </Link>
          <Link
            href={link}
            target="_blanc"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6
            text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
