import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => {
  return classNames.filter(Boolean).sort().join(" ");
};

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
