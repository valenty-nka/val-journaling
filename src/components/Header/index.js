import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FableIcon, GithubIcon, GoodreadsIcon, PinterestIcon } from "../Icons";

const Header = () => {
  return (
    <header className=" w-full py-4 flex flex-col items-center bg-light/50 justify-between backdrop-blur-sm duration-300 ease-in transition-all">
      <p className="font-thin uppercase tracking-wider text-lg inline-block py-4">
        Whether you thing you can or think you can't you're right.
      </p>
      <div className="px-10 border-r-0 border-l-0 border-[1px] w-full flex items-strech justify-between border-opacity-25 border-accent">
        <Logo />
        <nav className="border-l-[1px] border-r-[1px] border-accent border-opacity-25 w-max py-2 px-28 capitalize flex items-center">
          <Link
            href="/"
            className="mr-2 hover:text-accent transition-all transition-ease-out duration-300 hover:scale-105 text-center"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="mx-4 hover:text-accent transition-all transition-ease-out duration-300 hover:scale-105 text-center"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-accent transition-all transition-ease-out duration-300 hover:scale-105 text-center"
          >
            Contact
          </Link>
        </nav>
        <div className="self-center flex items-center">
          <a
            href="https://www.pinterest.ca/valjournaling/"
            className="inline-block w-6 h-6 mr-4"
          >
            <PinterestIcon className="hover:scale-105" />
          </a>
          <a
            href="https://github.com/valenty-nka"
            className="inline-block w-6 h-7 mr-4"
          >
            <GithubIcon />
          </a>
          <a
            href="https://fable.co/valenty-nka-105444683978"
            className="inline-block w-6 h-6 mr-4"
          >
            <FableIcon />
          </a>
          <a
            href="https://www.goodreads.com/user/show/104324911-valentyna"
            className="inline-block mr-4"
          >
            <GoodreadsIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
