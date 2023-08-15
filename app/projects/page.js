import React from "react";
import AnimatedText from "../components/AnimatedText";
import FeaturedProject from "../components/FeaturedProject";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import Project from "../components/Project";

export const metadata = {
  title: "Kostiantyn | Projects page",
  description: "Full stack developer Kostiantyn Bukhantsev",
};

const ProjectsPage = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
      <div className="grid grid-cols-12 gap-24 gap-y-32">
        <div className="col-span-12">
          <FeaturedProject
            type="Featured Project "
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
            img={project1}
            link="/"
            github="/"
          />
        </div>
        <div className="col-span-6">
          <Project
            type="Project "
            title="Crypto Screener Application"
            img={project1}
            link="/"
            github="/"
          />
        </div>
        <div className="col-span-6">
          <Project
            type="Project "
            title="Crypto Screener Application"
            img={project1}
            link="/"
            github="/"
          />
        </div>
        <div className="col-span-12">
          <FeaturedProject
            type="Featured Project "
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
            img={project1}
            link="/"
            github="/"
          />
        </div>
        <div className="col-span-6">
          <Project
            type="Project "
            title="Crypto Screener Application"
            img={project1}
            link="/"
            github="/"
          />
        </div>
        <div className="col-span-6">
          <Project
            type="Project "
            title="Crypto Screener Application"
            img={project1}
            link="/"
            github="/"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
