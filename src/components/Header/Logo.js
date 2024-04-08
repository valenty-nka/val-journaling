import Link from "next/link";
import Image from "next/image";
import logoBig from "@/public/big-logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <div className="w-36">
        <Image src={logoBig} alt="ValJournaling logo" id="logo" />
      </div>
    </Link>
  );
};

export default Logo;
