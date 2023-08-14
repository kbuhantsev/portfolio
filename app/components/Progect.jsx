import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GitHub } from "../components/Icons";

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center 
    rounded-2xl border border-solid border-dark bg-light p-6 relative shadow-2xl mb-16"
    >
      <Link
        href={link}
        target="_blanc"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-fill flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blanc"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex justify-between items-center">
          <Link
            href={link}
            target="_blanc"
            className="text-lg font-semibold hover:underline underline-offset-2"
          >
            Visit
          </Link>
          <Link href={github} target="_blanc" className="w-8">
            <GitHub />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
