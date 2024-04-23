import React from "react";
import Link from "next/link";
import { cx } from "@/src/utils";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1 sm:py-3 hover:scale-105 transition-all duration-200 ease sm:text-base text-sm",
        props.className
      )}
    >
      #{name}
    </Link>
  );
};

export default Tag;
