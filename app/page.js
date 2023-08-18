import Image from "next/image";
import profilePic from "/public/images/profile/developer-pic-1.png";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
import TransitionEffect from "../components/TransitionEffect";

const Home = () => {
  return (
    <>
      <TransitionEffect />
      <section className="flex items-center justify-between w-full lg:flex-col lg:py-16">
        <div className="w-1/2 relative md:w-full">
          <Image
            src={profilePic}
            alt=""
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className="lg:hidden md:inline-block"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="!text-6xl !text-left 
          xl:!text-center xl:!text-5xl 
          lg:!text-center lg:!text-6xl
          md:!text-5xl
          sm:!text-3xl"
          />
          <p className="my-4 text-base font-medium md:test-sm sm:text-xs">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex items-center self-start mt-2 lg:w-full lg:justify-center">
            <Link
              href="/files/Kostiantyn_Bukhantsev_JuniorFrontEnd.pdf"
              target={"_blanc"}
              className="flex items-center bg-dark text-light p-2.5 px-6
             rounded-lg text-lg font-semibold border-2 border-solid border-transparent 
             hover:bg-light hover:text-dark hover:border-dark
             dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
             hover:dark:border-light
             md:p-2 md:px-4 md:text-base"
              download={true}
            >
              Resume
              <LinkArrow className={"w-6 ml-1"} />
            </Link>
            <Link
              href="mailto:k.buhantsev@gmail.com"
              target={"_blanc"}
              className="ml-4 text-lg font-medium capitalize text-dark underline
            dark:text-light md:text-base"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
