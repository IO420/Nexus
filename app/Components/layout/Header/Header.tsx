import Image from "next/image";
import header from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <header>
      <Link
        href="https://www.unam.mx/"
        target="_blank"
        className={header.center}
      >
        <Image
          className={header.logo}
          src="/logo_fes.png"
          alt="Logo FES"
          width={200}
          height={50}
        />
      </Link>
      <div className={header.yellowPart}></div>
      <div className={header.cedetecContainer}>
        <Image
          src="/cedetec.jpg"
          alt="Image of CEDETEC"
          width={300}
          height={71}
        />
      </div>
    </header>
  );
}

export default Header;
//IO
