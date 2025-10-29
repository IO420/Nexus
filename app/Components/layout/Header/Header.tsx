"use client";
import Image from "next/image";
import header from "./Header.module.css";
import Link from "next/link";
import BarNavigation from "../BarNavigation/BarNavigation";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

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
          width={250}
          height={70}
        />
      </Link>
      <div className={header.yellowPart}></div>
      <div
        style={{
          display: "flex",
          width: "100%",
          maxHeight: "50%",
          alignItems: "end",
        }}
        className=""
      >
        {pathname !== "/" && <BarNavigation />}
      </div>
    </header>
  );
}

export default Header;
//IO
