"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  Image,
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);
  return (
    <div
      className="col-span-8 font-in prose prose-lg max-w-max prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:text-accent prose-blockquote:font-light prose-blockquote:not-italic
    prose-li:marker:text-accent
    prose-h2:font-normal prose-h2:text-accent prose-h3:font-normal prose-h3:text-accent
    prose-h4:font-normal prose-h4:text-accent
    prose-strong:text-accent
    prose-a:text-accent"
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
