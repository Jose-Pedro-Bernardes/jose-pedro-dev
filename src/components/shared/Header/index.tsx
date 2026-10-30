import Image from "next/image";
import Link from "next/link";

export function Header1() {
  return (
    <header>
      <Link href="/">
        <Image src="/header/logoDark.png" alt="Logo" width={100} height={50} />
      </Link>
    </header>
  );
}
