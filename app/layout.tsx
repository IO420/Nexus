import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "./Components/layout/Header/Header";
import Footer from "./Components/layout/Footer/Footer";

import "./globals.css";
import { ToastProvider } from "./Components/layout/ToastProvider";

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
      <body className={poppins.variable} suppressHydrationWarning>
        <ToastProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
//IO
