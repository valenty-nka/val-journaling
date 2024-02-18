import Link from "next/link";
import Image from "next/image";
import logoBig from "@/public/big-logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <div>
        <Image src={logoBig} alt="logo" id="logo" />
      </div>
    </Link>
  );
};

export default Logo;
