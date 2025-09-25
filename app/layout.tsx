import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import "./globals.css";
import GlobalAlert from "./Components/visual/GlobalAlert";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Servicio AT",
  description: "Servicio de administracion de la FES Acatlan",
  authors: [{ name: "FES Acatlán" }],
  creator: "Lino,Carlos,Axel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
//IO
