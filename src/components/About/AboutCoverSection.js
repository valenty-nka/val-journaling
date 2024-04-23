import React from "react";
import Image from "next/image";
import profileCharacter from "@/public/character.jpg";

const AboutCoverSection = () => {
  return (
    <section className="w-[95%] md:w-[80%] lg:w-[60%] mx-auto border-[1px] border-solid border-accent/40 flex flex-col items-center justify-center text-dark">
      <div className="w-full h-1/2 border-b-[1px] border-solid border-accent/50 flex justify-center">
        <Image
          src={profileCharacter}
          alt="ValJournaling"
          className="w-full h-full object-cover object-center"
          priority
          sizes="(max-width:1200px) 100vw, 50vw"
        />
      </div>
      <div className="w-full p-4 lg:p-16 flex flex-col text-left items-start justify-center">
        <h2 className="font-thin capitalize text-2xl lg:text-4xl">
          Dream Big, Work Hard, Achieve More!
        </h2>
        <p className=" mt-4 text-base">
          Hello, fellow financial enthusiasts! I'm Valentyna, and I'm delighted
          to welcome you to this space where we'll journey together towards
          financial empowerment. While my roots trace back to Ukraine, life's
          led me to Canada, where I currently reside amidst the breathtaking
          landscapes of Newfoundland.
        </p>
        <p className="mt-4 text-base">
          I've traversed countries and continents, soaking in the rich cultures
          of places like France, Germany, Switzerland, and the Netherlands. But
          amidst my travels, one constant companion has been my passion for
          learning—whether through the pages of fiction novels or the insightful
          depths of non-fiction literature.
        </p>
        <p className="mt-4 text-base">
          And it's this love for learning that has sparked my latest quest:
          mastering the art of personal finance. As I delve into the realms of
          money management and investing, I'm eager to share my discoveries and
          insights with you. After all, I firmly believe that it's never too
          late to start learning, and what better way to begin than with the
          wealth of knowledge found within the pages of a book?
        </p>
        <p className="mt-4 text-base">
          On this blog, we'll debunk the myth that financial independence is
          reserved for the lucky few or those with a predetermined career path.
          Instead, we'll embrace the notion that with dedication, education, and
          a sprinkle of inspiration, anyone can break free from the shackles of
          the rat race and chart their own course towards financial freedom.
        </p>
        <p className="mt-4 text-base">
          However, let me make one thing clear: while I'm passionate about
          sharing what I've learned, I'm not a financial advisor. This blog is a
          personal endeavor, intended for educational purposes only. Any
          information shared here should be used for learning and informational
          purposes, never as a substitute for professional financial advice. If
          you're seeking personalized financial guidance, I encourage you to
          consult with qualified professionals who can provide the tailored
          assistance you need.
        </p>
        <p className="mt-4 text-base">
          So, whether you're a seasoned investor or a curious beginner, grab a
          cup of tea, settle into a cozy nook, and let's embark on this journey
          towards financial freedom together. Here's to unlocking the doors to a
          brighter financial future!
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
