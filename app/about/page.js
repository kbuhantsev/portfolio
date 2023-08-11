import AnimatedText from "../components/AnimatedText";
import profileImage from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";

import Skills from "../components/Skills";
import Expirience from "../components/Expirience";
import AnimatedNumbers from "../components/AnimatedNumbers";
import Education from "../components/Education";

export const metadata = {
  title: "Kostiantyn | About page",
  description: "Full stack developer Kostiantyn Bukhantsev",
};

const AboutPage = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <AnimatedText text="Passion Fuels Purpose!" className="mb-4" />
      <div className="grid w-full grid-cols-8 gap-16">
        <div className="col-span-3 flex flex-col items-start justify-start">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
            Biography
          </h2>
          <p className="font-medium ">
            Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a
            passion for creating beautiful, functional, and user-centered
            digital experiences. With 4 years of experience in the field. I am
            always looking for new and innovative ways to bring my clients
            visions to life.
          </p>
          <p className="font-medium my-4">
            I believe that design is about more than just making things look
            pretty - it&apos;s about solving problems and creating intuitive,
            enjoyable experiences for users.
          </p>
          <p className="font-medium my-4">
            Whether I&apos;m working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>
        </div>
        <div className="col-span-3 h-max rounded-2xl border-solid border-2 border-dark bg-light p-8 shadow-2xl">
          <Image
            src={profileImage}
            alt="profile image"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="col-span-2 flex flex-col items-end justify-between">
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumbers value={50} />+
            </span>
            <h1 className="text-xl font-medium capitalize text-dark/75">
              satisfied clients
            </h1>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumbers value={40} />+
            </span>
            <h1 className="text-xl font-medium capitalize text-dark/75">
              projects completed
            </h1>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumbers value={4} />+
            </span>
            <h1 className="text-xl font-medium capitalize text-dark/75">
              years of experience
            </h1>
          </div>
        </div>
      </div>
      <Skills />
      <Expirience />
      <Education />
    </main>
  );
};

export default AboutPage;
