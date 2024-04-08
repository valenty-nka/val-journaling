"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FableIcon, GithubIcon, GoodreadsIcon, PinterestIcon } from "../Icons";
import Link from "next/link";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <footer className="mt-16 bg-slate-600 p-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-thin text-4xl text-center capitalize">
        Finance & Investments | Book Reviews | Interesting Stories
      </h3>
      <p className="mt-5 px-4 text-center w-2/5 font-light text-base">
        Subscribe to learn about financial freedom for everybody. Let's inspire
        and support each other and achieve our goals together!
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 min-w-[384px] flex items-stretch bg-light p-2 mx-4"
      >
        <input
          className="w-full pl-0 bg-transparent text-accent focus:border-accent focus:ring-0 border-0 border-b mr-2 pb-1"
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />

        <input
          type="submit"
          className="bg-accent text-light cursor-pointer font-light px-5 py-1 hover:scale-105 duration-300 transition-all ease-in"
        />
      </form>
      <div className="flex items-center mt-8">
        <a
          href="https://www.pinterest.ca/valjournaling/"
          className="inline-block w-8 h-8 mr-4"
        >
          <PinterestIcon className="hover:scale-105" />
        </a>
        <a
          href="https://github.com/valenty-nka"
          className="inline-block w-8 h-8 mr-4"
        >
          <GithubIcon />
        </a>
        <a
          href="https://fable.co/valenty-nka-105444683978"
          className="inline-block w-8 h-[34px] mr-4"
        >
          <FableIcon className="w-full h-full" />
        </a>
        <a
          href="https://www.goodreads.com/user/show/104324911-valentyna"
          className="inline-block w-8 h-8"
        >
          <GoodreadsIcon />
        </a>
      </div>
      <div className="mt-12 py-12 w-full relative font-light border-t border-solid border-slate-400 flex items-center justify-between">
        <p className="inline-block flex-1">
          &copy; 2024 <span className="font-accent font-normal"> Val </span>
          Journaling. All rights reserved.
        </p>
        <Link
          href={"/sitemap.xml"}
          className="flex-1 text-center underline text-slate-400 hover:text-light duration-300 transition-all ease-in underline-offset-4"
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
