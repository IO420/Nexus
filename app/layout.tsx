import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FallingSquares from "./Components/visual/FallingSquares/FallingSquares";
import WavesBackground from "./Components/visual/Wave/wavesBack";

import "./globals.css";

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
        <main>
          <FallingSquares />
          {children}
          <WavesBackground />
        </main>
        <Footer />
      </body>
    </html>
  );
}
//IO
