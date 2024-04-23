import React from "react";

const SkillList = [
  "personal finance",
  "money management",
  "investing",
  "stocks",
  "self development",
  "books",
  "time-management",
  "inspiration",
  "passive income ideas",
  "credit",
  "personal growth",
];

const Skills = () => {
  return (
    <section className="w-full flex-col p-4 sm:p-10 md:p-16 lg:p-20 border-b-[1px] border-solid border-accent/50 text-dark">
      <span className="font-normal text-xl md:text-2xl text-accent">
        Topics you can expect to be covered here include:
      </span>
      <ul className="flex flex-wrap mt-8 justify-center xs:justify-start"></ul>
      {SkillList.map((skill, index) => {
        return (
          <li
            key={index}
            className="inline-block mr-2 mb-2 xs:mr-4 xs:mb-4 md:mr-6 md:mb-6 capitalize px-2 py-1 md:px-8 md:py-4 border-[1px] border-solid border-accent
            hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer"
          >
            {skill}
          </li>
        );
      })}
    </section>
  );
};

export default Skills;
