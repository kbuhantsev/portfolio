import Image from "next/image";
import profilePic from "/public/images/profile/developer-pic-1.png";
import AnimatedText from "./components/AnimatedText";

export default function Home() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="w-1/2">
        <Image src={profilePic} alt="" width={500} height={500} />
      </div>
      <div className="w-1/2 flex flex-col items-center self-center">
        <AnimatedText
          text="Turning Vision Into Reality With Code And Design."
          className="!text-5xl text-left"
        />
        <p>
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
      </div>
    </div>
  );
}
