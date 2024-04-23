import Link from "next/link";
import Image from "next/image";
import logoBig from "@/public/big-logo.png";
import { cx } from "@/src/utils";

const Logo = ({ className, ...rest }) => {
  return (
    <Link href="/">
      <div
        className={cx("w-32 lg:w-36 self-center", {
          ...rest,
        })}
      >
        <Image
          src={logoBig}
          alt="ValJournaling logo"
          id="logo"
          sizes="33vw"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
