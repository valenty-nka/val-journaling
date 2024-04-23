"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FableIcon,
  GithubIcon,
  GoodreadsIcon,
  PinterestIcon,
  LinkedinIcon,
} from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

function SubscribeForm() {
  const [state, handleSubmit] = useForm("xdoqyglz");

  if (state.succeeded) {
    return <p className="font-semibold text-sm mt-4">Thanks for joining!</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      action="https://formspree.io/f/xdoqyglz"
      className="mt-6 w-fit xs:min-w-[384px] flex items-stretch bg-light p-2 mx-4"
    >
      <input
        className="w-full pl-0 bg-transparent text-accent focus:border-accent focus:ring-0 border-0 border-b mr-2 pb-1"
        type="email"
        placeholder="Enter your email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-accent text-light cursor-pointer font-light px-5 py-2 md:py-1 hover:bg-accent/80 duration-300 transition-all ease"
      >
        {state.submitting ? "Loading" : "Submit"}
      </button>
    </form>
  );
}

const Footer = () => {
  return (
    <footer className="mt-6 sm:mt-8 lg:mt-16 bg-slate-600  p-1 sm:p-2 md:p-5 lg:p-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-thin text-2xl sm:text-3xl  lg:text-4xl text-center capitalize">
        Finance & Investments | Book Reviews | Interesting Stories
      </h3>
      <p className="mt-5 px-4 text-center w-full md:w-3/4 xl:w-2/5 font-light text-sm sm:text-base">
        Subscribe to learn about financial freedom for everybody. Let's inspire
        and support each other and achieve our goals together!
      </p>

      <SubscribeForm />

      <div className="flex items-center mt-8">
        <a href={siteMetadata.pinterest} className="inline-block w-8 h-8 mr-4">
          <PinterestIcon className="hover:scale-105" />
        </a>
        <a href={siteMetadata.github} className="inline-block w-8 h-8 mr-4">
          <GithubIcon />
        </a>
        <a href={siteMetadata.fable} className="inline-block w-8 h-[34px] mr-4">
          <FableIcon className="w-full h-full" />
        </a>
        <a href={siteMetadata.goodreads} className="inline-block w-8 h-8 mr-4">
          <GoodreadsIcon />
        </a>
        <a href={siteMetadata.linkedin} className="inline-block w-7 h-7">
          <LinkedinIcon />
        </a>
      </div>
      <div className="mt-6 md:mt-12 py-12 w-full relative font-light border-t border-solid border-slate-400 flex flex-col md:flex-row items-center justify-between">
        <p className="inline-block flex-1">
          &copy; 2024 <span className="font-accent font-normal"> Val </span>
          Journaling. All rights reserved.
        </p>
        <Link
          href={"/sitemap.xml"}
          className="flex-1 text-center underline text-slate-400 hover:text-light duration-300 transition-all ease-in underline-offset-4  my-5 md:my-0"
        >
          sitemap
        </Link>
        <div className="text-right flex-1">
          Made with ❤ by{" "}
          <a
            href="https://github.com/valenty-nka"
            className="text-slate-400 hover:text-light duration-300 transition-all ease-in underline-offset-4"
          >
            Val
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
