import React from "react";
import Link from "next/link";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={`
        "inline-block py-3 hover:scale-105 transition-all duration-200 ease",
        ${props.className}`}
    >
      #{name}
    </Link>
  );
};

export default Tag;
