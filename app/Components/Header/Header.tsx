import Image from "next/image";
import "./Header.css";
import Link from "next/link";

function Header() {
    return (
        <header>
            <Link href="https://www.unam.mx/" className="center">
                <Image
                    className="logo"
                    src="/logo_fes.png"
                    alt="Logo FES"
                    width={200}
                    height={50}
                />
            </Link>
            <div className="yellowPart"></div>
            <div className="cedetecContainer">
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