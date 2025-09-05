import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BarNavigation from "./Components/BarNavigation/BarNavigation";
import "./globals.css";
import WavesBackground from "./Components/wavesBack";

const poppins = Poppins({
  variable: "--font-poppins", // nombre de la variable CSS
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pesos que quieras usar
});

export const metadata: Metadata = {
  title: "Nexus CEDETEC",
  description: "Nexus CEDETEC - Frontend",
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
        <BarNavigation />
        <main>
          <div className="container">
            <div className="img"></div>
            {children}
          </div>
          <WavesBackground />
        </main>
        <Footer />
      </body>
    </html>
  );
}
//IO