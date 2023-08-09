import React from "react";
import AnimatedText from "../components/AnimatedText";

export const metadata = {
  title: "Kostiantyn | About page",
  description: "Full stack developer Kostiantyn Bukhantsev",
};

const AboutPage = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <AnimatedText text="Passion Fuels Purpose!" />
      <div></div>
    </main>
  );
};

export default AboutPage;
