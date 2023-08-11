import React from "react";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GitHub } from "../components/Icons";

export const metadata = {
  title: "Kostiantyn | Projects page",
  description: "Full stack developer Kostiantyn Bukhantsev",
};

export const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}) => {
  return (
    <article>
      <Link href={link} target="_blanc">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div>
        <span>{type}</span>
        <Link href={link} target="_blanc">
          <h2>{title}</h2>
        </Link>
      </div>

      <p>{summary}</p>

      <div>
        <Link href={github} target="_blanc">
          <GitHub />
        </Link>
        <Link href={github} target="_blanc">
          Visit Project
        </Link>
      </div>
    </article>
  );
};

const ProjectsPage = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <AnimatedText text="Imagination Trumps Knowledge!" />
      <div className="grid grid-cols-12 gap-24">
        <div className="col-span-12">Featured project</div>
        <div className="col-span-6">Project 1</div>
        <div className="col-span-6">Project 2</div>
        <div className="col-span-12">Featured project</div>
        <div className="col-span-6">Project 3</div>
        <div className="col-span-6">Project 4</div>
      </div>
    </section>
  );
};

export default ProjectsPage;
