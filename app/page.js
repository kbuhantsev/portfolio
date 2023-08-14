import Image from "next/image";
import profilePic from "/public/images/profile/developer-pic-1.png";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";

export default function Home() {
  return (
    <section className="flex items-center justify-between w-full">
      <div className="w-1/2">
        <Image src={profilePic} alt="" width={500} height={500} />
      </div>
      <div className="w-1/2 flex flex-col items-center self-center">
        <AnimatedText
          text="Turning Vision Into Reality With Code And Design."
          className="!text-5xl text-left "
        />
        <p className="my-4 text-base font-medium">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
        <div className="flex items-center self-start mt-2">
          <Link
            href="/files/Kostiantyn_Bukhantsev_JuniorFrontEnd.pdf"
            target={"_blanc"}
            className="flex items-center bg-dark text-light p-2.5 px-6
             rounded-lg text-lg font-semibold border-2 border-solid border-transparent 
             hover:bg-light hover:text-dark hover:border-dark
             dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
             hover:dark:border-light"
            download={true}
          >
            Resume
            <LinkArrow className={"w-6 ml-1"} />
          </Link>
          <Link
            href="mailto:k.buhantsev@gmail.com"
            target={"_blanc"}
            className="ml-4 text-lg font-medium capitalize text-dark underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
