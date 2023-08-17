import AnimatedText from "../components/AnimatedText";
import profileImage from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";

import Skills from "../components/Skills";
import Expirience from "../components/Expirience";
import AnimatedNumbers from "../components/AnimatedNumbers";
import Education from "../components/Education";
import TransitionEffect from "../components/TransitionEffect";

export const metadata = {
  title: "Kostiantyn | About page",
  description: "Full stack developer Kostiantyn Bukhantsev",
};

const AboutPage = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center mb-[250px]">
      <TransitionEffect />
      <AnimatedText
        text="Passion Fuels Purpose!"
        className="!mt-16 !mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8"
      />
      <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
            Biography
          </h2>
          <p className="font-medium">
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
        <div
          className="col-span-3 h-max rounded-2xl border-solid border-2 border-dark bg-light
        p-8 shadow-2xl xl:col-span-4 md:order-1 md:col-span-8"
        >
          <Image
            src={profileImage}
            alt="profile image"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row md:order-3">
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumbers value={50} />+
            </span>
            <h2
              className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center
            md:text-lg sm:text-base xs:text-sm"
            >
              satisfied clients
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumbers value={40} />+
            </span>
            <h2
              className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center
            md:text-lg sm:text-base xs:text-sm"
            >
              projects completed
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumbers value={4} />+
            </span>
            <h2
              className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center
            md:text-lg sm:text-base xs:text-sm"
            >
              years of experience
            </h2>
          </div>
        </div>
      </div>
      <Skills />
      <Expirience />
      <Education />
    </section>
  );
};

export default AboutPage;
