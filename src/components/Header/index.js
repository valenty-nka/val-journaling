"use client";
import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
  FableIcon,
  GithubIcon,
  GoodreadsIcon,
  LinkedinIcon,
  PinterestIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";

const Header = () => {
  const [click, setClick] = useState(false);
  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="sticky top-0 right-0 left-0 px-4 w-full h-16 flex md:px-10 items-center justify-between bg-light shadow-md shadow-accent-500 z-40">
      {/* OVERLAY FOR MOBILE */}
      <div
        className="absolute w-full h-[100vh] bg-black top-16 left-0 bottom-0 right-0 z-30 md:hidden duration-500 transition-all ease-in-out pointer-events-none"
        style={{
          opacity: click ? "0.7" : "0",
        }}
      ></div>

      {/* MOBILE NAV */}
      <nav
        className="absolute w-[85%] h-[100vh] bg-light p-4 capitalize flex flex-col md:hidden duration-500 transition-all ease-in-out z-40 top-[100%] border-t-[1px] border-r-[1px] border-accent border-opacity-25 text-accent backdrop-blur-sm text-right pr-5 text-xl"
        style={{
          left: click ? "0rem" : "-100%",
        }}
      >
        <h3 className="mb-3 text-xl font-normal">Menu:</h3>
        <Link
          onClick={toggle}
          href="/"
          className=" hover:text-accent transition-all transition-ease-out duration-300 hover:scale-105 mb-5"
        >
          Home
        </Link>
        <Link
          onClick={toggle}
          href="/about"
          className=" hover:text-accent transition-all transition-ease-out duration-300 hover:scale-105 mb-5"
        >
          About
        </Link>
        <Link
          onClick={toggle}
          href="/categories/all"
          className=" hover:text-accent transition-all transition-ease-out duration-300 hover:scale-105 mb-5"
        >
          My blog
        </Link>
        <Link
          onClick={toggle}
          href="/contact"
          className="hover:text-accent transition-all transition-ease-out duration-300 hover:scale-105 mb-5"
        >
          Contact
        </Link>
        <h3 className="mb-3 text-xl font-normal pt-4 my-4 border-t-[1px] border-accent/30">
          Socials:
        </h3>
        <div className="md:hidden py-4 flex items-center justify-end">
          <a
            href={siteMetadata.pinterest}
            className="inline-block w-8 h-8 mr-4"
          >
            <PinterestIcon className="hover:scale-105" />
          </a>
          <a href={siteMetadata.github} className="inline-block w-8 h-8 mr-4">
            <GithubIcon />
          </a>
          <a href={siteMetadata.fable} className="inline-block w-8 h-8 mr-4">
            <FableIcon />
          </a>
          <a
            href={siteMetadata.goodreads}
            className="inline-block w-8 h-8 mr-4"
          >
            <GoodreadsIcon />
          </a>
          <a href={siteMetadata.linkedin} className="inline-block w-8 h-8">
            <LinkedinIcon />
          </a>
        </div>
      </nav>

      {/* LOGO */}
      <Logo />

      {/* MOBILE BURGER BUTTON */}
      <button className="inline-block md:hidden z-50" onClick={toggle}>
        <div className="w-6 cursor-pointer mr-4 transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-accent transition-all ease-in-out duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-accent transition-all ease-in-out duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-accent transition-all ease-in-out duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      {/* FULL SIZE NAV */}
      <nav className="w-[55%] p-4 capitalize items-stretch justify-around border-[1px] border-accent  border-opacity-25 border-b-0 border-t-0 hidden md:flex">
        <Link
          href="/"
          className=" hover:text-accent transition-all transition-ease-out duration-300 hover:scale-105 text-center"
        >
          Home
        </Link>
        <Link
          href="/about"
          className=" hover:text-accent transition-all transition-ease-out duration-300 hover:scale-105 text-center"
        >
          About
        </Link>
        <Link
          href="/categories/all"
          className=" hover:text-accent transition-all transition-ease-out duration-300 hover:scale-105 text-center"
        >
          My blog
        </Link>
        <Link
          href="/contact"
          className="hover:text-accent transition-all transition-ease-out duration-300 hover:scale-105 text-center"
        >
          Contact
        </Link>
      </nav>

      {/* SOCIALS */}
      <div className="hidden md:flex items-center justify-around">
        <a href={siteMetadata.pinterest} className="inline-block w-6 h-6 mr-4">
          <PinterestIcon className="hover:scale-105" />
        </a>
        <a href={siteMetadata.github} className="inline-block w-6 h-7 mr-4">
          <GithubIcon />
        </a>
        <a href={siteMetadata.fable} className="inline-block w-6 h-6 mr-4">
          <FableIcon />
        </a>
        <a href={siteMetadata.goodreads} className="inline-block mr-4">
          <GoodreadsIcon />
        </a>
        <a href={siteMetadata.linkedin} className="inline-block w-6 h-6">
          <LinkedinIcon />
        </a>
      </div>
    </header>
  );
};

export default Header;
