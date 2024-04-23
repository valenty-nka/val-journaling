import React from "react";
import Link from "next/link";
import { cx } from "@/src/utils";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1 hover:text-accent/40 transition-all duration-200 ease-in",
        props.className,
        active ? "text-accent font-semibold" : "text-accent/60"
      )}
    >
      {name}
    </Link>
  );
};

export default Category;
